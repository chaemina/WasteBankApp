export interface GarbageData {
    garbageId: number;
    location: string;
    latitude: number;
    longitude: number;
    matched: boolean;
    daysSinceRegistration: number;
  }
  
  export interface ApiResponse {
    success: boolean;
    response: GarbageData[];
    error: any;
  }
  
  export type UserState = {
    email: string;
    phone: string;
    name: string;
    password: string;
    location: string;
    account: string;
    bank: string;
  };
  
  export type SendType = {
    email: string;
    role: string;
    code: null;
  };
  
  export type VerifyType = {
    email: string;
    role: string;
    code: string;
  };
  