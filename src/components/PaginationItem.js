import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';

const propTypes = {
    page: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

const defaultProps = {
    
};

class PaginationItem extends React.Component {
    render() {
        const { page, onClick, ...props } = this.props;

        return (
            <li className="page-item">
                <a className="page-link" onClick={onClick}>{page}</a>
            </li>
        );
    }
}

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;