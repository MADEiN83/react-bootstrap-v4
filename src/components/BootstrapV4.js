import React from 'react';
import PropTypes from 'prop-types';
import { first, htmlClasses, htmlProps } from '../utils/HtmlUtils';

import Alert from './Alert';

const AvailableComponents = [
    'Alert',
    'Badge',
    'Breadcrumb',
    'BreadcrumbItem',
    'Button',
    'Card',
    'Column',
    'DismissButton',
    'Form',
    'Input',
    'InputCheckbox',
    'InputEmail',
    'InputPassword',
    'InputRadio',
    'InputText',
    'ListGroup',
    'ListGroupItem',
    'Pagination',
    'PaginationItem',
    'Progress',
    'Row',
    'Select',
    'SelectItem',
    'Table',
    'TableCell',
    'TableRow',
    'TextArea',
];

const ComponentsList = {
    Alert: Alert
};

const propTypes = { 
    component: PropTypes.oneOf(AvailableComponents).isRequired,
    visible: PropTypes.bool,
};

const defaultProps = {
    visible: true,
 };

class BootstrapV4 extends React.Component {
    render() {
        const { component, visible, ...props } = this.props;
        
        if(!visible) {
            return null;
        }

        const componentReference = ComponentsList[component];

        if(!componentReference) {
            return null;
        }

        const htmlComponent = React.createElement(componentReference, props);
        
        return (
            <React.Fragment>
                {htmlComponent}
            </React.Fragment>
        )
    }
}

BootstrapV4.propTypes = propTypes;
BootstrapV4.defaultProps = defaultProps;

export default BootstrapV4;