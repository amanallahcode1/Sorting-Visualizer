let delay = 1000;
let maxBarHeight = 60;

async function swap(bar1, bar2) {
    // change the color of bar to red
    bar1.style.background = "#f00000"
    bar2.style.background = "#f00000"
    await new Promise (resolve => setTimeout(resolve, delay))

    let heightBar1 = bar1.style.height;
    let heightBar2 = bar2.style.height;


    // swap height
    bar1.style.height = heightBar2
    bar2.style.height = heightBar1

    await new Promise(resolve => setTimeout(resolve, delay))
}