import clsx from 'clsx';
import React from 'react'

import styles from './styles.module.scss';

interface LoadingProps {
  isGreen?: boolean;
  className?: string;
}

function Loading({ isGreen, className}: LoadingProps): JSX.Element {
  return (
    <div className={className}>
      <svg width="64px" height="64px" viewBox="0 0 128 128" className={clsx(
        styles.loading, {
        [styles.isGreen]: isGreen
      }
      )}>
        <g>
          <path className={styles.iconPath} d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z" fill="#000000" fill-opacity="1" />
          <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1000ms" repeatCount="indefinite"></animateTransform>
        </g>
      </svg>
    </div>
  )
}

interface WithLoadingProps {
  loading: boolean;
  loadingClassName?: string;
}

export default function withLoading<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {

  return ({
    loading,
    loadingClassName,
    ...props
  }: WithLoadingProps) =>
    loading ? <Loading isGreen className={loadingClassName} /> : <Component {...props as P} />;
}
