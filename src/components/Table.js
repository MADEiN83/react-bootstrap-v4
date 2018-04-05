import React from 'react';
import PropTypes from 'prop-types';
import { htmlClasses, htmlProps } from '../utils/HtmlUtils';

const propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.string,
    className: PropTypes.string,
    dark: PropTypes.bool,
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
    small: PropTypes.bool,
};

const defaultProps = {
    dark: false,
    striped: false,
    bordered: false,
    hover: false,
    small: false,
};

class Table extends React.Component {
    render() {
        const { children, dark, striped, bordered, hover, small, ...props } = this.props;
        const className = htmlClasses([
            ['table'],
            [dark, 'table-dark'],
            [striped, 'table-striped'],
            [bordered, 'table-bordered'],
            [hover, 'table-hover'],
            [small, 'table-sm'],
        ]);
        const htmlProperties = htmlProps(props, { className });
        
        return (
            <table {...htmlProperties}>
                {children}
            </table>
        );
    }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;