import React from 'react';

import { StyledMenu } from './styles/MenuItem.styled.jsx';

const Menu = ({items}) => {
    return (
        <StyledMenu>
            {items.map((menuItem) => {
                const {id, title, price, img, desc} = menuItem;

                return (
                    <article key={id} className="menu-item">
                        <img className='photo' src={img} alt={title} />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                )
            })}
        </StyledMenu>
    );
};

export default Menu;
