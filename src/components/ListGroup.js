import React from 'react';
import PropTypes from 'prop-types';

import { htmlClass } from '../utils/HtmlUtils';
import { CssClasses, Types, AvailableTypes } from '../config/ListGroupConfig';
import Badge from './Badge';
import ListGroupItem from './ListGroupItem';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
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
    })),
    style: PropTypes.string,
    header: PropTypes.string,
};

const defaultProps = {
    
};

class ListGroup extends React.Component {
    _renderItems(items) {
        return items.map((i, key) => (
            <ListGroupItem key={key} item={i} />
        ));
    }

    render() {
        const { items, style, header, ...props } = this.props;
        const view = this._renderItems(items);
        
        return (
            <ul className={CssClasses.container} style={{style}}>
                {view}
            </ul>
        );
    }
}

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;