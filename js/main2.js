//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1
});

//Adding the canvas...
document.body.appendChild(app.view);

//Loading an image and running the "setup" function when it's done
loader
    .add("img/cat.png")
    .load(setup);

//This "setup" function will run when the image has loaded
function setup() {
    //Create the cat sprite
    let cat = new Sprite(resources["img/cat.png"].texture);

    //Add the cat to the stage
    app.stage.addChild(cat);
}