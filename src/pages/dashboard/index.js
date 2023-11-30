import ProfileMenu from "../../components/profile/profileMenu";
import { useGeolocated } from "react-geolocated";
import Sidebar from "../../components/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardPage() {
  return (
    <>
      <Sidebar></Sidebar>
    </>
  );
}
