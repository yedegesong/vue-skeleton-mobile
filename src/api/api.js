import server from '@utils/server';
export default {
    login: function (opts) {
        return server.resource(
            {
                url: `http://127.0.0.1:53356/logins`,
                type: 'POST',
                param: {
                    name: '1123',//账号u1
                    password: '4567' //密码123456
                }
            }
        )
    },
}