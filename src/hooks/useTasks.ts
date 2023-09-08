// export function useLocalStorageState(initialState, key) {
//  const [value, setValue] = useState(function () {
//      const storedValue = localStorage.getItem(key);
//      return storedValue ? JSON.parse(storedValue) : initialState;
//  });
//
//  useEffect(function () {
//      localStorage.setItem(key, JSON.stringify(value));
//  }, [value, key]);
//
//  return [value, setValue];
// }
import {useQuery} from "@tanstack/react-query";
import {getTasks} from "@/service/calendar";

export function useTasks(){
    const {data:tasks, isLoading, error} = useQuery({
        queryKey:['tasks'],
        queryFn: getTasks
    });

    return {tasks, isLoading, error};
}