import logo from './logo.svg';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <main className="App-header">
        <MainPage />
      </main>
    </div>
  );
}

export default App;
