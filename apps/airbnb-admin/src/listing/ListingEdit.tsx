import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TripTitle } from "../trip/TripTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="User"
          label="listingCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <TextInput label="placeSpace" source="placeSpace" />
        <TextInput label="placeType" source="placeType" />
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="wishlist.id"
          reference="Wishlist"
          label="wishlists"
        >
          <SelectInput optionText={WishlistTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
