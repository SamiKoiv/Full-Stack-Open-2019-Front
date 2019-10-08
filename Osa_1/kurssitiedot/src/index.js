import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
}

const Content = (props) => {
    console.log(props)
    const content = props.parts
        .map(p => {
            return (
                <>
                    <h3>{p.name}</h3>
                    <p>Exercises: {p.exercises}</p>
                </>
            )
        })
    return <div>{content}</div>
}

const Total = (props) => {
    console.log(props)
    let total = 0
    props.parts.forEach(p => total += p.exercises)

    return (
        <div>
            Number of exercises {total}
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));