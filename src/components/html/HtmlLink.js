import React from 'react';

export default class HtmlLink extends React.Component {
    render() {
        const { title, url, cssStyle, children, onClick } = this.props;

        return (
            <a href={url} title={title} style={cssStyle} onClick={onClick}>
                {children}
            </a>
        );
    }
}