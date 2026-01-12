<script>
  import { goto } from "$app/navigation";

  let links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Add Todos", href: "/add-todos" },
    { name: "Settings", href: "/settings" },
  ];

  async function logout() {
    const res = await fetch("/api/logout", { method: "POST" });
    if (res.ok) goto("/login");
    else alert("Logout Failed");
  }
</script>

<aside
  class="w-64 bg-white text-white flex flex-col justify-between min-h-screen p-4"
>
  <h2 class="text-2xl font-bold px-4 text-black text-center">My App</h2>
  <nav class="flex flex-col space-y-2 rtl">
    {#each links as link}
    <a
      href="{link.href}"
      class="px-4 py-2 bg-white-700 hover:border-r-4 hover:border-s-indigo-500 text-black rounded hover:bg-gray-200 transition-colors"
    >
      {link.name}
    </a>
    {/each}
  </nav>
  <button
    on:click="{logout}"
    class="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 w-full rounded"
  >
    Logout
  </button>
</aside>

<style>
  aside {
    min-width: 240px;
  }
</style>
