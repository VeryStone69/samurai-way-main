import {AuthDataType, authReducer, setUserDataAC} from "../redux/auth-reducer";


describe('authReducer', () => {
    let startState: AuthDataType;

    beforeEach(() => {
        startState = {
            data: {
                id: null,
                email: null,
                login: null
            },
            isAuth: false,
            captchaUrl:null
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
            isAuth: true,
            captchaUrl: null
        };

        const action = setUserDataAC(userData, true);
        const endState = authReducer(startState, action);

        expect(endState.isAuth).toBe(true);
        expect(endState.data.id).toBe(2);
        expect(endState.data.email).toBe("test@example.com");
        expect(endState.data.login).toBe("testUser");
    });
});
