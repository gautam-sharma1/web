import React from "react";
import { InlineWidget } from "react-calendly";


function Calender() {
    return(<div class="container-fluid">
        <h1>Book a call with me!</h1>
        <InlineWidget url="https://calendly.com/gautamsharma2813" />
    </div>)


};

export default Calender;