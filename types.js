// 
//  Object to store the strengths and weaknesses of each type
//

var types = {
    "water":{
        "strong":["fire","ground","rock"],
        "weak":["water","grass","dragon"],
        "noEffect":[]
    },
    "fire":{
        "strong":["grass","bug","ice","steel"],
        "weak":["fire","water","rock","dragon"],
        "noEffect":[]
    },
    "grass":{
        "strong":["water","ground","rock"],
        "weak":["fire","grass","dragon","bug","flying","poison","steel"],
        "noEffect":[]
    },
    "normal":{
        "strong":[],
        "weak":["rock","steel"],
        "noEffect":["ghost"]
    },
    "fighting":{
        "strong":["normal","rock","steel","ice","dark"],
        "weak":["flying","poison","bug","psychic","fairy"],
        "noEffect":["ghost"]
    },
    "flying":{
        "strong":["fighting","bug","grass"],
        "weak":["rock","steel","electric"],
        "noEffect":[]
    },
    "poison":{
        "strong":["grass","fairy"],
        "weak":["poison","ground","rock","ghost"],
        "noEffect":["steel"]
    },
    "ground":{
        "strong":["poison","rock","steel","fire","electric"],
        "weak":["bug","grass"],
        "noEffect":["flying"]
    },
    "rock":{
        "strong":["flying","bug","fire","ice"],
        "weak":["fighting","ground","steel"],
        "noEffect":[]
    },
    "bug":{
        "strong":["grass","psychic","dark"],
        "weak":["fighting","flying","poison","ghost","steel","fire","fairy"],
        "noEffect":[]
    },
    "ghost":{
        "strong":["ghost","psychic"],
        "weak":["dark"],
        "noEffect":["normal"]
    },
    "steel":{
        "strong":["rock","ice","fairy"],
        "weak":["steel","fire","water","electric"],
        "noEffect":[]
    },
    "electric":{
        "strong":["flying","water"],
        "weak":["grass","electric","dragon"],
        "noEffect":["ground"]
    },
    "psychic":{
        "strong":["fighting","poison"],
        "weak":["steel","psychic"],
        "noEffect":["dark"]
    },
    "ice":{
        "strong":["flying","ground","grass","dragon"],
        "weak":["steel","fire","water","ice"],
        "noEffect":[]
    },
    "dragon":{
        "strong":["dragon"],
        "weak":["steel"],
        "noEffect":["fairy"]
    },
    "dark":{
        "strong":["ghost","psychic"],
        "weak":["fighting","dark","fairy"],
        "noEffect":[]
    },
    "fairy":{
        "strong":["fighting","dragon","dark"],
        "weak":["poison","steel","fire"],
        "noEffect":[]
    }
};