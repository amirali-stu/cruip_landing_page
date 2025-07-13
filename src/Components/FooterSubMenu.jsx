import React from "react";

function FooterSubMenu({ title, subs }) {
  console.log(subs);
  return (
    <div>
      <span className="text-[#E5E7EB] text-sm font-medium">{title}</span>
      <ul className="flex flex-col gap-y-1.5 mt-2">
        {subs.map((sub) => (
          <li>
            <a
              href="#"
              className="text-indigo-200/65 hover:text-indigo-500 duration-300 text-sm font-medium"
            >
              {sub}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSubMenu;
