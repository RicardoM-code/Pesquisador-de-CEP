/* eslint-disable jsx-a11y/alt-text */
import {useState} from 'react';
import './styles.css'
import api from './services/api'

function App() {

  const[input, setInput] = useState('')
  const[cep, setCep] = useState({})

  async function handleSearch(){
    if(input === ''){
      alert("Favor preencher com algum CEP!")
      return
    }
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
    }
    catch{
      alert("Houve algum erro! Verifique se o CEP está correto!")

    }


    setInput('')
  }

  return (
    
      <div className="container">
        <h1 className="tittle">Pesquisador de CEP</h1>
        <div className="containerInput">
          <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Digite o CEP..."></input>
          <button className="buttonSearch" onClick={handleSearch}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVlJREFUSEvVletRw0AMhHcrgVRCUgmkEkIlhEpwKsGdiFmP5JHNPUJMfuCZzE0u1n3Srk4h7vzwzuejCjCzRwDPAPb+GQEMALR+kNTafYoAM3sFcGpE6/Azybce4QfAzD49Y8UKciE5eEWq5iHBB5KHFmQBMLMXAO8uw1EHl4IdpkQk46lVyQzwoC8/8JCyllzKPDQXeDQz7Qmi/WoyGRC6S9ujQA0vdg5Rtaq6WkUGxMvK5hzSuGyRfVQzHZiqqHqRAZJHmk7ZVbQPWUCSSdaR5K4U8ytABWraF7AHiPacDO71t3sUXTf7to5rmtyDmFn4dhVA+i/atAVIBuu1qm+3XrTZ7KsvWmrLKFtbateLDzl9V5VPqzmljpNvxc67ddjFnJLJglYhvXEtKZSxVj3TyI7Zs5pJRcjmP5weZDPA74Nkium6GDV/AkiQfZ5j0w3vXaatv/9/wDfa+78ZWz2TiwAAAABJRU5ErkJggg=="/></button>
        </div>



        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>CEP:{cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
        </main>
        )}

      </div>

   
    
  );
}

export default App;
