import React from 'react';
import PropTypes from 'prop-types';
import { first } from '../utils/HtmlUtils';
import { AvailableTypes, Types } from '../config/AlertConfig';

import DismissButton from './DismissButton';

const propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(AvailableTypes),
    style: PropTypes.object,
    onDismiss: PropTypes.func,
    closeLabel: PropTypes.string,
};

const defaultProps = {
    type: first(AvailableTypes),
};

class Alert extends React.Component {
    render() {
        const { type, onDismiss, style, closeLabel, children, ...props } = this.props;
        const alertHtmlProps = { style, className: Types[type] };
        const dismissButtonHtmlProps = { closeLabel, onDismiss };
        
        return (
            <div {...alertHtmlProps} role="alert">
                {children}

                <DismissButton {...dismissButtonHtmlProps} />
            </div>
        );
    }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;