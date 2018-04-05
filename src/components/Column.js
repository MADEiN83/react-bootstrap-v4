import React from 'react';
import PropTypes from 'prop-types';
import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { Sizes } from '../config/ColumnConfig';

const propTypes = {
    children: PropTypes.any.isRequired,
    size: PropTypes.oneOf(Sizes),
    offsetLength: PropTypes.number,
    offsetSize: PropTypes.number,
    style: PropTypes.object,
};

const defaultProps = {
    
};

class Column extends React.Component {
    render() {
        const { children, size, offsetSize, offsetLength, ...props } = this.props;
        const className = htmlClasses([
            [size, 'col-' + size, 'col'],
            [offsetSize && offsetLength, 'offset-' + offsetSize + '-' + offsetLength],
        ]);
        const htmlProperties = htmlProps(props, { className });
        
        return (
            <div {...htmlProperties}>
                {children}
            </div>
        );
    }
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;