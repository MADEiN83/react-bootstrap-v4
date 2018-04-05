import React from 'react';
import PropTypes from 'prop-types';
import { first, htmlProps, htmlClasses } from '../utils/HtmlUtils';
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
        const { type, size, outline, block, children, ...props } = this.props;
        const className = htmlClasses([
            [outline, OutlineStates[type], Types[type]],
            [block, CssClasses.block],
            [Sizes[size]]
        ]);
        const htmlProperties = htmlProps(props, { className });

        return (
            <button {...htmlProperties}>
                {children}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;