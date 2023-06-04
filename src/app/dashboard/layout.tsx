import { getServerSession } from "next-auth";
import Navbar from "./navBar";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  const name = session?.user?.name as string;
  const image = session?.user?.image as string;
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar name={name} image={image}></Navbar>

      {children}
    </section>
  );
}
