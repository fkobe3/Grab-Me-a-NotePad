const crypto = require('crypto');
const Note = require('../lib/Note');

test ('Make a note object', () => {
    const note = new Note (crypto.randomBytes(16).toString('hex'), 'Test', 'This is testing text. Testing, testing, 1 2 3.');

    expect (note.id).toEqual(expect.any(String));
    expect (note.title).toEqual(expect.any(String));
    expect (note.body).toEqual(expect.any(String));
});

test ('retrieve note objects id', () => {
    const note = new Note (crypto.randomBytes(16).toString('hex'), 'Test', 'This is testing text. Testing, testing, 1 2 3.');

    expect (note.getId()).toEqual(expect.any(String));
});

test ('retrieve note objects title', () => {
    const note = new Note (crypto.randomBytes(16).toString('hex'), 'Test', 'This is testing text. Testing, testing, 1 2 3.');

    expect (note.getTitle()).toEqual(expect.any(String));
});

test ('retrieve note objects body', () => {
    const note = new Note (crypto.randomBytes(16).toString('hex'), 'Test', 'This is testing text. Testing, testing, 1 2 3.');

    expect (note.getBody()).toEqual(expect.any(String));
});