import './App.css';

import City from './assets/city.jpg'
import Lista from './components/Lista';
import ManageData from './components/ManageData';



function App() {
  return (
    <div className="App">
      <h1>Avançando em React </h1>
      {/*imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      {/*imagem em public*/}
      <div>
        <img src={City} alt="cidade" />
      </div>
      <ManageData />
      <Lista />
    </div>
  );
}

export default App;
