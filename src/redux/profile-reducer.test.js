import { render, screen } from '@testing-library/react';

import profileReducer, { addPostActionCreator } from './profile-reducer';
// 1. start test data
let state = {
    posts: [
        { id: 1, message: 'Hi, how are you', likeCount: 2 },
        { id: 2, message: 'Its my first post!', likeCount: 3 },
    ]
}

test('new test length === 3', () => {

    let action = addPostActionCreator('new text')
    // 2. action
    let newState = profileReducer(state,action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('2 test text === Hi its new text', () => {

    let action = addPostActionCreator('Hi its new text')
    // 2. action
    let newState = profileReducer(state,action);
    
    // 3. expectation
    expect(newState.posts[2].message).toBe('Hi its new text');
});