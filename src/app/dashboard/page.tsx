import Hero from "./hero";
import { getServerSession } from "next-auth";
export default async function Dashboard() {
  const session = await getServerSession();
  const name = session?.user?.name;
  return (
    <div>
      <Hero></Hero>
      <div className='pt-16 lg:mx-96 min-h-screen'>
        <h1 className='text-3xl font-bold pb-3'>Welcome, {name}</h1>
      </div>
    </div>
  );
}
