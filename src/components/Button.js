import React from 'react';
import HtmlUtils from '../utils/HtmlUtils';
import { States, OutlineStates, Sizes, CssClasses } from '../config/ButtonConfig';

export default class Button extends React.Component {
    render() {
        const { type, size, onClick, cssStyle, outline, block, children, disabled, ...props } = this.props;
        const defaultClass = outline ? OutlineStates[type] : States[type];
        const blockClass = block ? CssClasses.block : null;

        const className = HtmlUtils.htmlClass(defaultClass, Sizes[size], blockClass);

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