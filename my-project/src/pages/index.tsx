import Header from "@/components/Header";
import Filter from "@/components/Filter";
import Card from "@/components/Card";

export default function App() {
  return (
    <>
      <Header />
      <Filter />
      <Card page={1}/>
    </>
  );
}
