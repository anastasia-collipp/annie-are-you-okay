import emailjs from "@emailjs/browser"
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../data/constants";

function Form() {

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_PUBLIC_KEY)
      }

    return (
        <div >
          <form onSubmit={sendEmail}>
            <label htmlFor="emailFrom">From: </label>
            <input name="email_from" id="emailFrom"></input>
            <label htmlFor="message">Message: </label>
            <input name="message" id="message"></input>
            <button type="submit">Send email</button>
          </form>
        </div>
      );
}

export default Form;