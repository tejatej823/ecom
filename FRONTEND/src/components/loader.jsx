import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
    </div>
  );
};

export default Loader;
