import React from 'react';

import { StyledFilterCnt } from './styles/Filter.styled.jsx'

const Categories = ({filterItems}) => {

    const filterAction = () => {
        filterItems('breakfast')
    };

    return (
        <StyledFilterCnt>
            <button 
                className="filter-btn"
                onClick={filterAction}
            >
                Breakfast
            </button>
        </StyledFilterCnt>
    );
}

export default Categories;