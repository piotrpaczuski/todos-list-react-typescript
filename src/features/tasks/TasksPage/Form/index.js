import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { StyledForm, StyledButton } from "./styled";
import { StyledInput, StyledWrapper } from "../../../styledWrapper";

const Form = () => {
    const [newTaskConten, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskConten.trim()) {
            dispatch(addTask({
                content: newTaskConten.trim(),
                done: false,
                id: nanoid()
            }));
            setNewTaskContent("");
        };

        inputRef.current.focus();
        return setNewTaskContent("");
    };

    return (
        <StyledWrapper>
            <StyledForm onSubmit={onFormSubmit}>
                <StyledInput
                    ref={inputRef}
                    value={newTaskConten}
                    type="text"
                    placeholder="Co jest do zrobienia?"
                    onChange={({ target }) => setNewTaskContent(target.value)}
                    required
                />
                <StyledButton>Dodaj zadanie</StyledButton>
            </StyledForm>
        </StyledWrapper>
    );
};

export default Form;