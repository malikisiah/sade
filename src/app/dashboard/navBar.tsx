import Image from "next/image";
import Link from "next/link";
import ToggleSwitch from "./toggle";
type navbarProps = {
  name: string;
  image: string;
};

export default function Navbar(props: navbarProps) {
  return (
    <div className='navbar border-b-2 border-neutral bg-base-100 sticky top-0 z-50 px-5'>
      <div className='flex-1 hidden lg:flex'>
        <Link className='btn btn-ghost normal-case text-xl' href='/dashboard'>
          Home
        </Link>
        <Link
          className='btn btn-ghost normal-case text-xl'
          href='/dashboard/musicPage'
        >
          Music
        </Link>
        <Link
          className='btn btn-ghost normal-case text-xl'
          href='/dashboard/Gallery'
        >
          Gallery
        </Link>
        <Link
          className='btn btn-ghost normal-case text-xl'
          href='/dashboard/Bio'
        >
          Biography
        </Link>
      </div>
      <div className='flex-1 dropdown'>
        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <Link href='/dashboard'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z'
                  clipRule='evenodd'
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link href='/dashboard/musicPage'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M17.721 1.599a.75.75 0 01.279.584v11.29a2.25 2.25 0 01-1.774 2.198l-2.041.442a2.216 2.216 0 01-.938-4.333l2.662-.576a.75.75 0 00.591-.734V6.112l-8 1.73v7.684a2.25 2.25 0 01-1.774 2.2l-2.042.44a2.216 2.216 0 11-.935-4.33l2.659-.574A.75.75 0 007 12.53V4.237a.75.75 0 01.591-.733l9.5-2.054a.75.75 0 01.63.149z'
                  clipRule='evenodd'
                />
              </svg>
              Music
            </Link>
          </li>
          <li>
            <Link href='/dashboard/Gallery'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z'
                  clipRule='evenodd'
                />
              </svg>
              Gallery
            </Link>
          </li>
          <li>
            <Link href='/dashboard/Bio'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z'
                  clipRule='evenodd'
                />
              </svg>
              Biography
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex-none gap-2'>
        <div className='pr-8'>
          <ToggleSwitch></ToggleSwitch>
        </div>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-ghost btn-circle btn-lg avatar'
          >
            <div className='w-32 rounded-full'>
              <Image
                src={props.image}
                alt=''
                width={200}
                height={200}
                quality={100}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
