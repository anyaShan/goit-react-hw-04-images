import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

let schema = yup.object().shape({
  searchName: yup.string().required(),
});

export const Searchbar = ({ onSubmit }) => {
  const handleFormSubmit = (values, { resetForm }) => {
    // console.log(values);
    if (values.searchName.trim() === '') {
      return toast.error('Please enter something!');
      // return alert('Please, add word');
    }
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        searchName: '',
      }}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <SearchbarHeader>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="searchName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage component="span" name="searchName" />
        </SearchForm>
      </SearchbarHeader>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
