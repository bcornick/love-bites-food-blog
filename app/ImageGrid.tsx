'use client';

import GridRow from './GridRow';
import InfiniteLooper from './InfiniteLooper';
import MealItemType from '@/app';
import {
  OrientationContextType,
  useOrientationContext,
} from './context/orientation';
import { WithId } from 'mongodb';
import styles from './ImageGrid.module.scss';

interface ImageGridProps {
  imageArray: MealItemType[];
}

const NUM_ROWS = 8;

const ImageGrid = ({ imageArray }: ImageGridProps) => {
  const { orientation } = useOrientationContext() as OrientationContextType;

  return (
    <div
      className={
        orientation
          ? `${styles.gridContainer} ${styles.vertical}`
          : `${styles.gridContainer} ${styles.horizontal}`
      }>
      {Array.from({ length: NUM_ROWS }, (v, i) => i).map(i => (
        <InfiniteLooper
          key={i}
          speed={i % 2 === 0 ? -2 : 2}>
          <GridRow imageArray={imageArray} />
        </InfiniteLooper>
      ))}
    </div>
  );
};

export default ImageGrid;
