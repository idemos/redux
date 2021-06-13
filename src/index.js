import store from "./store/store";
import * as actions from "./store/bugs";

// dato che usiamo reduxtoolkit dobbiamo passara un oggetto
// al createAction definito nello store/bug

//quando lo store cambia faccio un'azione
const unsubscribe = store.subscribe(() => {
  console.log('lo store è cambiato', store.getState());
});

store.dispatch(actions.bugAdded({description: 'prova bug 1'}));
store.dispatch(actions.bugAdded({description: 'prova bug 2'}));
store.dispatch(actions.bugAdded({description: 'prova bug 3'}));

store.dispatch(actions.bugResolved({id: 1}));
store.dispatch(actions.bugRemoved({id: 2}));
store.dispatch(actions.bugRemoved({id: 3}));

// blocca il subscribe 
// non notifica piu quando cambia la ui
// in questo caso lo store
unsubscribe();

console.log(store.getState().entities.bugs.list);