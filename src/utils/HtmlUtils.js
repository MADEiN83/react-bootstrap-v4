const HtmlUtils = {
    htmlClass(...classes) {
        const result = classes.filter(function (val) { return val; }).join(' ');
        return result.trim();
    }
}

export default HtmlUtils;