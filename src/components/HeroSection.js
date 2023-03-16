import styled from 'styled-components';
import heroImage from '../assets/hero.png';
import Button from '../ui/buttons';
import theme from '../ui/theme';
import { H1, H2, Paragraph } from '../ui/typography';

const HeroSectionStyled = styled.section`
  background-color: ${theme.colors.primary.green};
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 370px;
  padding-top: 50px;
`;

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <div style={{ paddingTop: 15 }}>
        <H1 color={theme.colors.primary.yellow}>Little Lemon</H1>
        <H2 color={theme.colors.primary.white}>Chicago</H2>

        <Paragraph color={theme.colors.primary.white} style={{ marginTop: 20 }}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </Paragraph>
        <Button
          label='Reserve a table'
          onClick={() => console.log('Reserve a table')}
          style={{ marginTop: 48 }}
        />
      </div>

      <img src={heroImage} alt='Restaurant' style={{ justifySelf: 'end' }} />
    </HeroSectionStyled>
  );
};

export default HeroSection;
