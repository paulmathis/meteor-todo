import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons, this.refs.container);
  }

  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  render() {
    return (
      // Just a placeholder container that will be filled in
      <span ref="container" />
    );
  }
}

export default AccountsUIWrapper;
