import Cards from '../Cards';
import './styles.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
</style>

const Content = () => {
  const cidades = ['São Paulo - SP', 'Florianópolis - SC', 'Curitiba - PR', 'Salvador - BA', 'Rio de Janeiro - RJ']
  return(
    <>
      <div className="content">
        <div className="title-content">
          <span>Blocos recomendados</span>
          <div className="button-select">
            <button>Lista</button>
            <button>Mapa</button>
          </div>
        </div>
        <div className="grid-cards">
          <div className="lines">
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
          </div>
          <div className="lines">
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
          </div>
          <div className="lines">
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;