import React from 'react';
import { ButtonStates, BsSize } from '../config/Styles';

export default class Button extends React.Component {
    render() {
        const { type, size, onClick, cssStyle, outline, children, ...props } = this.props;
        let className = ButtonStates[type];

        // todo: if outline == true

        if(size) {
            className += ' btn-' + BsSize[size];
        }

        return (
            <button style={cssStyle} onClick={onClick} className={className}>
                {children}
            </button>
        );
    }
}