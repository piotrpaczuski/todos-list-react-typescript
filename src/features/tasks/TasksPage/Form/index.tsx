import { nanoid } from "@reduxjs/toolkit";
import React, {
  MutableRefObject,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { StyledButton, StyledForm } from "./styled";
import { StyledInput, StyledWrapper } from "../../../styledWrapper";

const Form: React.FC = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef: MutableRefObject<any> = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    if (newTaskContent.trim()) {
      dispatch(
        addTask({
          content: newTaskContent.trim(),
          done: false,
          id: nanoid(),
        })
      );
      setNewTaskContent("");
    }
    inputRef.current.focus();
    return setNewTaskContent("");
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
