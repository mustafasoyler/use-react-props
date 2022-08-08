import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="container">
      <h4>Kullanıcı Bilgileri</h4>
      <hr></hr>
      <User
      name= "Mustafa Söyler"
      salary= "5000"
      department="Yazılım"
      />
    </div>
  );
}

export default App;
