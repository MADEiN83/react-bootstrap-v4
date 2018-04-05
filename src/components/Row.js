import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';

const propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.string,
};

const defaultProps = {
    
};

class Row extends React.Component {
    render() {
        const { children, ...props } = this.props;
        const className = htmlClasses([
            ['row'],
        ]);
        const htmlProperties = htmlProps(props, { className });

        return (
            <div {...htmlProperties}>
                {children}
            </div>
        );
    }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;