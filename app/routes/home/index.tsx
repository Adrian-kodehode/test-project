import ChatCard from "../../components/ChatCard";
import Buttons from "../../components/Buttons";
import Contributors from "../../components/Contributors";
import List from "../../components/List";
import ImageTiles from "~/components/ImageTiles";

export default function home() {
  return (
    <div>
      <ChatCard />
      <ImageTiles />
      <List />
      <Buttons />
      <Contributors />
    </div>
  );
}
