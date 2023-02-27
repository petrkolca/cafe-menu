import React from 'react';

import { StyledFilterCnt } from './styles/Filter.styled.jsx'

const Categories = ({filterItems}) => {


    return (
        <StyledFilterCnt>
            <button 
                className="filter-btn"
                onClick={ () => filterItems('all')}
            >
                All
            </button>
            <button 
                className="filter-btn"
                onClick={ () => filterItems('breakfast')}
            >
                Breakfast
            </button>
        </StyledFilterCnt>
    );
}

export default Categories;