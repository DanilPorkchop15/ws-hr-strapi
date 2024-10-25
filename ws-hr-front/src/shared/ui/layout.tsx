import React, { memo } from "react";

export const Layout = memo(function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <img alt="ws-logo" className="absolute left-10 top-10" src="/assets/ws_logo.svg" />
      <div className="w-full max-w-[560px] flex flex-col items-center">
        {children}
        <footer className="fixed bottom-10 w-full max-w-[1180px]">
          <div className="flex justify-center ">
            <p className="text-center text-gray-500">2024 © Work Solutions</p>
          </div>
          <img alt="ws-logo" className="absolute right-0 bottom-2" src="/assets/ws_logo_sm.svg" />
        </footer>
      </div>
    </div>
  );
});
