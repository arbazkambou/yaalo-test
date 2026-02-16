import { useQuery } from "@tanstack/react-query";
import { getSupportedDeviceList } from "@workspace/core/services/misc/compatible.services";
import { useState } from "react";

export function useCompatibleDevices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  const { data: supportedDevices = [], isLoading } = useQuery({
    queryKey: ["supported-devices"],
    queryFn: getSupportedDeviceList,
  });

  const filteredBrands = Array.from(
    new Set(supportedDevices.map((device) => device.type))
  );
  const filteredDevices = supportedDevices.filter((device) => {
    return (
      device.type
        .toLowerCase()
        .trim()
        .includes(selectedBrand.toLowerCase().trim()) &&
      device.model
        .toLowerCase()
        .trim()
        .includes(searchQuery.toLowerCase().trim())
    );
  });

  return {
    setSearchQuery,
    searchQuery,
    filteredBrands,
    filteredDevices,
    setSelectedBrand,
    selectedBrand,
    isLoading,
    selectedDevice,
    setSelectedDevice,
  };
}
