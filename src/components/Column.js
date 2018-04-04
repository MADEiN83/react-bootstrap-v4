import React from 'react';
import PropTypes from 'prop-types';
import HtmlUtils from '../utils/HtmlUtils';
import { Sizes } from '../config/ColumnConfig';

const propTypes = {
    children: PropTypes.any.isRequired,
    size: PropTypes.oneOf(Sizes),
    offsetLength: PropTypes.number,
    offsetSize: PropTypes.number,
    cssStyles: PropTypes.object,
};

const defaultProps = {
    
};

class Column extends React.Component {
    render() {
        const { children, cssStyles, size, offsetSize, offsetLength, ...props } = this.props;

        const sizeClass = size ? 'col-' + size : 'col';
        const offsetClass = offsetSize && offsetLength ? 'offset-' + offsetSize + '-' + offsetLength : null;
        const className = HtmlUtils.htmlClass(sizeClass, offsetClass);
        
        return (
            <div className={className} style={cssStyles}>
                {children}
            </div>
        );
    }
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;