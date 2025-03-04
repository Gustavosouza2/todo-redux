import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import styled from "styled-components"

import { todoAdded } from "../../store/features/todoSlice"

const AddTodoFormStyle = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`

const AddTodoFormInput = styled.input`
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
const AddTodoFormButton = styled.button`
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
export const AddTodoForm = () => {
  const [input, setInput] = useState("")
  const dispatch =  useDispatch()


  const handleSubmit = (e:SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(todoAdded({id: nanoid(), name: input}))
  }
    return (
      <AddTodoFormStyle onSubmit={handleSubmit}>
        <AddTodoFormInput type="text" placeholder="Adicione um item" onChange={(e) => setInput(e.target.value)} value={input}/>
        <AddTodoFormButton type="submit" >ADICIONAR A LISTA</AddTodoFormButton>
      </AddTodoFormStyle>
    )
}