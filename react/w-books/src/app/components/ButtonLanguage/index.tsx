import React, { ChangeEvent, useEffect, useState } from 'react'
import i18next from 'i18next';

import { LANGS } from '../../../constants/constants';

import styles from './styles.module.scss';
import Button from '~components/Button';
import clsx from 'clsx';

interface ButtonLanguageProps {
  className?: string;
}

export default function ButtonLanguage({ className }: ButtonLanguageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  useEffect(() => {
    setSelectedLanguage(i18next.language);
  }, [])

  useEffect(() => {
    if (i18next.language !== selectedLanguage) {
      i18next.changeLanguage(selectedLanguage)
    }
  }, [selectedLanguage])

  return (
    <div className={clsx(className && className)}>
      {
        Object.keys(LANGS).map((lang: string) =>
          <Button
            className={styles.buttonLanguage}
            isFilled={lang === selectedLanguage}
            isWidthAuto
            handleClick={() => setSelectedLanguage(lang)}
          >
            {LANGS[lang].translation.LanguageName}
          </Button>
        )
      }
    </div>
  )
}
