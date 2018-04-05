import React from 'react';
import PropTypes from 'prop-types';
import { htmlClass, first } from '../utils/HtmlUtils';
import { Types, AvailableTypes, CssClasses } from '../config/BadgeConfig';

const propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(AvailableTypes),
    styles: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func
};

const defaultProps = {
    type: first(AvailableTypes),
};

class Badge extends React.Component {
    render() {
        const { type, onClick, style, className, children, ...props } = this.props;
        const finalClassName = htmlClass(Types[type], className);
        const htmlProps = { onClick, style, className: finalClassName };
        
        return (
            <span {...htmlProps}>
                {children}
            </span>
        );
    }
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;