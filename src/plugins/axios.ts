import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// 요청 인터셉터
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 요청 전에 작업을 수행합니다.
    // 예: 인증 토큰 추가, 요청 헤더 수정 등
    console.log(8, config);
    return config;
  },
  (error: AxiosError) => {
    // 요청 인터셉터에서 오류가 발생한 경우 처리합니다.
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // 응답 전에 작업을 수행합니다.
    // 예: 응답 데이터 가공, 에러 처리 등
    return response;
  },
  (error: AxiosError) => {
    // 응답 인터셉터에서 오류가 발생한 경우 처리합니다.
    return Promise.reject(error);
  }
);

// Vue 3 플러그인으로 등록합니다.
export default {
  install: (app: any) => {
    app.config.globalProperties.$axios = axios;
  },
};
