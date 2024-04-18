import Perfil from "../sections/Perfil";
import Projetos from "../sections/Projetos";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main className="flex space-x-10 ">
      <Perfil />
      <Projetos />
      <Footer />
    </main>
  );
}
