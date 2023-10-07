"use client";
import { classNames } from "@/utils";
import React from "react";
import {
  CloudArrowUpIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { bottomTotalItems, navItems, logo } from "./data";

const EditPersonalInfo = () => {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
        <nav className="mx-auto flex max-w-7xl items-center py-2">
          <div className="mr-4 w-12 shrink-0 sm:w-16">{logo}</div>
          <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
            <input
              className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2"
              placeholder="Search"
            />
            <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
              <MagnifyingGlassIcon className=" h-4 w-4" />
            </span>
          </div>
          <button className="ml-auto sm:hidden">
            <MagnifyingGlassIcon className=" h-6 w-6" />
          </button>
          <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
            <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
            <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
            <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
          </button>
          <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
            <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
              <span className="inline-block w-12">{logo}</span>
              <button className="inline-block w-8">
                <XCircleIcon />
              </button>
            </div>
            <ul className="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">
              {navItems
                .filter((item) => !item.mobileView)
                .map((item) => (
                  <li key={item.name} className="w-full">
                    <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                      <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
            </ul>

            <div className="mb-8 mt-auto px-4 sm:mb-0 sm:mt-0 sm:px-0">
              <button className="flex w-full gap-4 text-left sm:items-center">
                <img
                  src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="React-Patterns"
                  className="h-16 w-16 shrink-0 rounded-full sm:h-12 sm:w-12"
                />

                <div className="w-full pt-2 sm:hidden">
                  <h6 className="font-semibold">React Patterns</h6>
                  <p className="text-sm text-gray-300">@reactpatterns</p>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
          <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
            {navItems.map((item, i, arr) => (
              <li
                key={item.name}
                className={classNames(
                  item.mobileView ? "" : "hidden sm:block",
                  arr.length - i === bottomTotalItems ? "mt-auto" : "",
                )}
              >
                <button className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    {item.icon}
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
          <div className="relative min-h-[150px] w-full pt-[16.28%]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
                alt="cover-photo"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <input type="file" id="cover-image" className="hidden" />
              <label
                htmlFor="cover-image"
                className="inline-block h-10 w-10 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white"
              >
                <CloudArrowUpIcon />
              </label>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-4 pb-4 pt-6">
              <div className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                <img
                  src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Channel"
                  className="h-full w-full"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <input type="file" id="profile-image" className="hidden" />
                  <label
                    htmlFor="profile-image"
                    className="inline-block h-8 w-8 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white"
                  >
                    <CloudArrowUpIcon />
                  </label>
                </div>
              </div>

              <div className="mr-auto inline-block">
                <h1 className="font-bolg text-xl">React Patterns</h1>
                <p className="text-sm text-gray-400">@reactpatterns</p>
              </div>

              <div className="inline-block">
                <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                  View channel
                </button>
              </div>
            </div>

            <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
              <li className="w-full">
                <button className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">
                  Personal Information
                </button>
              </li>
              <li className="w-full">
                <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                  Channel Information
                </button>
              </li>
              <li className="w-full">
                <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                  Change Password
                </button>
              </li>
            </ul>

            <div className="flex flex-wrap justify-center gap-y-4 py-4">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <h5 className="font-semibold">Personal Info</h5>
                <p className="text-gray-300">
                  Update your photo and personal details.
                </p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/3">
                <div className="rounded-lg border">
                  <div className="flex flex-wrap gap-y-4 p-4">
                    <div className="w-full lg:w-1/2 lg:pr-2">
                      <label htmlFor="firstname" className="mb-1 inline-block">
                        First name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                        id="firstname"
                        placeholder="Enter first name"
                        defaultValue="React"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-2">
                      <label htmlFor="lastname" className="mb-1 inline-block">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                        id="lastname"
                        placeholder="Enter last name"
                        defaultValue="Patterns"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="lastname" className="mb-1 inline-block">
                        Email address
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300">
                          <EnvelopeIcon />
                        </div>
                        <input
                          type="email"
                          className="w-full rounded-lg border bg-transparent py-1.5 pl-10 pr-2"
                          id="lastname"
                          placeholder="Enter email address"
                          defaultValue="patternsreact@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="border border-gray-300" />
                  <div className="flex items-center justify-end gap-4 p-4">
                    <button className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10">
                      Cancel
                    </button>
                    <button className="inline-block bg-[#ae7aff] px-3 py-1.5 text-black">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditPersonalInfo;
