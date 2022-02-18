import Image from "next/image";
import { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
  CameraIcon,
  VideoCameraIcon,
  PencilIcon,
  UserIcon,
  UserGroupIcon,
  PhoneIcon,
  GiftIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

//components
const navigation = [
  {
    name: "Services",
    href: "/",
    hasSubnav: true,
    subNav: [
      {
        name: "Photo Editing",
        href: "/photo-editing",
        description: "See prices of photo editing",
        icon: CameraIcon,
      },
      {
        name: "Video Editing",
        href: "/video-editing",
        description: "See prices of video editing",
        icon: VideoCameraIcon,
      },
      {
        name: "Twilight Editing",
        href: "/virtual-twilight-editing",
        description: "See prices of virtual twilight editing",
        icon: PencilIcon,
      },
    ],
  },
  {
    name: "Company",
    href: "/",
    hasSubnav: true,
    subNav: [
      {
        name: "About Us",
        href: "/about",
        description: "About the Company",
        icon: UserIcon,
      },
      {
        name: "Our Team",
        href: "/our-team",
        description: "Meet the Team!",
        icon: UserGroupIcon,
      },
      {
        name: "Contact",
        href: "/contact",
        description: "Contact Us",
        icon: PhoneIcon,
      },
    ],
  },
  {
    name: "Showcase",
    href: "/showcase",
    hasSubnav: false,
  },
  {
    name: "Booking",
    href: "/",
    hasSubnav: true,
    subNav: [
      {
        name: "Packages",
        href: "/packages",
        description: "See Packages",
        icon: GiftIcon,
      },
      {
        name: "Free Trial",
        href: "/trial",
        description: "1 week free trial!",
        icon: AcademicCapIcon,
      },
    ],
  },
];
let subnav = [];
navigation.map((data) => {
  if (data.hasSubnav)
    data.subNav.map((nav) => {
      subnav = [...subnav, nav];
    });
});
const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you are already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function login() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <span>Welcome, {user.name}</span>
        <Link href="/api/auth/logout">
          <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
            Logout
          </a>
        </Link>
      </div>
    );
  }

  return (
    <Link href="/api/auth/login">
      <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
        Login
      </a>
    </Link>
  );
}

export const Navigation = () => {
  const router = useRouter();

  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navigation.map((item) =>
              !item.hasSubnav ? (
                <Link href={item.href} key={item.name}>
                  {/*active class: text-base font-medium text-gray-900 hover:text-gray-900 border-b-2 border-indigo-500 pb-1*/}
                  <a
                    className={
                      router.asPath == item.href
                        ? "text-base font-medium text-gray-900 hover:text-gray-900 border-b-2 border-indigo-500 pb-1"
                        : "text-base font-medium text-gray-500 hover:text-gray-900"
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              ) : (
                <Popover className="relative" key={item.name}>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {item.subNav.map((item) => (
                                <Link href={item.href} key={item.name}>
                                  <a
                                    className={classNames(
                                      router.asPath == item.href
                                        ? "bg-gray-100"
                                        : "",
                                      "-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    )}
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                                      <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              )
            )}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a href="/api/auth/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign inz
              </a> */}
            {/* <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
              > */}
            {login()}
            {/* </a> */}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {subnav.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) =>
                    !item.hasSubnav ? (
                      <Link href={item.href} key={item.name}>
                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                          {item.name}
                        </a>
                      </Link>
                    ) : (
                      ""
                    )
                  )}
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-gray-900">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};
