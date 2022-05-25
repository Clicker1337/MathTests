import React from 'react'

interface Props {
    className?: string;
    border: string;
    children?: React.ReactNode;
    onClick: () => void;
    radius: string
    width: string;
}

const Button: React.FC<Props> = ({
    className,
    border,
    children,
    onClick,
    radius,
    width
}) => {
    return (
        <button
        className={className}
          onClick={onClick}
          style={{
             border,
             borderRadius: radius,
             width
          }}
        >
        {children}
        </button>
      );
}

export default Button;