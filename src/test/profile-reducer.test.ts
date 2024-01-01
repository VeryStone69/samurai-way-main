import {
    addPostAC,
    ProfileDataType,
    profileReducer,
    setStatusAC,
    setUserProfile,
    TasksStateType
} from "../redux/profile-reducer";
import {v1} from "uuid";


describe('profileReducer', () => {
    let startState: TasksStateType;

    beforeEach(() => {
        startState = {
            posts: [{id: v1(), message: "Hi, how are you", likesCount: 12},
                {id: v1(), message: "It's my second post", likesCount: 15},
                {id: v1(), message: "Number three", likesCount: 99},
                {id: v1(), message: "Yo4", likesCount: 1},
                {id: v1(), message: "Yo5", likesCount: 2},
                {id: v1(), message: "Yo6", likesCount: 3},],
            newPostsText: "Your text",
            profile: {
                aboutMe: "I live this life",
                contacts: {
                    facebook: "facebook.com",
                    website: "google.com",
                    vk: "vk.com",
                    twitter: "https://twitter.com/",
                    instagram: "instagra.com/",
                    youtube: null,
                    github: "github.com",
                    mainLink: null
                },
                lookingForAJob: true,
                lookingForAJobDescription: "I'm looking for a job for fun. Slavery is not offered.",
                fullName: "Name Namevich",
                userId: 29772,
                photos: {
                    small: "",
                    large: " "
                }
            },
            status: "status from store"

        };
    });

    test('new post should be added', () => {
        const newPost = "New post text";
        const action = addPostAC(newPost);
        const endState = profileReducer(startState, action);

        expect(endState.posts.length).toBe(startState.posts.length + 1);
        expect(endState.posts[0].message).toBe(newPost);
    });

    test('user profile should be set', () => {
        const newProfile: ProfileDataType = {
            aboutMe: "Test",
            contacts: {
                facebook: "facebook.com",
                website: "google.com",
                vk: "vk.com",
                twitter: "https://twitter.com/",
                instagram: "instagra.com/",
                youtube: null,
                github: "github.com",
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "Test",
            fullName: "Test Name",
            userId: 12345,
            photos: {
                small: "small-photo-url",
                large: "large-photo-url"
            }
        };
        const action = setUserProfile(newProfile);
        const endState = profileReducer(startState, action);

        expect(endState.profile).toEqual(newProfile);
    });


    test('status should be updated', () => {
        const newStatus = "New status";
        const action = setStatusAC(newStatus);
        const endState = profileReducer(startState, action);

        expect(endState.status).toBe(newStatus);
    });
});
