
import { useQuery } from "@tanstack/react-query";
import { fetchDynamicServices } from "@/services/api";
import { Service, ServiceCategory } from "@/types/service";

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchDynamicServices,
  });
};

export const useServicesByCategory = (category?: ServiceCategory) => {
  const { data, isLoading, error } = useServices();
  
  const filteredData = category 
    ? data?.filter(service => service.category === category)
    : data;
    
  return {
    data: filteredData,
    isLoading,
    error
  };
};
