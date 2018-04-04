import React from 'react';
import HtmlUtils from '../utils/HtmlUtils';
import { ButtonStates, ButtonOutlineStates, ButtonSizes, CssClasses } from '../config/ButtonConfig';

export default class Button extends React.Component {
    render() {
        const { type, size, onClick, cssStyle, outline, block, children, disabled, ...props } = this.props;
        const defaultClass = outline ? ButtonOutlineStates[type] : ButtonStates[type];
        const blockClass = block ? CssClasses.block : null;

        const className = HtmlUtils.htmlClass(defaultClass, ButtonSizes[size], blockClass);

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