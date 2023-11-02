

function imprimirDatos() {
  let name = document.getElementById("name").value;
  let clave = document.getElementById("clave").value;
  let msg = document.querySelector("strong");

  if (name === "santy1553" && clave === "123456789") {
    window.open("file:///C:/Users/Neumomed-TI/Desktop/JS/Formulario/hero.html");
    location.reload();
  } else {
    msg.innerHTML = "Correo y/o contraseña incorrecto";
  }
  console.log("Nombre:", name);
  console.log("Contraseña:", clave);
}
