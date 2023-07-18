"use client"
import {useState} from "react";

export default function Post(){
    const [postTitle , setPostTitle]=useState<string | null | number>("")
    const changeTitle = ()=>{
        setPostTitle(20)
    }
    console.log("hello world")
    const message = "hello world"
    message.toLocaleLowerCase()

    return(
        <>
            <h1>{postTitle}</h1>
            <button onClick={changeTitle}>Change</button>
        </>

    )
}