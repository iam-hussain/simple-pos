import styled from 'styled-components';
import { Text } from './typography';

export const List = styled.ul.attrs(() => ({}))`
  flex: 1;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  max-height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  transition: ${(props) => props.theme.transition[0]};
  margin: 0;
  gap: ${(props) => props.theme.space[1]};

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface LI {
  selected?: boolean;
}

export const ListItem = styled.li.attrs(
  (props: LI): LI => ({
    selected: props.selected || false,
  })
)`
  display: flex;
  justify-content: space-between;
  margin: 0;
  border-radius: ${(props) => props.theme.border_radius};
  border-right: 4px solid;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-color: ${(props) =>
    props.selected
      ? props.theme.color.secondary
      : props.theme.color.text_light};
  cursor: pointer;
  background-color: ${(props) =>
    props.selected
      ? props.theme.color.background
      : props.theme.color.background};

  &:last-child {
    border-bottom: 0;
  }

  ${Text} {
    padding: ${(props) => `${props.theme.space[3]} ${props.theme.space[2]}`};
    margin: 0;
    color: ${(props) =>
      props.selected
        ? props.theme.color.secondary
        : props.theme.color.text_light};
  }

  &:hover {
    background-color: ${(props) => props.theme.color.background_light};

    ${Text} {
      color: ${(props) =>
        props.selected
          ? props.theme.color.secondary
          : props.theme.color.text_light};
    }
  }
`;

export const ListAction = styled.div<{ flex?: number }>`
  flex: ${(props) => (props?.flex !== undefined ? props.flex : 1)};
  padding: 0 ${(props) => props.theme.space[3]};
  margin: auto;

  ${Text} {
    margin-top: 0;
    margin-bottom: 0;
  }
  &:hover {
    ${Text} {
      color: ${(props) => props.theme.color.primary_dark};
    }
  }
`;
