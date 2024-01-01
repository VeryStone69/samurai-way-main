import {
    followAC,
    setCurrentPageAC, setFetchingAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC,
    unFollowAC,
    UsersDataType,
    usersReducer
} from "../redux/users-reducer";


describe('usersReducer', () => {
    let startState: UsersDataType;

    beforeEach(() => {
        startState = {
            items: [
                {
                    id: 1,
                    name: "Dmitry",
                    uniqueUrlName: null,
                    photos: {
                        small: null,
                        large: null
                    },
                    status: "I am OK!",
                    followed: false,
                }
            ],
            totalCount: 0,
            error: null,
            pageSize: 10,
            totalUsersCount: 5,
            currentPage: 1,
            isFetching: false,
            followingInProgress: []
        };
    });

    test('follow should work correctly', () => {
        const userId = 1; // ID пользователя, которого нужно подписать
        const action = followAC(userId);
        const endState = usersReducer(startState, action);

        expect(endState.items.find(u => u.id === userId)?.followed).toBe(true);
    });

    test('unfollow should work correctly', () => {
        const userId = 1; // ID пользователя, которого нужно отписать
        const action = unFollowAC(userId);
        const endState = usersReducer(startState, action);

        expect(endState.items.find(u => u.id === userId)?.followed).toBe(false);
    });

    test('set users should work correctly', () => {
        const newUsers = {
            items: [
                {
                    id: 777,
                    name: "Test",
                    uniqueUrlName: null,
                    photos: {
                        small: null,
                        large: null
                    },
                    status: "I am Test",
                    followed: false,
                }
            ],
            totalCount: 666,
            error: null,
            pageSize: 10,
            totalUsersCount: 5,
            currentPage: 1,
            isFetching: false,
            followingInProgress: []
        };
        const action = setUsersAC(newUsers);
        const endState = usersReducer(startState, action);

        expect(endState.items).toEqual(newUsers.items);
        expect(endState.items[0].id).toEqual(777)
        expect(endState.items[0].name).toEqual("Test")
    });

    test('set current page should work correctly', () => {
        const newCurrentPage = 2;
        const action = setCurrentPageAC(newCurrentPage);
        const endState = usersReducer(startState, action);

        expect(endState.currentPage).toBe(newCurrentPage);
    });

    test('set total users count should work correctly', () => {
        const newTotalUsersCount = 100;
        const action = setTotalUsersCountAC(newTotalUsersCount);
        const endState = usersReducer(startState, action);

        expect(endState.totalUsersCount).toBe(newTotalUsersCount);
    });

    test('toggle fetching should work correctly', () => {
        const isFetching = true;
        const action = setFetchingAC(isFetching);
        const endState = usersReducer(startState, action);

        expect(endState.isFetching).toBe(isFetching);
    });

    test('toggle following progress should work correctly', () => {
        const userId = 1;
        const action = toggleFollowingProgressAC(true, userId);
        const endState = usersReducer(startState, action);

        expect(endState.followingInProgress).toContain(userId);
    });
});
