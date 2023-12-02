***
# 概要
pokemon apiを用いたreactアプリケーションのサンプル。

参照元：【Reactアプリ開発】3種類のReactアプリケーションを構築して、Reactの理解をさらに深めるステップアップ講座
https://www.udemy.com/course/react-3project-app-udemy/



# git 使い方
## とりあえず、main/featureのみの場合

- まず、git pull origin mainでリモートの変更を拾う
  - （上記はgit fetch && git merge origin/mainと同じこと）
  - git fetch -pとすると、不要なリモートブランチを削除する

- git checkout -b feature/modify-xxxxxとして、作業ブランチを立てる

- 開発する

- 変更をリモートにプッシュ
  git add . && git push origin feature/modify-xxxxx

- ブラウザでプルリクを作成。
　この時レビュワーを割り当てる（一人開発だと不要）

- レビュワーはマージする

- (他の開発者)git pull origin mainでリモートの変更を拾う


***