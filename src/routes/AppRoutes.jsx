import { Route, Routes } from "react-router-dom";

import Layouts from "../components/Layouts";
import Home from "../pages/Home";
import Venues from "../pages/venue/Venues";
import GroupeService from "../pages/groupeservice/GroupeService";
import RoomBlock from "../pages/RoomBlock/RoomBlock";
import Garelly from "../pages/Garelly/Garelly";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="venues" element={<Venues />} />
        <Route path="group-services" element={<GroupeService />} />
        <Route path="room-blocks" element={<RoomBlock />} />
        <Route path="gallery" element={<Garelly />} />
      </Route>
    </Routes>
  );
}