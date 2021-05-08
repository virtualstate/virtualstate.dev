import { h } from '../h';
import { Template } from '../template';
import { Unbound } from '../unbound';
import { VNode } from '@opennetwork/vnode';
import { createFragment } from '@opennetwork/vnode';

export async function InitialExample() {
  return (
    <>
      <h3>This is an example of various capabilities of this pattern</h3>
      <pre>
        <Loading>
          <AsyncExample />
        </Loading>
      </pre>
    </>
  )
}

async function AsyncExample() {
  return await new Promise(
    resolve => setTimeout(resolve, 1500, `Async result: ${Math.random()}`)
  );
}

async function *Loading(options: unknown, child: VNode) {
  yield <>Loading!</>;
  yield child;
}


export const Example = (
  <section id="quick-example">
    <Template id="quick-example-content-template">
      <h2>A quick example</h2>
      <pre>
        {`
export async function InitialExample() {
  return (
    <>
      <h3>
        This is an example of various
        capabilities of this pattern
      </h3>
      <pre>
        <Loading>
          <AsyncExample />
        </Loading>
      </pre>
    </>
  )
}

async function AsyncExample() {
  return await new Promise(
    resolve => setTimeout(resolve, 1500, \`Async result: \${Math.random()}\`)
  );
}

async function *Loading(options: unknown, child: VNode) {
  yield <>Loading!</>;
  yield child;
}
        `.trim()}
      </pre>
      <p>Renders the following output:</p>
    </Template>
    <div class="example-output">
      <Unbound>
        <InitialExample />
      </Unbound>
    </div>
  </section>
)
