---
name: Windows path separator in permissions
description: On Windows, permission patterns must use backslashes because paths are normalized to backslashes during permission checks
type: feedback
---

Windows環境では、権限チェック時にパスがバックスラッシュ(`\`)に正規化される。設定ファイルのパターンにフォワードスラッシュ(`/`)を使うとマッチしない。

**Why:** `Write(.claude/tmp/**)` が `Write(.claude\tmp\task-body.md)` にマッチせず、毎回許可を求められた。ユーザーから注意を受けた。

**How to apply:** Windows環境でのpermissions設定では、パスにバックスラッシュを使うこと（JSONではエスケープして `\\`）。または、一時ファイルの読み書きを避ける代替手段（`--description` フラグ等）を使うこと。
