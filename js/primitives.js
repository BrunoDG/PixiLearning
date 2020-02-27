//Creating the aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    state;
let Graphics = PIXI.Graphics;

//Creating the Primitives
let rectangle = new Graphics();
let circle = new Graphics();
let ellipse = new Graphics();
let roundBox = new Graphics();
let line = new Graphics();
let triangle = new Graphics();

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

/*
//We won't need the setup function and the loader resource for now.
loader 
    .add()
    .on("progress", loadProgressHandler)
    .load(setup);

    function loadProgressHandler(loader, resource) {
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress + "%");
}
*/

//Adding the rectangle to the scene
rectangle.lineStyle(4, 0xFF3300, 1);
rectangle.beginFill(0x66CCFF);
rectangle.drawRect(0,0,64,64);
rectangle.endFill();
rectangle.x = 170;
rectangle.y = 170;
app.stage.addChild(rectangle);
