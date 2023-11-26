export const aeropuertos = [
    {
        "code": "ALC",
        "location": "Alicante",
        "name": "Aeropuerto de Alicante-Elche"
    },
    {
        "code": "LEI",
        "location": "Almería",
        "name": "Aeropuerto de Almería"
    },
    {
        "code": "BJZ",
        "location": "Badajoz",
        "name": "Aeropuerto de Badajoz"
    },
    {
        "code": "BCN",
        "location": "El Prat de Llobregat (Barcelona)",
        "name": "Aeropuerto de Barcelona-El Prat"
    },
    {
        "code": "BIO",
        "location": "Sondica (Bilbao)",
        "name": "Aeropuerto de Bilbao"
    },
    {
        "code": "RGS",
        "location": "Burgos",
        "name": "Aeropuerto de Burgos"
    },
    {
        "code": "CDT",
        "location": "Villanueva de Alcolea (Castellón)",
        "name": "Aeropuerto de Castellón-Costa Azahar"
    },
    {
        "code": "ODB",
        "location": "Córdoba",
        "name": "Aeropuerto de Córdoba"
    },
    {
        "code": "EAS",
        "location": "Fuenterrabía (Guipúzcoa)",
        "name": "Aeropuerto de San Sebastián"
    },
    {
        "code": "GRO",
        "location": "Viloví de Oñar (Gerona)",
        "name": "Aeropuerto de Girona-Costa Brava"
    },
    {
        "code": "GRX",
        "location": "Granada",
        "name": "Aeropuerto Federico García Lorca Granada"
    },
    {
        "code": "IBZ",
        "location": "Ibiza",
        "name": "Aeropuerto de Ibiza"
    },
    {
        "code": "XRZ",
        "location": "Jerez de la Frontera",
        "name": "Aeropuerto de Jerez"
    },
    {
        "code": "ACE",
        "location": "San Bartolomé (Las Palmas)",
        "name": "Aeropuerto de Lanzarote"
    },
    {
        "code": "LPA",
        "location": "Telde (Las Palmas)",
        "name": "Aeropuerto de Gran Canaria"
    },
    {
        "code": "LEN",
        "location": "Valverde de la Virgen (León)",
        "name": "Aeropuerto de León"
    },
    {
        "code": "MAD",
        "location": "Madrid",
        "name": "Aeropuerto Adolfo Suárez Madrid-Barajas"
    },
    {
        "code": "TOJ",
        "location": "Torrejón de Ardoz (Madrid)",
        "name": "Base Aérea de Torrejón de Ardoz"
    },
    {
        "code": "AGP",
        "location": "Málaga",
        "name": "Aeropuerto de Málaga-Costa del Sol"
    },
    {
        "code": "MAH",
        "location": "Mahón (Menorca)",
        "name": "Aeropuerto de Menorca"
    },
    {
        "code": "MJV",
        "location": "San Javier (Murcia)",
        "name": "Aeropuerto de Murcia-San Javier"
    },
    {
        "code": "OVD",
        "location": "Castrillón (Asturias)",
        "name": "Aeropuerto de Asturias"
    },
    {
        "code": "PNA",
        "location": "Noáin (Navarra)",
        "name": "Aeropuerto de Pamplona"
    },
    {
        "code": "REU",
        "location": "Reus (Tarragona)",
        "name": "Aeropuerto de Reus"
    },
    {
        "code": "SLM",
        "location": "Machacón (Salamanca)",
        "name": "Aeropuerto de Salamanca"
    },
    {
        "code": "SDR",
        "location": "Camargo (Cantabria)",
        "name": "Aeropuerto Seve Ballesteros-Santander"
    },
    {
        "code": "SVQ",
        "location": "Sevilla",
        "name": "Aeropuerto de Sevilla-San Pablo"
    },
    {
        "code": "TFN",
        "location": "San Cristóbal de La Laguna (Santa Cruz de Tenerife)",
        "name": "Aeropuerto de Tenerife Norte"
    },
    {
        "code": "TFS",
        "location": "Granadilla de Abona (Santa Cruz de Tenerife)",
        "name": "Aeropuerto Internacional Reina Sofía"
    },
    {
        "code": "VLC",
        "location": "Manises (Valencia)",
        "name": "Aeropuerto de Manises"
    },
    {
        "code": "VLL",
        "location": "Villanubla (Valladolid)",
        "name": "Aeropuerto de Villanubla"
    },
    {
        "code": "VDE",
        "location": "Valverde (El Hierro)",
        "name": "Aeropuerto de los Cangrejos"
    },
    {
        "code": "VGO",
        "location": "Vigo",
        "name": "Aeropuerto de Vigo-Peinador"
    },
    {
        "code": "VIT",
        "location": "Vitoria",
        "name": "Aeropuerto de Vitoria"
    },
    {
        "code": "ZAZ",
        "location": "Zaragoza",
        "name": "Aeropuerto de Zaragoza"
    }
]

export const optimal = {
    'escala': [

        {
            'camino_optimo': ['PNA', 'TFN', 'BCN', 'VLL'],
            'detalles': [
                { 'origen': 'PNA', 'destino': 'TFN', 'duracion': 185.0, 'price': 1226 },
                { 'origen': 'TFN', 'destino': 'BCN', 'duracion': 205.0, 'price': 185 },
                { 'origen': 'BCN', 'destino': 'VLL', 'duracion': 90.0, 'price': 94 }
            ],
            'total_duration': 480.0,
            'total_price': 1505
        },
        {
            'camino_optimo': ['PNA', 'MAD', 'BCN', 'VLL'],
            'detalles': [
                { 'origen': 'PNA', 'destino': 'TFN', 'duracion': 60.0, 'price': 326 },
                { 'origen': 'TFN', 'destino': 'BCN', 'duracion': 80.0, 'price': 94 },
                { 'origen': 'BCN', 'destino': 'VLL', 'duracion': 90.0, 'price': 94 }
            ],
            'total_duration': 230.0,
            'total_price': 514
        },
        {
            'camino_optimo': ['PNA', 'TFN', 'SVQ', 'VLL'],
            'detalles': [
                { 'origen': 'PNA', 'destino': 'TFN', 'duracion': 185.0, 'price': 1226 },
                { 'origen': 'TFN', 'destino': 'SVQ', 'duracion': 130.0, 'price': 297 },
                { 'origen': 'SVQ', 'destino': 'VLL', 'duracion': 75.0, 'price': 71 }
            ],
            'total_duration': 390.0,
            'total_price': 1594
        },
        {
            'camino_optimo': ['PNA', 'MAD', 'SVQ', 'VLL'],
            'detalles': [
                { 'origen': 'PNA', 'destino': 'MAD', 'duracion': 60.0, 'price': 326 },
                { 'origen': 'MAD', 'destino': 'SVQ', 'duracion': 65.0, 'price': 761 },
                { 'origen': 'SVQ', 'destino': 'VLL', 'duracion': 75.0, 'price': 71 }
            ],
            'total_duration': 200.0,
            'total_price': 1158
        }

    ],
    'duration': [

        {
            'camino_optimo': ['PNA', 'MAD', 'SVQ', 'VLL'],
            'detalles': [
                { 'origen': 'PNA', 'destino': 'MAD', 'duracion': 60.0, 'price': 326 },
                { 'origen': 'MAD', 'destino': 'SVQ', 'duracion': 65.0, 'price': 761 },
                { 'origen': 'SVQ', 'destino': 'VLL', 'duracion': 75.0, 'price': 71 }
            ],
            'total_duration': 200.0,
            'total_price': 1158
        }
    ],
    'price': [

        {
            'camino_optimo': ['PNA', 'MAD', 'IBZ', 'BCN', 'VLL'],
            'detalles': [
                { 'origen': 'PNA', 'destino': 'MAD', 'duracion': 60.0, 'price': 326 },
                { 'origen': 'MAD', 'destino': 'IBZ', 'duracion': 80.0, 'price': 45 },
                { 'origen': 'IBZ', 'destino': 'BCN', 'duracion': 65.0, 'price': 6 },
                { 'origen': 'BCN', 'destino': 'VLL', 'duracion': 90.0, 'price': 94 }
            ],
            'total_duration': 295.0,
            'total_price': 471
        }
    ]
}