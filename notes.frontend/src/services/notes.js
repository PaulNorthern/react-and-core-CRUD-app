import {ActionCreators} from '../redux/notesReducer';
import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: 'http://localhost:50422/notes',
})

export const GetNotes = async(dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setNotes(data));

    } catch {
        console.log('Error!')
    }
}

export const DeleteNote = async(dispatch, note) => {
    try {
        // api call
        await axiosInstance.delete(`/${note.id}`);
        dispatch(ActionCreators.deleteNote(note));
    } catch {
        console.log('Error!')
    }
}

export const NewNote = async(dispatch, note) => {
    try {
        // parse String to Object
        const { data } = await axiosInstance.post('', note);
        dispatch(ActionCreators.newNote(data));
    } catch {
        console.log('Error!')
    }
}

export const EditNote = async(dispatch, note) => {
    try {
        // api call
        await axiosInstance.put('', note);
        dispatch(ActionCreators.editNote(note));
    } catch {
        console.log('Error!')
    }
}