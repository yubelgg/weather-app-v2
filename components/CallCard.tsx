'use client'

import {Callout} from "@tremor/react";

type Props = {
    msg: string;
}

function CallCard({ msg }: Props) {
   return (
       <Callout title={msg}></Callout>
   )
}

export default CallCard;