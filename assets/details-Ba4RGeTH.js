const e=`{
  groupName: string (deprecated),
  legend: string,
  parent: {
    aria: { [key: string]: string },
    id: string,
    name: string,
    value: string,
    checked: boolean,
    disabled: boolean
  },
  optionsList: [
    {
      aria: { [key: string]: string },
      id: string,
      name: string,
      value: string,
      checked: boolean
    }
  ]
}`,s=`{
  [key: string]: string
}`,i=`{
  active: boolean,
  message: string
}`;export{i as a,e as b,s as d};
