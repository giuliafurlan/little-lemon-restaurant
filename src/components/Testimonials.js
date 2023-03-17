import styled from 'styled-components';
import aliceImg from '../assets/alice.png';
import luigiImg from '../assets/luigi.png';
import paulImg from '../assets/paul.png';
import rachelImg from '../assets/rachel.png';
import theme from '../ui/theme';
import { H1 } from '../ui/typography';
import TestimonialCard from './TestimonialCard';

const TestimonialsStyled = styled.section`
  background-color: ${theme.colors.highlight.light};
  padding-top: 70px;
  padding-bottom: 130px;
`;

const CenterdH1 = styled(H1)`
  display: flex;
  justify-content: center;
`;

const testimonialsList = [
  {
    imageSrc: rachelImg,
    name: 'Rachel',
    review:
      'Authentic and delicious Mediterranean food in a cozy atmosphere. A must-visit spot in Chicago.',
    rating: 4.5,
  },
  {
    imageSrc: luigiImg,
    name: 'Luigi',
    review:
      'Excellent Mediterranean cuisine with fresh ingredients and great flavours.',
    rating: 5,
  },
  {
    imageSrc: aliceImg,
    name: 'Alice',
    review:
      'The greek salad was amazing and the service was top-notch. Highly recommend.',
    rating: 5,
  },
  {
    imageSrc: paulImg,
    name: 'Paul',
    review:
      'Amazing hummus and falafel. Friendly staff and great service. Will definitely come back!',
    rating: 4.5,
  },
];

const Testimonials = () => {
  return (
    <TestimonialsStyled>
      <CenterdH1>Testimonials</CenterdH1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 30,
          marginTop: 40,
        }}
      >
        {testimonialsList.map((el) => (
          <TestimonialCard key={el.name} {...el} />
        ))}
      </div>
    </TestimonialsStyled>
  );
};

export default Testimonials;
