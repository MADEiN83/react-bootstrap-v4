import React from 'react';
import { BadgeStates } from '../config/Styles';

export default class Badge extends React.Component {
    render() {
        const { type, onClick, cssStyle, children, ...props } = this.props;
        let className = BadgeStates[type];

        return (
            <span style={cssStyle} onClick={onClick} className={className}>
                {children}
            </span>
        );
    }
}