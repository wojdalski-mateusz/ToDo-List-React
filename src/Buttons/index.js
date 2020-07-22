import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button onClick={toggleHideDone} className="buttons__liveButton">
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
            className="buttons__liveButton"
            disabled={tasks.every(({ done }) => done)}
               >
                Ukończ wszystkie
        </button>
        </div>
    )
);

export default Buttons;