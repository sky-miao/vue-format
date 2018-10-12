<template>
  <div>

  </div>
</template>
<script>
import Socket from '@/utils/socket.js'
export default {
  data () {
    return {
      socket: new Socket(),
      kk: ''
    }
  },
  mounted () {
    this.socket.doOpen()
    this.socket.on('open', () => {
      console.log('连接成功--111')
      this.socket.send({'id': 1, 'method': 'marketcap_subscribe', 'params': ['getPool']})
    })
    this.socket.on('message', (data) => {
      console.log(data, '123--')
    })
  },
  computed: {

  },
  methods: {

  }
}
</script>
