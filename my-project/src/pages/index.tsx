import Header from "@/components/Header";
import Filter from "@/components/Filter";
import Card from "@/components/Card";
import Load from "@/components/Load";
import { useState } from "react";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleLoadMore = () => {
    setCurrentPage((prevPage: number) => prevPage + 1);
  };

  return (
    <>
      <Header />
      <Filter />
      <Card page={currentPage} />
      <Load onClick={handleLoadMore} />
    </>
  );
};

export default App;
