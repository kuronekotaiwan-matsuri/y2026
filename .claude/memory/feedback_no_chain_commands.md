---
name: No chained bash commands
description: Never chain multiple bash commands with && or ; or | - execute one command at a time
type: feedback
---

Bashコマンドを `&&`, `;`, `|` 等でチェインして実行しないこと。1つずつ個別に実行する。

**Why:** `settings.json` の `permissions.allow` パターンマッチはコマンド先頭にマッチするため、チェインすると許可パターンに合致せず毎回ユーザーに許可を求めてしまう。ユーザーから2度注意を受けた重要ルール。

**How to apply:** すべてのBashツール呼び出しで、コマンドは1つだけにする。`cd` が必要な場合もチェインせず、Bashツールの実行ディレクトリに直接cdするか、絶対パスを使う。
