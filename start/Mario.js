(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Mario_atlas_", frames: [[0,0,700,400],[366,477,58,59],[433,463,59,59],[426,524,58,59],[433,402,59,59],[494,463,58,59],[120,538,58,59],[244,477,59,59],[300,538,58,59],[305,477,59,59],[0,538,58,59],[180,538,58,59],[0,477,59,59],[486,524,58,59],[61,477,59,59],[60,538,58,59],[240,538,58,59],[122,477,59,59],[494,402,58,59],[183,477,59,59],[360,538,58,59],[546,524,36,48],[0,402,431,73],[420,585,24,32],[554,470,28,30],[554,436,32,32],[554,402,34,32],[546,574,26,32]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.c02 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.c03 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.c04 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.c05 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.c06 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.c07 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.c08 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.c09 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.c10 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.c11 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.c12 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.c13 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.c14 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.c15 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.c16 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.c17 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.c18 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.c19 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.c20 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.c21 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.coin = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.footer = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.run1 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.run2 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.run3 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.run4 = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.initialize(ss["Mario_atlas_"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.User = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:0,run:1,die:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.gotoAndPlay('run');
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(21).call(this.frame_28).wait(1));

	// 圖層_1
	this.instance = new lib.stop();
	this.instance.parent = this;
	this.instance.setTransform(-13,-32);

	this.instance_1 = new lib.run1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12,-32);

	this.instance_2 = new lib.run2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-14,-30);

	this.instance_3 = new lib.run3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-16,-32);

	this.instance_4 = new lib.run4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-17,-32);

	this.instance_5 = new lib.c02();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-29,-59);

	this.instance_6 = new lib.c03();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-30,-59);

	this.instance_7 = new lib.c04();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-29,-59);

	this.instance_8 = new lib.c05();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-30,-59);

	this.instance_9 = new lib.c06();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-29,-59);

	this.instance_10 = new lib.c07();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-29,-59);

	this.instance_11 = new lib.c08();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-30,-59);

	this.instance_12 = new lib.c09();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-29,-59);

	this.instance_13 = new lib.c10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-30,-59);

	this.instance_14 = new lib.c11();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-29,-59);

	this.instance_15 = new lib.c12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-29,-59);

	this.instance_16 = new lib.c13();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-30,-59);

	this.instance_17 = new lib.c14();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-29,-59);

	this.instance_18 = new lib.c15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-30,-59);

	this.instance_19 = new lib.c16();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-29,-59);

	this.instance_20 = new lib.c17();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-29,-59);

	this.instance_21 = new lib.c18();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-30,-59);

	this.instance_22 = new lib.c19();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-29,-59);

	this.instance_23 = new lib.c20();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-30,-59);

	this.instance_24 = new lib.c21();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-29,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-59,59,59);


(lib.Coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.coin();
	this.instance.parent = this;
	this.instance.setTransform(-18,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Coin, new cjs.Rectangle(-18,-24,36,48), null);


// stage content:
(lib.Mario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.footer();
	this.instance.parent = this;
	this.instance.setTransform(0,352,1.6241,1);

	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,200,350,225);
// library properties:
lib.properties = {
	id: '3CD657FB2205864BAB429722A043B0D2',
	width: 700,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mario_atlas_.png?1565172170434", id:"Mario_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3CD657FB2205864BAB429722A043B0D2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;