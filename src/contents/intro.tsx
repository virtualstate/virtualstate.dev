import { h } from '../h';
import { createFragment } from '@opennetwork/vnode';
import { Goals } from './goals';
import { Template } from '../template';

export const Intro = (
  <>
    <Template id="intro-template">
      <h1>Virtual State - vsx</h1>
    </Template>
    {Goals}
  </>
)
