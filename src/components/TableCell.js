import React from 'react';
import PropTypes from 'prop-types';

import { htmlProps } from '../utils/HtmlUtils';

const propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.string,
    header: PropTypes.bool,
    onClick: PropTypes.func,
};

const defaultProps = {
    header: false,
};

class TableCell extends React.Component {
    render() {
        const { children, header, ...props } = this.props;
        const htmlProperties = htmlProps(props);

        if(header) {
            return (
                <th {...htmlProperties}>
                    {children}
                </th>
            );
        }

        return (
            <td {...htmlProperties}>
                {children}
            </td>
        );
    }
}

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;