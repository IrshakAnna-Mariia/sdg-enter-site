import classNames from 'classnames';
import { ReactComponent as RowRight } from 'icons/rowRight.svg';

import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ label, onClick, styleForm, className, size = 'base', disabled, postIcon }) => {
  const buttonClasses = classNames(
    'w-fit font-sans flex gap-2 items-center',
    {
      'bg-orange rounded-xl text-white disabled:opacity-50': styleForm === 'pill',
      'px-4 pt-1 pb-1.5 text-base font-extrabold': size === 'base',
      'px-8 pt-2 pb-3 text-2xl font-bold': size === 'lg',
    },
    className,
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {label}
      {postIcon && <RowRight className="w-4 h-4" />}
    </button>
  );
};

export default Button;
