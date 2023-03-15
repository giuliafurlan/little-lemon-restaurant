import logo from '../assets/footer-logo.png';
import theme from '../ui/theme';
import { CardTitle, Paragraph } from '../ui/typography';
import Nav from './Nav';

const Footer = () => {
  const style = {
    backgroudColor: theme.colors.primary.green,
  };

  return (
    <footer style={{ backgroundColor: theme.colors.primary.green }}>
      <img src={logo} alt='Footer Image'></img>
      <div>
        <CardTitle color={theme.colors.primary.yellow}>
          Doormat Navigation
        </CardTitle>
        <Nav color={theme.colors.secondary.peach} />
      </div>
      <div>
        <CardTitle color={theme.colors.primary.yellow}>Contacts</CardTitle>
        <address>
          <Paragraph color={theme.colors.secondary.peach}>
            111 S Michigan Ave, Chicago, IL 60603, USA
          </Paragraph>
          <Paragraph color={theme.colors.secondary.peach}>
            (321) 12345678987
          </Paragraph>
          <Paragraph color={theme.colors.secondary.peach}>
            info@littlelemon.com
          </Paragraph>
        </address>
      </div>

      <div>
        <CardTitle color={theme.colors.primary.yellow}>
          Social Media Links
        </CardTitle>
        <Paragraph color={theme.colors.secondary.peach}>Facebook</Paragraph>
        <Paragraph color={theme.colors.secondary.peach}>Twitter</Paragraph>
        <Paragraph color={theme.colors.secondary.peach}>Instagram</Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
