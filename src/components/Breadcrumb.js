import React from 'react';
import PropTypes from 'prop-types';
import HtmlLink from './html/HtmlLink';
import BreadcrumbItem from './BreadcrumbItem';

import { CssClasses } from '../config/BreadcrumbConfig';
import { isLast } from '../utils/HtmlUtils';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        title: PropTypes.string,
        url: PropTypes.string
    }))
};

const defaultProps = {
    
};

class Breadcrumb extends React.Component {
    _renderItems(items) {
        const itemsCount = items.length;

        return items.map((i, key) => {
            let active = false;
            let children = i.text;
            
            if(isLast(key, itemsCount)) {
                active = true;
                children = <HtmlLink url={i.url} title={i.title}>{i.text}</HtmlLink>;
            }

            return (
                <BreadcrumbItem key={key} active={active}>
                    {children}
                </BreadcrumbItem>
            );
        });
    }

    render() {
        const { items } = this.props;
        const view = this._renderItems(items);

        return (
            <nav aria-label={CssClasses.container}>
                <ol className={CssClasses.container}>
                    {view}
                </ol>
            </nav>
        );
    }
}

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;