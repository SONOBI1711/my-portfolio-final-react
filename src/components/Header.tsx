import Button from "./Button";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="w-full h-[68px] border-b">
      <div className="max-w-[1280px] mx-auto px-[32px] h-full flex justify-between items-center">
        {/* LOGO */}
        <p className="font-bold text-[30px] text-gray-900">{"<SS />"}</p>

        {/* MENU */}
        <div className="flex items-center">
          <ul className="flex items-center space-x-[24px] mr-[48px]">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Work</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/editor">Editor</Link>
            </li>
          </ul>

          {/* RIGHT */}
          <div className="flex items-center space-x-[16px]">
            {/* NOT LOGIN */}
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="primary" size="md">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>

            {/* LOGGED IN */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
