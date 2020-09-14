import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repository: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/gideonfernandes'}>
          gideonfernandes
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/gideonfernandes/contact-keeper'}>
          contact-keeper
        </Link>
      </Breadcrumb>

    <p>Create an account & store your contact list</p>

    <Stats>
      <li>
        <StarIcon />
        <strong>9</strong>
        <span>Stats</span>
      </li>

      <li>
        <ForkIcon />
        <strong>4</strong>
        <span>forks</span>
      </li>
    </Stats>

    <LinkButton href={'https://github.com/gideonfernandes/contact-keeper'}>
      <GithubIcon />
      <span>Ver no Github</span>
    </LinkButton>
    </Container>
  );
};

export default Repository;
