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

export default CardList;
