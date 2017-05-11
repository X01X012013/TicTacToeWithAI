/**
 * Algorithm for Tic Tac Toe.
 * It is currently unbeatable.
 * @function
 * @param {Array.<number>} board - gameBoard, it can be passed in by reference, this function will not change it.
 * @return {number} The best move.
 */
const algorithm = function (board) {
    //Internal function, compares two arrays, assumes that arguments have the same length
    const ac = function (a, b) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    };
    //A temporary copy of original game board for manipulation
    let t;
    //=====Self last move=====
    //Initialization
    t = board.slice();
    for (let i = 0; i < t.length; i++) {
        if (t[i] === 1) { t[i] = -1; }
        if (t[i] === 2) { t[i] = 1; }
    }
    //Horizontal
    if ((t[0] + t[1] + t[2]) === 2) {
        if (t[0] === 0) { return 0; }
        if (t[1] === 0) { return 1; }
        if (t[2] === 0) { return 2; }
    }
    if ((t[3] + t[4] + t[5]) === 2) {
        if (t[3] === 0) { return 3; }
        if (t[4] === 0) { return 4; }
        if (t[5] === 0) { return 5; }
    }
    if ((t[6] + t[7] + t[8]) === 2) {
        if (t[6] === 0) { return 6; }
        if (t[7] === 0) { return 7; }
        if (t[8] === 0) { return 8; }
    }
    //Vertical
    if ((t[0] + t[3] + t[6]) === 2) {
        if (t[0] === 0) { return 0; }
        if (t[3] === 0) { return 3; }
        if (t[6] === 0) { return 6; }
    }
    if ((t[1] + t[4] + t[7]) === 2) {
        if (t[1] === 0) { return 1; }
        if (t[4] === 0) { return 4; }
        if (t[7] === 0) { return 7; }
    }
    if ((t[2] + t[5] + t[8]) === 2) {
        if (t[2] === 0) { return 2; }
        if (t[5] === 0) { return 5; }
        if (t[8] === 0) { return 8; }
    }
    //Diagonal
    if ((t[0] + t[4] + t[8]) === 2) {
        if (t[0] === 0) { return 0; }
        if (t[4] === 0) { return 4; }
        if (t[8] === 0) { return 8; }
    }
    if ((t[2] + t[4] + t[6]) === 2) {
        if (t[2] === 0) { return 2; }
        if (t[4] === 0) { return 4; }
        if (t[6] === 0) { return 6; }
    }
    //=====Block adversary last move=====
    //Initialization
    t = board.slice();
    for (let i = 0; i < t.length; i++) {
        if (t[i] === 2) { t[i] = -1; }
    }
    //Horizontal
    if ((t[0] + t[1] + t[2]) === 2) {
        if (t[0] === 0) { return 0; }
        if (t[1] === 0) { return 1; }
        if (t[2] === 0) { return 2; }
    }
    if ((t[3] + t[4] + t[5]) === 2) {
        if (t[3] === 0) { return 3; }
        if (t[4] === 0) { return 4; }
        if (t[5] === 0) { return 5; }
    }
    if ((t[6] + t[7] + t[8]) === 2) {
        if (t[6] === 0) { return 6; }
        if (t[7] === 0) { return 7; }
        if (t[8] === 0) { return 8; }
    }
    //Vertical
    if ((t[0] + t[3] + t[6]) === 2) {
        if (t[0] === 0) { return 0; }
        if (t[3] === 0) { return 3; }
        if (t[6] === 0) { return 6; }
    }
    if ((t[1] + t[4] + t[7]) === 2) {
        if (t[1] === 0) { return 1; }
        if (t[4] === 0) { return 4; }
        if (t[7] === 0) { return 7; }
    }
    if ((t[2] + t[5] + t[8]) === 2) {
        if (t[2] === 0) { return 2; }
        if (t[5] === 0) { return 5; }
        if (t[8] === 0) { return 8; }
    }
    //Diagonal
    if ((t[0] + t[4] + t[8]) === 2) {
        if (t[0] === 0) { return 0; }
        if (t[4] === 0) { return 4; }
        if (t[8] === 0) { return 8; }
    }
    if ((t[2] + t[4] + t[6]) === 2) {
        if (t[2] === 0) { return 2; }
        if (t[4] === 0) { return 4; }
        if (t[6] === 0) { return 6; }
    }
    //=====Self double last move=====
    //Initialization
    t = board.slice();
    //Left up
    if (t[0] === t[4] && t[4] === 2) {
        if (t[1] === t[2] && t[2] === t[7] && t[7] === 0) { return 1; }
        if (t[1] === t[2] && t[2] === t[6] && t[6] === 0) { return 2; }
        if (t[3] === t[5] && t[5] === t[6] && t[6] === 0) { return 3; }
        if (t[2] === t[3] && t[3] === t[6] && t[6] === 0) { return 6; }
    }
    if (t[1] === t[3] && t[3] === 2) {
        if (t[0] === t[2] && t[2] === t[6] && t[6] === 0) { return 0; }
        if (t[4] === t[5] && t[5] === t[7] && t[7] === 0) { return 4; }
    }
    //Right up
    if (t[2] === t[4] && t[4] === 2) {
        if (t[0] === t[1] && t[1] === t[7] && t[7] === 0) { return 1; }
        if (t[0] === t[1] && t[1] === t[8] && t[8] === 0) { return 0; }
        if (t[3] === t[5] && t[5] === t[8] && t[8] === 0) { return 5; }
        if (t[0] === t[5] && t[5] === t[8] && t[8] === 0) { return 8; }
    }
    if (t[1] === t[5] && t[5] === 2) {
        if (t[0] === t[2] && t[2] === t[8] && t[8] === 0) { return 2; }
        if (t[3] === t[4] && t[4] === t[7] && t[7] === 0) { return 4; }
    }
    //Left down
    if (t[4] === t[6] && t[6] === 2) {
        if (t[0] === t[3] && t[3] === t[5] && t[5] === 0) { return 3; }
        if (t[0] === t[3] && t[3] === t[8] && t[8] === 0) { return 0; }
        if (t[1] === t[7] && t[7] === t[8] && t[8] === 0) { return 7; }
        if (t[0] === t[7] && t[7] === t[8] && t[8] === 0) { return 8; }
    }
    if (t[3] === t[7] && t[7] === 2) {
        if (t[0] === t[6] && t[6] === t[8] && t[8] === 0) { return 6; }
        if (t[1] === t[4] && t[4] === t[5] && t[5] === 0) { return 4; }
    }
    //Right down
    if (t[4] === t[8] && t[8] === 2) {
        if (t[1] === t[6] && t[6] === t[7] && t[7] === 0) { return 7; }
        if (t[2] === t[6] && t[6] === t[7] && t[7] === 0) { return 6; }
        if (t[2] === t[3] && t[3] === t[5] && t[5] === 0) { return 5; }
        if (t[2] === t[6] && t[6] === t[5] && t[5] === 0) { return 2; }
    }
    if (t[5] === t[7] && t[7] === 2) {
        if (t[2] === t[6] && t[6] === t[8] && t[8] === 0) { return 6; }
        if (t[1] === t[3] && t[3] === t[4] && t[4] === 0) { return 4; }
    }
    //=====Special cases=====
    //Initialization
    t = board.slice();
    //1
    if (ac(t, [2, 0, 0, 0, 1, 0, 0, 0, 1])) { return 2; }
    //=====Block adversary double last move=====
    //Initialization
    t = board.slice();
    //Hocky stick
    if (t[4] === 2) {
        if (t[0] === 1) {
            if (t[5] === 1 && t[2] === 0) { return 2; }
            if (t[7] === 1 && t[6] === 0) { return 6; }
        }
        if (t[2] === 1) {
            if (t[3] === 1 && t[0] === 0) { return 0; }
            if (t[7] === 1 && t[8] === 0) { return 8; }
        }
        if (t[6] === 1) {
            if (t[1] === 1 && t[0] === 0) { return 0; }
            if (t[5] === 1 && t[8] === 0) { return 8; }
        }
        if (t[8] === 1) {
            if (t[1] === 1 && t[2] === 0) { return 2; }
            if (t[3] === 1 && t[6] === 0) { return 6; }
        }
    }
    //Left up
    if (t[0] === t[4] && t[4] === 1) {
        if (t[1] === t[2] && t[2] === t[7] && t[7] === 0) { return 1; }
        if (t[1] === t[2] && t[2] === t[6] && t[6] === 0) { return 2; }
        if (t[3] === t[5] && t[5] === t[6] && t[6] === 0) { return 3; }
        if (t[2] === t[3] && t[3] === t[6] && t[6] === 0) { return 6; }
    }
    if (t[1] === t[3] && t[3] === 1) {
        if (t[0] === t[2] && t[2] === t[6] && t[6] === 0) { return 0; }
        if (t[4] === t[5] && t[5] === t[7] && t[7] === 0) { return 4; }
    }
    //Right up
    if (t[2] === t[4] && t[4] === 1) {
        if (t[0] === t[1] && t[1] === t[7] && t[7] === 0) { return 1; }
        if (t[0] === t[1] && t[1] === t[8] && t[8] === 0) { return 0; }
        if (t[3] === t[5] && t[5] === t[8] && t[8] === 0) { return 5; }
        if (t[0] === t[5] && t[5] === t[8] && t[8] === 0) { return 8; }
    }
    if (t[1] === t[5] && t[5] === 1) {
        if (t[0] === t[2] && t[2] === t[8] && t[8] === 0) { return 2; }
        if (t[3] === t[4] && t[4] === t[7] && t[7] === 0) { return 4; }
    }
    //Left down
    if (t[4] === t[6] && t[6] === 1) {
        if (t[0] === t[3] && t[3] === t[5] && t[5] === 0) { return 3; }
        if (t[0] === t[3] && t[3] === t[8] && t[8] === 0) { return 0; }
        if (t[1] === t[7] && t[7] === t[8] && t[8] === 0) { return 7; }
        if (t[0] === t[7] && t[7] === t[8] && t[8] === 0) { return 8; }
    }
    if (t[3] === t[7] && t[7] === 1) {
        if (t[0] === t[6] && t[6] === t[8] && t[8] === 0) { return 6; }
        if (t[1] === t[4] && t[4] === t[5] && t[5] === 0) { return 4; }
    }
    //Right down
    if (t[4] === t[8] && t[8] === 1) {
        if (t[1] === t[6] && t[6] === t[7] && t[7] === 0) { return 7; }
        if (t[2] === t[6] && t[6] === t[7] && t[7] === 0) { return 6; }
        if (t[2] === t[3] && t[3] === t[5] && t[5] === 0) { return 5; }
        if (t[2] === t[6] && t[6] === t[5] && t[5] === 0) { return 2; }
    }
    if (t[5] === t[7] && t[7] === 1) {
        if (t[2] === t[6] && t[6] === t[8] && t[8] === 0) { return 6; }
        if (t[1] === t[3] && t[3] === t[4] && t[4] === 0) { return 4; }
    }
    //=====Block adversary double=====
    t = board.slice();
    if (t[4] === 1) {
        if (t[0] === 0) { return 0; }
        if (t[2] === 0) { return 2; }
        if (t[6] === 0) { return 6; }
        if (t[8] === 0) { return 8; }
    }
    //=====Self double=====
    //Initialization
    t = board.slice();
    //Left up
    if ((t[1] === t[2] && t[2] === t[7] && t[7] === 0) ||
       (t[1] === t[2] && t[2] === t[6] && t[6] === 0) ||
       (t[3] === t[5] && t[5] === t[6] && t[6] === 0) ||
       (t[2] === t[3] && t[3] === t[6] && t[6] === 0)) {
        if (t[0] === 2 && t[4] === 0) { return 4; }
        if (t[4] === 2 && t[0] === 0) { return 0; }
    }
    if ((t[0] === t[2] && t[2] === t[6] && t[6] === 0) ||
       (t[4] === t[5] && t[5] === t[7] && t[7] === 0)) {
        if (t[1] === 2 && t[3] === 0) { return 3; }
        if (t[3] === 2 && t[1] === 0) { return 1; }
    }
    //Right up
    if ((t[0] === t[1] && t[1] === t[7] && t[7] === 0) ||
       (t[0] === t[1] && t[1] === t[8] && t[8] === 0) ||
       (t[3] === t[5] && t[5] === t[8] && t[8] === 0) ||
       (t[0] === t[5] && t[5] === t[8] && t[8] === 0)) {
        if (t[2] === 2 && t[4] === 0) { return 4; }
        if (t[4] === 2 && t[2] === 0) { return 2; }
    }
    if ((t[0] === t[2] && t[2] === t[8] && t[8] === 0) ||
       (t[3] === t[4] && t[4] === t[7] && t[7] === 0)) {
        if (t[1] === 2 && t[5] === 0) { return 5; }
        if (t[5] === 2 && t[1] === 0) { return 1; }
    }
    //Left down
    if ((t[0] === t[3] && t[3] === t[5] && t[5] === 0) ||
       (t[0] === t[3] && t[3] === t[8] && t[8] === 0) ||
       (t[1] === t[7] && t[7] === t[8] && t[8] === 0) ||
       (t[0] === t[7] && t[7] === t[8] && t[8] === 0)) {
        if (t[4] === 2 && t[6] === 0) { return 6; }
        if (t[6] === 2 && t[4] === 0) { return 4; }
    }
    if ((t[0] === t[6] && t[6] === t[8] && t[8] === 0) ||
       (t[1] === t[4] && t[4] === t[5] && t[5] === 0)) {
        if (t[3] === 2 && t[7] === 0) { return 7; }
        if (t[7] === 2 && t[3] === 0) { return 3; }
    }
    //Right down
    if ((t[1] === t[6] && t[6] === t[7] && t[7] === 0) ||
       (t[2] === t[6] && t[6] === t[7] && t[7] === 0) ||
       (t[2] === t[3] && t[3] === t[5] && t[5] === 0) ||
       (t[2] === t[6] && t[6] === t[5] && t[5] === 0)) {
        if (t[4] === 2 && t[8] === 0) { return 8; }
        if (t[8] === 2 && t[4] === 0) { return 4; }
    }
    if ((t[2] === t[6] && t[6] === t[8] && t[8] === 0) ||
       (t[1] === t[3] && t[3] === t[4] && t[4] === 0)) {
        if (t[5] === 2 && t[7] === 0) { return 7; }
        if (t[7] === 2 && t[5] === 0) { return 5; }
    }
    //=====Self line=====
    //Initialization
    t = board.slice();
    for (let i = 0; i < t.length; i++) {
        if (t[i] === 1) { t[i] = -1; }
        if (t[i] === 2) { t[i] = 1; }
    }
    //Horizontal
    if ((t[0] + t[1] + t[2]) === 1) {
        if (t[0] === 0) { return 0; }
        if (t[1] === 0) { return 1; }
        if (t[2] === 0) { return 2; }
    }
    if ((t[3] + t[4] + t[5]) === 1) {
        if (t[3] === 0) { return 3; }
        if (t[4] === 0) { return 4; }
        if (t[5] === 0) { return 5; }
    }
    if ((t[6] + t[7] + t[8]) === 1) {
        if (t[6] === 0) { return 6; }
        if (t[7] === 0) { return 7; }
        if (t[8] === 0) { return 8; }
    }
    //Vertical
    if ((t[0] + t[3] + t[6]) === 1) {
        if (t[0] === 0) { return 0; }
        if (t[3] === 0) { return 3; }
        if (t[6] === 0) { return 6; }
    }
    if ((t[1] + t[4] + t[7]) === 1) {
        if (t[1] === 0) { return 1; }
        if (t[4] === 0) { return 4; }
        if (t[7] === 0) { return 7; }
    }
    if ((t[2] + t[5] + t[8]) === 1) {
        if (t[2] === 0) { return 2; }
        if (t[5] === 0) { return 5; }
        if (t[8] === 0) { return 8; }
    }
    //Diagonal
    if ((t[0] + t[4] + t[8]) === 1) {
        if (t[0] === 0) { return 0; }
        if (t[4] === 0) { return 4; }
        if (t[8] === 0) { return 8; }
    }
    if ((t[2] + t[4] + t[6]) === 1) {
        if (t[2] === 0) { return 2; }
        if (t[4] === 0) { return 4; }
        if (t[6] === 0) { return 6; }
    }
    //=====Generic moves=====
    //Initialization
    t = board.slice();
    //Take centre first
    if (t[4] === 0) { return 4; }
    //Take line centre first
    if (t[1] === 0) { return 1; }
    if (t[3] === 0) { return 3; }
    if (t[5] === 0) { return 5; }
    if (t[7] === 0) { return 7; }
    //Take the rest
    if (t[0] === 0) { return 0; }
    if (t[2] === 0) { return 2; }
    if (t[6] === 0) { return 6; }
    if (t[8] === 0) { return 8; }
};
