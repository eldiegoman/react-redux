import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';


import HomeStyled, { HeaderStyled, FiltersStyled, SearchStyled } from './home.styled';
import { LayoutContainer } from '../../Components/layoutContainer';
import { PublicationsGrid } from '../../Components/publicationsGrid';

import * as homeActs from '../../state/modules/home/actions';
class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openSelect: false,
      filter: ''
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { homeActions } = this.props;
    let params = new URLSearchParams(location.search);

    if (homeActions) {
      if (params.id) {
        homeActions.fetchPublicationsById(params.id);
      } else {
        homeActions.fetchPublications();
      }
    }
  }

  fetchSearch = (e) => {
    e.preventDefault();
    const term = e.target.value;
    const { homeActions } = this.props;

    if (homeActions && term !== '') {
      homeActions.searchPublications(term);
    } else {
      homeActions.fetchPublications();
    }
  }

  filterData = (key) => {
    const { homeActions } = this.props;
    if (homeActions && key) {
      homeActions.filterPublications(key);
    }
  }

  render() {
    const { publications, isFetching } = this.props;

    return (
      <HomeStyled>
        <HeaderStyled>
          <SearchStyled>
            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Search by title"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => { this.fetchSearch(e) }}
            />
          </SearchStyled>

          <FiltersStyled>
            <h3>Sort by</h3>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button onClick={() => { this.filterData('date') }}>Date</Button>
              <Button onClick={() => { this.filterData('authorId') }}>Author</Button>
              <Button onClick={() => { this.filterData('title') }}>Title</Button>
            </ButtonGroup>
          </FiltersStyled>
        </HeaderStyled>

        {publications.length ? (<PublicationsGrid isFetching={isFetching} publications={publications}></PublicationsGrid>) : (
          <div>No results</div>
        )}
      </HomeStyled>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.home;
}

const mapDispatchToProps = dispatch => ({
  homeActions: bindActionCreators(homeActs, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
