import { Session } from 'meteor/session';


FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('login');
  }
});




//begin admin route

 FlowRouter.route('/admin', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "home" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  // begin show for admin

  FlowRouter.route('/admin/listePatrimoins', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "listePatrimoins" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  FlowRouter.route('/admin/map', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "map" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  
  FlowRouter.route('/super/map', {
    action: function() {
      if(Session.get('user') ==="super")
        {
      BlazeLayout.render('super', {  main: "map" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });

  
  FlowRouter.route('/user/map', {
    action: function() {
      if(Session.get('user') ==="user")
        {
      BlazeLayout.render('user', {  main: "map" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  FlowRouter.route('/admin/listeDerictions', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "listeDerictions" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  FlowRouter.route('/admin/listeTypes', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "listeTypes" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  FlowRouter.route('/admin/listeArrendissement', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "listeArrendissement" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  FlowRouter.route('/admin/listeDelegations', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "listeDelegations" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  FlowRouter.route('/admin/listeGauvernerat', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "listeGauvernerat" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });


  FlowRouter.route('/admin/listeLagement', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "listeLagement" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });

  FlowRouter.route('/admin/listeProfiles', {
    action: function() {
      if(Session.get('user') ==="admin")
        {
      BlazeLayout.render('admin', {  main: "listeProfiles" });
        }
        else
          { 
            BlazeLayout.render('404');
          }
    }
  });

  //end show for admin


// begin add for admin

FlowRouter.route('/admin/AjouterPatrimoins', {
  action: function() {
    if(Session.get('user') ==="admin")
      {
    BlazeLayout.render('admin', {  main: "AjouterPatrimoins" });
      }
      else
        { 
          BlazeLayout.render('404');
        }
  }
});


FlowRouter.route('/admin/AjouterDerictions', {
  action: function() {
    if(Session.get('user') ==="admin")
      {
    BlazeLayout.render('admin', {  main: "AjouterDerictions" });
      }
      else
        { 
          BlazeLayout.render('404');
        }
  }
});


FlowRouter.route('/admin/AjouterTypes', {
  action: function() {
    if(Session.get('user') ==="admin")
      {
    BlazeLayout.render('admin', {  main: "AjouterTypes" });
      }
      else
        { 
          BlazeLayout.render('404');
        }
  }
});


FlowRouter.route('/admin/AjouterArrendissement', {
  action: function() {
    if(Session.get('user') ==="admin")
      {
    BlazeLayout.render('admin', {  main: "AjouterArrendissement" });
      }
      else
        { 
          BlazeLayout.render('404');
        }
  }
});


FlowRouter.route('/admin/AjouterDelegations', {
  action: function() {
    if(Session.get('user') ==="admin")
      {
    BlazeLayout.render('admin', {  main: "AjouterDelegations" });
      }
      else
        { 
          BlazeLayout.render('404');
        }
  }
});


FlowRouter.route('/admin/AjouterGauvernerat', {
  action: function() {
    if(Session.get('user') ==="admin")
      {
    BlazeLayout.render('admin', {  main: "AjouterGauvernerat" });
      }
      else
        { 
          BlazeLayout.render('404');
        }
  }
});


FlowRouter.route('/admin/AjouterLagement', {
  action: function() {
    if(Session.get('user') ==="admin")
      {
    BlazeLayout.render('admin', {  main: "AjouterLagement" });
      }
      else
        { 
          BlazeLayout.render('404');
        }
  }
});

FlowRouter.route('/admin/AjouterProfiles', {
  action: function() {
    if(Session.get('user') ==="admin")
      {
    BlazeLayout.render('admin', {  main: "AjouterProfiles" });
      }
      else
        { 
          BlazeLayout.render('404');
        }
  }
});



// end add for admin

//end admin route

// begin  super router 
  FlowRouter.route('/super', {
    action: function() {
      if(Session.get('user') ==="super")
    {  
      BlazeLayout.render('super', {  main: "home" });
    }
    
    else
      { 
        BlazeLayout.render('404');
      }
    }
  });

// begin show super


FlowRouter.route('/super/listeLagement', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "listeLagement" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});

FlowRouter.route('/super/listePatrimoins', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "listePatrimoins" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/listeTypes', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "listeTypes" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/listeDerictions', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "listeDerictions" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/listeGardes', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "listeGardes" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/listeAgents', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "listeAgents" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/listeFonctions', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "listeFonctions" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/listeLagement', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "listeLagement" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});

//end show super

//begin add super 

FlowRouter.route('/super/AjouterLagement', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "AjouterLagement" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});

FlowRouter.route('/super/AjouterTypes', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "AjouterTypes" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});

FlowRouter.route('/super/AjouterPatrimoins', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "AjouterPatrimoins" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/AjouterDerictions', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "AjouterDerictions" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/AjouterGardes', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "AjouterGardes" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/AjouterAgents', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "AjouterAgents" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/AjouterFonctions', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "AjouterFonctions" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});


FlowRouter.route('/super/AjouterLagement', {
  action: function() {
    if(Session.get('user') ==="super")
  {  
    BlazeLayout.render('super', {  main: "AjouterLagement" });
  }
  
  else
    { 
      BlazeLayout.render('404');
    }
  }
});




















//end add super 


  //begin user route
  FlowRouter.route('/user', {
    action: function() {
      if(Session.get('user') ==="user")
      {
        BlazeLayout.render('user', {  main: "home" });
       }
       else
        {
          BlazeLayout.render('404');
        }
    }
  });




  FlowRouter.route('/user/listePatrimoins', {
    action: function() {
      if(Session.get('user') ==="user")
      {
        BlazeLayout.render('user', {  main: "listePatrimoins" });
       }
       else
        {
          BlazeLayout.render('404');
        }
    }
  });



  FlowRouter.route('/user/listeDerictions', {
    action: function() {
      if(Session.get('user') ==="user")
      {
        BlazeLayout.render('user', {  main: "listeDerictions" });
       }
       else
        {
          BlazeLayout.render('404');
        }
    }
  });


  FlowRouter.route('/user/listeFonctions', {
    action: function() {
      if(Session.get('user') ==="user")
      {
        BlazeLayout.render('user', {  main: "listeFonctions" });
       }
       else
        {
          BlazeLayout.render('404');
        }
    }
  });

//end user route

