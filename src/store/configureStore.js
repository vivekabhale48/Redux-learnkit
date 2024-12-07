import { legacy_createStore as createStore} from 'redux'
import {reducer} from './task1'

const store = createStore(reducer);

export default store;