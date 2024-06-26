let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-butn");
let winnerMessage = document.getElementById("winnerMessage");

let display_X = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.innerText) {
            box.innerText = display_X ? "X" : "O";
            display_X = !display_X;
            box.disabled = true;
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let boxA = boxes[a].innerText;
        let boxB = boxes[b].innerText;
        let boxC = boxes[c].innerText;

        if (boxA && boxA === boxB && boxA === boxC) {
            winnerMessage.innerText = `The winner is ${boxA === "X" ? "Player 1" : "Player 2"}`;
            disableAllButtons();
            return;
        }
    }
    if (Array.from(boxes).every(box => box.innerText)) {
        winnerMessage.innerText = "It's a draw!";
    }
};

const disableAllButtons = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    display_X = true;
    winnerMessage.innerText = "";
});
