/**
 * Concat all CSS classes into a single string.
 * @param {all classes} classes 
 */
export function htmlClass(...classes) {
    let result = classes.filter(function (val) { return val; }).join(' ');
    result = result.trim();

    return result;
}

export function first(array) {
    if(!array || array.length <= 0) {
        return null;
    }

    return array[0];
}

export function last(array) {
    if(!array || array.length <= 0) {
        return null;
    }

    return array[array.length - 1];
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