const provider = {
  'cards': {
    'basic_information': 'Basic information',
    'basic_hint': '',
    'location': 'Location information',
    'location_hint': '',
    'marketing': 'Marketing Information',
    'marketing_hint': 'Marketing Information for the Provider',
    'maturity': 'Maturity Information',
    'maturity_hint': 'Maturity Information for the Provider',
    'contact': 'Contact Information',
    'main_contact': 'Main Contact/Service Owner',
    'public_contact': 'Public Contact',
    'other': 'Other Information',
    'other_hint': '',

  },
  'fields': {
    'logo': 'Service provider Logo',
    'description': 'Service provider Description',
    'name': 'Service provider Name',
    'contact': 'Contact',
    'pd_bai_3_legal_entity': 'PD.BAI.3 Legal Entity',
    'pd_bai_3_legal_status': 'PD.BAI.3 Legal Status',
    'pd_bai_0_id': 'PD.BAI.0 ID',
    'pd_bai_1_name': 'PD.BAI.1 Name',
    'pd_bai_2_abbreviation': 'PD.BAI.2 Abbreviation',
    'pd_bai_4_website': 'PD.BAI.4 Website',
    'pd_loi_1_street_name_and_number': 'PD.LOI.1 - Street Name and Number',
    'pd_loi_2_postal_code': 'PD.LOI.2 - Postal Code',
    'pd_loi_3_city': 'PD.LOI.3 - City',
    'pd_loi_4_region': 'PD.LOI.4 - Region',
    'pd_loi_5_country_or_territory': 'PD.LOI.5 - Country or Territory',
    'pd_mri_1_description': 'PD.MRI.1 - Description',
    'pd_mri_2_logo': 'PD.MRI.2 - Logo',
    'pd_mri_3_multimedia': 'PD.MRI.3 - Multimedia',
    'pd_mti_1_life_cycle_status': 'PD.MTI.1 - Life Cycle Status',
    'pd_mti_2_certifications': 'PD.MTI.2 - Certifications',
    'main_contact': 'Main Contact/Service Owner',
    'public_contact': 'Public Contact',
    'mc_first_name': 'PD.COI.1 - First Name',
    'mc_last_name': 'PD.COI.2 - Last Name',
    'mc_email': 'PD.COI.3 - Email',
    'mc_phone': 'PD.COI.4 - Phone',
    'mc_position': 'PD.COI.5 - Position',
    'pc_first_name': 'PD.COI.6 - First Name',
    'pc_last_name': 'PD.COI.7 - Last Name',
    'pc_email': 'PD.COI.8 - Email',
    'pc_phone': 'PD.COI.9 - Phone',
    'pc_position': 'PD.COI.10 - Position',
    'pd_oth_4_networks': 'PD.OTH.4 - Networks',
    'pd_oth_5_structure_type': 'PD.OTH.5 - Structure Type'
  },
  'hints': {
    'name': '',
    'description': '',
    'logo': '',
    'contact': 'Contact email',
    'pd_bai_3_legal_entity': 'Is the provider a legal entity?',
    'pd_bai_3_legal_status': 'Legal Status of the Service Provider',
    'pd_bai_0_id': 'Unique identifier of the provider',
    'pd_bai_1_name': 'Full Name of the Provider offering the resource and acting as main contact point.',
    'pd_bai_2_abbreviation': 'Abbreviation or Short name of the Provider',
    'pd_bai_4_website': 'Website with information about the Provider.',
    'pd_loi_1_street_name_and_number': 'Street and number of the Provider\'s physical location.<br />example: Christou Lada Str.',
    'pd_loi_2_postal_code': 'Postal code of the Provider\'s physical location.<br />example: 10561',
    'pd_loi_3_city': 'City that the Provider is located in.<br />example: Athens',
    'pd_loi_4_region': 'Region that the Provider is located in.<br />example: Attika',
    'pd_loi_5_country_or_territory': 'Select a Country or Territory that the Provider is located in.<br />example: Greece',
    'pd_mri_1_description': 'The description of the Provider',
    'pd_mri_2_logo': 'Link to the logo/visual identity of the Provider',
    'pd_mri_3_multimedia': 'Link toCurrent status of the Provider/Research infrastucture lifecycle',
    'pd_mti_2_certifications': 'List of certifications obtained for the Provider (including the certification body and any certificate number).',
    'main_contact': 'This info will not be publicly exposed',
    'public_contact': 'This info will be exposed to public API ',
    'pd_oth_4_networks': '<br />Select the networks the Provider is participating in.',
    'pd_oth_5_structure_type': '<br />Define the providers structure types'
  },
  'belongs': {
    'name': 'Provider',
    'hint': ''
  },
  'menu': 'Providers'
};

export { provider };
