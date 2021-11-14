import React, {useState} from 'react'

export default function Folder(props) {

    const [isOpen, setisOpen] = useState(false)

    function onOpen(){
        setisOpen(!isOpen)
        console.log(isOpen)
    }



    return (
        
        <>
        <div className="Folder" onClick={onOpen}>
            {props.name}
            
        </div>
        {isOpen ? props.children : ""}
        </>
    )
}
