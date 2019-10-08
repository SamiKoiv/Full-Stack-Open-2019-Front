import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {

    const { good, neutral, bad, all } = props

    const average = () => {
        const average = (good - bad) / all
        return average
    }

    const positive = () => {
        const positive = good / all * 100
        return (positive + " %")
    }

    if (all === 0)
        return <p>No feedback given</p>

    return (
        <table>
            <tbody>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={all} />
                <Statistic text="average" value={average()} />
                <Statistic text="positive" value={positive()} />
            </tbody>
        </table>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const addValue = (value, setValue) => {
        setAll(all + 1)
        setValue(value + 1)
    }

    return (
        <div>
            <Header text="give feedback" />
            <Button handleClick={() => addValue(good, setGood)} text="good" />
            <Button handleClick={() => addValue(neutral, setNeutral)} text="neutral" />
            <Button handleClick={() => addValue(bad, setBad)} text="bad" />

            <Header text="statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root'));
