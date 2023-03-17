import theme from '../ui/theme';
import { LeadText } from '../ui/typography';

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Menu', href: '#' },
  { label: 'Reservation', href: '#' },
  { label: 'Order Online', href: '#' },
  { label: 'Login', href: '#' },
];

const Nav = ({ color = theme.colors.highlight.dark }) => {
  return (
    <nav>
      <ul>
        {menuItems.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>
              <LeadText color={color}>{label}</LeadText>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
