import axios from "axios";


const recipeUrl = "https://api.buildable.dev/trigger";
const version2 = "v2";
const recipeTrigger = "test"
const POST = "POST";


interface IProps {
    triggerId: string,
    payload?: any
}

interface ApiIProps {
    url: string,
    payload: any
}

const api = async ({url, payload}: ApiIProps) => {
    const { data} = await axios({
        method: POST,
        url,
        data: payload
    });

    return {...data};
};

const dispatchRecipe = ({triggerId, payload}: IProps): Promise<any> => {
    return api({
        url: `${recipeUrl}/${version2}/${recipeTrigger}-${triggerId}`,
        payload
})
};


export default dispatchRecipe;