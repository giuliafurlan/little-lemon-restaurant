import { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { H1 } from '../ui/typography';

const reducer = (state, action) => {
  return state;
};

const Booking = () => {
  const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  const updateTimes = (newData) => {
    dispatch(newData);
  };

  const handleSubmit = () => {};

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <H1>Reserve a table</H1>
      <BookingForm
        availableTimes={availableTimes}
        onChangeData={updateTimes}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default Booking;
