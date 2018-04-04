import React from 'react';
import PropTypes from 'prop-types';

import { CssClasses } from '../config/CardConfig';

const propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    cssStyle: PropTypes.object,
};

const defaultProps = {
    
};

class Card extends React.Component {
    render() {
        const { title, children, image, imageAlt, cssStyle, ...props } = this.props;

        return (
            <div style={cssStyle} className={CssClasses.container}>
                {
                    image 
                    ? <img className={CssClasses.image} src={image} alt={imageAlt} />
                    : null
                }

                <div className={CssClasses.body}>
                    {title ? <h5 className={CssClasses.title}>{title}</h5> : null}
                    {children}
                </div>
            </div>
        );
    }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;