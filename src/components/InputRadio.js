import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { CssClasses } from '../config/FormConfig';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string,
        text: PropTypes.string,
        value: PropTypes.string,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
    })),
    name: PropTypes.string,
    inline: PropTypes.bool,
};

const defaultProps = {
    
};

class InputRadio extends React.Component {
    render() {
        const { id, items, inline, ...props } = this.props;
        const className = htmlClasses([
            [CssClasses.inputCheckbox],
        ]);
        const htmlProperties = htmlProps(props, { className });

        const classNameContainer = htmlClasses([
            [CssClasses.formGroupCheckbox],
            [inline, CssClasses.inlineCheckbox]
        ]);

        let htmlItems = items.map((i, key) => (
            <div key={key} className={classNameContainer}>
                <input id={i.id} defaultChecked={i.defaultChecked} disabled={i.disabled} type="radio" {...htmlProperties}/>
                {
                    i.text
                    ? <label className={CssClasses.inputLabelCheckbox} htmlFor={i.id}>
                        {i.text}
                    </label>
                    : null
                }
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