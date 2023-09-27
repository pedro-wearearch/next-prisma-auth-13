import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Login, Logout } from "@/app/auth";
import { User } from "./user";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Login />
      <Logout />
      <h2>Server session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>Client session</h2>
      <User />
    </main>
  );
}
