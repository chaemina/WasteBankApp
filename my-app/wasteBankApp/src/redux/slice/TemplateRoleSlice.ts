import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// User에서 관리해야하는 Slice
const initialState = {
    role: '',
};

/**
 * TemplateSlice에서 관리할 상태를 지정합니다.
 */
export const TemplateRoleSlice = createSlice({
    name: 'templateRole',
    initialState,
    reducers: {
        // 모든 사용자 정보를 상태에 저장합니다.
        setUser(state, action) {
            state.role = action.payload.role;
        },
        setRole(state, action) {
            state.role = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { setUser, setRole } = TemplateRoleSlice.actions

export default TemplateRoleSlice.reducer