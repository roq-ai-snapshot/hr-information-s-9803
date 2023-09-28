import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessOwnerInterface {
  id?: string;
  business_name: string;
  business_type: string;
  business_address: string;
  business_city: string;
  business_state: string;
  business_zip_code: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BusinessOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_name?: string;
  business_type?: string;
  business_address?: string;
  business_city?: string;
  business_state?: string;
  business_zip_code?: string;
  user_id?: string;
}
