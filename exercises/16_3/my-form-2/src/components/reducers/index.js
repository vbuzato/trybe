const INITIAL_STATE = {
  name: "",
  email: "",
  cpf: "",
  address: "",
  city: "",
  state: "",
  resume: "",
  hole: "",
  jobdescription: "",
};

function addToState(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_ELEMENT') {
      return {
        ...state,
        [action.name]: action.value,
      };
  };
  if (action.type === 'DELETE_ALL') {
    return { ...INITIAL_STATE };
};
  return state;
}

export default addToState;