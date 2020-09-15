import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    border: 0;
    background: none;
    color: var(--black);

    transition: color .3s ease-out;
  }

  html {
    min-height: 100%;
    background: var(--primary);
  }

  ul {
    list-style: none;
  }

  :root {
    ${(props) => {
      const theme = props.theme;

      let append = '';

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`
      });

      return append;
    }}
  }
`;
