import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingCreateInput = {
  listingCreatedBy: UserWhereUniqueInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmeneties: InputJsonValue;
  placeSpace: string;
  placeType: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  wishlist?: WishlistWhereUniqueInput | null;
};
