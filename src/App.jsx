import { useState, useEffect } from 'react';
import FormularioVeiculo from './components/FormularioVeiculo.jsx';
import './App.css';

function App() {
  const [veiculos, setVeiculos] = useState([]);

  // Função para buscar os veículos (não muda)
  const fetchVeiculos = () => {
    fetch('http://127.0.0.1:5000/api/veiculos')
      .then(response => response.json())
      .then(data => setVeiculos(data))
      .catch(error => console.error('Erro ao buscar veículos:', error));
  };

  // Roda a busca inicial quando o componente carrega
  useEffect(() => {
    fetchVeiculos();
  }, []);

  // 1. Esta é a função que o formulário vai chamar!
  // Ela recebe o novo veículo criado e o adiciona à lista existente.
  const handleVeiculoCriado = (novoVeiculoApi) => {
    // Isso diz ao React: "Crie uma nova lista que contém
    // tudo da lista de veículos atual (...veiculos)
    // e adicione este novo item (novoVeiculoApi) no final."
    setVeiculos(listaAtual => [...listaAtual, novoVeiculoApi]);
};

  return (
    <div>
      <h1>Frota de Veículos - TorqueSync 🚗</h1>

      {/* 2. Entregamos a função 'handleVeiculoCriado' como um presente (prop) */}
      <FormularioVeiculo onVeiculoCriado={handleVeiculoCriado} />

      <hr />

      <h2>Veículos Atuais</h2>
      <ul>
        {veiculos.map(veiculo => (
          <li key={veiculo.id}>
            {veiculo.modelo} ({veiculo.placa}) - Status: {veiculo.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;