declare global {

  interface Window {
    proposalSiteRender?: Promise<void>;
  }

}

export {};
