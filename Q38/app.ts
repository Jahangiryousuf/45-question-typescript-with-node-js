function describe_city (city :string ,country :string="pakistan"){
    console.log(`${city} is in  ${country}`);
    
}
//country is a default  and city value void we should add city value
describe_city('karachi')

describe_city("lahore")

//change other city which is not in pakistan

describe_city("uk","london")