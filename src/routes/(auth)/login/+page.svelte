<script>
  import LoginBg from "$lib/assets/login-bg.jpg";
  import { enhance } from "$app/forms";
</script>

<div class="flex h-screen">
  <!-- Left Image -->
  <div class="hidden md:block w-1/2 relative">
    <img
      src="{LoginBg}"
      class="h-full w-full object-cover"
      alt="Login Background"
    />
    <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h2 class="text-white text-4xl font-bold tracking-wide">
        Get Things Done.
      </h2>
    </div>
  </div>

  <!-- Right Login Form -->
  <div class="w-full md:w-1/2 flex items-center justify-center p-5">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold">Welcome Back</h1>
      <h6 class="text-sm mb-3">Login with your credentials</h6>
      <form method="POST" use:enhance class="flex flex-col gap-5">
        <input name="email" class="border p-3 rounded" placeholder="Email" />
        <input
          name="password"
          class="border p-3 rounded"
          type="password"
          placeholder="Password"
        />
        <button class="bg-blue-600 text-white p-3 rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
</div>
