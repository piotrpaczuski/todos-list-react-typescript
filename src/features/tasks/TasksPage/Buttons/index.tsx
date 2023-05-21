import { useAppDispatch, useAppSelector } from "../../../../hooks";
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

export const Buttons = () => {
  const tasks = useAppSelector(selectTasks);
  const hideDone = useAppSelector(selectHideDone);
  const isEveryTaskDone = useAppSelector(selectIsEveryTaskDone);
  const dispatch = useAppDispatch();

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

export const ExampleTasksButton = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

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
