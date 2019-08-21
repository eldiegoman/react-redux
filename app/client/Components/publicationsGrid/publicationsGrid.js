import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';

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

  const { publications, isFetching } = props;

  if (isFetching) return <CircularProgress />

  return (
    <PublicationsGridStyled>
      {buildGrid(publications)}
    </PublicationsGridStyled>
  )
}

PublicationsGrid.propTypes = {
  publications: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  isFetching: PropTypes.bool
}

PublicationsGrid.defaultProps = {
  publications: []
}

export default PublicationsGrid
