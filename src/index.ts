import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3042).get("/:name", ({params: {name}}) => `Hello ${name}`);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
