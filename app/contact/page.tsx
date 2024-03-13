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
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className=""> Contact page </h1>
    </div>
  );
};

export default ContactPage;
