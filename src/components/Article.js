import React from "react";

function Article ({title, date, preview, minutes}) {
    let defaultDate = "January 1, 1970";
    let articleDate = date || defaultDate;
    let minutesEmojis = (minutes) => {
        return minutes < 30 ? coffeeCupsDemo(minutes) : bentoBoxesDemo(minutes);
    };
    let coffeeCupsDemo = (minutes) => {
        const cups = Math.ceil(minutes / 5);
        return "☕".repeat(cups);
    };

    let bentoBoxesDemo = (minutes) => {
        const boxes = Math.ceil(minutes/10);
        return "🍱".repeat(boxes);
    }
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{articleDate}</small>
            <p>{preview}</p>
            <p>{minutesEmojis(minutes)} minutes read</p>
        </article>
    )
}

export default Article;