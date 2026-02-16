import {
  Country,
  Coverage,
} from "@workspace/core/types/services/packages/packages.types";

export interface GetMyEsimsResponse {
  status: boolean;
  data: Esim[];
}

export interface Esim {
  id: string;
  iccid: string;
  lpa: string;
  matching_id: string;
  qr_code_generation: string;
  smdp_address: string;
  puk: string | null;
  status: string;
  sim_data_service_status: string | null;
  sim_voice_service_status: string | null;
  sim_sms_service_status: string | null;
  status_of_sim: string | null;
  user_id: number;
  sell_status: string;
  archive: number;
  installed_at: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  apn: string | null;
  sim_type: string;
  order_id: string;
  custom_label: string | null;
  affiliate_promo_code_id: string | null;
  affiliate_id: string | null;
  number: string | null;
  sim_plan_type: string;
  last_bundle: LastBundle;
  last_bundle_name: string;
  isExpire: boolean;
  activation_type: string | null;
  activation_type_description: string | null;
  renew: string | null;
  sim_applied: boolean;
}

export interface LastBundle {
  id: string;
  external_id: string;
  package_type_id: string;
  sim_id: string;
  user_id: number;
  date_created: string;
  date_expiry: string | null;
  date_activated: string | null;
  status: string;
  voice_usage_remaining_in_seconds: number | null;
  data_usage_remaining_in_bytes: number | null;
  sms_usage_remaining_in_nums: number | null;
  time_allowance_in_seconds: number | null;
  price: number;
  platform: string | null;
  version: string | null;
  revoked_at: string | null;
  last_refresh_at: string;
  discount_percentage: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  rem_data_quantity: number;
  rem_data_unit: string;
  order_id: string;
  affiliate_promo_code_id: string | null;
  affiliate_id: string | null;
  source_type: string | null;
  package_type_status: string;
  package_type: PackageType;
  quantity: number;
}

export interface PackageType {
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
}

export interface Gradient {
  gradient_from: string;
  gradient_to: string;
}

export interface PendingEsim {
  id: string;
  status: string;
  package_name: string;
  created_at: string;
}

export interface PendingEsimsResponse {
  status: boolean;
  data: PendingEsim[];
}

export interface EsimDetailResponse {
  status: boolean;
  data: EsimDetail;
}

export type EsimDetail = {
  sim: Esim;
  in_use_packages: LastBundle[];
  assigned_packages: LastBundle[];
  completed_packages: LastBundle[];
  revoked_packages: LastBundle[];
  overall_usage: OverallUsage;
  coverage: Coverage[];
  related_packages: PackageType[];
};

export interface OverallUsage {
  initial_data_quantity: number;
  initial_data_unit: string;
  rem_data_quantity: number;
  rem_data_unit: string;
  initial_voice_quantity: number;
  rem_voice_quantity: number;
  initial_sms_quantity: number;
  rem_sms_quantity: number;
  voice_unit: string;
  sms_unit: string;
}
