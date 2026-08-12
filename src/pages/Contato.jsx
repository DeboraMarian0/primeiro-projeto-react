import Header from '../components/Header';
import Footer from '../components/Footer';
import EnviaContato from '../components/EnviaContato';
import { useState } from 'react'; // Importa o hook useState para gerenciar o estado do formulário e dos dados enviados

function Contato() {
  const [formDados, setFormDados] = useState({
    // Estado para armazenar os dados do formulário - guarda os dados enquanto o usuário os digita -> const [variavel, funcaoQueAltera] = useState(valorInicial)
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  }); // essa constante está sendo usada para armazena os dados digitados pelo usuário no formulário
  // formDados é um objeto que armazena os valores dos campos do formulário, e setFormDados é a função usada para atualizar esses valores.
  //nome, email e mensagem são os campos do formulário que o usuário irá preencher. O estado inicial é definido como um objeto vazio com essas propriedades ('').

  const funcDadosForm = (e) => {
    // Função para lidar com as mudanças nos campos do formulário - essa função é chamada toda vez que o usuário digita algo em um dos campos do formulário.
    const { name, value } = e.target; // Extrai o nome e o valor do campo que foi alterado. O name corresponde ao atributo name do campo de entrada (input ou textarea), e value é o valor atual desse campo.
    setFormDados((prev) => ({ ...prev, [name]: value })); // Atualiza o estado formDados com o novo valor do campo alterado. A função funcSetFormDados é chamada com uma função de atualização que recebe o estado anterior (prev)
    // e retorna um novo objeto que contém todos os campos anteriores (...prev) e atualiza apenas o campo que foi alterado ([name]: value).
  };

  const [dadosEnviados, setDadosEnviados] = useState(null); // Estado para armazenar os dados enviados, inicialmente é null - sendo assim, essa constante vai armazenar os dados depois que o usuario clicar em enviar.
  // Quando o formulário for enviado, esse estado será atualizado com os dados do formulário, permitindo que sejam exibidos ou processados posteriormente.

  const funcSubmitForm = (e) => {
    // Função para lidar com o envio do formulário - essa função é chamada quando o usuário clica no botão de enviar.
    e.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página ao ser enviado.
    setDadosEnviados(formDados); //atualiza o estado dadosEnviados com os dados atuais inseridos no formulário.
    setFormDados({ nome: '', email: '', assunto: '', mensagem: '' }); //limpa os campos do formulário
  };

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="container-form bg-light shadow-sm">
          <h1>Contato</h1>

          <form className="contact-form" onSubmit={funcSubmitForm}>
            {' '}
            {/* O evento onSubmit do formulário é vinculado à função funcSubmitForm, que é chamada quando o usuário envia o formulário. */}
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              required
              className="form-control"
              value={formDados.nome}
              onChange={funcDadosForm}
            />{' '}
            {/* Campo de entrada para o nome do usuário, vinculado ao estado formDados.nome. 
                  O evento onChange chama a função funcDadosForm para atualizar o estado conforme o usuário digita. */}
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
              value={formDados.email}
              onChange={funcDadosForm}
            />
            <label>Assunto:</label>
            <input
              type="text"
              name="assunto"
              required
              className="form-control"
              value={formDados.assunto}
              onChange={funcDadosForm}
            />
            <label>Mensagem:</label>
            <textarea
              name="mensagem"
              rows="4"
              required
              className="form-control"
              value={formDados.mensagem}
              onChange={funcDadosForm}
            />
            <button type="submit" className="btn btn-danger">
              Enviar
            </button>
            <br></br>
          </form>

          {dadosEnviados && ( // Verifica se dadosEnviados não é null antes de renderizar o componente EnviaContato.
            // Se dadosEnviados tiver um valor (ou seja, o formulário foi enviado), o componente EnviaContato será renderizado, exibindo os dados enviados.
            <EnviaContato
              nome={dadosEnviados.nome}
              email={dadosEnviados.email}
              assunto={dadosEnviados.assunto}
              mensagem={dadosEnviados.mensagem}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contato;
