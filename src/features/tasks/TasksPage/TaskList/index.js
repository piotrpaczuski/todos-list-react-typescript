import { StyledList, StyledListItem, StyledSpan, StyledButtonAdd, StyledButtonRemove, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectHideDone, toggleTaskDone, removeTasks, selectTaskByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamsName from "../searchQueryParamsName";

const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamsName);

    const tasks = useSelector(state => selectTaskByQuery(state, query))
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <StyledButtonAdd onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </StyledButtonAdd>
                    <StyledSpan done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </StyledSpan>
                    <StyledButtonRemove onClick={() => dispatch(removeTasks(task.id))}>
                        🗑
                    </StyledButtonRemove>
                </StyledListItem>
            ))}
        </StyledList>
    )
};

export default TaskList;