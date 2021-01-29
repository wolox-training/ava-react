import clsx from 'clsx';
import React from 'react';

import Loader from '../../assets/img/loader-green.svg';

import styles from './styles.module.scss';

interface LoadingProps {
  isGreen?: boolean;
}

function Loading({ isGreen }: LoadingProps): JSX.Element {
  return (
    <img src={Loader}/>
  )
}

export default Loading;
