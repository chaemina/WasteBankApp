import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({ name: 'wasteBankApp' }) // 연결 및 통신 설정
  .useReactNative() // 모든 내장 React Native 플러그인 추가
  .connect(); // 연결 시작
