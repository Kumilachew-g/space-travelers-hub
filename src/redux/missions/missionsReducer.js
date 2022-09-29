import { createAsyncThunk } from '@reduxjs/toolkit';
import getAPI from './getAPI';

const FETCH_MISSIONS = 'spaceX/missions/FETCH_MISSIONS/fulfilled';
const JOIN_MISSION = 'spaceX/missions/JOIN_MISSIONS';
const LEAVE_MISSION = 'spaceX/missions/LEAVE_MISSIONS';

const initialState = {
  status: 'empty',
  missionList: [],
  joinedMission: [],
};

export const fetchMission = createAsyncThunk(
  'spaceX/missions/FETCH_MISSIONS',
  async () => {
    const result = await getAPI('https://api.spacexdata.com/v3/missions');
    return result;
  },
);

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        status: 'fetched',
        missionList: [...state.missionList, ...action.payload],
        joinedMission: [],
      };
    case JOIN_MISSION:
      return {
        status: state.status,
        missionList: state.missionList,
        joinedMission: [...state.joinedMission, action.payload],
      };
    case LEAVE_MISSION:
      return {
        status: state.status,
        missionList: state.missionList,
        joinedMission: [...action.payload],
      };
    default:
      return state;
  }
};

export default missionsReducer;
