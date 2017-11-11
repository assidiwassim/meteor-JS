import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './login.html';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';


Template.login.events({
    'submit form': function(event){
        event.preventDefault();
      
       var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
          username: username,
         password: password,
         profile:{role:"admin"}
          
      });
       
        Meteor.loginWithPassword(username, password, function(error){
          if(error){
            Bert.alert( error.reason, 'danger', 'growl-top-right' ); 
          } else {

            if(Meteor.user().profile['role'] ==="admin")

              {   Session.setPersistent('user',Meteor.user().profile['role']);
                      FlowRouter.go("/admin");

              }
              else if(Meteor.user().profile['role'] ==="super"){
                Session.setPersistent('user', Meteor.user().profile['role']);
                FlowRouter.go("/super");

              }
              else
                {

                  Session.setPersistent('user', "user");
                  FlowRouter.go("/user");

                }
          }
      });
    }
  
  });