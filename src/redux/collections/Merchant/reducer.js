import createReducer from "../../../utils/createReducer";
import * as types from "../types";

const initialState = {
  data: [],
  page: 0,
  total: 10,
};

export const dataHealthCare = createReducer(initialState, {
  [types.SET_DATA_HEALTHCARE](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
  [types.SET_DATA_MORE_HEALTHCARE](state, action) {
    return {
      data: state.data.concat(action.payload.data),
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});

export const dataOrganization = createReducer(initialState, {
  [types.SET_DATA_ORGANIZATION](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
  [types.SET_DATA_MORE_ORGANIZATION](state, action) {
    return {
      data: state.data.concat(action.payload.data),
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});

export const dataFinance = createReducer(initialState, {
  [types.SET_DATA_FINANCE](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});

export const dataSalon = createReducer(initialState, {
  [types.SET_DATA_SALON](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});

export const dataServices = createReducer(initialState, {
  [types.SET_DATA_SERVICES](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});

export const dataEntertainment = createReducer(initialState, {
  [types.SET_DATA_ENTERTAINMENT](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});

export const dataPhotos = createReducer(initialState, {
  [types.SET_DATA_PHOTOS](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});

export const dataMovies = createReducer(initialState, {
  [types.SET_DATA_MOVIES](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});

export const dataEvents = createReducer(initialState, {
  [types.SET_DATA_EVENTS](state, action) {
    return {
      data: action.payload.data,
      page: action.payload.current_page,
      total: action.payload.total_page,
    };
  },
});
