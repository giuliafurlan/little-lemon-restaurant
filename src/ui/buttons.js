import styled from 'styled-components';
import theme from './theme';
import { LeadText } from './typography';

const ButtonStyle = styled.button`
  background-color: ${theme.colors.primary.yellow};
  padding: 16px 32px;
  border-radius: 16px;
  border: none;
  max-height: 53px;
`;

const Button = ({ label, onClick, style, props }) => {
  return (
    <ButtonStyle onClick={onClick} style={style} {...props}>
      <LeadText>{label}</LeadText>
    </ButtonStyle>
  );
};

export default Button;
