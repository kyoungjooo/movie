import AxiosInstance from "../http";

const MovieApi = {
  async getUpcommingMovieList({ page = 1, key }) {
    const response = await AxiosInstance.get(`/movie/${key}`, {
      params: {
        page,
        language: "ko-Kr",
      },
    });
    return response.data;
  },
};
export default MovieApi;
