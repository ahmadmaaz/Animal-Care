import React from 'react'
import { Navbar } from 'flowbite-react';
type Props = {}

function NavbarElem({}: Props) {
  return (
    <Navbar className='sticky top-0  py-8 border-b-2 border-gray-300  '  >
      <Navbar.Brand href="https://flowbite.com/">
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          MO4PAWS
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <button className='py-1.5 px-6 mr-2 md:mr-0 text-[#1c2e58] border-2 border-[#1c2e58] rounded-md font-mono hover:bg-[#1c2e58] hover:text-white transition duration-300 '>DONATE</button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true} className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">About</Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">Pets</Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">Blogs</Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">Volunteer</Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarElem