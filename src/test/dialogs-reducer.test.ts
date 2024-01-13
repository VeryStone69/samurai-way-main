import {addNewMessageAC, DialogsPageType, dialogsReducer} from "../redux/diallogs-reducer";


describe('dialogsReducer', () => {
    let startState: DialogsPageType;

    beforeEach(() => {
        startState = {
            dialogs: [
                {id: '1', name: "Alex"},
                {id: '2', name: "Dima"},
            ],
            message: [
                {id: '1', message: "How are you?"},
                {id: '2', message: "Hi"},
            ],
        };
    });

    test('new message should be added', () => {
        const newMessageBody = "New message";
        const action = addNewMessageAC(newMessageBody);
        const endState = dialogsReducer(startState, action);

        expect(endState.message.length).toBe(startState.message.length + 1);
        expect(endState.message[endState.message.length - 1].message).toBe(newMessageBody);
        expect(endState.message[endState.message.length - 1].id).toBeDefined();
    });
});
