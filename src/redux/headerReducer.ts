const initialStateHeader = {
  menuIsShow: false,
};

export const headerReducer = (
  // eslint-disable-next-line default-param-last
  state = initialStateHeader,
  action: ActionHeaderReducerType,
): InitialStateHeaderType => {
  switch (action.type) {
    case 'HEADER/SHOW_MENU':
      return {
        ...state,
        menuIsShow: action.payload,
      };
    default:
      return state;
  }
};

// action
export const showMenuHandler = (payload: boolean) =>
  ({ type: 'HEADER/SHOW_MENU', payload } as const);

// type
export type ActionHeaderReducerType = ReturnType<typeof showMenuHandler>;
export type InitialStateHeaderType = typeof initialStateHeader;
