import type { HTMLAttributes } from 'react';

import cx from 'clsx';

import './styles/RequiredAsterisk.css';

type RequiredAsteriskProps = HTMLAttributes<HTMLSpanElement> & {
  testId?: string;
};

const RequiredAsterisk = ({ className, testId, ...rest }: RequiredAsteriskProps) => {
  const classes = cx('RequiredAsterisk');

  return (
    <span className={classes} data-test-id={testId} {...rest}>
      *
    </span>
  );
};

export { RequiredAsterisk };