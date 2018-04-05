import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { CssClasses, AvailableTypes } from '../config/ListGroupConfig';
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
        const { items, header, ...props } = this.props;
        const view = this._renderItems(items);

        const className = htmlClasses([
            [CssClasses.container],
        ]);
        const htmlProperties = htmlProps(props, { className });
        
        return (
            <ul {...htmlProperties}>
                {view}
            </ul>
        );
    }
}

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;