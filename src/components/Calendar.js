import moment from 'moment';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import theme from '../ui/theme';
import { CardTitle, HighlightText, Paragraph } from '../ui/typography';

const EmptyDay = styled.div`
  background: rgba(217, 217, 217, 0.25);
  border-radius: 16px;
  justify-self: center;
  padding: 12px;
`;

const Day = styled.div`
  background: ${(props) =>
    props.selectedDate
      ? theme.colors.primary.yellow
      : theme.colors.neutral.lightGrey};
  border-radius: 16px;
  justify-self: center;
  padding: 4px 10px;
  cursor: pointer;
`;

const RoundedButton = styled.button`
  border: none;
  border-radius: 16px;
  background-color: ${theme.colors.highlight.light};
  cursor: pointer;
  padding: 0 8px;
`;

const Calendar = ({ selectedDate, onClickDate }) => {
  const [currentMonth, setCurrentMonth] = useState(moment(selectedDate));

  const previousMonth = () => {
    setCurrentMonth((current) => moment(current).subtract(1, 'month'));
    console.log('previousMonth', currentMonth.format());
  };

  const nextMonth = () => {
    setCurrentMonth((current) => moment(current).add(1, 'month'));
  };

  const generatedCalendar = useMemo(() => {
    const firstDayOfMonth = moment(currentMonth).startOf('month').format('d');
    const daysInMonth = currentMonth.daysInMonth();

    let days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<EmptyDay key={`pm-empty-${i}`}></EmptyDay>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <Day
          key={i}
          onClick={() => onClickDate(moment(currentMonth).date(i))}
          selectedDate={
            selectedDate &&
            moment(currentMonth).date(i).isSame(selectedDate, 'day')
          }
        >
          <HighlightText color={theme.colors.primary.green}>{i}</HighlightText>
        </Day>
      );
    }

    const missingEmptyDays = 7 - (days.length % 7);
    if (missingEmptyDays > 0) {
      for (let i = 0; i < missingEmptyDays; i++) {
        days.push(<EmptyDay key={`nm-empty-${i}`}></EmptyDay>);
      }
    }

    return days;
  }, [currentMonth, onClickDate, selectedDate]);

  const weekDaysNames = moment.weekdaysShort(true);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardTitle>{currentMonth.format('MMMM YYYY')}</CardTitle>
        <div style={{ display: 'flex', gap: 10 }}>
          <RoundedButton type='button' onClick={previousMonth}>
            &#60;
          </RoundedButton>
          <RoundedButton type='button' onClick={nextMonth}>
            &#62;
          </RoundedButton>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7,1fr)',
          rowGap: 20,
          marginTop: 20,
        }}
      >
        {weekDaysNames.map((d) => (
          <Paragraph key={d} style={{ justifySelf: 'center' }}>
            {d}
          </Paragraph>
        ))}
        {generatedCalendar}
      </div>
    </div>
  );
};

export default Calendar;
