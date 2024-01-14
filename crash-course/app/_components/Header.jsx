"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <h3>Header</h3>
      <Link href="/">Homepage</Link>
      <Link href="/blog">Blog</Link>
      <SearchBar/>
    </header>
  );
}