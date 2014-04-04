$(document).ready(function(){
	var lv = new LoginValidator();
	var lc = new LoginController();

	//Get users type
	$.ajax({
        type : 'GET',
        url  : '//127.0.0.1:3000/tipo_usuario',
        //dataType : 'jsonp'    
    })

    .done(function(data){
        data.user_types.forEach(function (item){
            $("<option value=" + item.idtipousuario +">" +item.descripcion+ "</option>" ).appendTo("#tipoUsuario"); 
        })
    })  
    // end get users type

	$('#btnRegistrar').on('click', function(){
		if(lv.registerForm() === false){
			return false;
		}else{
			$.ajax({
				type : 'POST',
				url : '//127.0.0.1:3000/add/user',
				contentType: 'application/json; charset=utf-8',
            	dataType: 'json',
            	data: JSON.stringify({ 
            						   username : username.value,
            						   email : email.value,
            						   informacion : informacion.value
            						}),
            	success : function(data){
            		console.log(data);
            		debugger;
            	}
			});
		}
	})

	$('#btnCancelar').on('click',function(){
		window.location = '/';
	})

	


})