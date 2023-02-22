import './styles.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
</style>

const Header = () => {
  const cidades = ['São Paulo - SP', 'Florianópolis - SC', 'Curitiba - PR', 'Salvador - BA', 'Rio de Janeiro - RJ']
  return(
    <>
      <div className='container'>
        <img className='img-01' src="../../src/assets/ilustra-01.png" alt="Ilustração 01" />
        <div className='content-box'>
          <div className='header'>
            <span className="subtitle">find your block</span>
            <div className='title'>
              <h1>Encontre os <span className="color-head">melhores blocos</span> de carnaval de 2023</h1>
            </div>
          </div>
          <form className='busca'>
            <div className="pesquisa">
              <img className='icone-pesquisa' src="../../src/assets/search.svg" alt="Ícone de pesquisa" />
              <input type="text" className='pesquisa-input' placeholder='Pesquise por nome'></input>
            </div>
            <div className='localizacao'>
              <img className='icone-localizacao' src="../../src/assets/location.svg" alt="Ícone de localização" />
              <select name="cidade" id="cidade" placeholder='Selecione uma cidade'>
                {cidades.map((option) => (
                  <option className='options' value={option}>{option}</option>
                ))}
              </select>
            </div>
            <button className='button'>Buscar agora</button>
          </form>
          </div>
        <img className='img-02' src="../../src/assets/ilustra-02.png" alt="Ilustração 02" />
      </div>
    </>
  );
};

export default Header;