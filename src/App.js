import logo from './logo.png';
import './App.css';
import Form from './components/Form';

function App() {

  return (
    <div >
      <header >
        <img src={logo} className="App-logo" alt="logo" />    
        <h1 className="text-3xl font-bold underline">
          Hello!
        </h1>
        </header>
     <Form />
        <a
          className="link0"
          href="https://www.linkedin.com/in/anastasia-collipp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          className="link"
          href="https://github.com/anastasia-collipp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      
    </div>
  );
}

export default App;
