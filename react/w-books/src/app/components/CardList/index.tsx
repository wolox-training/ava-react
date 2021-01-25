import React from 'react';

import Card, { iCard } from '../Card';

import styles from './styles.module.scss';

interface CardListProps {
  items: iCard[]
}

export default function CardList({ items }: CardListProps) {
  return (
    <div className={styles.cardList}>
      {items.map(item =>
        <Card
          imageUrl={item.imageUrl}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          props={item.props}
          isSimple
        />)}
    </div>
  )
}
