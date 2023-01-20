import { Friend } from './friend.class';

let friends: Friend[] = [
    new Friend('Ray    ', 67, 'ray@friends.com   ', true),
    new Friend('Chris  ', 47, 'chris@friends.com '),
    new Friend('Ellen  ', 54, 'ellen@friends.com '),
    new Friend('Cathy  ', 52, 'cathy@friends.com '),
    new Friend('Randy  ', 63, 'randy@friends.com ', true)
];

for(let friend of friends) {
    friend.display();
}