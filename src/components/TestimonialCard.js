import styled from 'styled-components';
import theme from '../ui/theme';
import { CardTitle, Paragraph } from '../ui/typography';
import Rating from './Rating';

const Card = styled.article`
  background-color: ${theme.colors.secondary.peach};
  border-radius: 16px;
  position: relative;
  padding: 40px 14px 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  margin: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const TestimonialCard = ({ imageSrc, name, review, rating }) => {
  return (
    <Card>
      <Image src={imageSrc} alt={name} />
      <Paragraph style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        &#x201C;{review}&#x201D;
      </Paragraph>
      <hr
        style={{
          borderTop: `0.5px solid ${theme.colors.primary.green}`,
          width: '100%',
          marginTop: 12,
        }}
      />
      <CardTitle>{name}</CardTitle>
      <Rating value={rating} style={{ marginTop: 6 }} />
    </Card>
  );
};

export default TestimonialCard;
