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
    <form name="contact" method="POST" data-netlify="true" autoComplete="off" onSubmit={onSubmit}>
      <input type="text" id="name" name="name" placeholder="Name" value={state.name} required onChange={handleChange} />
      <br />
      <input type="email" id="email" name="email" placeholder="Email" value={state.email} required onChange={handleChange} />
      <br />
      <textarea id="message" name="message" placeholder="Message" value={state.message} required onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>;
};