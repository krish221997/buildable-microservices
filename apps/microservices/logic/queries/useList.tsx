import { useQuery } from "react-query";
import dispatchRecipe from "../utils/dispatchRecipe";

interface IProps {
    queryKey: string,
    triggerId: string,
    query?: any
};

const useList = ({queryKey, triggerId, query}: IProps) => {
    const {data, status} = useQuery(
        [queryKey],
        () => dispatchRecipe({
            triggerId,
            payload: query
        }),
        {retry: false, refetchOnWindowFocus: true, staleTime: 0}
    )
    return {rows: data?.rows, status}
};

export default useList