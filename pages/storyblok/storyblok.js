import create from '../../utils/create'
import store from '../../store/index'

create.Page(store, {
  // 声明依赖
  use: ['season.bloks'],
  onLoad: function () {
    this.store.getSeason()
  }
})