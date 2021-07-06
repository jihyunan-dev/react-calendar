import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { firestore } from "../../shared/firebase";

const scheduleDB = firestore.collection("schedules");

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

// connect firebase
const loadCalendarFB = () => (dispatch, getState) => {
  const { current } = getState().date;
  const condition = parseInt(current.clone().format("YYYY"));
  console.log(condition);

  scheduleDB.get().then((docs) => {
    let schedules = [];
    docs.forEach((doc) => {
      if (doc.exists) {
        schedules = [...schedules, { ...doc.data(), id: doc.id }];
      }
    });
    dispatch(loadCalendar(schedules));
  });
};

const addCalendarFB = (schedule) => (dispatch, getState) => {
  // 정제해서 firebase에 저장
  scheduleDB
    .add({ ...schedule })
    .then((doc) => {
      const _schedule = { ...schedule, id: doc.id };
      dispatch(addCalendar(_schedule));
    })
    .catch((err) => console.log(err));
};

// initialState
const initialState = {
  scheduleList: [],
};

// reducer
export default handleActions(
  {
    [LOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.scheduleList = action.payload.schedules;
      }),
    [ADD]: (state, action) =>
      produce(state, (draft) => {
        draft.scheduleList.push(action.payload.schedule);
      }),
  },
  initialState
);

export const actionCreators = {
  loadCalendarFB,
  addCalendarFB,
};
