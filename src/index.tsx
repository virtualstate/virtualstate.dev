import { render, DOMVContext, createTimeline, Timeline } from '@virtualstate/dom';
import { SiteBody } from './site';
import { h } from "./h";

async function run() {

    const root = document.getElementById("root");

    if (!root) {
        throw new Error("Expected root");
    }

    const context = new DOMVContext({
        root
    });

    // const timelinePromise = createTimeline(
    //   context,
    //   reportTimeline
    // );

    await render(
      <SiteBody />,
      context
    );

    console.log("Completed rendering");

    await context.close();

    // await reportTimeline(await timelinePromise);
}

async function reportTimeline(timeline: Timeline) {
    // console.log(timeline[timeline.length - 1]);
}

window.proposalSiteRender = run();
window.proposalSiteRender.catch(error => {
    throw error;
});

