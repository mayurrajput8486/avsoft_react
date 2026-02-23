import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import Usersfiled from './components/Usersfiled'
import Usersdata from './components/Usersdata'
const App = () => {
  return (
    <div>
      <h2 className='text-center mt-3'>Register User Data</h2>
      <Usersfiled/>
      <Usersdata/>
    </div>
  )
}

export default App