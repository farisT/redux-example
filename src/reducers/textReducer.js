
export default (state = {}, action) => {
    switch (action.type) {
     case 'TEXT_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }