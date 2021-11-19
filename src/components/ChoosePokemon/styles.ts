import styled, { css } from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 0 1.25rem;

 & h1 {
display: flex;
align-items: center;
gap: 0.375rem;
font-family: "Spartan", sans-serif;
font-size:0.813rem;
font-style: normal;
font-weight: 800;
line-height: 3rem;
 }
`;

export const Content = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
padding: 0 1.25rem;

`;