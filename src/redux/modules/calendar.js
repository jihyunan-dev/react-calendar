import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// action type
const LOAD = "calendar/LOAD";
const ADD = "calendar/ADD";
// const CHECK = "calendar/CHECK";
// const EDIT = "calendar/EDIT";
// const DELETE = "calendar/DELETE";

// action creator
const loadCalendar = createAction(LOAD, (schedules) => ({ schedules }));
const addCalendar = createAction(ADD, (schedule) => ({ schedule }));
// const checkCalendar = createAction(CHECK, (id) => ({id}))
// const EditCalendar = createAction(EDIT, (new_schedule, id) => ({
//   new_schedule,
//   id,
// }));
// const deleteCalendar = createActions(DELETE, (id) => ({id}))

// initialState
const initialState = {
  list: [],
};

// reducer
export default handleActions(
  {
    [LOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.schedules);
      }),
    [ADD]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.schedule);
      }),
  },
  initialState
);

export const actionCreators = {
  loadCalendar,
  addCalendar,
};
