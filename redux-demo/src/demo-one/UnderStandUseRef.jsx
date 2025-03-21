import React from 'react'

const UnderStandUseRef = () => {
    const [count, setCount] = React.useState(0)
    const countRef = React.useRef(0)

    return (
        <div>      <p>State Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment State Count
            </button>
            <p>Ref Count: {countRef.current}</p>
            <button onClick={() => {

                console.log('ref count called')
                countRef.current = countRef.current + 1
            }}>
                Increment Ref Count
            </button>
        </div>
    )
}

export default UnderStandUseRef