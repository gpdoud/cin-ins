"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friend_class_1 = require("./friend.class");
let friends = [
    new friend_class_1.Friend('Ray    ', 67, 'ray@friends.com   ', true),
    new friend_class_1.Friend('Chris  ', 47, 'chris@friends.com '),
    new friend_class_1.Friend('Ellen  ', 54, 'ellen@friends.com '),
    new friend_class_1.Friend('Cathy  ', 52, 'cathy@friends.com '),
    new friend_class_1.Friend('Randy  ', 63, 'randy@friends.com ', true)
];
for (let friend of friends) {
    friend.display();
}
