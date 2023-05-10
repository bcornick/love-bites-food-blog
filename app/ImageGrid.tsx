'use client';

import GridRow from './GridRow';
import InfiniteLooper from './InfiniteLooper';
import styles from './ImageGrid.module.scss';
import { hGrid, vGrid } from '@/helpers/rotationStyles';
import {
  OrientationContextType,
  useOrientationContext,
} from './context/orientation';

interface ImageGridProps {
  imageArray: string[];
}

const NUM_ROWS = 8;

const ImageGrid = ({ imageArray }: ImageGridProps) => {
  const { orientation } = useOrientationContext() as OrientationContextType;

  return (
    <div
      className={styles.gridContainer}
      style={orientation ? vGrid : hGrid}>
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
