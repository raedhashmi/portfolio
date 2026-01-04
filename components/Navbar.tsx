"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b0e14]/70 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold tracking-wide">raed.dev</span>

        <NavigationMenu.Root>
          <NavigationMenu.List className="flex gap-6 text-sm text-slate-400">
            <NavigationMenu.Item className="hover:text-slate-200 cursor-pointer">
              Projects
            </NavigationMenu.Item>
            <NavigationMenu.Item className="hover:text-slate-200 cursor-pointer">
              Infrastructure
            </NavigationMenu.Item>
            <NavigationMenu.Item className="hover:text-slate-200 cursor-pointer">
              Contact
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
}
