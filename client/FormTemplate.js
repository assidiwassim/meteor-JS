import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Patrimoines = new Mongo.Collection('Patrimoines'); 
Types = new Mongo.Collection('Types'); 
Derictions =new Mongo.Collection('Derictions');
Arrendissement= new Mongo.Collection('Arrendissement');
Delegations= new Mongo.Collection('Delegations');
Gauvernerat = new Mongo.Collection('Gauvernerat');
Lagement=new Mongo.Collection('Lagement');
Fonctions= new Mongo.Collection('Fonctions');
Gardes = new Mongo.Collection('Gardes');
Agents = new Mongo.Collection('Agents');


import './FormTemplate.html';


Template.AjouterProfiles.events({
    'submit form': function(event){
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        var username = event.target.username.value;
        var nom = event.target.Nom.value;
        var Prenom=event.target.Prenom.value;
        var sexe=event.target.sexe.value;
        var Adresse=event.target.Adresse.value;
        Meteor.call('createuser',email,password,username,nom,Prenom,sexe,Adresse,email,function(result,error){
            if(error)
                {
                    Bert.alert( error.reason, 'danger', 'growl-top-right' ); 
                }
                else
                    {
                        Bert.alert( "votre Profile a été créé avec succès", 'success', 'growl-top-right' );

                           
                          var email = event.target.email.value="";
                          var password = event.target.password.value="";
                          var username = event.target.username.value="";
                          var nom = event.target.Nom.value="";
                          var Prenom=event.target.Prenom.value="";
                          var sexe=event.target.sexe.value="";
                          var Adresse=event.target.Adresse.value="";

                    }
        });

     
       
    },
    'click .annuler':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
    
  });





  Template.AjouterTypes.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        var Propriete = event.target.Propriete.value;
      
        Types.insert({Libelle:Libelle,Propriete:Propriete});
        Bert.alert( "votre type a été créé avec succès", 'success', 'growl-top-right' );
        var Libelle = event.target.Libelle.value="";
        var Propriete = event.target.Propriete.value="";
       
    },
    'click .annuler2':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
  });



  Template.AjouterDerictions.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        
      
        Derictions.insert({Libelle:Libelle});
        Bert.alert( "votre Derictions a été créé avec succès", 'success', 'growl-top-right' );
        var Libelle = event.target.Libelle.value="";
        
       
    },
    'click .annuler3':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
  });


  Template.AjouterArrendissement.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        
      
        Arrendissement.insert({Libelle:Libelle});
        Bert.alert( "votre Arrendissement a été créé avec succès", 'success', 'growl-top-right' );
        var Libelle = event.target.Libelle.value="";
        
       
    },
    'click .annulerr':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
  });

  Template.AjouterDelegations.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        
      
        Delegations.insert({Libelle:Libelle});
        Bert.alert( "votre Delegations a été créé avec succès", 'success', 'growl-top-right' );
        var Libelle = event.target.Libelle.value="";
        
       
    },
    'click .annulerr4':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
  });



  Template.AjouterFonctions.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        
      
        Fonctions.insert({Libelle:Libelle});
        Bert.alert( "votre Delegations a été créé avec succès", 'success', 'growl-top-right' );
        var Libelle = event.target.Libelle.value="";
        
       
    },
    'click .annulerr8':function(){
        event.preventDefault();
       FlowRouter.go("/"+Session.get('user'));
    }
  });


  Template.AjouterGardes.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        
      
        Gardes.insert({Libelle:Libelle});
        Bert.alert( "votre Delegations a été créé avec succès", 'success', 'growl-top-right' );
        var Libelle = event.target.Libelle.value="";
        
       
    },
    'click .annulerr9':function(){
        event.preventDefault();
       FlowRouter.go("/"+Session.get('user'));
    }
  });


  Template.AjouterGauvernerat.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        var Arrendissemen=event.target.Arrendissemen.value;
        var Delegation=event.target.Delegation.value;
      
        Gauvernerat.insert({Libelle:Libelle,Arrendissemen:Arrendissemen,Delegation:Delegation});
        Bert.alert( "votre Gauvernerat a été créé avec succès", 'success', 'growl-top-right' );
        var Libelle = event.target.Libelle.value="";
        var Arrendissemen=event.target.Arrendissemen.value="";
        var Delegation=event.target.Delegation.value="";
        
       
    },
    'click .annulerr5':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
  });

  Template.AjouterLagement.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        var Locataire=event.target.Locataire.value;
        var Montant=event.target.Montant.value;
        var datedeb=event.target.datedeb.value;
        var datefin=event.target.datefin.value;
        var patrimoine=event.target.patrimoine.value;
        var Agent=event.target.Agent.value;
      
        Lagement.insert({Libelle:Libelle,Locataire:Locataire,Montant:Montant,datedeb:datedeb,datefin:datefin,patrimoine:patrimoine,Agent:Agent});
        Bert.alert( "votre Lagement a été créé avec succès", 'success', 'growl-top-right' );
        var Libelle = event.target.Libelle.value="";
        var Locataire=event.target.Locataire.value="";
        var Montant=event.target.Montant.value="";
        var datedeb=event.target.datedeb.value="";
        var datefin=event.target.datefin.value="";
        var patrimoine=event.target.patrimoine.value="";
        var Agent=event.target.Agent.value="";

        
       
    },
    'click .annulerr6':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
  });

  Template.AjouterPatrimoins.events({
    'submit form': function(event){
        event.preventDefault();
        var Libelle = event.target.Libelle.value;
        var adresse=event.target.Adresse.value;
        var Ville=event.target.Ville.value;
        var superficieCouverte=event.target.superficieCouverte.value;
        var compteurSteg=event.target.compteurSteg.value;
        var compteurSonede=event.target.compteurSonede.value;
        var longitude=event.target.longitude.value;
        var gouvernorat =event.target.gouvernorat.value;
        var latitude=event.target.latitude.value;
        var est=event.target.est.value;
        var ouest=event.target.ouest.value;
        var sud=event.target.sud.value;
        var direction=event.target.direction.value;
        var Arrendissemen=event.target.Arrendissemen.value;
        var Delegation=event.target.Delegation.value;
        var file    = document.querySelector('input[type=file]').files[0];
        let FR = new FileReader();
        FR.onload =  (data) =>{
      
            Meteor.call('insert',Libelle,adresse,Ville,superficieCouverte,compteurSteg,compteurSonede,longitude,latitude,est,
            ouest,sud,data.target.result,direction,Arrendissemen,Delegation,gouvernorat,function(error){
                if (error)
                    {
                        Bert.alert( error.reason, 'danger', 'growl-top-right' ); 
                    }
                    else
                        {
                            Bert.alert( "votre Patrimoine a été créé avec succès", 'success', 'growl-top-right' );
                            
                                    var Libelle = event.target.Libelle.value="";
                                    var adresse=event.target.Adresse.value="";
                                    var Ville=event.target.Ville.value="";
                                    var superficieCouverte=event.target.superficieCouverte.value="";
                                    var compteurSteg=event.target.compteurSteg.value="";
                                    var compteurSonede=event.target.compteurSonede.value="";
                                    var longitude=event.target.longitude.value="";
                                    var sud=event.target.sud.value="";
                                    var latitude=event.target.latitude.value="";
                                    var est=event.target.est.value="";
                                    var ouest=event.target.ouest.value="";
                                    var direction=event.target.direction.value="";
                                    var Arrendissemen=event.target.Arrendissemen.value="";
                                    var Delegation=event.target.Delegation.value="";
                                    var gouvernorat =event.target.gouvernorat.value="";

                        }
            })
       
        }
        if (file) {
            FR.readAsDataURL(file);
           
            console.log(file);
          }
          else
            {
               
            }
      

        
       
    },
    'click .annulerr7':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
  });

  

  Template.AjouterAgents.events({
    'submit form': function(event){
        event.preventDefault();
        var Nom = event.target.Nom.value;
        var Prenom=event.target.Prenom.value;
        var cin=event.target.cin.value;
        var daten=event.target.daten.value;
        var lieu=event.target.lieu.value;
        var sexe=event.target.sexe.value;
        var Adresse=event.target.Adresse.value;
        var Matricule=event.target.Matricule.value;
        var Fonction=event.target.Fonction.value;

        var Garde=event.target.Garde.value;
      
      
        Agents.insert({Nom:Nom,Prenom:Prenom,cin:cin,daten:daten,lieu:lieu,sexe:sexe,Adresse:Adresse,Matricule:Matricule,Fonction:Fonction
            ,Garde:Garde});
        Bert.alert( "votre Lagement a été créé avec succès", 'success', 'growl-top-right' );
        var Nom = event.target.Nom.value="";
        var Prenom=event.target.Prenom.value="";
        var cin=event.target.cin.value="";
        var daten=event.target.daten.value="";
        var lieu=event.target.lieu.value="";
        var sexe=event.target.sexe.value="";
        var Adresse=event.target.Adresse.value="";
        var sexe=event.target.sexe.value="";
        var Fonction=event.target.Fonction.value="";

        var Garde=event.target.Garde.value="";
       

        
       
    },
    'click .annulerr11':function(){
        event.preventDefault();
        FlowRouter.go("/"+Session.get('user'));
    }
  });


  Template.AjouterAgents.helpers({
  garde:function()
 { 
       return Gardes.find().fetch().reverse();
 },
fonction:function()

 {  
      
    return Fonctions.find().fetch().reverse();
}
,link:function()
{
  return "/"+Session.get('user');
}

  
  });


  Template.AjouterPatrimoins.helpers({

    derictions:function()
   { 
    return Derictions.find().fetch().reverse();
   },
  arr:function()
  
   {  
        
    return Arrendissement.find().fetch().reverse();
    },
  delegation:function()
  
   {  
        
    return Delegations.find().fetch().reverse();
  },
  gauvernerat:function()
  
   {  
        
    return Gauvernerat.find().fetch().reverse();
  },link:function()
  {
    return "/"+Session.get('user');
  }
  
    
    });



    Template.AjouterGauvernerat.helpers({
        delegation:function()
        
         {  
              
          return Delegations.find().fetch().reverse();
        },

        arr:function()
        
         {  
              
          return Arrendissement.find().fetch().reverse();
          },link:function()
          {
            return "/"+Session.get('user');
          }
      
        
        });

        Template.AjouterLagement.helpers({
            Agent:function()
            
             {  
                  
              return Agents.find().fetch().reverse();
            },
    
            Patrimoine:function()
            
             {  
                  
              return Patrimoines.find().fetch().reverse();
              
              },link:function()
              {
                return "/"+Session.get('user');
              }
          
            
            });


            Template.AjouterProfiles.helpers({
                link:function()
                  {
                    return "/"+Session.get('user');
                  }
              
                
                });
                Template.AjouterTypes.helpers({
                    link:function()
                      {
                        return "/"+Session.get('user');
                      }
                  
                    
                    });

                    Template.AjouterDerictions.helpers({
                        link:function()
                          {
                            return "/"+Session.get('user');
                          }
                      
                        
                        });
                        Template.AjouterArrendissement.helpers({
                            link:function()
                              {
                                return "/"+Session.get('user');
                              }
                          
                            
                            });

                            Template.AjouterDelegations.helpers({
                                link:function()
                                  {
                                    return "/"+Session.get('user');
                                  }
                              
                                
                                });
                                Template.AjouterGardes.helpers({
                                    link:function()
                                      {
                                        return "/"+Session.get('user');
                                      }
                                  
                                    
                                    });
                                    Template.AjouterFonctions.helpers({
                                        link:function()
                                          {
                                            return "/"+Session.get('user');
                                          }
                                      
                                        
                                        });