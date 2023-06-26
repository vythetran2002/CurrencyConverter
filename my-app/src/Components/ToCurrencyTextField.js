import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import '../Styles/style.css'
// Currencies table
const currencyMappings = {
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudan Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTC": "Bitcoin",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswanan Pula",
    "BYN": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLF": "Chilean Unit of Account (UF)",
    "CLP": "Chilean Peso",
    "CNH": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón",
    "CUC": "Cuban Convertible Peso",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Republic Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "GBP": "British Pound",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanaese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Sheqel",
    "IMP": "Manx pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Króna",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgystani Som",
    "KHR": "Cambodian Riel",
    "KMF": "Comorian Franc",
    "KPW": "North Korean Won",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Laotian Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Myanma Kyat",
    "MNT": "Mongolian Tugrik",
    "MOP": "Macanese Pataca",
    "MRU": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan Córdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Nuevo Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Zloty",
    "PYG": "Paraguayan Guarani",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLL": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "SSP": "South Sudanese Pound",
    "STD": "São Tomé and Príncipe Dobra (pre-2018)",
    "STN": "São Tomé and Príncipe Dobra",
    "SVC": "Salvadoran Colón",
    "SYP": "Syrian Pound",
    "SZL": "Swazi Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Pa'anga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "US Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistan Som",
    "VEF": "Venezuelan Bolívar Fuerte (Old)",
    "VES": "Venezuelan Bolívar Soberano",
    "VND": "Vietnamese Dong",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tala",
    "XAF": "CFA Franc BEAC",
    "XAG": "Silver Ounce",
    "XAU": "Gold Ounce",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special Drawing Rights",
    "XOF": "CFA Franc BCEAO",
    "XPD": "Palladium Ounce",
    "XPF": "CFP Franc",
    "XPT": "Platinum Ounce",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
};

//Input:abbreviation ; output: Full name of the currency
function convertAbbreviationToCurrency(abbreviation) {
    const currency = currencyMappings[abbreviation];
    return currency ? currency : null;
}

//Input: Full name of the currency; output: abbreviation
function convertCurrencyToAbbreviation(currency) {
    for (const [abbreviation, value] of Object.entries(currencyMappings)) {
        if (value.toLowerCase() === currency.toLowerCase()) {
            return abbreviation;
        }
    }
    return null;
}


//Get country by their currency in the countries Array
function getCountryByCurrency(currency) {
    return countries.find(country => country.currency === currency);
}

export default function ToCurrencyTextField({ onChange, currency }) {


    return (
        <Autocomplete
            className="country-select-demo"
            value={getCountryByCurrency(convertAbbreviationToCurrency(currency))}
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.currency}
            onChange={(event, country) => {
                // In case return not null value
                if (country) {
                    // Convert currency to its abbreviation
                    onChange(convertCurrencyToAbbreviation(country.currency));
                }

            }}
            renderOption={(props, option, state) => (
                <Box
                    component="li"
                    key={option.code} // use the code property as the key value
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...props}
                >
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.currency} ({option.country})
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );

}

// From source: https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
    {
        "country": "Afghanistan",
        "currency": "Afghan Afghani",
        "code": "AF"
    },
    {
        "country": "Algeria",
        "currency": "Algerian Dinar",
        "code": "DZ"
    },

    {
        "country": "Argentina",
        "currency": "Argentine Peso",
        "code": "AR"
    },
    {
        "country": "Armenia",
        "currency": "Armenian Dram",
        "code": "AM"
    },
    {
        "country": "Australia",
        "currency": "Australian Dollar",
        "code": "AU"
    },

    {
        "country": "Azerbaijan",
        "currency": "Azerbaijani Manat",
        "code": "AZ"
    },
    {
        "country": "Bahamas",
        "currency": "Bahamian Dollar",
        "code": "BS"
    },
    {
        "country": "Bahrain",
        "currency": "Bahraini Dinar",
        "code": "BH"
    },
    {
        "country": "Bangladesh",
        "currency": "Bangladeshi Taka",
        "code": "BD"
    },
    {
        "country": "Barbados",
        "currency": "Barbadian Dollar",
        "code": "BB"
    },
    {
        "country": "Belarus",
        "currency": "Belarusian Ruble",
        "code": "BY"
    },
    {
        "country": "Belgium",
        "currency": "Euro",
        "code": "BE"
    },
    {
        "country": "Belize",
        "currency": "Belize Dollar",
        "code": "BZ"
    },

    {
        "country": "Bhutan",
        "currency": "Bhutanese Ngultrum",
        "code": "BT"
    },
    {
        "country": "Bolivia",
        "currency": "Bolivian Boliviano",
        "code": "BO"
    },
    {
        "country": "Brazil",
        "currency": "Brazilian Real",
        "code": "BR"
    },
    {
        "country": "Brunei",
        "currency": "Brunei Dollar",
        "code": "BN"
    },
    {
        "country": "Bulgaria",
        "currency": "Bulgarian Lev",
        "code": "BG"
    },

    {
        "country": "Burundi",
        "currency": "Burundian Franc",
        "code": "BI"
    },
    {
        "country": "Cambodia",
        "currency": "Cambodian Riel",
        "code": "KH"
    },

    {
        "country": "Canada",
        "currency": "Canadian Dollar",
        "code": "CA"
    },
    {
        "country": "Cape Verde",
        "currency": "Cape Verdean Escudo",
        "code": "CV"
    },

    {
        "country": "Chile",
        "currency": "Chilean Peso",
        "code": "CL"
    },
    {
        "country": "China",
        "currency": "Chinese Yuan",
        "code": "CN"
    },
    {
        "country": "Colombia",
        "currency": "Colombian Peso",
        "code": "CO"
    },
    {
        "country": "Comoros",
        "currency": "Comorian Franc",
        "code": "KM"
    },
    {
        "country": "Costa Rica",
        "currency": "Costa Rican Colón",
        "code": "CR"
    },

    {
        "country": "Cuba",
        "currency": "Cuban Peso",
        "code": "CU"
    },
    {
        "country": "Democratic Republic of Congo",
        "currency": "Congolese Franc",
        "code": "CD"
    },
    {
        "country": "Denmark",
        "currency": "Danish Krone",
        "code": "DK"
    },
    {
        "country": "Djibouti",
        "currency": "Djiboutian Franc",
        "code": "DJ"
    },

    {
        "country": "Dominican Republic",
        "currency": "Dominican Peso",
        "code": "DO"
    },

    {
        "country": "Egypt",
        "currency": "Egyptian Pound",
        "code": "EG"
    },

    {
        "country": "Eritrea",
        "currency": "Eritrean Nakfa",
        "code": "ER"
    },

    {
        "country": "Eswatini",
        "currency": "Swazi Lilangeni",
        "code": "SZ"
    },
    {
        "country": "Ethiopia",
        "currency": "Ethiopian Birr",
        "code": "ET"
    },
    {
        "country": "Fiji",
        "currency": "Fijian Dollar",
        "code": "FJ"
    },

    {
        "country": "Gambia",
        "currency": "Gambian Dalasi",
        "code": "GM"
    },
    {
        "country": "Georgia",
        "currency": "Georgian Lari",
        "code": "GE"
    },

    {
        "country": "Ghana",
        "currency": "Ghanaian Cedi",
        "code": "GH"
    },

    {
        "country": "Grenada",
        "currency": "East Caribbean Dollar",
        "code": "GD"
    },
    {
        "country": "Guatemala",
        "currency": "Guatemalan Quetzal",
        "code": "GT"
    },
    {
        "country": "Guinea",
        "currency": "Guinean Franc",
        "code": "GN"
    },
    {
        "country": "Haiti",
        "currency": "Haitian Gourde",
        "code": "HT"
    },
    {
        "country": "Honduras",
        "currency": "Honduran Lempira",
        "code": "HN"
    },
    {
        "country": "Hungary",
        "currency": "Hungarian Forint",
        "code": "HU"
    },
    {
        "country": "Iceland",
        "currency": "Icelandic Króna",
        "code": "IS"
    },
    {
        "country": "India",
        "currency": "Indian Rupee",
        "code": "IN"
    },
    {
        "country": "Indonesia",
        "currency": "Indonesian Rupiah",
        "code": "ID"
    },
    {
        "country": "Iran",
        "currency": "Iranian Rial",
        "code": "IR"
    },
    {
        "country": "Iraq",
        "currency": "Iraqi Dinar",
        "code": "IQ"
    },

    {
        "country": "Israel",
        "currency": "Israeli New Shekel",
        "code": "IL"
    },

    {
        "country": "Jamaica",
        "currency": "Jamaican Dollar",
        "code": "JM"
    },
    {
        "country": "Japan",
        "currency": "Japanese Yen",
        "code": "JP"
    },
    {
        "country": "Jordan",
        "currency": "Jordanian Dinar",
        "code": "JO"
    },
    {
        "country": "Kazakhstan",
        "currency": "Kazakhstani Tenge",
        "code": "KZ"
    },
    {
        "country": "Kenya",
        "currency": "Kenyan Shilling",
        "code": "KE"
    },

    {
        "country": "Kuwait",
        "currency": "Kuwaiti Dinar",
        "code": "KW"
    },
    {
        "country": "Lebanon",
        "currency": "Lebanese Pound",
        "code": "LB"
    },
    {
        "country": "Lesotho",
        "currency": "Lesotho Loti",
        "code": "LS"
    },
    {
        "country": "Liberia",
        "currency": "Liberian Dollar",
        "code": "LR"
    },
    {
        "country": "Libya",
        "currency": "Libyan Dinar",
        "code": "LY"
    },


    {
        "country": "Madagascar",
        "currency": "Malagasy Ariary",
        "code": "MG"
    },
    {
        "country": "Malaysia",
        "currency": "Malaysian Ringgit",
        "code": "MY"
    },
    {
        "country": "Maldives",
        "currency": "Maldivian Rufiyaa",
        "code": "MV"
    },


    {
        "country": "Mauritania",
        "currency": "Mauritanian Ouguiya",
        "code": "MR"
    },
    {
        "country": "Mauritius",
        "currency": "Mauritian Rupee",
        "code": "MU"
    },
    {
        "country": "Mexico",
        "currency": "Mexican Peso",
        "code": "MX"
    },

    {
        "country": "Moldova",
        "currency": "Moldovan Leu",
        "code": "MD"
    },

    {
        "country": "Morocco",
        "currency": "Moroccan Dirham",
        "code": "MA"
    },

    {
        "country": "Namibia",
        "currency": "Namibian Dollar",
        "code": "NA"
    },

    {
        "country": "Nepal",
        "currency": "Nepalese Rupee",
        "code": "NP"
    },

    {
        "country": "New Zealand",
        "currency": "New Zealand Dollar",
        "code": "NZ"
    },
    {
        "country": "Nicaragua",
        "currency": "Nicaraguan Córdoba",
        "code": "NI"
    },

    {
        "country": "Nigeria",
        "currency": "Nigerian Naira",
        "code": "NG"
    },
    {
        "country": "North Korea",
        "currency": "North Korean Won",
        "code": "KP"
    },
    {
        "country": "North Macedonia",
        "currency": "Macedonian Denar",
        "code": "MK"
    },
    {
        "country": "Norway",
        "currency": "Norwegian Krone",
        "code": "NO"
    },
    {
        "country": "Oman",
        "currency": "Omani Rial",
        "code": "OM"
    },
    {
        "country": "Pakistan",
        "currency": "Pakistani Rupee",
        "code": "PK"
    },

    {
        "country": "Panama",
        "currency": "Panamanian Balboa",
        "code": "PA"
    },
    {
        "country": "Papua New Guinea",
        "currency": "Papua New Guinean Kina",
        "code": "PG"
    },
    {
        "country": "Paraguay",
        "currency": "Paraguayan Guaraní",
        "code": "PY"
    },
    {
        "country": "Philippines",
        "currency": "Philippine Peso",
        "code": "PH"
    },

    {
        "country": "Romania",
        "currency": "Romanian Leu",
        "code": "RO"
    },
    {
        "country": "Russia",
        "currency": "Russian Ruble",
        "code": "RU"
    },
    {
        "country": "Rwanda",
        "currency": "Rwandan Franc",
        "code": "RW"
    },

    {
        "country": "Saudi Arabia",
        "currency": "Saudi Riyal",
        "code": "SA"
    },
    {
        "country": "Serbia",
        "currency": "Serbian Dinar",
        "code": "RS"
    },
    {
        "country": "Seychelles",
        "currency": "Seychellois Rupee",
        "code": "SC"
    },
    {
        "country": "Sierra Leone",
        "currency": "Sierra Leonean Leone",
        "code": "SL"
    },
    {
        "country": "Singapore",
        "currency": "Singapore Dollar",
        "code": "SG"
    },

    {
        "country": "Solomon Islands",
        "currency": "Solomon Islands Dollar",
        "code": "SB"
    },
    {
        "country": "Somalia",
        "currency": "Somali Shilling",
        "code": "SO"
    },
    {
        "country": "South Africa",
        "currency": "South African Rand",
        "code": "ZA"
    },
    {
        "country": "South Korea",
        "currency": "South Korean Won",
        "code": "KR"
    },
    {
        "country": "South Sudan",
        "currency": "South Sudanese Pound",
        "code": "SS"
    },

    {
        "country": "Sri Lanka",
        "currency": "Sri Lankan Rupee",
        "code": "LK"
    },
    {
        "country": "Sudan",
        "currency": "Sudanese Pound",
        "code": "SD"
    },
    {
        "country": "Suriname",
        "currency": "Surinamese Dollar",
        "code": "SR"
    },
    {
        "country": "Sweden",
        "currency": "Swedish Krona",
        "code": "SE"
    },
    {
        "country": "Switzerland",
        "currency": "Swiss Franc",
        "code": "CH"
    },
    {
        "country": "Syria",
        "currency": "Syrian Pound",
        "code": "SY"
    },
    {
        "country": "Taiwan",
        "currency": "New Taiwan Dollar",
        "code": "TW"
    },
    {
        "country": "Tajikistan",
        "currency": "Tajikistani Somoni",
        "code": "TJ"
    },
    {
        "country": "Tanzania",
        "currency": "Tanzanian Shilling",
        "code": "TZ"
    },
    {
        "country": "Thailand",
        "currency": "Thai Baht",
        "code": "TH"
    },


    {
        "country": "Trinidad and Tobago",
        "currency": "Trinidad and Tobago Dollar",
        "code": "TT"
    },
    {
        "country": "Tunisia",
        "currency": "Tunisian Dinar",
        "code": "TN"
    },
    {
        "country": "Turkey",
        "currency": "Turkish Lira",
        "code": "TR"
    },


    {
        "country": "Uganda",
        "currency": "Ugandan Shilling",
        "code": "UG"
    },
    {
        "country": "Ukraine",
        "currency": "Ukrainian Hryvnia",
        "code": "UA"
    },
    {
        "country": "United Arab Emirates",
        "currency": "United Arab Emirates Dirham",
        "code": "AE"
    },

    {
        "country": "United States",
        "currency": "US Dollar",
        "code": "US"
    },
    {
        "country": "Uruguay",
        "currency": "Uruguayan Peso",
        "code": "UY"
    },
    {
        "country": "Uzbekistan",
        "currency": "Uzbekistani Som",
        "code": "UZ"
    },
    {
        "country": "Vanuatu",
        "currency": "Vanuatu Vatu",
        "code": "VU"
    },

    {
        "country": "Venezuela",
        "currency": "Venezuelan Bolívar",
        "code": "VE"
    },
    {
        "country": "Vietnam",
        "currency": "Vietnamese Dong",
        "code": "VN"
    },
    {
        "country": "Yemen",
        "currency": "Yemeni Rial",
        "code": "YE"
    },
    {
        "country": "Zambia",
        "currency": "Zambian Kwacha",
        "code": "ZM"
    },
    {
        "country": "Zimbabwe",
        "currency": "Zimbabwean Dollar",
        "code": "ZW"
    },
    {
        "country": "Hong Kong",
        "currency": "Hong Kong Dollar",
        "code": "HK"
    },
    {
        "country": "England",
        "currency": "British Pound",
        "code": "GB-ENG"
    },
    {
        "country": "New Zealand",
        "currency": "New Zealand Dollar",
        "code": "NZ"
    },
    {
        "country": "Russia",
        "currency": "Russian Ruble",
        "code": "RU"
    },
    {
        "country": "Albania",
        "currency": "Albanian Lek",
        "code": "AL"
    }
]
