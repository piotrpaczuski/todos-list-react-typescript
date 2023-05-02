import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchExampleTasks,
  selectHideDone,
  selectIsEveryTaskDone,
  selectIsLoading,
  selectTasks,
  setAllDone,
  toggleHideDone,
} from "../../tasksSlice";

import { StyledButton, StyledButtons } from "./styled";

export const Buttons: React.FC = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  return (
    <StyledButtons>
      {!!tasks.length && (
        <>
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </StyledButton>
          <StyledButton
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </StyledButton>
        </>
      )}
    </StyledButtons>
  );
};

export const ExampleTasksButton: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <StyledButtons>
      <StyledButton
        onClick={() => dispatch(fetchExampleTasks())}
        disabled={isLoading}
      >
        {isLoading ? `Ładowanie...` : `Pobierz przykładowe zadania`}
      </StyledButton>
    </StyledButtons>
  );
};
