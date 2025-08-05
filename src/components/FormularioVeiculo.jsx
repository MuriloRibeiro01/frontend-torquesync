import { useState } from 'react';

// 1. Recebemos a função 'onVeiculoCriado' como um "presente" (prop) do App.jsx
function FormularioVeiculo({ onVeiculoCriado }) {
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [quilometragem, setQuilometragem] = useState('');

  // 2. Agora, o handleSubmit vai fazer a "ligação" para o backend
  const handleSubmit = (event) => {
    event.preventDefault();

    const novoVeiculo = {
      placa,
      modelo,
      ano: parseInt(ano), // Converte ano para número
      cor,
      quilometragem: parseInt(quilometragem) // Converte KM para número
    };

    // 3. Usamos o fetch para enviar os dados para a API Flask
    fetch('http://127.0.0.1:5000/api/veiculos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Avisa ao servidor que estamos enviando JSON
      },
      body: JSON.stringify(novoVeiculo), // Converte nosso objeto JS para uma string JSON
    })
      .then(response => response.json())
      .then(data => {
        // 4. Se a criação foi um sucesso, chamamos a função que recebemos do pai!
        // O 'data' aqui é a resposta da nossa API (ex: {"id": 5, "message": ...})
        onVeiculoCriado(data);

        // 5. Limpa os campos do formulário para uma nova inserção
        setPlaca('');
        setModelo('');
        setAno('');
        setCor('');
        setQuilometragem('');
      })
      .catch(error => console.error('Erro ao criar veículo:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Novo Veículo</h2>
      <div>
        <label>Placa:</label>
        <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} required />
      </div>
      <div>
        <label>Modelo:</label>
        <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
      </div>
      <div>
        <label>Ano:</label>
        <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} />
      </div>
      <div>
        <label>Cor:</label>
        <input type="text" value={cor} onChange={(e) => setCor(e.target.value)} />
      </div>
      <div>
        <label>Quilometragem:</label>
        <input type="number" value={quilometragem} onChange={(e) => setQuilometragem(e.target.value)} />
      </div>
      <button type="submit">Adicionar Veículo</button>
    </form>
  );
}

export default FormularioVeiculo;