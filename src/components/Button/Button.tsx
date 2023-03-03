import classNames from 'classnames';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ label, onClick, styleForm, className, size = 'base' }) => {
  const buttonClasses = classNames(className, 'font-extrabold text-base', {
    'bg-orange rounded-xl text-white': styleForm === 'pill',
    'px-4 pt-1 pb-1.5 ': size === 'base',
    'px-8 pt-2 pb-3 ': size === 'lg',
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
