import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { StyledWrapper } from "../../styledWrapper";
import { getTaskById } from "../tasksSlice";

export default () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Header
                header={"Szczegóły zadania"}
            />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥"}
                body={task ?
                        <StyledWrapper>
                            <strong>Zrobione:</strong> {task.done ? "Tak" : "Nie"}
                        </StyledWrapper>
                    : <StyledWrapper />}
            />
        </>
    )
};