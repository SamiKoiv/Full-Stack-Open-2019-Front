import React from 'react'

const Header = ({ text }) => <h1>{text}</h1>

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

const Part = ({ name, exercises}) => <p>{name} {exercises}</p>

const Course = ({ course }) => {

    return (
        <>
            <Header text={course.name} />
            <Content course={course} />
        </>
    )
}

export default Course