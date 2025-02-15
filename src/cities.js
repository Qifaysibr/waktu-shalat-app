const citiesJSON = [
      {
        code: "1001",
        name: "KAB. LAMPUNG TENGAH"
      },
      {
        code: "1002",
        name: "KAB. LAMPUNG UTARA"
      },
      {
        code: "1003",
        name: "KAB. LAMPUNG SELATAN"
      },
      {
        code: "1004",
        name: "KAB. LAMPUNG BARAT"
      },
      {
        code: "1005",
        name: "KAB. LAMPUNG TIMUR"
      },
      {
        code: "1006",
        name: "KAB. MESUJI"
      },
      {
        code: "1007",
        name: "KAB. PESAWARAN"
      },
      {
        code: "1008",
        name: "KAB. PESISIR BARAT"
      },
      {
        code: "1009",
        name: "KAB. PRINGSEWU"
      },
      {
        code: "1010",
        name: "KAB. TULANG BAWANG"
      },
      {
        code: "1011",
        name: "KAB. TULANG BAWANG BARAT"
      },
      {
        code: "1012",
        name: "KAB. TANGGAMUS"
      },
      {
        code: "1013",
        name: "KAB. WAY KANAN"
      },
      {
        code: "1014",
        name: "KOTA BANDAR LAMPUNG"
      },
      {
        code: "1015",
        name: "KOTA METRO"
      },
      {
        code: "1101",
        name: "KAB. LEBAK"
      },
      {
        code: "1102",
        name: "KAB. PANDEGLANG"
      },
      {
        code: "1103",
        name: "KAB. SERANG"
      },
      {
        code: "1104",
        name: "KAB. TANGERANG"
      },
      {
        code: "1105",
        name: "KOTA CILEGON"
      },
      {
        code: "1106",
        name: "KOTA SERANG"
      },
      {
        code: "1107",
        name: "KOTA TANGERANG"
      },
      {
        code: "1108",
        name: "KOTA TANGERANG SELATAN"
      },
      {
        code: "1201",
        name: "KAB. BANDUNG"
      },
      {
        code: "1202",
        name: "KAB. BANDUNG BARAT"
      },
      {
        code: "1203",
        name: "KAB. BEKASI"
      },
      {
        code: "1204",
        name: "KAB. BOGOR"
      },
      {
        code: "1205",
        name: "KAB. CIAMIS"
      },
      {
        code: "1206",
        name: "KAB. CIANJUR"
      },
      {
        code: "1207",
        name: "KAB. CIREBON"
      },
      {
        code: "1208",
        name: "KAB. GARUT"
      },
      {
        code: "1209",
        name: "KAB. INDRAMAYU"
      },
      {
        code: "1210",
        name: "KAB. KARAWANG"
      },
      {
        code: "1211",
        name: "KAB. KUNINGAN"
      },
      {
        code: "1212",
        name: "KAB. MAJALENGKA"
      },
      {
        code: "1213",
        name: "KAB. PANGANDARAN"
      },
      {
        code: "1214",
        name: "KAB. PURWAKARTA"
      },
      {
        code: "1215",
        name: "KAB. SUBANG"
      },
      {
        code: "1216",
        name: "KAB. SUKABUMI"
      },
      {
        code: "1217",
        name: "KAB. SUMEDANG"
      },
      {
        code: "1218",
        name: "KAB. TASIKMALAYA"
      },
      {
        code: "1219",
        name: "KOTA BANDUNG"
      },
      {
        code: "1220",
        name: "KOTA BANJAR"
      },
      {
        code: "1221",
        name: "KOTA BEKASI"
      },
      {
        code: "1222",
        name: "KOTA BOGOR"
      },
      {
        code: "1223",
        name: "KOTA CIMAHI"
      },
      {
        code: "1224",
        name: "KOTA CIREBON"
      },
      {
        code: "1225",
        name: "KOTA DEPOK"
      },
      {
        code: "1226",
        name: "KOTA SUKABUMI"
      },
      {
        code: "1227",
        name: "KOTA TASIKMALAYA"
      },
      {
        code: "1301",
        name: "KOTA JAKARTA"
      },
      {
        code: "1302",
        name: "KAB. KEPULAUAN SERIBU"
      },
      {
        code: "1401",
        name: "KAB. BANJARNEGARA"
      },
      {
        code: "1402",
        name: "KAB. BANYUMAS"
      },
      {
        code: "1403",
        name: "KAB. BATANG"
      },
      {
        code: "1404",
        name: "KAB. BLORA"
      },
      {
        code: "1405",
        name: "KAB. BOYOLALI"
      },
      {
        code: "1406",
        name: "KAB. BREBES"
      },
      {
        code: "1407",
        name: "KAB. CILACAP"
      },
      {
        code: "1408",
        name: "KAB. DEMAK"
      },
      {
        code: "1409",
        name: "KAB. GROBOGAN"
      },
      {
        code: "1410",
        name: "KAB. JEPARA"
      },
      {
        code: "1411",
        name: "KAB. KARANGANYAR"
      },
      {
        code: "1412",
        name: "KAB. KEBUMEN"
      },
      {
        code: "1413",
        name: "KAB. KENDAL"
      },
      {
        code: "1414",
        name: "KAB. KLATEN"
      },
      {
        code: "1415",
        name: "KAB. KUDUS"
      },
      {
        code: "1416",
        name: "KAB. MAGELANG"
      },
      {
        code: "1417",
        name: "KAB. PATI"
      },
      {
        code: "1418",
        name: "KAB. PEKALONGAN"
      },
      {
        code: "1419",
        name: "KAB. PEMALANG"
      },
      {
        code: "1420",
        name: "KAB. PURBALINGGA"
      },
      {
        code: "1421",
        name: "KAB. PURWOREJO"
      },
      {
        code: "1422",
        name: "KAB. REMBANG"
      },
      {
        code: "1423",
        name: "KAB. SEMARANG"
      },
      {
        code: "1424",
        name: "KAB. SRAGEN"
      },
      {
        code: "1425",
        name: "KAB. SUKOHARJO"
      },
      {
        code: "1426",
        name: "KAB. TEGAL"
      },
      {
        code: "1427",
        name: "KAB. TEMANGGUNG"
      },
      {
        code: "1428",
        name: "KAB. WONOGIRI"
      },
      {
        code: "1429",
        name: "KAB. WONOSOBO"
      },
      {
        code: "1430",
        name: "KOTA MAGELANG"
      },
      {
        code: "1431",
        name: "KOTA PEKALONGAN"
      },
      {
        code: "1432",
        name: "KOTA SALATIGA"
      },
      {
        code: "1433",
        name: "KOTA SEMARANG"
      },
      {
        code: "1434",
        name: "KOTA SURAKARTA"
      },
      {
        code: "1435",
        name: "KOTA TEGAL"
      },
      {
        code: "1501",
        name: "KAB. BANTUL"
      },
      {
        code: "1502",
        name: "KAB. GUNUNGKIDUL"
      },
      {
        code: "1503",
        name: "KAB. KULON PROGO"
      },
      {
        code: "1504",
        name: "KAB. SLEMAN"
      },
      {
        code: "1505",
        name: "KOTA YOGYAKARTA"
      },
      {
        code: "1601",
        name: "KAB. BANGKALAN"
      },
      {
        code: "1602",
        name: "KAB. BANYUWANGI"
      },
      {
        code: "1603",
        name: "KAB. BLITAR"
      },
      {
        code: "1604",
        name: "KAB. BOJONEGORO"
      },
      {
        code: "1605",
        name: "KAB. BONDOWOSO"
      },
      {
        code: "1606",
        name: "KAB. GRESIK"
      },
      {
        code: "1607",
        name: "KAB. JEMBER"
      },
      {
        code: "1608",
        name: "KAB. JOMBANG"
      },
      {
        code: "1609",
        name: "KAB. KEDIRI"
      },
      {
        code: "1610",
        name: "KAB. LAMONGAN"
      },
      {
        code: "1611",
        name: "KAB. LUMAJANG"
      },
      {
        code: "1612",
        name: "KAB. MADIUN"
      },
      {
        code: "1613",
        name: "KAB. MAGETAN"
      },
      {
        code: "1614",
        name: "KAB. MALANG"
      },
      {
        code: "1615",
        name: "KAB. MOJOKERTO"
      },
      {
        code: "1616",
        name: "KAB. NGANJUK"
      },
      {
        code: "1617",
        name: "KAB. NGAWI"
      },
      {
        code: "1618",
        name: "KAB. PACITAN"
      },
      {
        code: "1619",
        name: "KAB. PAMEKASAN"
      },
      {
        code: "1620",
        name: "KAB. PASURUAN"
      },
      {
        code: "1621",
        name: "KAB. PONOROGO"
      },
      {
        code: "1622",
        name: "KAB. PROBOLINGGO"
      },
      {
        code: "1623",
        name: "KAB. SAMPANG"
      },
      {
        code: "1624",
        name: "KAB. SIDOARJO"
      },
      {
        code: "1625",
        name: "KAB. SITUBONDO"
      },
      {
        code: "1626",
        name: "KAB. SUMENEP"
      },
      {
        code: "1627",
        name: "KAB. TRENGGALEK"
      },
      {
        code: "1628",
        name: "KAB. TUBAN"
      },
      {
        code: "1629",
        name: "KAB. TULUNGAGUNG"
      },
      {
        code: "1630",
        name: "KOTA BATU"
      },
      {
        code: "1631",
        name: "KOTA BLITAR"
      },
      {
        code: "1632",
        name: "KOTA KEDIRI"
      },
      {
        code: "1633",
        name: "KOTA MADIUN"
      },
      {
        code: "1634",
        name: "KOTA MALANG"
      },
      {
        code: "1635",
        name: "KOTA MOJOKERTO"
      },
      {
        code: "1636",
        name: "KOTA PASURUAN"
      },
      {
        code: "1637",
        name: "KOTA PROBOLINGGO"
      },
      {
        code: "1638",
        name: "KOTA SURABAYA"
      },
      {
        code: "1701",
        name: "KAB. BADUNG"
      },
      {
        code: "1702",
        name: "KAB. BANGLI"
      },
      {
        code: "1703",
        name: "KAB. BULELENG"
      },
      {
        code: "1704",
        name: "KAB. GIANYAR"
      },
      {
        code: "1705",
        name: "KAB. JEMBRANA"
      },
      {
        code: "1706",
        name: "KAB. KARANGASEM"
      },
      {
        code: "1707",
        name: "KAB. KLUNGKUNG"
      },
      {
        code: "1708",
        name: "KAB. TABANAN"
      },
      {
        code: "1709",
        name: "KOTA DENPASAR"
      },
      {
        code: "1801",
        name: "KAB. BIMA"
      },
      {
        code: "1802",
        name: "KAB. DOMPU"
      },
      {
        code: "1803",
        name: "KAB. LOMBOK BARAT"
      },
      {
        code: "1804",
        name: "KAB. LOMBOK TENGAH"
      },
      {
        code: "1805",
        name: "KAB. LOMBOK TIMUR"
      },
      {
        code: "1806",
        name: "KAB. LOMBOK UTARA"
      },
      {
        code: "1807",
        name: "KAB. SUMBAWA"
      },
      {
        code: "1808",
        name: "KAB. SUMBAWA BARAT"
      },
      {
        code: "1809",
        name: "KOTA BIMA"
      },
      {
        code: "1810",
        name: "KOTA MATARAM"
      },
      {
        code: "1901",
        name: "KAB. ALOR"
      },
      {
        code: "1902",
        name: "KAB. BELU"
      },
      {
        code: "1903",
        name: "KAB. ENDE"
      },
      {
        code: "1904",
        name: "KAB. FLORES TIMUR"
      },
      {
        code: "1905",
        name: "KAB. KUPANG"
      },
      {
        code: "1906",
        name: "KAB. LEMBATA"
      },
      {
        code: "1907",
        name: "KAB. MALAKA"
      },
      {
        code: "1908",
        name: "KAB. MANGGARAI"
      },
      {
        code: "1909",
        name: "KAB. MANGGARAI BARAT"
      },
      {
        code: "1910",
        name: "KAB. MANGGARAI TIMUR"
      },
      {
        code: "1911",
        name: "KAB. NGADA"
      },
      {
        code: "1912",
        name: "KAB. NAGEKEO"
      },
      {
        code: "1913",
        name: "KAB. ROTE NDAO"
      },
      {
        code: "1914",
        name: "KAB. SABU RAIJUA"
      },
      {
        code: "1915",
        name: "KAB. SIKKA"
      },
      {
        code: "1916",
        name: "KAB. SUMBA BARAT"
      },
      {
        code: "1917",
        name: "KAB. SUMBA BARAT DAYA"
      },
      {
        code: "1918",
        name: "KAB. SUMBA TENGAH"
      },
      {
        code: "1919",
        name: "KAB. SUMBA TIMUR"
      },
      {
        code: "1920",
        name: "KAB. TIMOR TENGAH SELATAN"
      },
      {
        code: "1921",
        name: "KAB. TIMOR TENGAH UTARA"
      },
      {
        code: "1922",
        name: "KOTA KUPANG"
      },
      {
        code: "2001",
        name: "KAB. BENGKAYANG"
      },
      {
        code: "2002",
        name: "KAB. KAPUAS HULU"
      },
      {
        code: "2003",
        name: "KAB. KAYONG UTARA"
      },
      {
        code: "2004",
        name: "KAB. KETAPANG"
      },
      {
        code: "2005",
        name: "KAB. KUBU RAYA"
      },
      {
        code: "2006",
        name: "KAB. LANDAK"
      },
      {
        code: "2007",
        name: "KAB. MELAWI"
      },
      {
        code: "2008",
        name: "KAB. MEMPAWAH"
      },
      {
        code: "2009",
        name: "KAB. SAMBAS"
      },
      {
        code: "2010",
        name: "KAB. SANGGAU"
      },
      {
        code: "2011",
        name: "KAB. SEKADAU"
      },
      {
        code: "2012",
        name: "KAB. SINTANG"
      },
      {
        code: "2013",
        name: "KOTA PONTIANAK"
      },
      {
        code: "2014",
        name: "KOTA SINGKAWANG"
      },
      {
        code: "2101",
        name: "KAB. BALANGAN"
      },
      {
        code: "2102",
        name: "KAB. BANJAR"
      },
      {
        code: "2103",
        name: "KAB. BARITO KUALA"
      },
      {
        code: "2104",
        name: "KAB. HULU SUNGAI SELATAN"
      },
      {
        code: "2105",
        name: "KAB. HULU SUNGAI TENGAH"
      },
      {
        code: "2106",
        name: "KAB. HULU SUNGAI UTARA"
      },
      {
        code: "2107",
        name: "KAB. KOTABARU"
      },
      {
        code: "2108",
        name: "KAB. TABALONG"
      },
      {
        code: "2109",
        name: "KAB. TANAH BUMBU"
      },
      {
        code: "2110",
        name: "KAB. TANAH LAUT"
      },
      {
        code: "2111",
        name: "KAB. TAPIN"
      },
      {
        code: "2112",
        name: "KOTA BANJARBARU"
      },
      {
        code: "2113",
        name: "KOTA BANJARMASIN"
      },
      {
        code: "2201",
        name: "KAB. BARITO SELATAN"
      },
      {
        code: "2202",
        name: "KAB. BARITO TIMUR"
      },
      {
        code: "2203",
        name: "KAB. BARITO UTARA"
      },
      {
        code: "2204",
        name: "KAB. GUNUNG MAS"
      },
      {
        code: "2205",
        name: "KAB. KAPUAS"
      },
      {
        code: "2206",
        name: "KAB. KATINGAN"
      },
      {
        code: "2207",
        name: "KAB. KOTAWARINGIN BARAT"
      },
      {
        code: "2208",
        name: "KAB. KOTAWARINGIN TIMUR"
      },
      {
        code: "2209",
        name: "KAB. LAMANDAU"
      },
      {
        code: "2210",
        name: "KAB. MURUNG RAYA"
      },
      {
        code: "2211",
        name: "KAB. PULANG PISAU"
      },
      {
        code: "2212",
        name: "KAB. SUKAMARA"
      },
      {
        code: "2213",
        name: "KAB. SERUYAN"
      },
      {
        code: "2214",
        name: "KOTA PALANGKARAYA"
      },
      {
        code: "2301",
        name: "KAB. BERAU"
      },
      {
        code: "2302",
        name: "KAB. KUTAI BARAT"
      },
      {
        code: "2303",
        name: "KAB. KUTAI KARTANEGARA"
      },
      {
        code: "2304",
        name: "KAB. KUTAI TIMUR"
      },
      {
        code: "2305",
        name: "KAB. MAHAKAM ULU"
      },
      {
        code: "2306",
        name: "KAB. PASER"
      },
      {
        code: "2307",
        name: "KAB. PENAJAM PASER UTARA"
      },
      {
        code: "2308",
        name: "KOTA BALIKPAPAN"
      },
      {
        code: "2309",
        name: "KOTA BONTANG"
      },
      {
        code: "2310",
        name: "KOTA SAMARINDA"
      },
      {
        code: "2401",
        name: "KAB. BULUNGAN"
      },
      {
        code: "2402",
        name: "KAB. MALINAU"
      },
      {
        code: "2403",
        name: "KAB. NUNUKAN"
      },
      {
        code: "2404",
        name: "KAB. TANA TIDUNG"
      },
      {
        code: "2405",
        name: "KOTA TARAKAN"
      },
      {
        code: "2501",
        name: "KAB. BOALEMO"
      },
      {
        code: "2502",
        name: "KAB. BONE BOLANGO"
      },
      {
        code: "2503",
        name: "KAB. GORONTALO"
      },
      {
        code: "2504",
        name: "KAB. GORONTALO UTARA"
      },
      {
        code: "2505",
        name: "KAB. POHUWATO"
      },
      {
        code: "2506",
        name: "KOTA GORONTALO"
      },
      {
        code: "2601",
        name: "KAB. BANTAENG"
      },
      {
        code: "2602",
        name: "KAB. BARRU"
      },
      {
        code: "2603",
        name: "KAB. BONE"
      },
      {
        code: "2604",
        name: "KAB. BULUKUMBA"
      },
      {
        code: "2605",
        name: "KAB. ENREKANG"
      },
      {
        code: "2606",
        name: "KAB. GOWA"
      },
      {
        code: "2607",
        name: "KAB. JENEPONTO"
      },
      {
        code: "2608",
        name: "KAB. KEPULAUAN SELAYAR"
      },
      {
        code: "2609",
        name: "KAB. LUWU"
      },
      {
        code: "2610",
        name: "KAB. LUWU TIMUR"
      },
      {
        code: "2611",
        name: "KAB. LUWU UTARA"
      },
      {
        code: "2612",
        name: "KAB. MAROS"
      },
      {
        code: "2613",
        name: "KAB. PANGKAJENE DAN KEPULAUAN"
      },
      {
        code: "2614",
        name: "KAB. PINRANG"
      },
      {
        code: "2615",
        name: "KAB. SIDENRENG RAPPANG"
      },
      {
        code: "2616",
        name: "KAB. SINJAI"
      },
      {
        code: "2617",
        name: "KAB. SOPPENG"
      },
      {
        code: "2618",
        name: "KAB. TAKALAR"
      },
      {
        code: "2619",
        name: "KAB. TANA TORAJA"
      },
      {
        code: "2620",
        name: "KAB. TORAJA UTARA"
      },
      {
        code: "2621",
        name: "KAB. WAJO"
      },
      {
        code: "2622",
        name: "KOTA MAKASSAR"
      },
      {
        code: "2623",
        name: "KOTA PALOPO"
      },
      {
        code: "2624",
        name: "KOTA PAREPARE"
      },
      {
        code: "2701",
        name: "KAB. BOMBANA"
      },
      {
        code: "2702",
        name: "KAB. BUTON"
      },
      {
        code: "2703",
        name: "KAB. BUTON SELATAN"
      },
      {
        code: "2704",
        name: "KAB. BUTON TENGAH"
      },
      {
        code: "2705",
        name: "KAB. BUTON UTARA"
      },
      {
        code: "2706",
        name: "KAB. KOLAKA"
      },
      {
        code: "2707",
        name: "KAB. KOLAKA TIMUR"
      },
      {
        code: "2708",
        name: "KAB. KOLAKA UTARA"
      },
      {
        code: "2709",
        name: "KAB. KONAWE"
      },
      {
        code: "2710",
        name: "KAB. KONAWE KEPULAUAN"
      },
      {
        code: "2711",
        name: "KAB. KONAWE SELATAN"
      },
      {
        code: "2712",
        name: "KAB. KONAWE UTARA"
      },
      {
        code: "2713",
        name: "KAB. MUNA"
      },
      {
        code: "2714",
        name: "KAB. MUNA BARAT"
      },
      {
        code: "2715",
        name: "KAB. WAKATOBI"
      },
      {
        code: "2716",
        name: "KOTA BAU-BAU"
      },
      {
        code: "2717",
        name: "KOTA KENDARI"
      },
      {
        code: "2801",
        name: "KAB. BANGGAI"
      },
      {
        code: "2802",
        name: "KAB. BANGGAI KEPULAUAN"
      },
      {
        code: "2803",
        name: "KAB. BANGGAI LAUT"
      },
      {
        code: "2804",
        name: "KAB. BUOL"
      },
      {
        code: "2805",
        name: "KAB. DONGGALA"
      },
      {
        code: "2806",
        name: "KAB. MOROWALI"
      },
      {
        code: "2807",
        name: "KAB. MOROWALI UTARA"
      },
      {
        code: "2808",
        name: "KAB. PARIGI MOUTONG"
      },
      {
        code: "2809",
        name: "KAB. POSO"
      },
      {
        code: "2810",
        name: "KAB. SIGI"
      },
      {
        code: "2811",
        name: "KAB. TOJO UNA-UNA"
      },
      {
        code: "2812",
        name: "KAB. TOLI-TOLI"
      },
      {
        code: "2813",
        name: "KOTA PALU"
      },
      {
        code: "2901",
        name: "KAB. BOLAANG MONGONDOW"
      },
      {
        code: "2902",
        name: "KAB. BOLAANG MONGONDOW SELATAN"
      },
      {
        code: "2903",
        name: "KAB. BOLAANG MONGONDOW TIMUR"
      },
      {
        code: "2904",
        name: "KAB. BOLAANG MONGONDOW UTARA"
      },
      {
        code: "2905",
        name: "KAB. KEPULAUAN SANGIHE"
      },
      {
        code: "2906",
        name: "KAB. KEPULAUAN SIAU TAGULANDANG BIARO"
      },
      {
        code: "2907",
        name: "KAB. KEPULAUAN TALAUD"
      },
      {
        code: "2908",
        name: "KAB. MINAHASA"
      },
      {
        code: "2909",
        name: "KAB. MINAHASA SELATAN"
      },
      {
        code: "2910",
        name: "KAB. MINAHASA TENGGARA"
      },
      {
        code: "2911",
        name: "KAB. MINAHASA UTARA"
      },
      {
        code: "2912",
        name: "KOTA BITUNG"
      },
      {
        code: "2913",
        name: "KOTA KOTAMOBAGU"
      },
      {
        code: "2914",
        name: "KOTA MANADO"
      },
      {
        code: "2915",
        name: "KOTA TOMOHON"
      },
      {
        code: "3001",
        name: "KAB. MAJENE"
      },
      {
        code: "3002",
        name: "KAB. MAMASA"
      },
      {
        code: "3003",
        name: "KAB. MAMUJU"
      },
      {
        code: "3004",
        name: "KAB. MAMUJU TENGAH"
      },
      {
        code: "3005",
        name: "KAB. MAMUJU UTARA"
      },
      {
        code: "3006",
        name: "KAB. POLEWALI MANDAR"
      },
      {
        code: "3101",
        name: "KAB. BURU"
      },
      {
        code: "3102",
        name: "KAB. BURU SELATAN"
      },
      {
        code: "3103",
        name: "KAB. KEPULAUAN ARU"
      },
      {
        code: "3104",
        name: "KAB. MALUKU BARAT DAYA"
      },
      {
        code: "3105",
        name: "KAB. MALUKU TENGAH"
      },
      {
        code: "3106",
        name: "KAB. MALUKU TENGGARA"
      },
      {
        code: "3107",
        name: "KAB. MALUKU TENGGARA BARAT"
      },
      {
        code: "3108",
        name: "KAB. SERAM BAGIAN BARAT"
      },
      {
        code: "3109",
        name: "KAB. SERAM BAGIAN TIMUR"
      },
      {
        code: "3110",
        name: "KOTA AMBON"
      },
      {
        code: "3111",
        name: "KOTA TUAL"
      },
      {
        code: "3201",
        name: "KAB. HALMAHERA BARAT"
      },
      {
        code: "3202",
        name: "KAB. HALMAHERA TENGAH"
      },
      {
        code: "3203",
        name: "KAB. HALMAHERA UTARA"
      },
      {
        code: "3204",
        name: "KAB. HALMAHERA SELATAN"
      },
      {
        code: "3205",
        name: "KAB. KEPULAUAN SULA"
      },
      {
        code: "3206",
        name: "KAB. HALMAHERA TIMUR"
      },
      {
        code: "3207",
        name: "KAB. PULAU MOROTAI"
      },
      {
        code: "3208",
        name: "KAB. PULAU TALIABU"
      },
      {
        code: "3209",
        name: "KOTA TERNATE"
      },
      {
        code: "3210",
        name: "KOTA TIDORE KEPULAUAN"
      },
      {
        code: "3211",
        name: "KOTA SOFIFI"
      },
      {
        code: "3212",
        name: "KOTA SOFIFI"
      },
      {
        code: "3301",
        name: "KAB. ASMAT"
      },
      {
        code: "3302",
        name: "KAB. BIAK NUMFOR"
      },
      {
        code: "3303",
        name: "KAB. BOVEN DIGOEL"
      },
      {
        code: "3304",
        name: "KAB. DEIYAI"
      },
      {
        code: "3305",
        name: "KAB. DOGIYAI"
      },
      {
        code: "3306",
        name: "KAB. INTAN JAYA"
      },
      {
        code: "3307",
        name: "KAB. JAYAPURA"
      },
      {
        code: "3308",
        name: "KAB. JAYAWIJAYA"
      },
      {
        code: "3309",
        name: "KAB. KEEROM"
      },
      {
        code: "3310",
        name: "KAB. KEPULAUAN YAPEN"
      },
      {
        code: "3311",
        name: "KAB. LANNY JAYA"
      },
      {
        code: "3312",
        name: "KAB. MAMBERAMO RAYA"
      },
      {
        code: "3313",
        name: "KAB. MAMBERAMO TENGAH"
      },
      {
        code: "3314",
        name: "KAB. MAPPI"
      },
      {
        code: "3315",
        name: "KAB. MERAUKE"
      },
      {
        code: "3316",
        name: "KAB. MIMIKA"
      },
      {
        code: "3317",
        name: "KAB. NABIRE"
      },
      {
        code: "3318",
        name: "KAB. NDUGA"
      },
      {
        code: "3319",
        name: "KAB. PANIAI"
      },
      {
        code: "3320",
        name: "KAB. PEGUNUNGAN BINTANG"
      },
      {
        code: "3321",
        name: "KAB. PUNCAK"
      },
      {
        code: "3322",
        name: "KAB. PUNCAK JAYA"
      },
      {
        code: "3323",
        name: "KAB. SARMI"
      },
      {
        code: "3324",
        name: "KAB. SUPIORI"
      },
      {
        code: "3325",
        name: "KAB. TOLIKARA"
      },
      {
        code: "3326",
        name: "KAB. WAROPEN"
      },
      {
        code: "3327",
        name: "KAB. YAHUKIMO"
      },
      {
        code: "3328",
        name: "KAB. YALIMO"
      },
      {
        code: "3329",
        name: "KOTA JAYAPURA"
      },
      {
        code: "3330",
        name: "KAB. YAPEN WAROPEN"
      },
      {
        code: "3401",
        name: "KAB. FAKFAK"
      },
      {
        code: "3402",
        name: "KAB. KAIMANA"
      },
      {
        code: "3403",
        name: "KAB. MANOKWARI"
      },
      {
        code: "3404",
        name: "KAB. MANOKWARI SELATAN"
      },
      {
        code: "3405",
        name: "KAB. MAYBRAT"
      },
      {
        code: "3406",
        name: "KAB. PEGUNUNGAN ARFAK"
      },
      {
        code: "3407",
        name: "KAB. RAJA AMPAT"
      },
      {
        code: "3408",
        name: "KAB. SORONG"
      },
      {
        code: "3409",
        name: "KAB. SORONG SELATAN"
      },
      {
        code: "3410",
        name: "KAB. TAMBRAUW"
      },
      {
        code: "3411",
        name: "KAB. TELUK BINTUNI"
      },
      {
        code: "3412",
        name: "KAB. TELUK WONDAMA"
      },
      {
        code: "3413",
        name: "KOTA SORONG"
      },
      {
        code: "0101",
        name: "KAB. ACEH BARAT"
      },
      {
        code: "0102",
        name: "KAB. ACEH BARAT DAYA"
      },
      {
        code: "0103",
        name: "KAB. ACEH BESAR"
      },
      {
        code: "0104",
        name: "KAB. ACEH JAYA"
      },
      {
        code: "0105",
        name: "KAB. ACEH SELATAN"
      },
      {
        code: "0106",
        name: "KAB. ACEH SINGKIL"
      },
      {
        code: "0107",
        name: "KAB. ACEH TAMIANG"
      },
      {
        code: "0108",
        name: "KAB. ACEH TENGAH"
      },
      {
        code: "0109",
        name: "KAB. ACEH TENGGARA"
      },
      {
        code: "0110",
        name: "KAB. ACEH TIMUR"
      },
      {
        code: "0111",
        name: "KAB. ACEH UTARA"
      },
      {
        code: "0112",
        name: "KAB. BENER MERIAH"
      },
      {
        code: "0113",
        name: "KAB. BIREUEN"
      },
      {
        code: "0114",
        name: "KAB. GAYO LUES"
      },
      {
        code: "0115",
        name: "KAB. NAGAN RAYA"
      },
      {
        code: "0116",
        name: "KAB. PIDIE"
      },
      {
        code: "0117",
        name: "KAB. PIDIE JAYA"
      },
      {
        code: "0118",
        name: "KAB. SIMEULUE"
      },
      {
        code: "0119",
        name: "KOTA BANDA ACEH"
      },
      {
        code: "0120",
        name: "KOTA LANGSA"
      },
      {
        code: "0121",
        name: "KOTA LHOKSEUMAWE"
      },
      {
        code: "0122",
        name: "KOTA SABANG"
      },
      {
        code: "0123",
        name: "KOTA SUBULUSSALAM"
      },
      {
        code: "0201",
        name: "KAB. ASAHAN"
      },
      {
        code: "0202",
        name: "KAB. BATUBARA"
      },
      {
        code: "0203",
        name: "KAB. DAIRI"
      },
      {
        code: "0204",
        name: "KAB. DELI SERDANG"
      },
      {
        code: "0205",
        name: "KAB. HUMBANG HASUNDUTAN"
      },
      {
        code: "0206",
        name: "KAB. KARO"
      },
      {
        code: "0207",
        name: "KAB. LABUHANBATU"
      },
      {
        code: "0208",
        name: "KAB. LABUHANBATU SELATAN"
      },
      {
        code: "0209",
        name: "KAB. LABUHANBATU UTARA"
      },
      {
        code: "0210",
        name: "KAB. LANGKAT"
      },
      {
        code: "0211",
        name: "KAB. MANDAILING NATAL"
      },
      {
        code: "0212",
        name: "KAB. NIAS"
      },
      {
        code: "0213",
        name: "KAB. NIAS BARAT"
      },
      {
        code: "0214",
        name: "KAB. NIAS SELATAN"
      },
      {
        code: "0215",
        name: "KAB. NIAS UTARA"
      },
      {
        code: "0216",
        name: "KAB. PADANG LAWAS"
      },
      {
        code: "0217",
        name: "KAB. PADANG LAWAS UTARA"
      },
      {
        code: "0218",
        name: "KAB. PAKPAK BHARAT"
      },
      {
        code: "0219",
        name: "KAB. SAMOSIR"
      },
      {
        code: "0220",
        name: "KAB. SERDANG BEDAGAI"
      },
      {
        code: "0221",
        name: "KAB. SIMALUNGUN"
      },
      {
        code: "0222",
        name: "KAB. TAPANULI SELATAN"
      },
      {
        code: "0223",
        name: "KAB. TAPANULI TENGAH"
      },
      {
        code: "0224",
        name: "KAB. TAPANULI UTARA"
      },
      {
        code: "0225",
        name: "KAB. TOBA SAMOSIR"
      },
      {
        code: "0226",
        name: "KOTA BINJAI"
      },
      {
        code: "0227",
        name: "KOTA GUNUNGSITOLI"
      },
      {
        code: "0228",
        name: "KOTA MEDAN"
      },
      {
        code: "0229",
        name: "KOTA PADANGSIDEMPUAN"
      },
      {
        code: "0230",
        name: "KOTA PEMATANGSIANTAR"
      },
      {
        code: "0231",
        name: "KOTA SIBOLGA"
      },
      {
        code: "0232",
        name: "KOTA TANJUNGBALAI"
      },
      {
        code: "0233",
        name: "KOTA TEBING TINGGI"
      },
      {
        code: "0301",
        name: "KAB. AGAM"
      },
      {
        code: "0302",
        name: "KAB. DHARMASRAYA"
      },
      {
        code: "0303",
        name: "KAB. KEPULAUAN MENTAWAI"
      },
      {
        code: "0304",
        name: "KAB. LIMA PULUH KOTA"
      },
      {
        code: "0305",
        name: "KAB. PADANG PARIAMAN"
      },
      {
        code: "0306",
        name: "KAB. PASAMAN"
      },
      {
        code: "0307",
        name: "KAB. PASAMAN BARAT"
      },
      {
        code: "0308",
        name: "KAB. PESISIR SELATAN"
      },
      {
        code: "0309",
        name: "KAB. SIJUNJUNG"
      },
      {
        code: "0310",
        name: "KAB. SOLOK"
      },
      {
        code: "0311",
        name: "KAB. SOLOK SELATAN"
      },
      {
        code: "0312",
        name: "KAB. TANAH DATAR"
      },
      {
        code: "0313",
        name: "KOTA BUKITTINGGI"
      },
      {
        code: "0314",
        name: "KOTA PADANG"
      },
      {
        code: "0315",
        name: "KOTA PADANGPANJANG"
      },
      {
        code: "0316",
        name: "KOTA PARIAMAN"
      },
      {
        code: "0317",
        name: "KOTA PAYAKUMBUH"
      },
      {
        code: "0318",
        name: "KOTA SAWAHLUNTO"
      },
      {
        code: "0319",
        name: "KOTA SOLOK"
      },
      {
        code: "0401",
        name: "KAB. BENGKALIS"
      },
      {
        code: "0402",
        name: "KAB. INDRAGIRI HILIR"
      },
      {
        code: "0403",
        name: "KAB. INDRAGIRI HULU"
      },
      {
        code: "0404",
        name: "KAB. KAMPAR"
      },
      {
        code: "0405",
        name: "KAB. KEPULAUAN MERANTI"
      },
      {
        code: "0406",
        name: "KAB. KUANTAN SINGINGI"
      },
      {
        code: "0407",
        name: "KAB. PELALAWAN"
      },
      {
        code: "0408",
        name: "KAB. ROKAN HILIR"
      },
      {
        code: "0409",
        name: "KAB. ROKAN HULU"
      },
      {
        code: "0410",
        name: "KAB. SIAK"
      },
      {
        code: "0411",
        name: "KOTA DUMAI"
      },
      {
        code: "0412",
        name: "KOTA PEKANBARU"
      },
      {
        code: "0501",
        name: "KAB. BINTAN"
      },
      {
        code: "0502",
        name: "KAB. KARIMUN"
      },
      {
        code: "0503",
        name: "KAB. KEPULAUAN ANAMBAS"
      },
      {
        code: "0504",
        name: "KAB. LINGGA"
      },
      {
        code: "0505",
        name: "KAB. NATUNA"
      },
      {
        code: "0506",
        name: "KOTA BATAM"
      },
      {
        code: "0507",
        name: "KOTA TANJUNG PINANG"
      },
      {
        code: "0508",
        name: "PULAU TAMBELAN KAB. BINTAN"
      },
      {
        code: "0509",
        name: "PEKAJANG KAB. LINGGA"
      },
      {
        code: "0510",
        name: "PULAU SERASAN KAB. NATUNA"
      },
      {
        code: "0511",
        name: "PULAU MIDAI KAB. NATUNA"
      },
      {
        code: "0512",
        name: "PULAU LAUT KAB. NATUNA"
      },
      {
        code: "0601",
        name: "KAB. BATANGHARI"
      },
      {
        code: "0602",
        name: "KAB. BUNGO"
      },
      {
        code: "0603",
        name: "KAB. KERINCI"
      },
      {
        code: "0604",
        name: "KAB. MERANGIN"
      },
      {
        code: "0605",
        name: "KAB. MUARO JAMBI"
      },
      {
        code: "0606",
        name: "KAB. SAROLANGUN"
      },
      {
        code: "0607",
        name: "KAB. TANJUNG JABUNG BARAT"
      },
      {
        code: "0608",
        name: "KAB. TANJUNG JABUNG TIMUR"
      },
      {
        code: "0609",
        name: "KAB. TEBO"
      },
      {
        code: "0610",
        name: "KOTA JAMBI"
      },
      {
        code: "0611",
        name: "KOTA SUNGAI PENUH"
      },
      {
        code: "0701",
        name: "KAB. BENGKULU SELATAN"
      },
      {
        code: "0702",
        name: "KAB. BENGKULU TENGAH"
      },
      {
        code: "0703",
        name: "KAB. BENGKULU UTARA"
      },
      {
        code: "0704",
        name: "KAB. KAUR"
      },
      {
        code: "0705",
        name: "KAB. KEPAHIANG"
      },
      {
        code: "0706",
        name: "KAB. LEBONG"
      },
      {
        code: "0707",
        name: "KAB. MUKOMUKO"
      },
      {
        code: "0708",
        name: "KAB. REJANG LEBONG"
      },
      {
        code: "0709",
        name: "KAB. SELUMA"
      },
      {
        code: "0710",
        name: "KOTA BENGKULU"
      },
      {
        code: "0801",
        name: "KAB. BANYUASIN"
      },
      {
        code: "0802",
        name: "KAB. EMPAT LAWANG"
      },
      {
        code: "0803",
        name: "KAB. LAHAT"
      },
      {
        code: "0804",
        name: "KAB. MUARA ENIM"
      },
      {
        code: "0805",
        name: "KAB. MUSI BANYUASIN"
      },
      {
        code: "0806",
        name: "KAB. MUSI RAWAS"
      },
      {
        code: "0807",
        name: "KAB. MUSI RAWAS UTARA"
      },
      {
        code: "0808",
        name: "KAB. OGAN ILIR"
      },
      {
        code: "0809",
        name: "KAB. OGAN KOMERING ILIR"
      },
      {
        code: "0810",
        name: "KAB. OGAN KOMERING ULU"
      },
      {
        code: "0811",
        name: "KAB. OGAN KOMERING ULU SELATAN"
      },
      {
        code: "0812",
        name: "KAB. OGAN KOMERING ULU TIMUR"
      },
      {
        code: "0813",
        name: "KAB. PENUKAL ABAB LEMATANG ILIR"
      },
      {
        code: "0814",
        name: "KOTA LUBUKLINGGAU"
      },
      {
        code: "0815",
        name: "KOTA PAGAR ALAM"
      },
      {
        code: "0816",
        name: "KOTA PALEMBANG"
      },
      {
        code: "0817",
        name: "KOTA PRABUMULIH"
      },
      {
        code: "0901",
        name: "KAB. BANGKA"
      },
      {
        code: "0902",
        name: "KAB. BANGKA BARAT"
      },
      {
        code: "0903",
        name: "KAB. BANGKA SELATAN"
      },
      {
        code: "0904",
        name: "KAB. BANGKA TENGAH"
      },
      {
        code: "0905",
        name: "KAB. BELITUNG"
      },
      {
        code: "0906",
        name: "KAB. BELITUNG TIMUR"
      },
      {
        code: "0907",
        name: "KOTA PANGKAL PINANG"
      }
]

console.log(citiesJSON.indexOf({ code: "1221", name: "KOTA BEKASI" }));

export default citiesJSON;