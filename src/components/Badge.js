import React from 'react';
import PropTypes from 'prop-types';
import { htmlClasses, htmlProps, first } from '../utils/HtmlUtils';
import { Types, AvailableTypes } from '../config/BadgeConfig';

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
        const { type, children, ...props } = this.props;
        const className = htmlClasses([
            [Types[type]],
        ]);
        const htmlProperties = htmlProps(props, { className });
        
        return (
            <span {...htmlProperties}>
                {children}
            </span>
        );
    }
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;