"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MobileNav() {
  const [activeMenu, setActiveMenu] = useState([-1, -1]);
  const pathname = usePathname();

  const isChildActive = (links) => {
    let isActive = false;
    links.forEach((element) => {
      if (
        element.link &&
        element.link?.split("/")[1] == pathname?.split("/")[1]
      ) {
        isActive = true;
      } else if (element.subMenuItems) {
        element.subMenuItems.forEach((element2) => {
          if (
            element2.link &&
            element2.link?.split("/")[1] == pathname?.split("/")[1]
          ) {
            isActive = true;
          }
        });
      }
    });

    return isActive;
  };
  return (
    <>
      {menuItems.map((elm, i) => (
        <li
          key={i}
          className={`${
            elm.subMenuItems
              ? "menu-item-has-children submenu-item-has-children"
              : ""
          }

          ${activeMenu[0] == i ? "active-class" : ""}
          `}
        >
          {elm.subMenuItems ? (
            <>
              <a
                href="#"
                onClick={() =>
                  setActiveMenu((pre) => {
                    return pre[0] == i ? [-1, false] : [i, false];
                  })
                }
                className={isChildActive(elm.subMenuItems) ? "activeMenu" : ""}
              >
                {elm.title}
                <span className="mean-expand-class"></span>
              </a>

              <ul
                className="sub-menu submenu-class menu-open overflow-hidden"
                style={
                  activeMenu[0] == i
                    ? { maxHeight: "500px" }
                    : { maxHeight: "0px" }
                }
              >
                {elm.subMenuItems.map((elm2, i2) => (
                  <li
                    key={i2}
                    className={`${
                      elm2.subMenuItems
                        ? "menu-item-has-children submenu-item-has-children"
                        : ""
                    }
                    ${activeMenu[1] == i2 ? "active-class" : ""}
                    `}
                  >
                    {elm2.subMenuItems ? (
                      <>
                        <a
                          href="#"
                          onClick={() => {
                            setActiveMenu((pre) => {
                              return pre[1] == i2 ? [pre[0], -1] : [pre[0], i2];
                            });
                          }}
                          className={
                            isChildActive(elm2.subMenuItems)
                              ? "activeMenu2"
                              : ""
                          }
                        >
                          {elm2.title}
                          <span className="mean-expand-class"></span>
                          <span className="mean-expand-class"></span>
                        </a>
                        <ul
                          className="sub-menu submenu-class overflow-hidden"
                          style={
                            activeMenu[1] == i2
                              ? { maxHeight: "500px" }
                              : { maxHeight: "0px" }
                          }
                        >
                          {elm2.subMenuItems.map((elm3, i3) => (
                            <li key={i3}>
                              <Link
                                scroll={false}
                                className={
                                  elm3.link?.split("/")[1] ==
                                  pathname?.split("/")[1]
                                    ? "activeMenu2"
                                    : ""
                                }
                                href={elm3.link}
                              >
                                {elm3.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        scroll={false}
                        className={
                          elm2.link?.split("/")[1] == pathname?.split("/")[1]
                            ? "activeMenu2"
                            : ""
                        }
                        href={elm2.link}
                      >
                        {elm2.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              scroll={false}
              className={
                elm.link?.split("/")[1] == pathname?.split("/")[1]
                  ? "activeMenu"
                  : ""
              }
              href={elm.link}
            >
              {elm.title}
            </Link>
          )}
        </li>
      ))}
    </>
  );
}
