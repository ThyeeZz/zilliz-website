import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

import classes from './index.module.css';
import { PanelProps } from './Types';

const Panel = (props: PanelProps) => {
  const {
    items,
    label,
    activeListClassName = '',
    handleClick = () => {},
    hasChildren = true,
    href = '',
  } = props;
  const [show, setShow] = useState(false);

  return hasChildren ? (
    <div>
      <div className={classes.labelWrapper} onClick={() => setShow(!show)}>
        <p>{label}</p>
      </div>
      <ul
        className={clsx(classes.itemsWrapper, {
          [classes.show]: show,
          [activeListClassName]: show,
        })}
      >
        {items!.map(v => (
          <li key={v.title}>
            {v.href ? (
              <div>
                <div
                  className={classes.titleWrapper}
                  onClick={() => handleClick(v)}
                >
                  <Link
                    href={v.href}
                    className={clsx(classes.linkBtn, {
                      [classes.bold]: v.hasArrow,
                    })}
                    target={v.href.includes('http') ? '_blank' : '_self'}
                  >
                    {v.title}
                  </Link>
                </div>
                {v.desc && <p className={classes.desc}>{v.desc}</p>}
              </div>
            ) : (
              <p className={classes.item}>{v.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div
      className={classes.labelWrapper}
      onClick={data => {
        handleClick(data);
      }}
    >
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default Panel;
