export interface ButtonProps {
  label: string;
  onClick: () => void;
  styleForm: 'pill' | 'text';
  className?: string;
  size?: 'base' | 'lg';
}
