export interface PersonalInfoData {
  // pan: string;
  // aadhar: string;
  docNum: string;
  emailVerify: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
  accountType: string;
  maritalStatus: string;
  fatherName: string;
  motherName: string;
  occupationType: string;
  companyName: string;
  annualIncome: string;
  employmentStatus: string;
  nomineeName: string;
  nomineeRelation: string;
  nomineeDOB: string;
  nomineeAddress: string;
  accountCity: null;
  accountState: null;
  accountDistrict: null;
  branch: null;
  bank: null;
  guardianName: string;
  guardianAge: string;
  emailCode: string;
  docType: string;
  accountEmail: string;
}

export const districts = [
  "GONDIA",
  "CHANDRAPUR",
  "GADCHIROLI",
  "BHANDARA",
  "YAVATMAL",
  "NAGPUR",
  "WARDHA",
  "WASHIM",
  "BULDHANA",
  "AKOLA",
  "AMRAVATI",
  "MUMBAI",
  "THANE",
  "AURANGABAD",
  "JALNA",
];

export const branches = [
  "MAIN BRANCH",
  "CHANDRAPUR BRANCH",
  "RAJURA BRANCH",
  "NAGBHID BRANCH",
  "CHAMORSHI BRANCH",
  "MUL BRANCH",
  "SALEKASA BRANCH",
  "GONDPIPARI BRANCH",
  "MOHADI BRANCH",
  "BRHAMPURI BRANCH",
  "TUMSAR BRANCH",
  "WADSA BRANCH",
  "AMGAON BRANCH",
  "BHADRAWATI BRANCH",
  "TIRORA BRANCH",
  "MORGAON ARJUNI BRANCH",
  "DHANORA BRANCH",
  "SAOLI BRANCH",
  "PAUNI BRANCH",
  "GOREGAON BRANCH",
  "AHERI BRANCH",
  "BALLARPUR BRANCH",
  "DEORI BRANCH",
  "LAKHANDUR BRANCH",
  "MULCHERA BRANCH",
  "KORCHI BRANCH",
  "KURKHEDA BRANCH",
  "SADAK ARJUNI BRANCH",
  "BHANDARA BRANCH",
  "SAKOLI BRANCH",
  "GADCHIROLI BRANCH",
  "SINDEWAHI BRANCH",
  "LAKHANI BRANCH",
  "ARMORI BRANCH",
  "PADHARKAWADA BRANCH",
  "NAGPUR BRANCH",
  "NER PARSOPANT BRANCH",
  "DARWAH BRANCH",
  "MAUDA BRANCH",
  "BHIWAPUR BRANCH",
  "UMARKHED BRANCH",
  "GHATANJI BRANCH",
  "KUHI BRANCH",
  "DIGRAS BRANCH",
  "NARKHED BRANCH",
  "MAREGAON BRANCH",
  "KANHAN BRANCH",
  "NAGPUR WEALTH",
  "SELOO BRANCH",
  "HINGNA BRANCH",
  "KARANJA GHADGE BRANCH",
  "YAVATMAL BRANCH",
  "SAMUDRAPUR BRANCH",
  "UMRED BRANCH",
  "SAONER BRANCH",
  "KALAMB BRANCH",
  "RALEGAON BRANCH",
  "MANISH NAGAR BRANCH",
  "ARNI BRANCH",
  "MAHAGAON BRANCH",
  "KALMESHWAR BRANCH",
  "WARDHA BRANCH",
  "GANDHI BAUG BRANCH",
  "DEOLI BRANCH",
  "ARVI BRANCH",
  "PARSHIVNI BRANCH",
  "ASHTI BRANCH",
  "RAMTEK BRANCH",
  "ZARIJAMN BRANCH",
  "WANI BRANCH",
  "HINGANGHAT BRANCH",
  "PUSAD BRANCH",
  "KATOL BRANCH",
  "MANORA BRANCH",
  "DEULGAON BRANCH",
  "WASHIM BRANCH",
  "MEHAKAR BRANCH",
  "BULDANA BRANCH",
  "MALKAPUR BRANCH",
  "KHAMGAON BRANCH",
  "CHIKHALI BRANCH",
  "JALGOAN JAMOD",
  "SANGRAMPUR BRANCH",
  "KARANJA LAD BRANCH",
  "LONAR BRANCH",
  "RISOD BRANCH",
  "MANGLURPIR BRANCH",
  "NANDURA BRANCH",
  "SHEGAON BRANCH",
  "MALEGAON BRANCH",
  "AKOT BRANCH",
  "PATUR BRANCH",
  "PARATWADA BRANCH",
  "CHANDUR RAILWAY BRANCH",
  "AMRAVATI BRANCH",
  "DARYAPUR BRANCH",
  "AKOLA BRANCH",
  "MORSHI BRANCH",
  "CHANDUR BAZAAR BRANCH",
  "WARUD BRANCH",
  "MURTIJAPUR BRANCH",
  "ANJANGAON BRANCH",
  "MALAD BRANCH",
  "KOPARKHAIRANE BRANCH",
  "THANE BRANCH",
  "KALYAN BRANCH",
  "MAROL BRANCH",
  "ULHASNAGAR BRANCH",
  "AURANGBAD BRANCH",
  "JALNA BRANCH",
];

export const branchesWithDistrict = [
  { district: "GONDIA", branchName: "MAIN BRANCH", branchCode: "MBR02" },
  {
    district: "CHANDRAPUR",
    branchName: "CHANDRAPUR BRANCH",
    branchCode: "CDP27",
  },
  {
    district: "CHANDRAPUR",
    branchName: "RAJURA BRANCH",
    branchCode: "RJR39",
  },
  {
    district: "CHANDRAPUR",
    branchName: "NAGBHID BRANCH",
    branchCode: "NGD29",
  },
  {
    district: "GADCHIROLI",
    branchName: "CHAMORSHI BRANCH",
    branchCode: "CHA67",
  },
  {
    district: "CHANDRAPUR",
    branchName: "MUL BRANCH",
    branchCode: "MUL57",
  },
  {
    district: "GONDIA",
    branchName: "SALEKASA BRANCH",
    branchCode: "SLK17",
  },
  {
    district: "CHANDRAPUR",
    branchName: "GONDPIPARI BRANCH",
    branchCode: "GON64",
  },
  {
    district: "BHANDARA",
    branchName: "MOHADI BRANCH",
    branchCode: "MOH10",
  },
  {
    district: "CHANDRAPUR",
    branchName: "BRHAMPURI BRANCH",
    branchCode: "BRM34",
  },
  {
    district: "BHANDARA",
    branchName: "TUMSAR BRANCH",
    branchCode: "TUM03",
  },
  {
    district: "GADCHIROLI",
    branchName: "WADSA BRANCH",
    branchCode: "WDS23",
  },
  {
    district: "GONDIA",
    branchName: "AMGAON BRANCH",
    branchCode: "AMG07",
  },
  {
    district: "CHANDRAPUR",
    branchName: "BHADRAWATI BRANCH",
    branchCode: "BRW48",
  },
  {
    district: "GONDIA",
    branchName: "TIRORA BRANCH",
    branchCode: "TIR04",
  },
  {
    district: "GONDIA",
    branchName: "MORGAON ARJUNI BRANCH",
    branchCode: "MOR20",
  },
  {
    district: "GADCHIROLI",
    branchName: "DHANORA BRANCH",
    branchCode: "DNR100",
  },
  {
    district: "CHANDRAPUR",
    branchName: "SAOLI BRANCH",
    branchCode: "SAL81",
  },
  {
    district: "BHANDARA",
    branchName: "PAUNI BRANCH",
    branchCode: "PUN28",
  },
  {
    district: "GONDIA",
    branchName: "GOREGAON BRANCH",
    branchCode: "GOR14",
  },
  {
    district: "GADCHIROLI",
    branchName: "AHERI BRANCH",
    branchCode: "AHR93",
  },
  {
    district: "CHANDRAPUR",
    branchName: "BALLARPUR BRANCH",
    branchCode: "BLP49",
  },
  { district: "GONDIA", branchName: "DEORI BRANCH", branchCode: "DEO18" },
  {
    district: "BHANDARA",
    branchName: "LAKHANDUR BRANCH",
    branchCode: "LKD37",
  },
  {
    district: "GADCHIROLI",
    branchName: "MULCHERA BRANCH",
    branchCode: "MUL92",
  },
  {
    district: "GADCHIROLI",
    branchName: "KORCHI BRANCH",
    branchCode: "KRC99",
  },
  {
    district: "GADCHIROLI",
    branchName: "KURKHEDA BRANCH",
    branchCode: "KUR43",
  },
  {
    district: "GONDIA",
    branchName: "SADAK ARJUNI BRANCH",
    branchCode: "SADA15",
  },
  {
    district: "BHANDARA",
    branchName: "BHANDARA BRANCH",
    branchCode: "BDR05",
  },
  {
    district: "BHANDARA",
    branchName: "SAKOLI BRANCH",
    branchCode: "SKL22",
  },
  {
    district: "GADCHIROLI",
    branchName: "GADCHIROLI BRANCH",
    branchCode: "GRL26",
  },
  {
    district: "CHANDRAPUR",
    branchName: "SINDEWAHI BRANCH",
    branchCode: "SIN63",
  },
  {
    district: "BHANDARA",
    branchName: "LAKHANI BRANCH",
    branchCode: "LKN21",
  },
  {
    district: "GADCHIROLI",
    branchName: "ARMORI BRANCH",
    branchCode: "ARM52",
  },
  {
    district: "YAVATMAL",
    branchName: "PADHARKAWADA BRANCH",
    branchCode: "PDK44",
  },
  {
    district: "NAGPUR",
    branchName: "NAGPUR BRANCH",
    branchCode: "NAG06",
  },
  {
    district: "YAVATMAL",
    branchName: "NER PARSOPANT BRANCH",
    branchCode: "NPT85",
  },
  {
    district: "YAVATMAL",
    branchName: "DARWAH BRANCH",
    branchCode: "DRW45",
  },
  { district: "NAGPUR", branchName: "MAUDA BRANCH", branchCode: "MDA08" },
  {
    district: "NAGPUR",
    branchName: "BHIWAPUR BRANCH",
    branchCode: "BHI42",
  },
  {
    district: "YAVATMAL",
    branchName: "UMARKHED BRANCH",
    branchCode: "UMR46",
  },
  {
    district: "YAVATMAL",
    branchName: "GHATANJI BRANCH",
    branchCode: "GHT84",
  },
  { district: "NAGPUR", branchName: "KUHI BRANCH", branchCode: "KHU62" },
  {
    district: "YAVATMAL",
    branchName: "DIGRAS BRANCH",
    branchCode: "DIG68",
  },
  {
    district: "NAGPUR",
    branchName: "NARKHED BRANCH",
    branchCode: "NAR40",
  },
  {
    district: "YAVATMAL",
    branchName: "MAREGAON BRANCH",
    branchCode: "MRG98",
  },
  {
    district: "NAGPUR",
    branchName: "KANHAN BRANCH",
    branchCode: "KAN16",
  },
  {
    district: "NAGPUR",
    branchName: "NAGPUR WEALTH",
    branchCode: "NAW106",
  },
  {
    district: "WARDHA",
    branchName: "SELOO BRANCH",
    branchCode: "SELU74",
  },
  {
    district: "NAGPUR",
    branchName: "HINGNA BRANCH",
    branchCode: "HIG09",
  },
  {
    district: "WARDHA",
    branchName: "KARANJA GHADGE BRANCH",
    branchCode: "KNJ70",
  },
  {
    district: "YAVATMAL",
    branchName: "YAVATMAL BRANCH",
    branchCode: "YTM25",
  },
  {
    district: "WARDHA",
    branchName: "SAMUDRAPUR BRANCH",
    branchCode: "SMD60",
  },
  { district: "NAGPUR", branchName: "UMRED BRANCH", branchCode: "UMR41" },
  {
    district: "NAGPUR",
    branchName: "SAONER BRANCH",
    branchCode: "SNR12",
  },
  {
    district: "YAVATMAL",
    branchName: "KALAMB BRANCH",
    branchCode: "KLM58",
  },
  {
    district: "YAVATMAL",
    branchName: "RALEGAON BRANCH",
    branchCode: "RAL65",
  },
  {
    district: "NAGPUR",
    branchName: "MANISH NAGAR BRANCH",
    branchCode: "MSN61",
  },
  {
    district: "YAVATMAL",
    branchName: "ARNI BRANCH",
    branchCode: "ARNI78",
  },
  {
    district: "YAVATMAL",
    branchName: "MAHAGAON BRANCH",
    branchCode: "MAH69",
  },
  {
    district: "NAGPUR",
    branchName: "KALMESHWAR BRANCH",
    branchCode: "KMS30",
  },
  {
    district: "WARDHA",
    branchName: "WARDHA BRANCH",
    branchCode: "WRD24",
  },
  {
    district: "NAGPUR",
    branchName: "GANDHI BAUG BRANCH",
    branchCode: "GDB11",
  },
  { district: "WARDHA", branchName: "DEOLI BRANCH", branchCode: "DEO71" },
  { district: "WARDHA", branchName: "ARVI BRANCH", branchCode: "ARV83" },
  {
    district: "NAGPUR",
    branchName: "PARSHIVNI BRANCH",
    branchCode: "PRS13",
  },
  { district: "WARDHA", branchName: "ASHTI BRANCH", branchCode: "AST75" },
  {
    district: "NAGPUR",
    branchName: "RAMTEK BRANCH",
    branchCode: "RTK31",
  },
  {
    district: "YAVATMAL",
    branchName: "ZARIJAMN BRANCH",
    branchCode: "ZRM101",
  },
  {
    district: "YAVATMAL",
    branchName: "WANI BRANCH",
    branchCode: "WNI38",
  },
  {
    district: "WARDHA",
    branchName: "HINGANGHAT BRANCH",
    branchCode: "HNG94",
  },
  {
    district: "YAVATMAL",
    branchName: "PUSAD BRANCH",
    branchCode: "PSD59",
  },
  { district: "NAGPUR", branchName: "KATOL BRANCH", branchCode: "KAT19" },
  {
    district: "WASHIM",
    branchName: "MANORA BRANCH",
    branchCode: "MNR54",
  },
  {
    district: "BULDHANA",
    branchName: "DEULGAON BRANCH",
    branchCode: "DEG103",
  },
  {
    district: "WASHIM",
    branchName: "WASHIM BRANCH",
    branchCode: "WSM35",
  },
  {
    district: "BULDHANA",
    branchName: "MEHAKAR BRANCH",
    branchCode: "MEH79",
  },
  {
    district: "BULDHANA",
    branchName: "BULDANA BRANCH",
    branchCode: "BLD36",
  },
  {
    district: "BULDHANA",
    branchName: "MALKAPUR BRANCH",
    branchCode: "MAL72",
  },
  {
    district: "BULDHANA",
    branchName: "KHAMGAON BRANCH",
    branchCode: "KHM96",
  },
  {
    district: "BULDHANA",
    branchName: "CHIKHALI BRANCH",
    branchCode: "CHK73",
  },
  {
    district: "BULDHANA",
    branchName: "JALGOAN JAMOD",
    branchCode: "JMD91",
  },
  {
    district: "BULDHANA",
    branchName: "SANGRAMPUR BRANCH",
    branchCode: "SNG87",
  },
  {
    district: "WASHIM",
    branchName: "KARANJA LAD BRANCH",
    branchCode: "KRJ51",
  },
  {
    district: "BULDHANA",
    branchName: "LONAR BRANCH",
    branchCode: "LNR80",
  },
  { district: "WASHIM", branchName: "RISOD BRANCH", branchCode: "RIS86" },
  {
    district: "WASHIM",
    branchName: "MANGLURPIR BRANCH",
    branchCode: "MGP77",
  },
  {
    district: "BULDHANA",
    branchName: "NANDURA BRANCH",
    branchCode: "NDR95",
  },
  {
    district: "BULDHANA",
    branchName: "SHEGAON BRANCH",
    branchCode: "SHE104",
  },
  {
    district: "WASHIM",
    branchName: "MALEGAON BRANCH",
    branchCode: "MLG53",
  },
  { district: "AKOLA", branchName: "AKOT BRANCH", branchCode: "AKT97" },
  { district: "AKOLA", branchName: "PATUR BRANCH", branchCode: "PTR88" },
  {
    district: "AMRAVATI",
    branchName: "PARATWADA BRANCH",
    branchCode: "PRTW89",
  },
  {
    district: "AMRAVATI",
    branchName: "CHANDUR RAILWAY BRANCH",
    branchCode: "CHA66",
  },
  {
    district: "AMRAVATI",
    branchName: "AMRAVATI BRANCH",
    branchCode: "AMR33",
  },
  {
    district: "AMRAVATI",
    branchName: "DARYAPUR BRANCH",
    branchCode: "DRP50",
  },
  { district: "AKOLA", branchName: "AKOLA BRANCH", branchCode: "AKL32" },
  {
    district: "AMRAVATI",
    branchName: "MORSHI BRANCH",
    branchCode: "MOR90",
  },
  {
    district: "AMRAVATI",
    branchName: "CHANDUR BAZAAR BRANCH",
    branchCode: "CHD56",
  },
  {
    district: "AMRAVATI",
    branchName: "WARUD BRANCH",
    branchCode: "WRD55",
  },
  {
    district: "AKOLA",
    branchName: "MURTIJAPUR BRANCH",
    branchCode: "MRJ76",
  },
  {
    district: "AMRAVATI",
    branchName: "ANJANGAON BRANCH",
    branchCode: "ANG102",
  },
  {
    district: "MUMBAI",
    branchName: "MALAD BRANCH",
    branchCode: "MLD108",
  },
  {
    district: "MUMBAI",
    branchName: "KOPARKHAIRANE BRANCH",
    branchCode: "KOP111",
  },
  { district: "THANE", branchName: "THANE BRANCH", branchCode: "THN109" },
  {
    district: "THANE",
    branchName: "KALYAN BRANCH",
    branchCode: "KLA110",
  },
  {
    district: "MUMBAI",
    branchName: "MAROL BRANCH",
    branchCode: "MRL107",
  },
  {
    district: "THANE",
    branchName: "ULHASNAGAR BRANCH",
    branchCode: "ULH117",
  },
  {
    district: "AURANGABAD",
    branchName: "AURANGBAD BRANCH",
    branchCode: "AUR112",
  },
  { district: "JALNA", branchName: "JALNA BRANCH", branchCode: "JLN113" },
];
