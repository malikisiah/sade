import { getServerSession } from "next-auth";
import Navbar from "./navBar";

async function getData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("Invalid URL");
  }

  const res = await fetch(apiUrl);

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
