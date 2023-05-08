import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { RootState } from "../../../store";

import { StyledWrapper } from "../../styledWrapper";

const TaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const task = useSelector((state: RootState) => getTaskById(state, id));

  return (
    <>
      <Header header={"Szczegóły zadania"} />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😥"}
        body={
          task ? (
            <StyledWrapper>
              <strong>Zrobione:</strong> {task.done ? "Tak" : "Nie"}
            </StyledWrapper>
          ) : (
            <StyledWrapper />
          )
        }
      />
    </>
  );
};

export default TaskPage;
