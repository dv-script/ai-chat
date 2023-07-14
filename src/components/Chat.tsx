"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[500px] h-[660px] rounded-2xl grid grid-rows-[min-content_1fr_min-content] shadow-slate-400 shadow-lg">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-5 text-slate-600">
              {message.role === "user" && (
                <Avatar className="shadow-slate-400 shadow-lg">
                  <AvatarFallback>User</AvatarFallback>
                  <AvatarImage src="https://github.com/dv-script.png" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar className="shadow-slate-400 shadow-lg">
                  <AvatarFallback>IA</AvatarFallback>
                  <AvatarImage src="https://github.com/vercel.png" />
                </Avatar>
              )}
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          );
        })}
      </CardContent>

      <CardFooter className="w-full">
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            className="outline-none"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" className="bg-slate-900 text-white">
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
