import React from 'react';
import PropTypes from 'prop-types';
import { htmlClass } from '../utils/HtmlUtils';

import TableRow from './TableRow';

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
        const { children, style, className, dark, striped, bordered, hover, small, ...props } = this.props;
        const baseClass = 'table';
        const darkClass = dark ? 'table-dark' : null;
        const stripedClass = striped ? 'table-striped' : null;
        const borderedClass = bordered ? 'table-bordered' : null;
        const hoverClass = hover ? 'table-hover' : null;
        const smallClass = small ? 'table-sm' : null;

        const finalClassName = htmlClass(baseClass, className, darkClass, stripedClass, borderedClass, hoverClass, smallClass);
        
        return (
            <table className={finalClassName} style={style}>
                {children}
            </table>
        );
    }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;