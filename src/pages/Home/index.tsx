import React from "react";

import { Todo } from "../../components";

export function Home() {
  return (
    <div className="bg-gray-100 flex-1 p-6 md:mt-16">
      <Todo />
    </div>
  );
}
