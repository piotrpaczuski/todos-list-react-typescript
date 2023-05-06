import React, { FC, SyntheticEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addTask } from "../../tasksSlice";

import { StyledButton, StyledForm } from "./styled";
import { StyledInput, StyledWrapper } from "../../../styledWrapper";

const Form: FC = () => {
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event: SyntheticEvent): void => {
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
