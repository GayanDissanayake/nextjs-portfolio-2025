import LeafletTravelWrapper from "@/components/LeafletTravelWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Travel Map | Gayan Dissanayake",
  description: "Explore my journey around the world through an interactive map",
};

export default function TravelMapPage() {
  return <LeafletTravelWrapper />;
}
