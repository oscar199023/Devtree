import Header from "../components/Header"
import SearchForm from "../components/SearchForm"

export default function HomeView() {
  return (
    <>
      <Header />

      <main className="bg-gray-100 min-h-screen bg-no-repeat bg-right-top lg:bg-home lg:bg-home-xl">
        <div className="max-w-6xl mx-auto flex min-h-[calc(100vh-80px)] pt-20">
          <div className="w-full lg:w-1/2 px-6 lg:px-0 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
              Todas tus{" "}
              <span className="text-cyan-400">Redes Sociales </span>
              en un enlace
            </h1>

            <p className="text-slate-800 text-xl">
              Únete a más de 200 mil developers compartiendo sus redes sociales,
              comparte tu perfil de Tiktok, Facebook, Instagram, Youtube, Github y más.
            </p>

            <SearchForm />
          </div>
        </div>
      </main>
    </>
  )
}
