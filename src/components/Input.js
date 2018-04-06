import React from 'react';
import PropTypes from 'prop-types';
import { first, htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { InputTypes, CssClasses } from '../config/FormConfig';

const propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    help: PropTypes.any,
    type: PropTypes.oneOf(InputTypes),
};

const defaultProps = {
    type: first(InputTypes),
};

class Input extends React.Component {
    render() {
        const { label, id, help, ...props } = this.props;
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