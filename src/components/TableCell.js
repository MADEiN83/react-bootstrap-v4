import React from 'react';
import PropTypes from 'prop-types';

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
        const { children, style, onClick, header, ...props } = this.props;

        if(header) {
            return (
                <th style={style} onClick={onClick}>
                    {children}
                </th>
            );
        }

        return (
            <td style={style} onClick={onClick}>
                {children}
            </td>
        );
    }
}

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;