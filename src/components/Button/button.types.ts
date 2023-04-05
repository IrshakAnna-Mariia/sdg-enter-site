export interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick: () => void;
  styleForm: 'pill' | 'text';
  className?: string;
  size?: 'base' | 'lg';
  postIcon?: boolean;
}
