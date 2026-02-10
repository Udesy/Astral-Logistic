"use client";

import { useState } from "react";
import Header from "./Header";
import MenuOverlay from "../ui/MenuOverlay";

export default function ClientLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <MenuOverlay showMenu={showMenu} setShowMenu={setShowMenu} />
      <main>{children}</main>
    </>
  );
}
