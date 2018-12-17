let r = {
        "_id" : ObjectId("5c167466fa39691226b35b47"),
        "passengers" : 0,
        "carrier" : "Korean Air Lines Co. Ltd.",
        "originCity" : "Atlanta, GA",
        "originState" : "Georgia",
        "originCountry" : "United States",
        "destCity" : "Seoul, South Korea",
        "destState" : "",
        "destCountry" : "South Korea",
        "class" : "G"
}

mongoimport -d frontcamp -c airlines --type csv --headerline --file D:\

use frontcamp

db.airlines.aggregate([
    { $match: { "originCountry" : "United States" }},
    {
        $group: {
            _id: {
                destCity: "$destCity"
            },
            avgPass: {
                $avg: "$passengers"
            }
        }
    },
    {
        $sort: {
            avgPass: -1
        }
    },
    {
        $limit: 3
    }
])

 total: {   $sum: "$passengers"
            $sum: 1
        }
//4.1
db.airlines.aggregate([
    {
        $group: {
            _id: {
                class: "$class"
            },
            total: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            _id: 0,
            class: "$_id.class",
            total: "$total"
        }
    }
])

//4.2

db.airlines.aggregate([
    { $match: { "destCountry" : {$ne: "United States"}}},
    {
        $group: {
            _id: {
                destCity: "$destCity",
            },
            avgPass: {
                $avg: "$passengers"
            }
        }
    },
    { $sort: { avgPass: -1 }},
    { $limit: 3 },
    {
        $project: {
            _id: 0,
            avgPassengers: "$avgPass",
            city: "$_id.destCity"
        }
    }
])

//4.3

db.airlines.aggregate([
    { $match: { "destCountry" : "Latvia"}},
    {
        $group: {
            _id: {
                destCountry: "$destCountry",
            },
            carriers: {
                $push: "$carrier"
            }
        }
    },
    {
        $project: {
            _id: "$_id.destCountry",
            carriers: "$carriers"
        }
    }
])

//4.4

db.airlines.aggregate([
    { $match: {$and: [
            {"originCountry" : "United States"},
            {"destCountry" : {$in: ["Spain", "Italia", "Greece"]}}
        ]}
    },
    {
        $group: {
            _id: {
                carrier: "$carrier",
            },
            overallPassangers: {
                $sum: "$passengers"
            }
        }
    },
    { $sort: { overallPassangers: -1 }},
    { $limit: 10 },
    { $skip : 3 },
    {
        $project: {
            _id: "$_id.carrier",
            total: "$overallPassangers"
        }
    }
])

//4.5

db.airlines.aggregate([
    { $match: {"originCountry" : "United States"}},
    {
        $group: {
            _id: {
                state: "$originState",
                city: "$originCity",
            },
            sumPass: { $sum: "$passengers" }
        }
    },
    { $sort: { "_id.state": -1 }},
    {
        $group: {
            _id: "$_id.state",
            sumPasCit: {
                $push: {pas: "$sumPass", cit: "$_id.city"}
            }
        }
    },
    { $limit: 5 },
    {
        $project: {
            cityM: {
                $filter: {
                    input: "$sumPasCit",
                    as: "item",
                    cond: {
                        $eq: ["$$item.pas", {$max: "$sumPasCit.pas"}]
                    }
                }
            }
        }
    },
    {
        $project: {
            _id: "$_id",
            cityAndPassangers: { $arrayElemAt: [ "$cityM", 0 ] }
        }
    },
    {
        $project: {
            _id: 0,
            totalPassangers: "$cityAndPassangers.pas",
            location: {
                state: "$_id",
                city: "$cityAndPassangers.cit"
            }
        }  
    }
])

