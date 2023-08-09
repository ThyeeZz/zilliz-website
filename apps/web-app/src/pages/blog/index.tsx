'use client';

import { useState } from 'react';
import { Button } from 'ui';
import { useTranslation } from 'react-i18next';
import classes from 'common-styles';

export default function Blog() {
  const [count, setCount] = useState(0);

  const { blogClasses } = classes;

  return (
    <div className={blogClasses.blogPageContainer}>
      <div className={blogClasses.titleWrapper}>
        <h3 className={blogClasses.title}>some title</h3>
        <p className="">count is: {count}</p>
        <Button />
      </div>
    </div>
  );
}
