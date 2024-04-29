import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background max-h-screen">
      <nav className="flex bg-[#3B82F6] justify-between items-center border-b w-8/12 mx-auto mt-10 border-border h-20 px-4 py-2 rounded-md">
        <Logo />
        <div className="text-sm">
          smarter choice for all your data needs
        </div>
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
        </div>
      </nav>
      <main className="flex w-full flex-grow h-full items-center justify-center">{children}</main>
    </div>
  );
}

export default Layout;