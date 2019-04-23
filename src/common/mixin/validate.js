// 页面中所有的自定义验证都写在这里
export default {
  methods: {
    // 初始化验证数据
    _initValidate (formInfo) {
      const obj = {},
        fieldList = formInfo.fieldList
      // 循环字段列表
      for (let item of fieldList) {
        let type = item.type === 'select' ? '选择' : '输入'
        if (item.required) {
          if (item.rules) {
            obj[item.value] = {
              required: item.required,
              validator: item.rules,
              trigger: 'blur'
            }
          } else {
            obj[item.value] = {
              required: item.required,
              message: '请' + type + item.label,
              trigger: 'blur'
            }
          }
        } else if (item.rules) {
          obj[item.value] = {
            validator: item.rules,
            trigger: 'blur'
          }
        }
      }
      formInfo.rules = obj
    }
  }
}
