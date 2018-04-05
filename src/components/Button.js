import React from 'react';
import PropTypes from 'prop-types';
import { htmlClass, first } from '../utils/HtmlUtils';
import { Types, AvailableSizes, AvailableTypes, OutlineStates, Sizes, CssClasses } from '../config/ButtonConfig';

const propTypes = {
    type: PropTypes.oneOf(AvailableTypes),
    size: PropTypes.oneOf(AvailableSizes),
    onClick: PropTypes.func,
    style: PropTypes.string,
    block: PropTypes.bool,
    outline: PropTypes.bool,
    children: PropTypes.any.isRequired,
};

const defaultProps = {
    type: first(AvailableTypes),
    block: false,
    outline: false
};

class Button extends React.Component {
    render() {
        const { type, size, onClick, style, outline, block, children, disabled, ...props } = this.props;
        const defaultClass = (outline ? OutlineStates[type] : Types[type]);
        const blockClass = block && CssClasses.block;
        const className = htmlClass(defaultClass, Sizes[size], blockClass);
        const htmlProps = { style, onClick, className, disabled };

        return (
            <button {...htmlProps}>
                {children}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;