import Clerk from "@clerk/clerk-js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Add your VITE_CLERK_PUBLISHABLE_KEY to .env file");
}

const clerk = new Clerk(clerkPubKey);
await clerk.load();

if (clerk.user) {
  // User is logged in, show the dashboard
  document.getElementById("user-button-container").innerHTML = `
    <div id="user-button"></div>
  `;

  const userButtonDiv = document.getElementById("user-button");
  clerk.mountUserButton(userButtonDiv);
} else {
  // User is not logged in, redirect to the landing page
  window.location.href = "/landing.html";
}