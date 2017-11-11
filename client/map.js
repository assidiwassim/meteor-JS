import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './map.html';
import { GoogleMaps } from 'meteor/dburles:google-maps';
import {Geolocation} from 'meteor/mdg:geolocation';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
 

Meteor.startup(function () {
    GoogleMaps.load({ key: 'AIzaSyDdB0Fd9ayACP7xoLrkcczLMlbEV13UIoE' });
  
  });


  var latLng;
  var map;
  Template.map.helpers({
    exampleMapOptions() {
      
      if (GoogleMaps.loaded()) {
        latLng = Geolocation.latLng();
        
        if(latLng)
        { 
        
  
        map= {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: 6,
        };
       //traja3li na win
        return map;
      }
        else{  return null}
      
      
        
      }
    },
    link:function()
    {
      return "/"+Session.get('user');
    }
  });
  
  Template.map.onCreated(function() {
    GoogleMaps.ready('exampleMap', function(map) {
    
      var markers = {};
      
      Patrimoines.find().observe({  
        added: function(document) {
          //ijbed mel bd w e7chi fil map
          var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.latitude, document.longitude),
            map: map.instance,
           
            id: document._id
          });
           // modifi 
      
        
          markers[document._id] = marker;
        },
       
      });
  
  
    });
  });