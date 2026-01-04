import { useState } from "react"

function Detail({ onActive }) {
    const [status, setStatus] = useState(false)
    function handleClick() {
        setStatus(!status)
        onActive(status)
    }

    return (
        <>
            <button onClick={handleClick}>按钮</button>
            <p style={{ display: status ? 'block' : 'none' }}>Detail的内容</p>
        </>
    )
}

export default function App() {
    return (
        <>
            <Detail
                onActive={(status) => alert('Detail组件激活' + status)}
            />
        </>
    )
}