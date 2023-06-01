'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingBox.module.scss';

const steps = [
  'Preparing food...',
  'Making spicy mayo...',
  'Removing gluten...',
  'Distributing cheese tax...',
];

const LoadingBox = () => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideLoader(true);
    }, 9000);
  }, []);

  return (
    <div
      className={styles.overlay}
      style={hideLoader ? { display: 'none' } : { display: 'block' }}>
      <div className={styles.loadingBox}>
        <div className={styles.allSteps}>
          {steps.map((step, i) => (
            <h2
              key={i}
              className={styles.step}>
              {step}
            </h2>
          ))}
        </div>
        <div className={styles.progress}>
          <div className={styles.color}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBox;
