import React, {ChangeEvent} from 'react';

type PropsType={
    callBack:(newIsDone:boolean)=>void
    isDone:boolean
}

export const SuperCheckBox = (props:PropsType) => {
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        props.callBack(e.currentTarget.checked)
    }
    return (
        <input type="text"   checked={props.isDone} onChange={onChangeHandler}/>
    );
};