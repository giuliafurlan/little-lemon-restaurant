import theme from './theme';
import { LeadText } from './typography';

const ButtonStyle = styled.button`
  background-color: ${theme.colors.primary.yellow};
  padding: 16px 32px;
`;

const Button = ({ label, onClick, props }) => {
  return (
    <ButtonStyle onClick={onClick} {...props}>
      <LeadText>{label}</LeadText>
    </ButtonStyle>
  );
};

export default Button;
