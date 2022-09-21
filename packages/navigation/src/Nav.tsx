import type { HTMLAttributes, Ref } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import './styles/Nav.css';

type NavBaseProps = HTMLAttributes<HTMLElement> & {
  kind?: 'primary' | 'secondary';
  innerRef?: Ref<HTMLDivElement>;
  'data-test-id'?: string;
};

const NavBase = ({
  kind = 'primary',
  className,
  children,
  innerRef,
  'aria-label': ariaLabel,
  'data-test-id': testId = 'nav',
  ...rest
}: NavBaseProps) => {
  return (
    <nav
      {...rest}
      aria-label={ariaLabel ?? `${kind} navigation`}
      className={cx('Nav', `Nav--${kind}`, className)}
      data-test-id={testId}
      ref={innerRef}
    >
      {children}
    </nav>
  );
};

type NavProps = Omit<NavBaseProps, 'innerRef'>;

const Nav = forwardRef<HTMLDivElement, NavBaseProps>((props, ref) => (
  <NavBase {...props} innerRef={ref} />
));

Nav.displayName = 'Nav';

export { Nav };
export type { NavProps };
