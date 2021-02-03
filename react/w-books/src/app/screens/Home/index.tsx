import React from 'react';
import { useTranslation } from 'react-i18next';

import { useRequest } from '../../../hooks/useRequest';
import { getBooks } from '../../../services/booksService';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import CardList from '../../components/CardList';

import styles from './styles.module.scss';
import { bookToCard } from '../../../utils/bookToCard';
import { useSelector } from '../../contexts/UserContext';

function Home() {
  const { t } = useTranslation();

  const session = useSelector(state => state.session);

  const [response, loading, error] = useRequest({
    request: () => getBooks(session),
    payload: null,
  }, []);
  return (
    <Layout error={error} errorMessage={t(`Home:${error?.problem}`)}>
      <CardList
        loading={loading}
        loadingClassName={styles.container}
        items={response?.page ? response.page.map(bookToCard) : []}
      />
    </Layout>
  )
}

export default Home;
