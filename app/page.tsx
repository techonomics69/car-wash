import React from "react";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import { Dashboard } from "./components/Dashboard";
import { ListingCard } from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import Navbar from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

const Home = async () => {
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Navbar currentUser={currentUser} />
      <Dashboard currentUser={currentUser} />
      <Container>
        <div>
          <div
            className="grid
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3
                      gap-8"
          >
            <ListingCard />
            <div className="border-[1px] h-10 w-10 block">CARD</div>
            <div className="border-[1px] h-10 w-10 block">CARD</div>
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
