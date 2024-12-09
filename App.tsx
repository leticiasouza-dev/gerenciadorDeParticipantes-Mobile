import { StatusBar } from "react-native";
import {Home}  from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content" // definindo a cor de fundo dos elementos ( a cor dos elementos)
        backgroundColor='transparent' // definindo a cor de fundo da status bar
        translucent // para minha aplicação tranceder a statusBar (deixando ele com o mesmo background da aplicação)
      />
      <Home/>
    </>
    
  );
}


