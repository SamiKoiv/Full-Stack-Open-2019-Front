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



const Report = ({ good, neutral, bad, all }) => {

    const Average = () => {

        if (all === 0) {
            return <p>average 0</p>
        }
        else {
            const average = (good - bad) / all
            return <p>average {average}</p>
        }
    }

    const Positive = () => {

        if (all === 0){
            return <p>positive 0 %</p>
        }
        else{
            const positive = good / all * 100
            return (<p>positive {positive} %</p>)
        }
    }

    return (
        <>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <Average />
            <Positive />
        </>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const score = [good, neutral, bad, all]

    const AddValue = (value, setValue) => {
        setAll(all + 1)
        setValue(value + 1)
    }

    return (
        <div>
            <Header text="give feedback" />
            <Button handleClick={() => AddValue(good, setGood)} text="good" />
            <Button handleClick={() => AddValue(neutral, setNeutral)} text="neutral" />
            <Button handleClick={() => AddValue(bad, setBad)} text="bad" />

            <Header text="statistics" />
            <Report good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root'));
