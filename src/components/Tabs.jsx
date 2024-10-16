
import { useState } from "react"
import "./tabs.css"

const Tabs = ({ data }) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="button-container">
                {
                    data.map((item, index) => {
                        return (
                            <button key={index} className="primary-button" onClick={() => { setCount(index) }} >{item.lable}</button>
                        )
                    })
                }
            </div>
            <div className="content-container">
                <p>{data[count]?.content}</p>
            </div>
        </>
    )
}

export default Tabs