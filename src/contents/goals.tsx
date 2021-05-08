import { h } from '../h';
import { Template } from '../template';

export const Goals = (
  <Template id="goals-template">
    <section id="goals">
      <h4>Goals of this project</h4>
      <p>
        Currently available frontend tooling allows for JSX to be utilised
        to represent both web and native user interfaces.
      </p>
      <p>
        This pattern introduces using JSX for a wide variety of use cases from
        boolean logic to pure business logic without requiring the use of
        external state management.
      </p>
      <p>
        To fit the needs of a wide variety of applications the resulting pattern
        needed to:
      </p>
      <ul>
        <li>Allow state changes to be consumed natively to JavaScript without any additional tooling</li>
        <li>Allow data to be represented as it is in its source code</li>
        <li>Be asynchronous by default, letting the platform deal with optimization</li>
        <li>Produce predictable state</li>
        <li>Treat all state producers as black boxes</li>
        <li>Work on any modern JavaScript compatible engine or platform</li>
      </ul>
    </section>
  </Template>
)
