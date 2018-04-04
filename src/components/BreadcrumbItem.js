import React from 'react';
import PropTypes from 'prop-types';

import { htmlClass } from '../utils/HtmlUtils';
import { CssClasses } from '../config/BreadcrumbConfig';

const propTypes = {
    active: PropTypes.bool.isRequired,
};

const defaultProps = {
    active: false,
};

class BreadcrumbItem extends React.Component {
    render() {
        const { active } = this.props;
        const activeClass = active ? CssClasses.active : null;
        const className = htmlClass(CssClasses.item, activeClass)
        
        return (
            <li className={className}>
                {this.props.children}
            </li>
        );
    }
}

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;