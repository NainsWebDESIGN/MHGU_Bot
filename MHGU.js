function doPost(e) {
  //認證身份，重新輸入line@ channel_access_token
  var CHANNEL_ACCESS_TOKEN =
    "bI+T1cWqJkGLb1op3yvyUyLN+mNMbC+6hmixT7qUhtDOekl2T0+EE/f42SahhdPfNKJZHOHbiJECbUVi1CUfgXNWfMae8jHgSMnCjy1aF7tQTIcOD+NviGy8YRU4mX61LFvMN5+fo0TLhCKz5J1sMgdB04t89/1O/w1cDnyilFU=";
  var msg = JSON.parse(e.postData.contents);

  //除錯用
  Logger.log(msg);
  console.log(msg);

  //從接收到的訊息中取出 replyToken 和發送的訊息文字
  var replyToken = msg.events[0].replyToken;
  var userMessage = msg.events[0].message.text;
  var reply_message = [];
  if (typeof replyToken === "undefined") {
    return;
  }
  let call = "獵人小幫手",
    call_1 = "獵幫",
    call_2 = "MHGU",
    call_3 = "mhgu",
    nothing =
      "獵人小幫手(GU)聽到了~\r\n如想查詢:\r\n\r\n1. 呼喚我的名字\r\n獵人小幫手\r\n獵幫\r\nMHGU(大小寫皆可)\r\n\r\n2. 關鍵任務\r\n請於字句中加入「上位、下位或是集會所」、「關鍵」及「X星」字樣，如:下位的關鍵任務來個5星\r\n註: 幾星可用中文也可用數字\r\n\r\n3. 採集分布:\r\n請於字句中加入「採集物品名稱」及「採集」字樣\r\n註: 如欲查詢可查詢事項請輸入「採集表」(精算道具不統計)\r\n\r\n4. 調和表:\r\n請於字句中加入「調和物品名稱」及「調和」字樣\r\n註: 如欲查詢可查詢事項請輸入「調和表」\r\n\r\n5. 肉質表:\r\n請於字句中加入「魔物名稱」及「肉質」字樣\r\n註: 包含掉落物\r\n如欲查詢可查詢事項請輸入「魔物表」\r\n(小型魔物則顯示第一隻的目錄，例:雷光蟲)\r\n\r\n6. 計算會心期望值\r\n請於字句中加入「會心期望值」及「您的會心率」字樣\r\n註: 中間加入空格(如有超會心則將「會心期望值」改為「超會心期望值」, 殘忍會心亦同)\r\n例: 超會心期望值 70\r\n\r\n7. 萬用文章及網站:\r\n(1) 鹽酸文章(首頁):\r\nhttps://reurl.cc/mGaZDl\r\n(2) 白wiki(首頁):\r\nhttp://wiki.mhxg.org/\r\n(3) 配裝器:\r\nhttps://reurl.cc/8W1laR\r\n(4) 配裝器教學文章(鹽酸):\r\nhttps://reurl.cc/yQ2m6D\r\n(5) 配裝器教學影片(單身狗):\r\nhttps://reurl.cc/Go7XKW\r\n(6) 中英文對照表(台wiki):\r\nhttps://reurl.cc/12D0mY\r\n(7) 中英文對照表(鹽酸):\r\nhttps://reurl.cc/vermme\r\n(8) 獵貓培育(鹽酸):\r\nhttps://reurl.cc/3jG339\r\n(9) 獵貓培育(精玩):\r\nhttps://reurl.cc/5Ge8MM\r\n(10) 精算道具繳納攻略(大王):\r\nhttps://reurl.cc/Qj0W4q\r\n(11) 近戰動作值:\r\nhttps://reurl.cc/7e6pXD",
    pushSystem = (obj) => {
      let box = [];
      Object.keys(obj).forEach((item) => {
        if (userMessage.indexOf(item) >= 0) {
          box.push(item);
        }
      });
      return box;
    };

  const TaskIf = () => {
      let level = [];
      let box = pushSystem(Task);
      if (box.length !== 1) {
        return false;
      }
      let levelBox =
        box[0] == "集會所"
          ? [
              "1星",
              "2星",
              "3星",
              "4星",
              "5星",
              "6星",
              "7星",
              "一星",
              "二星",
              "三星",
              "四星",
              "五星",
              "六星",
              "七星",
              "G1",
              "G2",
              "G3",
              "G4",
            ]
          : [
              "1星",
              "2星",
              "3星",
              "4星",
              "5星",
              "6星",
              "7星",
              "8星",
              "9星",
              "10星",
              "一星",
              "二星",
              "三星",
              "四星",
              "五星",
              "六星",
              "七星",
              "八星",
              "九星",
              "十星",
            ];
      levelBox.forEach((item) => {
        if (userMessage.indexOf(item) >= 0) {
          level.push(item);
        }
      });
      if (level.length !== 1) {
        return false;
      }
      let trans = {
        "1星": "一星",
        "2星": "二星",
        "3星": "三星",
        "4星": "四星",
        "5星": "五星",
        "6星": "六星",
        "7星": "七星",
        "8星": "八星",
        "9星": "九星",
        "10星": "十星",
        一星: "一星",
        二星: "二星",
        三星: "三星",
        四星: "四星",
        五星: "五星",
        六星: "六星",
        七星: "七星",
        八星: "八星",
        九星: "九星",
        十星: "十星",
        G1: "G1",
        G2: "G2",
        G3: "G3",
        G4: "G4",
      };
      return Task[box[0]][trans[level]];
    },
    repeat = (item) => {
      if (item.length == 1) return item[0];
      let Re = (_name) => (userMessage.indexOf(_name) >= 0 ? item[1] : item[0]);
      switch (item[0]) {
        case "閣螳螂":
          return Re("要塞閣螳螂");
        case "恐暴龍":
          return Re("怒食恐暴龍");
        case "碎龍":
          return Re("猛爆碎龍");
        case "金獅子":
          return Re("激昂金獅子");
        case "岩龍":
          return Re("溶岩龍");
        case "黑龍":
          return Re("煌黑龍");
        case "怪鳥":
          return Re("毒怪鳥");
      }
    },
    ThingIf = (item) => {
      let box = pushSystem(item);
      switch (box.length) {
        case 0:
          return false;
        case 1:
          return item[box[0]];
        default:
          if (item == Succulent) {
            return item[repeat(box)];
          }
          let finalStr = [];
          box.forEach((value) => finalStr.push(item[value]));
          return finalStr.join("\r\n\r\n");
      }
    };

  let MessageObj = () => {
      let finalBox = {},
        formateBox = (key, value) => {
          finalBox["key"] = key;
          finalBox["value"] = value;
        };

      if ([call, call_1, call_2, call_3].some((item) => item == userMessage)) {
        formateBox("nothing", { type: "text", text: nothing });
        return finalBox;
      }

      if (["調和表", "採集表", "魔物表"].some((item) => item == userMessage)) {
        let table = (message) => {
            let Table = Object.keys(message);
            Table.unshift(`${userMessage}:`);
            return Table;
          },
          message = {
            調和表: Reconcile,
            採集表: Material,
            魔物表: Succulent,
          };
        formateBox("message", {
          type: "text",
          text: table(message[userMessage]).join("\r\n"),
        });
        return finalBox;
      }

      if (userMessage.indexOf("會心期望值") >= 0) {
        if (userMessage.length > 10) return;
        let $obj = userMessage.split(" ");
        if ($obj.length !== 2) return;
        let final, indexof, heart;
        if (userMessage.indexOf("殘忍會心") >= 0) {
          let box = {
            45: 1.028125,
            40: 1.025,
            35: 1.021875,
            30: 1.01875,
            25: 1.015625,
            20: 1.0125,
            15: 1.009375,
            10: 1.00625,
            5: 1.003125,
            0: 1,
          };
          indexof = true;
          final = box[$obj[1]];
        } else {
          (heart = userMessage.indexOf("超會心") >= 0 ? 1.4 : 1.25),
            (two = Number($obj[1]) / 100);
          indexof = false;
          final = two * heart + (1 - two);
        }
        formateBox("會心", {
          type: "text",
          text: `${
            heart == 1.4 ? "有超" : heart == 1.25 ? "無超" : "殘忍"
          }會心，且會心率${indexof == true ? "-" : ""}${
            $obj[1]
          }時\r\n您的期望值為: ${final} !`,
        });
        return finalBox;
      }

      if (userMessage.indexOf("關鍵") >= 0 && TaskIf() !== false) {
        formateBox("關鍵", { type: "text", text: TaskIf() });
        return finalBox;
      }

      if (userMessage.indexOf("採集") >= 0 && ThingIf(Material) !== false) {
        formateBox("採集", { type: "text", text: ThingIf(Material) });
        return finalBox;
      }

      if (userMessage.indexOf("調和") >= 0 && ThingIf(Reconcile) !== false) {
        formateBox("調和", { type: "text", text: ThingIf(Reconcile) });
        return finalBox;
      }

      if (userMessage.indexOf("肉質") >= 0 && ThingIf(Succulent) !== false) {
        formateBox("meet", []);
        var _index = ThingIf(Succulent);
        _index.forEach((item, index) => {
          var final = item.split("-");
          finalBox["value"].push(
            index == _index.length - 1
              ? {
                  type: "text",
                  text: `毒物反應:\r\n${final[0]}\r\n註: 因一次只能發送五則訊息\r\n如圖片未完全(最後應為掉落物資訊)\r\n請至網站查詢\r\n參考資料:\r\nhttp://wiki.mhxg.org/data/${final[1]}.html`,
                }
              : {
                  type: "image",
                  originalContentUrl: `https://i.imgur.com/${item}.jpg`,
                  previewImageUrl: `https://i.imgur.com/${item}.jpg`,
                }
          );
        });
        return finalBox;
      }
    },
    ImageObj = (name) => {
      let MHR = "MHR ";
      if (name.indexOf(MHR) >= 0) {
        return {
          key: "EGG",
          value: {
            type: "text",
            text: `https://mhr.gameqb.net/?s=${userMessage.split(" ")[1]}`,
          },
        };
      }
      let egg = {
        咆嘯: "在吼啊騷貨",
        GP: "啊哈GP\r\n小張你有看到嗎?\r\n幹超帥",
        蛋頭肉質: "欸小張你看恐暴龍在幫我吹",
      };
      if (Object.keys(egg).indexOf(name) >= 0) {
        return {
          key: "EGG",
          value: {
            type: "text",
            text: egg[name],
          },
        };
      }
      let Image = {
        塵魔: "j8JSwSt",
        闇螳螂: "wjGitP6",
        小幫手幫我: "EHfmkMT",
        片手劍好用嗎: "a57zwJq",
        用什麼武器: "oon6tIM",
        你是在公三小: "lPAuCm6",
        我她媽沒死過: "Z72SREZ",
        我他媽沒死過: "Z72SREZ",
        我玩一整天了: "m0hsdbl",
        想當大腿: "KAhplzV",
        想練大槌: "hZ7C95J",
        想練大劍: "fVsJBzG",
        想練弓: "VhhRTio.png",
        想練太刀: "CD2lpsL",
        想練片手劍: "yVBWl48.png",
        想練狩獵笛: "SyrRtSR",
        想練盾斧: "qI1P2Wf",
        想練銃槍: "WPCWaVN",
        想練雙刀: "92SapU8",
        說好的打怪呢: "GEsYBpL",
        殘忍會心效益: "oVU0NBc",
        裏會心效益: "oVU0NBc",
        Amber肉質: "3rWWTLl",
        安柏肉質: "3rWWTLl",
        傻爆眼: "DCmgvRN",
        章爺肉質: "3ADAZqL",
        仁哥肉質: "4cOkDgP",
        小張肉質: "61tEUUW",
      };
      return {
        key: "image",
        value: {
          type: "image",
          originalContentUrl: `https://i.imgur.com/${Image[name]}.jpg`,
          previewImageUrl: `https://i.imgur.com/${Image[name]}.jpg`,
        },
      };
    },
    IndexIf = () => {
      let box = [];
      [
        "塵魔",
        "闇螳螂",
        "小幫手幫我",
        "片手劍好用嗎",
        "用什麼武器",
        "你是在公三小",
        "我他媽沒死過",
        "我她媽沒死過",
        "我玩一整天了",
        "想當大腿",
        "想練大槌",
        "想練大劍",
        "想練弓",
        "想練太刀",
        "想練片手劍",
        "想練狩獵笛",
        "想練盾斧",
        "想練銃槍",
        "想練雙刀",
        "說好的打怪呢",
        "殘忍會心效益",
        "裏會心效益",
        "咆嘯",
        "GP",
        "蛋頭肉質",
        "Amber肉質",
        "安柏肉質",
        "傻爆眼",
        "章爺肉質",
        "仁哥肉質",
        "小張肉質",
        "MHR ",
      ].forEach((item) => {
        if (userMessage.indexOf(item) >= 0) {
          box.push(item);
        }
      });
      switch (box.length) {
        case 1:
          return ImageObj(box[0]);
        default:
          return MessageObj();
      }
    };

  if (IndexIf() !== false) {
    let indexBox = IndexIf();
    switch (indexBox["key"]) {
      case "meet":
        reply_message = indexBox["value"];
        break;
      default:
        reply_message.unshift(indexBox["value"]);
        break;
    }
  }

  //回傳訊息給line 並傳送給使用者
  var url = "https://api.line.me/v2/bot/message/reply";
  UrlFetchApp.fetch(url, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + CHANNEL_ACCESS_TOKEN,
    },
    method: "post",
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: reply_message,
    }),
  });
}
