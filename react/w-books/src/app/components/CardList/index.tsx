import React from 'react';
import withLoading from '../Loading';

import Card, { iCard } from '../Card';

import styles from './styles.module.scss';

interface CardListProps {
  items: iCard[];
  loading?: boolean;
}

function CardList({ items, loading }: CardListProps) {
  return (
    <div className={styles.cardList}>
      {items.map(item =>
        <Card
          key={`Card-${item.id}`}
          isSimple
          loading={loading}
          {...item}
        />)}
    </div>
  )
}

export default withLoading(CardList);
