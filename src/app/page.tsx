import FormLogin from "./components/login/form";
import Hero from "./components/login/hero";

export default function Home() {
  return (
    <main className=" h-screen flex flex-col md:justify-center md:items-center">
      <div className="flex flex-col md:flex-row h-full md:h-full md:w-full shadow-lg rounded-md">
        <Hero />
        <FormLogin />
      </div>
    </main>
  );
}
