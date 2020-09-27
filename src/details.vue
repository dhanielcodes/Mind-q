<script>
import Pusher from 'pusher-js'
/* import { define } from 'mime'; */

const pusher = new Pusher('22392ad93aa4fd27af7f',{
    cluster: 'eu',
    encrypted: true,
    authEndpoint: 'http://localhost:5000/pusher/auth'
})

export default {
    getPresenseID(){
        let getQueryString = (field, url) => {
            let href = url ? url : window.location.href
            let reg  = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
            let string = reg.exec(href)
            return string ? string[1] : null
        }

        let id = getQueryString('id')
        id = 'presence-' + id
        return id
    },
    subscribeToPusher(){
        let presenceid = this.getPresenseID()
        let channel = pusher.subscribe(presenceid)
        return channel
    }
}
</script>