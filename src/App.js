import logo from './logo.png';
import './App.css';
import emailjs from "@emailjs/browser"

function App() {

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(process.env.EMAILJS_PUBLIC_KEY)
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, e.target, process.env.EMAILJS_PUBLIC_KEY)
  }
  return (
    <div >
      <header >
        <img src={logo} className="App-logo" alt="logo" />    
        <h1 className="text-3xl font-bold underline">
          Hello!
        </h1>
        </header>


      <form onSubmit={sendEmail}>
        <label htmlFor="emailFrom">From: </label>
        <input name="email_from" id="emailFrom"></input>
        <label htmlFor="message">Message: </label>
        <input name="message" id="message"></input>
        <button type="submit">Send email</button>
      </form>

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
