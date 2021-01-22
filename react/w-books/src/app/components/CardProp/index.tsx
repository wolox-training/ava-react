import clsx from 'clsx';
import React from 'react'

import styles from './styles.module.scss';

interface CardPropProps {
  propName: string;
  value: string;
  className?: string;
  isSimple?: boolean;
}

export default function CardProp({ className, propName, value, isSimple }: CardPropProps) {
  return (
    <div className={
      clsx(styles.cardProp, className, {
        [styles.simple]: isSimple
      })
    }>
      <b className={styles.cardPropName}>{propName}</b>
      <span className={styles.cardPropDescription}>
        {value}
      </span>
    </div>
  )
}
