import { createSlice } from '@reduxjs/toolkit';
import Portrait1 from '../assets/images/portrait/portrait_1.png';
import Portrait2 from '../assets/images/portrait/portrait_2.jpg';
import Portrait3 from '../assets/images/portrait/portrait_3.jpg';

const initialState = {
  projectsArray: [
    {
      id: 1,
      to: '/',
      name: 'Primal Statement',
      image: Portrait1,
    },
    {
      id: 2,
      to: '/',
      name: 'Empress Building',
      image: Portrait2,
    },
    {
      id: 3,
      to: '/',
      name: 'Chrome Landing',
      image: Portrait3,
    },
  ],
  projectsQuantity: 0,
  projectSelected: {},
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    getProjectQuantity(state) {
      state.projectsQuantity = state.projectsArray.length;
    },
    getProjectById(state, action) {
      state.projectSelected = state.projectsArray.find(
        (project) => project.id === action.payload,
      );
    },
  },
});

export const projectActions = projectSlice.actions;

export default projectSlice;
