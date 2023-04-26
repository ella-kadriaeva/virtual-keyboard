const block = document.querySelector(".page");
const Keyboard = {
    elements: {
        meta: null,
        textarea: null,
        title: '',
        main: null,
        keysContainer: null,
        keys: [],
    },
    eventHendlers: {
        oninput: null,
        onclose: null,
    },
    properties: {
        value: "",
        capsLock: false,
    },

    init() {
        // create main container
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        this.elements.meta = document.createElement("div");
        this.elements.textarea = document.createElement("textarea");
        this.elements.title = document.createElement("h1");
        // Create elements
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard__list");
        this.elements.textarea.classList.add("textarea");
        this.elements.title.classList.add("title");
        this.elements.title.innerHTML = "Virtual keyboard";
        this.elements.meta.classList.add("keyboard__meta");
        this.elements.meta.appendChild(this.elements.title);
        this.elements.meta.appendChild(this.elements.textarea);
        this.elements.keysContainer.appendChild(this._createKeys());
        // add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        block.append(this.elements.meta, this.elements.main);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
            "schift",  "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", "done",
            "ctrl", "win", "alt", "space","alt", "win", "left", "down", "right", "ctrl",
            // "", "", "", "", "", "",
        ];
        const createIconHtml = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`
        };
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const lineBreak = ["backspace", "delete", "enter", "done"].indexOf(key) !== -1;

            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__item");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__item_wide");
                    keyElement.innerHTML = createIconHtml("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    })
                    break;
                case "caps":
                    keyElement.classList.add("keyboard__item_wide", "keyboard__item_activatable");
                    keyElement.innerHTML = createIconHtml("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__item_active", this.properties.capsLock);
                    })
                    break;
                case "enter":
                    keyElement.classList.add("keyboard__item_wide");
                    keyElement.innerHTML = createIconHtml("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n"
                        this._triggerEvent("oninput");
                    })
                    break;
                case "space":
                    keyElement.classList.add("keyboard__item_extrawide");
                    keyElement.innerHTML = createIconHtml("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    })
                    break;
                case "tab":
                    keyElement.classList.add("keyboard__item_wide");
                    keyElement.innerHTML = createIconHtml("keyboard_tab");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "    ";
                        this._triggerEvent("oninput");
                    })
                    break;
                case "schift":
                    keyElement.classList.add("keyboard__item_wide", "keyboard__item_dark");
                    keyElement.innerHTML = createIconHtml("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    })
                    break;
                   case "done":
                    keyElement.classList.add("keyboard__item_wide", "keyboard__item_dark");
                    keyElement.innerHTML = createIconHtml("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    })
                    break;
                case "up":
                    keyElement.innerHTML = createIconHtml("keyboard_arrow_up");

                    // keyElement.addEventListener("click", () => {
                    //     this.close();
                    //     this._triggerEvent("onclose");
                    // })
                    break;
                case "left":
                    keyElement.innerHTML = createIconHtml("keyboard_arrow_left");

                    // keyElement.addEventListener("click", () => {
                    //     this.close();
                    //     this._triggerEvent("onclose");
                    // })
                    break;
                case "down":
                    keyElement.innerHTML = createIconHtml("keyboard_arrow_down");

                    // keyElement.addEventListener("click", () => {
                    //     this.close();
                    //     this._triggerEvent("onclose");
                    // })
                    break;
                case "right":
                    keyElement.innerHTML = createIconHtml("keyboard_arrow_right");

                    // keyElement.addEventListener("click", () => {
                    //     this.close();
                    //     this._triggerEvent("onclose");
                    // })
                    break;
                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    })
                    break;
            }
            fragment.appendChild(keyElement);
            if (lineBreak) {
                fragment.appendChild(document.createElement("br"));
            }

        });
        return fragment;
    },

    
};
window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});