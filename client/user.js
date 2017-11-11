import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './user.html';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';


Template.loginu.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
      FlowRouter.go("/");
      Session.setPersistent('user', null);
  }
  });

  Template.user.events({
    'click .log': function(event){
      event.preventDefault();
      console.log('hii');
      Meteor.logout();
      FlowRouter.go("/");
      Session.setPersistent('user', null);
  }
  });