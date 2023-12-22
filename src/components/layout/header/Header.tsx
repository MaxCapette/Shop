import Link from "next/link";
import Sneaker from "../../sneaker/page";
import "./header.css";
import Image from "next/image";
import DarkTheme from "./DarkTheme/DarkTheme";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center">
        <DarkTheme />
        <Link href="/">
          <Sneaker />
        </Link>
        <ul  className="">
          <li className="navUlLi">
            <a className="headerLink" href="#"><Image id="burger" src="/images/burger2.png" alt="" width={75} height={75} />
            </a>
          <ul className="navUlUl">
            <li className="dropdown-li">
              <a className="headerLink" href="/products">All Products</a>
            </li>
            <li className="dropdown-li">
              <a className="headerLink" href="#">About us</a>
            </li>
            <li className="dropdown-li">
              <a className="headerLink" href="#">Other</a>
            </li>
          </ul>
        </li>
        </ul>
      </nav>
    </header>
  );
}
