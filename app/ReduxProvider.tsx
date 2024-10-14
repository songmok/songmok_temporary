"use client";
import React from "react";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
