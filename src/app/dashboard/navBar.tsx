import Image from "next/image";
type navbarProps = {
  name: string;
  image: string;
};

export default function Navbar(props: navbarProps) {
  return (
    <div className='navbar border-b-2 border-neutral bg-base-100 sticky top-0 z-0 px-5'>
      <div className='flex-1 hidden lg:flex'>
        <a className='btn btn-ghost normal-case text-xl'>Music</a>
        <a className='btn btn-ghost normal-case text-xl'>Gallery</a>
        <a className='btn btn-ghost normal-case text-xl'>Biography</a>
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
            <a>Music</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Biography</a>
          </li>
        </ul>
      </div>
      <div className='flex-none gap-2'>
        <p className='text-lg'> Hello, {props.name}</p>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
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
