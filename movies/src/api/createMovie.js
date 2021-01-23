import {v4 as uuidv4} from "uuid";

export default function createMovie(data) {

    return {
        id: uuidv4(),
        title: data.title,
        description: data.description
    }
};