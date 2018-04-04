import React from 'react';
import { States } from '../config/BadgeConfig';

export default class Badge extends React.Component {
    render() {
        const { type, onClick, cssStyle, children, ...props } = this.props;
        let className = States[type];

        return (
            <span style={cssStyle} onClick={onClick} className={className}>
                {children}
            </span>
        );
    }
}