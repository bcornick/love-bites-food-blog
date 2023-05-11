'use client';

import Image from 'next/image';
import { architects_daughter } from './fonts';
import brett from '../public/brett.png';
import emma from '../public/emma.png';
import {
  OrientationContextType,
  useOrientationContext,
} from './context/orientation';
import styles from './CenterPanel.module.scss';

const CenterPanel = () => {
  const { orientation, setOrientation } =
    useOrientationContext() as OrientationContextType;

  const handleClick = () => {
    setOrientation(!orientation);
  };

  return (
    <div className={styles.glassBox}>
      <h1 className={`${architects_daughter.className} ${styles.title}`}>
        Love Bites
      </h1>
      <h4 className={styles.subHead}>
        A living gallery of our relationship, as told through the food we eat. I
        love you bb!
      </h4>
      <div className={styles.portraits}>
        <div className={styles.portraitBox}>
          <Image
            className={styles.portrait}
            src={brett}
            alt="brett"
            fill
          />
        </div>
        <div
          className={styles.heart}
          onClick={handleClick}>
          <span>💛</span>
        </div>
        <div className={styles.portraitBox}>
          <Image
            className={styles.portrait}
            src={emma}
            alt="emma"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default CenterPanel;
