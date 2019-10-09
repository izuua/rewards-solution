import React from "react";
import "./style.css";

function CustomerCard(props) {
    return (
        <div className="card">
            <div className="content">
                <ul>
                    <li>
                        Name: {props.name}
                    </li>
                    <li>
                        Transaction Amount: ${props.transaction}
                    </li>
                    <li>
                        Rewards: {props.rewards} points
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CustomerCard;