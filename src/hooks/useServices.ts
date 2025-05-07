
import { useQuery } from "@tanstack/react-query";
import { fetchDynamicServices } from "@/services/api";
import { Service } from "@/types/service";

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchDynamicServices,
  });
};
