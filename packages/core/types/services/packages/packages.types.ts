export type SearchPackagesListResponse = {
  status: boolean;
  data: PackagesList;
};

export interface CountryInfo {
  id: number;
  name: string;
  image_url: string;
  gradient_from: string | null;
  gradient_to: string | null;
  code: string;
  code_alpha3: string;
  local_state_code: string | null;
  banner?: string;
}

export type PackagesList = {
  local: Country[];
  regional: Region[];
  global: Country[];
};

export type Country = {
  id: number;
  code: string;
  code_alpha3: string;
  name: string;
  local_state_code: string;
  starts_at: number;
  image_url: string;
  country_detail: any | null;
  href: string;
  slug: string;
  banner: string;
  flag: string;
};

export type Region = {
  id: number;
  name: string;
  code: string;
  image_url: string;
  starts_at: number;
  countries: Country[];
  href: string;
  slug: string;
};

export type TopDestinationsResponse = {
  status: boolean;
  data: Country[];
};

export interface GlobalList {
  href: string;
  countries: Country[];
}

export interface SearchPackagesListReturn {
  local: Country[];
  regional: Region[];
  global: GlobalList;
}

export type GetCountriesWithStartingPriceResponse = {
  status: boolean;
  data: Country[];
};

export interface Continent {
  id: number;
  name: string;
  code?: string;
  created_at: string | null;
  updated_at: string;
  image_url: string;
  slug: string;
  rating: number;
  review: number;
  total_supported_countries: number;
  supported_countries_images: string[];
  href: string;
  starts_at: number;
  flag: string;
}

export interface GetContinentsResponse {
  status: string;
  data: Continent[];
}

export interface GlobalPackagesMeta {
  data: Package[];
  // meta_title: string | null;
  // meta_description: string | null;
  // meta_keywords: string | null;
  // page_description: string | null;
  // page_features: string | null;
  // page_technical_specs: string | null;
  // scriptData: ScriptData;
  // related_countries: string[] | null;
  // global_coverage_image: string | null;
  data_package_type: string | null;
}
export interface GlobalPackageResponse {
  status: boolean;
  // data: GlobalPackagesMeta;
  data: Package[];
}

export type GetCountryPackagesResponse = {
  status: boolean;
  data: Package[];
  country: Country;
};

export type Gradient = {
  gradient_from: string;
  gradient_to: string;
};

export type Coverage = {
  country_name: string;
  image_url: string;
  network_name: string;
  t_2g: boolean;
  th_3g: boolean;
  lte: boolean;
  fiv_5g: boolean;
};

export type Package = {
  id: string;
  external_id: string;
  name: string;
  status: number;
  price: number;
  data_quantity: number;
  data_unit: string;
  voice_quantity: number;
  sms_quantity: number;
  voice_unit: string;
  package_validity: number;
  package_validity_unit: string;
  activation_type: string;
  activation_type_description: string;
  price_currency: string;
  more_info: string | null;
  notes: string | null;
  connectivity: string;
  roaming: boolean;
  local: boolean;
  throttle: boolean;
  unlimited: boolean;
  tether: boolean;
  regional: boolean;
  global: boolean;
  country_id: number;
  region_id: number | null;
  created_at: string;
  updated_at: string;
  type: string;
  unthrottle_data: number | null;
  throttle_speed: number | null;
  info: string | null;
  banner: string;
  local_name: string;
  regional_name: string | null;
  gradient: Gradient;
  other_info: string | null;
  package_type: string;
  coverages: Coverage[];
  countries: Country[];
  data_package_type: string | null;
  original_price?: number;
  discounted_price?: number;
  discount_percentage?: number;
};

export type GetMeataDataResponse = {
  status: boolean;
  data: MetaData;
};

export type MetaData = {
  head_title: string;
  meta_description: string;
  meta_keywords: string;
  page_features: string;
  page_description: string;
  page_technical_specs: string;
  image_url: string;
  created_at: string;
  updated_at: string;
};

export type GetPackagesOfRegionResponse = {
  status: boolean;
  data: Package[];
  region: Country;
};

export type GetGlobalPackagesResponse = {
  status: boolean;
  data: Package[];
};
