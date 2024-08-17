import { instance } from "./instance";

// 쓰레기 수거 시작 
export const collectStart = async ({ garbageId }: { garbageId: number }) => {
    try {
      const response = await instance.get(`/api/garbages/accept/${garbageId}/start`);
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
export const collectorLocation = async ({ garbageId, collectionDate }: { garbageId: number; collectionDate: string }) => {
    try {
      const response = await instance.post(`/api/garbages/${garbageId}/accept`, { collectionDate });
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