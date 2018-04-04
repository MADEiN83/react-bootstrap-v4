import React from 'react';

import HtmlUtils from '../utils/HtmlUtils';
import { CssClasses, States } from '../config/ListGroupConfig';
import Badge from './Badge';

export default class ListGroup extends React.Component {
    _renderBadge(item) {
        if(!item.badge) {
            return null;
        }

        return (
            <Badge type={item.badgeType} cssClass={CssClasses.badge}>
                {item.badge}
            </Badge>   
        );
    }

    _renderItems(items) {
        return items.map((i, key) => {
            const activeClass = i.active ? CssClasses.active : null;
            const disabledClass = i.disabled ? CssClasses.disabled : null;
            const stateClass = i.type ? States[i.type] : null;
            const badgeClass = i.badge ? 'd-flex justify-content-between align-items-center' : null;
            const className = HtmlUtils.htmlClass(CssClasses.item, activeClass, disabledClass, stateClass, badgeClass);
            const badge = this._renderBadge(i);
            
            if(i.url) {
                return (
                    <a key={key} className={className} href={i.url} disabled={i.disabled}>
                        {i.content}
                        {badge}
                    </a>
                );
            }

            return (
                <li key={key} className={className}>
                    {i.content}
                    {badge}
                </li>
            );
        });
    }

    render() {
        const { items, cssStyles, header, ...props } = this.props;
        const view = this._renderItems(items);
        
        return (
            <ul className={CssClasses.container} style={{cssStyles}}>
                {view}
            </ul>
        );
    }
}