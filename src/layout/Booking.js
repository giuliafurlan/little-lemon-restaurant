import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api/api';
import BookingForm from '../components/BookingForm';
import { H1 } from '../ui/typography';

const reducer = (state, action) => {
  if (action.type === 'DATE_CHANGED') {
    return fetchAPI(action.value);
  }
  return state;
};

const Booking = () => {
  const navigate = useNavigate();
  const initializeTimes = (date) => {
    return fetchAPI(date);
  };

  const [availableTimes, dispatch] = useReducer(
    reducer,
    new Date(),
    initializeTimes
  );

  const updateTimes = (newData) => {
    dispatch({ type: 'DATE_CHANGED', value: new Date(newData) });
  };

  const handleSubmit = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate('/booking-confirmed');
    }
  };

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
