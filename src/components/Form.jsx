import emailjs from "@emailjs/browser"
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../data/constants";

function Form() {

    const sendEmail = (e) => {
        e.preventDefault()
        console.log(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_PUBLIC_KEY)
        // emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_PUBLIC_KEY)
    }

    return (

        <section className="rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-grey-90 capitalize">Account settings</h2>

            <form onSubmit={sendEmail}>
                <div className="gap-6 mt-4 ">
                    <div>
                        <label className="text-grey-90" htmlFor="emailAddress">Email Address</label>
                        <input id="emailAddress" name="email_from" type="email" className="block w-full px-4 py-2 mt-2 text-grey-90 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-grey-90" htmlFor="message">Message</label>
                        <textarea id="message" name="message" className="block w-full px-4 py-2 mt-2 text-grey-90 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 
                    transform bg-blue-50 rounded-md hover:bg-blue-70 focus:outline-none focus:bg-blue-70">Save</button>
                </div>
            </form>
        </section>
    );
}

export default Form;