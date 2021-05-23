import { h } from "../h";
import { createToken } from '@virtualstate/x';
import { Template } from '../template';

const Select = createToken(
  Symbol("Select"),
  {
    defaultValue: "",
    class: "select"
  },
  <option disabled>No options available</option>
);

interface PersonUpdateOptions {
  firstName: string;
  lastName: string;
}
const PersonUpdateSymbol = Symbol()
const PersonUpdate = createToken<typeof PersonUpdateSymbol, PersonUpdateOptions>(PersonUpdateSymbol);

interface PersonUpdateFormOptions {
  onPersonUpdate(update: PersonUpdateOptions): void
}
const PersonUpdateFormSymbol = Symbol()
const PersonUpdateForm = createToken<typeof PersonUpdateFormSymbol, PersonUpdateFormOptions>(PersonUpdateFormSymbol);

export const Tokens = (
  <Template id="tokens-template">
    <section id="tokens">
      <h2>Tokens</h2>
      <p>
        This pattern introduces a concept called <em>tokens</em>.
        A token represents some functionality that has not yet been
        implemented, allowing for an external consumer to replace the
        implementation of the token.

        A good example of this pattern would be a select input, where
        we may have a default disabled option, or provide an option
      </p>
      <pre>
      {`
const Select = createToken(
    Symbol("Select"),
    {
       defaultValue: "",
       class: "select"
    },
    // Default children
    <option disabled>No options available</option>
);

// Would render 
// <Select defaultValue="" class="select">{defaultChildren}</Select>
const DefaultSelect = <Select />;

// Would render 
// <Select defaultValue="first" class="select">{givenChildren}</Select>
const MySelect = (
  <Select defaultValue="first">
    <option value="first">First</option>
    <option value="second">Second</option>
  </Select>
);
      `.trim()}
    </pre>
      <div hidden>
        <Select />
        <Select defaultValue="first">
          <option value="first">First</option>
          <option value="second">Second</option>
        </Select>
      </div>
      <p>
        These examples are best seen with UI components, but tokens have more use
        in generic processes where the tokens are used defined data points
      </p>
      <pre>
      {`

interface PersonUpdateOptions {
  firstName: string;
  lastName: string;
}
const PersonUpdateSymbol = Symbol()
const PersonUpdate = createToken<typeof PersonUpdateSymbol, PersonUpdateOptions>(PersonUpdateSymbol);

interface PersonUpdateFormOptions {
  onPersonUpdate(update: PersonUpdateOptions): void
}
const PersonUpdateFormSymbol = Symbol()
const PersonUpdateForm = createToken<typeof PersonUpdateFormSymbol, PersonUpdateFormOptions>(PersonUpdateFormSymbol);

async function *Component() {
  const { resolve, promise } = defer<PersonUpdateOptions>();
  yield <PersonUpdateForm onPersonUpdate={resolve} />
  const { firstName, lastName } = await promise;
  yield <PersonUpdate firstName={firstName} lastName={lastName} />
}

      `.trim()}
    </pre>
      <div hidden>
        <PersonUpdateForm onPersonUpdate={noop} />
        <PersonUpdate firstName="First Name!" lastName="Last Name!" />
      </div>
    </section>
  </Template>
)

function noop() {
  return undefined;
}
