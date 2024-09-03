import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <h2>Pesquisar usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder="Nome do usuário" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;