import {appReducer, IniinitialStateAppType, initializedSuccess} from "../redux/app-reducer";

let startState: IniinitialStateAppType;

beforeEach(() => {
    startState = {
        initialized: false,
    };
});

test('app should be initialized', () => {
    const endState = appReducer(startState, initializedSuccess());

    expect(endState.initialized).toBe(true);
});
