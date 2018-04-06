import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { CssClasses } from '../config/FormConfig';

const propTypes = {
    children: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
    placeholder: PropTypes.string,
};

const defaultProps = {
    
};

class TextArea extends React.Component {
    render() {
        const { id, label, ...props } = this.props;
        const className = htmlClasses([
            [CssClasses.input],
        ]);
        const htmlProperties = htmlProps(props, { className });

        return (
            <div className={CssClasses.formGroup}>
                {label ? <label htmlFor={id}>{label}</label> : null}
                <textarea {...htmlProperties} id={id} />
            </div>
        );
    }
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;