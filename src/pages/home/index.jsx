import './style.css'

function home() {

  return (
  
  <div>
    <form action="">
      <h1>Cadastro de Usuário</h1>
      <input type="text" name="name" id="" placeholder="Entre com o seu nome"/>
      <input type="text" name="email" id="" placeholder="Entre com o seu email"/>
      <input type="number" name="age" id="" placeholder="Entre com a sua idade"/>
      <button type="submit">Cadastrar</button>
    </form>
    <div>
      <div>
        <p>Nome</p>
        <p>Email</p>
        <p>Idade</p>
      </div>
      <button type="button">Trash</button>
    </div>
  </div>
      

  )
}

export default home
