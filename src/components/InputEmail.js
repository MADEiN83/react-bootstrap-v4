import React from 'react';
import Input from './Input';

class InputEmail extends React.Component {
    render() {
        let { ...props } = this.props;
        props.type = 'email';

        return (
            <Input {...props} />
        );
    }
}

export default InputEmail;