// components/AppShell.tsx
"use client";
import { useLoader } from "@/utils/LoaderProvider";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useLoader();
  return (
    <>
      {!isLoaded && <Loader />}
      <CustomCursor />
      {children}
    </>
  );
}
