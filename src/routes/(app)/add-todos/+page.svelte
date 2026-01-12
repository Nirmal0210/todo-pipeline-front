<script lang="ts">
  let title = '';
  let description = '';
  let loading = false;
  let error = '';

  async function addTodo() {
    if (!title.trim()) {
      error = 'Title is required';
      return;
    }
    loading = true;
    error = '';

    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      });
      if (!res.ok) throw new Error('Failed to add todo');

      title = '';
      description = '';
      alert('Todo added successfully!');
    } catch (err: any) {
      error = err.message;
    } finally {
      loading = false;
    }
  }
</script>

<div class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4">
  <h2 class="text-2xl font-bold">Add a New Todo</h2>
  {#if error}<p class="text-red-500">{error}</p>{/if}
  <input placeholder="Title" bind:value={title} class="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500" />
  <textarea placeholder="Description" bind:value={description} rows="3" class="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
  <button on:click|preventDefault={addTodo} class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" disabled={loading}>
    {loading ? 'Adding...' : 'Add Todo'}
  </button>
</div>
