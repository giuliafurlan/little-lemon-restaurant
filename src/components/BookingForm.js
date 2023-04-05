import { Field, Form, Formik } from 'formik';
import moment from 'moment';
import { useState } from 'react';
import styled from 'styled-components';
import { date, number, object, string } from 'yup';
import Button from '../ui/buttons';
import { RowSpaceBetween } from '../ui/layout';
import theme from '../ui/theme';
import { CardTitle, H2, HighlightText, Paragraph } from '../ui/typography';
import Calendar from './Calendar';

const GuestsButton = styled.button`
  border: none;
  border-radius: 16px;
  background-color: ${theme.colors.highlight.light};
  cursor: pointer;
  padding: 0 8px;
`;

const validationSchema = object().shape({
  date: date().required('Please select a date'),
  time: string().required('Please select a time'),
  guests: number()
    .min(1, 'We cannot reserve a table for less than one person')
    .required(),
  occasion: string(),
});
const BookingForm = ({ availableTimes, onChangeData, onSubmit }) => {
  const [showCalendar, setShowCalendar] = useState(true);

  const handleSubmit = async (values) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{
        date: undefined,
        time: undefined,
        guests: 1,
        occasion: undefined,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form style={{ display: 'grid', gap: 20, marginBottom: 80 }}>
            <Field name='date'>
              {({ field, meta }) => (
                <>
                  <RowSpaceBetween>
                    <label htmlFor='res-date'>
                      <H2 color={theme.colors.primary.green}>Choose a date:</H2>
                    </label>
                    {field.value && (
                      <div
                        style={{
                          padding: '8px 16px',
                          background: theme.colors.highlight.light,
                          borderRadius: 16,
                        }}
                      >
                        <CardTitle
                          onClick={() => setShowCalendar((prev) => !prev)}
                          style={{ cursor: 'pointer' }}
                        >
                          {moment(field.value).format('ddd, D MMM')}
                        </CardTitle>
                      </div>
                    )}
                  </RowSpaceBetween>
                  {showCalendar && (
                    <div style={{ margin: '20px 0' }}>
                      <Calendar
                        selectedDate={values.date}
                        onClickDate={(date) => {
                          setFieldValue(field.name, date);
                          onChangeData(date);
                          setShowCalendar(false);
                        }}
                      />
                    </div>
                  )}
                  {meta.touched && meta.error && (
                    <HighlightText color={theme.colors.secondary.coral}>
                      {meta.error}
                    </HighlightText>
                  )}
                </>
              )}
            </Field>
            <Field name='time'>
              {({ field, meta }) => (
                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                  <legend style={{ padding: 0 }}>
                    <H2 color={theme.colors.primary.green}>Choose a time:</H2>
                  </legend>
                  <div
                    style={{
                      display: 'flex',
                      gap: 20,
                      flexWrap: 'wrap',
                      padding: 20,
                    }}
                  >
                    {availableTimes.map((t) => (
                      <div
                        key={t}
                        style={{
                          padding: '4px 16px',
                          background:
                            field.value === t
                              ? theme.colors.primary.yellow
                              : theme.colors.highlight.light,
                          borderRadius: 16,
                        }}
                      >
                        <input type='radio' id={t} hidden {...field} />
                        <label
                          htmlFor={t}
                          style={{ cursor: 'pointer' }}
                          onClick={() => setFieldValue(field.name, t)}
                        >
                          <Paragraph>{t}</Paragraph>
                        </label>
                      </div>
                    ))}
                  </div>
                  {meta.touched && meta.error && (
                    <HighlightText color={theme.colors.secondary.coral}>
                      {meta.error}
                    </HighlightText>
                  )}
                </fieldset>
              )}
            </Field>
            <Field name='guests'>
              {({ field, meta }) => (
                <>
                  <RowSpaceBetween>
                    <label htmlFor='guests'>
                      <H2 color={theme.colors.primary.green}>
                        Number of guests:
                      </H2>
                    </label>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <GuestsButton
                        type='button'
                        aria-label='remove guests'
                        onClick={() =>
                          setFieldValue(field.name, field.value - 1)
                        }
                      >
                        <HighlightText> - </HighlightText>
                      </GuestsButton>
                      <Paragraph>{values.guests}</Paragraph>
                      <GuestsButton
                        type='button'
                        data-testid='guests_plus_button'
                        aria-label='add guests'
                        onClick={() =>
                          setFieldValue(field.name, field.value + 1)
                        }
                      >
                        <HighlightText> + </HighlightText>
                      </GuestsButton>
                    </div>
                  </RowSpaceBetween>
                  {meta.error && (
                    <HighlightText color={theme.colors.secondary.coral}>
                      {meta.error}
                    </HighlightText>
                  )}
                </>
              )}
            </Field>
            <Field name='occasion'>
              {({ field, meta }) => (
                <>
                  <RowSpaceBetween>
                    <label htmlFor='occasion'>
                      <H2 color={theme.colors.primary.green}>Occasion</H2>
                    </label>
                    <select
                      id='occasion'
                      tabIndex='3'
                      {...field}
                      style={{
                        padding: '8px 24px',
                        borderRadius: 16,
                        border: 'none',
                        backgroundColor: theme.colors.highlight.light,
                      }}
                    >
                      <option value={undefined}>Select the occasion</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                    </select>
                  </RowSpaceBetween>
                  {meta.touched && meta.error && (
                    <HighlightText color={theme.colors.secondary.coral}>
                      {meta.error}
                    </HighlightText>
                  )}
                </>
              )}
            </Field>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: 40,
              }}
            >
              <Button
                type='submit'
                tabIndex='4'
                label='Make Your reservation'
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BookingForm;
