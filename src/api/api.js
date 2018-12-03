import server from '@utils/server';
export default {
    login: function (opts) {
        return server.resource(
            {
                url: `/api/v1/throw`,
                type: 'POST',
                param: {
                    name: '1123',//账号u1
                    password: '4567' //密码123456
                }
            }
        )
    },
    registered: function (opts) {
        return server.resource(
            {
                url: `/api/v1/registered`,
                type: 'POST',
                param: {
                    name: '1123',//账号u1
                    password: '4567' //密码123456
                }
            }
        )
    },
}