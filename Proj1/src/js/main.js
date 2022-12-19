const agentCount = 3;
let currentAgent = 0;

const mapCount = 3;
let currentMap = 0;

function changeAgent(next) {
    const bgs = document.querySelectorAll(".bg.agent img");
    const models = document.querySelectorAll(".agent-model img");
    const datas = document.querySelectorAll(".text-data.agent");

    bgs[currentAgent].classList.remove("opaque");
    models[currentAgent].classList.remove("opaque");
    datas[currentAgent].classList.remove("opaque");

    if (next && ++currentAgent > agentCount - 1) {
        currentAgent = 0;
    } else if (!next && --currentAgent < 0) {
        currentAgent = agentCount - 1;
    }

    bgs[currentAgent].classList.add("opaque");
    models[currentAgent].classList.add("opaque");
    datas[currentAgent].classList.add("opaque");
}

function changeMap(next) {
    const bgs = document.querySelectorAll(".bg.map img");
    const datas = document.querySelectorAll(".text-data.map");

    bgs[currentMap].classList.remove("opaque");
    datas[currentMap].classList.remove("opaque");

    if (next && ++currentMap > mapCount - 1) {
        currentMap = 0;
    } else if (!next && --currentMap < 0) {
        currentMap = mapCount - 1;
    }

    bgs[currentMap].classList.add("opaque");
    datas[currentMap].classList.add("opaque");
}