import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { CssClasses, Sizes, AvailableSizes } from '../config/FormConfig';
import SelectItem from '../components/SelectItem';

const propTypes = {
    children: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    multiple: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string,
    })),
    size: PropTypes.oneOf(AvailableSizes),
};

const defaultProps = {
    multiple: false,
};

class Select extends React.Component {
    _renderItems(items) {
        if(!items) {
            return null;
        }

        let htmlItems = items.map((i, key) => (
            <SelectItem key={key} {...i} />
        ));

        return htmlItems;
    }

    render() {
        const { id, label, items, size, ...props } = this.props;
        const className = htmlClasses([
            [CssClasses.input],
            [Sizes[size]]
        ]);
        const htmlProperties = htmlProps(props, { className });
        const htmlItems = this._renderItems(items);

        return (
            <div className={CssClasses.formGroup}>
                {label ? <label htmlFor={id}>{label}</label> : null}
                <select {...htmlProperties} id={id}>
                    {htmlItems}
                </select>
            </div>
        );
    }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;