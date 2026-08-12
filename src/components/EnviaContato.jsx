function EnviaContato({ nome, email, assunto, mensagem }) { // Componente para exibir os dados enviados pelo formulário de contato. 
                                                   // Ele recebe as props nome, email, assunto e mensagem, que são os dados enviados pelo usuário.
  return (
    <div className="card">
        <div className="card-header bg-success">
          <h5>Dados Enviados</h5>
        </div>
        <div className="card-body">
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Assunto:</strong> {assunto}</p>
          <p><strong>Mensagem:</strong> {mensagem}</p>
        </div>
      
    </div>
    
  );
}

export default EnviaContato;