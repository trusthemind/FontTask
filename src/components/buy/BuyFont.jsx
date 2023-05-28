import React, { useEffect } from "react";
import { tabsApi } from "../service/apiSlice";
import "./style.css"

function BuyFont() {
    const { data, isLoading } = tabsApi.useGetFont_BQuery();

    useEffect(() => {
    }, [data])

    if (isLoading) {
        return <div id="loading"></div>;
    }
    return (
        <div id="str">
            <p>{data.content}</p>
        </div>
    );
}

export default BuyFont;