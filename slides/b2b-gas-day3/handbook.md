# 0722_B2B訂單分析_課程手冊

> 📌 **本頁是今天課程的「程式碼 / 提示詞」複製區**
> 每個練習都附一段可直接複製貼上的內容。請對齊投影片上的「環節 X — 動手 Y」找到對應段落。
> 講師收件信箱：`rpaidevolper@gmail.com`
>
> （🖼️ 標記處的操作截圖由講師另行補上）

---

## 目錄

- **環節一｜認識 Apps Script，第一次寫進試算表**
  - 動手 1：讓程式碼跟你打招呼
  - 動手 2：讓程式把資料寫進 Sheet
  - 動手 3：寄一封自我介紹給講師
- **環節二｜把需求說清楚，讓 AI 幫你寫**
  - 動手 4：供給緊張詢價提醒（標準提示詞＋保底程式碼）
  - 動手 5：沉睡客戶預警（提示詞骨架＋保底程式碼）
- **環節三｜把 Gemini 裝進系統**
  - 動手 6：申請 Gemini API key
  - 動手 7：AI 客製信件話術
  - 動手 8：AI 業績週報
  - 動手 9：設定每週自動觸發器
- **環節四｜GAS 也能做網頁：B2B 訂單後台**
  - 動手 10：生成訂單後台程式碼
  - 動手 11：部署你的後台網頁
- **安全紅線（下課前一定要記得）**

---

# 環節一｜認識 Apps Script，第一次寫進試算表

## 動手 1：讓程式碼跟你打招呼

在 Apps Script 編輯器貼上以下程式碼 → 按上方「執行」→ 看下方「執行紀錄」跳出訊息。`Logger.log(...)` 只會印在執行紀錄，不會改到任何東西。

```javascript
function myFunction() {
  Logger.log('hello: 你的名字');
}
```

## 動手 2：讓程式把資料寫進 Sheet

貼上程式碼 → 按「執行」→ 切回試算表，看 A1 真的多了文字。`getRange('A1').setValue(...)` 會真的把文字寫進指定的格子。

```javascript
function myFunction() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  試算表.getRange('A1').setValue('我成功把文字寫進來了！');
}
```

## 動手 3：寄一封自我介紹給講師

先在試算表 A2 填姓名、B2 填一句自我介紹 → 貼上程式碼 → 執行 → 講師就會收到你的信。

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

> 🔑 **首次授權**：第一次執行時 Google 會跳出授權視窗（要讀 Sheet、寄 Gmail）。
> 點「**進階 → 前往專案（不安全）→ 允許**」即可，這是正常流程，講師會現場示範這一關。🖼️

---

# 環節二｜把需求說清楚，讓 AI 幫你寫

> 從這裡開始，程式碼不是我們自己寫——我們把「需求」說清楚，交給 Gemini 幫我們寫。
> 流程都一樣：**劇情 → 需求 → 提示詞 → Gemini 產出 GAS → 貼回編輯器執行**。
> 若 Gemini 生的程式跑不動，每題最下方都有講師測過的「保底程式碼」，貼那份就好。

## 動手 4：供給緊張詢價提醒

**劇情**：LME 銅庫存連日下降、現貨價又在漲＝供給緊張訊號，晚一天詢價就多一分成本。我們要讓系統自己判斷、自己寄信提醒。

**步驟**：把下面的標準提示詞貼給 Gemini（同一個對話裡先把你的行情 Google Sheet 內容給 Gemini 看：直接複製「銅」分頁貼上，或分享檔案）→ 把 Gemini 產出的程式碼貼進 Apps Script → 把信箱改成自己的 → 執行 → 打開自己的信箱收信。

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

🛟 **保底程式碼（Gemini 生的跑不動就貼這份）**

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

**劇情**：「讓沉睡的訂單開口」——41 筆歷史訂單裡，有客戶悄悄消失了。這次換你自己把劇情說給 Gemini 聽。

**步驟**：照下面的骨架，自己填出提示詞 → 貼給 Gemini → 產出的程式碼貼回編輯器 → 改信箱 → 執行 → 看誰被抓出來（答案：C002、C007）。

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

🛟 **保底程式碼**

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

> 剛剛是「你去找 Gemini」；接下來把 Gemini 裝進系統裡，讓程式自己去問 AI。

## 動手 6：申請 Gemini API key

1. 打開 **Google AI Studio**：`https://aistudio.google.com` → 登入 Google 帳號 🖼️
2. 點左側（或右上）「**Get API key / 取得 API 金鑰**」→「**建立 API 金鑰**」🖼️
3. 複製產生的金鑰（一串 `AIza...` 開頭的文字）🖼️
4. 回到 Apps Script 編輯器：左側「**專案設定**」（齒輪）→ 最下方「**指令碼屬性**」→「新增指令碼屬性」🖼️
   - 屬性名稱：`GEMINI_API_KEY`
   - 值：貼上剛剛複製的金鑰 → 儲存

> 🔒 **保管提醒**：API key 就像你家鑰匙——**不要**貼在程式碼裡、不要傳給別人、不要貼到公開的地方。
> 放在「指令碼屬性」就是為了讓程式讀得到、別人看不到。

## 動手 7：AI 客製信件話術

**劇情**：動手 5 的預警信是死板模板，每個客戶收到的都一樣。現在讓 Gemini 讀每位沉睡客戶的歷史訂單，幫業務寫出「一人一款」的關心話術。

**步驟**：把提示詞貼給 Gemini → 產出程式碼貼回編輯器（要先完成動手 6 的 API key 設定）→ 改信箱 → 執行 → 收到一封「每位客戶都有專屬話術」的信。

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

🛟 **保底程式碼**

```javascript
// ===== 動手 7 保底版：AI 客製信件話術 =====
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

// 共用小幫手：把提示詞丟給 Gemini，回傳文字（動手 8 也會用到）
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

## 動手 8：AI 業績週報

**劇情**：老闆每週一早上都要一份「白話的」業績摘要。讓 GAS 自己彙總訂單、自己請 Gemini 寫、自己寄出。

**步驟**：貼提示詞給 Gemini → 程式碼貼回編輯器（會用到動手 7 的 `呼叫Gemini_` 小幫手；貼保底版就不用擔心）→ 改信箱 → 執行 → 收到第一份 AI 業績週報。

🗣 **提示詞（照貼可用）**

```
延續前面的專案（「歷史訂單」分頁、GEMINI_API_KEY 已設定）。
請幫我寫一支可以直接執行的函式：
1. 彙總「歷史訂單」：總金額、各品類(金屬別)的金額佔比、最近四週每週的訂單金額。
2. 把彙總數字丟給 Gemini API（gemini-2.5-flash），請它寫一份 250 字以內的白話業績週報，
   內容要套用四要素框架：推什麼（哪個品類有機會）／推多少／為什麼是現在／怎麼開口。
   限制：只根據提供的數字，不要杜撰。
3. 用 GmailApp 把週報寄到我的信箱（常數放最上面），主旨「[新創金屬] AI 業績週報」。

要求：變數用中文命名、加 Logger.log、API 異常要印原始回應，給我一段完整可執行的程式碼。
```

🛟 **保底程式碼**（需要搭配動手 7 保底版裡的 `呼叫Gemini_`；兩段貼在同一個專案即可）

```javascript
// ===== 動手 8 保底版：AI 業績週報 =====
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
```

## 動手 9：設定每週自動觸發器

> 原則：**先手動執行一次確認會動，再交給排程。**（你剛剛在動手 8 已經手動驗證過了）

1. Apps Script 編輯器左側點「**觸發條件**」（鬧鐘圖示）🖼️
2. 右下「**新增觸發條件**」
3. 設定如下：
   - 選擇要執行的函式：`AI業績週報`
   - 選取活動來源：**時間驅動**
   - 選取時間型觸發條件類型：**週計時器**
   - 選取星期幾：**每週星期一**
   - 選取時段：**上午 8 點到 9 點**
4. 按「儲存」（可能會再跳一次授權，照動手 3 的方式允許即可）

設定完成的那一刻起——**你睡覺，它也在跑**。每週一早上，老闆（現在是你自己的信箱）都會收到 AI 寫好的業績週報。

---

# 環節四｜GAS 也能做網頁：B2B 訂單後台

## 動手 10：生成訂單後台程式碼

**劇情**：GAS 不只會寄信——它還能給你一個「網址」，打開就是你的訂單後台，隨時看資料、加資料。

**步驟**：把提示詞貼給 Gemini → 產出兩個檔案的內容：`Code.gs`（程式）與 `index.html`（網頁畫面）→ 在 Apps Script 編輯器把程式貼進 `Code.gs`，再點「＋ → HTML」新增檔案命名 `index`，貼進 HTML 內容 → 先不要執行，直接進動手 11 部署。

🗣 **提示詞（照貼可用）**

```
你是 Google Apps Script 專家。我的試算表有「歷史訂單」分頁，
欄位是：訂單日期、客戶代號、品項、品類(金屬別)、數量、單價、金額。

請幫我做一個可以部署成「網頁應用程式」的訂單後台，需要兩個檔案：
1. Code.gs：
   - doGet()：回傳 index.html 畫面。
   - 取得訂單()：讀「歷史訂單」全部資料回傳給網頁（日期先格式化成 yyyy/MM/dd 字串）。
   - 新增訂單(資料)：把一筆新訂單（客戶代號、品項、品類、數量、單價）寫到「歷史訂單」
     最下面一列，訂單日期用今天，金額＝數量×單價。
2. index.html：
   - 用表格顯示全部訂單。
   - 表格下方有一個「新增訂單」表單（客戶代號、品項、品類、數量、單價），
     按「送出」用 google.script.run 呼叫 新增訂單()，成功後重新載入表格。
   - 樣式簡潔即可，標題「新創金屬｜訂單後台」。

要求：變數與函式用中文命名、加防呆、給我兩個檔案的完整內容。
```

🛟 **保底程式碼**

**檔案一：`Code.gs`**（貼進原本的程式碼檔）

```javascript
// ===== 動手 10 保底版：訂單後台 Code.gs =====
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

**檔案二：`index.html`**（編輯器左上「＋」→「HTML」→ 命名 `index` → 貼上）

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

## 動手 11：部署你的後台網頁

1. 編輯器右上角點「**部署**」→「**新增部署作業**」🖼️
2. 左側齒輪選擇類型：「**網頁應用程式**」
3. 設定：
   - 說明：`訂單後台 v1`（隨意）
   - 執行身分：**我**（你的帳號）
   - 誰可以存取：**只有我自己**（課堂練習選這個最安全）
4. 按「**部署**」→ 可能跳授權視窗，照動手 3 的方式「進階 → 允許」
5. 複製「**網頁應用程式**」的網址 → 開新分頁貼上打開 🖼️
6. **驗證**：看到訂單表格 → 在表單新增一筆訂單 → 回試算表確認「歷史訂單」最下面真的多了一列！

> ⚠️ **部署常見問題**
> - **改了程式，網頁沒變**：要點「部署 → 管理部署作業 → ✏️ 編輯 → 版本選『新版本』→ 部署」，改版才會生效。
> - **打開網址出現「你沒有存取權」**：部署時「誰可以存取」選錯了，重新部署選「只有我自己」，並確認瀏覽器登入的是同一個 Google 帳號。
> - **授權卡在「Google 尚未驗證這個應用程式」**：點「進階 → 前往專案（不安全）→ 允許」，這是自己寫的程式，安全。

---

# 🔒 安全紅線（下課前一定要記得）

1. **API key 不外洩**：只放「指令碼屬性」，不寫進程式碼、不截圖分享、不貼到公開網頁。外洩可能被盜用產生費用。
2. **免費層不送真資料**：Gemini API 免費層的輸入輸出可能被 Google 用於改善模型——**真客戶名單、個資、機密報價不要送**，只送彙總數字或去識別化資料（今天課堂用的都是虛構教材資料）。
3. **自動信只寄自己**：課堂與練習中，所有自動信一律寄自己或講師信箱，**不寄真客戶、真供應商**。回公司後要上線，寄外部信前務必人工確認內容——系統負責「不漏」，按下送出的判斷永遠留給人。
