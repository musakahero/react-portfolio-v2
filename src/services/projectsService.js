// Supabase
import { supabase } from '../config/Supabase';

export const getAll = async () => {
    let { data: projects, error } = await supabase
        .from('projects')
        .select('*');
        if (error) {
            alert('Issue with request');
            console.log(error.message);
        };
        if (projects) {
            return projects;
        }
}

export const getOne = async (recordId) => {
    let { data: projects, error } = await supabase
        .from('projects')
        .select("*")
        // Filters
        .eq('id', recordId);

        // error handling
        if (error) {
            alert('Issue with request');
            console.log(error.message);
        };
        if (projects) {
            return projects;
        }
}