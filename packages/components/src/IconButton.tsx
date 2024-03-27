import type { IconProps } from '@launchpad-ui/icons';
import type { AriaLabelingProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';
import type { ButtonVariants } from './Button';

import { Icon } from '@launchpad-ui/icons';
import { cva, cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Button as AriaButton, composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import styles from './styles/IconButton.module.css';

const iconButton = cva(styles.base, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
		},
	},
	defaultVariants: {
		size: 'medium',
	},
});

interface IconButtonVariants extends VariantProps<typeof iconButton> {
	variant?: Extract<ButtonVariants['variant'], 'default' | 'primary' | 'destructive' | 'minimal'>;
}
interface IconButtonProps
	extends Omit<AriaButtonProps, 'children' | 'aria-label'>,
		Required<Pick<AriaLabelingProps, 'aria-label'>>,
		IconButtonVariants {
	icon: IconProps['name'];
}

const _IconButton = (
	{ size = 'medium', variant = 'default', icon, ...props }: IconButtonProps,
	ref: ForwardedRef<HTMLButtonElement>,
) => {
	return (
		<AriaButton
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(button({ ...renderProps, size, variant, className }), iconButton({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</AriaButton>
	);
};

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
const IconButton = forwardRef(_IconButton);

export { IconButton, iconButton };
export type { IconButtonProps, IconButtonVariants };
