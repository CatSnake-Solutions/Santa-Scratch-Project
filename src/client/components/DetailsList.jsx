import React from "react";
import { useState } from "react";


const DetailsList = (props) => {
    const result = [];
    props.list.forEach((el) => {
        result.push(<div>{el.step}</div>)
    })

	return (
        <div>{result}</div>
	);
};

export default DetailsList;
