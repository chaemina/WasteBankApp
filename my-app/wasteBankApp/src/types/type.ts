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
  