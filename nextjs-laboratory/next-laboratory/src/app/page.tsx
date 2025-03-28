import { AuthContainer } from "./auth/AuthContainer";

export default function Home() {

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <AuthContainer />
    </div>
  );
}
