import { h } from '../h';
import { Template } from '../template';
import { Unbound } from '../unbound';
import { VNode, Collector, createFragment } from '@virtualstate/x';

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
    <Template id="bouncing-ball-reacting-example">
      <h2>Reacting to things</h2>
      <pre>
        {`
import { Collector } from "@virtualstate/x";
async function *ReactiveExample() {
  const eventCollector = new Collector();
  // Replace the first parameter, don't actually collect any event
  const onClick = eventCollector.add.bind(eventCollector, Symbol("Click"));
  const button = document.createElement("button");
  button.addEventListener("click", onClick);

  let visible = false;

  yield <View />;

  for await (const events of eventCollector) {
    visible = events.reduce((visible: boolean) => !visible, visible);
    yield <View />;
    
    // Re focus the button after the onClick, allows for toggling on and off with keyboard
    button.focus();
  }

  function View() {
    return (
      <div class="ball-container">
        {visible ? <span class="ball" /> : undefined}
        <button type="button" getDocumentNode={() => button}>{visible ? "Grab" : "Bounce"} Ball</button>
      </div>
    )
  }
}
        `.trim()}
      </pre>
      <p>Renders the following output:</p>
    </Template>
    <div class="example-output">
      <Unbound>
        <ReactiveExample />
      </Unbound>
    </div>
  </section>
)

async function *ReactiveExample() {
  const eventCollector = new Collector();
  // Don't actually collect any event
  const onClick = eventCollector.add.bind(eventCollector, Symbol("Click"));
  const button = document.createElement("button");
  button.addEventListener("click", onClick);

  let visible = false;

  yield <View />;

  for await (const events of eventCollector) {
    visible = events.reduce((visible: boolean) => !visible, visible);
    console.log({ events, visible });
    yield <View />;

    // Re focus the button after the onClick, allows for toggling on and off with keyboard
    button.focus();
  }

  function View() {
    return (
      <div class="ball-container">
        {visible ? <span class="ball" /> : undefined}
        <button type="button" getDocumentNode={() => button}>{visible ? "Grab" : "Bounce"} Ball</button>
      </div>
    )
  }
}
