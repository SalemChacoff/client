import Navigation from "../components/Navigation";

//Todos los componentes tienen una propiedad children
//En este caso sirve para renderizar los componentes entre medio
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <h1>Este es el footer</h1>
    </>
  );
};

export default Layout;
