import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <section className="flex">
        {/* <Sidebar /> */}
        <div>{children}</div>
      </section>
      <footer>footer</footer>
    </>
  );
}
