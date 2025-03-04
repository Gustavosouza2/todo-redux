/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { todosCleared } from "../../store/features/todoSlice";
import { UpdateTodoForm } from "../UpdateTodoForm";
import SingleTodoCard from "../SingleTodoCard";
import { AddTodoForm } from "../AddTodoForm";


const CardContainer = styled.div`
  shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  background-color: #242424;
  border: 1px solid #242424;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
  display: flex;
  height: 600px;
  width: 800px;
`

const CardTitle = styled.h1`
  font-weight: semi-bold;
  font-size: 2.2rem;
  color: #fff;
`

const CardButton = styled.button`
  background-color: #7B7B7B;
  font-weight: semi-bold;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px;
  border: none;
  width: 20%;
  color: #fff;
  &:hover {
    background-color: #484848;
  }

`


const CardFormContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display:flex;
  width: 100%;
  gap: 20px;
`
export const Card = () => {
  const toggleForm = useSelector((state: any) => state.todos.toggleForm)

  const myTodos = useSelector((state:any) => state.todos.todos)
  const dispatch =  useDispatch()


  return (
    <CardContainer>
      <div>
        <CardTitle>TODO LIST</CardTitle>

        <CardFormContainer>
          {toggleForm ?  <AddTodoForm /> : <UpdateTodoForm />}
         
        </CardFormContainer>
        <div style={{ marginTop: "20px" }}>
          <ul>
            {myTodos.map((todo:any) => (
              <li key={todo.id}>
                <SingleTodoCard todo={todo} />
              </li>

            ))}
          </ul>

        </div>
      </div>

      <CardButton onClick={() => dispatch(todosCleared())}>Limpar Lista</CardButton>
    </CardContainer>
  )
}