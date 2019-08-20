import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '../card/index'
import PublicationsGridStyled from './publicationsGrid.styled';


const buildGrid = (data) => {
  return data.map((item, index) => (
    <Card key={item.id} gridData={`col-${index}`}>
      <Card.Header>
        {item.title}
      </Card.Header>
      <Card.Content>
        <p>
          {item.body}
        </p>
        <h5>{item.date}</h5>
      </Card.Content>
    </Card>
  ))
}
const PublicationsGrid = (props) => {

  const { publications } = props;

  return (
    <PublicationsGridStyled>
      {buildGrid(publications)}
    </PublicationsGridStyled>
  )
}

PublicationsGrid.propTypes = {
  publications: PropTypes.array
}

PublicationsGrid.defaultProps = {
  publications: []
}

export default PublicationsGrid
