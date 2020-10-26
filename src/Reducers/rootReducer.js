import { combineReducers } from "redux";
import { dataReducer, isDataFetched, sortedData } from "./dataReducers";
import { bookmarkReducer } from "./bookmarkReducer";
import { paginationReducer } from "./paginationReducers";
import {searchkeyReducer} from "./searchkeyreducer"
import {alertReducer} from "./alertReducer"

export default combineReducers({
  pokemonList: dataReducer,
  isDataFetched: isDataFetched,
  bookmarks: bookmarkReducer,
  currentPagination: paginationReducer,
  sortedData: sortedData,
  searchKey: searchkeyReducer,
  alert: alertReducer
});
