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

circle.beginFill(0x9966FF);
circle.drawCircle(0,0,32);
circle.endFill();
circle.x = 64;
circle.y = 130;
app.stage.addChild(circle);

ellipse.beginFill(0xFFFF00);
ellipse.drawEllipse(0, 0, 50, 20);
ellipse.endFill();
ellipse.x = 180;
ellipse.y = 130;
app.stage.addChild(ellipse);

roundBox.lineStyle(4, 0x99CCFF, 1);
roundBox.beginFill(0xff9933);
roundBox.drawRoundedRect(0, 0, 84, 36, 10);
roundBox.endFill();
roundBox.x = 48;
roundBox.y = 190;
app.stage.addChild(roundBox);

line.lineStyle(4, 0xffffff, 1);
line.moveTo(0,0);
line.lineTo(80, 50);
line.x = 32;
line.y = 32;
app.stage.addChild(line);

//To create a polygon, you have to use this function:
/*
let path = [
    point1X, point1Y,
    point2X, point2Y,
    point3X, point3Y
];

graphicsObject.drawPolygon(path);
*/
triangle.beginFill(0x66ff33);
//So, to create a triangle, we have two ways to draw him:
// 1 - By passing the x and y of all vertices directly:
/*triangle.drawPolygon([
    -32, 64,
    32, 64,
    0, 0
]);*/
//2 - By creating a second variable with its x and y and passing through the drawPolygon function:
let vertex = [
    -32, 64,
    32, 64,
    0, 0
];
triangle.drawPolygon(vertex);
triangle.endFill();
triangle.x = 180;
triangle.y = 22;
app.stage.addChild(triangle);