import React from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import { useRequest } from '../../../hooks/useRequest';
import { getBooks } from '../../../services/booksService';
import { getData, hasData, SESSION } from '../../../utils/manageData';

import Navbar from '../../components/Navbar';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import CardList from '../../components/CardList';
import PATHS from '../../components/Routes/paths';

import styles from './styles.module.scss';
import { bookToCard } from '../../../utils/bookToCard';
import ButtonLanguage from '~components/ButtonLanguage';

function Home() {
  const { t } = useTranslation();

  const [response, loading, error] = useRequest({
    request: () => getBooks(getData(SESSION)),
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

export default Home;
