<script>
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  let { children } = $props();
</script>

<div class="flex h-screen bg-gray-100">
  <!-- Sidebar -->
  <Sidebar />

  <!-- Main content area -->
  <div class="flex-1 flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Page content -->
    <main class="flex-1 p-6 overflow-auto">
      {@render children()}
    </main>
  </div>
</div>
