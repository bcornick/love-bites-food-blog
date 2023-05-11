'use client';

import Image from 'next/image';
import {
  OrientationContextType,
  useOrientationContext,
} from './context/orientation';
import { useState } from 'react';
import styles from './GridItem.module.scss';
import MealItemType from '@/app';

interface GridItemProps {
  item: MealItemType;
}

const GridItem = ({ item }: GridItemProps) => {
  const { orientation } = useOrientationContext() as OrientationContextType;
  const [showHidden, setShowHidden] = useState(false);

  return (
    <div
      className={
        orientation
          ? `${styles.itemBox} ${styles.vertical}`
          : `${styles.itemBox} ${styles.horizontal}`
      }
      onClick={() => {
        setShowHidden(!showHidden);
      }}>
      <Image
        className={styles.image}
        src={item.imgUrl}
        alt={item.imgUrl}
        fill
        sizes="200px"
      />
      <div
        className={
          showHidden ? styles.info : `${styles.info} ${styles.hidden}`
        }>
        <h4 className={styles.infoItem}>
          <span>Dish: </span>
          {item.dish}
        </h4>
        <h4 className={styles.infoItem}>
          <span>Location: </span>
          {item.location}
        </h4>
        <h4 className={styles.infoItem}>
          <span>Date: </span>
          {item.date}
        </h4>
      </div>
    </div>
  );
};

export default GridItem;
