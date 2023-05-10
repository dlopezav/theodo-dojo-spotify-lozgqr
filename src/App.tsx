import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenido al test a ciegas</h1>
      </header>
      <div className="App-images">
        <p>Tendras que modificar el código para hacer un verdadero test a ciegas !</p>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
