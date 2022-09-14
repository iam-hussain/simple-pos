import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: right;
  border-radius: 5px;
  border-collapse: collapse;

  th,
  td {
    padding: ${(props) => props.theme.space[3]};
  }
  th {
    font-size: ${(props) => props.theme.font_sizes.text};
    font-weight: ${(props) => props.theme.font_weight.bold};
    line-height: ${(props) => props.theme.line_heights[1]};
    color: ${(props) => props.theme.color.text};
    text-align: right;
    border: 3px solid ${(props) => props.theme.color.paper_dark};
    &:last-child {
      border-right: 0;
    }
    &:first-child {
      border-left: 0;
    }
  }
  td {
    font-size: ${(props) => props.theme.font_sizes.text};
    font-weight: ${(props) => props.theme.font_weight.light};
    line-height: ${(props) => props.theme.line_heights[1]};
    color: ${(props) => props.theme.color.text_light};
    text-align: right;
    border-right: 1px solid ${(props) => props.theme.color.paper_dark};
    border-bottom: 1px solid ${(props) => props.theme.color.paper_dark};
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }
  }
  tbody {
    tr {
      &:hover {
        background-color: ${(props) => props.theme.color.background_light};
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
  width: 100%;
  margin: 0;
  overflow: hidden;
  max-height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
