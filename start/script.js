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

    // =========================================================================
    // main
    // =========================================================================
    const SPEED = 10;
    let position = 1;
    let score = 0;
    let attack = 10;
    let hp = 100;
    let isStart = false;
    let isKeyDown = false;

    // 載入聲音
    let loadedFile = 0;
    const SOUNDS = [
        { src: "./assets/play.mp3", id: "play" },
        { src: "./assets/coin.mp3", id: "coin" },
        { src: "./assets/boom.mp3", id: "boom" },
        { src: "./assets/bg.mp3", id: "bg" },
    ];
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.on("fileload", () => {
        loadedFile++;
        if (loadedFile === SOUNDS.length) {
            document.querySelector('.loading').style.display = 'none';
            // 播放背景音樂
            let instance = createjs.Sound.play("bg", { loop: -1 });
            instance.volume = 0.1;
        }
    });
    createjs.Sound.registerSounds(SOUNDS, "./");

    function keydownHandler(e) {
        if (isKeyDown) return;
        if (e.keyCode === 39 || e.keyCode === 37) {
            isKeyDown = true;
            position = e.keyCode === 39 ? 1 : -1;
            user.gotoAndPlay('run');
        }
    }

    function keyupHandler() {
        isKeyDown = false;
        user.gotoAndPlay('stop');
    }

    // 加入人物
    let user = new lib.User();
    user.x = 350;
    user.y = 352;
    exportRoot.addChild(user);

    let timer = setInterval(() => {
        if (!isStart) return;

        // 加入金幣
        let coin = new lib.Coin();
        coin.x = Math.floor(Math.random() * (670 - 30 + 1)) + 30;
        coin.y = -50;
        exportRoot.addChildAt(coin, 1);

        // 金幣動畫及碰撞偵測
        createjs.Tween.get(coin).to({ y: 400 }, 2500)
            .call(() => {
                console.log('miss!');
                exportRoot.removeChild(coin);
                hp -= attack;
                document.querySelector('.hp').style.width = `${hp}%`;
            })
            .addEventListener('change', () => {
                let intersection = ndgmr.checkRectCollision(coin, user);
                if (intersection) {
                    createjs.Tween.removeTweens(coin);
                    exportRoot.removeChild(coin);
                    score++;
                    document.querySelector('.winNum').textContent = score;
                    createjs.Sound.play("coin");
                }
            });
    }, 1000);

    // ticker
    let tickFn = function () {
        // 遊戲結束
        if (hp <= 0) {
            user.gotoAndPlay('die');
            document.querySelector('.over').style.display = 'flex';
            createjs.Ticker.removeEventListener('tick', tickFn);
            document.removeEventListener('keydown', keydownHandler);
            document.removeEventListener('keyup', keyupHandler);
            clearInterval(timer);
            createjs.Sound.play("boom");
        }

        // 人物移動
        if (!isKeyDown) return;
        user.x += SPEED * position;
        user.scaleX = position;
    }
    createjs.Ticker.addEventListener('tick', tickFn);

    // 遊戲開始
    document.querySelector('.gamePlayBtn').addEventListener('click', function () {
        isStart = true;
        this.style.display = 'none';
        document.addEventListener('keydown', keydownHandler);
        document.addEventListener('keyup', keyupHandler);
        createjs.Sound.play("play");
    });

    // 重新開始
    document.querySelector('.resetPlay').addEventListener('click', () => {
        location.reload();
    });
}