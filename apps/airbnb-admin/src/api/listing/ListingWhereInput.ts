import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingWhereInput = {
  id?: StringFilter;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmeneties?: JsonFilter;
  placeSpace?: StringFilter;
  placeType?: StringFilter;
  trips?: TripListRelationFilter;
  updatedAt?: DateTimeFilter;
  wishlist?: WishlistWhereUniqueInput;
};
