---
name: Settings local overrides project
description: settings.local.json completely replaces (not merges) permissions.allow from settings.json
type: feedback
---

settings.local.json の permissions.allow 配列は settings.json の同配列を完全に上書き（置換）する。マージではない。

**Why:** settings.local.json に独自のルールだけ書くと、settings.json のルール（Bash(bd:*), Bash(mkdir:*) 等）が無効化され、毎回許可を求められる。ユーザーから注意を受けた。

**How to apply:** settings.local.json を編集する際は、必ず settings.json のルールも含めた完全な配列を書くこと。settings.local.json を新規作成・更新する場合は、まず settings.json を読んで全ルールをマージすること。
