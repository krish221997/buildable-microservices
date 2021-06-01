import { models } from "../queries";
import useList from "../queries/useList";

const useListBuildableServices = () => {
    const queryKey = models.services.name;
    const triggerId = models.services.actions.list
    const {rows, status} = useList({
        queryKey,
        triggerId
    }) 
    return {rows, status}
};

export {useListBuildableServices};