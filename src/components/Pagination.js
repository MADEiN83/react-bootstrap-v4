import React from 'react';
import PropTypes from 'prop-types';

import { htmlClasses, htmlProps } from '../utils/HtmlUtils';
import PaginationItem from './PaginationItem';

const propTypes = {
    ariaLabel: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    maxPages: PropTypes.number.isRequired,
    nextLabel: PropTypes.string,
    previousLabel: PropTypes.string,
};

const defaultProps = {
    nextLabel: 'Next',
    previousLabel: 'Previous',
};

class Pagination extends React.Component {
    _renderItems(maxPages, onClickHandler) {
        let items = [];

        for(let i = 1; i < maxPages + 1; i++) {
            let item = (
                <PaginationItem 
                    key={i}
                    page={i}
                    onClick={() => onClickHandler(i)}/>
            );

            items.push(item);
        }

        return items;
    }
    
    render() {
        const { ariaLabel, currentPage, maxPages, onClick, nextLabel, previousLabel, ...props } = this.props;
        const items = this._renderItems(maxPages, onClick);

        console.log(onClick)

        // const className = htmlClasses([
        //     ['row'],
        // ]);
        // const htmlProperties = htmlProps(props, { className });

        return (
            <nav aria-label={ariaLabel}>
                <ul className="pagination">
                    <PaginationItem 
                        key={previousLabel}
                        page={previousLabel}
                        onClick={() => onClick(previousLabel)}/>
                    {items}
                    <PaginationItem 
                        key={nextLabel}
                        page={nextLabel}
                        onClick={() => onClick(nextLabel)}/>
                </ul>
            </nav>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;