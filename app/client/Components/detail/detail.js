import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

import DetailStyled from './detail.styled';

import { PublicationsGrid } from '../../Components/publicationsGrid';
import * as detailActs from '../../state/modules/detail/actions';
class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authorId: null
    }
  }
  componentDidMount() {

    const { detailActions, publications, match: { params: { authorId } }
    } = this.props;

    this.setState({
      authorId
    });

    if (authorId && detailActions) {
      detailActions.fetchAuthor(authorId);
      detailActions.fetchPublications(authorId);
    }

  }
  componentDidUpdate() {
    const { detailActions, match: { params: { authorId } }
    } = this.props;

    if (authorId !== this.state.authorId)
      if (authorId && detailActions) {
        this.setState({
          authorId
        });
        detailActions.fetchAuthor(authorId);
        detailActions.fetchPublications(authorId);
      }
  }


  render() {

    const { author, publications, isFetching } = this.props;

    return (
      <DetailStyled>
        <Avatar>{author.firstName ? author.firstName.charAt(0) : ''}</Avatar>
        <span>
          {`${author.firstName} ${author.lastName}`}
        </span>

        {publications.length ? (<PublicationsGrid isFetching={isFetching} publications={publications}></PublicationsGrid>) : (
          <div>No results</div>
        )}
      </DetailStyled>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.detail;
}

const mapDispatchToProps = dispatch => ({
  detailActions: bindActionCreators(detailActs, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
