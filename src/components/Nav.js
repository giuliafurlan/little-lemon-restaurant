import { Link } from 'react-router-dom';
import theme from '../ui/theme';
import { LeadText } from '../ui/typography';

const menuItems = [
  { label: 'Home', url: '/' },
  { label: 'About', url: 'in-progress' },
  { label: 'Menu', url: 'in-progress' },
  { label: 'Reservation', url: 'booking' },
  { label: 'Order Online', url: 'in-progress' },
  { label: 'Login', url: 'in-progress' },
];

const Nav = ({ color = theme.colors.highlight.dark }) => {
  return (
    <nav>
      <ul>
        {menuItems.map(({ label, url }) => (
          <li key={label}>
            <Link to={url}>
              <LeadText color={color}>{label}</LeadText>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
