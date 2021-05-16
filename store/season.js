const data = {
  bloks: []
}

export default data

export function getSeason() {
  wx.request({
    url: 'http://localhost:3000', //仅为示例，并非真实的接口地址
    success(res) {
      data.bloks = res.data.data.story.content.content
    }
  })
}