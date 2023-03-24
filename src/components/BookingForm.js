import { useState } from 'react';

const BookingForm = ({ availableTimes, onChangeData, onSubmit }) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, guests, occasion });
  };

  const handleChangeData = (e) => {
    setDate(e.target.value);
    onChangeData(e.target.value);
  };

  return (
    <form
      style={{ display: 'grid', maxWidth: 200, gap: 20 }}
      onSubmit={handleSubmit}
    >
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        id='res-date'
        tabIndex='0'
        value={date}
        onChange={handleChangeData}
      />
      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time'
        tabIndex='1'
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        tabIndex='2'
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        tabIndex='3'
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type='submit' tabIndex='4' value='Make Your reservation' />
    </form>
  );
};

export default BookingForm;
