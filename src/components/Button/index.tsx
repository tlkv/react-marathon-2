import React from 'react';
import s from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isColor?: boolean;
    isBig?: boolean;
    size?: 'little';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isColor, isBig, size }) => 
{
    const classNames = cn(s.root, { [s.color]: isColor }, { [s.width]: isBig }, { [s.little]: size });

    return (
        <button type="button" className={classNames} onClick={onClick}>
            {children}
        </button>
    );
};


export default Button;