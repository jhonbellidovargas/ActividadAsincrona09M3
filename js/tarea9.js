class Empleado {
  codigo;
  nombre;
  apellido;
  correo;
  cargo;
  sueldoBruto() {
    let sueldoBruto = 0;
    switch (this.cargo) {
      case "Jefe":
        sueldoBruto = 5000;
        break;
      case "Analista":
        sueldoBruto = 4000;
        break;
      case "Programador":
        sueldoBruto = 3000;
        break;
      case "Soporte":
        sueldoBruto = 2000;
        break;
      case "Asistente":
        sueldoBruto = 1500;
        break;
    }
    return sueldoBruto;
  }
  descuento() {
    return this.sueldoBruto() * 0.125;
  }
  sueldoNeto() {
    return this.sueldoBruto() - this.descuento();
  }
}
const btnEnviar = document.querySelector("#btnEnviar");
const txtCodigo = document.querySelector("#txtCodigo");
const txtNombre = document.querySelector("#txtNombre");
const txtApellido = document.querySelector("#txtApellido");
const txtCorreo = document.querySelector("#txtCorreo");
const txtCargo = document.querySelector("#txtCargo");
const bannerConfirmacion = document.querySelector("#bannerConfirmacion");

btnEnviar.addEventListener("click", () => {
  let codigo = txtCodigo.value;
  let nombre = txtNombre.value;
  let apellido = txtApellido.value;
  let correo = txtCorreo.value;
  let cargo = txtCargo.value;

  let empleado = new Empleado(
  );
  empleado.codigo = codigo;
  empleado.nombre = nombre;
  empleado.apellido = apellido;
  empleado.correo = correo;
  empleado.cargo = cargo;
  
  bannerConfirmacion.classList.remove("d-none");
  bannerConfirmacion.innerHTML = `
    <h5 class="text-center">${empleado.nombre} ${empleado.apellido}</h5>
    <table class="table">
      <tbody>
        <tr>
          <th scope="row">Cargo</th>
          <td>${empleado.cargo}</td>
        </tr>
        <tr>
          <th scope="row">Sueldo Bruto</th>
          <td>${empleado.sueldoBruto()}</td>
        </tr>
        <tr>
          <th scope="row">Descuento</th>
          <td>${empleado.descuento()}</td>
        </tr>
        <tr>
          <th scope="row">Sueldo Neto</th>
          <td>${empleado.sueldoNeto()}</td>
        </tr>
      </tbody>        
    </table>
  `;
});
