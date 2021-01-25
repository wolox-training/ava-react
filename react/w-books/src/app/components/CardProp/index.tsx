import clsx from 'clsx';
import React from 'react'

import styles from './styles.module.scss';

export interface iCardProp {
  keepVisibleSimple?: boolean;
  propName: string;
  value: string;
}

interface CardPropProps extends iCardProp {
  className?: string;
  isSimple?: boolean;
}

export default function CardProp({ className, propName, value, isSimple, keepVisibleSimple }: CardPropProps) {
  return (
    <div className={
      clsx(styles.cardProp, className, {
        [styles.simple]: isSimple,
        [styles.occult] : (isSimple && !keepVisibleSimple)
      })
    }>
      <b className={styles.cardPropName}>{propName}</b>
      <span className={styles.cardPropDescription}>
        {value}
      </span>
    </div>
  )
}
