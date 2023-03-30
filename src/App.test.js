import { fireEvent, render, screen } from '@testing-library/react';
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

  const dataInput = screen.getByLabelText(/Choose date/);
  fireEvent.change(dataInput, { target: { value: '2023-03-24' } });

  const timeInput = screen.getByLabelText(/18:00/);
  fireEvent.click(timeInput);

  const guestsInput = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestsInput, { target: { value: 3 } });

  const occasionInput = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(handleSubmit).toBeCalledWith({
    date: '2023-03-24',
    time: '18:00',
    guests: '3',
    occasion: 'Anniversary',
  });
});
