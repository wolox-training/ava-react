import React, { ChangeEvent, useEffect, useState } from 'react'
import i18next from 'i18next';

import { LANGS } from '../../../constants/constants';

import styles from './styles.module.scss';
import Button from '~components/Button';
import clsx from 'clsx';

interface ButtonLanguageProps {
  className?: string;
}

function ButtonLanguage({ className }: ButtonLanguageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18next.language);

  const setLanguage = (lang:string) => {
    setSelectedLanguage(lang);

    if (i18next.language !== lang) {
      i18next.changeLanguage(lang);
    }
  }

  return (
    <div className={clsx(className && className)}>
      {
        Object.keys(LANGS).map((lang: string) =>
          <Button
            className={styles.buttonLanguage}
            isFilled={lang === selectedLanguage}
            isWidthAuto
            key={lang}
            handleClick={() => setLanguage(lang)}
          >
            {LANGS[lang].translation.LanguageName}
          </Button>
        )
      }
    </div>
  )
}

export default ButtonLanguage;
