import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import DetailStyled from './detail.styled';
class Detail extends Component {


  componentDidMount() {
    //this.fetchData();
  }

  fetchData() {
    const { DetailActions } = this.props;
    let params = new URLSearchParams(location.search);

    if (DetailActions) {
      if (params.id) {
        DetailActions.fetchPublicationsById(params.id);
      } else {
        DetailActions.fetchPublications();
      }
    }
  }

  render() {
    const { publications } = this.props;

    return (
      <DetailStyled>
        <div>
          Detail by author
        </div>
      </DetailStyled>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.Detail;
}

const mapDispatchToProps = dispatch => ({
  DetailActions: bindActionCreators(DetailActs, dispatch)
});

export default Detail;
