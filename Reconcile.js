// 調和 參考: http://web.thu.edu.tw/s956408/www/mhfo/list.htm
const Reconcile = {
    回復藥: "回復藥:\r\n太陽草 + 青菇\r\n藥草 + 青菇",
    大回復藥:
      "回復藥‧大:\r\n回復藥 + 蜂蜜\r\n蜂蜜 + 太陽草 + 藍香菇\r\n蜂蜜 + 藥草 + 藍香菇",
    營養劑:
      "營養劑:\r\n元氣飲料 + 嚴選香菇  註:【鍊金】\r\n藍香菇 + 不死蟲\r\n太陽草 + 落陽草 + 藍香菇",
    大營養劑:
      "營養劑‧大:\r\n營養劑 + 蜂蜜\r\n元氣飲料 + 熟成香菇  註:【鍊金】\r\n蜂蜜 + 藍香菇 + 不死蟲",
    解毒藥: "解毒藥:\r\n解毒草 + 藍香菇",
    活力劑: "活力劑:\r\n增強劑 + 曼陀蘿\r\n蜂蜜 + 曼陀蘿 + 苦蟲",
    強走藥:
      "強走藥:\r\n增強劑 + 半熟肉\r\n半熟肉 + 蜂蜜 + 苦蟲\r\n藍香菇 + 毒蕈 + 超毒菇  註:【鍊金】",
    大強走藥: "強走藥‧大:\r\n熟肉 + 狂走精華",
    鬼人藥:
      "鬼人藥:\r\n增強劑 + 怪力之種\r\n蜂蜜 + 怪力之種 + 苦蟲\r\n特產香菇 + 嚴選香菇 + 熟成香菇  註:【鍊金】",
    大鬼人藥:
      "鬼人藥‧大:\r\n鬼人藥 + 電龍精華\r\n增強劑 + 怪力之種 + 電龍精華",
    怪力藥丸: "怪力藥丸:\r\n活力劑 + 怪力之種\r\n增強劑 + 曼陀蘿 + 怪力之種",
    硬化藥:
      "硬化藥:\r\n增強劑 + 忍耐之種\r\n蜂蜜 + 忍耐之種 + 苦蟲\r\n小石頭 + 鐵礦石 + 大地的結晶  註:【鍊金】",
    大硬化藥:
      "硬化藥‧大:\r\n硬化藥 + 電龍精華\r\n增強劑 + 忍耐之種 + 電龍精華",
    忍耐藥丸: "忍耐藥丸:\r\n活力劑 + 忍耐之種\r\n增強劑 + 曼陀蘿 + 忍耐之種",
    冷飲: "冷飲:\r\n冰結晶 + 苦蟲",
    熱飲: "熱飲:\r\n辣椒 + 苦蟲",
    千里眼之藥: "千里眼之藥:\r\n仙人掌花 + 雷光蟲  註:【鍊金】",
    魔物體液: "魔物體液:\r\n冰結晶 + 睡眠袋  註:【鍊金】",
    漢方藥:
      "漢方藥:\r\n仙人掌花 + 苦蟲\r\n魔物的糞 + 不可回收垃圾 + 昆蟲死骸  註:【鍊金】",
    秘藥: "秘藥:\r\n營養劑‧大 + 曼陀蘿\r\n回復藥 + 回復藥‧大 + 龍藥石\r\n營養劑 + 蜂蜜 + 曼陀蘿",
    古老的秘藥: "古老的秘藥:\r\n活力劑 + 斑鹿角\r\n增強劑 + 曼陀蘿 + 斑鹿角",
    增強劑: "增強劑:\r\n蜂蜜 + 苦蟲\r\n熟成香菇 + 魚龍肝  註:【鍊金】",
    元氣飲料: "元氣飲料:\r\n蜂蜜 + 落陽草",
    爆藥: "爆藥:\r\n火藥草 + 高熱蕈",
    生命之粉: "生命之粉:\r\n不死蟲 + 龍牙",
    生命粉塵: "生命粉塵:\r\n生命之粉 + 龍之爪\r\n不死蟲 + 龍牙 + 龍之爪",
    力之爪: "力之爪:\r\n力的護符 + 老山龍大爪",
    守護之爪: "守護之爪:\r\n守護的護符 + 老山龍大爪",
    捕獲用麻醉藥: "捕獲用麻醉藥:\r\n睡眠草 + 麻痺蕈",
    生肉: "生肉:\r\n烤焦肉 + 魔物的糞  註:【鍊金】",
    調理肉: "調理肉:\r\n生肉 + 落陽草\r\n生肉 + 辣油\r\n生肉 + 力量牛油",
    溫暖肉: "溫暖生肉:\r\n生肉 + 辣椒",
    清涼肉: "清涼生肉:\r\n生肉 + 冰結晶",
    毒肉: "毒生肉:\r\n生肉 + 毒蕈",
    麻痺肉: "麻痺生肉:\r\n生肉 + 麻痺蕈",
    睡眠肉: "睡眠生肉:\r\n生肉 + 睡眠草",
    半熟肉: "半熟肉:\r\n雷光蟲 + 迅猛龍皮  註:【鍊金】",
    迴力標: "迴力標:\r\n砥石 + 龍骨【小】",
    毒投擲小刀: "毒投擲小刀:\r\n投擲小刀 + 毒蕈",
    眠投擲小刀: "	眠投擲小刀:\r\n投擲小刀 + 睡眠草",
    麻痺投擲小刀: "麻痺投擲小刀:\r\n投擲小刀 + 麻痺蕈",
    捕獲用麻醉小刀:
      "捕獲用麻醉小刀:\r\n投擲小刀 + 捕獲用麻醉藥\r\n投擲小刀 + 睡眠草 + 麻痺蕈",
    素材玉: "素材丸:\r\n黏草 + 小石頭\r\n黏草 + 鐵礦石",
    追跡球: "追跡球:\r\n黏草 + 追跡果實",
    閃光彈:
      "閃光彈:\r\n素材丸 + 光蟲\r\n黏草 + 高熱蕈 + 陽光石\r\n黏草 + 小石頭 + 光蟲",
    音爆彈:
      "音爆彈:\r\n爆藥 + 鳴袋\r\n素材丸 + 黏草 + 鳴袋\r\n火藥草 + 高熱蕈 + 鳴袋",
    異臭丸:
      "異臭丸:\r\n素材丸 + 魔物的糞\r\n魔物的糞 + 謎樣的糞  註:【鍊金】\r\n魔物的糞 + 黏草 + 小石頭",
    發煙球: "發煙球:\r\n素材丸 + 長春藤葉\r\n長春藤葉 + 黏草 + 小石頭",
    毒煙彈:
      "毒煙彈:\r\n素材丸 + 毒蕈\r\n素材丸 + 毒袋\r\n黏草 + 毒蕈 + 小石頭",
    回歸彈: "回歸彈:\r\n素材丸 + 興奮香菇",
    除臭彈: "除臭彈:\r\n素材丸 + 落陽草",
    捕獲用麻醉球:
      "捕獲用麻醉球:\r\n捕獲用麻醉藥 + 素材丸\r\n素材丸 + 睡眠草 + 麻痺蕈",
    網子: "網子:\r\n蜘蛛網 + 長春藤葉",
    落穴: "落穴:\r\n網子 + 陷阱道具\r\n蜘蛛網 + 陷阱道具 + 長春藤葉",
    麻痺陷阱: "麻痺陷阱:\r\n陷阱道具 + 麻痺袋\r\n陷阱道具 + 麻痺蕈 + 光蟲",
    爆雷針: "爆雷針:\r\n陷阱道具 + 擴散果實 + 雷光蟲",
    小木桶: "小木桶:\r\n黏草 + 龍骨【小】  註:【鍊金】",
    大木桶: "大木桶:\r\n長春藤葉 + 龍骨【中】  註:【鍊金】",
    小木桶爆彈: "小木桶爆彈:\r\n小木桶 + 火藥草",
    大小桶爆彈: "小木桶爆彈‧大:\r\n陷阱道具 + 小木桶爆彈 + 火炎袋",
    大木桶爆彈: "大木桶爆彈:\r\n爆藥 + 大木桶\r\n大木桶 + 火藥草 + 高熱蕈",
    大大桶爆彈: "大木桶爆彈‧大:\r\n陷阱道具 + 大木桶爆彈 + 火炎袋",
    對空爆彈: "對空爆彈:\r\n爆藥 + 小木桶 + 巨蜂翅膀",
    空心果實: "空心果實:\r\n空心果實 + 鐵礦石  註:【鍊金】",
    通常彈2: "LV2 通常彈:\r\n空心果實 + 擴散果實",
    通常彈3:
      "LV3 通常彈:\r\n空心果實 + 彈跳沙丁魚\r\n空心果實 + 彈跳沙丁魚王",
    貫通彈1: "LV1 貫通彈:\r\n空心果實 + 迅猛龍牙",
    貫通彈2: "LV2 貫通彈:\r\n空心果實 + 刺針鮪魚\r\n空心果實 + 刺針鮪魚王",
    貫通彈3:
      "LV3 貫通彈:\r\n空心骨【小】 + 刺針鮪魚\r\n空心骨【小】 + 刺針鮪魚王\r\n空心骨【大】 + 刺針鮪魚王",
    散彈1: "LV1 散彈:\r\n空心果實 + 飛散榛果",
    散彈2: "LV2 散彈:\r\n空心果實 + 龍牙",
    散彈3: "LV3 散彈:\r\n空心骨【小】 + 龍牙",
    徹甲榴彈1: "LV1 徹甲榴彈:\r\n空心果實 + 擴散魚\r\n空心果實 + 刺針鮪魚王",
    徹甲榴彈2:
      "LV2 徹甲榴彈:\r\n空心骨【小】 + 擴散魚\r\n空心骨【小】 + 刺針鮪魚王\r\n空心骨【大】 + 刺針鮪魚王",
    徹甲榴彈3: "LV3 徹甲榴彈:\r\n空心骨【大】 + 爆裂魚",
    擴散彈1: "LV1 擴散彈:\r\n空心果實 + 擴散果實",
    擴散彈2: "LV2 擴散彈:\r\n空心骨【小】 + 龍之爪",
    擴散彈: "LV3 擴散彈:\r\n空心骨【大】 + 擴散金魚",
    火炎彈: "火炎彈:\r\n空心果實 + 火藥草",
    水冷彈: "水冷彈:\r\n空心果實 + 硬鰭魚\r\n空心果實 + 硬鰭魚王",
    電擊彈: "電擊彈:\r\n空心果實 + 光蟲",
    冰結彈: "冰結彈:\r\n空心果實 + 冰結晶",
    滅龍彈: "滅龍彈:\r\n空心骨【大】 + 殺龍果實",
    回復彈1: "LV1 回復彈:\r\n空心果實 + 藥草",
    回復彈2: "LV2 回復彈:\r\n回復藥 + 空心果實",
    毒彈1: "LV1 毒彈:\r\n空心果實 + 毒蕈",
    毒彈2: "LV2 毒彈:\r\n空心骨【小】 + 毒猛龍毒牙",
    麻痺彈1: "LV1 麻痺彈:\r\n空心果實 + 麻痺蕈",
    麻痺彈2: "LV2 麻痺彈:\r\n空心骨【小】 + 痺猛龍麻痺牙",
    睡眠彈1: "LV1 睡眠彈:\r\n空心果實 + 睡眠草",
    睡眠彈2:
      "LV2 睡眠彈:\r\n空心骨【小】 + 眠魚\r\n空心骨【小】 + 眠魚王\r\n空心骨【大】 + 眠魚王",
    捕獲用麻醉彈:
      "捕獲用麻醉彈:\r\n捕獲用麻醉藥 + 空心骨【小】\r\n空心骨【小】 + 睡眠草 + 麻痺蕈",
    追跡彈: "追跡彈:\r\n空心果實 + 追跡果實",
    鬼人彈: "鬼人彈:\r\n空心果實 + 怪力之種",
    硬化彈: "硬化彈:\r\n空心果實 + 忍耐之種",
    空瓶: "空瓶:\r\n空心骨【小】 + 砥石",
    強擊瓶: "強擊瓶:\r\n空瓶 + 高熱蕈",
    毒瓶: "毒瓶:\r\n空瓶 + 毒蕈",
    麻痺瓶: "麻痺瓶:\r\n空瓶 + 麻痺蕈",
    睡眠瓶: "睡眠瓶:\r\n空瓶 + 睡眠草\r\n空瓶 + 眠魚\r\n空瓶 + 眠魚王",
    鮪魚丸子: "鮪魚丸子:\r\n蚯蚓魚餌 + 芋毛蟲",
    爆炸丸子: "爆炸丸子:\r\n蚱蜢魚餌 + 圓蚱蜢",
    黃金丸子: "黃金丸子:\r\n螢火蟲魚餌 + 槌之子",
    破爛十字鎬: "破爛十字鎬:\r\n小石頭 + 謎之骨\r\n小石頭 + 棒狀骨",
    十字鎬: "十字鎬:\r\n鐵礦石 + 棒狀骨",
    大十字鎬: "十字鎬‧大:\r\n燕雀石 + 棒狀骨",
    破爛蟲網: "破爛蟲網:\r\n網子 + 謎之骨\r\n蜘蛛網 + 長春藤葉 + 謎之骨",
    蟲網: "蟲網:\r\n網子 + 龍骨【小】\r\n蜘蛛網 + 長春藤葉 + 龍骨【小】",
    大蟲網: "蟲網‧大:\r\n	網子 + 龍骨【中】\r\n蜘蛛網 + 長春藤葉 + 龍骨【中】",
    萬用烤肉架:
      "萬用烤肉架:\r\n男的烤肉架 + 萬用烤肉配件\r\n女的烤肉架 + 萬用烤肉配件\r\n貓的烤肉架 + 萬用烤肉配件",
    肉萬用烤架:
      "萬用烤架‧肉:\r\n生肉 + 萬用烤肉架\r\n調理肉 + 萬用烤肉架\r\n溫暖生肉 + 萬用烤肉架\r\n清涼生肉 + 萬用烤肉架\r\n毒生肉 + 萬用烤肉架",
    魚萬用烤架:
      "萬用烤架‧魚:\r\n萬用烤肉架 + 硬鰭魚\r\n萬用烤肉架 + 刺針鮪魚\r\n萬用烤肉架 + 彈跳沙丁魚\r\n萬用烤肉架 + 硬鰭魚王\r\n萬用烤肉架 + 刺針鮪魚王\r\n萬用烤肉架 + 彈跳沙丁魚王",
    回復笛: "回復笛:\r\n生命粉塵 + 角笛\r\n生命之粉 + 角笛 + 龍之爪",
    解毒笛: "解毒笛:\r\n角笛 + 抗菌石\r\n角笛 + 大地的結晶 + 苦蟲",
    鬼人笛:
      "鬼人笛:\r\n鬼人藥‧大 + 龍骨【中】\r\n增強劑 + 怪力之種 + 龍骨【中】",
    硬化笛:
      "硬化笛:\r\n硬化藥‧大 + 龍骨【中】\r\n增強劑 + 忍耐之種 + 龍骨【中】",
    蜂蜜: "蜂蜜:\r\n螢火蟲魚餌 + 特產香菇  註:【鍊金】",
    藥草: "藥草:\r\n黏草 + 昆蟲死骸  註:【鍊金】",
    火藥草: "火藥草:\r\n不可回收垃圾 + 辣椒  註:【鍊金】",
    青菇: "青菇:\r\n解毒草 + 毒蕈  註:【鍊金】",
    特產香菇泡菜: "特產香菇泡菜:\r\n辣椒 + 特產香菇",
    怪力之種: "怪力之種:\r\n擴散果實 + 怪鳥鱗  註:【鍊金】",
    忍耐之種: "忍耐之種:\r\n擴散果實 + 迅猛龍王爪  註:【鍊金】",
    擴散果實: "擴散果實:\r\n擴散果實 + 大地的結晶  註:【鍊金】",
    抗菌石: "抗菌石:\r\n大地的結晶 + 苦蟲",
    美味魚: "美味魚:\r\n解毒草 + 眠魚  註:【鍊金】",
    彈跳沙丁魚: "彈跳沙丁魚:\r\n辣椒 + 美味魚  註:【鍊金】",
    鳴袋: "鳴袋:\r\n青蛙魚餌 + 角笛  註:【鍊金】",
    狂走精華: "狂走精華:\r\n殺龍果實 + 魚龍肝  註:【鍊金】",
    鋼的龍鱗: "鋼的龍鱗:\r\n增強劑 + 生命之粉 + 枯朽龍鱗",
    秘境組合:
      "秘境組合:\r\n前往秘境的指南針 + 前往秘境的地圖 + 前往秘境的５個道具",
    祖龍之書: "祖龍之書:\r\n終焉之書 + 傳說之書 + 古龍之書",
    古塔之書:
      "古塔之書:\r\n古塔的斷章・前篇 + 古塔的斷章‧中篇 + 古塔的斷章‧後篇",
    主船帆: "主船帆:\r\n雪獅子毛 + 雪獅子鬍鬚\r\n雪獅子毛 + 極彩色的毛",
    主船桅: "主船桅:\r\n龍骨【大】 + 桃毛獸毛\r\n大骨 + 桃毛獸毛",
    綠醃摩卡的壺:
      "醃摩卡的壺・綠:\r\n藥草 + 醃摩卡的壺  註:回復藥→回復藥→強走藥→小石頭→小石頭\r\n解毒草 + 醃摩卡的壺  註:解毒藥→漢方藥→漢方藥→回復藥‧大\r\n回復藥 + 醃摩卡的壺  註:回復藥→回復藥‧大→回復藥‧大→回復藥‧大\r\n回復藥‧大 + 醃摩卡的壺  註:強走藥‧大→強走藥‧大→硬化藥‧大→秘藥\r\n營養劑 + 醃摩卡的壺  註:營養劑→營養劑‧大→營養劑‧大→強走藥\r\n解毒藥 + 醃摩卡的壺  註:漢方藥→漢方藥→漢方藥→回復藥‧大\r\n漢方藥 + 醃摩卡的壺  註:營養劑→回復藥→藥草\r\n強走藥 + 醃摩卡的壺  註:強走藥→強走藥‧大→強走藥‧大→藥草",
    赤醃摩卡的壺:
      "醃摩卡的壺・赤:\r\n烤焦肉 + 醃摩卡的壺  註:熟肉→強走藥→爆藥→熟肉\r\n半熟肉 + 醃摩卡的壺  註:熟肉→強走藥→強走藥→熟肉\r\n烤焦魚 + 醃摩卡的壺\r\n半熟魚 + 醃摩卡的壺",
    黃醃摩卡的壺:
      "醃摩卡的壺・黃:\r\n太陽草 + 醃摩卡的壺  註:怪力之種→怪力之種→怪力之種→回復藥\r\n落陽草 + 醃摩卡的壺  註:忍耐之種→忍耐之種→忍耐之種→回復藥\r\n火藥草 + 醃摩卡的壺  註:火藥草→火藥草→爆藥→火藥草\r\n藍香菇 + 醃摩卡的壺  註:增強劑→增強劑→增強劑→小石頭\r\n特產香菇 + 醃摩卡的壺  註:熟成香菇\r\n嚴選香菇 + 醃摩卡的壺  註:嚴選香菇→鬼松蘑→鬼松蘑→鬼松蘑\r\n仙人掌花 + 醃摩卡的壺  註:百花仙人掌\r\n電龍幼兒 + 醃摩卡的壺  註:醃電龍幼兒\r\n超毒菇 + 醃摩卡的壺  註:解毒草→漢方藥→秘藥→小石頭\r\n米蟲 + 醃摩卡的壺  註:米蟲→苦蟲→雷光蟲→苦蟲\r\n寒冷麥 + 醃摩卡的壺  註:頑固麵包→頑固麵包→頑固麵包→頑固麵包\r\n辣油 + 醃摩卡的壺  註:力量牛油→力量牛油→力量牛油→力量牛油\r\n乾乳瑪琳 + 醃摩卡的壺  註:猛牛奶油→猛牛奶油→猛牛奶油→猛牛奶油\r\n昆蟲死骸 + 醃摩卡的壺  註:昆蟲死骸→漢方藥→回復藥→小石頭\r\n不可回收垃圾 + 醃摩卡的壺  註:藥草→藥草→回復藥→小石頭",
  }