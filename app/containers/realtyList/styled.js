import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: realtive;
`;

export const RealtyListTable = styled.table`
  min-width: 700px;
  max-width: 800px;
  border-collapse: separate;
  overflow: hidden;
  margin: 40px 0;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid #999;
  -webkit-box-shadow: 5px 12px 16px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 12px 16px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 12px 16px 0px rgba(0, 0, 0, 0.75);

  th {
    /* background: #ddd; */
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    background: #f8f8f8; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #f8f8f8 0%,
      #dddddd 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #f8f8f8 0%,
      #dddddd 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #f8f8f8 0%,
      #dddddd 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }

  th:last-child {
    border-right: none;
  }

  td,
  th {
    padding: 5px 10px;
  }

  td {
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    text-align: center;

    button {
      cursor: pointer;
    }
  }

  td:last-child {
    border-right: none;
  }

  tr:nth-child(odd) {
    background: #f2f2f2;
  }

  tr:hover {
    background: #d1d1d1;
  }
`;