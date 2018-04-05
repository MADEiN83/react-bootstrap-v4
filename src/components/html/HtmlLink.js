import React from 'react';
import { htmlProps } from '../../utils/HtmlUtils';

export default class HtmlLink extends React.Component {
    render() {
        const { children, ...props } = this.props;
        const alertHtmlProps = htmlProps(props);

        return (
            <a {...alertHtmlProps}>
                {children}
            </a>
        );
    }
}