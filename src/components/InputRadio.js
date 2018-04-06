import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { CssClasses } from '../config/FormConfig';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string,
        value: PropTypes.string,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
    })),
    name: PropTypes.string,

};

const defaultProps = {
    
};

class InputRadio extends React.Component {
    render() {
        const { id, items, ...props } = this.props;
        const className = htmlClasses([
            [CssClasses.inputCheckbox],
        ]);
        const htmlProperties = htmlProps(props, { className });

        let htmlItems = items.map((i, key) => (
            <div key={key} className={CssClasses.formGroupCheckbox}>
                <input id={i.id} defaultChecked={i.defaultChecked} disabled={i.disabled} type="radio" {...htmlProperties}/>
                <label className={CssClasses.inputLabelCheckbox} htmlFor={i.id}>
                    {i.text}
                </label>
            </div>
        ));

        return (
            <React.Fragment>
                {htmlItems}
            </React.Fragment>
        );
    }
}

InputRadio.propTypes = propTypes;
InputRadio.defaultProps = defaultProps;

export default InputRadio;