import React from 'react';
import PropTypes from 'prop-types';

import { htmlClass } from '../utils/HtmlUtils';
import { CssClasses, Types, AvailableTypes } from '../config/ListGroupConfig';
import Badge from './Badge';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.any.isRequired,
        title: PropTypes.string,
        url: PropTypes.string,
        type: PropTypes.oneOf(AvailableTypes),
        badge: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        badgeType: PropTypes.oneOf(AvailableTypes),
        onClick: PropTypes.func,
    })),
    cssStyles: PropTypes.string,
    header: PropTypes.string,
};

const defaultProps = {
    
};

class ListGroup extends React.Component {
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
            const stateClass = Types[i.type];
            const badgeClass = i.badge ? 'd-flex justify-content-between align-items-center' : null;
            const className = htmlClass(CssClasses.item, activeClass, disabledClass, stateClass, badgeClass);
            const badge = this._renderBadge(i);

            const htmlProps = { key, onClick: i.onClick, className, href: i.url, disabled: i.disabled };
            
            if(i.url) {
                return (
                    <a {...htmlProps}>
                        {i.content}
                        {badge}
                    </a>
                );
            }

            return (
                <li key={key} onClick={i.onClick} className={className}>
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

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;