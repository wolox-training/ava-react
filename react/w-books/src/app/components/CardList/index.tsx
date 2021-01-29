import React from 'react';

import Card, { iCard } from '../Card';

import styles from './styles.module.scss';

interface CardListProps {
  items: iCard[]
}

function CardList({ items }: CardListProps) {
  return (
    <div className={styles.cardList}>
      {items.map(item =>
        <Card
          key={`Card-${item.id}`}
          isSimple
          {...item}
        />)}
    </div>
  )
}

export default CardList;
