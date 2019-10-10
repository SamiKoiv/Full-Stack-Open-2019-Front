import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
    const parts = course.parts.map(x => <Part key={x.id} name={x.name} exercises={x.exercises} />)
    const total = course.parts.reduce((sum, x) => sum + x.exercises, 0)

    return (
        <>
            {parts}
            <p><b>total of {total} exercises</b></p>
        </>
    )
}

export default Content