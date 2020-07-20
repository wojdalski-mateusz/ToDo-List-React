import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__liveButton">
                {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
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