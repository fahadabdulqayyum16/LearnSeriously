const AuthLogin = (req, res) => {
    try {
        console.log('post req', req?.body);
        const { body } = req

        return res.send({ message: 'Successfully Loggedin!', success: true, user: body })
    } catch (e) {
        console.log('e', e);
        return res.send({ message: e?.message, success: true })
    }
}

module.exports = {
    AuthLogin
}