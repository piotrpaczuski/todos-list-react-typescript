import { SyntheticEvent, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch } from "../../../../hooks";
import { addTask } from "../../tasksSlice";

import { StyledInput, StyledWrapper } from "../../../styledWrapper";
import { StyledButton, StyledForm } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const onFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!newTaskContent.trim()) {
      return;
    }

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );
    setNewTaskContent("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={onFormSubmit}>
        <StyledInput
          ref={inputRef}
          value={newTaskContent}
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
