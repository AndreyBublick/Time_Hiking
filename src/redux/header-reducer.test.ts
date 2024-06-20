import headerReducer, { HeaderACs } from "./header-reducer";


const state = {
    isActive: false,
    textSearthContent: '',
    isDarkTheme: false,
};

it('test toggleActiveModeAC and his Output in State', () => {
    expect(state.isActive).toBe(false);
    const AC = HeaderACs.toggleActiveModeAC(true);
    const newState = headerReducer(state, AC);
    expect(newState.isActive).toBe(true);
});


it('test setTextSearthContentAC and his Output in State', () => {
    expect(state.textSearthContent).toBe('');
    const action = HeaderACs.setTextSearthContentAC('lorem');
    const newState = headerReducer(state, action);
    expect(newState.textSearthContent).toBe('lorem');
});



it('test setDarkThemeAC and his Output in State', () => {
    expect(state.isDarkTheme).toBe(false);
    const action = HeaderACs.setDarkThemeAC(true);
    const newState = headerReducer(state, action);
    expect(newState.isDarkTheme).toBe(true);
});