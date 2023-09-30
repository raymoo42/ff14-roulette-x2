import RandomContainer from "./components/RandomContainer"

function App() {

  return (
    <div className='mx-0 my-0 h-screen bg-slate-700'>
      <div className="flex flex-col sm:mx-32 lg:mx-64">
        <div className="mx-auto my-16">
          <h1 className="text-4xl text-zinc-100 font-['player']">Random Party Decider</h1>
          </div>
        <div className="flex-grow">
          <RandomContainer></RandomContainer>
        </div>
        <footer>
          <div>
            <p className="mx-auto my-12 text-zinc-100">Made with {"<3"} by Chi and Cirno</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
