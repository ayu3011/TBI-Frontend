import Image from "next/image";

import React from "react";
export const Logo = () => (
  <div className="flex gap-2">
    <Image src='/kietlogo.svg' width={50} height={50} alt="image" />
    <Image src='/tbilogo.svg' width={50} height={50} alt="image" />
  </div>

);
