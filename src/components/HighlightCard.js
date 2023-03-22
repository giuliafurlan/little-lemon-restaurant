import { Link } from 'react-router-dom';
import styled from 'styled-components';
import deliveryIcon from '../assets/icon/delivery.svg';
import { RowSpaceBetween } from '../ui/layout';
import theme from '../ui/theme';
import {
  CardTitle,
  HighlightText,
  LeadText,
  Paragraph,
} from '../ui/typography';

const Card = styled.article`
  background-color: ${theme.colors.highlight.light};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  flex-grow: 1;
  padding: 36px 14px 19px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100%;
`;

const HighlightCard = ({ imageSrc, title, price, description }) => {
  return (
    <Card>
      <img src={imageSrc} alt={title} />
      <Description>
        <RowSpaceBetween>
          <CardTitle>{title}</CardTitle>
          <HighlightText color={theme.colors.secondary.coral}>
            ${price}
          </HighlightText>
        </RowSpaceBetween>
        <Paragraph style={{ marginTop: 24, flexGrow: 1 }}>
          {description}
        </Paragraph>
        <div style={{ marginTop: 16, display: 'flex' }}>
          <Link to={'in-progress'}>
            <LeadText>Order a delivery</LeadText>
          </Link>
          <img
            src={deliveryIcon}
            alt='delivery icon'
            width={25}
            height={25}
            style={{ marginLeft: 20 }}
          />
        </div>
      </Description>
    </Card>
  );
};

export default HighlightCard;
