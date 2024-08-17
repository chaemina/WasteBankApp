import { instance } from "./instance";

// 매칭 X 쓰레기 리스트 (collector, admin)
// 1. 사용자1 쓰레기 위치 : 북구 
// 2. 사용자2 쓰레기 위치 : 광산구 
// 3. 수거관  관할 구역: 광산구 
// 이때 토큰을 담아 /api/garbages/waiting 보내면, 사용자 2 의 쓰레기만 출력되어야함  
export const garbagesWaitingList = async () => {
      const response = await instance.get('/api/garbages/waiting');
      return response.data;
};
  
// 개별 쓰레기 정보 (collector)
export const garbageDetail = async ({ garbageId }: { garbageId: number }) => {
    try {
      const response = await instance.get(`/api/garbages/${garbageId}`);
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

// 수거할 날짜 등록 및 수락 (collector)
export const garbageAccept = async ({ garbageId, collectionDate }: { garbageId: number; collectionDate: string }) => {
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

// 매칭 O 쓰레기 리스트 (collector)
export const garbagesList = async () => {
    const response = await instance.get('/api/garbages/accepted');
    return response.data;
};

