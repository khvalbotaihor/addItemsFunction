import React, {ChangeEvent, useState} from "react";

type EditableSpanType = {
    title: string
    updateTile: (title:string) => void
}
export const EditableSpan = (props: EditableSpanType) => {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState("")

    const ActivateEditMode = () => {
        setTitle(props.title)
        setEditMode(true)
    }

    const ActivateViewMode = () =>{
        setEditMode(false)
        props.updateTile(title)
    }

    const OnChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
    }

    return editMode ?
        <input type="text" value={title} onBlur={ActivateViewMode} onChange={OnChangeHandler} autoFocus/> :
        <span onDoubleClick={ActivateEditMode}>{props.title}</span>

}