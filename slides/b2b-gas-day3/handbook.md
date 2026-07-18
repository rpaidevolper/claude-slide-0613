# 0722_B2B訂單分析_課程手冊

> 📌 **本頁是今天課程的「程式碼 / 提示詞」複製區**
> 每個練習都附一段可直接複製貼上的內容。請對齊投影片上的「環節 X — 動手 Y」找到對應段落。
> 講師收件信箱：`rpaidevolper@gmail.com`
> （🖼️ 標記處的操作截圖由講師另行補上）

> ⚠️ **三條通用規則（全天適用）**
> 1. 貼程式碼一律：在編輯器內 **Ctrl+A（Mac：Cmd+A）全選 → 刪除 → 貼上**（另有說明者除外）。
> 2. 出錯第一步：看編輯器下方「**執行紀錄**」→ 紅字整段複製，貼給 Gemini 請它修。
> 3. 跳出授權視窗：照 **動手 2 的授權步驟** 允許即可，全天都一樣。

---

## 目錄

- **環節一｜GAS 第一次上手**
  - 動手 1：讓程式碼跟你打招呼
  - 動手 2：讓程式把資料寫進 Sheet
  - 動手 3：寄一封自我介紹給講師
- **環節二｜把需求說清楚，讓 AI 幫你寫**
  - 動手 4：供給緊張詢價提醒
  - 動手 5：沉睡客戶預警
- **環節三｜把 Gemini 裝進系統**
  - 動手 6：申請 Gemini API key
  - 動手 7：AI 業績週報
  - 動手 8：設定每週自動觸發器
- **環節四｜GAS 也能做網頁：B2B 訂單後台**
  - 動手 9：搭建出你的訂單後台
  - 動手 10：幫後台加一個新功能
- **課後加碼｜AI 客製信件話術**
- **安全紅線**

---

# 環節一｜GAS 第一次上手

## 動手 1：讓程式碼跟你打招呼

1. 打開你副本的試算表 → 上方選單「**擴充功能**」→「**Apps Script**」→ 編輯器在新分頁打開 🖼️
2. 在編輯器中間程式碼區：**Ctrl+A 全選 → 刪除 → 貼上**下方程式碼 → 按「💾 儲存」→ 按上方「**執行**」
3. ✅ 下方「執行紀錄」跳出 `hello: 你的名字`

```javascript
function myFunction() {
  Logger.log('hello: 你的名字');
}
```

## 動手 2：讓程式把資料寫進 Sheet

1. 回到試算表 → 左下角「**＋**」新增分頁 → 命名「**練習**」→ **停留在這個分頁**（不要停在「銅」或「歷史訂單」，會蓋掉課堂資料）
2. 回編輯器：**Ctrl+A 全選 → 刪除 → 貼上** → 儲存 → 按「執行」
3. 第一次執行會跳授權視窗：「**審查權限**」→ 選你的帳號 →「**進階**」→「**前往專案（不安全）**」→「**允許**」→ 回編輯器**再按一次「執行」** 🖼️
4. ✅ 切回試算表「練習」分頁，A1 出現「我成功把文字寫進來了！」

```javascript
function myFunction() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  試算表.getRange('A1').setValue('我成功把文字寫進來了！');
}
```

## 動手 3：寄一封自我介紹給講師

1. 在「練習」分頁：**A2 填你的姓名、B2 填一句自我介紹**（先停留在此分頁）
2. 回編輯器：**Ctrl+A 全選 → 刪除 → 貼上** → 儲存
3. 確認「執行」按鈕旁的**函式下拉選單**選的是 `寄出自我介紹` → 按「執行」（可能再跳一次 Gmail 授權，照動手 2 允許）🖼️
4. ✅ 執行紀錄沒有紅字 ＝ 講師已收到你的信

```javascript
function 寄出自我介紹() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const 姓名 = 試算表.getRange('A2').getValue();       // 你的名字（填在 A2）
  const 自我介紹 = 試算表.getRange('B2').getValue();   // 你寫的一句話（填在 B2）

  const 講師信箱 = 'rpaidevolper@gmail.com';           // ← 講師收件信箱
  const 主旨 = `自我介紹 - 來自 ${姓名}`;
  const 內容 = `老師好，我是 ${姓名}。\n\n${自我介紹}`;

  GmailApp.sendEmail(講師信箱, 主旨, 內容);
}
```

---

# 環節二｜把需求說清楚，讓 AI 幫你寫

> 🤖 從這裡開始，程式碼交給 Gemini 寫。打開 `https://gemini.google.com` → 登入同一個 Google 帳號 → 開新對話。
> ✉️ 從動手 4 起，自動信一律改寄**你自己的信箱**。
> 🛟 Gemini 生的跑不動 → 錯誤訊息貼回去請它修；還是不行 → 貼「保底程式碼」。
> **貼保底版前，先把 Gemini 那段整段刪掉（取代，不是加在後面），否則會紅字報錯。**

## 動手 4：供給緊張詢價提醒

1. 在試算表「銅」分頁框選 A1～F10 → Ctrl+C → 貼到 Gemini 對話框（先不要送出）
2. 接著貼上下方 🗣 提示詞 → 送出
3. 複製 Gemini 給的程式碼 → 編輯器 **Ctrl+A 全選 → 刪除 → 貼上** → 儲存
4. 在程式最上面找 `const ○○信箱 = '...'` → 引號內改成**你自己的 Gmail** → 按「執行」
5. ✅ 執行紀錄出現「已寄出」＋ 一分鐘內信箱收到信（沒看到 → 找「促銷內容」或垃圾郵件夾）

🗣 **標準提示詞（照貼可用）**

```
你是 Google Apps Script 專家。我有一份綁定 Google 試算表的 Apps Script 專案，
試算表裡有一個分頁叫「銅」，欄位如下：
- E3：LME 銅現貨的收盤價（美元/噸）
- F3：現貨收盤價的漲跌（正數代表上漲）
- E4：LME 銅庫存（噸）
- F4：庫存的增減（負數代表庫存下降）

請幫我寫一支可以直接執行的函式：
1. 用 SpreadsheetApp.getActiveSpreadsheet() 讀取「銅」分頁上面四個儲存格。
2. 判斷：如果「庫存下降（F4 < 0）」而且「價格上漲（F3 > 0）」，
   就用 GmailApp 寄一封信到我的信箱（信箱請用一個常數放在程式最上面，方便我改）。
3. 信件主旨：[新創金屬] 供給緊張訊號：建議趁早詢價鎖價
   信件內容要包含：今日現貨價、漲跌、庫存量、庫存增減這四個數字。
4. 如果條件不成立，就只用 Logger.log 記錄「今日無供給緊張訊號」。

要求：
- 變數請用中文命名（例如 const 試算表、const 現貨價）。
- 讀不到分頁或儲存格是空的時，用 Logger.log 提示錯誤並提早 return，不要讓程式炸掉。
- 每個關鍵步驟都加 Logger.log，方便我看執行紀錄除錯。
- 只給我一段完整可貼上執行的程式碼，不要分段解說。
```

🛟 **保底程式碼**（先整段刪掉 Gemini 版再貼；只要改第一行信箱）

```javascript
// ===== 動手 4 保底版：供給緊張詢價提醒 =====
const 我的信箱 = '請改成你自己的信箱@gmail.com';   // ← 只要改這裡

function 供給緊張詢價提醒() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet();
  const 銅分頁 = 試算表.getSheetByName('銅');
  if (!銅分頁) { Logger.log('找不到「銅」分頁，請確認分頁名稱'); return; }

  const 現貨價 = Number(銅分頁.getRange('E3').getValue());
  const 價格漲跌 = Number(銅分頁.getRange('F3').getValue());
  const 庫存量 = Number(銅分頁.getRange('E4').getValue());
  const 庫存增減 = Number(銅分頁.getRange('F4').getValue());
  Logger.log('現貨價=' + 現貨價 + '，漲跌=' + 價格漲跌 + '，庫存=' + 庫存量 + '，庫存增減=' + 庫存增減);

  if (!現貨價 || isNaN(價格漲跌) || isNaN(庫存增減)) {
    Logger.log('讀不到行情數字，請確認 E3/F3/E4/F4 有資料');
    return;
  }

  if (庫存增減 < 0 && 價格漲跌 > 0) {
    const 主旨 = '[新創金屬] 供給緊張訊號：建議趁早詢價鎖價';
    const 內容 =
      '採購夥伴你好：\n\n' +
      '系統偵測到銅市場的供給緊張訊號：\n' +
      '．LME 銅現貨收盤價：' + 現貨價 + ' 美元/噸（漲跌 ' + 價格漲跌 + '）\n' +
      '．LME 銅庫存：' + 庫存量 + ' 噸（增減 ' + 庫存增減 + '）\n\n' +
      '庫存下降＋價格上漲，晚一天詢價多一分成本。\n' +
      '建議今天就向供應商詢價、評估鎖價。\n\n' +
      '— 新創金屬 自動監控系統';
    GmailApp.sendEmail(我的信箱, 主旨, 內容);
    Logger.log('已寄出供給緊張提醒信 → ' + 我的信箱);
  } else {
    Logger.log('今日無供給緊張訊號（庫存增減 ' + 庫存增減 + '、價格漲跌 ' + 價格漲跌 + '）');
  }
}
```

## 動手 5：沉睡客戶預警

1. 照下方 📝 骨架把三個空格填滿（卡住 → 看「參考解答提示詞」）
2. 貼給 Gemini（同一個對話）→ 複製程式碼 → 編輯器 **Ctrl+A 全選 → 刪除 → 貼上** → 儲存
3. 改信箱 → 確認函式下拉選對 → 按「執行」
4. ✅ 收到「[新創金屬] 沉睡客戶預警」信，名單有 **C002** 和 **C007**（天數以上課日為準）

📝 **提示詞骨架（自己填填看）**

```
你是 Google Apps Script 專家。我的試算表有一個分頁叫「歷史訂單」，
欄位是：訂單日期、客戶代號、品項、品類(金屬別)、數量、單價、金額。

請幫我寫一支可以直接執行的函式：
1. 資料在哪：＿＿＿＿＿＿＿＿（哪個分頁？要看哪幾欄？）
2. 判斷條件：＿＿＿＿＿＿＿＿（怎樣算「沉睡」？幾天沒下單？）
3. 行動：＿＿＿＿＿＿＿＿（找出來之後要做什麼？寄給誰？信裡要有什麼？）

要求：變數用中文命名、加 Logger.log、讀不到資料要防呆，給我一段完整可執行的程式碼。
```

🗣 **參考解答提示詞（填好的版本）**

```
你是 Google Apps Script 專家。我的試算表有一個分頁叫「歷史訂單」，
欄位是：訂單日期、客戶代號、品項、品類(金屬別)、數量、單價、金額。

請幫我寫一支可以直接執行的函式：
1. 資料在哪：讀「歷史訂單」分頁的全部資料（第一列是標題），
   用「訂單日期」和「客戶代號」兩欄。
2. 判斷條件：算出每個客戶「最後一次下單日」，距離今天超過 90 天的就是沉睡客戶。
3. 行動：把沉睡客戶整理成一份清單（客戶代號、最後下單日、沉睡幾天），
   用 GmailApp 寄到我的信箱（信箱用常數放在程式最上面），
   主旨是「[新創金屬] 沉睡客戶預警」。如果沒有沉睡客戶就只 Logger.log 記錄。

要求：變數用中文命名、加 Logger.log、讀不到資料要防呆，給我一段完整可執行的程式碼。
```

🛟 **保底程式碼**（先整段刪掉 Gemini 版再貼；只要改第一行信箱）

```javascript
// ===== 動手 5 保底版：沉睡客戶預警 =====
const 預警收件信箱 = '請改成你自己的信箱@gmail.com';   // ← 只要改這裡
const 沉睡天數門檻 = 90;                                // 超過這天數沒下單就算沉睡

function 沉睡客戶預警() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet();
  const 訂單分頁 = 試算表.getSheetByName('歷史訂單');
  if (!訂單分頁) { Logger.log('找不到「歷史訂單」分頁'); return; }

  const 全部資料 = 訂單分頁.getDataRange().getValues();
  if (全部資料.length < 2) { Logger.log('歷史訂單沒有資料'); return; }

  // 第一列是標題：訂單日期 | 客戶代號 | 品項 | 品類(金屬別) | 數量 | 單價 | 金額
  const 最後下單日 = {};   // { 客戶代號: 日期 }
  for (let i = 1; i < 全部資料.length; i++) {
    const 客戶 = 全部資料[i][1];
    const 日期 = new Date(全部資料[i][0]);
    if (!客戶 || isNaN(日期.getTime())) continue;
    if (!最後下單日[客戶] || 日期 > 最後下單日[客戶]) 最後下單日[客戶] = 日期;
  }

  const 今天 = new Date();
  const 沉睡清單 = [];
  Object.keys(最後下單日).sort().forEach(客戶 => {
    const 沉睡天數 = Math.floor((今天 - 最後下單日[客戶]) / 86400000);
    Logger.log(客戶 + ' 最後下單：' + 最後下單日[客戶].toLocaleDateString() + '（' + 沉睡天數 + ' 天前）');
    if (沉睡天數 > 沉睡天數門檻) {
      沉睡清單.push({ 客戶: 客戶, 最後下單: 最後下單日[客戶], 天數: 沉睡天數 });
    }
  });

  if (沉睡清單.length === 0) { Logger.log('目前沒有沉睡客戶'); return; }

  let 內容 = '【沉睡客戶預警】超過 ' + 沉睡天數門檻 + ' 天沒下單的客戶：\n\n';
  沉睡清單.forEach((筆, i) => {
    內容 += (i + 1) + '. ' + 筆.客戶 +
            '｜最後下單 ' + Utilities.formatDate(筆.最後下單, 'Asia/Taipei', 'yyyy/MM/dd') +
            '｜已沉睡 ' + 筆.天數 + ' 天\n';
  });
  內容 += '\n建議業務盡快聯繫關心。\n— 新創金屬 自動監控系統';

  GmailApp.sendEmail(預警收件信箱, '[新創金屬] 沉睡客戶預警', 內容);
  Logger.log('已寄出預警清單，共 ' + 沉睡清單.length + ' 位沉睡客戶');
}
```

---

# 環節三｜把 Gemini 裝進系統

## 動手 6：申請 Gemini API key

1. 打開 `https://aistudio.google.com` → 登入 Google 帳號 🖼️
2. 點「**Get API key / 取得 API 金鑰**」→「**建立 API 金鑰**」🖼️
3. 複製產生的金鑰（`AIza...` 開頭的一串文字）🖼️
4. 回 Apps Script 編輯器：左側「**專案設定**」（齒輪）→ 最下方「**指令碼屬性**」→「**新增指令碼屬性**」🖼️
   - 屬性：`GEMINI_API_KEY`　値：貼上金鑰 → 儲存
5. ✅ 指令碼屬性列表出現一列 `GEMINI_API_KEY`

> 🔒 API key 就像家鑰匙：只放「指令碼屬性」，不寫進程式碼、不截圖、不外傳。

## 動手 7：AI 業績週報

1. 貼下方 🗣 提示詞給 Gemini → 複製程式碼 → 編輯器 **Ctrl+A 全選 → 刪除 → 貼上** → 儲存
2. 改信箱 → 函式下拉選 `AI業績週報` → 按「執行」
3. 第一次會再跳一次授權（多了「連線外部服務」）→ 照動手 2 允許 → 再按一次「執行」
4. ✅ 收到主旨「[新創金屬] AI 業績週報」的信

🗣 **提示詞（照貼可用）**

```
你是 Google Apps Script 專家。我有一份綁定 Google 試算表的 Apps Script 專案，
試算表有「歷史訂單」分頁，欄位是：訂單日期、客戶代號、品項、品類(金屬別)、數量、單價、金額。
我的 Gemini API key 已放在指令碼屬性，名稱是 GEMINI_API_KEY。

請幫我寫一支可以直接執行的函式：
1. 彙總「歷史訂單」：總金額、各品類(金屬別)的金額佔比、最近四週每週的訂單金額。
2. 把彙總數字丟給 Gemini API 寫成週報。呼叫方式：
   用 UrlFetchApp 呼叫模型 gemini-2.5-flash，端點
   https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=API金鑰，
   並把「呼叫 Gemini」抽成一個共用函式 呼叫Gemini_(提示詞)，之後其他功能也能重複使用。
   請 Gemini 寫一份 250 字以內的白話業績週報，內容套用四要素框架：
   推什麼（哪個品類有機會）／推多少／為什麼是現在／怎麼開口。
   限制：只根據提供的數字，不要杜撰。
3. 用 GmailApp 把週報寄到我的信箱（信箱用常數放在程式最上面），主旨「[新創金屬] AI 業績週報」。

要求：變數用中文命名、關鍵步驟加 Logger.log、API 回傳異常時要印出原始回應方便除錯，
給我一段完整可執行的程式碼。
```

🛟 **保底程式碼**（先整段刪掉 Gemini 版再貼；含 `呼叫Gemini_` 小幫手，整段貼上、只改第一行信箱）

```javascript
// ===== 動手 7 保底版：AI 業績週報 =====
const 週報收件信箱 = '請改成你自己的信箱@gmail.com';   // ← 只要改這裡

function AI業績週報() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet();
  const 訂單分頁 = 試算表.getSheetByName('歷史訂單');
  if (!訂單分頁) { Logger.log('找不到「歷史訂單」分頁'); return; }
  const 全部資料 = 訂單分頁.getDataRange().getValues();

  // 1) 彙總：總金額、各品類金額、最近四週每週金額
  let 總金額 = 0;
  const 品類金額 = {};
  const 每週金額 = { '本週': 0, '1週前': 0, '2週前': 0, '3週前': 0 };
  const 今天 = new Date();
  for (let i = 1; i < 全部資料.length; i++) {
    const 日期 = new Date(全部資料[i][0]);
    const 品類 = 全部資料[i][3];
    const 金額 = Number(全部資料[i][6]) || 0;
    if (isNaN(日期.getTime())) continue;
    總金額 += 金額;
    品類金額[品類] = (品類金額[品類] || 0) + 金額;
    const 週差 = Math.floor((今天 - 日期) / (86400000 * 7));
    if (週差 === 0) 每週金額['本週'] += 金額;
    else if (週差 === 1) 每週金額['1週前'] += 金額;
    else if (週差 === 2) 每週金額['2週前'] += 金額;
    else if (週差 === 3) 每週金額['3週前'] += 金額;
  }

  let 數據 = '歷史訂單總金額：' + 總金額.toLocaleString() + ' 元\n各品類金額：';
  Object.keys(品類金額).forEach(k => {
    數據 += k + ' ' + 品類金額[k].toLocaleString() + ' 元（' +
            Math.round(品類金額[k] / 總金額 * 100) + '%）、';
  });
  數據 += '\n最近四週金額：';
  Object.keys(每週金額).forEach(k => { 數據 += k + ' ' + 每週金額[k].toLocaleString() + ' 元、'; });
  Logger.log('彙總數據：\n' + 數據);

  // 2) 請 Gemini 寫週報（四要素框架）
  const 提示詞 =
    '你是「新創金屬」（B2B 金屬扣件製造商）的業績分析助理。\n' +
    '任務：根據下列數字，寫一份給老闆看的白話業績週報，250 字以內。\n' +
    '內容要套用四要素框架：推什麼（哪個品類有機會）／推多少／為什麼是現在／怎麼開口。\n' +
    '限制：只根據提供的數字，不要杜撰。\n\n數據：\n' + 數據;
  const 週報 = 呼叫Gemini_(提示詞);
  if (!週報) return;

  // 3) 寄出
  GmailApp.sendEmail(週報收件信箱, '[新創金屬] AI 業績週報', 週報);
  Logger.log('週報已寄出 → ' + 週報收件信箱);
}

// 共用小幫手：把提示詞丟給 Gemini，回傳文字（之後其他 AI 功能也用它）
function 呼叫Gemini_(提示詞) {
  const 金鑰 = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!金鑰) { Logger.log('尚未設定 GEMINI_API_KEY，請先完成動手 6'); return null; }
  const 網址 = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + 金鑰;
  const 回應 = UrlFetchApp.fetch(網址, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ contents: [{ parts: [{ text: 提示詞 }] }] }),
    muteHttpExceptions: true,
  });
  const 資料 = JSON.parse(回應.getContentText());
  if (資料.candidates && 資料.candidates[0].content.parts[0].text) {
    return 資料.candidates[0].content.parts[0].text;
  }
  Logger.log('Gemini 回傳異常：' + 回應.getContentText());
  return null;
}
```

## 動手 8：設定每週自動觸發器

> 原則：先手動跑一次確認會動（動手 7 已驗證），再交給排程。

1. 編輯器左側點「**觸發條件**」（鬧鐘圖示）🖼️
2. 右下「**新增觸發條件**」→ 設定：
   - 選擇要執行的函式：`AI業績週報`
   - 選取活動來源：**時間驅動**
   - 選取時間型觸發條件類型：**週計時器**
   - 選取星期幾：**每週星期一**　·　選取時段：**上午 8 點到 9 點**
3. 按「**儲存**」（可能再跳授權，照動手 2 允許）
4. ✅ 觸發條件列表多了一列，函式欄顯示 `AI業績週報` —— 從此每週一早上，週報自己寄進信箱

---

# 環節四｜GAS 也能做網頁：B2B 訂單後台

## 動手 9：搭建出你的訂單後台

### 9-1 新增程式檔（⚠️ 不要動原本的程式碼檔——動手 8 的排程還要用它）

1. 編輯器左上「**＋**」→「**指令碼**」→ 命名 `後台` → Enter
2. 在新檔案裡 **Ctrl+A 全選 → 刪除 → 貼上**下方範本 `後台.gs` → 儲存

### 9-2 新增網頁檔

1. 編輯器左上「**＋**」→「**HTML**」→ 命名 `index`（不用打 .html）→ Enter
2. **Ctrl+A 全選刪除檔案裡預設的內容** → 貼上下方範本 `index.html` → 儲存，確認沒有紅字

### 9-3 部署

1. 右上角「**部署**」→「**新增部署作業**」🖼️
2. 左側齒輪選擇類型：「**網頁應用程式**」
3. 設定：說明 `訂單後台 v1`　·　執行身分：**我**　·　誰可以存取：**只有我自己**
4. 按「**部署**」→ 跳授權就照動手 2 允許
5. 複製「**網頁應用程式**」的網址 → 開新分頁貼上打開 🖼️

### 9-4 驗證

1. ✅ 看到「新創金屬｜訂單後台」訂單表格
2. ✅ 表單新增一筆訂單 → 回試算表「歷史訂單」最下面多了一列
3. 📱 加分題：手機打開你的網址（手機要登入**同一個 Google 帳號**才打得開；打不開不影響過關）

> ⚠️ **部署常見問題**
> - **改了程式，網頁沒變**：「部署 → 管理部署作業 → ✏️ 編輯 → 版本選『新版本』→ 部署」，改版才會生效。
> - **「你沒有存取權」**：重新部署選「只有我自己」，並確認瀏覽器登入同一個 Google 帳號。
> - **「Google 尚未驗證這個應用程式」**：「進階 → 前往專案（不安全）→ 允許」，自己寫的程式，安全。

**範本一：`後台.gs`**（貼進 9-1 新增的檔案）

```javascript
// ===== 動手 9 範本：訂單後台 =====
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('新創金屬｜訂單後台');
}

// 讀全部訂單，回傳給網頁（日期轉成字串，避免傳輸問題）
function 取得訂單() {
  const 分頁 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('歷史訂單');
  if (!分頁) return [];
  const 資料 = 分頁.getDataRange().getValues();
  return 資料.map((列, i) => 列.map((格, j) => {
    if (i > 0 && j === 0 && 格 instanceof Date) {
      return Utilities.formatDate(格, 'Asia/Taipei', 'yyyy/MM/dd');
    }
    return String(格);
  }));
}

// 新增一筆訂單：日期用今天，金額＝數量×單價
function 新增訂單(表單) {
  const 分頁 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('歷史訂單');
  if (!分頁) throw new Error('找不到「歷史訂單」分頁');
  const 數量 = Number(表單.數量), 單價 = Number(表單.單價);
  if (!表單.客戶代號 || !表單.品項 || !數量 || !單價) throw new Error('欄位不完整');
  分頁.appendRow([new Date(), 表單.客戶代號, 表單.品項, 表單.品類, 數量, 單價, 數量 * 單價]);
  return 'OK';
}
```

**範本二：`index.html`**（貼進 9-2 新增的檔案）

```html
<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <style>
    body { font-family: sans-serif; margin: 24px; }
    h1 { font-size: 20px; }
    table { border-collapse: collapse; width: 100%; margin-bottom: 24px; }
    th, td { border: 1px solid #ccc; padding: 6px 10px; font-size: 14px; }
    th { background: #1565c0; color: #fff; }
    form { display: flex; gap: 8px; flex-wrap: wrap; align-items: flex-end; }
    label { display: flex; flex-direction: column; font-size: 12px; }
    input, select { padding: 6px; }
    button { padding: 8px 16px; background: #1565c0; color: #fff; border: 0; cursor: pointer; }
    #訊息 { margin-top: 8px; color: #2e7d32; }
  </style>
</head>
<body>
  <h1>新創金屬｜訂單後台</h1>
  <table id="訂單表格"><tr><td>載入中…</td></tr></table>

  <h3>新增訂單</h3>
  <form onsubmit="送出(event)">
    <label>客戶代號 <input id="客戶代號" placeholder="C001" required></label>
    <label>品項 <input id="品項" placeholder="銅螺栓" required></label>
    <label>品類 <select id="品類"><option>銅</option><option>鋁</option><option>鋼</option></select></label>
    <label>數量 <input id="數量" type="number" min="1" required></label>
    <label>單價 <input id="單價" type="number" min="1" required></label>
    <button type="submit">送出</button>
  </form>
  <div id="訊息"></div>

  <script>
    function 載入表格() {
      google.script.run.withSuccessHandler(畫表格).取得訂單();
    }
    function 畫表格(資料) {
      const 表格 = document.getElementById('訂單表格');
      表格.innerHTML = '';
      資料.forEach((列, i) => {
        const tr = document.createElement('tr');
        列.forEach(格 => {
          const cell = document.createElement(i === 0 ? 'th' : 'td');
          cell.textContent = 格;
          tr.appendChild(cell);
        });
        表格.appendChild(tr);
      });
    }
    function 送出(e) {
      e.preventDefault();
      const 表單 = {
        客戶代號: document.getElementById('客戶代號').value,
        品項: document.getElementById('品項').value,
        品類: document.getElementById('品類').value,
        數量: document.getElementById('數量').value,
        單價: document.getElementById('單價').value,
      };
      google.script.run
        .withSuccessHandler(() => {
          document.getElementById('訊息').textContent = '✅ 新增成功！';
          載入表格();
        })
        .withFailureHandler(err => {
          document.getElementById('訊息').textContent = '❌ ' + err.message;
        })
        .新增訂單(表單);
    }
    載入表格();
  </script>
</body>
</html>
```

## 動手 10：幫後台加一個新功能

1. 想一個小功能（例：訂單表格多一欄「小計金額」＝數量×單價）
2. 把你的 `後台.gs` 和 `index.html` 全文＋下方 🗣 提示詞貼給 Gemini
3. 把 Gemini 改好的檔案貼回對應檔案（**Ctrl+A 全選 → 刪除 → 貼上**）→ 儲存
4. ⚠️ 這次走「**部署 → 管理部署作業 → ✏️ 編輯 → 版本選『新版本』→ 部署**」（不是「新增部署作業」，新增會生出另一個網址）🖼️
5. ✅ 重新整理你的網址，新功能出現

🗣 **提示詞範例（把＿＿換成你的功能）**

```
你是 Google Apps Script 專家。我有一個已部署的 GAS 網頁應用程式（訂單後台），
目前的程式檔和 index.html 如下：

【貼上你的 後台.gs 全文】
【貼上你的 index.html 全文】

我想要加一個功能：＿＿＿＿＿＿＿＿（例：訂單表格最右邊多一欄「小計金額」＝數量×單價）。

請給我修改後的完整檔案內容（有改到哪個檔就給哪個檔的全文），
維持原本的中文命名風格，不要刪掉現有功能。
```

---

# 課後加碼｜AI 客製信件話術

> 回家練習：讓 Gemini 讀每位沉睡客戶的歷史訂單，寫出「一人一款」的關心話術。
> 前置：動手 6 的 API key、動手 7 的 `呼叫Gemini_`（保底版貼在同一專案即可直接用）。

🗣 **提示詞（照貼可用）**

```
你是 Google Apps Script 專家。延續前面的專案：試算表有「歷史訂單」分頁，
欄位是：訂單日期、客戶代號、品項、品類(金屬別)、數量、單價、金額。
我的 Gemini API key 已放在指令碼屬性，名稱是 GEMINI_API_KEY。

請幫我寫一支可以直接執行的函式：
1. 掃「歷史訂單」，找出超過 90 天沒下單的沉睡客戶，
   並整理每位沉睡客戶的歷史訂單摘要（買過哪些品項、各買幾次、最後下單日）。
2. 用 UrlFetchApp 呼叫 Gemini API（模型 gemini-2.5-flash，
   端點 https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=API金鑰），
   請 Gemini 依每位客戶的購買紀錄，各寫一段 100 字以內、口吻誠懇的補貨關心話術。
3. 把所有客戶的客製話術整理成一封信，用 GmailApp 寄到我的信箱
   （信箱用常數放在程式最上面），主旨「[新創金屬] 沉睡客戶客製話術」。

要求：變數用中文命名、關鍵步驟加 Logger.log、API 回傳異常時要印出原始回應方便除錯，
給我一段完整可執行的程式碼。
```

🛟 **保底程式碼**（需搭配動手 7 保底版的 `呼叫Gemini_`）

```javascript
// ===== 加碼練習保底版：AI 客製信件話術 =====
const 話術收件信箱 = '請改成你自己的信箱@gmail.com';   // ← 只要改這裡

function AI客製沉睡客戶話術() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet();
  const 訂單分頁 = 試算表.getSheetByName('歷史訂單');
  if (!訂單分頁) { Logger.log('找不到「歷史訂單」分頁'); return; }
  const 全部資料 = 訂單分頁.getDataRange().getValues();

  // 1) 整理每位客戶的最後下單日與購買紀錄
  const 客戶紀錄 = {};   // { 客戶代號: { 最後下單: Date, 品項統計: {品項: 次數} } }
  for (let i = 1; i < 全部資料.length; i++) {
    const [日期值, 客戶, 品項] = [全部資料[i][0], 全部資料[i][1], 全部資料[i][2]];
    const 日期 = new Date(日期值);
    if (!客戶 || isNaN(日期.getTime())) continue;
    if (!客戶紀錄[客戶]) 客戶紀錄[客戶] = { 最後下單: 日期, 品項統計: {} };
    if (日期 > 客戶紀錄[客戶].最後下單) 客戶紀錄[客戶].最後下單 = 日期;
    客戶紀錄[客戶].品項統計[品項] = (客戶紀錄[客戶].品項統計[品項] || 0) + 1;
  }

  // 2) 篩出沉睡客戶（>90 天），組成給 AI 的素材
  const 今天 = new Date();
  let 素材 = '';
  Object.keys(客戶紀錄).sort().forEach(客戶 => {
    const 天數 = Math.floor((今天 - 客戶紀錄[客戶].最後下單) / 86400000);
    if (天數 <= 90) return;
    const 品項清單 = Object.keys(客戶紀錄[客戶].品項統計)
      .map(p => p + '×' + 客戶紀錄[客戶].品項統計[p]).join('、');
    素材 += '客戶 ' + 客戶 + '：已 ' + 天數 + ' 天未下單，過去買過 ' + 品項清單 + '\n';
  });
  if (!素材) { Logger.log('目前沒有沉睡客戶'); return; }
  Logger.log('沉睡客戶素材：\n' + 素材);

  // 3) 呼叫 Gemini API 生成客製話術
  const 提示詞 =
    '你是 B2B 金屬扣件公司「新創金屬」的資深業務。\n' +
    '以下是幾位很久沒下單的客戶與他們過去的購買紀錄，' +
    '請針對每位客戶各寫一段 100 字以內、口吻誠懇不推銷過頭的補貨關心話術，' +
    '要提到他常買的品項。格式：每位客戶一段，開頭標客戶代號。\n\n' + 素材;
  const 話術 = 呼叫Gemini_(提示詞);
  if (!話術) return;

  // 4) 寄給自己
  GmailApp.sendEmail(話術收件信箱, '[新創金屬] 沉睡客戶客製話術',
    '以下是 AI 為每位沉睡客戶量身寫的關心話術，業務確認後再親自寄出：\n\n' + 話術);
  Logger.log('客製話術已寄出 → ' + 話術收件信箱);
}
```

---

# 🔒 安全紅線（下課前一定要記得）

1. **API key 不外洩**：只放「指令碼屬性」，不寫進程式碼、不截圖分享、不貼公開網頁。
2. **免費層不送真資料**：真客戶名單、個資、機密報價不送 Gemini API 免費層，只送彙總或去識別化資料（今天用的都是虛構教材資料）。
3. **自動信只寄自己**：課堂練習一律寄自己或講師信箱；回公司上線後，寄外部信前務必人工確認——按下送出的判斷永遠留給人。網頁後台存取權維持「只有我自己」。
