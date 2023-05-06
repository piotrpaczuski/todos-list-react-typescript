import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  removeTasks,
  selectHideDone,
  selectTaskByQuery,
  toggleTaskDone,
} from "../../tasksSlice";
import searchQueryParamsName from "../searchQueryParamsName";

import {
  StyledButtonAdd,
  StyledButtonRemove,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledSpan,
} from "./styled";

interface Tasks {
  id: string;
  content: string;
  done: boolean;
}

const TaskList: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamsName);

  const tasks: Tasks[] = useSelector((state) =>
    selectTaskByQuery(state, query)
  );
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

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
