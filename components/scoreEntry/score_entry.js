import { Chance } from "chance"
import css from "./score_entry.module.css"
import Button from '@material-ui/core/Button'

const chance =  Chance();
let par = 4;

export default function ScoreEntry(props) {
    return (
        <form className={css.myform}>
            <label>
                {props.name}
            </label>
            <input type='number' defaultValue={par}>
            </input>
            <p>{props.hdcp}</p>
            <Button variant='contained' color='primary'>TEST</Button>
        </form>
    )
  }

//   {chance.first()}