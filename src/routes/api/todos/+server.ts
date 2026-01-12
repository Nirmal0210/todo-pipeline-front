import type { RequestHandler } from "./$types";
import { requireAuth } from "$lib/auth/auth";
import { prisma } from "$lib/db";

export const GET: RequestHandler = async (event) => {
  try {
    requireAuth(event as any); // protect route
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: "desc" },
    });
    return new Response(JSON.stringify(todos));
  } catch (err) {
    console.error("GET /api/todos error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch todos" }), {
      status: 500,
    });
  }
};

export const POST: RequestHandler = async (event) => {
  try {
    requireAuth(event as any);
    const body = await event.request.json();
    const todo = await prisma.todo.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return new Response(JSON.stringify(todo), { status: 201 });
  } catch (err) {
    console.error("POST /api/todos error:", err);
    return new Response(JSON.stringify({ error: "Failed to create todo" }), {
      status: 500,
    });
  }
};

export const DELETE: RequestHandler = async (event) => {
  try {
    requireAuth(event as any);
    const body = await event.request.json();
    await prisma.todo.delete({
      where: { id: body.id },
    });
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error("DELETE /api/todos error:", err);
    return new Response(JSON.stringify({ error: "Failed to delete todo" }), {
      status: 500,
    });
  }
};
