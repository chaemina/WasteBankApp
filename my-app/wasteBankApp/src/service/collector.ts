import { instance } from "./instance";

// 쓰레기 수거 시작 
export const collectStart = async ({ garbageId }: { garbageId: number }) => {
    try {
      const response = await instance.post(`/api/garbages/accept/${garbageId}/start`);
      if (response.data.success) {
        return response.data.response;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching chat data:', error);
      throw error;
    }
};

// 수거관 위치 POST (수거중)
export const collectorLocation = async ({ garbageId, latitude, longitude }: { garbageId: number, latitude: number, longitude: number }) => {
  try {
    const response = await instance.post(`/api/garbages/accept/${garbageId}/tracking`, {
      latitude,
      longitude,
    });
    if (response.data.success) {
      return response.data.response;
    } else {
      throw new Error('Failed to send location data');
    }
  } catch (error) {
    console.error('Error sending location data:', error);
    throw error;
  }
};


// 쓰레기 수거 완료 
export const collectDone = async ({ garbageId }: { garbageId: number}) => {
    try {
      const response = await instance.post(`/api/garbages/accept/${garbageId}/complete`);
      if (response.data.success) {
        return response.data.response;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching chat data:', error);
      throw error;
    }
};


// 수거관 실시간 위치 (사용자)
export const collectorLocationGet = async ({ garbageId }: { garbageId: number }) => {
  try {
    const response = await instance.get(`/api/garbages/${garbageId}/collectorLocation`);
    if (response.data.success) {
      return response.data.response;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching chat data:', error);
    throw error;
  }
};
