import React from 'react';
import { Meteor } from 'meteor/meteor';

import { Links } from '../api/links';
import LinksList from './LinksList';
import LinkListFilters from './LinkListFilters';

import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default class Link extends React.Component {

  componentWillMount() {
      if (!Meteor.userId())
          this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <PrivateHeader title="Your Links"/>
        <div className="page-content">
          <LinkListFilters/>
          <AddLink/>
          <LinksList/>
        </div>
      </div>
    );
  }
}
