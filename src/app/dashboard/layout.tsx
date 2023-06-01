import { getServerSession } from "next-auth";
import Navbar from "./navBar";

async function getData() {
  const res = await fetch("http://localhost:3000/api");

  return res.json();
}

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const data = await getData();
  let theme = "";

  if (data.theme === "") {
    theme = "luxury";
  } else {
    theme = data.theme as string;
  }

  const name = session?.user?.name as string;
  const image = session?.user?.image as string;
  return (
    <section data-theme={theme}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar name={name} image={image}></Navbar>

      {children}
    </section>
  );
}
