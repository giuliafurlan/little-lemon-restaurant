import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchAPI, submitAPI } from '../api/api';
import image1Src from '../assets/about_us2.png';
import image2Src from '../assets/restaurant.png';
import BookingForm from '../components/BookingForm';
import { H1 } from '../ui/typography';

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 150px;
  margin: 40px 0 80px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;
`;

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
    <Container>
      <div>
        <H1 style={{ marginBottom: 30 }}>Reserve a table</H1>
        <BookingForm
          availableTimes={availableTimes}
          onChangeData={updateTimes}
          onSubmit={handleSubmit}
        />
      </div>

      <ImageContainer>
        <img src={image1Src} />
        <img src={image2Src} />
      </ImageContainer>
    </Container>
  );
};

export default Booking;
