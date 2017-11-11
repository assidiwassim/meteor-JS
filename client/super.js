import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './super.html';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

Template.loginS.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
      FlowRouter.go("/");
      Session.setPersistent('user', null);
  }
  });


  Template.super.events({
    'click .logoutt': function(event){

      event.preventDefault();
      Meteor.logout();
      FlowRouter.go("/");
      Session.setPersistent('user', null);
  }
  });