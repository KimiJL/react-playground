import * as React from "react";
import { Color } from "../model/color";

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

const updateColor = (props : Props, colorId : keyof Color) => (value) => {
    props.onColorUpdated({
        ...props.color,
        [colorId]: value
    })
}

export const ColorPicker = (props: Props) => (
    <div>
        <ColorSliderComponent
            value = {props.color.red}
            onValueUpdated={updateColor(props, 'red')}
        />
        <br />
        <ColorSliderComponent
            value = {props.color.green}
            onValueUpdated={updateColor(props, 'green')}
        />
        <br />
        <ColorSliderComponent
            value = {props.color.blue}
            onValueUpdated={updateColor(props, 'blue')}
        />
    </div>
)

interface PropsColorSlider {
    value: number;
    onValueUpdated: (newValue: number) => void;
  }
  
const ColorSliderComponent = (props: PropsColorSlider) => {
    return (
        <div>
            <input
            type="range"
            min="0"
            max="255"
            value={props.value}
            onChange={event => props.onValueUpdated(+event.target.value)}
        />
        {props.value}
        </div>
    );
};