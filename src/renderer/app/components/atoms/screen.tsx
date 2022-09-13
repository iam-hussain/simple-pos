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
  background-color: ${(props) => props.theme.color.invert};
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.font_sizes.text};
  line-height: ${(props) => props.theme.line_heights[0]};
  transition: ${(props) => props.theme.transition[0]};
  user-select: none;
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
