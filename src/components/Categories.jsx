import React from 'react';

import { StyledFilterCnt } from './styles/Filter.styled.jsx'

const Categories = ({filterItems}) => {

    return (
        <StyledFilterCnt>
            <button className="filter-btn">Btn Label</button>
        </StyledFilterCnt>
    );
}

export default Categories;