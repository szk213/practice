# Redux

## 登場人物

- Action: 操作の定義(操作に必要なデータも含む)
- ActionCreater: Actionを作る人
- Stor: 状態を保存するためのもの
    - dispach: actionをStorに送信するために使用
    - subscribe: 不明
    - getState(): stateを取得するために使用
- State: 状態そのもの
- Reducer: Actionの定義の通りに操作を実行する StorのStateと、Actionのデータを材料とし新しいstate'を作成する

