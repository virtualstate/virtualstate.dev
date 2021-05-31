import { h } from '../h';
import { createFragment } from '@virtualstate/x';
import { Goals } from './goals';
import { Template } from '../template';

export const Intro = (
  <>
    <Template id="intro-template">
      <h1>Virtual State X</h1>
      <div class="quote">
        Psst... see the <a href="https://github.com/virtualstate/x" target="_blank" rel="noopener">GitHub repository for this project here</a>
        &nbsp;or alternatively <a href="https://www.npmjs.com/package/@virtualstate/x" target="_blank" rel="noopener">the npm package here</a>
      </div>
    </Template>
    {Goals}
  </>
)
