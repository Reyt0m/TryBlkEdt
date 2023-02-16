# notion clone project

## 現状の課題
- firebaseへのHosting
<!-- - nestを作る事はできたがmoveをしたときに単体で動いてしまう。 = nest構造が浅い
- dragDrop移動が機能していない。 -->
<!-- ## nest の機能要件 -->
- 済み 左右に移動する
- すべてのブロックが移動できるようにする
- 前後のnestに格納される
	前のブロックにcdx-nest-0を付与
	自ブロックを前ブロックのdivの中に移動
		前ブロックのidを取得

	自ブロックにcdx-nest-1を付与
- 子ノードは必ず親ノードから見た相対的な位置に移動する
- tab, shift + tab　がショトカ
## Firebaseの要件
Editorの内容を FireStoreにアップロードする

