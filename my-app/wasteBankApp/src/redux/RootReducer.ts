import { combineReducers } from "@reduxjs/toolkit";
import templateUserSlice from "./slice/TemplateUserSlice";
import TemplateRoleSlice from "./slice/TemplateRoleSlice";

// 리듀서들을 결합하여 루트 리듀서를 생성
const RootReducer = combineReducers({
    templateUser: templateUserSlice,
    templateRole: TemplateRoleSlice,
});

// RootState 타입을 정의
export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
