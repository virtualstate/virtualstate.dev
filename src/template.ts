import { VNode } from '@opennetwork/vnode';
import { DocumentNode, isElement, isExpectedNode, NativeOptionsVNode, render } from '@opennetwork/vdom';
import { ElementDOMNativeVNode } from '@opennetwork/vdom/dist/element';
import { deferred } from './contents/defer';

export async function Templates() {

}

export interface TemplateOptions {
  id: string;
}

export async function Template({ id }: TemplateOptions, child: VNode): Promise<VNode> {
  let createTemplatePromise: Promise<HTMLTemplateElement> | undefined;

  return {
    reference: Symbol("Templated Document Node"),
    children: {
      async *[Symbol.asyncIterator]() {
        yield * instance()
      }
    }
  }

  async function *instance(): AsyncIterable<NativeOptionsVNode[]> {
    const template = await getTemplate(document);
    yield Array.from(template.content.cloneNode(true).childNodes).map((node, index): NativeOptionsVNode => {
      return {
        reference: Symbol(["template", id, index].join(", ")),
        source: "template",
        options: {
          type: "Node",
          instance: node
        }
      }
    });
  }

  async function getTemplate(document: Document): Promise<HTMLTemplateElement> {
    const existing = document.querySelector(`template#${id}`);
    if (isHTMLTemplateElement(existing)) {
      return existing;
    }
    return await (createTemplatePromise = createTemplatePromise || createTemplate(document));

    function isHTMLTemplateElement(value: unknown): value is HTMLTemplateElement {
      return isElement(value) && value.tagName.toUpperCase() === "TEMPLATE";
    }
  }

  async function createTemplate(document: Document): Promise<HTMLTemplateElement> {
    const template = document.createElement("template");
    const root = document.createElement("div");
    root.id = "template-root";
    await render(child, root);
    template.content.append(...Array.from(root.childNodes));
    template.id = id;
    document.body.append(template);
    createTemplatePromise = undefined;
    return template;
  }

}
