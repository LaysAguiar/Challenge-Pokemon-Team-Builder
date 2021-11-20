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


 .input {
   margin: 2rem 0;
   display: flex;
   align-items: center;
   justify-content:center;
   gap: 1rem;

  & input{
    padding: 0.4rem;
   width: 50%;
   height: 1.5rem;
   border-radius: 16px;
   border: 1px solid #333652;

 }

 & button {
   border-radius:  50%;
   background: #333652;
   color:var(--white);
   align-items: center;
   justify-content:center;
   font-size: 0.8rem;
   height: 2rem;
   width: 2rem;
 }
 }
 

 & button{
  display: flex;
  align-items: center;
  justify-content:center;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;

  & :hover{
    filter: brightness(0.7);
  }
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

& .off-focus{
  filter: saturate(0.2);
}

& .pokeball {
  cursor: pointer;
  position: relative;
  min-height: 5rem;
  min-width: 5rem;
  align-items: center;
  display: flex;
  justify-content:center;

  .svg {
    position: absolute;
    z-index: 1;
  }

  img{ 
    position: absolute;
    z-index: 2;
    width: 100%;
    object-fit: fill;
    padding: 0.1rem;
  }
}
`;

export const ButtonContainer = styled.div`
width: 100%;
height: 6vh;
display: flex;
align-items: center;
justify-content: flex-end;
gap:0.813rem;

button {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;

  & :hover{
    filter: opacity(0.3);
  }

   :disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events:none;
  }

 

}

.trash {
    background: var(--red);
    color: var(--white);
  }

  .confirm {
    background: var(--green);
    color: var(--white);
  }
`;