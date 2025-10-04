import NavButtons from "./components/buttons/NavButtons";

export default function Home() {
  return (
    <>
      <nav>
        <NavButtons
          name="Home Button"
          routing="/pages/home"
          styling="text-4xl bg-red-500 border-black border-2 font-serif"
        />
        <NavButtons
          name="Abouts Button"
          routing="/pages/abouts"
          styling="border-green-500 border-8 font-mono"
        />
      </nav>
    </>
  );
}
