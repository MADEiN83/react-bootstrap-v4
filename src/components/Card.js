import React from 'react';

import { CssClasses } from '../config/CardConfig';

export default class Card extends React.Component {
    render() {
        const { title, children, image, imageAlt, cssStyle, ...props } = this.props;

        return (
            <div style={cssStyle} className={CssClasses.container}>
                {
                    image 
                    ? <img visible={false} className={CssClasses.image} src={image} alt={imageAlt} />
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