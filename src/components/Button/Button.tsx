import classNames from 'classnames';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ label, onClick, styleForm }) => {
  const buttonClasses = classNames('px-4 pt-1 pb-1.5 font-extrabold text-base', {
    'bg-orange rounded-xl text-white': styleForm === 'pill',
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
