import './App.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function App() {
  return (
    <div>
      <header className='status-bar'></header>
      <section>
      <i><FaArrowLeft/></i>
      <p>Para acessar sua conta no Poundsflats, por favor, insira seu número de telefone abaixo</p>
      </section>
      <main>
        <input type='number' placeholder='Número de Celular'/>
        <p className='sms'>Para confirmar a sua identidade, enviaremos um código via SMS para o número informado</p>
        <button className='cont'>Continuar</button>

        <section className='login'>
          
          <div className='ou'><span>OU</span></div>
          <button><FaFacebook className='icon'/> Continuar com o Facebook</button>
          <button><FaGoogle className='icon'/> Continuar com o Google</button>
          <button><MdOutlineMailOutline className='icon'/> Continuar com o Email</button>
        </section>
      </main>
    </div>
  );
}


export default App;
