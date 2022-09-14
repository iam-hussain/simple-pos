import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  height: 50px;
  background-color: ${(props: any) => props.theme.color.background};
  border-radius: ${(props) => props.theme.border_radius};
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 2;
`;

function Navbar() {
  return <Wrapper>Navbar</Wrapper>;
}

export default Navbar;
