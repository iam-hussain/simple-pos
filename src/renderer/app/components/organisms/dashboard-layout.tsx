import styled from 'styled-components';
import { FullScreen } from '../atoms/screen';
import Navbar from '../molecules/navbar';

const Wrapper = styled.div`
  justify-content: flex-start;
  padding: ${(props) => props.theme.space[4]};
  background-color: ${(props: any) => props.theme.color.paper};
  overflow: hidden;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 1fr));
  grid-template-rows: min-content auto min-content;
  gap: ${(props) => props.theme.space[4]};
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

function DashboardLayout({ children }: any) {
  return (
    <Wrapper>
      <Navbar />
      <>{children}</>
    </Wrapper>
  );
}

export default DashboardLayout;
