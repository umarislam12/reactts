//@ts-nocheck
import styled from "styled-components";

export const StyledNavbar=styled.header`
background-color:${({theme})=>theme.colors.header}
`
export const Nav=styled.nav`
display:flex;
background-color:${({theme})=>theme.colors.header};
align-items:center;
justify-content: space-between;
margin-bottom:40px;
padding:10px `


export const Logo  =styled.img`


`



// @media (max-width: 800px) {
//   .flex-item-right, .flex-item-left {
//     flex: 100%;
//   }
// }
