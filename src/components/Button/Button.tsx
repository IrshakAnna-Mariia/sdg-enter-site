import classNames from 'classnames';
import { ReactComponent as RowRight } from 'icons/rowRight.svg';

import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  styleForm,
  className,
  size = 'base',
  disabled,
  postIcon,
  type,
  id,
}) => {
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
    <button className={buttonClasses} type={type} onClick={onClick} disabled={disabled} id={id}>
      {label}
      {postIcon && <RowRight className="h-4 w-4" />}
    </button>
  );
};

export default Button;
