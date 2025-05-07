
export type ServiceScope = 'licensing' | 'traffic' | 'documents' | 'other';
export type FieldType = 'text' | 'number' | 'date';

export interface ServiceField {
  name: string;
  type: FieldType;
}

export interface ServiceIdentifier {
  type: 'ID' | 'License' | 'VehicleRegistration' | 'Passport';
}

export interface Service {
  id: string;
  nameEn: string;
  nameFr: string;
  nameSw: string;
  descriptionEn: string;
  descriptionFr: string;
  descriptionSw: string;
  scope: ServiceScope;
  link: string;
  identifiers: ServiceIdentifier[];
  additionalFields: ServiceField[];
  isActive: boolean;
}
