const initialState = {
    dogs:[    {
        "weight": {
        "imperial": "6 - 13",
        "metric": "3 - 6"
        },
        "height": {},
        "id": 1,
        "name": "Affenpinscher",
        "bred_for": "Small rodent hunting, lapdog",
        "breed_group": "Toy",
        "life_span": "10 - 12 years",
        "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        "origin": "Germany, France",
        "reference_image_id": "BJa4kxc4X"
        },
        {
        "weight": {
        "imperial": "50 - 60",
        "metric": "23 - 27"
        },
        "height": {
        "imperial": "25 - 27",
        "metric": "64 - 69"
        },
        "id": 2,
        "name": "Afghan Hound",
        "country_code": "AG",
        "bred_for": "Coursing and hunting",
        "breed_group": "Hound",
        "life_span": "10 - 13 years",
        "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
        "origin": "Afghanistan, Iran, Pakistan",
        "reference_image_id": "hMyT4CDXR"
        },
        {
        "weight": {
        "imperial": "44 - 66",
        "metric": "20 - 30"
        },
        "height": {
        "imperial": "30",
        "metric": "76"
        },
        "id": 3,
        "name": "African Hunting Dog",
        "bred_for": "A wild pack animal",
        "life_span": "11 years",
        "temperament": "Wild, Hardworking, Dutiful",
        "origin": "",
        "reference_image_id": "rkiByec47"
        }]
}

const reducer = (state=initialState, action)=>{

    switch(action.type){
        default:
            return { ...state}
    }
}

export default reducer