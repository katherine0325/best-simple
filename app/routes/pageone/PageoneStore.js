import alt from '../../alt'
import PageoneActions from './PageoneActions'

class PageoneStore {
  constructor() {
    this.bindActions(PageoneActions);
    this.name = 'katherine';
  }
}

export default alt.createStore(PageoneStore);