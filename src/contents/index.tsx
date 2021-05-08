import { h } from "../h";
import { Intro } from "./intro";
import { Example } from "./example";
import { Tokens } from './tokens';

export const SiteContents = (
  <main>
    {Intro}
    {Example}
    {Tokens}
  </main>
);
