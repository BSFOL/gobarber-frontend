import React, { ButtonHTMLAttributes } from 'react';

import { Btn } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Btn {...rest}>
      { loading ? 'Carregando...' : children}
    </Btn>
  );
};

export default Button;