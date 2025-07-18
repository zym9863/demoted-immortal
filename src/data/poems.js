/**
 * 谪仙相关诗词数据
 * 包含李白、苏轼等被称为"谪仙"的诗人作品
 */

export const poems = [
  {
    id: 1,
    title: '将进酒',
    author: '李白',
    dynasty: '唐',
    content: `君不见，黄河之水天上来，奔流到海不复回。
君不见，高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，千金散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。
钟鼓馔玉不足贵，但愿长醉不复醒。
古来圣贤皆寂寞，惟有饮者留其名。
陈王昔时宴平乐，斗酒十千恣欢谑。
主人何为言少钱，径须沽取对君酌。
五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。`,
    background: '这首诗作于唐玄宗天宝年间，李白在长安任供奉翰林期间所作。当时李白虽然被召入京，但并未受到重用，心中郁闷。这首诗表达了他对生命短暂的感慨和及时行乐的人生态度。',
    appreciation: '《将进酒》是李白最著名的诗作之一，被誉为"酒中仙篇"。诗中表达了诗人对生命短暂的感慨，以及对世俗功名的超脱态度。诗歌气势磅礴，情感奔放，语言豪迈，充分体现了李白豪放不羁的性格和对生活的热爱。',
    notes: [
      { line: '君不见，黄河之水天上来，奔流到海不复回。', note: '以黄河水比喻时间流逝，一去不复返。' },
      { line: '天生我材必有用，千金散尽还复来。', note: '表达诗人对自己才能的自信，以及豁达的人生态度。' },
      { line: '古来圣贤皆寂寞，惟有饮者留其名。', note: '表达了诗人对传统价值观的反思，推崇及时行乐的生活方式。' }
    ],
    tags: ['豪放', '饮酒', '人生感慨']
  },
  {
    id: 2,
    title: '望庐山瀑布',
    author: '李白',
    dynasty: '唐',
    content: `日照香炉生紫烟，遥看瀑布挂前川。
飞流直下三千尺，疑是银河落九天。`,
    background: '这首诗作于唐玄宗开元年间，李白游览庐山时所作。当时李白正处于漫游四方的时期，心情豁达开朗。',
    appreciation: '这首诗以简洁有力的语言，生动形象地描绘了庐山瀑布的壮丽景象。诗人运用夸张的手法，将瀑布比作从天而降的银河，表现了大自然的壮美和诗人豪放的气质。全诗意境高远，想象丰富，是中国山水诗的代表作。',
    notes: [
      { line: '日照香炉生紫烟', note: '香炉指庐山的香炉峰，紫烟指云雾，描绘了阳光照射下的庐山云雾缭绕的景象。' },
      { line: '飞流直下三千尺', note: '运用夸张手法描述瀑布的高度，表现其气势磅礴。' },
      { line: '疑是银河落九天', note: '将瀑布比作从天而降的银河，想象奇特，意境壮美。' }
    ],
    tags: ['山水', '壮美', '想象']
  },
  {
    id: 3,
    title: '静夜思',
    author: '李白',
    dynasty: '唐',
    content: `床前明月光，疑是地上霜。
举头望明月，低头思故乡。`,
    background: '这首诗作于唐玄宗开元年间，李白客居他乡时所作。当时诗人远离家乡，在异地思念故土。',
    appreciation: '这首诗以简洁含蓄的语言，表达了诗人思乡之情。诗中通过对月光的描写，自然引出对故乡的思念，情感真挚动人。全诗语言平易近人，意境优美，是中国最著名的抒情诗之一。',
    notes: [
      { line: '床前明月光，疑是地上霜', note: '描写月光洒在地上，如同霜雪一般，表现了月光的明亮和诗人的孤寂。' },
      { line: '举头望明月，低头思故乡', note: '通过"举头"和"低头"的动作对比，自然地引出思乡之情，情感真挚。' }
    ],
    tags: ['思乡', '月亮', '抒情']
  },
  {
    id: 4,
    title: '赤壁怀古',
    author: '苏轼',
    dynasty: '宋',
    content: `大江东去，浪淘尽，千古风流人物。
故垒西边，人道是，三国周郎赤壁。
乱石穿空，惊涛拍岸，卷起千堆雪。
江山如画，一时多少豪杰。
遥想公瑾当年，小乔初嫁了，雄姿英发。
羽扇纶巾，谈笑间，樯橹灰飞烟灭。
故国神游，多情应笑我，早生华发。
人生如梦，一尊还酹江月。`,
    background: '这首词作于宋神宗元丰五年（1082年），苏轼被贬黄州时游览赤壁所作。当时苏轼因"乌台诗案"被贬，心情郁闷。',
    appreciation: '《赤壁怀古》是苏轼最著名的词作之一，被誉为"豪放词"的代表。词中通过对赤壁之战的回忆，抒发了诗人对历史兴衰的感慨和对人生短暂的思考。全词气势磅礴，意境开阔，语言豪迈，充分体现了苏轼旷达豁达的胸怀和对生命的深刻思考。',
    notes: [
      { line: '大江东去，浪淘尽，千古风流人物', note: '以大江东去的意象，表达历史长河中人物的短暂与渺小。' },
      { line: '乱石穿空，惊涛拍岸，卷起千堆雪', note: '生动描绘了赤壁的自然景观，气势磅礴。' },
      { line: '羽扇纶巾，谈笑间，樯橹灰飞烟灭', note: '描写周瑜指挥火攻时的从容自信，表现了英雄的风采。' },
      { line: '人生如梦，一尊还酹江月', note: '表达了诗人对人生短暂如梦的感慨，以及豁达的人生态度。' }
    ],
    tags: ['豪放', '历史', '人生感慨']
  },
  {
    id: 5,
    title: '水调歌头·明月几时有',
    author: '苏轼',
    dynasty: '宋',
    content: `明月几时有？把酒问青天。
不知天上宫阙，今夕是何年。
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间。
转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。`,
    background: '这首词作于宋神宗元丰二年（1079年）中秋，苏轼在密州（今山东诸城）任太守时所作。当时苏轼与弟弟苏辙分离，借中秋明月抒发对亲人的思念之情。',
    appreciation: '《水调歌头·明月几时有》是苏轼最著名的词作之一，被誉为"中秋词"的代表。词中通过对明月的咏叹，表达了诗人对亲人的思念和对人生的感悟。全词意境高远，想象丰富，语言优美，充分体现了苏轼旷达豁达的胸怀和对生命的热爱。',
    notes: [
      { line: '明月几时有？把酒问青天', note: '以问月起兴，表达对月亮的好奇和对宇宙的思考。' },
      { line: '我欲乘风归去，又恐琼楼玉宇，高处不胜寒', note: '表达诗人想象自己飞向月宫，又担心那里太过寒冷的矛盾心理。' },
      { line: '人有悲欢离合，月有阴晴圆缺，此事古难全', note: '将人生的悲欢离合与月亮的阴晴圆缺相比，表达对人生无常的感悟。' },
      { line: '但愿人长久，千里共婵娟', note: '表达对亲人的美好祝愿，"婵娟"指月亮，意为虽然相隔千里，但共同仰望同一轮明月。' }
    ],
    tags: ['中秋', '思念', '人生感悟']
  }
];

export default poems;
