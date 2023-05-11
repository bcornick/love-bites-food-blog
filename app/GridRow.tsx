import shuffleArray from '@/helpers/shuffleArray';
import GridItem from './GridItem';
import styles from './GridRow.module.scss';
import MealItemType from '@/app';

interface GridRowProps {
  imageArray: MealItemType[];
}

const GridRow = ({ imageArray }: GridRowProps) => {
  const shuffledArray = shuffleArray(imageArray);

  return (
    <div className={styles.rowContainer}>
      {shuffledArray.map((item, i) => (
        <GridItem
          item={item}
          key={i}
        />
      ))}
    </div>
  );
};

export default GridRow;
