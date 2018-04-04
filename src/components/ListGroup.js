import React from 'react';

import HtmlUtils from '../utils/HtmlUtils';
import { CssClasses, States } from '../config/ListGroupConfig';

export default class ListGroup extends React.Component {
    _renderItems(items) {
        return items.map((i, key) => {
            const active = i.active ? CssClasses.active : '';
            const disabled = i.disabled ? CssClasses.disabled : '';
            const state = i.type ? States[i.type] : '';
            const className = HtmlUtils.htmlClass(CssClasses.item, active, disabled, state);
            const content = i.url ? <a href={i.url} disabled={i.disabled}>{i.content}</a> : i.content;

            return (
                <li key={key} className={className}>
                    {content}
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