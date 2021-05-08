

declare namespace JSX {

  type DocumentNode = Element | Text;

  type Attributes = Record<string, unknown>;

  type BooleanAttribute = boolean | "";

  interface HTMLAriaAttributes {
    role?: string;
    "aria-controls"?: string;
    "aria-selected"?: string | BooleanAttribute;
  }

  interface HTMLElementAttributes extends HTMLAriaAttributes, Attributes {
    onBeforeRender?(node: DocumentNode): void | Promise<void>;
    class?: string;
    accesskey?: string;
    contenteditable?: BooleanAttribute;
    contextmenu?: string;
    dir?: "rtl" | "ltr" | "auto";
    draggable?: string;
    dropzone?: string;
    hidden?: string | boolean;
    id?: string;
    itemprop?: string;
    lang?: string;
    slot?: string;
    spellcheck?: string;
    style?: string;
    tabindex?: string | number;
    title?: string;
    translate?: string;
  }

  interface HTMLImageAttributes extends HTMLElementAttributes {

  }

  interface HTMLAnchorAttributes extends HTMLElementAttributes {

  }

  interface HTMLButtonAttributes extends HTMLElementAttributes {
    type: "submit" | "button";
  }

  interface HTMLLinkAttributes extends HTMLElementAttributes {

  }

  interface HTMLMetaAttributes extends HTMLElementAttributes {

  }

  interface HTMLSlotAttributes extends HTMLElementAttributes {

  }

  interface HTMLScriptAttributes extends HTMLElementAttributes {
    src?: string;
    type?: string;
  }

  interface HTMLOptionAttributes extends HTMLElementAttributes {
    value?: string;
    disabled?: BooleanAttribute;
  }

  interface DOMElements {
    html: HTMLElementAttributes;
    body: HTMLElementAttributes;
    head: HTMLElementAttributes;
    title: HTMLElementAttributes;
    header: HTMLElementAttributes;
    footer: HTMLElementAttributes;
    article: HTMLElementAttributes;
    section: HTMLElementAttributes;
    div: HTMLElementAttributes;
    span: HTMLElementAttributes;
    img: HTMLImageAttributes;
    aside: HTMLElementAttributes;
    audio: HTMLElementAttributes;
    canvas: HTMLElementAttributes;
    datalist: HTMLElementAttributes;
    details: HTMLElementAttributes;
    embed: HTMLElementAttributes;
    nav: HTMLElementAttributes;
    output: HTMLElementAttributes;
    progress: HTMLElementAttributes;
    video: HTMLElementAttributes;
    ul: HTMLElementAttributes;
    li: HTMLElementAttributes;
    ol: HTMLElementAttributes;
    a: HTMLAnchorAttributes;
    p: HTMLElementAttributes;
    button: HTMLButtonAttributes;
    table: HTMLElementAttributes;
    thead: HTMLElementAttributes;
    tbody: HTMLElementAttributes;
    tr: HTMLElementAttributes;
    td: HTMLElementAttributes;
    th: HTMLElementAttributes;
    link: HTMLLinkAttributes;
    meta: HTMLMetaAttributes;
    marquee: HTMLElementAttributes;
    slot: HTMLSlotAttributes;
    h1: HTMLElementAttributes;
    h2: HTMLElementAttributes;
    h3: HTMLElementAttributes;
    h4: HTMLElementAttributes;
    h5: HTMLElementAttributes;
    h6: HTMLElementAttributes;
    script: HTMLScriptAttributes;
    pre: HTMLElementAttributes;
    code: HTMLElementAttributes;
    br: HTMLElementAttributes;
    hr: HTMLElementAttributes;
    main: HTMLElementAttributes;
    label: HTMLElementAttributes;
    em: HTMLElementAttributes;
    option: HTMLOptionAttributes;
  }

  interface IntrinsicElements extends DOMElements, Record<symbol, Attributes> {
    fragment: Attributes;
  }

}
