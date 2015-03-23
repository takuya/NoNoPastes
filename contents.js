document.body.appendChild(function(){
  sc = document.createElement("script");
  var code = function(){
		["onpaste","oncopy","oncut"].forEach(function(e_name){
		  Array.apply(null, document.querySelectorAll("*["+e_name+"]") ).forEach(function(e){e[e_name]="return true;"})  
		})
	Array.apply(null,document.querySelectorAll("form,input,textarea ")).forEach(function(e){
		if(e.onpaste){e.onpaste=null}
		if(e.oncopy){e.oncopy=null}
		if(e.oncut){e.oncut=null}
	})
  }
  src = "("+code.toString()+")()"
  sc.type="text/javascript";
  sc.text=src
  return sc;
}()
);



