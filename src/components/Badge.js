import React from 'react';
import HtmlUtils from '../utils/HtmlUtils';
import { States, CssClasses } from '../config/BadgeConfig';

export default class Badge extends React.Component {
    render() {
        const { type, onClick, cssStyle, cssClass, children, ...props } = this.props;
        const stateClass = type ? States[type] : CssClasses.baseBadge;
        const className = HtmlUtils.htmlClass(stateClass, cssClass);

        return (
            <span style={cssStyle} onClick={onClick} className={className}>
                {children}
            </span>
        );
    }
}