import React from 'react';

import HtmlUtils from '../utils/HtmlUtils';
import { CssClasses, States } from '../config/ListGroupConfig';

export default class ListGroup extends React.Component {
    _renderItems(items) {
        return items.map((i, key) => {
            const active = i.active ? CssClasses.active : null;
            const disabled = i.disabled ? CssClasses.disabled : null;
            const state = i.type ? States[i.type] : null;
            const className = HtmlUtils.htmlClass(CssClasses.item, active, disabled, state);
            
            if(i.url) {
                return (
                    <a key={key} className={className} href={i.url} disabled={i.disabled}>
                        {i.content}
                    </a>
                );
            }

            return (
                <li key={key} className={className}>
                    {i.content}
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