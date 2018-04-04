import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.string,
};

const defaultProps = {
    
};

class Row extends React.Component {
    render() {
        const { children, style, ...props } = this.props;

        return (
            <div className='row' style={style}>
                {children}
            </div>
        );
    }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;