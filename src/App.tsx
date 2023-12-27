import { Clock, Star } from "lucide-react";

export default function App() {
  return (
    <main className="flex bg-[url('/src/assets/background.png')] min-h-screen bg-center bg-cover bg-no-repeat">

      <div className="flex flex-col justify-between flex-1 md:flex-grow-1 pt-28 md:pb-14">
        <div className="container space-y-2 text-center uppercase">
          <span className="text-lg font-heading md:text-2xl lg:text-3xl">Está disponível agora</span>
          <h2 className="font-heading text-5xl md:text-[80px] lg:text-8xl">Loki</h2>
        </div>

        <div className="md:container md:mt-14 lg:flex lg:gap-12">
          <figure className="hidden md:flex md:items-center md:justify-center lg:min-w-[200px]" >
            <img src="capa.png" alt="" className="object-cover" />
          </figure>

          <div className="p-8 lg:p-0 bg-dark-10 md:bg-opacity-0 rounded-t-2xl">
            <p className="font-medium md:text-xl lg:text-2xl">Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </p>

            <div className="flex items-center justify-between mt-8">
              <div className="inline-flex items-center gap-2">
                <Clock className="w-5 h-5 lg:w-8 lg:h-8 text-dark-20" />
                <span className="md:text-xl lg:text-2xl">51 min</span>
              </div>
              <div className="inline-flex items-center gap-4 md:gap-8">
                <figure className="inline-flex items-center gap-2 md:gap-3">
                  <Star fill='#FFA800' stroke="0" className="w-[18px] h-[18px] md:w-6 md:h-6 lg:w-10 lg:h-10" />
                  <Star fill='#FFA800' stroke="0" className="w-[18px] h-[18px] md:w-6 md:h-6 lg:w-10 lg:h-10" />
                  <Star fill='#FFA800' stroke="0" className="w-[18px] h-[18px] md:w-6 md:h-6 lg:w-10 lg:h-10" />
                  <Star fill='#FFA800' stroke="0" className="w-[18px] h-[18px] md:w-6 md:h-6 lg:w-10 lg:h-10" />
                  <Star fill='#FFA800' stroke="0" className="w-[18px] h-[18px] md:w-6 md:h-6 lg:w-10 lg:h-10 opacity-30" />
                </figure>
                <span className="font-heading md:text-xl lg:text-2xl">2021</span>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-14 md:flex-row md:justify-center lg:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-semibold text-center uppercase transition-all rounded bg-brand hover:bg-brand/90">Assistir agora</a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-semibold text-center uppercase transition-all border rounded border-dark-20 hover:bg-dark-20/5">Ver o trailer</a>
            </div>

            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </div>

        </div>
      </div>
    </main>
  )
}