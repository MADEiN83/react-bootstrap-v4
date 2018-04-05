import React from 'react';
import PropTypes from 'prop-types';
import { Types, AvailableTypes, CssClasses } from '../config/ProgressConfig';
import { htmlClass, first } from '../utils/HtmlUtils';

const propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number.isRequired,
    type: PropTypes.oneOf(AvailableTypes),
    height: PropTypes.number,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    label: PropTypes.bool,
};

const defaultProps = {
    height: 20,
    value: 0,
    min: 0,
    max: 100,
    type: first(AvailableTypes),
    striped: false,
    animated: false,
    label: false,
};

class Progress extends React.Component {
    render() {
        let { min, max, value, type, label, height, striped, animated, ...props } = this.props;
        const typeClass = Types[type];
        const stripedClass = striped ? CssClasses.striped : null;
        const animatedClass = animated ? CssClasses.animated : null;
        
        const className = htmlClass(CssClasses.child, typeClass, stripedClass, animatedClass);

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

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;