import PropTypes from 'prop-types';
import { PhraseWrap } from './Phrases.styled';

export const StartPhrase = () => {
  return (
    <PhraseWrap>
      <p>Please enter something!</p>
    </PhraseWrap>
  );
};

export const ErrorPhrase = ({ error }) => {
  return (
    <PhraseWrap>
      <p>{error}</p>
    </PhraseWrap>
  );
};

ErrorPhrase.propTypes = {
  error: PropTypes.string,
};
