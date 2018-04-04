import React from 'react';
import PropTypes from 'prop-types';
import HtmlUtils from '../utils/HtmlUtils';
import { Types, AvailableTypes, CssClasses } from '../config/BadgeConfig';

const propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(AvailableTypes),
    cssStyles: PropTypes.object,
    cssClass: PropTypes.string,
    onClick: PropTypes.func
};

const defaultProps = {
    type: AvailableTypes[0],
};

class Badge extends React.Component {
    render() {
        const { type, onClick, cssStyle, cssClass, children, ...props } = this.props;
        const stateClass = Types[type];
        const className = HtmlUtils.htmlClass(stateClass, cssClass);

        return (
            <span style={cssStyle} onClick={onClick} className={className}>
                {children}
            </span>
        );
    }
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;