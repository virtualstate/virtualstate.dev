import { h } from "../h";
import { Intro } from "./intro";
import { Example } from "./example";
import { Tokens } from './tokens';
import { Template } from '../template';

// TODO test

export const SiteContents = (
  <main>
    {Intro}
    {Example}
    {Tokens}
    <Template id="main-footer">
      <footer>
        <h4>Licence</h4>
        <p>
          This website and <a href="https://github.com/virtualstate/virtualstate.dev" target="_blank" rel="noopener noreferrer">associated GitHub respository</a> is licensed under the <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0 Universal</a> license.
        </p>
      </footer>
    </Template>
  </main>
);
