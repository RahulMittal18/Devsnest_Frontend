const openFormReducer = (state = false, action) => {
  if (action.type === "OPEN_FORM") {
    return !state;
  }
  return state;
};

export default openFormReducer;
