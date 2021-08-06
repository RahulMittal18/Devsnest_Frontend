const initialState = {
  name: "",
  email: "",
};

const userFormReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "updateName":
      return {
        ...state,
        name: action.payload,
      };
    case "updateEmail":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userFormReducer;
