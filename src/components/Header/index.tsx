import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const [search, setSearch ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    navigate('/' + search.toLowerCase().trim());
  };

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite um username ou reponame"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
