import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again", error);
        }
      );
  };

  return (
    <section id="contact" className={`px-5 py-40 lg:max-w-screen-lg mx-auto`}>
      <h3 className={`text-2xl text-gray-400 font-medium text-center`}>Contact</h3>
      <form
        onSubmit={onSubmit}
        ref={form}
        className={`mt-8 grid lg:grid-cols-2 lg:grid-rows-3 gap-4`}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={`lg:col-start-1 lg:row-start-1 h-10 pl-2 text-md ring-2 rounded-sm outline-2 focus:outline-cyan-500`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`lg:col-start-1 lg:row-start-2 h-10 pl-2 text-md ring-2 rounded-sm outline-2 focus:outline-cyan-500`}
        />
        <textarea
          id=""
          name="message"
          placeholder="Enter your message here..."
          className={`lg:col-start-2 lg:row-span-full h-24 pl-2 text-md ring-2 rounded-sm outline-2 focus:outline-cyan-500 resize-none`}
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className={`lg:row-start-3 lg:col-span-full py-1 bg-cyan-800 text-lg text-white ring-2 ring-cyan-700 hover:bg-cyan-900 active:bg-cyan-950 rounded-sm`}
        />
      </form>
    </section>
  );
};

export default Contact;
