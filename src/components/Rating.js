import starFilled from '../assets/icon/star-filled.svg';
import starHalf from '../assets/icon/star-half.svg';
import starEmpty from '../assets/icon/star.svg';

const Rating = ({ value, style }) => {
  const getIcon = (idx) => {
    if (idx + 1 <= value) {
      return starFilled;
    } else if (value > idx) {
      return starHalf;
    } else {
      return starEmpty;
    }
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', gap: 2, ...style }}
    >
      {[...Array(5)].map((_, idx) => (
        <img src={getIcon(idx)} alt='star' />
      ))}
    </div>
  );
};

export default Rating;
