import request from '../utils/request'

export default {
    getData(data) {
        console.log('getUUID')
        return request({
            url: '/game/gamemgnt',
            method: 'get',
            data,
        })
    },
    getBigData(data) {
        return request({
            url: '/game/gamemgnt',
            method: 'post',
            data,
        })
    },
    getMsgType(params) {
        return request({
            url: '/message/messageType',
            method: 'get',
            params,
        })
    },
    deleteMsg(data) {
        return request({
            url: '/message/delete',
            method: 'post',
            data,
        })
    },
}
