import * as types from "../types";
import { ORGANIZATION } from "../../../constants";
import { Qiwii } from "../../../utils/Api";
import qs from "qs";

const setDataHealthCare = (data) => ({
  type: types.SET_DATA_HEALTHCARE,
  payload: data,
});

const setDataMoreHealthCare = (data) => ({
  type: types.SET_DATA_MORE_HEALTHCARE,
  payload: data,
});

export function fetchHealthCare(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            if (Number(response.data.current_page) === 1) {
              dispatch(setDataHealthCare(response.data));
              resolve(response.data);
            } else {
              dispatch(setDataMoreHealthCare(response.data));
              resolve(response.data);
            }
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDataOrganization = (data) => ({
  type: types.SET_DATA_ORGANIZATION,
  payload: data,
});

const setDataMoreOrganization = (data) => ({
  type: types.SET_DATA_MORE_ORGANIZATION,
  payload: data,
});

export function fetchOrganization(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            if (Number(response.data.current_page) === 1) {
              dispatch(setDataOrganization(response.data));
              resolve(response.data);
            } else {
              dispatch(setDataMoreOrganization(response.data));
              resolve(response.data);
            }
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDataFinance = (data) => ({
  type: types.SET_DATA_FINANCE,
  payload: data,
});

export function fetchFinance(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            dispatch(setDataFinance(response.data));
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDataSalon = (data) => ({
  type: types.SET_DATA_SALON,
  payload: data,
});

export function fetchSalon(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            dispatch(setDataSalon(response.data));
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDataServices = (data) => ({
  type: types.SET_DATA_SERVICES,
  payload: data,
});

export function fetchServices(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            dispatch(setDataServices(response.data));
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDataEntertainment = (data) => ({
  type: types.SET_DATA_ENTERTAINMENT,
  payload: data,
});

export function fetchEntertainment(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            dispatch(setDataEntertainment(response.data));
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDataMovies = (data) => ({
  type: types.SET_DATA_MOVIES,
  payload: data,
});

export function fetchMovies(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            dispatch(setDataMovies(response.data));
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDataPhotos = (data) => ({
  type: types.SET_DATA_PHOTOS,
  payload: data,
});

export function fetchPhotos(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            dispatch(setDataPhotos(response.data));
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDataEvents = (data) => ({
  type: types.SET_DATA_EVENTS,
  payload: data,
});

export function fetchEvents(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Qiwii.get(ORGANIZATION + qs.stringify(payload))
        .then((response) => {
          if (response.status === 200) {
            dispatch(setDataEvents(response.data));
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
