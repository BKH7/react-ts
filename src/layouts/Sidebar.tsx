import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

interface Menu {
  title: string;
  path?: string;
  icon?: string;
}

interface MainMenu extends Menu {
  submenu: Menu[];
}

export function Sidebar() {
  const menu: MainMenu[] = [
    { title: "Dashboard", path: "/", icon: "chart-pie",  submenu: []},
    { title: "user account", submenu: [
      { path: "/user", title: "Users management", icon: "chart-pie"},
      { path: "/permission", title: "Permission management", icon: "chart-pie"},
    ]},
    { title: "erp", submenu: [
      { path: "/planner", title: "Planner", icon: "chart-pie"},
      { path: "/import-machine", title: "Import Machine", icon: "chart-pie"},
    ]},
  ]

  const mainMenu = (m: MainMenu, i: number) => (
    <Link to={{ pathname: m.path }}
      className="mb-2 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
      key={i}
    >
      <i className={`fad text-xs mr-2 fa-${m.icon}`} />
      {m.title}
    </Link>
  );

  const subMenu = (m: MainMenu, i: number) => (
    <Fragment key={i}>
      <p className="uppercase text-xs text-gray-600 mb-3 mt-3 tracking-wider">
        {m.title}
      </p>
      {m.submenu.map((x: Menu, i2: number) => (
        <Link to={{ pathname: x.path}}
          className="mb-2 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          key={i2}
        >
          <i className={`fad text-xs mr-2 fa-${x.icon}`} />
          {x.title}
        </Link>
      ))}
    </Fragment>
  );

  return (
    <div
      id="sideBar"
      className="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster"
    >
      <div className="flex flex-col">
        <div className="text-right hidden md:block mb-4">
          <button id="sideBarHideBtn">
            <i className="fad fa-times-circle" />
          </button>
        </div>
        {menu.map((x: MainMenu, i: number) => (x.submenu.length > 0) ? subMenu(x, i) : mainMenu(x, i))}
      </div>
    </div>
  );
}
