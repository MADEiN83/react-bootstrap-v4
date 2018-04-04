import React from 'react';

export default class DismissButton extends React.Component {
    render() {
        let { label, onDismiss, ...props } = this.props;

        if(!onDismiss) {
            return '';
        }

        return (
            <button onClick={onDismiss} type="button" className="close" data-dismiss="alert" aria-label={label}>
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}