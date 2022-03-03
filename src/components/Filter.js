import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

class Filter extends React.Component {
  render() {
    const { handleSearch, searchInput, searchSelect, searchTrunfo } = this.props;
    return (
      <div className="filter-container">
        <h3>Todas as cartas</h3>
        <div className="style1">
          <label htmlFor="name-filter">
            Filtros de busca
            <input
              type="text"
              data-testid="name-filter"
              id="name-filter"
              name="searchInput"
              placeholder="Nome da carta"
              value={ searchInput }
              onChange={ handleSearch }
            />
          </label>
          <label htmlFor="rare-filter">
            <select
              data-testid="rare-filter"
              id="rare-filter"
              name="searchSelect"
              placeholder="Raridade"
              value={ searchSelect }
              onChange={ handleSearch }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-filter">
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              id="trunfo-filter"
              name="searchTrunfo"
              checked={ searchTrunfo }
              onChange={ handleSearch }
            />
            Super Trybe Tryunfo
          </label>
        </div>
        <button type="button">Buscar</button>
      </div>
    );
  }
}

Filter.propTypes = {
  handleSearch: PropTypes.func,
  searchInput: PropTypes.string,
  searchSelect: PropTypes.string,
  searchTrunfo: PropTypes.string,
}.isRequired;

export default Filter;
