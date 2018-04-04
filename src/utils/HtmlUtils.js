const HtmlUtils = {
    /**
     * Concat all CSS classes into a single string.
     * @param {all classes} classes 
     */
    htmlClass(...classes) {
        let result = classes.filter(function (val) { return val; }).join(' ');
        result = result.trim();

        return result;
    }
}


/**
 * Concat all CSS classes into a single string.
 * @param {all classes} classes 
 */
export function htmlClass(...classes) {
    let result = classes.filter(function (val) { return val; }).join(' ');
    result = result.trim();

    return result;
}

export default HtmlUtils;