import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


it('new post should be added', () => {

    let action = deletePost(1)


    let state = {
        posts: [
            {
                id: 1,
                name: 'Andrey Popkamp3',
                likescount: 12,
                text: 'Bla lba lba!',
                avatar: 'https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif'
            },
            {
                id: 2,
                name: 'Masha Popka',
                likescount: 2,
                text: 'Da poebat!',
                avatar: 'https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif'
            },
            {
                id: 3,
                name: 'Rubak Lobak',
                likescount: 32,
                text: 'Tu suka , ya suka',
                avatar: 'https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif'
            }
        ]
    }




    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
});


