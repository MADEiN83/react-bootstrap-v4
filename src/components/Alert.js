import React from 'react';
import { AlertStates } from '../config/AlertConfig';

import DismissButton from './DismissButton';

export default class Alert extends React.Component {
    render() {
        const { type, onDismiss, cssStyle, closeLabel, children, ...props } = this.props;
        let className = AlertStates[type];

        return (
            <div style={cssStyle} className={className} role="alert">
                {children}

                <DismissButton label={closeLabel} onDismiss={onDismiss} />
            </div>
        );
    }
}