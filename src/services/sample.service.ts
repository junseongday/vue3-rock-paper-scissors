import axios from "axios";

// GET 요청 예시
export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    // 에러 처리
    throw new Error("데이터를 불러오는 중에 오류가 발생했습니다.");
  }
};
