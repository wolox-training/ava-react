import clsx from 'clsx';
import React from 'react'
import CardProp, { iCardProp } from '../CardProp';

import styles from './styles.module.scss';

export interface iCard {
  imageUrl: string;
  id: number;
  title: string;
  subtitle: string;
  props: iCardProp[];
}
interface CardProps extends iCard {
  isSimple?: boolean;
}

export default function Card({
  isSimple,
  imageUrl,
  id,
  title,
  subtitle,
  props
}: CardProps) {
  return (
    <a className={
      clsx(styles.card, {
        [styles.cardSimple]: isSimple
      })
    } href="/">
      <div className={clsx(styles.cardCover, styles.badge)}>
        <img
          src={imageUrl}
          alt={`The image of ${title}`}
          className={styles.cardCoverImage}
        />
      </div>

      <h3 className={styles.cardTitle}>
        {title}
        <span className={clsx(styles.cardSubtitle, styles.cardSubtitleDesktop)}>({subtitle})</span>
      </h3>
      <span className={clsx(styles.cardSubtitle, styles.cardSubtitleMobile)}>({subtitle})</span>

      <div className={styles.cardProps}>
        {props.map(prop =>
          <CardProp
            propName={prop.propName}
            value={prop.value}
            className={styles.cardProp}
            keepVisibleSimple={prop.keepVisibleSimple}
            isSimple={isSimple}
          />)}
      </div>

    </a>
  )
}
