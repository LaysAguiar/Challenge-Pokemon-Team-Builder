import styled, { css } from 'styled-components';

type ContainerProps = {
  primaryColor: string;
  secundaryColor: string;
}

export const Container = styled.div<ContainerProps>`
    cursor: pointer;
    position: relative;
    width: 5.875rem;
    height: 7.875rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 0.5rem;
    overflow: hidden;

    .chosen{
    position: absolute;
    display: flex;
    width: 2rem;
    background: #90d861c4;
    height: 2rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    }

.id {

font-family: "Poppins", sans-serif;
font-size: 0.563rem;
font-style: normal;
font-weight: 700;
line-height: 0.875rem;
color: var(--white);
background: #90ADC6;

  display: flex;
  position: relative;
  right: 1.9rem;
  align-items: center;
  justify-content:center;
  height: 1.125rem;
  width: 1.125rem;
  border-radius: 50%;
}

.pokemon {
  display: flex;
    align-items: center;
    width: 2.813rem;
    height: 2.813rem;
    min-height: 2.813rem;
    width: 2.813rem;
    object-fit: cover;
    image-rendering: pixelated;
    margin-bottom: 0.125rem;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
}

h1 { 
font-family: "Spartan", sans-serif;
font-size: 0.5rem;
font-style: normal;
font-weight: 700;
line-height: 0.563rem;
color: #333652;
margin-bottom: 0.125rem;
}

.colors {
  display: flex;
  height: 3px;
  width: 100%;
  gap:0.125rem;
}

.primaryColor {
  background:${props => props.primaryColor};
  height: 2px;
  width: 100%;
}
.secundaryColor{
  background:${props => props.secundaryColor};
  height: 2px;
  width: 100%;
}

`;
