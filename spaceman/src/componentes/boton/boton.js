import "./boton.css"
import Button from 'react-bootstrap/Button';
import 'animate.css';

function boton() {
  return (
    <>
      
      <Button className="boton" variant="outline-danger">Entrar</Button>{' '}
      boton.addEventListener("click", function () {
      Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})}
    </>
  );
}

export default boton;