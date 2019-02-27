import Api from '@/services/Api'

export default {
    post(city) {
        return Api().post('/weather', city);
    }
}