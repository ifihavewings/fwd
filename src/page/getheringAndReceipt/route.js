const ReceiptList = r => require.ensure([], () => r(require('./ReceiptList.vue')), 'ReceiptList');
export default [
    {
      path: '/getheringAndReceipt/ReceiptList',
      name: 'ReceiptList',
      component: ReceiptList
    }
]