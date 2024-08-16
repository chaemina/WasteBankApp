import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// User에서 관리해야하는 Slice
const initialState = {
    email: '',
    phone_number: '',
};

/**
 * TemplateSlice에서 관리할 상태를 지정합니다.
 */
export const TemplateUserSlice = createSlice({
    name: 'templateUser',
    initialState,
    reducers: {
        // 모든 사용자 정보를 상태에 저장합니다.
        setUser(state, action) {
            state.email = action.payload.email;
            state.phone_number = action.payload.phone_number;
        },

        // 사용자 이메일을 상태에 저장합니다.
        setEmail(state, action) {
            state.email = action.payload;
        },

        // 접근 토큰을 상태에 저장합니다.
        setNumber(state, action) {
            state.phone_number = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { setUser, setEmail, setNumber } = TemplateUserSlice.actions

export default TemplateUserSlice.reducer