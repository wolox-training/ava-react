import React from 'react';
import { match } from 'react-router';
import { useTranslation } from 'react-i18next';

import { getBook } from '../../../services/booksService';
import { useRequest } from '../../../hooks/useRequest';
import { bookToCard } from '../../../utils/bookToCard';
import { getData, SESSION } from '../../../utils/manageData';

import styles from './styles.module.scss';

import ButtonBack from '../../components/ButtonBack';
import PATHS from '../../components/Routes/paths';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { useSelector } from '../../contexts/UserContext';
interface BookProps {
  match: match<{ id: string }>;
}

function Book({ match: urlParams }: BookProps) {
  const { t } = useTranslation();

  const bookId = urlParams.params.id;
  const session = useSelector(state => state.session);

  const [book, loading, error] = useRequest({
    request: () => getBook(session, bookId),
    payload: null,
  }, []);

  return (
    <Layout error={error} errorMessage={t(`Book:${error?.problem}`)}>
      <div className={styles.bookPage}>
        <aside className={styles.aside}>
          <ButtonBack path={PATHS.home} />
        </aside>
        <Card
          loading={loading}
          loadingClassName={styles.container}
          className={styles.bookCard}
          translateProps={true}
          {...bookToCard(book)}
        />
      </div>
    </Layout>
  )
}

export default Book;
