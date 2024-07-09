import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TableState {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
}

const initialState: TableState[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    position: "Software Engineer",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    position: "Project Manager",
  },
  { id: "3", firstName: "Alice", lastName: "Johnson", position: "Designer" },
  { id: "4", firstName: "Bob", lastName: "Brown", position: "QA Engineer" },
  {
    id: "5",
    firstName: "Charlie",
    lastName: "Davis",
    position: "DevOps Engineer",
  },
  {
    id: "6",
    firstName: "David",
    lastName: "Evans",
    position: "Frontend Developer",
  },
  {
    id: "7",
    firstName: "Eva",
    lastName: "Green",
    position: "Backend Developer",
  },
  {
    id: "8",
    firstName: "Frank",
    lastName: "Harris",
    position: "Fullstack Developer",
  },
  {
    id: "9",
    firstName: "Grace",
    lastName: "Ingram",
    position: "Product Manager",
  },
  {
    id: "10",
    firstName: "Hannah",
    lastName: "Jones",
    position: "UI/UX Designer",
  },
];

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addEntry: (state, { payload }: PayloadAction<TableState>) => {
      state.push(payload);
    },
    deleteEntry: (state, { payload }: PayloadAction<string>) =>
      state.filter((entry) => entry.id !== payload),
    editEntry: (state, { payload }: PayloadAction<TableState>) => {
      const index = state.findIndex((entry) => entry.id === payload.id);
      if (index !== -1) {
        state[index] = payload;
      }
    },
  },
});

export const { reducer } = tableSlice;

export const { addEntry, editEntry, deleteEntry } = tableSlice.actions;
