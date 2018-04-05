import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import { CssClasses } from '../config/CardConfig';

const propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,
};

const defaultProps = {
    alt: 'image',
};

class Card extends React.Component {
    render() {
        const { title, children, src, alt, ...props } = this.props;
        const imageHtmlProps = { className: CssClasses.image, src, alt };
        
        const htmlImage = src 
            ? <img {...imageHtmlProps} />
            : null;

        const htmlTitle = title 
            ? <h5 className={CssClasses.title}>{title}</h5>
            : null;
            
        const className = htmlClasses([
            [CssClasses.container],
        ]);
        const htmlProperties = htmlProps(props, { className });

        return (
            <div {...htmlProperties}>
                {htmlImage}

                <div className={CssClasses.body}>
                    {htmlTitle}
                    {children}
                </div>
            </div>
        );
    }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;