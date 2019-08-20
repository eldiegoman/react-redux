import styled from 'styled-components'

const PublicationsGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fill, 250px);
      grid-gap: 5px;
      justify-content: center;

    .item {
      border-radius: 5px;
      padding: 10px;
      background: #f2f2f2;
    }

    .level-1 {
      grid-row-end: span 3;
    }

    .level-2 {
      grid-row-end: span 2;
    }
    .level-3 {
      grid-row-end: span 1;
    }

`

export default PublicationsGrid
