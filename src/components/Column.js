import React from 'react';
//import { States } from '../config/AlertConfig';
import HtmlUtils from '../utils/HtmlUtils';

//import DismissButton from './DismissButton';

export default class Column extends React.Component {
    render() {
        const { children, cssStyles, size, offsetSize, offsetLength, ...props } = this.props;

        const sizeClass = size ? 'col-' + size : 'col';
        const offsetClass = offsetSize && offsetLength ? 'offset-' + offsetSize + '-' + offsetLength : null;
        const className = HtmlUtils.htmlClass(sizeClass, offsetClass);

        return (
            <div className={className} style={cssStyles}>
                {children}
            </div>
        );
    }
}