'use client';

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import Menu from "@/components/menu";
import {title} from "@/components/primitives";

export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="full" position="static">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Menu />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="basis-1/5 sm:basis-full" justify="center">
				<h1 className="font-bold normal-case text-lg sm:text-3xl max-w-[66vw] sm:max-w-full truncate">Random Password Generator</h1>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
			</NavbarContent>


		</NextUINavbar>
	);
};
