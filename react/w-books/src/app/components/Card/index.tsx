import clsx from 'clsx';
import React from 'react'
import { Link } from 'react-router-dom';
import CardProp, { iCardProp } from '../CardProp';

import styles from './styles.module.scss';

export interface iCard {
  imageUrl: string;
  id: number;
  title: string;
  subtitle: string;
  to?: string;
  props: iCardProp[];
}
interface CardProps extends iCard {
  isSimple?: boolean;
  className?: string;
}

export default function Card({
  isSimple,
  className,
  imageUrl,
  id,
  title,
  subtitle,
  to,
  props
}: CardProps) {
  return (
    <Link className={
      clsx(
        styles.card,
        className, {
        [styles.cardSimple]: isSimple
      })
    } to={to ?? ''}>
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

    </Link>
  )
}
