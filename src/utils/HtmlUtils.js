const htmlKeys = [
    'style',
    'className',
    'disabled',
    'href',
    'min',
    'max',
    'value',
    'src',
    'alt',
    'title',
    
    'placeholder',
    'id',
    'defaultValue',
    'type',
    
    'onClick',
    'onChange',
];

export function htmlProps(props, otherProperties) {
    let r = otherProperties || {};

    for(const key of htmlKeys) {
        if(!props[key]) {
            continue;
        }

        ({ [key]: r[key] } = props);
    }

    return r;
}

export function first(array) {
    if(!array || array.length <= 0) {
        return null;
    }

    const [first] = array;
    return first;
}

export function last(array) {
    const length = array.length;
    if(!array || length <= 0) {
        return null;
    }

    return array[length - 1];
}

export function isLast(i, data) {
    if(Array.isArray(data)) {
        return i === data.length - 1;
    }
    
    if(typeof data === 'number') {
        return i === data - 1;
    }

    return false;
}

/**
 * Concat all CSS classes into a single string.
 * @param {all classes} classes 
 */
export function htmlClasses(array) {
    let r = [];
    for(let row of array) {
        let [condition, trueValue, falseValue] = row;

        if(condition && !trueValue && !falseValue) {
            r.push(condition);
        } else {
            r.push(condition ? trueValue : falseValue);
        }
    }

    const result = r.filter(function (val) { return val; }).join(' ');
    return result;
}