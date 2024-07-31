import Link from "next/link";

const Footer = () => {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="flex flex-row justify-center">
          <li class="nav-item">
            <Link href="/" class="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/about" class="nav-link px-2 text-body-secondary">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/documents" class="nav-link px-2 text-body-secondary">
              Documents
            </Link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          
        </ul>
        <p class="text-center text-body-secondary py-4 "><span className="border-b-2 border-black">© 2024 Company, Inc</span></p>
      </footer>
    </div>
  );
};
export default Footer;
