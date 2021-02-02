import React from 'react';
import { useTranslation } from 'react-i18next';

import { useRequest } from '../../../hooks/useRequest';
import { getBooks } from '../../../services/booksService';
import { getData, SESSION } from '../../../utils/manageData';
import { bookToCard } from '../../../utils/bookToCard';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import CardList from '../../components/CardList';

import styles from './styles.module.scss';

function Home() {
  const { t } = useTranslation();

  const [response, loading, error] = useRequest({
    request: () => getBooks(getData(SESSION)),
    payload: null,
  }, []);
  return (
    <Layout error={error} errorMessage={t(`Home:${error?.problem}`)}>
      {
        loading ? (<div className={styles.container}> <Loading isGreen /> </div>)
          : <CardList items={response?.page ? response.page.map(bookToCard) : []} />
      }
    </Layout>
  )
}

export default Home;
