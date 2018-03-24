import React from 'react';

import './option.css'

const Option = (props) => {
    let sentence = props.text;
    let sentenceArr = sentence.split(" ");

    // randomize the array words
    const sentenceShuffleArr = arr => (
        arr
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1])
    )
    
    return (<div className="option">
        {sentenceShuffleArr(sentenceArr).map(function(word){
            return <button>{word}</button>;
        })}
    </div>);
};

export default Option