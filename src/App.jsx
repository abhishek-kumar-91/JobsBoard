import FooterDiv from './Components/FooterDiv/FooterDiv'
import NavDiv from './Components/NavDiv/NavDiv'
import ValueDiv from './Components/ValueDiv/ValueDiv'
import SearchDiv from './Components/SearchDiv/SearchDiv'
import JobDiv from './Components/JobDiv/JobDiv'

function App() {
  
  return (
    <>
    <div className='w-[85%] m-auto bg-white'>
      <NavDiv />
      <SearchDiv />
      <JobDiv />
      <ValueDiv />
      <FooterDiv />
      </div>
    </>
  )
}

export default App
