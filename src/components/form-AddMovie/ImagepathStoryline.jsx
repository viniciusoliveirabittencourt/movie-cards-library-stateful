import React from 'react';
import PropTypes from 'prop-types';

class ImapathStoryline extends React.Component {
  render() {
    const {
      imagePath,
      storyline,
      addState,
    } = this.props;
    return (
      <section>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ addState }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ addState }
          />
        </label>
      </section>
    );
  }
}

ImapathStoryline.propTypes = {
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  addState: PropTypes.func.isRequired,
};

export default ImapathStoryline;
