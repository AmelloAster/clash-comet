import clsx from 'clsx';
import type { ReactNode } from 'react';
import { forwardRef } from 'react';

const sizes = {
	default: 'py-1 px-3 text-md font-medium',
	sm: 'py-1 px-2 text-sm font-medium'
};

const variants = {
	default: `
    bg-gray-50 
    shadow-sm 
    hover:bg-gray-100 
    active:bg-gray-50  
    dark:bg-transparent 
    dark:active:bg-gray-600 
    dark:hover:bg-gray-550 
    dark:active:opacity-80 
    
    border-gray-100 
    hover:border-gray-200 
    active:border-gray-200 
    dark:border-transparent 
    dark:active:border-gray-600 
    dark:hover:border-gray-500 

    text-gray-700
    hover:text-gray-900 
    active:text-gray-600 
    dark:text-gray-200  
    dark:active:text-white 
    dark:hover:text-white 
  `,
	gray: `
    bg-gray-100 
    shadow-sm
    hover:bg-gray-200 
    active:bg-gray-100  
    dark:bg-gray-500
    dark:hover:bg-gray-500
    dark:bg-opacity-80
    dark:hover:bg-opacity-100
    dark:active:bg-gray-550
    dark:active:opacity-80
    
    border-gray-200 
    hover:border-gray-300
    active:border-gray-200
    dark:border-gray-500 
    dark:active:border-gray-600 
    dark:hover:border-gray-500

    text-gray-700
    hover:text-gray-900 
    active:text-gray-600 
    dark:text-gray-200  
    dark:active:text-white 
    dark:hover:text-white 
    
  `,
	primary: `
    bg-primary-600
    text-white 
    shadow-sm 
    active:bg-primary-600 
    hover:bg-primary
    border-primary-500 
    hover:border-primary-500
    active:border-primary-700 
  `,
	success: `
    bg-green-600
    text-white 
    shadow-sm 
    active:bg-green-600 
    hover:bg-green
    border-green-500 
    hover:border-green-500
    active:border-green-700 
  `,
	error: `
    bg-red-600
    text-white 
    shadow-sm 
    active:bg-red-600 
    hover:bg-red
    border-red-500 
    hover:border-red-500
    active:border-red-700 
  `,
	selected: `bg-gray-100 dark:bg-gray-500 
    text-black hover:text-black active:text-black dark:hover:text-white dark:text-white 
    `
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export interface ButtonBaseProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	loading?: boolean;
	icon?: ReactNode;
	noPadding?: boolean;
	noBorder?: boolean;
	pressEffect?: boolean;
	justifyLeft?: boolean;
}

export type ButtonProps = ButtonBaseProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined;
	};

export type LinkButtonProps = ButtonBaseProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		href?: string;
	};

type Button = {
	(props: ButtonProps): JSX.Element;
	(props: LinkButtonProps): JSX.Element;
};

const hasHref = (props: ButtonProps | LinkButtonProps): props is LinkButtonProps => 'href' in props;

export const Button = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps | LinkButtonProps
>(
	(
		{ loading, justifyLeft, className, pressEffect, noBorder, noPadding, size, variant, ...props },
		ref
	) => {
		className = clsx(
			'border rounded-md items-center transition-colors duration-100 cursor-default',
			{ 'opacity-5': loading, '!p-1': noPadding },
			{ 'justify-center': !justifyLeft },
			sizes[size || 'default'],
			variants[variant || 'default'],
			{ 'active:translate-y-[1px]': pressEffect },
			{ 'border-0': noBorder },
			className
		);

		return hasHref(props) ? (
			<a {...props} ref={ref as any} className={clsx(className, 'no-underline')}>
				<>
					{props.icon}
					{props.children}
				</>
			</a>
		) : (
			<button {...(props as ButtonProps)} ref={ref as any} className={className}>
				<>
					{props.icon}
					{props.children}
				</>
			</button>
		);
	}
);
