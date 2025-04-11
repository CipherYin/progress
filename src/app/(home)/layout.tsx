"use client"

import { HomeFooter } from "@/modules/home-footer";
import { HomeLayout } from "@/modules/home-layout";

interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
   <div className="overflow-hidden">
    <HomeLayout/>
    <div>
        {children}
    </div>
    <HomeFooter/>
   </div>
  );
};

export default Layout;
