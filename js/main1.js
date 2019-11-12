 //Create a Pixi Application
 let app = new PIXI.Application({
    width: 256,                 //default: 800 
    height: 256,                //default: 600
    antialias: true,            //default: false
    transparent: false,         //default: false
    resolution: 1,              //default: 1
    //forcecanvas: true,          //default: false
});

//Change Canvas' Background color in real time
app.renderer.backgroundColor = 0x061639;

//Resize canvas while drawing in real time
resizeWindow(app);

//Making the canvas fill the entire window automatically
fillWindow(app);

//Adds a new sprite to the game
//PIXI.utils.TextureCache["img/cat.png"];

//Making the image load as a texture and use it as a sprite
//let texture = PIXI.utils.TextureCache["img/cat.png"];
//let sprite = new PIXI.sprite(texture);

/*
//Another way of loading the image or sprite inside Pixi
// btw, this is the PIXI.js team's recommendation on how to load textures and sprites for the game

PIXI.loader
    .add("img/cat.png")
    .load(setup);

function setup() {
    // this code will run when the loader has finished loading the image
    let sprite = new PIXI.Sprite(
        PIXI.loader.resources["img/cat.png"].texture
    );
}
*/

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

function resizeWindow(app) {
    app.renderer.autoresize = true;
    app.renderer.resize(512, 512);
}

function fillWindow(app) {
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
}