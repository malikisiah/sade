import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Navbar from "./navBar";
import Hero from "./hero";
export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  const name = session?.user?.name as string;
  const image = session?.user?.image as string;
  return (
    <div>
      <Navbar name={name} image={image}></Navbar>
      <Hero></Hero>
    </div>
  );
}
