import React from 'react';

import Loader from '../../assets/img/loader-green.svg';

interface LoadingProps {
  className?: string;
}

function Loading({ className}: LoadingProps): JSX.Element {
  return (
    <div className={className}>
      <img src={Loader} />
    </div>
  )
}

interface WithLoadingProps {
  loading: boolean;
  loadingClassName?: string;
}

function withLoading<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {

  return ({
    loading,
    loadingClassName,
    ...props
  }: WithLoadingProps) =>
    loading ? <Loading className={loadingClassName} /> : <Component {...props as P} />;
}

export default withLoading;
