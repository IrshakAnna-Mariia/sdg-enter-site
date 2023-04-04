import classNames from 'classnames';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ label, onClick, styleForm, className, size = 'base', disabled }) => {
  const buttonClasses = classNames(className, 'w-fit font-sans', {
    'bg-orange rounded-xl text-white disabled:opacity-50': styleForm === 'pill',
    'px-4 pt-1 pb-1.5 text-base font-extrabold': size === 'base',
    'px-8 pt-2 pb-3 text-2xl font-bold': size === 'lg',
  });

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
