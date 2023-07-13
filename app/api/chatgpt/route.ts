import { NextResponse } from "next/server";
import openai from "@/openai"

export async function POST(request: Request) {
    const { weatherData } = await request.json();

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `pretend you are a weather news weather and give a summary of todays weather. include information about the UV levels and if you need to wear spf today`
            },
            {
                role: "user",
                content: `Can I get todays weather summary from 
                data: ${JSON.stringify(weatherData)}`,
            },
        ],
    });

    const { data } = response;

    console.log("data: ", data)

    return NextResponse.json(data.choices[0].message)
}


