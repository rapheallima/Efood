import { ButtonContainer, ButtonLink } from './styles';

type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onClick?: () => void;
  size?: 'small' | 'big';
  children: string;
};

export const Button = ({ type, title, to, onClick, size, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        size={size}
      >
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to as string} title={title} size={size}>
      {children}
    </ButtonLink>
  );
};

export default Button;
