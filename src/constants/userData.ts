export const userData: any = {
  'info@microsoft.com': {
    firstname: 'Harpreet',
    lastname: 'Kaur',
    displayname: 'Harpreet',
    gender: 'Female',
    website: 'morismedia.com',
    address: 'Akshya Nagar 1st Block, Rammurthy Nag…',
    city: 'Bangalore',
    company: 'Microsoft Corporation',
    wrokEmail: 'info@microsoft.com',
    workNumber: '+91 98746 12345',
    companyWebsite: 'microsoft.com',
    workAddress: 'Akshya Nagar 1st Block, Rammurthy Nag…',
    workCity: 'Bangalore'
  }
}

export type MockDataProps = Record<string, {
  password: string
}>

export const users: MockDataProps = {
  'info@microsoft.com': {
    password: '12345'
  }
}
