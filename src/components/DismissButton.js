import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string,
    onDismiss: PropTypes.func.isRequired,
};

const defaultProps = {
    label: 'close',
};

class DismissButton extends React.Component {
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

DismissButton.propTypes = propTypes;
DismissButton.defaultProps = defaultProps;

export default DismissButton;