import styled from 'styled-components';

export const FullScreen = styled.div`
  height: auto;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  font-size: ${(props) => props.theme.font_sizes.text};
  line-height: ${(props) => props.theme.line_heights[0]};
  transition: ${(props) => props.theme.transition[0]};
  user-select: none;
  background-color: ${(props: any) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
`;

export const Island = styled.div`
  width: ${(props) => props.theme.space[11]};
  max-width: 100%;
  padding: ${(props) => props.theme.space[4]};
  margin: 0;
  background-color: ${(props) => props.theme.color.paper};
  border-radius: ${(props) => props.theme.border_radius};
  box-shadow: ${(props) => props.theme.shadows[0]};
`;

export const Card = styled.div`
  /* flex: 1; */
  width: auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.space[3]};
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[4]};
  margin: 0;
  background-color: ${(props) => props.theme.color.paper};
  border-radius: ${(props) => props.theme.border_radius};
  box-shadow: ${(props) => props.theme.shadows[0]};
`;

export const FlexBox = styled.div<{ flex?: number }>`
  /* background-color: ${(props) => props.theme.color.background}; */
  padding: ${(props) => props.theme.space[6]};
  flex: ${(props) => (props?.flex !== undefined ? props.flex : 1)};
  background-color: ${(props: any) => props.theme.color.paper};
  color: ${(props) => props.theme.color.text};
`;

export const ContentColumn = styled.div`
  flex: 1;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.space[5]};
  margin: 0;
  padding: 0;
`;
