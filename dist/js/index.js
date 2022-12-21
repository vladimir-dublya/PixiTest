import { Application, Container, Graphics, Sprite, Text } from './pixi.min.mjs';
import { DropShadowFilter } from '@pixi/filter-drop-shadow';
// Create the application
var app = new Application({
    background: '#988CA2',
    width: 800,
    height: 800,
});
document.body.appendChild(app.view);
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.createButton = function (buttonWidth, buttonHeight, buttonColor, x, y, round, img, title, font) {
        if (buttonWidth === void 0) { buttonWidth = 100; }
        if (buttonHeight === void 0) { buttonHeight = 60; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var container = new Container();
        container.sortableChildren = true;
        container.interactive = true;
        container.cursor = 'pointer';
        container.dragging = false;
        container.buttonMode = true;
        var lengthOfButtons = 0;
        var len = buttonColor.length;
        var square = buttonWidth / len;
        var fontFamily = font.fontFamily, fontSize = font.fontSize, fill = font.fill;
        var maxSquares = Math.floor(buttonWidth / Math.max(50, buttonWidth / len));
        container.on('pointerdown', onDragStart, container);
        container.x = x;
        container.y = y;
        if (buttonWidth < 100) {
            buttonWidth = 100;
        }
        if (buttonHeight < 60) {
            buttonHeight = 60;
        }
        var rectangle = new Graphics();
        for (var i = 0; i < maxSquares; i++) {
            rectangle.beginFill(buttonColor[i], 1);
            rectangle.drawRect(x + lengthOfButtons, y, Math.max(50, buttonWidth / len), buttonHeight);
            rectangle.endFill();
            container.addChild(rectangle);
            lengthOfButtons += Math.max(50, buttonWidth / len);
        }
        var colorIsChanged = false;
        var children = [];
        container.on('pointertap', function () {
            colorIsChanged = !colorIsChanged;
            lengthOfButtons = 0;
            var rect = new Graphics();
            for (var i = 0; i < maxSquares; i++) {
                var color = Math.floor(Math.random() * (16777215 + 1));
                if (colorIsChanged) {
                    rect.beginFill(color, 1);
                    rect.drawRect(x + lengthOfButtons, y, Math.max(50, buttonWidth / len), buttonHeight);
                    rect.endFill();
                    rect.zIndex = 0;
                    container.addChild(rect);
                    children.push(rect);
                    lengthOfButtons += Math.max(50, buttonWidth / len);
                }
                if (!colorIsChanged) {
                    container.removeChild(children[i]);
                    children = [];
                }
            }
        });
        container.on('mouseover', function () {
            container.filters = [
                new DropShadowFilter({
                    color: 0xffffff,
                    distance: 10,
                }),
            ];
            container.transform.scale.set(1.05, 1.05);
            container.mask = new Graphics()
                .beginFill(0xffffff)
                .drawRoundedRect(x * 2 + x * 0.05, y * 2 + y * 0.05, buttonWidth + buttonWidth * 0.05, buttonHeight + buttonHeight * 0.05, round)
                .endFill();
        });
        container.on('mouseleave', function () {
            container.filters = [];
            container.transform.scale.set(1, 1);
            container.mask = mask;
        });
        var text = new AddText().createText(title, fontFamily, fontSize, fill, container);
        text.position.set(x + buttonWidth / 2, y + buttonHeight / 2);
        // adding icon
        var sprite = new AddIcon().createIcon(img, container, buttonHeight);
        sprite.position.set(x + buttonWidth - (buttonHeight - 20) / 2 - square / 2, y + (buttonHeight - (buttonHeight - 20)) / 2);
        // returning ready to use button
        return container;
    };
    return Button;
}());
var AddText = /** @class */ (function () {
    function AddText() {
    }
    AddText.prototype.createText = function (title, fontFamily, fontSize, fill, container) {
        var text = new Text(title, {
            fontFamily: fontFamily,
            fontSize: fontSize,
            fill: fill,
        });
        container.addChild(text);
        text.zIndex = 1;
        text.anchor.set(0.5, 0.5);
        return text;
    };
    return AddText;
}());
var AddIcon = /** @class */ (function () {
    function AddIcon() {
    }
    AddIcon.prototype.createIcon = function (img, container, height) {
        var sprite = Sprite.from(img);
        sprite.zIndex = 1;
        sprite.height = height - 20;
        sprite.width = height - 20;
        container.addChild(sprite);
        return sprite;
    };
    return AddIcon;
}());
var dragTarget = null;
app.stage.interactive = true;
app.stage.hitArea = app.screen;
app.stage.on('pointerup', onDragEnd);
app.stage.on('pointerupoutside', onDragEnd);
function onDragMove(event) {
    if (dragTarget) {
        dragTarget.parent.toLocal(event.global, null, dragTarget.position);
    }
}
function onDragStart() {
    this.alpha = 0.5;
    dragTarget = this;
    app.stage.on('pointermove', onDragMove);
}
function onDragEnd() {
    if (dragTarget) {
        app.stage.off('pointermove', onDragMove);
        dragTarget.alpha = 1;
        dragTarget = null;
    }
}
var button = new Button();
app.stage.addChild(button.createButton(400, 80, [0xff4164, 0xff9f9f, 0xffd6b4, 0xcecead, 0x87b0a0], 100, 40, 20, './images/starbucks.png', 'starbucks', {
    fontFamily: 'Arial',
    fontSize: 42,
    fill: 0x000000,
}));
app.stage.addChild(button.createButton(400, 80, [0x8ab363, 0xffc410, 0xff8c67, 0xecdcc3, 0xf0efef], 100, 100, 20, './images/Instagram_logo_2016.svg.webp', 'instagram', {
    fontFamily: 'Arial',
    fontSize: 42,
    fill: 0x000000,
}));
app.stage.addChild(button.createButton(400, 80, [0x0e3558, 0x3970aa, 0x62abdd, 0x83d5ff, 0x93eff7], 100, 160, 20, './images/Twitter-logo.svg.png', 'twitter', {
    fontFamily: 'Arial',
    fontSize: 42,
    fill: 0x000000,
}));
app.stage.addChild(button.createButton(400, 80, [0xe6b59c, 0xfff7ce, 0xe6d8b5, 0xa5aba5, 0xc6ddcd], 100, 220, 20, './images/600px-Apple-logo.png', 'apple', {
    fontFamily: 'Arial',
    fontSize: 42,
    fill: 0x000000,
}));
function gradient(from, to) {
    var c = document.createElement('canvas');
    var ctx = c.getContext('2d');
    var grd = ctx.createLinearGradient(0, 0, 100, 100);
    grd.addColorStop(0, from);
    grd.addColorStop(1, to);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 100, 100);
    return new PIXI.Texture.from(c);
}
//# sourceMappingURL=index.js.map