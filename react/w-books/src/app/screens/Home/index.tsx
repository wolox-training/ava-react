
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useRequest } from '../../../hooks/useRequest';
import { getBooks } from '../../../services/booksService';
import useSession from '../../../hooks/useSession';

import Navbar from '../../components/Navbar';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import CardList from '../../components/CardList';

import styles from './styles.module.scss';
import { bookToCard } from '../../../utils/bookToCard';
import ButtonLanguage from '~components/ButtonLanguage';


export default function Home() {
  const { getSession } = useSession();
  const { t } = useTranslation();

  const [response, loading, error] = useRequest({
    request: () => getBooks(getSession()),
    payload: null,
  }, []);

  return (
    <>
      <Navbar />

      {error && (<ErrorMessage className={styles.container}>{t(`Home:${error.problem}`)}</ErrorMessage>)}

      {
        loading ? (<div className={styles.container}> <Loading isGreen /> </div>)
          : <CardList items={response?.page ? response.page.map(bookToCard) : []} />
      }

      <ButtonLanguage className={styles.languagesContainer}/>
    </>
  )
}
