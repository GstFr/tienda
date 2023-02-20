import "./boton.css"
import Button from 'react-bootstrap/Button';
import 'animate.css';
import Swal from 'sweetalert2'


function Boton() {
  const alertHandler = () => {
    Swal.fire({
      title: 'Para ingresar debes ser mayor de 18 años y tener REPROCAN activo',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirmado',
      denyButtonText: `No tengo REPROCAN`,
      background: '#fff url(./fondoalert.jpeg)',
      backdrop: `
      rgba(0,0,123,0.4)
      url("./fondoalert.jpeg")
      left top
      no-repeat
      `,
      
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire('Bienvenido', '', 'success')

      } else if (result.isDenied) {
        Swal.fire('Contactanos por instagram a Spaceman', '', 'info')
      }
    })
  }
  
  return (
    <>
      
      <Button className="boton"  onClick={alertHandler}>Entrar</Button>
    
      
    </>
  );
}

export default Boton;