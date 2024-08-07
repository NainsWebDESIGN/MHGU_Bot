// 關鍵任務
const Task = {
    下位: {
      一星: "村1星:\r\n1.古代森林特产紫萁\r\n2.古代森林\r\n3.讨伐跳狗龙群\r\n4.猫妹妹的讨伐狗龙委托\r\n緊急.跳跃亡命徒",
      二星: "村2星:\r\n1.闹腾的硬甲龙\r\n2.逐渐逼近的盾蟹包围网\r\n3.狩猎黄速龙王\r\n4.穿游在大地中的怪物\r\n緊急.吓唬鬼面猎人\r\n註:須先到訪各村落",
      三星: "村3星:\r\n1.沙漠上的用餐礼仪\r\n2.潜伏沙中的巨大螃蟹\r\n3.古代森林的大怪鸟\r\n4.\r\n註:須先完成2及3\r\n5.强袭而来的孤岛水流\r\n註:須先完成4\r\n6.追猎毒怪鸟\r\n註:須先完成4\r\n緊急.幻惑魔术师",
      四星: "村4星:\r\n1.激战！雌火龙\r\n2.绞蛇龙起舞演奏\r\n3.红煌流星\r\n4.恐怖沼泽怪谈！\r\n5.想要欣赏将军镰蟹\r\n緊急.黑色灾祸",
      五星: "村5星:\r\n1.浑身喷烟的王者\r\n2.威胁！火山中的铁锤！\r\n3.大海之王海龙！\r\n4.翡翠闪电\r\n註:須先完成卡卡特村3星狩獵電龍\r\n5.雄伟巨兽\r\n註:須先完成波凱村3星狩獵巨獸\r\n6.随风漂浮的淡红色泡狐\r\n註:須先完成結雲村3星狩獵泡狐龍\r\n緊急.灼热之刃",
      六星: "村6星:\r\n1.身披黑甲的龙\r\n2.不应进入的地盘\r\n3.轰龙\r\n4.千刃来袭\r\n5.刚拳爆破！碎龙！\r\n緊急.白丝 斗技场 单挑~！",
    },
    上位: {
      七星: "村7星:\r\n1.再次品尝珍馐穿甲虫\r\n2.商贩仇敌——白速龙王\r\n3.追逐挚友的土砂龙\r\n註:須先完成1及2\r\n4.彗星碎片在哪里\r\n註:須先完成3\r\n5.毒怪鸟利用计划\r\n註:須先完成3\r\n6.啊呜！鬼蛙\r\n註:須先完成3\r\n7.栖息于溪流的水兽\r\n註:須先完成4~6\r\n8.无人山岭中的神奇石块\r\n註:須先完成7\r\n9.这才是真正的大名排场？\r\n緊急.在原生林筑巢的蜘蛛。",
      八星: "村8星:\r\n1.飞翔于山岭间的雌火龙。\r\n2.在被吃前干掉它！\r\n3.本以为是巨大的岩石……？\r\n4.强化龙识船！【迅龙篇】\r\n註:須先完成1~3\r\n5.强化龙识船！【水龙篇】\r\n註:須先完成1~3\r\n6.强化龙识船！【熔岩龙篇】\r\n註:須先完成1~3\r\n7.卟噜——！变形冰鲨！\r\n註:須先完成4~6\r\n8.对懒虫就该用爆锤龙呵斥！\r\n註:須先完成4~6\r\n緊急.现身于彗星前的凯龙。",
      九星: "村9星:\r\n1.无人山岭的火龙。\r\n2.犯人就是你，雷狼龙。\r\n3.称霸冰海的王者。\r\n4.巨兽，再次来袭！\r\n註:須先完成1~3\r\n5.电龙，再次来袭！\r\n註:須先完成1~3\r\n6.泡狐龙，再次来袭！\r\n註:須先完成1~3\r\n7.斩龙，再次来袭！\r\n註:須先完成1~3\r\n8.被染成漆黑的山岭\r\n註:須先完成4~7\r\n9.强化龙识船！【冰牙龙篇】\r\n註:須先完成8\r\nn緊急.赤色的灾祸彗星，为之颤栗吧",
      十星: "村10星:\r\n1.千刃暴动\r\n2.死战！角龙\r\n3.沙上咆哮的金狮子\r\n4.我的灵魂需要炸裂\r\n5.吞食万象之物\r\n6.轮回岁月归来吧\r\n緊急.狱炎霸王\r\n註:須先完成1~6且HR9以上\r\n緊急.崩塌吧神明之座、天威之榻\r\n註:須先完成1~6且HR9以上\r\n緊急.怨叹的骸骨\r\n註:須先完成1~6且HR9以上\r\n緊急.岚龙天翔\r\n註:須先完成1~6且HR9以上\r\n緊急.散发黑光之神\r\n註:須先完成所有緊急任務",
    },
    集會所: {
      一星: "集會1星:\r\n1.狩獵鬼蛙\r\n2.在古代森林遭竊!\r\n3.打倒大怪鳥!\r\n4.雪後白兔獸\r\n5.狩獵水獸!\r\n緊急.雪山的主人--雪獅子王",
      二星: "集會2星:\r\n1.沙漠裡的餐桌禮儀\r\n2.狩獵絞蛇龍\r\n3.追尋失蹤的黑狼\r\n4.捕獲研究樣本的作戰\r\n5.女王降臨\r\n6.躲避夜鳥的鱗粉\r\n緊急.雷之反逆者",
      三星: "集會3星:\r\n1.穿著黑衣的龍\r\n2.千刃 來襲\r\n3.激憤的巨獸\r\n4.映照在月夜裡的泡沫之華\r\n5.天空和陸地的領域!\r\n6.大刀.斬龍\r\n緊急.雙頭之骸",
      四星: "集會4星:\r\n1.狩獵喜歡惡作劇的奇猿狐吧!\r\n2.與美味的遭遇\r\n3.鐵壁般的大名蟹\r\n4.令人困擾的怪鳥和毒怪鳥\r\n緊急.溪流的水龍",
      五星: "集會5星:\r\n1.充滿知性?狩獵夜鳥\r\n2.絞蛇龍跟著節奏跳舞\r\n3.狩獵冰鮫鯊的委託\r\n4.黑狼鳥的洗禮\r\n5.溶岩龍出現!\r\n緊急.妖豔舞蹈\r\n緊急.不動山神",
      六星: "集會6星:\r\n1.超級無敵讚的電龍頭\r\n2.危險至極的晚餐\r\n3.棲息於火海的龍!\r\n4.出陣!地底火山的決鬥!\r\n5.為了尾錘龍敲響銅鑼\r\n緊急.千刃龍",
      七星: "集會7星:\r\n1.四方聚集回歸\r\n2.熱戀暴露!?龍與龍的幽會\r\n3.白與琉璃的圓舞曲\r\n4.冰寒鐵甲\r\n5.爆碎拳炸裂!\r\n6.錘與刀的激烈對決\r\n緊急.地獄之妖星\r\n緊急.你的身手真有如傳聞嗎?\r\n註:需移動至飛行船接取任務",
      G1: "集會G1:\r\n1.啄啄啄! 再啄啄啄!\r\n2.被搶走的就要追回來\r\n3.來自沙中的驚喜\r\n4.賭上王之威信的戰鬥\r\n5.水獸們的紛爭\r\n緊急.滿身泥濘的商人氣魄!",
      G2: "集會G2:\r\n1.無人山嶺的綠之女王\r\n2.潛伏於沙漠水面的陰影\r\n3.桃毛獸王的蘑菇試吃會\r\n4.研究影蜘蛛的生態\r\n5.翻滾再起身又再次栽倒\r\n6.岩石自己動起來了\r\n緊急.巨大龍的侵略",
      G3: "集會G3:\r\n1.哈囉!無人山嶺!\r\n2.好熱好熱的沙漠\r\n3.騎士與密林之夢\r\n4.冰牙龍!\r\n5.冰海的優質冰\r\n6.鎧龍的威脅\r\n緊急.劃破天際的凶星",
      G4: "集會G4:\r\n1.沙上可見勇猛雙角\r\n2.狩獵恐暴龍\r\n3.追趕轟龍的軌跡\r\n4.來自雪山的SOS\r\n5.斬鐵之劍 強固之鎧\r\n註:須先完成1~4\r\n6.矛與錘不相容\r\n註:須先完成1~4\r\n緊急.蠢動廢城",
    },
  };