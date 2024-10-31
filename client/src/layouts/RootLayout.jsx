import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pb-28">
        <Outlet />
      </main>
      <Footer />
      <ContactButton />
    </div>
  );
}
