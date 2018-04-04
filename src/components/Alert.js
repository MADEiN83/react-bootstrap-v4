import React from 'react';
import PropTypes from 'prop-types';
import { AvailableTypes, Types } from '../config/AlertConfig';

import DismissButton from './DismissButton';

const propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(AvailableTypes),
    cssStyles: PropTypes.object,
    onDismiss: PropTypes.func,
    closeLabel: PropTypes.string,
};

const defaultProps = {
    type: AvailableTypes[0],
};

class Alert extends React.Component {
    render() {
        const { type, onDismiss, cssStyle, closeLabel, children, ...props } = this.props;
        let className = Types[type];

        return (
            <div style={cssStyle} className={className} role="alert">
                {children}

                <DismissButton label={closeLabel} onDismiss={onDismiss} />
            </div>
        );
    }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;