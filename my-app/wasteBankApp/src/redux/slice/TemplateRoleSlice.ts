import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoleState {
  role: string;
}

const initialState: RoleState = {
  role: '',
};

export const TemplateRoleSlice = createSlice({
  name: 'templateRole',
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
  },
});

export const { setRole } = TemplateRoleSlice.actions;
export default TemplateRoleSlice.reducer;
