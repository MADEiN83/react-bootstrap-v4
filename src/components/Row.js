import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.any.isRequired,
    cssStyles: PropTypes.string,
};

const defaultProps = {
    
};

class Row extends React.Component {
    render() {
        const { children, cssStyles, ...props } = this.props;

        return (
            <div className='row' style={cssStyles}>
                {children}
            </div>
        );
    }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;