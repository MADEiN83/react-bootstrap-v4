import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
};

const defaultProps = {
    
};

class SelectItem extends React.Component {
    render() {
        const { text, value, ...props } = this.props;

        return (
            <option value={value}>{text}</option>
        );
    }
}

SelectItem.propTypes = propTypes;
SelectItem.defaultProps = defaultProps;

export default SelectItem;