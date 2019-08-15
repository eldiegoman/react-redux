import React from "react";
import PropTypes from "prop-types";

const PublicationsGrid = (props) => {

  return (
    <div>
      publications grid
        </div>
  );
}

PublicationsGrid.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      authorId: PropTypes.number,
      body: PropTypes.string,
      date: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string
    })
  )
}

PublicationsGrid.defaultProps = {
  publications: []
}

export default PublicationsGrid;