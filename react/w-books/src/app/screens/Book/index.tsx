import React from 'react';
import { match } from 'react-router';

import { getBooks } from '../../../services/booksService';
import { useRequest } from '../../../hooks/useRequest';
import useSession from '../../../hooks/useSession';

import styles from './styles.module.scss';
import ButtonBack from '~components/ButtonBack';
import PATHS from '~components/Routes/paths';
import Card from '~components/Card';
import { bookToCard } from '~utils/bookToCard';

interface BookProps {
  match: match<{ id: string }>;
}

export default function Book({ match: urlParams }: BookProps) {
  const { getSession } = useSession();

  const bookId = urlParams.params.id;

  const [book, loading, error] = useRequest({
    request: () => getBooks(getSession(), bookId),
    payload: null,
  }, []);

  return (
    <div className={styles.bookPage}>
      <aside className={styles.aside}>
        <ButtonBack path={PATHS.home} />
      </aside>
      {
        book && <Card className={styles.bookCard} {...bookToCard(book)} />
      }
      
    </div>
  )
}
