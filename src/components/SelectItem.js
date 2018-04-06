import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
};

const defaultProps = {
    
};

class SelectItem extends React.Component {
    render() {
        const { text, value, id, ...props } = this.props;

        return (
            <option id={id} value={value}>{text}</option>
        );
    }
}

SelectItem.propTypes = propTypes;
SelectItem.defaultProps = defaultProps;

export default SelectItem;