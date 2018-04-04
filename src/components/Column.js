import React from 'react';
import PropTypes from 'prop-types';
import { htmlClass } from '../utils/HtmlUtils';
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
        const { children, style, size, offsetSize, offsetLength, ...props } = this.props;
        const sizeClass = size ? 'col-' + size : 'col';
        const offsetClass = offsetSize && offsetLength
            ? 'offset-' + offsetSize + '-' + offsetLength
            : null;

        const className = htmlClass(sizeClass, offsetClass);

        const htmlProps = { className, style };
        
        return (
            <div {...htmlProps}>
                {children}
            </div>
        );
    }
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;