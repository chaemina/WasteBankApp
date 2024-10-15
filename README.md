# Waste Bank Application

실시간 모니터링 시스템을 활용해 Waste Bank 운영의 효율을 향상시키는 **Waste Bank Application**입니다. 

## 💻 Project

이 프로젝트는 Waste Bank 운영의 효율성을 높이기 위한 실시간 모니터링 애플리케이션입니다. 폐기물 수거 과정을 실시간으로 모니터링하고, 운영 투명성을 높이기 위해 설계되었습니다.

### 🔎 Purpose

**Waste Bank 협동조합**은 인도네시아 북자카르타 지역의 환경문제를 해결하는 경제적 참여 방식입니다. 이 협동조합은 지역의 폐기물을 수거하고, 재활용 가능한 자원을 판매해 수익을 창출하고 있습니다.

그러나, 기존의 수동 방식으로는 증가하는 고객 수와 폐기물 처리를 효과적으로 관리하기 어려워져, 실시간 모니터링 시스템을 도입하게 되었습니다. 이 시스템을 통해 Waste Bank는 더 효율적이고 투명하게 운영될 수 있습니다.

### 🧑🏻‍🤝‍🧑🏻 FE Developer Roles

이 어플리케이션은 하이브리드 어플리케이션으로, 프론트엔드는 웹 개발 (React)과 앱 개발 (React Native)로 나누어 이루어졌습니다.  
앱에서는 모바일 디바이스의 네이티브 기능이 필요한 (사용자 위치 감지, 회원가입, 지도 출력) 화면을 개발하였으며, 그 외의 화면은 웹으로 개발해 웹뷰로 출력하였습니다. 

- **이경민 Web FrontEnd Development**  [Github Link](https://github.com/chaemina/WasteBankWEB)
- **채민아 APP FrontEnd Development**  
1. React Native 프로젝트 환경 설정  
2. 앱에서 구현할 화면의 프로토타입 및 기능 개발  
```
   screen
   - admin
       | - AdminMapScreen.tsx
   - collector
       | - CollectorMapScreen.tsx
       | - IndividualTrashMapScreen.tsx
       | - TrashInfoScreen.tsx
   - commoon
       | - AuthenticationScreen.tsx
       | - AuthenticationSelectScreen.tsx
       | - RoleSelectScreen.tsx
       | - SignupScreen.tsx
   - user
       | - GarbagebinScreen.tsx
```
3. 주요 개발 내용
   - React Native Maps 라이브러리로 Google Maps를 사용해 쓰레기 위치와 사용자의 위치를 띄움  
   - 실제 디바이스에서 수거원의 실시간 위치를 감지할 수 있도록 `react-native-geolocation-service` 라이브러리 사용  
   - 앱에서 React Native WebView로 띄우기 위해 Vercel에서 웹 배포 진행  
   - 웹뷰로 띄운 React 코드에서 postmessage를 보내고, React Native에서 타입과 내용을 전달 받아 토큰 저장 혹은 네비게이션 이동 등의 웹뷰 통신 구현

---

- **BE GitHub**: [Github Link](https://github.com/chaendaya/holssi_BE)

- **Notion**: [Notion Link](https://www.notion.so/2024-ICT-Holssi-9ef0f43566ea4c688182a0fc5580e30a)

- **시연 영상**: [Youtube Link](https://www.youtube.com/watch?v=ffF9OGOU7h4)

---

### 🎈 Service Flow
<div align="center">
<img src="https://github.com/user-attachments/assets/212ff93f-a709-455d-96a4-63d09f984fa4" alt="Frame 7" width="800"/>
</div>


### ⏰ Develop Period

- 2024.06.01 - 2024.09.13


## 🚀 How to Start?

```bash
cd app
npm install
cd android
./gradlew clean
cd .. 
npm run android
```

## 🤖 Technology stack

<div align="center">


#### FrontEnd stack
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux-toolkit&logoColor=white"/>
<img src="https://img.shields.io/badge/Lottie-68BC71?style=flat-square&logo=&logoColor=white"/>

#### React Native Library 
<a title="Facebook, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:React-icon.svg"><img width="256" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/256px-React-icon.svg.png?20220125121207"></a>


<img src="https://img.shields.io/badge/AsyncStorage-61DAFB?style=flat-square&logo=&logoColor=white"/>
<img src="https://img.shields.io/badge/Webview-61DAFB?style=flat-square&logo=&logoColor=white"/>


#### Cowork tools

<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
</div>
<br/>


```
Reason why

```

## 💡 Main Function

<div align="center">
<img src="https://github.com/user-attachments/assets/fcf2aa21-087a-42c5-950f-a68ae7b60c23" alt="Frame 8" width="800"/>

<img src="https://github.com/user-attachments/assets/03472133-74ca-4e71-af9d-57e00092a804" alt="Frame 9" width="800"/>

<img src="https://github.com/user-attachments/assets/871307e3-e059-4cef-b4ce-bf1abc280b17" alt="Frame 10" width="800"/>

</div>




