'use client';

import { useRef, useEffect } from 'react';
import styles from './InfiniteLooper.module.scss';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

interface InfiniteLooperProps {
  speed: number;
  children: React.ReactNode;
}

const looperInstances = 10; // can be decreased as gallery size becomes larger

const InfiniteLooper = ({ speed, children }: InfiniteLooperProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, v => `${wrap(0, -3000, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * speed * (delta / 1200);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    const height = document.getElementsByTagName('main')[0].offsetHeight;
    window.scrollTo(0, height / 2);
  }, []);

  return (
    <motion.div
      className={styles.looper}
      style={{ x }}>
      <div className={styles.innerList}>
        {[...Array(looperInstances)].map((_, i) => (
          <div
            key={i}
            className={styles.listInstance}>
            {children}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default InfiniteLooper;
