import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__liveButton">
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