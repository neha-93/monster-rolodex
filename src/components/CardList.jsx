import Card from "./Card/Card";
import classes from "./CardList.module.css";

const CardList = props => {
    return <div className={classes["card-list"]}>
         {props.monsters.map(monster =>(
          <Card key={monster.id} monster={monster}/>
        ))}
    </div>
}

export default CardList;