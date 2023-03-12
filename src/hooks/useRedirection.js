import { useLocation, useNavigate } from "react-router-dom";

export default function useRedirection(){
    const navigate = useNavigate();
    const location = useLocation();

    //Хук возвращает функцию, в которой проверяем: если текущий роут не совпадает с целевым, то перенаправляем. 
    return function(route, preventSameRender=true){
        if (preventSameRender) {
            if (location.pathname != route){
                navigate(route);
            }
        }
        else {
            navigate(route);
        }
    }
}