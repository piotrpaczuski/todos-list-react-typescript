import { StyledButtons, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { 
    selectHideDone, 
    selectTasks, 
    selectIsEveryTaskDone,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks,
    selectIsLoading } from "../../tasksSlice";

export const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();
    
    return (
        <StyledButtons>
            {!!tasks.length && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </StyledButton>
                </>
            )}
        </StyledButtons>
    );
};

export const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    return (
        <StyledButtons>
            <StyledButton
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={isLoading}>
                {isLoading ? `Ładowanie...` : `Pobierz przykładowe zadania`}
            </StyledButton>
        </StyledButtons>
    );
};