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
  scheduleList: {
    2021: [
      {
        id: 0,
        is_completed: false,
        is_important: false,
        title: "오늘 마감",
        date: 20210730,
        memo: "반드시 제출!",
        color: "red",
        query: 2021,
      },
      {
        id: 1,
        is_completed: false,
        is_important: false,
        title: "오늘 마감",
        date: 20210708,
        memo: "반드시 제출!",
        color: "red",
        query: 2021,
      },
      {
        id: 2,
        is_completed: false,
        is_important: false,
        title: "또 되나요?!",
        date: 20210708,
        memo: "반드시 제출!",
        color: "red",
        query: 2021,
      },
      {
        id: 3,
        is_completed: false,
        is_important: false,
        title: "어린이날!!",
        date: 20210505,
        memo: "반드시 제출!",
        color: "red",
        query: 2021,
      },
      {
        id: 4,
        is_completed: false,
        is_important: false,
        title: "삼일절입니다",
        date: 20210301,
        memo: "삼일절",
        color: "red",
        query: 2021,
      },
      {
        id: 5,
        is_completed: false,
        is_important: false,
        title: "새해가 밝음!",
        date: 20210101,
        memo: "반드시 제출!",
        color: "green",
        query: 2021,
      },
    ],
    2020: [
      {
        id: 0,
        is_completed: false,
        is_important: false,
        title: "오늘 마감",
        date: 20200707,
        memo: "반드시 제출!",
        color: "red",
        query: 2020,
      },
    ],
  },
};

// reducer
export default handleActions(
  {
    [LOAD]: (state, action) => produce(state, (draft) => {}),
    [ADD]: (state, action) =>
      produce(state, (draft) => {
        const key = parseInt(action.payload.schedule.query);
        draft.scheduleList[key].push(action.payload.schedule);
      }),
  },
  initialState
);

export const actionCreators = {
  loadCalendar,
  addCalendar,
};
