import React from 'react';

export default class HtmlLink extends React.Component {
    render() {
        const { title, url, cssStyle, children, ...props } = this.props;

        return (
            <a href={url} title={title} style={cssStyle}>
                {children}
            </a>
        );
    }
}