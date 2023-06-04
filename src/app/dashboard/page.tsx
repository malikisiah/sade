import Hero from "./hero";
import { getServerSession } from "next-auth";
export default async function Dashboard() {
  const session = await getServerSession();
  const name = session?.user?.name;
  return (
    <div>
      <Hero></Hero>
      <div className='pt-16 lg:mx-96 min-h-screen flex  mt-10'>
        <div>
          <h1 className='text-3xl font-bold pb-3'>Welcome, {name}</h1>
          <p className='text-lg pb-4'>
            As a fan, this platform was born from countless hours spent
            listening to her soulful melodies, each note inspiring me to express
            my own creativity. This page is not only a tribute to Sade and her
            timeless music, but it&apos;s also a reflection of the personal
            journey I embarked upon, guided by her powerful vocals and evocative
            lyrics. It is a testament to how art and music can profoundly shape
            and mold us, resonating with our deepest emotions, and giving us
            courage to express ourselves.
          </p>
          <p className='text-lg pb-4'>
            As you navigate through this site, you will explore various facets
            of Sade&apos;s life and career. The experience is best viewed on a
            desktop browser but I attempted to make it as responsive as possible
            on mobile devices. The spotify authentication was a personal touch,
            and in the future I plan to add the functionality to allow you to
            directly save songs found on this page to your Spotify playlist,
            stay tuned!
          </p>
          <p className='text-lg pb-4 lg:hidden'>
            Click the icon in the upper left-corner to access a drop-down menu
            to view the other pages!
          </p>
        </div>
      </div>
    </div>
  );
}
