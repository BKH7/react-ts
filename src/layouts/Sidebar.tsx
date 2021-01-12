import React from "react";

export function Sidebar() {
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
  );
}
