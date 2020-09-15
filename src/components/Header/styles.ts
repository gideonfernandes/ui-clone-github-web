import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 16px;
  background: var(--header);
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  & > input {
    color: #ccc;
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    transition: width .2s ease-out, color .2s ease-out;

    &:focus {
      width: 318px;
    }
  }
`;
