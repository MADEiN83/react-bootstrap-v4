import React from 'react';
import PropTypes from 'prop-types';
import { first, htmlClasses, htmlProps } from '../utils/HtmlUtils';
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
    closeLabel: 'close',
};

class Alert extends React.Component {
    render() {
        const { type, onDismiss, closeLabel, children, ...props } = this.props;
        const className = htmlClasses([
            [Types[type]],
        ]);
        const alertHtmlProps = htmlProps(props, { className });
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