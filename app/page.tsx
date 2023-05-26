import {Card, Divider, Subtitle, Title} from "@tremor/react";
import CityLocation from "@/components/CityLocation";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="min-h-screen">
            <Card>
                <Title className="text-6xl font-bold text-center mb-10">AI Weather</Title>
                <Subtitle className="text-center text-xl">Tech stacks used: OpenAI, NextJS, Tailwind, Tremor</Subtitle>
            </Card>

            <Divider className="my-10"></Divider>

            <Card>
                <CityLocation></CityLocation>
            </Card>
        </div>
    </main>
  )
}
