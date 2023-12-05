//@dependencies
import React from "react";

export default function PageContainer({ children, isRoot = false }) {
  return (
    <div
      style={{
        width: isRoot ? "100vw" : "100%",
        height: isRoot ? "100vh" : "100%",
        boxSizing: "border-box",
        ...(!isRoot
          ? {
              padding: "5%",
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
}
