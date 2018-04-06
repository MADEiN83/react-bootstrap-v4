import React from 'react';
import PropTypes from 'prop-types';
import { htmlClasses, htmlProps } from '../utils/HtmlUtils';

const propTypes = {
    children: PropTypes.any.isRequired,
    url: PropTypes.string,
    method: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

const defaultProps = {
    method: 'GET',
};

class Form extends React.Component {
    render() {
        const { children, url, method, ...props } = this.props;
        // const className = htmlClasses([
        //     [size, 'col-' + size, 'col'],
        //     [offsetSize && offsetLength, 'offset-' + offsetSize + '-' + offsetLength],
        // ]);
        // const htmlProperties = htmlProps(props, { className });
        
        return (
            <form>
                {children}
            </form>
        );
    }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;