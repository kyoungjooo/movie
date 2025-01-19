import { useInfiniteQuery } from "@tanstack/react-query";
import MovieApi from "../apis/movie/MovieApi";
import { useMemo } from "react";

const useInfinity = ({ key }) => {
  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["movieList", key],
    queryFn: ({ pageParam = 1 }) => {
      return MovieApi.getUpcommingMovieList({ page: pageParam, key });
    },
    getNextPageParam: (lastPage, allPages) => lastPage.page + 1,
  });
  const movieList = useMemo(() => {
    if (!data) return [];
    return data.pages.flatMap((page) => page.results);
  }, [data]);
  return { movieList, fetchNextPage, isLoading };
};
export default useInfinity;
