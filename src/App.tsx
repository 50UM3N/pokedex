import React, { useEffect, useState } from "react";
import "./App.css";
function App({ b }: { b?: number }) {
    const [count, setCount] = useState(0);
    const a: A = { name: "Soumen Khara" };
    console.log(a);
    useEffect(() => {
        setCount(b || 0);
    }, [b]);

    return <div className="App"></div>;
}

export default App;
