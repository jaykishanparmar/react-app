import { useEffect, useState } from "react";

const Test = () => {
    const [loader, setLoader] = useState(true);
    const [list, setList] = useState([]);
    

    if(loader){
        return <div>Loading...</div>
    }

    return (
        <div></div>
    ); 

};

export default Test;