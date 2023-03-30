import moment from 'moment';
import { useState } from 'react';
import Button from '../ui/buttons';
import theme from '../ui/theme';

const BookingForm = ({ availableTimes, onChangeData, onSubmit }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
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
      style={{ display: 'grid', maxWidth: 400, gap: 20, marginBottom: 80 }}
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
      <fieldset style={{ border: 'none', padding: 0 }}>
        <legend style={{ marginBottom: 20 }}>Choose time</legend>
        <div
          style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((t) => (
            <div
              key={t}
              style={{
                padding: '4px 16px',
                background:
                  time === t
                    ? theme.colors.primary.yellow
                    : theme.colors.neutral.lightGrey,
                borderRadius: 16,
              }}
            >
              <input type='radio' id={t} name='time' value={t} hidden />
              <label htmlFor={t} style={{ cursor: 'pointer' }}>
                {t}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

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
      <Button type='submit' tabIndex='4' label='Make Your reservation' />
    </form>
  );
};

export default BookingForm;
