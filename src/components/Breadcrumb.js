import React from 'react';
import PropTypes from 'prop-types';
import HtmlLink from './html/HtmlLink';

import { CssClasses } from '../config/BreadcrumbConfig';

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
            let className = CssClasses.item;
            let children = i.text;
            
            if(key != itemsCount -1) {
                className += CssClasses.active;
                children = <HtmlLink url={i.url} title={i.title}>{i.text}</HtmlLink>;
            }

            return (
                <li key={key}
                    className={className}>
                    {children}
                </li>
            );
        });
    }

    render() {
        const { items, ...props } = this.props;
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