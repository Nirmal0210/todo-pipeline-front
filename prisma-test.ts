import { prisma } from "./src/lib/db";

async function main() {
  try {
    const todos = await prisma.todo.findMany();
    console.log("Todos:", todos);
  } catch (err) {
    console.error("Prisma error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
