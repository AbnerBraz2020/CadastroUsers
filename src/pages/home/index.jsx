import './style.css'
import Trash from '../../assets/lixeira.png'
import api from '../../services/api'
import { use } from 'react'

function home() {

  const users = []

  async function getUsers(){
    users = await api.get('/users')
    
  }

  useEffect(() => {
    getUsers()
  }, [])
  console.log(users)

  return (
  <div>
    <form action="container">
      <h1>Cadastro de Usuário</h1>
      <input type="text" name="name" id="" placeholder="Entre com o seu nome"/>
      <input type="text" name="email" id="" placeholder="Entre com o seu email"/>
      <input type="number" name="age" id="" placeholder="Entre com a sua age"/>
      <button type="button" className='button'>Cadastrar</button>
    </form>

  {users.map((user) => (
    
    <div key={user.id} className='card'>
      <div>
        <p>Nome: <span>{user.name}</span></p>
        <p>Email: <span>{user.email}</span></p>
        <p>Idade: <span>{user.age}</span></p>
      </div>

      <button>
        <img src={Trash} alt="Trash"/>
      </button>
    
      </div>

    ))}
  </div>

  )
}

export default home
