import { useState, FormEvent, ChangeEventHandler, ChangeEvent } from "react";

import styles from "./ContactForm.module.css";

interface FormPost {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState<FormPost>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state })
    })
      .then(() => console.log("Success!"))
      .catch(error => console.log(error));

    e.preventDefault();
    setSubmitted(true);
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  return <div className={styles.contactForm}>
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>;
};