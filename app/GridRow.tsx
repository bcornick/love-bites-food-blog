import shuffleArray from '@/helpers/shuffleArray';
import GridItem from './GridItem';
import styles from './GridRow.module.scss';

interface GridRowProps {
  imageArray: string[];
}

const GridRow = ({ imageArray }: GridRowProps) => {
  const shuffledArray = shuffleArray(imageArray);

  return (
    <div className={styles.rowContainer}>
      {shuffledArray.map((image, i) => (
        <GridItem
          imageSrc={image}
          key={i}
        />
      ))}
    </div>
  );
};

export default GridRow;
