import { useLocation } from "react-router-dom";

import {
  removeTasks,
  selectHideDone,
  selectTaskByQuery,
  toggleTaskDone,
} from "../../tasksSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { searchQueryParamsName } from "../searchQueryParamsName";

import {
  StyledButtonAdd,
  StyledButtonRemove,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledSpan,
} from "./styled";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamsName) as string;

  const tasks = useAppSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useAppSelector(selectHideDone);
  const dispatch = useAppDispatch();

  return (
    <StyledList>
      {tasks.map((task) => (
        <StyledListItem key={task.id} hidden={task.done && hideDone}>
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
  );
};

export default TaskList;
