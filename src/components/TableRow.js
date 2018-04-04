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

class TableRow extends React.Component {
    render() {
        const { children, style, onClick, ...props } = this.props;

        return (
            <tr style={style} onClick={onClick}>
                {children}
            </tr>
        );
    }
}

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;