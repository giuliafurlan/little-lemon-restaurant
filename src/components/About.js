import styled from 'styled-components';
import aboutUsImg1 from '../assets/about_us1.png';
import aboutUsImg2 from '../assets/about_us2.png';
import theme from '../ui/theme';
import { H1, H2, Paragraph } from '../ui/typography';

const Section = styled.section`
  padding-top: 85px;
  padding-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image1 = styled.img`
  position: absolute;
  z-index: 1;
  height: 100%;
  top: 100px;
  left: 100px;
`;
const Image2 = styled.img`
  position: absolute;
  z-index: 2;
  height: 100%;
  top: 0;
  right: 0;
`;

const About = () => {
  return (
    <Section>
      <div>
        <H1 color={theme.colors.primary.yellow}>Little Lemon</H1>
        <H2 color={theme.colors.primary.green}>Chicago</H2>

        <Paragraph
          color={theme.colors.highlight.dark}
          style={{ marginTop: 64 }}
        >
          Little Lemon is a charming neighbourhood bistro that serves simple
          food and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials
        </Paragraph>
      </div>
      <ImageContainer>
        <Image1 src={aboutUsImg1} alt='about us' />
        <Image2 src={aboutUsImg2} alt='about us' />
      </ImageContainer>
    </Section>
  );
};

export default About;
