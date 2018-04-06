import React from 'react';
import Input from './Input';

class InputPassword extends React.Component {
    render() {
        let { ...props } = this.props;
        props.type = 'password';

        return (
            <Input {...props} />
        );
    }
}

export default InputPassword;