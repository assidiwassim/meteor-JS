import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Patrimoines = new Mongo.Collection('Patrimoines'); 
  Types = new Mongo.Collection('Types'); 
  Derictions =new Mongo.Collection('Derictions');
  Arrendissement= new Mongo.Collection('Arrendissement');
  Delegations= new Mongo.Collection('Delegations');
  Gauvernerat= new Mongo.Collection('Gauvernerat');
  Lagement=new Mongo.Collection('Lagement');
  Fonctions= new Mongo.Collection('Fonctions');
  Gardes = new Mongo.Collection('Gardes');
  Agents = new Mongo.Collection('Agents');
  Meteor.users.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
  });

  Meteor.methods({
    'createuser': function(email,password,username,nom,Prenom,sexe,Adresse){
      Accounts.createUser({
        email: email,
        password: password,
        username:username,
        profile:{Nom:nom,Prenom:Prenom,sexe:sexe,Adresse:Adresse,email:email,role:'user'}
    });
   
  },
  'insert':function(Libelle,adresse,Ville,superficieCouverte,compteurSteg,compteurSonede,longitude,latitude,est,ouest,sud,image,direction,Arrendissemen,Delegation,gouvernorat)
  {
    Patrimoines.insert({Libelle:Libelle,adresse:adresse,Ville:Ville,superficieCouverte:superficieCouverte,compteurSteg:compteurSteg,compteurSonede:compteurSonede,longitude:longitude,latitude:latitude,est:est
      ,ouest:ouest,sud:sud,image:image,direction:direction,Arrendissemen:Arrendissemen,Delegation:Delegation,gouvernorat:gouvernorat});


  }
  
       
     
    })











});
