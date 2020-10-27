export const addData = (name, value) => ({ type: 'ADD_ELEMENT', name, value });

export const stateClean = () => ({ type: 'DELETE_ALL' });