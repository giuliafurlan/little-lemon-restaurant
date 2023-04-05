import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import moment from 'moment';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import Booking from './layout/Booking';

test('Renders the Booking heading', () => {
  render(<Booking />, { wrapper: BrowserRouter });
  const headingElement = screen.getByText('Reserve a table');
  expect(headingElement).toBeInTheDocument();
});

test('Submit the BookingForm', async () => {
  const handleSubmit = jest.fn();
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  render(
    <BookingForm
      onSubmit={handleSubmit}
      onChangeData={jest.fn()}
      availableTimes={availableTimes}
    />
  );

  const dataInput = screen.getByText(moment().date());
  fireEvent.click(dataInput);

  const timeInput = screen.getByLabelText(/18:00/);
  fireEvent.click(timeInput);

  const guestsPlusButton = screen.getByTestId('guests_plus_button');
  fireEvent.click(guestsPlusButton);
  fireEvent.click(guestsPlusButton);
  fireEvent.click(guestsPlusButton);

  const occasionInput = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });

  const submitButton = screen.getByText(/Make Your reservation/);
  fireEvent.click(submitButton);

  await waitFor(() =>
    expect(handleSubmit).toBeCalledWith({
      date: moment().format(),
      time: '18:00',
      guests: '3',
      occasion: 'Anniversary',
    })
  );
});

test('Submit without filling BookingForm', async () => {
  const handleSubmit = jest.fn();
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  render(
    <BookingForm
      onSubmit={handleSubmit}
      onChangeData={jest.fn()}
      availableTimes={availableTimes}
    />
  );
  const user = userEvent.setup();

  await user.click(
    screen.getByRole('button', { name: /Make Your reservation/ })
  );

  screen.getByText(/Please select a date/);
  screen.getByText(/Please select a time/);

  await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
});

test('Negative number of guests BookingForm', async () => {
  const handleSubmit = jest.fn();
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  render(
    <BookingForm
      onSubmit={handleSubmit}
      onChangeData={jest.fn()}
      availableTimes={availableTimes}
    />
  );
  const user = userEvent.setup();

  await user.click(screen.getByRole('button', { name: /-/ }));

  screen.getByText(/We cannot reserve a table for less than one person/);
});
