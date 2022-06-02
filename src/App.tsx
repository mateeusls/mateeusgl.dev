import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ListProjects } from "./components/ListProjects";
import { Skins } from "./components/Skins";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <ListProjects />
      <Skins />
      <Footer />
      <GlobalStyle />
    </>    
  )
}