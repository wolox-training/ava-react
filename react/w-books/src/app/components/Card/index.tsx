import clsx from 'clsx';
import React from 'react'
import CardProp from '~components/CardProp';

import styles from './styles.module.scss';

interface CardProps {
  isSimple?: boolean;
}

export default function Card({ isSimple }: CardProps) {
  return (
    <a className={
      clsx(styles.cardCard, {
        [styles.cardCardSimple]: isSimple
      })
    } href="/">
      <div className={clsx(styles.cardCover, styles.badge)}>
        <img
          src="http://192.168.0.10:8080/img/book-cover.png"
          alt="The image of Books title"
          className={styles.cardCoverImage}
        />
      </div>

      <h3 className={styles.cardTitle}>
        Título del libro
        <span className={clsx(styles.cardSubtitle, styles.cardSubtitleDesktop)}>(género)</span>
      </h3>
      <span className={clsx(styles.cardSubtitle, styles.cardSubtitleMobile)}>(género)</span>

      <div className={styles.cardProps}>
        <CardProp propName="Autor del libro: " value="Nombre del autor del libro" className={styles.cardProp} isSimple={isSimple} />
        {!isSimple && (
          <>
            <CardProp propName="Editorial: " value="Nombre de la editorial" className={styles.cardProp} />
            <CardProp propName="Año de publicacion: " value="Año de publicacion" className={styles.cardProp} />
          </>
        )}

      </div>

    </a>
  )
}
