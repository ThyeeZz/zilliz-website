'use client';

import React from 'react';
import { Button } from 'ui';
import { useTranslation } from 'react-i18next';

export default function Blog() {
  const { t } = useTranslation(['common', 'cloud']);
  return (
    <div className="">
      this is blog page
      <Button />
      <p className="">{t('cloud:header.title')}</p>
      <button>{t('common:button.viewPrice')}</button>
    </div>
  );
}
