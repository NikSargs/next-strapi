import Link from "next/link";

export default function Header() {
    const navItems = [
        {
            display: "the camp",
            slug: ""
        },
        {
            display: "the exp",
            slug: "exp"
        },
        {
            display: "the blog",
            slug: "blog"
        }
    ]
  return (
    <header className="header">
        <img className="header__logo" src="/assets/logo.svg" alt="" />
        <ul className="header__nav">
            {navItems.map((item) => (
                <li key={item.slug}>
                    <Link href={`/${item.slug}`}>
                        <h5>{item.display}</h5></Link>
                </li> 
            ))}   
        </ul>
        <Link href="/events">
            <button className="btn btn--black btn--small">BOOK NOW</button>
        </Link>
    </header>
  );
}