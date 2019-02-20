import { EventEmitter } from 'events';
import axios from 'axios';

const config = {
  feed: 'http://b.hatena.ne.jp/',
};
const store = new EventEmitter();

store.data = {
  items: [],
};

/**
 * アイテムリストをフェッチする
 * @param {String} category
 */
store.fetchItems = (category = 'hotentry') => {
  const url =
    category === 'hotentry'
      ? `${config.feed + category}.rss`
      : `${config.feed}hotentry/${category}.rss`;

  axios.get(url).then(response => {
    console.log(response.data);
  });
};

export default store;
