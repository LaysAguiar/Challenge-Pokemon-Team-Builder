import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
     position: sticky;
     align-items: center;
     display: flex;
     flex-direction: column;
     align-items: center;
    justify-content: flex-end;
    padding: 0.063rem;
     width: 100%;
     height: 17vh;
     background: var(--main);
     & h1 {
          font-family: "Spartan", sans-serif;
          font-size:1.125rem;
          font-style: normal;
          font-weight: 800;
          line-height: 3rem;
          text-align: center;
          text-transform: uppercase;
          color:var(--white);
     }
`;
     export const Divider = styled.div`
     height: 0.063rem;
     width: 84.60%;
     background:var(--white);
     `;
