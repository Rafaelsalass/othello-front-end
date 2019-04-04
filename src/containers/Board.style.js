import styled from 'styled-components';

const BoardStyle = styled.div`
  .board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    max-width: 600px;
    grid-gap: 15px;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0px auto;
    align-items: center;
    justify-content: center;
  }
`

export default BoardStyle;
