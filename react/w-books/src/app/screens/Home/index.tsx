
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useRequest } from '../../../hooks/useRequest';
import { getBooks } from '../../../services/booksService';

import Navbar from '../../components/Navbar';
import ErrorMessage from '../../components/ErrorMessage';
import withLoading from '../../components/Loading';
import CardList from '../../components/CardList';

import styles from './styles.module.scss';
import { bookToCard } from '../../../utils/bookToCard';
import ButtonLanguage from '../../components/ButtonLanguage';
import { useSelector } from '../../contexts/UserContext';

export default function Home() {
  const { t } = useTranslation();

  const session = useSelector(state => state.session);

  const [response, loading, error] = useRequest({
    request: () => getBooks(session),
    payload: null,
  }, []);

  return (
    <>
      <Navbar />

      {error && (<ErrorMessage className={styles.container}>{t(`Home:${error.problem}`)}</ErrorMessage>)}

      {
        withLoading(CardList)({
          loading,
          loadingClassName: styles.container,
          items: response?.page ? response.page.map(bookToCard) : []
        })
      }
      
      <ButtonLanguage className={styles.languagesContainer} />
    </>
  )
}
