import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function getProductFilters(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  try {
    const filterList = {
      colors: ["red", "blue", "green", "yellow", "purple"],
      styles: ["HEM", "MATTER", "RIMA", "BASAL", "ART"],
      rooms: ["Foyer/EntranceHall", "KitchenRoom", "FamilyRoom", "DiningRoom", "LivingRoom", "MasterBedroom", "Bathroom", "Laundry Room", "Guest Room", "Home Office", "Library"]
    };
    res.status(200).json({ filterList });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: "An error occurred while fetching products filter." });
  }
}
