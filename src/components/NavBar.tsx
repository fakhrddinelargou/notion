import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <Menu as="nav" className="relative inline-block text-left bg-gray-100 p-4 rounded">
      <Menu.Button className="px-4 py-2 bg-blue-600 text-white rounded">
        القائمة
      </Menu.Button>

      <Menu.Items className="absolute mt-2 w-40 bg-white border rounded shadow-lg">
        <Menu.Item>
          {({ active }: { active: boolean }) => (
            <Link
              to="/"
              className={`block px-4 py-2 rounded ${active ? "bg-blue-100 text-blue-700" : "text-black"}`}
            >
              الرئيسية
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }: { active: boolean }) => (
            <Link
              to="/about"
              className={`block px-4 py-2 rounded ${active ? "bg-blue-100 text-blue-700" : "text-black"}`}
            >
              حول
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }: { active: boolean }) => (
            <Link
              to="/contact"
              className={`block px-4 py-2 rounded ${active ? "bg-blue-100 text-blue-700" : "text-black"}`}
            >
              اتصل بنا
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

