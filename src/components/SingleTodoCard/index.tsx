import { MdEdit, MdDelete, MdCheck } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { useState } from "react";

import { todoDeleted, toggleInputForm } from "../../store/features/todoSlice";
import { Todo } from "../../types/Todo";


const TodoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`

const TodoText = styled.p<{ completed: boolean }>`
  margin: 0;
  font-size: 16px;
  color: #333333;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#888888" : "#333333")};
  flex: 1;
  word-break: break-word;
`

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 16px;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`

const CheckButton = styled(IconButton)<{ completed: boolean }>`
  color: ${(props) => (props.completed ? "#4CAF50" : "#888888")};
  
  &:hover {
    color: #4CAF50;
  }
`

const EditButton = styled(IconButton)`
  color: #2196F3;
  
  &:hover {
    color: #0b7dda;
  }
`

const DeleteButton = styled(IconButton)`
  color: #F44336;
  
  &:hover {
    color: #d32f2f;
  }
`

const SingleTodoCard = ({ todo }: { todo: Todo}) => {
  const [done, setDone] = useState(todo.completed)	
  const dispatch =  useDispatch()

  return (
    <TodoCard>
      <TodoText completed={done}>{todo.name}</TodoText>

      <ActionsContainer>
        <CheckButton
          completed={done}
          onClick={() => setDone(!done)}
          aria-label={done ? "Mark as incomplete" : "Mark as complete"}
        >
          <MdCheck size={18} />
        </CheckButton>

        <EditButton onClick={() => dispatch(toggleInputForm({
          id: todo.id,
          name:todo.name
        }))} aria-label="Edit task">
          <MdEdit size={18} />
        </EditButton>

        <DeleteButton onClick={() => dispatch(todoDeleted(todo.id))} aria-label="Delete task">
          <MdDelete size={18} />
        </DeleteButton>
      </ActionsContainer>
    </TodoCard>
  )
}

export default SingleTodoCard

