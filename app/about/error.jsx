
"use client"
export default function Error ({error, reset}){
    return(
        <div>
            This ain't loading up:{error.messege}
            <button onClick={()=>reset()}></button>
        </div>
    )
}