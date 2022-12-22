import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    backgroundColor: 0x988ca2,
    width: 800,
    height: 800,
});

document.body.appendChild(app.view as HTMLCanvasElement);

type Font = {
    fontFamily: string;
    fontSize: number;
    fill: number;
};

class Button {
    createButton(
        buttonWidth = 100,
        buttonHeight = 60,
        buttonColor: number[],
        x: number,
        y: number,
        round: number,
        img: string,
        title: string,
        font: Font,
    ) {
        const container = new PIXI.Container();
        container.sortableChildren = true;
        container.interactive = true;
        container.cursor = "pointer";

        let lengthOfButtons = 0;
        const len = buttonColor.length;
        const square = buttonWidth / len;
        const { fontFamily, fontSize, fill } = font;
        const maxSquares = Math.floor(buttonWidth / Math.max(50, buttonWidth / len));

        container.on("pointerdown", onDragStart, container);

        container.x = x;
        container.y = y;

        if (buttonWidth < 100) {
            buttonWidth = 100;
        }

        if (buttonHeight < 60) {
            buttonHeight = 60;
        }

        const rectangle = new PIXI.Graphics();

        for (let i = 0; i < maxSquares; i++) {
            rectangle.beginFill(buttonColor[i], 1);

            rectangle.drawRect(x + lengthOfButtons, y, Math.max(50, buttonWidth / len), buttonHeight);
            rectangle.endFill();

            container.addChild(rectangle);

            lengthOfButtons += Math.max(50, buttonWidth / len);
        }

        let colorIsChanged = false;
        let children = [];

        container.on("pointertap", () => {
            colorIsChanged = !colorIsChanged;

            lengthOfButtons = 0;

            const rect = new PIXI.Graphics();

            for (let i = 0; i < maxSquares; i++) {
                const color = Math.floor(Math.random() * (16777215 + 1));

                if (colorIsChanged) {
                    rect.beginFill(color, 1);
                    rect.drawRect(x + lengthOfButtons, y, Math.max(50, buttonWidth / len), buttonHeight);
                    rect.endFill();
                    rect.zIndex = 0;

                    children.push(rect);

                    container.addChild(rect);

                    lengthOfButtons += Math.max(50, buttonWidth / len);
                }

                else {
                    container.removeChild(children[i]);
                    children = [];
                }
            }
        });

        const mask = new PIXI.Graphics()
            .beginFill(0xffffff)
            .drawRoundedRect(x, y, buttonWidth, buttonHeight, round)
            .endFill();

        container.mask = mask;

        container.addChild(mask);

        container.on("mouseover", () => {
            container.transform.scale.set(1.05, 1.05);
            container.transform.position.set(container.x + 0, container.y - 30);
        });

        container.on("mouseout", () => {
            container.transform.scale.set(1, 1);
            container.transform.position.set(container.x + 0, container.y + 30);
        });

        const text = new AddText().createText(title, fontFamily, fontSize, fill, container);

        text.position.set(x + buttonWidth / 2, y + buttonHeight / 2);

        // adding icon

        const sprite = AddIcon.createIcon(img, container, buttonHeight);

        sprite.position.set(
            x + buttonWidth - (buttonHeight - 20) / 2 - square / 2,
            y + (buttonHeight - (buttonHeight - 20)) / 2,
        ); 

        // returning ready to use button

        let dragTarget = null;

        app.stage.interactive = true;
        app.stage.hitArea = app.screen;
        app.stage.on("pointerup", onDragEnd);
        app.stage.on("pointerupoutside", onDragEnd);

        function onDragMove(event) {
            if (dragTarget) {
                dragTarget.x = event.data.global.x - x - buttonWidth / 2;
                dragTarget.y = event.data.global.y - y - buttonHeight / 2;
            }
        }

        function onDragStart() {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            dragTarget = this;
            app.stage.on("pointermove", onDragMove);
        }

        function onDragEnd() {
            if (dragTarget) {
                app.stage.off("pointermove", onDragMove);
                dragTarget = null;
            }
        }

        return container;
    }
}

class AddText {
    createText(title: string, fontFamily: string, fontSize: number, fill: number, container: PIXI.Container) {
        const text = new PIXI.Text(title, {
            fontFamily,
            fontSize,
            fill,
        });

        container.addChild(text);

        text.zIndex = 1;
        text.anchor.set(0.5, 0.5);

        return text;
    }
}

class AddIcon {
    static createIcon(img: string, container: PIXI.Container, height: number) {
        const sprite = new PIXI.Sprite(PIXI.Texture.from(img));

        sprite.zIndex = 1;
        sprite.height = height - 20;
        sprite.width = height - 20;

        container.addChild(sprite);

        return sprite;
    }
}

const button = new Button();

app.stage.addChild(
    button.createButton(
        400,
        80,
        [0xff4164, 0xff9f9f, 0xffd6b4, 0xcecead, 0x87b0a0],
        100,
        40,
        20,
        "./assets/starbucks.png",
        "starbucks",
        {
            fontFamily: "Arial",
            fontSize: 42,
            fill: 0x000000,
        },
    ),
);

app.stage.addChild(
    button.createButton(
        400,
        80,
        [0x8ab363, 0xffc410, 0xff8c67, 0xecdcc3, 0xf0efef],
        100,
        100,
        20,
        "./assets/Instagram_logo_2016.svg.webp",
        "instagram",
        {
            fontFamily: "Arial",
            fontSize: 42,
            fill: 0x000000,
        },
    ),
);

app.stage.addChild(
    button.createButton(
        400,
        80,
        [0x0e3558, 0x3970aa, 0x62abdd, 0x83d5ff, 0x93eff7],
        100,
        160,
        20,
        "./assets/Twitter-logo.svg.png",
        "twitter",
        {
            fontFamily: "Arial",
            fontSize: 42,
            fill: 0x000000,
        },
    ),
);

app.stage.addChild(
    button.createButton(
        400,
        80,
        [0xe6b59c, 0xfff7ce, 0xe6d8b5, 0xa5aba5, 0xc6ddcd],
        100,
        220,
        20,
        "./assets/600px-Apple-logo.png",
        "apple",
        {
            fontFamily: "Arial",
            fontSize: 42,
            fill: 0x000000,
        },
    ),
);
