'use client'

import { Card, Text, Metric} from "@tremor/react";

type Props = {
    title: string;
    metric: string;
}

function InfoCard ( { title, metric }: Props) {
    return (
        <Card>
            <Text>{title}</Text>
            <Metric>{metric}</Metric>
        </Card>
    )
}

export default InfoCard;