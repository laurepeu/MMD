// This is where it all goes :)

var showText = function (target, message, index, interval) {    
    if (index < message.length) { 
      $(target).append(message[index++]); 
      setTimeout(function () { showText(target, message, index, interval); }, interval); 
    } 
  }
      
  $(function () { 
   
    showText("#msg", "Make My Day accompagne les PME, les TPE, les indépendants et les associations dans  la promotion de leur image, l’élaboration d’une stratégie médiatique et la mise en place de relations presse.", 0, 35);    
   
  }); 
  
  