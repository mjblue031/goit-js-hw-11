export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41511802-59f03e3bdc98b407568c25237';

export const options = {
    params: {
        key: API_KEY,
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40,
    }
};