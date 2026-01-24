import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import RandomContainer from './components/RandomContainer';
import RandomJob from './components/RandomJob';

function App() {
  return (
    <BrowserRouter basename="/ff14-roulette-x2/">
      <div className="mx-0 my-0 h-full min-h-screen bg-slate-700">
        <div className="flex flex-col sm:mx-16 lg:mx-64">
          <div className="mx-auto mt-8 my-4">
            <h1 className="text-4xl text-zinc-100 font-['player']">Random Party Decider</h1>
          </div>
          <nav className="bg-zinc-600 my-8 -mx-32">
            <ul className="flex flex-row place-content-center place-items-center">
              <li>
                <NavLink
                  className="px-16 py-4 bg-zinc-400 hover:bg-stone-400 my-4 mx-16 cursor-pointer"
                  to={`/`}>
                  Party Maker
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-16 py-4 bg-zinc-400 hover:bg-stone-400 my-4 mx-16 cursor-pointer"
                  to={`/single`}>
                  Single Job Chooser
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<RandomContainer />}></Route>
              <Route path="/single" element={<RandomJob />}></Route>
            </Routes>
          </div>
          <footer>
            <div>
              <p className="mx-auto my-12 text-zinc-100">Made with {'<3'} by Chi and Cirno</p>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
