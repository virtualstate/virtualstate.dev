import { SourceReference, VNode } from '@virtualstate/x';
import { assertElement, NativeOptionsVNode, render } from '@virtualstate/dom';
import { h } from '@virtualstate/x';

export interface UnboundOptions {
  reference?: SourceReference;
  source?: string;
  onComplete?(): void;
  onError?(error: unknown): void;
}

export function Unbound(options: UnboundOptions, child: VNode): NativeOptionsVNode {
  const bound = Symbol("Bound");

  let rendering: Promise<void>

  return {
    reference: options.reference ?? Symbol("Unbound"),
    source: options.source ?? "div",
    options: {
      type: "Element",
      onBeforeRender(root) {
        assertElement(root);
        rendering = rendering || (
          createRender(root).then(noop)
        );
      }
    }
  }

  async function createRender(root: Element) {
    try {
      root.append(document.createElement("span"));
      await render(<Bound reference={bound} />, root);
      options.onComplete?.();
    } catch (error) {
      options.onError?.(error);
    }
  }

  function Bound() {
    return child;
  }
}

function noop() {
  return undefined;
}
