import React from 'react';

import { StyledFilterCnt } from './styles/Filter.styled.jsx'

const Categories = ({filterItems, allCategories}) => {

    return (
        <StyledFilterCnt>
            {allCategories.map((menuCategory, index) => {
                return (
                    <button 
                        key={index}
                        className="filter-btn"
                        onClick={ () => filterItems(menuCategory)}
                    >
                        {menuCategory}
                    </button>
                )    
            })}
        </StyledFilterCnt>
    );
}

export default Categories;