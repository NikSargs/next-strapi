import Link from "next/link";

export default function Footer() {
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
    const policies = [
        {
            display: "the camp",
            slug: ""
        },
        {
            display: "Imprint",
            slug: "/imp"
        },
        {
            display: "Terms",
            slug: "/terms"
        },
        {
            display: "Data",
            slug: "/data"
        }
    ]
  return (
    <footer className="footer">
        <nav className="footer__nav">
            <img className="footer__logo" src="/assets/logo.svg" alt="" />
            <ul className="footer__links">
                {navItems.map((item) => (
                    <li key={item.slug}>
                        <Link href={`/${item.slug}`}><h5>{item.display}</h5></Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="footer__policies">
                <ul className="footer__policies-nav">
                    {policies.map((policy) => (
                        <li key={policy.slug}>
                            <Link href={`/${policy.slug}`}><p>{policy.display}</p></Link>
                        </li>
                    ))}
                </ul>
                <p className="copy">Copyright</p>
        </div>
    </footer>
  );
}