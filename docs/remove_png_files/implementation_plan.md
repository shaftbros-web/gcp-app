# 実装計画: PNGファイルのGit履歴からの完全削除

## 目的
リポジトリに誤ってプッシュされた `.png` ファイルを、Gitのすべての過去履歴から完全に抹消し、リポジトリのサイズを軽量化して、画像ファイルが残らないようにする。

## 実施手順
1. `git filter-branch` コマンドを使用して全履歴から `.png` ファイルを除去する。
   * コマンド: `git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch "*.png" "*/*.png"' --prune-empty --tag-name-filter cat -- --all`
2. 完了後に、残存している元のバックアップ参照群（`.git/refs/original/`）を安全にクリーンアップする。
3. リポジトリに対してガベージコレクション（`git gc`）を実行し、不要になったオブジェクトを完全に削除する。
4. 強制プッシュ (`git push --force --all`) を実行し、リモートのリポジトリにも削除結果を反映させる。
