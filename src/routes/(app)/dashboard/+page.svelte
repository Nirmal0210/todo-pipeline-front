<script lang="ts">
  import { invalidate } from '$app/navigation';
  export let data;
  $: todos = data.todos;

  async function deleteTodo(id: number) {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    await invalidate('todos:list');
  }
</script>

<div class="max-w-2xl mx-auto p-6 space-y-2">
  <h2 class="text-2xl font-bold mb-4">Your Todos</h2>
  
  {#if todos.length === 0}
    <div class="p-8 bg-gray-50 rounded-lg text-center">
      <p class="text-gray-600 mb-4">No todos found. Add a new one to get started!</p>
      <a href="/add-todos" class="text-blue-500 hover:text-blue-700 font-semibold">+ Add Todo</a>
    </div>
  {:else}
    <ul class="space-y-2">
      {#each todos as todo}
        <li class="p-4 bg-gray-100 rounded-lg flex justify-between items-start shadow-sm hover:bg-gray-200">
          <div>
            <strong>{todo.title}</strong>
            <p>{todo.description}</p>
          </div>
          <button on:click={() => deleteTodo(todo.id)} class="text-red-500 hover:text-red-700 font-semibold">Delete</button>
        </li>
      {/each}
    </ul>
  {/if}
</div>