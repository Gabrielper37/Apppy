

var formulario=document.getElementsByName("formulario")[0],
elementos=formulario.elements,
boton=document.getElementById("btn");

//Validar nombre
var validarNombre=function(e){
    if (formulario.fnombre.value==0){

        alert("El nombre no puede estar vacio");
        formulario.fnombre.placeholder="Por favor ingrese su Nombre y Apellido";
        formulario.fnombre.style.background = "#ffd0d0";
        e.preventDefault();
    }
};
//Validar correo
var validarCorreo=function(e){
    if (formulario.fcorreo.value==0){

        alert("El correo no puede estar vacio");
        formulario.fcorreo.placeholder="Por favor ingrese su Correo";
        formulario.fcorreo.style.background = "#ffd0d0";
        e.preventDefault();
    }
};

var validarEnvio=function(e){
    if(formulario.fnombre.value!=0 && formulario.fcorreo.value!=0){
       document.querySelector(".mensajeEnviado").innerText= "Tu mensaje se envio correctamente"
       document.querySelector(".mensajeEnviado").style.color="#42ffb0"
       setTimeout(function () {formulario.submit();}, 2000);
       e.preventDefault();
    }
};

//Funcion validar
var validar=function(e){
    validarNombre(e);
    validarCorreo(e);
    validarEnvio(e);
    };  

formulario.addEventListener("submit", validar);





const getDatosDiego=()=>{
    fetch('https://randomuser.me/api/')
      .then(response =>{
        return response.json()
      })
      .then(post=>{
        // console.log(post.results[0]);
        cell=post.results[0].cell;
        pais=post.results[0].location.country;
        ciudad=post.results[0].location.city;
        calle=post.results[0].location.street.name;
        calleNum=post.results[0].location.street.number;
        
        //Datos Diego
        document.getElementById("diego").innerHTML+=`<p>Pais: ${pais} </p>` ;
        document.getElementById("diego").innerHTML+=`<p>Ciudad: ${ciudad} </p>`; 
        document.getElementById("diego").innerHTML+=`<p>Calle: ${calle} </p>` ;
        document.getElementById("diego").innerHTML+=`<p>Numero: ${calleNum} </p>`; 
        document.getElementById("diego").innerHTML+=`<p>Celular: ${cell} </p>` ;
      })  
    }
getDatosDiego()


const getDatosMariano=()=>{
  fetch('https://randomuser.me/api/')
    .then(response =>{
      return response.json()
    })
    .then(post=>{
      // console.log(post.results[0]);
      cell=post.results[0].cell;
      pais=post.results[0].location.country;
      ciudad=post.results[0].location.city;
      calle=post.results[0].location.street.name;
      calleNum=post.results[0].location.street.number;
      
      //Datos Diego
      document.getElementById("mariano").innerHTML+=`<p>Pais: ${pais} </p>` ;
      document.getElementById("mariano").innerHTML+=`<p>Ciudad: ${ciudad} </p>`; 
      document.getElementById("mariano").innerHTML+=`<p>Calle: ${calle} </p>` ;
      document.getElementById("mariano").innerHTML+=`<p>Numero: ${calleNum} </p>`; 
      document.getElementById("mariano").innerHTML+=`<p>Celular: ${cell} </p>` ;
    })  
  }
getDatosMariano()


const getDatosLucas=()=>{
  fetch('https://randomuser.me/api/')
    .then(response =>{
      return response.json()
    })
    .then(post=>{
      // console.log(post.results[0]);
      cell=post.results[0].cell;
      pais=post.results[0].location.country;
      ciudad=post.results[0].location.city;
      calle=post.results[0].location.street.name;
      calleNum=post.results[0].location.street.number;
      
      //Datos Diego
      document.getElementById("lucas").innerHTML+=`<p>Pais: ${pais} </p>` ;
      document.getElementById("lucas").innerHTML+=`<p>Ciudad: ${ciudad} </p>`; 
      document.getElementById("lucas").innerHTML+=`<p>Calle: ${calle} </p>` ;
      document.getElementById("lucas").innerHTML+=`<p>Numero: ${calleNum} </p>`; 
      document.getElementById("lucas").innerHTML+=`<p>Celular: ${cell} </p>` ;
    })  
  }
getDatosLucas()


const getDatosMariana=()=>{
  fetch('https://randomuser.me/api/')
    .then(response =>{
      return response.json()
    })
    .then(post=>{
      // console.log(post.results[0]);
      cell=post.results[0].cell;
      pais=post.results[0].location.country;
      ciudad=post.results[0].location.city;
      calle=post.results[0].location.street.name;
      calleNum=post.results[0].location.street.number;
      
      //Datos Diego
      document.getElementById("mariana").innerHTML+=`<p>Pais: ${pais} </p>` ;
      document.getElementById("mariana").innerHTML+=`<p>Ciudad: ${ciudad} </p>`; 
      document.getElementById("mariana").innerHTML+=`<p>Calle: ${calle} </p>` ;
      document.getElementById("mariana").innerHTML+=`<p>Numero: ${calleNum} </p>`; 
      document.getElementById("mariana").innerHTML+=`<p>Celular: ${cell} </p>` ;
    })  
  }
getDatosMariana()


