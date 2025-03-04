/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux"
import { SyntheticEvent, useState } from "react"
import styled from "styled-components"

import { todoUpdated } from "../../store/features/todoSlice"

const UpdateTodoFormStyle = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`

const UpdateTodoFormInput = styled.input`
  border: 1px solid #7B7B7B;
  border-radius: 5px;
  margin-right: 10px;
  padding: 10px;
  height: 20px;
  width: 80%;
  &:focus {
    border: 1px solid #242424;
  }
`
const UpdateTodoFormButton = styled.button`
  background-color: #7B7B7B;
  font-weight: semi-bold;
  border-radius: 5px;
  font-size: 0.8rem;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px;
  border: none;
  width: 100%;
  color: #fff;
  &:hover {
    background-color: #484848;
  }

`
export const UpdateTodoForm = () => {
  const todoUpdate =  useSelector((state:any) => state.todos.todoUpdate)
  const [update, setUpdate] = useState(todoUpdate.name)
  
  const dispatch =  useDispatch()


  const handleSubmit = (e:SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(todoUpdated({id: todoUpdate.id, name: update}))
  }
    return (
      <UpdateTodoFormStyle onSubmit={handleSubmit}>
        <UpdateTodoFormInput type="text" placeholder="Edite um item" onChange={(e) => setUpdate(e.target.value)} value={update}/>
        <UpdateTodoFormButton type="submit" >EDITAR ITEM</UpdateTodoFormButton>
      </UpdateTodoFormStyle>
    )
}