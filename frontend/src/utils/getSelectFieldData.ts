import { OptionType } from "../types/OptionType";

interface DataType {
  id: string;
  name: string;
  origin?: string;
}

export const getSelectFieldData = (data: DataType[]): OptionType[] => {
  return data.map((item) => ({
    label: item.name,
    value: item.id,
    ...(item.origin ? { origin: item.origin } : {}),
  }));
};
