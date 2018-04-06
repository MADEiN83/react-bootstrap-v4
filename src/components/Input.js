import React from 'react';
import PropTypes from 'prop-types';
import { first, htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { InputTypes, AvailableTypes, AvailableSizes, CssClasses, Sizes } from '../config/FormConfig';

const propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    help: PropTypes.any,
    type: PropTypes.oneOf(AvailableTypes),
    size: PropTypes.oneOf(AvailableSizes),
    readOnly: PropTypes.bool,
};

const defaultProps = {
    type: first(AvailableTypes),
};

class Input extends React.Component {
    render() {
        const { label, id, help, size, ...props } = this.props;
        let formGroupClass = CssClasses.formGroup;
        let inputClass = CssClasses.input;
        let labelClass;
        let reverse = false;

        switch(props.type) {
            case 'checkbox':
                formGroupClass = CssClasses.formGroupCheckbox;
                inputClass = CssClasses.inputCheckbox;
                labelClass = CssClasses.inputLabelCheckbox;
                reverse = true;
                break;
        }

        const className = htmlClasses([
            [inputClass],
            [Sizes[size]]
        ]);
        const htmlProperties = htmlProps(props, { className });
        const htmlLabel = label ? <label htmlFor={id} className={labelClass}>{label}</label> : null;
        const htmlInput = <input {...htmlProperties} id={id} />;
        const htmlSmall = help ? <small className={CssClasses.inputHelp}>{help}</small> : null;
        
        return (
            <div className={formGroupClass}>
                {
                    !reverse 
                    ? <React.Fragment>{htmlLabel}{htmlInput}</React.Fragment>
                    : <React.Fragment>{htmlInput}{htmlLabel}</React.Fragment>
                }

                {htmlSmall}
            </div>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;