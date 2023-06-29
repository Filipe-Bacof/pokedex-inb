export default function Home() {
  return (
    <main className="flex h-[100vh] flex-col items-center justify-center bg-lg-blue">
      <div className="flex h-96 w-[16.7rem] flex-row-reverse rounded-l-3xl border-l border-black bg-pokedex-b">
        <div className="flex h-96 w-64 flex-col rounded-l-3xl border border-black bg-pokedex">
          <div className="m-2 flex flex-row gap-2">
            {/* BUTTONS CONTAINER */}
            <div className="h-14 w-14 rounded-full border border-black bg-white pl-[0.26rem] pt-[0.1rem]">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-black bg-xs-blue">
                <div className="relative m-1 h-10 w-10 rounded-full bg-xg-blue">
                  <div className="absolute top-[-2px] ml-1 h-[1.6rem] w-[1.6rem] rounded-full bg-xs-blue">
                    <div className="absolute left-[25%] top-[13%] h-3 w-3 rounded-full bg-xxs-blue"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-4 w-4 overflow-hidden rounded-full border border-black bg-red-700">
              <div className="h-3 w-3 rounded-full bg-red-600"></div>
            </div>
            <div className="h-4 w-4 overflow-hidden rounded-full border border-black bg-yellow-500">
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            </div>
            <div className="h-4 w-4 overflow-hidden rounded-full border border-black bg-green-600">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
