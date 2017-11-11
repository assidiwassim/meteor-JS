import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './ListeTemplate.html';




Template.listeProfiles.helpers({
    
    userss:function(){
     
      return Meteor.users.find().fetch().reverse();
    
    },
    
    
      ad:function(x)
      {
        return x!="super" && x!="admin";
      },
      
      link:function()
      {
        return "/"+Session.get('user');
      }
    
    
      
    
  });

  Template.listeProfiles.events({
    
   
    
    'click .delete1':function(){
        Meteor.users.remove(this._id);
      }
     
    
    
      
    
  });

  Template.listePatrimoins.helpers({
    
    pat:function(){
     
      return Patrimoines.find().fetch().reverse();
    
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
   
    
    
      
    
  });

  Template.listePatrimoins.events({ 
    'click .map': function() { 
      FlowRouter.go("/"+Session.get('user')+"/map");
       
    } 
  });

  Template.listep.helpers({ 
    test:function(){
      return Session.get('user') ==="super" || Session.get('user') ==="admin";
    }
  });
 

  Template.listep.events({ 
    'click .delete2':function(){
      Patrimoines.remove(this._id);
    }
  });
      
  

  Template.listeDerictions.helpers({
    
    der:function(){
     
      return Derictions.find().fetch().reverse();
    
    },
    test:function(){
      return Session.get('user') ==="super" || Session.get('user') ==="admin";
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
    
    
      
    
  });



  Template.listeDerictions.events({
    
 
    'click .delete3':function(){
      Derictions.remove(this._id);
    }
    
      
    
  });

  Template.listeFonctions.helpers({
    
    fn:function(){
     
      return Fonctions.find().fetch().reverse();
    
    },
    test:function(){
      return Session.get('user') ==="super" || Session.get('user') ==="admin";
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
    
   
  });


  Template.listeFonctions.events({
    
 
    'click .delete4':function(){
      Fonctions.remove(this._id);
    }
    
      
    
  });

  Template.listeTypes.helpers({
    
    typ:function(){
     
      return Types.find().fetch().reverse();
    
    },link:function()
    {
      return "/"+Session.get('user');
    }
    
    
      
    
  });

  Template.listeTypes.events({
    
 
    'click .delete5':function(){
      Types.remove(this._id);
    }
    
      
    
  });

  Template.listeArrendissement.helpers({
    
    ar:function(){
     
      return Arrendissement.find().fetch().reverse();
    
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
    
    
      
    
  });

  Template.listeArrendissement.events({
    
 
    'click .delete6':function(){
      Arrendissement.remove(this._id);
    }
    
      
    
  });

  
  Template.listeDelegations.helpers({
    
    dl:function(){
     
      return Delegations.find().fetch().reverse();
    
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
  
    
  });

  Template.listeDelegations.events({
    
 
    'click .delete7':function(){
      Delegations.remove(this._id);
    }
    
      
    
  });

  Template.listeGauvernerat.helpers({
    
    gv:function(){
     
      return Gauvernerat.find().fetch().reverse();
    
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
    
    
      
    
  });

  Template.listeGauvernerat.events({
    
 
    'click .delete8':function(){
      Gauvernerat.remove(this._id);
    }
    
      
    
  });
  

  Template.listeLagement.helpers({
    
    lg:function(){
     
      return Lagement.find().fetch().reverse();
    
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
    
    
      
    
  });
  Template.listeLagement.events({
    
 
    'click .delete9':function(){
      Lagement.remove(this._id);
    }
    
      
    
  });

  Template.listeGardes.helpers({
    
    garde:function(){
     
      return Gardes.find().fetch().reverse();
    
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
    
    
      
    
  });

  Template.listeGardes.events({
    
 
    'click .delete10':function(){
      Gardes.remove(this._id);
    }
    
      
    
  });

  Template.listeAgents.helpers({
    
    agent:function(){
     
      return Agents.find().fetch().reverse();
    
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
    
    
      
    
  });

  Template.listeAgents.events({
    
 
    'click .delete11':function(){
      Agents.remove(this._id);
    }
    
      
    
  });