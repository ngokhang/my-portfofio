import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer>footer</footer>
    </>
  );
}
