"use client";

import { Card } from "@/chadcnComponents/ui/card";
import { Container, Header } from "@/components";
import { useTheme } from "@/contexts/themeContext";

export default function Home() {
  const theme = useTheme();

  interface ITodoList {
    title: string;
    describe: string;
    date: Date;
  }

  const toDoList: ITodoList[] = [
    {
      title: "todo",
      describe: "dmeinalfief",
      date: new Date(),
    },
    {
      title: "todo",
      describe: "dmeinalfief",
      date: new Date(),
    },
    {
      title: "todo",
      describe: "dmeinalfief",
      date: new Date(),
    },
  ];

  return (
    <div>
      <Header
        title="Today"
        subtitle={
          <p>
            Wake up , go ahead , do the thing not tomorrow, do{" "}
            <span style={{ fontWeight: "bold" }}>to</span>day.
          </p>
        }
      />

      <Container>
        {toDoList.map((e) => (
          <Card></Card>
        ))}
      </Container>
    </div>
  );
}
