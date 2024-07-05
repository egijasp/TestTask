import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TableState {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
}

const initialState: TableState[] = [
  { id: 1, firstName: "John", lastName: "Doe", position: "Software Engineer" },
  { id: 2, firstName: "Jane", lastName: "Smith", position: "Project Manager" },
  { id: 3, firstName: "Alice", lastName: "Johnson", position: "Designer" },
  { id: 4, firstName: "Bob", lastName: "Brown", position: "QA Engineer" },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Davis",
    position: "DevOps Engineer",
  },
  {
    id: 6,
    firstName: "David",
    lastName: "Evans",
    position: "Frontend Developer",
  },
  { id: 7, firstName: "Eva", lastName: "Green", position: "Backend Developer" },
  {
    id: 8,
    firstName: "Frank",
    lastName: "Harris",
    position: "Fullstack Developer",
  },
  {
    id: 9,
    firstName: "Grace",
    lastName: "Ingram",
    position: "Product Manager",
  },
  {
    id: 10,
    firstName: "Hannah",
    lastName: "Jones",
    position: "UI/UX Designer",
  },
];

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<TableState>) => {
      state.push(action.payload);
    },
    deleteEntry: (state, { payload }: PayloadAction<number>) =>
      state.filter((entry) => entry.id !== payload),
    editEntry: (state, action: PayloadAction<TableState>) => {
      const index = state.findIndex((entry) => entry.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { reducer } = tableSlice;

export const { addEntry, editEntry, deleteEntry } = tableSlice.actions;
