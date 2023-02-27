import styled from "styled-components";

export const StyledMenu = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    gap: 3rem 2rem;
    justify-items: center;

    @media screen and (min-width: 1200px) {
        width: 95vw;
        grid-template-columns: 1fr 1fr;
    }    

    .menu-item {
        display: grid;
        gap: 1rem 2rem;
        max-width: 25rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: 225px 1fr;
            gap: 0 1.25rem;
            max-width: 40rem;
        }
    }
    .photo {
        object-fit: cover;
        height: 200px;
        width: 100%;
        border: 0.25rem solid var(--clr-gold);
        border-radius: var(--radius);
        display: block;

        @media screen and (min-width: 768px) {
            height: 175px;
        }

        @media screen and (min-width: 1200px) {
            height: 150px;
        }
    }
    .item-info header {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px dotted var(--clr-grey-5);
    }
    .item-info h4 {
        margin-bottom: 0.5rem;
    }
    .price {
        color: var(--clr-gold);
    }

    .item-text {
        margin-bottom: 0;
        padding-top: 1rem;
    }
`