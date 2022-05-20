import React, {useEffect, useLayoutEffect, useState} from 'react';
import "./style.css";

const UseEffect = () => {
    // const initialData = 10;
    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
        document.title = `Chats(${myNum})`;
    });
    

  return (
    <>
    <div className = "center_div">
        <p>{myNum}</p>
        <div className="button2" onClick = {() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
        </div>        
    </div>
    </>
  )
}

export default UseEffect