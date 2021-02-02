import clsx from 'clsx';
import React from 'react'
import Card from '~components/Card';

import styles from './styles.module.scss';

export interface iCardProperty {
  keepVisibleSimple?: boolean;
  propName: string;
  value: string;
}

interface CardPropertyProps extends iCardProperty {
  className?: string;
  isSimple?: boolean;
}

function CardProperty({ className, propName, value, isSimple, keepVisibleSimple }: CardPropertyProps) {
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

export default CardProperty;
