import bruschettaImage from '../assets/bruschetta.png';
import greekSaladImage from '../assets/greek-salad.png';
import lemonDessertImage from '../assets/lemon-dessert.png';
import Button from '../ui/buttons';
import { RowSpaceBetween } from '../ui/layout';
import { H1 } from '../ui/typography';
import HighlightCard from './HighlightCard';

const highlights = [
  {
    title: 'Greek salad',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    imageSrc: greekSaladImage,
  },
  {
    title: 'Bruschetta',
    price: '5.99',
    description:
      'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil',
    imageSrc: bruschettaImage,
  },
  {
    title: 'Lemon dessert',
    price: '4.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is an authentic as can be imagined.',
    imageSrc: lemonDessertImage,
  },
];

const Highlights = () => {
  return (
    <section style={{ marginTop: 120, marginBottom: 80 }}>
      <RowSpaceBetween>
        <H1>This week specials!</H1>
        <Button
          label='Online menu'
          onClick={() => console.log('Order online')}
        />
      </RowSpaceBetween>
      <RowSpaceBetween style={{ marginTop: 24, alignItems: 'stretch' }}>
        {highlights.map((el) => (
          <HighlightCard key={el.title} {...el} />
        ))}
      </RowSpaceBetween>
    </section>
  );
};

export default Highlights;
