import React from 'react';
import PropTypes from 'prop-types';

import { htmlClass } from '../utils/HtmlUtils';
import { CssClasses, Types, AvailableTypes } from '../config/ListGroupConfig';
import Badge from './Badge';

const propTypes = {
    item: PropTypes.shape({
        content: PropTypes.any.isRequired,
        title: PropTypes.string,
        href: PropTypes.string,
        type: PropTypes.oneOf(AvailableTypes),
        badge: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        badgeType: PropTypes.oneOf(AvailableTypes),
        onClick: PropTypes.func,
    }),
};

const defaultProps = {
    
};

class ListGroupItem extends React.Component {
    _renderBadge(badge, badgeType) {
        if(!badge) {
            return null;
        }

        return (
            <Badge type={badgeType} cssClass={CssClasses.badge}>
                {badge}
            </Badge>   
        );
    }

    render() {
        const { active, disabled, type, badge, badgeType, onClick, href, content } = this.props.item;

        const activeClass = active ? CssClasses.active : null;
        const disabledClass = disabled ? CssClasses.disabled : null;
        const typeClass = Types[type];
        const badgeClass = badge ? CssClasses.badgeContainer : null;
        const className = htmlClass(CssClasses.item, activeClass, disabledClass, typeClass, badgeClass);
        const badgeComponent = this._renderBadge(badge, badgeType);
        
        if(href) {
            const htmlProps = { onClick, className, href, disabled };

            return (
                <a {...htmlProps}>
                    {content}
                    {badgeComponent}
                </a>
            );
        }

        return (
            <li onClick={onClick} className={className}>
                {content}
                {badgeComponent}
            </li>
        );
    }
}

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;