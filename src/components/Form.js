import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form className="container" onSubmit={ this.handleSubmit }>
        <h1>Adicionar nova carta</h1>
        <div className="style1">
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="style1">
          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              id="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="style2">
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="style2">

          <label htmlFor="attr2-input">
            Atributo 2
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="style2">
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="style2">
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="style1">
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              id="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <div className="style2">
          {
            !hasTrunfo
            && (
              <label htmlFor="trunfo-input">
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  id="trunfo-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trybe Tryunfo
              </label>)
          }
          { hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p>}
        </div>
        <button
          className="btn"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
