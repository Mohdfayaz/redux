// Mutable(Bad)
const state = { count: 0 };

// this will directly changes the original object
state.count = 1;

//Immutable(Good)
//nst state = { count: 0 };
//nsole.log(state);

// this will create a new object
const newState = { ...state, count: state.count + 1, name: "John" };
console.log(newState);
console.log(state);