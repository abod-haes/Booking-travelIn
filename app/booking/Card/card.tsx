import Image from "next/image"
import React, {useState} from "react"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import {
    Autocomplete,
    AutocompleteRenderInputParams,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material"
import "./card.css"
import {Models} from "appwrite"
import AlertDialog from "./AlertDialog"

export default function Card(props: {
    src: string
    prop: Models.Document[]
    value: string
}) {
   
    const [valueDate, setDate] = useState<null | string>(null)
    const [valueTime, setTime] = useState<null | string>(null)
    const [cost, setCost] = useState<null | string>(null)
    console.log(props.prop)
    if(!props.prop) return <p>Field Fetch Info</p>
    return (
        <div className="card">
            <div className="img">
                <Image
                    src={props.src}
                    alt=""
                    width={150}
                    height={150}
                    priority
                    unoptimized
                />
            </div>
            <div className="details">
                <div className="text">
                    <h3>
                        <LocationOnOutlinedIcon />
                        {props.value}
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aut praesentium rerum rem quo maiores? Minima
                        ipsa, debitis magni tempora placeat{" "}
                    </p>
                </div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                        Ticket Class
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={e => setCost(e.target.value)}
                    >
                        <FormControlLabel
                            value={`${props?.prop[0]?.vip}`}
                            control={<Radio />}
                            className="one"
                            label={`${props?.prop[0]?.vip}$ First Class`}
                        />
                        <FormControlLabel
                            value={`${props?.prop[0]?.cost}`}
                            control={<Radio />}
                            className="tow"
                            label={`${props?.prop[0]?.cost}$ Economy Class`}
                        />
                    </RadioGroup>
                </FormControl>
                <div className="bookDate">
                    <Autocomplete
                        id="times"
                        options={props?.prop[0]?.time}
                        value={valueTime}
                        renderInput={(
                            params: AutocompleteRenderInputParams
                        ) => <TextField {...params} label="Times" />}
                        onChange={(_e: any, newValue: string | null) =>
                            setTime(newValue)
                        }
                    />
                    <Autocomplete
                        id="times"
                        options={props?.prop[0]?.date}
                        value={valueDate}
                        renderInput={(
                            params: AutocompleteRenderInputParams
                        ) => <TextField {...params} label="Date" />}
                        onChange={(_e: any, newValue: string | null) =>
                            setDate(newValue)
                        }
                    />
                </div>
                <AlertDialog
                    name={props.value}
                    cost={cost}
                    date={valueDate}
                    time={valueTime}
                    img  = {props.src}
                />
            </div>
        </div>
    )
}
