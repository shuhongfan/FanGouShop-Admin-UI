
export default {
  shortcuts: [
      {
          text: '昨天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', [start, end]);
          }
      },
      {
        text: '最近七天',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        }
      }, {
        text: '本月',
        onClick(picker){
          const end = new Date()
          const start = new Date()
          start.setTime(start.setTime(new Date(new Date().getFullYear(), new Date().getMonth(), 1)))
          picker.$emit('pick', [start, end]);
        }
    },{
        text: '最近30天',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', [start, end]);
        }
      },{
        text: '最近一年',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
          picker.$emit('pick', [start, end]);
        }
      },
  ]
}
