import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={() => {}}>
        <input type="text" placeholder="Digite um username ou reponame" />

      </SearchForm>
    </Container>
  );
};

export default Header;
