import { Close, IconSize } from '@launchpad-ui/icons';
import cx from 'clsx';
import { Component } from 'react';

import './styles/Modal.css';

type ModalHeaderProps = {
  children: React.ReactNode;
  className?: string;
  closeable?: boolean;
  titleID?: string;
  titleClassName?: string;
  onClose?(): void;
};

class ModalHeader extends Component<ModalHeaderProps> {
  static defaultProps = {
    closeable: false,
    onClose: () => undefined,
  };

  render() {
    const { className, closeable, onClose, children, titleID, titleClassName } = this.props;
    const classes = cx('Modal-header', className);

    return (
      <div className={classes}>
        <h2 id={titleID || 'Modal-title'} className={cx('Modal-title', titleClassName)}>
          {children}
        </h2>
        {closeable && <Close className="Modal-close" onClick={onClose} size={IconSize.TINY} />}
      </div>
    );
  }
}

export { ModalHeader };
export type { ModalHeaderProps };