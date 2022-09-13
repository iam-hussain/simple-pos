import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: right;
  border-radius: 5px;
  border-collapse: collapse;

  th {
    text-transform: uppercase;
    padding: ${(props) => props.theme.space[4]};
    font-size: ${(props) => props.theme.font_sizes.text};
    font-weight: ${(props) => props.theme.font_weight.normal};
    line-height: ${(props) => props.theme.line_heights[1]};
    color: ${(props) => props.theme.color.text};
    text-align: right;
    border-bottom: 2px solid ${(props) => props.theme.color.secondary};
    border-right: 1px solid ${(props) => props.theme.color.secondary_lighter};
    &:last-child {
      border-right: 0;
    }
  }
  td {
    font-size: ${(props) => props.theme.font_sizes.text};
    font-weight: ${(props) => props.theme.font_weight.light};
    line-height: ${(props) => props.theme.line_heights[1]};
    color: ${(props) => props.theme.color.text_light};
    text-align: right;
    border-right: 1px solid ${(props) => props.theme.color.secondary_lighter};
    border-bottom: 1px solid ${(props) => props.theme.color.secondary_lighter};
    padding: ${(props) => props.theme.space[3]};
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }
  }
  tbody {
    tr {
      &:hover {
        background-color: ${(props) => props.theme.color.paper};
        td {
          color: ${(props) => props.theme.color.text};
        }
      }
      &:last-child {
        td {
          border-bottom: 0;
        }
      }
    }
  }
`;

export const TableWrapper = styled.div`
  margin: ${(props) => props.theme.space[4]} 0;
  overflow: hidden;
  max-height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
