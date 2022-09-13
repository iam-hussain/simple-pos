import styled from 'styled-components';
import { Text } from './typography';

export const List = styled.ul.attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.space[4]} 0;
  padding: 0;
  list-style: none;
  transition: ${(props) => props.theme.transition[0]};
  max-height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
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
  flex: 1;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid;
  border-right: 1px solid;
  border-color: ${(props) =>
    false ? props.theme.color.primary : props.theme.color.secondary_lighter};
  /* border-radius: ${(props) => props.theme.border_radius}; */
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.color.paper : props.theme.color.background};

  &:last-child {
    border-bottom: 0;
  }

  ${Text} {
    color: ${(props) =>
      props.selected ? props.theme.color.primary : props.theme.color.primary};
  }
`;

export const FlexBox = styled.div<{ flex?: number }>`
  flex: ${(props) => (props?.flex !== undefined ? props.flex : 1)};
  padding: ${(props) => props.theme.space[3]};

  ${Text} {
    margin-bottom: 0;
  }
  &:hover {
    ${Text} {
      color: ${(props) => props.theme.color.primary_dark};
    }
  }
`;

export const ActionBox = styled.div<{ flex?: number }>`
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
