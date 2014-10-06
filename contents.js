["onpaste","oncopy","oncut"].forEach(function(e_name){
  Array.apply(null, document.querySelectorAll("*["+e_name+"]") ).forEach(function(e){e[e_name]="return true;"})  
})
