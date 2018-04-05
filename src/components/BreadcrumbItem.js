import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { CssClasses } from '../config/BreadcrumbConfig';

const propTypes = {
    active: PropTypes.bool.isRequired,
};

const defaultProps = {
    active: false,
};

class BreadcrumbItem extends React.Component {
    render() {
        const { active, ...props } = this.props;
        const className = htmlClasses([
            [CssClasses.item],
            [active, CssClasses.active],
        ]);
        const htmlProperties = htmlProps(props, { className });
        
        return (
            <li {...htmlProperties}>
                {this.props.children}
            </li>
        );
    }
}

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;