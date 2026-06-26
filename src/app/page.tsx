import HomeClient from "./HomeClient";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return <HomeClient />;
}
