import { Button, ButtonKind, ButtonSize } from '@launchpad-ui/button';
import { ExpandMore, IconSize } from '@launchpad-ui/icons';
import { forwardRef } from 'react';

type DropdownButtonProps = {
  hideCaret?: boolean;
  kind?: ButtonKind;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?(v: React.MouseEvent): void;
  tooltip?: string;
  tooltipOptions?: object;
  testId?: string;
};

const DropdownButton = forwardRef<Button, DropdownButtonProps>((props, ref) => {
  const { children, hideCaret, ...rest } = props;

  return (
    <Button {...rest} ref={ref}>
      {children} {!hideCaret && <ExpandMore size={IconSize.SMALL} />}
    </Button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export { DropdownButton };
export type { DropdownButtonProps };