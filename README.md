## React-Redux-Example

This is a simple example of Redux use in React CRA.

### Reference

For some context on Redux and adding it to existing projects or simply how it works   [refer to my article I wrote on Medium](https://github.com/your/project/tags).

### Installation

Run:

```
npm install
```

Then:
```
npm start
```

### How to

These are the key parts of this example:

##### Store

The store is where the state is stored as well as the reducers. When actions are triggered they are handled by the reducer which mutates the intialState. This initial state can be set to default or given default values. Furthermore, any middleware has to be loaded into the store as well for example thunk which allows for async actions.

##### Actions

Actions carry something out, and send payloads of information to the reducer in order for it to be processed into the state. Note, the action contains that data that will hopefully mutate the state however it does not change it without going through the reducer first.

```
export const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
   }
```


##### Reducers

Reducers listen for specific actions that have been carried out and decide how the different payloads of data are handled. So in this example when the TEXT_ACTION is carried out and send a payload of data, the TEXT_REDUCER handles the actions payload and decides how its placed into the state.

```

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
```

#### Notes:

- Read inline comments because they will give an indication of what everything is responsible for.
- The logic is there however to have it on a bigger scale possible refactoring is needed

