import { v4 as uuidv4 } from 'uuid';

export let initialState ={ 
    todos :  [
        { id: uuidv4(), text: "Learn Redux", status: false, tag: "" },
        { id: uuidv4(), text: "Make my teacher proud", status: false, tag: ""  },
    ],
    filterByStatus: {
        active: null,
        unActive: null,
        all: null
    },
    filterByTagColor: {
        all: null,
        green: null,
        blue: null,
        red: null,
        purple: null,
        orange: null,
    }
}
