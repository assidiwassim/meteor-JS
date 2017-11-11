import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './admin.html';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

Template.logina.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
      FlowRouter.go("/");
      Session.setPersistent('user', null);
  }
  
  });

  Template.admin.events({
    'click .loggout': function(event){
      event.preventDefault();
      Meteor.logout();
      FlowRouter.go("/");
      Session.setPersistent('user', null);
  }
  
  });