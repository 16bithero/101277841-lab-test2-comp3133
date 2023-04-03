export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_success: boolean;
    details: string;
    links?: {
      mission_patch_small: string;
    };
  }
  