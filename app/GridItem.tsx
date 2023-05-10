'use client';

import Image from 'next/image';
import {
  OrientationContextType,
  useOrientationContext,
} from './context/orientation';
import { vGridItem, hGridItem } from '@/helpers/rotationStyles';
import styles from './GridItem.module.scss';

interface GridItemProps {
  imageSrc: string;
}

const GridItem = ({ imageSrc }: GridItemProps) => {
  const { orientation } = useOrientationContext() as OrientationContextType;

  return (
    <div className={styles.itemBox}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt={imageSrc}
        fill
        sizes="12vw"
        style={orientation ? vGridItem : hGridItem}
      />
    </div>
  );
};

export default GridItem;
