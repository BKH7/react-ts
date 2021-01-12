import React from "react";

export default function App() {
  return (
    <>
      {/* header */}
      <div className="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white px-6 py-3 border-b border-gray-300">
        <div className="flex-none w-56 flex flex-row items-center">
          <button
            id="sliderBtn"
            className="flex-none mr-4 text-right text-gray-900 hidden md:block"
          >
            <i className="fad fa-list-ul" />
          </button>
          <img src="img/logo.png" className="w-10 flex-none" />
          <strong className="capitalize ml-1 flex-1">Cleopatra</strong>
        </div>
        <button
          id="navbarToggle"
          className="hidden md:block md:fixed right-0 mr-6"
        >
          <i className="fad fa-chevron-double-down" />
        </button>
        <div
          id="navbar"
          className="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center"
        >
          <div className="text-gray-600 md:w-full md:flex md:flex-row md:justify-evenly md:pb-10 md:mb-10 md:border-b md:border-gray-200">
            {/* short menu */}
          </div>
          <div className="flex flex-row-reverse items-center">
            <div className="dropdown relative md:static">
              <button className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center">
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="img/user.svg"
                  />
                </div>
                <div className="ml-2 capitalize flex ">
                  <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">
                    bunlert274
                  </h1>
                  <i className="fad fa-chevron-down ml-2 text-xs leading-none" />
                </div>
              </button>
              <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow" />
              <div className="text-gray-500 menu hidden md:mt-10 md:w-full rounded bg-white shadow-md absolute z-20 right-0 w-40 mt-5 py-2 animated faster">
                <a
                  className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
                  href="/"
                >
                  <i className="fad fa-user-edit text-xs mr-1" />
                  edit my profile
                </a>
                <hr />
                <a
                  className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
                  href="/"
                >
                  <i className="fad fa-user-times text-xs mr-1" />
                  log out
                </a>
              </div>
            </div>
            <div className="dropdown relative mr-5 md:static">
              <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                <i className="fad fa-bells" />
              </button>
              <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow" />
              <div className="menu hidden rounded bg-white md:right-0 md:w-full shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                  <h1>notifications</h1>
                  <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                    <strong>5</strong>
                  </div>
                </div>
                <hr />
                <a
                  className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
                  href="/"
                >
                  <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                    <i className="fad fa-birthday-cake text-sm" />
                  </div>
                  <div className="flex-1 flex flex-rowbg-green-100">
                    <div className="flex-1">
                      <h1 className="text-sm font-semibold">poll..</h1>
                      <p className="text-xs text-gray-500">text here also</p>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <p>4 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />
                <div className="px-4 py-2 mt-2">
                  <a
                    href="/"
                    className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500"
                  >
                    view all
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}
      {/* main warpper */}
      <div className="h-screen flex flex-row flex-wrap">
        {/* sidebar */}
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

            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Dashboard
            </a>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
              user account
            </p>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Users management
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Permission management
            </a>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
              ERP
            </p>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Planned
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Import Plan
            </a>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
              jobs
            </p>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Production management
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Operator management
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Shift management
            </a>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
              assets
            </p>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Groups management
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Machines management
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Devices management
            </a>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
              visualize
            </p>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Summary report
            </a>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
              history
            </p>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              OEE
            </a>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
              downtime
            </p>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Breakdoen management
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Key downtime
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Downtime timeline information
            </a>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
              settings
            </p>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Company
            </a>
            <a
              href="/"
              className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
            >
              <i className="fad fa-chart-pie text-xs mr-2" />
              Notifications
            </a>
          </div>
        </div>
        {/* end sidebar */}
        <div className="bg-gray-100 flex-1 p-6 md:mt-16">content here</div>
      </div>
      {/* end main warpper */}
    </>
  );
}
