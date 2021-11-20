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
justify-content: center;
flex-wrap: wrap;
padding: 0 1.25rem;
gap: 1.938rem;

& .pokeball {
  position: relative;
  min-height: 5.466rem;
  min-width: 5.466rem;
  align-items: center;
  display: flex;
  justify-content:center;

  .svg {
    position: absolute;
    z-index: 1;
  }

  img{ 
    position: absolute;
    width:5.466rem;
    height: 5.466rem;
    z-index: 2;
    width: 100%;
    
  }
}
`;

export const Divider = styled.div`
width: 100%;
height: 1px;
background: #333652;

`;