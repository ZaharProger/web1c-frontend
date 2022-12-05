export default function useApi(){
    //Хук возвращает функцию для обращения к бекенду по заданному ендпоинту
    return async function(apiEndpoint, methodType, requestData=null){
        const requestParams = { method: methodType };
        if (requestData !== null){
            requestParams.body = requestData;
        }

        //Возвращает объект, содержащий результат выполнения запроса: код ответа и данные с json.
        const response = await fetch(apiEndpoint, requestParams);
        const responseResult = { ok: response.ok };
        responseResult.responseBody = response.ok? await response.json() : null;

        return responseResult;
    }
}