import React from 'react';
import PropTypes from 'prop-types';

import { htmlProps, htmlClasses } from '../utils/HtmlUtils';

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
        const className = htmlClasses([
            ['close'],
        ]);
        const htmlProperties = htmlProps(props, { className });

        if(!onDismiss) {
            return null;
        }

        return (
            <button {...htmlProperties} onClick={onDismiss} type="button" data-dismiss="alert" aria-label={label}>
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}

DismissButton.propTypes = propTypes;
DismissButton.defaultProps = defaultProps;

export default DismissButton;