//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    cat, state;

//Create a Pixi Application
let app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});

//Adding the canvas...
document.body.appendChild(app.view);

//Loading an image and running the "setup" function when it's done
loader
    .add("img/animals.json") 
    .on("progress", loadProgressHandler) //This is a loader function to show how many files are loading
    .load(setup);

function setup () {
    let cat = new Sprite(id["cat.png"]);
    cat.position.set(16,16);

    let hedgehog = new Sprite(id["hedgehog.png"]);
    hedgehog.position.set(32,32);

    let tiget = new Sprite(id["tiger.png"]);
    tiger.position.set(64,64);
}



function loadProgressHandler(loader, resource) {
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress + "%");
}