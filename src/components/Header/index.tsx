import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

import { ThemeName } from '../../styles/themes';
interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    navigate('/' + search.toLowerCase().trim());
  };

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
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
