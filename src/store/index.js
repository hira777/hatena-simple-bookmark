import { EventEmitter } from 'events';
import request from 'superagent';

const config = {
  feed: 'http://b.hatena.ne.jp/',
  endPoint: 'https://query.yahooapis.com/v1/public/yql',
};
const store = new EventEmitter();

store.data = {
  items: [],
};

/**
 *
 * アイテムリストをフェッチする
 *
 * @param {String} category
 *
 * http://qiita.com/nyatto/items/94c3f7cac14e8e8ef50f
 * https://developer.yahoo.com/yql/console/
 */
store.fetchItems = (category = 'hotentry') => {
  const url =
    category === 'hotentry'
      ? `${config.feed + category}.rss`
      : `${config.feed}hotentry/${category}.rss`;

  request
    .get(config.endPoint)
    .query({
      q: `select * from rss where url="${url}"`,
      format: 'json',
    })
    .end((err, res) => {
      if (err) {
        console.log(err);
      }

      store.data.items = res.body.query.results.item;
      store.emit('update', store.data.items);
    });
};

export default store;
