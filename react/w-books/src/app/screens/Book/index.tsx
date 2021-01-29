import React from 'react';
import { match } from 'react-router';
import { useTranslation } from 'react-i18next';

import { getBook } from '../../../services/booksService';
import { useRequest } from '../../../hooks/useRequest';
import { bookToCard } from '../../../utils/bookToCard';

import styles from './styles.module.scss';

import ButtonBack from '../../components/ButtonBack';
import PATHS from '../../components/Routes/paths';
import Card from '../../components/Card';
import ButtonLanguage from '../../components/ButtonLanguage';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import { getData, SESSION } from '../../../utils/manageData';

interface BookProps {
  match: match<{ id: string }>;
}

export default function Book({ match: urlParams }: BookProps) {
  const { t } = useTranslation();

  const bookId = urlParams.params.id;

  const [book, loading, error] = useRequest({
    request: () => getBook(getData(SESSION), bookId),
    payload: null,
  }, []);

  return (
    <>
      <div className={styles.bookPage}>
        <aside className={styles.aside}>
          <ButtonBack path={PATHS.home} />
        </aside>
        {
          loading ? (<div className={styles.container}> <Loading isGreen /> </div>)
            : book && <Card className={styles.bookCard} {...bookToCard(book)} translateProps/>
        }
      </div>

      {error && (<ErrorMessage className={styles.container}>{t(`Book:${error.problem}`)}</ErrorMessage>)}

      <ButtonLanguage className={styles.container} />
    </>
  )
}
