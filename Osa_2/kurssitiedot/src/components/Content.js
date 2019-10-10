import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
    const parts = course.parts.map(x => <Part name={x.name} exercises={x.exercises}/>)

    return (
        <>
            {parts}
        </>
    )
}

export default Content