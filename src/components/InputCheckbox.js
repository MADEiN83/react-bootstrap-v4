import React from 'react';
import Input from './Input';

class InputCheckbox extends React.Component {
    render() {
        let { ...props } = this.props;
        props.type = 'checkbox';

        return (
            <Input {...props} />
        );
    }
}

export default InputCheckbox;