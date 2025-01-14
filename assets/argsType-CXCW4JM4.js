const t=`[{
  card?: SolarisCardProps,
  checkbox?: {
    checked?: boolean,
    name?: string
  },
  disabled?: boolean,
  radio?: {
    defaultValue?: string
    name?: string
    value?: string
  },
  toggleText?: string
}]`,e=["Clickable","Selectable single","Selectable multiple","Editable"],o={nested:{description:"Enable/disable nested mode",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},options:{description:"Define Start Date properties.",table:{type:{summary:"Array",detail:t}}},setItemClass:{description:"Inserting classes into each element of the loop",table:{type:{summary:"string"}}},showMoreWhenSelected:{description:"Show more when a nested item is selected",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{description:"Choose from a predefined list of styles for the global component",table:{type:{summary:e}},defaultValue:{summary:"Clickable"},control:{type:"select",options:e},options:e},slotTileBody:{description:"Use the slot named *tileBody* if you need to add several elements to the tile body and the `bodyText` property isn't enough.",table:{category:"Slots"}},tileFooter:{description:"Use the slot named *tileBFooter* if you have a specific element to add at the footer.",table:{category:"Slots"}},tileExtra:{description:"Use the *tileExtra* slot to complete the lower part of the tile, according to your needs.",table:{category:"Slots"}},tileMedias:{description:"Use the slot named *tileMedias* if you have a specific element to add to the left of the image, according to your needs.",table:{category:"Slots"}}};export{o as c};
