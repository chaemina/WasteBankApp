import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types/type";

const initialState: UserState = {
  email: '',
  phone: '',
  name: '',
  password: '',
  location: '',
  account: '',
  bank: '',
};

export const TemplateUserSlice = createSlice({
  name: 'templateUser',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setNumber(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    // 추가적인 개별 필드 업데이트 리듀서가 필요하면 추가할 수 있습니다.
  },
});

export const { setUser, setEmail, setNumber } = TemplateUserSlice.actions;
export default TemplateUserSlice.reducer;
