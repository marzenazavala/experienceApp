// const initState = {
//     projects: [
//         {id: '1', title: 'some title', content: 'doing something together and have fun', duration: '2 hours', price: '30$'},
//         {id: '2', title: 'second title', content: 'doing something outside and jump a lot', duration: '1.5 hours', price: '40$'},
//         {id: '3', title: 'third title', content: 'doing something different and be happy', duration: '3 hours', price: '50$'}
//     ]
// };

const projectReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.error);
      return state;
    default: 
      return state;
  }
};

export default projectReducer;