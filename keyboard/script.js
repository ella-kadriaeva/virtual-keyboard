const Keyboard = {
  elements: {
    block: null,
    meta: null,
    textarea: null,
    title: "",
    main: null,
    keysContainer: null,
    keys: [],
  },
  eventHendlers: {
    oninput: null,
    onbutton: null,
  },
  properties: {
    value: "",
    chars: [],
    capsLock: false,
    ctrl: false,
    alt: false,
    shift: false,
  },

  init() {
    // create main container
    this.elements.block = document.createElement("div");
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");
    this.elements.meta = document.createElement("div");
    this.elements.textarea = document.createElement("textarea");
    this.elements.title = document.createElement("h1");
    // Create elements
    this.elements.block.classList.add("page");
    this.elements.main.classList.add("keyboard");
    this.elements.keysContainer.classList.add("keyboard__list");
    this.elements.textarea.classList.add("textarea");
    this.elements.title.classList.add("title");
    this.elements.title.innerHTML = "Virtual keyboard";
    this.elements.meta.classList.add("keyboard__meta");
    this.elements.meta.appendChild(this.elements.title);
    this.elements.meta.appendChild(this.elements.textarea);
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__item");
    this.elements.ctrlLeft = this.elements.keysContainer.querySelector(".keyboard__item_ctrl-left");
    this.elements.ctrlRight = this.elements.keysContainer.querySelector(".keyboard__item_ctrl-right");
    this.elements.altLeft = this.elements.keysContainer.querySelector(".keyboard__item_alt-left");
    this.elements.altRight = this.elements.keysContainer.querySelector(".keyboard__item_alt-right");
    this.elements.shiftLeft = this.elements.keysContainer.querySelector(".shift-left");
    this.elements.shiftRight = this.elements.keysContainer.querySelector(".shift-right");
    // add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    this.elements.block.append(this.elements.meta, this.elements.main);
    document.body.append(this.elements.block);
  },

    _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
          "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
      "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "shift_left",  "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", "shift_right",
      "ctrl_left", "win", "alt_left", "space","alt_right", "win", "left", "down", "right", "ctrl_right",
    ];
      const createCharacter = (character_name) => {
          return `<span class="character-span">${character_name}</span>`;
    };
    const createIconHtml = (icon_name) => {
        return `<i class="material-icons">${icon_name}</i>`;
    };
    const createSpan = (span_name) => {
        return `<span class="button-span">${span_name}</span>`;
        };

    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const lineBreak = ["backspace", "\\", "enter", "shift_right"].indexOf(key) !== -1;
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__item");

        switch (key) {
    case "`":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("~") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "~");
                });
            break;

        case "1":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("!") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "!");
                });
                break;
        case "2":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("@") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "@");
                });
                break;
       case "3":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("#") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "!");
                });
                break;

           case "4":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("$") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "!");
                });
                break;

            case "5":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("%") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "%");
                });
                break;

        case "6":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("^") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "^");
                });
                break;
        case "7":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("&") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "&");
                });
                break;
       case "8":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("*") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "*");
                });
                break;
            
           case "9":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("(") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "(");
                });
                break;
                    case "0":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter(")") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, ")");
                });
                break;
       case "-":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("_") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "_");
                });
                break;
            
           case "=":
        keyElement.classList.add("keyboard__item_number");
        keyElement.innerHTML = createCharacter("+") + key;
                keyElement.addEventListener("click", () => {
                    this._createDoubleCharacters(keyElement, key, "+");
                });
                break;
        case "backspace":
          keyElement.classList.add("keyboard__item_wide", "keyboard__item_backspace");
          keyElement.innerHTML = createIconHtml("backspace");
                keyElement.addEventListener("click", () => {
                    this.properties.chars.pop();
                    this.elements.textarea.value = this.properties.chars.join("");
                    this.addActive(keyElement);
                });
          break;

        case "caps":
          keyElement.classList.add("keyboard__item_wide", "keyboard__item_caps");
          keyElement.innerHTML = createIconHtml("keyboard_capslock");
                keyElement.addEventListener("click", () => {
                    this.addActive(keyElement);
                    this._toggleCapsLock();
                });
          break;

        case "enter":
          keyElement.classList.add("keyboard__item_wide", "keyboard__item_enter");
          keyElement.innerHTML = createIconHtml("keyboard_return");
                keyElement.addEventListener("click", () => {
                    this.elements.textarea.value = this.properties.chars.join("");
                    this.elements.textarea.value += "\n";
                    this.addActive(keyElement);
                });
          break;

        case "space":
          keyElement.classList.add("keyboard__item_extrawide");
          keyElement.classList.add("space");
          keyElement.innerHTML = createIconHtml("space_bar");
              keyElement.addEventListener("click", () => {
                this.properties.chars.push(" ");
                this.elements.textarea.value = this.properties.chars.join("");
                this.addActive(keyElement);
              });
          break;

        case "tab":
          keyElement.classList.add("keyboard__item_wide", "keyboard__item_tab");
          keyElement.innerHTML = createIconHtml("keyboard_tab");
                keyElement.addEventListener("click", () => {
                    this.properties.chars.push("    ");
                    this.elements.textarea.value = this.properties.chars.join("");
                    this.addActive(keyElement);
                });
          break;

        case "shift_left":
          keyElement.classList.add("keyboard__item_wide");
                keyElement.classList.add("shift-left");
                keyElement.innerHTML = createSpan("Shift");
         keyElement.addEventListener("click", () => {
            if (this.elements.shiftRight.classList.contains("active")) {
                return;
             }
             this._toggleShift();
          this.elements.shiftLeft.classList.toggle("active");
          });
          break;

        case "shift_right":
          keyElement.classList.add("keyboard__item_wide");
          keyElement.classList.add("shift-right");
          keyElement.innerHTML = createSpan("Shift");
        keyElement.addEventListener("click", () => {
            this.properties.shift = !this.properties.shift;
            if (this.elements.shiftLeft.classList.contains("active")) {
                return;
            }
            this._toggleShift();
          this.elements.shiftRight.classList.toggle("active");
          });
          break;

        case "up":
          keyElement.innerHTML = createIconHtml("keyboard_arrow_up");
                keyElement.addEventListener("click", () => {
                    this.addActive(keyElement);
                });
        break;

        case "left":
          keyElement.innerHTML = createIconHtml("keyboard_arrow_left");
                keyElement.addEventListener("click", () => {
                    this.addActive(keyElement);
                });
          break;

        case "down":
          keyElement.innerHTML = createIconHtml("keyboard_arrow_down");
                keyElement.addEventListener("click", () => {
                    this.addActive(keyElement);
                });
          break;

        case "right":
          keyElement.innerHTML = createIconHtml("keyboard_arrow_right");
                keyElement.addEventListener("click", () => {
                    this.addActive(keyElement);
                });
            break;

        case "ctrl_left":
          keyElement.classList.add("keyboard__item_ctrl-left");
          keyElement.innerHTML = createSpan("Ctrl");
          keyElement.addEventListener("click", () => {
            this.properties.ctrl = !this.properties.ctrl;
            if (this.elements.ctrlRight.classList.contains("active")) {
                return;
            }
          this.elements.ctrlLeft.classList.toggle("active");
          });
          break;

        case "ctrl_right":
          keyElement.classList.add("keyboard__item_ctrl-right");
          keyElement.innerHTML = createSpan("Ctrl");
          keyElement.addEventListener("click", () => {
            this.properties.ctrl = !this.properties.ctrl;
            if (this.elements.ctrlLeft.classList.contains("active")) {
                return;
            }
          this.elements.ctrlRight.classList.toggle("active");
          });
          break;
        
            case "win":
          keyElement.classList.add("keyboard__item_win");
          keyElement.innerHTML = createSpan("Win");
          keyElement.addEventListener("click", () => {
          this.elements.ctrlRight.classList.toggle("active");
          });
          break;
                
         case "alt_left":
          keyElement.classList.add("keyboard__item_alt-left");
          keyElement.innerHTML = createSpan("Alt");
          keyElement.addEventListener("click", () => {
            this.properties.alt = !this.properties.alt;
            if (this.elements.altRight.classList.contains("active")) {
                return;
            }
          this.elements.altLeft.classList.toggle("active");
          });
          break;
        
        case "alt_right":
          keyElement.classList.add("keyboard__item_alt-right");
          keyElement.innerHTML = createSpan("Alt");
          keyElement.addEventListener("click", () => {
            this.properties.alt = !this.properties.alt;
            if (this.elements.altLeft.classList.contains("active")) {
                return;
            }
          this.elements.altRight.classList.toggle("active");
          });
          break;
            default:
          keyElement.textContent = key.toLowerCase();
          keyElement.addEventListener("click", () => {
            this.elements.textarea.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
              this.properties.chars = this.elements.textarea.value.split("");
              this.addActive(keyElement);
          });
          break;
      }

      fragment.append(keyElement);
      if (lineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });
    return fragment;
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        console.log("CapsLock toggled!");
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    _toggleShift() {
        this.properties.shift = !this.properties.shift;
        this.properties.capsLock = !this.properties.capsLock;
        for (const key of this.elements.keys) {
        if (key.childElementCount === 0) {
            key.textContent = this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
    _createDoubleCharacters(keyElement, key, character) {
        this.elements.textarea.value += this.properties.capsLock ? character : key;
        this.properties.chars = this.elements.textarea.value.split("");
        this.addActive(keyElement);
        },

    addActive(keyElement) {
        keyElement.classList.add("active");
        keyElement.classList.remove("active");
        keyElement.classList.add("remove");
        setTimeout(() => {
          keyElement.classList.remove("remove");
        }, 250);
     },

};
Keyboard.init();


const { keys, ctrlLeft, ctrlRight, shiftLeft, shiftRight  } = Keyboard.elements;
let spaceKey = document.querySelector(".space");
let caps = document.querySelector(".keyboard__item_caps");
let backspace = document.querySelector(".keyboard__item_backspace");
let enterKey = document.querySelector(".keyboard__item_enter");
let tabKey = document.querySelector(".keyboard__item_tab");


for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerText);
}

window.addEventListener("keydown", function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute("keyname") || e.key == keys[i].getAttribute("lowerCaseName")) {
            keys[i].classList.add("active");
        }
        if (e.code == "Space") {
            addActiveClass(spaceKey);
        }
        if (e.code == "ShiftLeft") {
            remove(shiftRight);
        }
        if (e.code == "ShiftRight") {
            remove(shiftLeft);
        }
        if (e.code == "CapsLock") {
            addActiveClass(caps);
        }
        if (e.code == "Backspace") {
            addActiveClass(backspace);
        }
        if (e.code == "Enter") {
            addActiveClass(enterKey);
        }
        if (e.code == "Tab") {
            addActiveClass(tabKey);
        }
        if (e.code == "ControlLeft") {
            addActiveClass(ctrlLeft);
        }
        if (e.code == "ControlRight") {
            addActiveClass(ctrlRight);
        }
  
    }
});
window.addEventListener("keyup", function (e) {

    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute("keyname") || e.key == keys[i].getAttribute("lowerCaseName")) {
            keys[i].classList.remove("active");
            keys[i].classList.add("remove");
            this.setTimeout(() => {
                keys[i].classList.remove("remove");
            }, 50);
        }

        if (e.code == "CapsLock" || e.code == "Space" || e.code == "Backspace" || e.code == "Enter" ||
            e.code == "Tab" || e.code == "ControlRight" || e.code == "ControlLeft") {
            remove(keys[i]);
        }

    }
});
const remove = (item) => {
    item.classList.remove("active");
    this.setTimeout(() => {
        item.classList.remove("remove");
    }, 50);
    return;
};

const addActiveClass = (item) => {
    item.classList.add("active");
};
document.onkeydown = function (e) {
 
    // console.log("code" + e.code);
    // console.log("key" + e.key);
    console.log(e.key);
  
    //  console.log(e);
};