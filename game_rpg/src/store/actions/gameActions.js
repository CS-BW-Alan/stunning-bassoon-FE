import { axiosWithAuth } from "../axiosWithAuth";

export const GET_BOARD_START = "GET_BOARD_START";
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";

export const GAME_FAIL = "GAME_ERROR";


export const getGame = () => dispatch => {
  dispatch({ type: GET_BOARD_START });
  axiosWithAuth()
    .get(`/get_game`)
    .then(res => {
      dispatch({ type: GET_BOARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};