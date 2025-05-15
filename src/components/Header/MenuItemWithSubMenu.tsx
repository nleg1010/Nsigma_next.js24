import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

type MenuItemWithSubMenuProps = {
  item: {
    link: string;
    name: string;
    subMenuItems: Array<{
      name: string;
      link: string;
    }>;
  };
  toggleOpen: () => void;
};

const MenuItemWithSubMenu = ({
  item,
  toggleOpen,
}: MenuItemWithSubMenuProps) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <span className="flex flex-col items-end gap-8">
      <button
        className="flex w-full uppercase hover:text-[#c8ccce]"
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <div className="flex flex-row justify-end gap-2 w-full items-center">
          {item.name}
          <div
            className={`text-2xl transition-transform ${
              subMenuOpen && "rotate-180"
            }`}
          >
            <IoChevronDownOutline />
          </div>
        </div>
      </button>

      {subMenuOpen && (
        <div
          className="flex flex-col"
          style={{ marginTop: "-20px", textAlign: "right", fontSize: "12px" }}
        >
          {item.subMenuItems?.map((subItem, i) => {
            return (
              <Link
                key={i}
                href={subItem.link}
                onClick={() => toggleOpen()}
                style={{ marginTop: "10px" }}
                className="hover:text-[#c8ccce]"
              >
                {subItem.name}
              </Link>
            );
          })}
        </div>
      )}
    </span>
  );
};

export default MenuItemWithSubMenu;
