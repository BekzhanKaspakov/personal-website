import Logo from "../icons/logo";

export function Header() {
  return (
    <header className="sticky top-0 flex w-full border-b bg-gray-100  bg-opacity-80 border-gray-200 px-6 py-4 backdrop-blur-md font-medium">
      <a href="/" className="logo flex-initial w-10 h-10">
        <Logo />
      </a>
      <nav className="flex-1">
        <ul className="flex justify-end gap-3 items-center">
          <li className="p-3 hover:text-black text-gray-900">About me</li>
          <li className="p-3 hover:text-black text-gray-500">Blog</li>
        </ul>
      </nav>
    </header>
  );
}
