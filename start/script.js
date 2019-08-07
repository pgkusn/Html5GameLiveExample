window.onload = init;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("3CD657FB2205864BAB429722A043B0D2");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
    loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    exportRoot = new lib.Mario();
    stage = new lib.Stage(canvas);

    // start
    const SPEED = 10;
    let position = 1;
    let isKeyDown = false;
    let user = new lib.User();
    user.x = 350;
    user.y = 352;
    exportRoot.addChild(user);

    document.addEventListener('keydown', e => {
        if (isKeyDown) return;
        if (e.keyCode === 39 || e.keyCode === 37) {
            isKeyDown = true;
            position = e.keyCode === 39 ? 1 : -1;
            user.gotoAndPlay('run');
        }
    });

    document.addEventListener('keyup', e => {
        isKeyDown = false;
        user.gotoAndPlay('stop');
    });

    createjs.Ticker.addEventListener('tick', () => {
        if (!isKeyDown) return;
        user.x += SPEED * position;
        user.scaleX = position;
    });

    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}