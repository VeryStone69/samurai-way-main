import {AuthDataType, authReducer, setUserDataAC} from "../redux/auth-reducer";


describe('authReducer', () => {
    let startState: AuthDataType;

    beforeEach(() => {
        startState = {
            resultCode: 0,
            messages: [],
            data: {
                id: null,
                email: null,
                login: null
            },
            isFetching: true,
            isAuth: false
        };
    });

    test('user authentication should be set correctly', () => {
        const userData = {
            resultCode: 0,
            messages: [],
            data: {
                id: 2,
                email: "test@example.com",
                login: "testUser"
            },
            isFetching: false,
            isAuth: true
        };

        const action = setUserDataAC(userData, true);
        const endState = authReducer(startState, action);

        expect(endState.isAuth).toBe(true);
        expect(endState.data.id).toBe(2);
        expect(endState.data.email).toBe("test@example.com");
        expect(endState.data.login).toBe("testUser");
    });
});
