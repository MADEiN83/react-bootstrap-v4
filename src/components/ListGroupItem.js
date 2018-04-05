import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
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
        const { active, disabled, type, badge, badgeType, content, ...props } = this.props.item;
        const badgeComponent = this._renderBadge(badge, badgeType);
        
        const className = htmlClasses([
            [CssClasses.item],
            [active, CssClasses.active],
            [disabled, CssClasses.disabled],
            [Types[type]],
            [badge, CssClasses.badgeContainer]
        ]);
        const htmlProperties = htmlProps(props, { className });
        
        if(htmlProperties.href) {
            return (
                <a {...htmlProperties}>
                    {content}
                    {badgeComponent}
                </a>
            );
        }

        return (
            <li {...htmlProperties}>
                {content}
                {badgeComponent}
            </li>
        );
    }
}

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;