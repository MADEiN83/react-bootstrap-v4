import React from 'react';
import PropTypes from 'prop-types';
import HtmlUtils from '../utils/HtmlUtils';
import { Types, AvaiableSizes, AvailableTypes, OutlineStates, Sizes, CssClasses } from '../config/ButtonConfig';

const propTypes = {
    type: PropTypes.oneOf(AvailableTypes),
    size: PropTypes.oneOf(AvaiableSizes),
    onClick: PropTypes.func,
    cssStyle: PropTypes.string,
    block: PropTypes.bool,
    outline: PropTypes.bool,
    children: PropTypes.any.isRequired,
};

const defaultProps = {
    type: AvailableTypes[0],
    block: false,
    outline: false
};

class Button extends React.Component {
    render() {
        const { type, size, onClick, cssStyle, outline, block, children, disabled, ...props } = this.props;
        const defaultClass = (outline ? OutlineStates[type] : Types[type]);
        const blockClass = block && CssClasses.block;

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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;