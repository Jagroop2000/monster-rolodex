import React from "react";
import './cardlist.css';
import { Card } from "../card/card";
export const CardList = (props) => 
{
    return(
        <div className="card-list">
            {
        props.monsterData.map((monsters)=>(
          <Card key={monsters.id} monster={monsters} />
        ))
      }
            </div>
    )
}
