import './styles.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
</style>

const Cards = () => {
  const cidades = ['São Paulo - SP', 'Florianópolis - SC', 'Curitiba - PR', 'Salvador - BA', 'Rio de Janeiro - RJ']
  return(
    <>
      <div className="card">
        <img className='card-01' src="./assets/1.jpg" alt="Imagem 01" />
          <span>Bloco de Carnaval</span>
          <p>Esse é um bloco de carnaval para você aproveitar muito, desfilar e sorrir!</p>
          <div className="city">
            <img className='card-01' src="./assets/location.svg" alt="Imagem 01" />
            <span>São Paulo - SP</span>
          </div>
      </div>
    </>
  );
};

export default Cards;