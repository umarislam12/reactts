//@ts-nocheck
import styled from "styled-components";

export const StyledNavbar=styled.header`
background-color:${({theme})=>theme.colors.header}
`
export const Nav=styled.nav`
display:flex;
flex-direction:row;
background-color:${({theme})=>theme.colors.header};
align-items:center;
justify-content: space-between;
margin-bottom:40px;
padding:10px; 
@media(max-width:${({theme})=>theme.mobile}){
  flex-direction:column;
}`


export const Logo  =styled.img`
@media(max-width:${({theme})=>theme.mobile}){
margin-bottm:40px;
}

`
export const Image=styled.img`
margin-left:40px;
width:375;
@media(max-width:${({theme})=>theme.mobile}){
  margin:40px 0 30px;
  }
`


// @media (max-width: 800px) {
//   .flex-item-right, .flex-item-left {
//     flex: 100%;
//   }
// }
