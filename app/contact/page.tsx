import EarthCanva from "@/components/EarthCanva";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "ContactPage",
  icons: {
    icon: "/next.svg",
  },
};

const ContactPage = () => {
  return (
    <div className="flex h-full w-full  items-center justify-center">
      <div className="flex h-screen w-full items-center justify-center px-4 pt-8 ">
        <form
          action="https://getform.io/f/e4a4af45-2975-4f24-ab37-35ad9eb37113"
          method="POST"
          name="contact"
          className="flex h-full w-full max-w-[600px] flex-col"
        >
          <div className="pt-8">
            <h1 className="group flex w-fit flex-col rounded-md text-2xl hover:transition-all hover:duration-300">
              Contact
              <span className="w-[20%] rounded-md border-b-4 border-[#f83bff] duration-300 group-hover:w-[80%] group-hover:transition-all group-hover:duration-300" />
            </h1>

            <p className="py-4 text-lg">
              Submit the form below or shoot me{" "}
              <a
                className="inline-block bg-gradient-to-r from-[#D9AFD9] from-10% to-[#97D9E1] to-100% bg-clip-text font-bold text-transparent"
                href="mailto:senthildeveloper4@gmail.com"
              >
                E-mail
              </a>
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2  text-black"
            type="text"
            placeholder="Name"
            name="user_name"
            required
          />
          <input
            className="my-4  bg-[#ccd6f6] p-2  text-black"
            type="email"
            placeholder="E-mail"
            name="user_email"
            required
          />
          <textarea
            placeholder="Message"
            className="bg-[#ccd6f6] p-2  text-black"
            required
            name="message"
            rows={10}
          ></textarea>
          <button className="w-30 mx-auto my-8  border-2 bg-[#f83bff] p-4 hover:border-[#f83bff] hover:bg-[#f83bff]/50 hover:transition-all hover:duration-300 ">
            contact me
          </button>
        </form>
      </div>
      <div className="h-full w-[60%]">
        <EarthCanva />
      </div>
    </div>
  );
};

export default ContactPage;
