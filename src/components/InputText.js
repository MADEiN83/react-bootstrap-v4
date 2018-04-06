import React from 'react';
import Input from './Input';

class InputText extends React.Component {
    render() {
        let { ...props } = this.props;
        props.type = 'text';

        return (
            <Input {...props} />
        );
    }
}

export default InputText;