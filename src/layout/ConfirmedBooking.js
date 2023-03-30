import styled from 'styled-components';
import checkIcon from '../assets/icon/check_circle.svg';
import theme from '../ui/theme';
import { H1 } from '../ui/typography';

const StyledSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConfirmedBooking = () => {
  return (
    <StyledSection>
      <img
        src={checkIcon}
        alt='check icon'
        style={{ color: theme.colors.primary.yellow }}
      />
      <H1 color={theme.colors.primary.green}>Thank you for reservation!</H1>
    </StyledSection>
  );
};

export default ConfirmedBooking;
