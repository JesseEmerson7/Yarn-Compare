import Link from "next/link";

export default function Header(){
    return(
        <header>
            <img src="/images/logo.png" alt="yarn Compare Logo" height={100} width={100} />
            <Link href={"/"}>Allie's Yarn Compare</Link>
            <ul>
                <li><button>Profile</button></li>
                <li><button>options</button></li>
            </ul>
        </header>
        
    );
}