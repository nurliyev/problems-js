const is = {
  bool: (value: any): boolean => typeof value === "boolean",
  num: (value: any): boolean => typeof value === "number",
  str: (value: any): boolean => typeof value === "string",
  fun: (value: any): boolean => typeof value === "function",
};

export default is;
