import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Button, Label, Input, Icon } from './Searchbar.styled';
import { toast } from 'react-toastify';

export default function Searchbar({ changeURL }) {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearch(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.warn('The search field is empty', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    changeURL(search.trim());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        value={search}
        autocomplete="off"
        placeholder="Search movies"
        onChange={handleChange}
      />
      <Button type="submit" onClick={handleSubmit}>
        <Icon />
        <Label>Search</Label>
      </Button>
    </SearchForm>
  );
}

Searchbar.propTypes = {
  changeURL: PropTypes.func,
};
