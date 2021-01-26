import React from 'react';
import { match } from 'react-router';
import { useTranslation } from 'react-i18next';

import { getBooks } from '../../../services/booksService';
import { useRequest } from '../../../hooks/useRequest';
import { bookToCard } from '../../../utils/bookToCard';

import styles from './styles.module.scss';

import ButtonBack from '../../components/ButtonBack';
import PATHS from '../../components/Routes/paths';
import Card from '../../components/Card';
import ButtonLanguage from '../../components/ButtonLanguage';
import ErrorMessage from '../../components/ErrorMessage';
import withLoading from '../../components/Loading';
import { useSelector } from '../../contexts/UserContext';


interface BookProps {
  match: match<{ id: string }>;
}

export default function Book({ match: urlParams }: BookProps) {
  const { t } = useTranslation();

  const bookId = urlParams.params.id;
  const session = useSelector(state => state.session);

  const [book, loading, error] = useRequest({
    request: () => getBooks(session, bookId),
    payload: null,
  }, []);

  return (
    <>
      <div className={styles.bookPage}>
        <aside className={styles.aside}>
          <ButtonBack path={PATHS.home} />
        </aside>
        {
          withLoading(Card)({
            loading,
            loadingClassName: styles.container,
            className: styles.bookCard,
            translateProps: true,
            ...bookToCard(book)
          })
        }
      </div>

      {error && (<ErrorMessage className={styles.container}>{t(`Book:${error.problem}`)}</ErrorMessage>)}

      <ButtonLanguage className={styles.container} />
    </>
  )
}
