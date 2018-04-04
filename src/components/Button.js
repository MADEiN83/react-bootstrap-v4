import React from 'react';
import { ButtonStates, ButtonOutlineStates, ButtonSizes, CssClasses } from '../config/ButtonConfig';

export default class Button extends React.Component {
    render() {
        const { type, size, onClick, cssStyle, outline, block, children, disabled, ...props } = this.props;
        let className = outline ? ButtonOutlineStates[type] : ButtonStates[type];

        if(size) {
            className += ButtonSizes[size];
        }

        if(block) {
            className += CssClasses.block;
        }

        return (
            <button 
                style={cssStyle}
                onClick={onClick}
                className={className}
                disabled={disabled}
                >
                {children}
            </button>
        );
    }
}