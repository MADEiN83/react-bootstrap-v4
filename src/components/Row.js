import React from 'react';
//import { States } from '../config/AlertConfig';

//import DismissButton from './DismissButton';

export default class Row extends React.Component {
    render() {
        const { children, cssStyles, ...props } = this.props;

        return (
            <div className='row' style={cssStyles}>
                {children}
            </div>
        );
    }
}