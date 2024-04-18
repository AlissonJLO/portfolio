import Perfil from "../sections/Perfil";
import Projetos from "../sections/Projetos";
import Footer from "../sections/Footer";

export default function Home(): React.JSX.Element {
  return (
    <>
      <main className="md:flex-row md:space-x-10 flex flex-col flex-1 min-h-dvh min-w-dvw">
        <Perfil />
        <Projetos />
      </main>
      <footer className="fixed inset-x-0 bottom-0 bg-white text-black p-4">
        <Footer />
      </footer>
    </>
  );
}
