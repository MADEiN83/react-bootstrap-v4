import React from 'react';
import PropTypes from 'prop-types';

import { htmlProps } from '../utils/HtmlUtils';

const propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.string,
    className: PropTypes.string,
    header: PropTypes.bool,
    onClick: PropTypes.func,
};

const defaultProps = {
    header: false,
};

class TableRow extends React.Component {
    render() {
        const { children, ...props } = this.props;
        const htmlProperties = htmlProps(props);

        return (
            <tr {...htmlProperties}>
                {children}
            </tr>
        );
    }
}

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;