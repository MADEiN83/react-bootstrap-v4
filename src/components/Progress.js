import React from 'react';
import { States, CssClasses } from '../config/ProgressConfig';
import HtmlUtils from '../utils/HtmlUtils';

export default class Progress extends React.Component {
    render() {
        let { min, max, value, type, label, height, striped, ...props } = this.props;
        const defaultClass = CssClasses.child;
        const typeClass = States[type];
        const stripedClass = striped ? CssClasses.striped : null;
        const animatedClass = striped ? CssClasses.animated : null;
        
        const className = HtmlUtils.htmlClass(defaultClass, typeClass, stripedClass, animatedClass);

        if(!min || min < 0) {
            min = 0;
        }

        if(!max) {
            max = 100;
        }

        if(value > max) {
            value = max;
        } else if (value < 0) {
            value = min;
        }

        if(!height) {
            height = 20;
        }


        return (
            <div className={CssClasses.container} style={{height: height + 'px'}}>
                <div
                    className={className}
                    role={CssClasses.role}
                    style={{width: value + '%'}}
                    aria-valuenow={value}
                    aria-valuemin={min}
                    aria-valuemax={max}>
                    {label ? value + '%' : null}
                </div>
            </div>
        );
    }
}