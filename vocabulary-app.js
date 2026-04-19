const {
  useState,
  useEffect
} = React;

// ============================================================
// DATA: 教科書の英文から抽出した語彙 35 語
// 例文はすべて新規作成（教科書の例文は一切使用していない）
// ============================================================

const VOCAB_GROUPS = [{
  id: "A",
  title: "動作・工程を表す動詞",
  subtitle: "Processes & Actions",
  items: [{
    word: "deposit",
    pos: "v.",
    correct: "〜を蒸着する／堆積させる",
    distractors: ["〜を溶解する", "〜を精錬する", "〜を分析する"],
    example: "Semiconductor factories deposit metal films onto silicon wafers.",
    exampleJp: "半導体工場は金属膜をシリコンウエハーに蒸着する。"
  }, {
    word: "generate",
    pos: "v.",
    correct: "〜を生成する／発生させる",
    distractors: ["〜を消費する", "〜を蓄積する", "〜を分解する"],
    example: "Wind turbines generate clean electricity without producing emissions.",
    exampleJp: "風力タービンは排気を出さずにクリーンな電気を生成する。"
  }, {
    word: "eliminate",
    pos: "v.",
    correct: "〜を取り除く／無くす",
    distractors: ["〜を保存する", "〜を増やす", "〜を複製する"],
    example: "The new filter eliminates most airborne particles.",
    exampleJp: "新しいフィルターは空気中の微粒子のほとんどを取り除く。"
  }, {
    word: "activate",
    pos: "v.",
    correct: "〜を作動させる／起動する",
    distractors: ["〜を停止させる", "〜を点検する", "〜を削除する"],
    example: "Pressing the red button activates the emergency brake.",
    exampleJp: "赤いボタンを押すと緊急ブレーキが作動する。"
  }, {
    word: "demonstrate",
    pos: "v.",
    correct: "〜を示す／実演する／立証する",
    distractors: ["〜を隠す", "〜を否定する", "〜を疑問視する"],
    example: "The engineers will demonstrate the prototype at the conference.",
    exampleJp: "技術者たちは学会で試作品を披露する予定だ。"
  }, {
    word: "emerge",
    pos: "v. (自動詞)",
    correct: "現れる／出現する",
    distractors: ["消失する", "埋没する", "解決する"],
    example: "Clear patterns emerge when the data is plotted over time.",
    exampleJp: "データを経時的にプロットすると、明確なパターンが現れる。"
  }, {
    word: "accumulate",
    pos: "v.",
    correct: "蓄積する／溜まる",
    distractors: ["拡散する", "減少する", "蒸発する"],
    example: "Dust can accumulate inside computer fans over several months.",
    exampleJp: "数ヶ月の間にパソコンのファン内部にホコリが溜まることがある。"
  }, {
    word: "involve",
    pos: "v.",
    correct: "〜を要する／含む",
    distractors: ["〜を省く", "〜を拒む", "〜を与える"],
    example: "Launching a satellite involves careful planning and testing.",
    exampleJp: "衛星の打ち上げには慎重な計画と検証が必要である。"
  }, {
    word: "blend",
    pos: "v.",
    correct: "混ざり合う／〜を混ぜる",
    distractors: ["〜を分離する", "〜を冷却する", "〜を凝縮する"],
    example: "The two color layers blend smoothly at the boundary.",
    exampleJp: "2つの色の層は境界で滑らかに混ざり合う。"
  }, {
    word: "prototype",
    pos: "v. / n.",
    correct: "〜を試作する／試作品",
    distractors: ["〜を量産する", "〜を廃棄する", "〜を修復する"],
    example: "Startups often prototype new products using 3D printers.",
    exampleJp: "スタートアップは3Dプリンターで新製品を試作することが多い。"
  }]
}, {
  id: "B",
  title: "性質・状態を表す形容詞",
  subtitle: "Properties & States",
  items: [{
    word: "antimicrobial",
    pos: "adj.",
    correct: "抗菌性の",
    distractors: ["放射性の", "耐熱性の", "磁性のある"],
    example: "The hospital uses antimicrobial coatings on frequently touched surfaces.",
    exampleJp: "病院ではよく触れる表面に抗菌コーティングを使用している。"
  }, {
    word: "efficacious",
    pos: "adj.",
    correct: "有効な／効果的な",
    distractors: ["非効率な", "短時間の", "高価な"],
    example: "The new vaccine proved efficacious against multiple strains.",
    exampleJp: "新しいワクチンは複数の株に対して有効であると証明された。"
  }, {
    word: "hazardous",
    pos: "adj.",
    correct: "危険な／有害な",
    distractors: ["無害な", "不安定な", "慢性的な"],
    example: "The laboratory stores hazardous chemicals in sealed cabinets.",
    exampleJp: "研究室では危険な薬品を密閉式キャビネットに保管している。"
  }, {
    word: "excessive",
    pos: "adj.",
    correct: "過度な／過剰な",
    distractors: ["不十分な", "適度な", "稀な"],
    example: "Excessive heat can warp the plastic housing of the device.",
    exampleJp: "過度な熱は装置のプラスチック筐体を歪ませることがある。"
  }, {
    word: "prolonged",
    pos: "adj.",
    correct: "長引いた／長期の",
    distractors: ["瞬間的な", "反復的な", "短期の"],
    example: "Prolonged exposure to UV light damages skin cells.",
    exampleJp: "紫外線への長期的な曝露は皮膚細胞を損傷する。"
  }, {
    word: "robust",
    pos: "adj.",
    correct: "頑丈な／堅牢な",
    distractors: ["脆弱な", "軽量な", "小型な"],
    example: "This industrial laptop features a robust aluminum chassis.",
    exampleJp: "この産業用ノートPCは頑丈なアルミ筐体を備えている。"
  }, {
    word: "vulnerable",
    pos: "adj.",
    correct: "脆弱な／弱い",
    distractors: ["頑丈な", "適応力のある", "自立した"],
    example: "Old bridges are vulnerable to damage from strong earthquakes.",
    exampleJp: "古い橋は大地震による損傷に対して脆弱である。"
  }, {
    word: "susceptible",
    pos: "adj.",
    correct: "影響を受けやすい",
    distractors: ["影響を受けにくい", "無関心な", "抵抗力のある"],
    example: "Elderly patients are more susceptible to infection.",
    exampleJp: "高齢患者は感染症の影響を受けやすい。"
  }, {
    word: "degenerative",
    pos: "adj.",
    correct: "変性の／退行性の",
    distractors: ["再生性の", "突発性の", "遺伝性の"],
    example: "Arthritis is a common degenerative joint disease.",
    exampleJp: "関節炎はよくある退行性の関節疾患である。"
  }, {
    word: "thermoplastic",
    pos: "adj.",
    correct: "熱可塑性の",
    distractors: ["熱硬化性の", "絶縁性の", "導電性の"],
    example: "Thermoplastic parts can be melted and reshaped when needed.",
    exampleJp: "熱可塑性の部品は必要に応じて溶かして成形し直せる。"
  }]
}, {
  id: "C",
  title: "分野・現象の専門用語",
  subtitle: "Technical Fields",
  items: [{
    word: "clinical",
    pos: "adj.",
    correct: "臨床の",
    distractors: ["理論的な", "工業的な", "農業の"],
    example: "Clinical studies typically take years to complete.",
    exampleJp: "臨床研究は完了までに通常数年を要する。"
  }, {
    word: "haptic",
    pos: "adj.",
    correct: "触感の／触覚の",
    distractors: ["聴覚の", "視覚の", "嗅覚の"],
    example: "Modern game controllers use haptic feedback for immersion.",
    exampleJp: "現代のゲームコントローラーは没入感のために触覚フィードバックを使う。"
  }, {
    word: "augmented",
    pos: "adj.",
    correct: "拡張された",
    distractors: ["縮小された", "省略された", "逆転された"],
    example: "Surgeons use augmented reality to visualize internal organs.",
    exampleJp: "外科医は拡張現実を使って体内器官を可視化する。"
  }, {
    word: "perception",
    pos: "n.",
    correct: "知覚／認識",
    distractors: ["記憶", "反射", "想像"],
    example: "Color perception can vary across different cultures.",
    exampleJp: "色の知覚は文化によって異なることがある。"
  }, {
    word: "corrosion",
    pos: "n.",
    correct: "腐食",
    distractors: ["摩耗", "変形", "破裂"],
    example: "Saltwater accelerates corrosion on metal structures.",
    exampleJp: "塩水は金属構造物の腐食を加速させる。"
  }, {
    word: "evaporation",
    pos: "n.",
    correct: "蒸発",
    distractors: ["凝固", "結露", "昇華"],
    example: "Warm temperatures speed up evaporation from open water.",
    exampleJp: "暖かい気温は開放水面からの蒸発を加速させる。"
  }, {
    word: "downtime",
    pos: "n.",
    correct: "停止時間",
    distractors: ["待機時間", "稼働時間", "応答時間"],
    example: "Regular maintenance reduces unexpected downtime in factories.",
    exampleJp: "定期的な整備は工場の予期せぬ停止時間を減らす。"
  }, {
    word: "resolution",
    pos: "n.",
    correct: "解像度",
    distractors: ["輝度", "コントラスト", "彩度"],
    example: "Higher resolution cameras capture finer details.",
    exampleJp: "高解像度のカメラはより細かい詳細を捉える。"
  }]
}, {
  id: "D",
  title: "素材・生体の名詞",
  subtitle: "Materials & Biology",
  items: [{
    word: "alloy",
    pos: "n. / v.",
    correct: "合金／〜を合金化する",
    distractors: ["純金属", "合成樹脂", "鉱石"],
    example: "Titanium alloys are widely used in aircraft construction.",
    exampleJp: "チタン合金は航空機の製造に広く使われている。"
  }, {
    word: "polymer",
    pos: "n.",
    correct: "高分子／ポリマー",
    distractors: ["単量体", "粒子", "原子"],
    example: "Polymers form the basis of most modern plastic products.",
    exampleJp: "ポリマーは現代のプラスチック製品の大半の基礎である。"
  }, {
    word: "amalgam",
    pos: "n.",
    correct: "アマルガム（水銀合金）",
    distractors: ["ステンレス", "セラミック", "プラスチック"],
    example: "Dental amalgam fillings have been used for over a century.",
    exampleJp: "歯科用アマルガム充填は1世紀以上前から使われている。"
  }, {
    word: "imperfection",
    pos: "n.",
    correct: "欠陥／不完全さ",
    distractors: ["完成品", "改善点", "精密度"],
    example: "Laser sensors detect imperfections on the glass panel.",
    exampleJp: "レーザーセンサーはガラスパネル上の欠陥を検出する。"
  }, {
    word: "drought",
    pos: "n.",
    correct: "干ばつ",
    distractors: ["洪水", "嵐", "熱波"],
    example: "Prolonged drought threatens crop yields in many regions.",
    exampleJp: "長引く干ばつは多くの地域で作物の収穫量を脅かす。"
  }, {
    word: "dementia",
    pos: "n.",
    correct: "認知症",
    distractors: ["不眠症", "片頭痛", "糖尿病"],
    example: "Early detection of dementia improves treatment outcomes.",
    exampleJp: "認知症の早期発見は治療成果を改善する。"
  }, {
    word: "vaccination",
    pos: "n.",
    correct: "予防接種",
    distractors: ["検査", "手術", "輸血"],
    example: "Annual vaccination protects workers against seasonal flu.",
    exampleJp: "毎年の予防接種は季節性インフルエンザから労働者を守る。"
  }]
}];

// フラット化して問題配列を作る（グループ情報を保持）
const ALL_ITEMS = VOCAB_GROUPS.flatMap(g => g.items.map(it => ({
  ...it,
  groupId: g.id,
  groupTitle: g.title
})));

// ============================================================
// STORAGE
// ============================================================

const STORAGE_KEY = "tech-eng-vocab-v1";
const loadProgress = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};
const saveProgress = data => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Save failed:", e);
  }
};
const clearProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
};

// 選択肢のシャッフル（問題インデックスをシードにして決定的に毎回同じ順序）
const getShuffledOptions = (item, index) => {
  const options = [item.correct, ...item.distractors];
  // 線形合同法による決定的疑似乱数（問題ごとに異なる順序を生成）
  let s = (index + 1) * 9301 + 49297;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return {
    options: shuffled,
    correctIndex: shuffled.indexOf(item.correct)
  };
};

// ============================================================
// UI
// ============================================================

const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "border-t border-stone-300 bg-stone-100 py-3 px-4 mt-8"
}, /*#__PURE__*/React.createElement("div", {
  className: "max-w-3xl mx-auto text-[10px] font-mono text-stone-500 text-center tracking-wider"
}, "\xA9 2026 Kaoruko Takechi \xB7 All rights reserved."));
const ConfirmModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmLabel,
  danger
}) => /*#__PURE__*/React.createElement("div", {
  className: "fixed inset-0 z-50 flex items-center justify-center p-4",
  style: {
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  onClick: onCancel
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-white border-2 border-stone-900 max-w-sm w-full p-5 space-y-4",
  onClick: e => e.stopPropagation()
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] font-mono tracking-[0.3em] text-stone-500 uppercase"
}, "Confirm"), /*#__PURE__*/React.createElement("h3", {
  className: "text-base font-serif text-stone-900"
}, title), /*#__PURE__*/React.createElement("p", {
  className: "text-sm text-stone-700 font-serif leading-relaxed"
}, message), /*#__PURE__*/React.createElement("div", {
  className: "flex gap-2 pt-2"
}, /*#__PURE__*/React.createElement("button", {
  onClick: onCancel,
  className: "flex-1 border-2 border-stone-900 py-2 text-sm font-mono hover:bg-stone-100 transition-colors"
}, "\u30AD\u30E3\u30F3\u30BB\u30EB"), /*#__PURE__*/React.createElement("button", {
  onClick: onConfirm,
  className: `flex-1 py-2 text-sm font-mono transition-colors ${danger ? "bg-red-700 text-white hover:bg-red-800 border-2 border-red-700" : "bg-stone-900 text-sky-50 hover:bg-stone-800 border-2 border-stone-900"}`
}, confirmLabel))));
const Header = ({
  onReset,
  student,
  teacherMode
}) => /*#__PURE__*/React.createElement("header", {
  className: "border-b-2 border-stone-900 bg-stone-50 sticky top-0 z-10"
}, /*#__PURE__*/React.createElement("div", {
  className: "max-w-3xl mx-auto px-4 py-3 flex items-center justify-between"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] tracking-[0.25em] text-stone-500 font-mono uppercase"
}, "Technical English \xB7 Vocabulary"), /*#__PURE__*/React.createElement("h1", {
  className: "text-lg font-serif text-stone-900 leading-tight"
}, "\u6280\u8853\u82F1\u8A9E \u8A9E\u5F59\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0")), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-3"
}, teacherMode && /*#__PURE__*/React.createElement("div", {
  className: "bg-fuchsia-700 text-white text-[9px] font-mono tracking-[0.15em] px-2 py-1 rounded-sm"
}, "\u2728 TEACHER MODE"), student && !teacherMode && /*#__PURE__*/React.createElement("div", {
  className: "text-right text-[10px] font-mono text-stone-600 leading-tight"
}, /*#__PURE__*/React.createElement("div", null, "No. ", student.id), /*#__PURE__*/React.createElement("div", {
  className: "max-w-[8rem] truncate"
}, student.name)), /*#__PURE__*/React.createElement("button", {
  onClick: onReset,
  className: "text-[10px] font-mono tracking-wider text-stone-500 hover:text-stone-900 uppercase border border-stone-300 px-2 py-1 hover:border-stone-900 transition-colors"
}, "Reset"))));
const StudentForm = ({
  onSubmit
}) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const submit = () => {
    if (!id.trim() || !name.trim()) {
      setErr("出席番号と氏名の両方を入力してください。");
      return;
    }
    const trimmedId = id.trim();
    const trimmedName = name.trim();
    const isTeacher = trimmedId === "22" && trimmedName === "22";
    onSubmit({
      id: trimmedId,
      name: trimmedName,
      isTeacher
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-md mx-auto px-4 py-12 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-l-4 border-sky-600 pl-4 py-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] font-mono text-sky-700 uppercase mb-1"
  }, "Step 1 of 3"), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-serif text-stone-900"
  }, "\u5B66\u751F\u60C5\u5831\u306E\u5165\u529B")), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-stone-700 font-serif leading-relaxed"
  }, "\u51FA\u5E2D\u756A\u53F7\u3068\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u6700\u7D42\u753B\u9762\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3092 Google Classroom \u306B\u63D0\u51FA\u3057\u3066\u3082\u3089\u3044\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[10px] font-mono tracking-widest text-stone-500 uppercase mb-1"
  }, "\u51FA\u5E2D\u756A\u53F7"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: id,
    onChange: e => setId(e.target.value),
    placeholder: "\u4F8B\uFF1A12",
    className: "w-full border-2 border-stone-300 p-3 font-mono text-sm focus:outline-none focus:border-stone-900"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[10px] font-mono tracking-widest text-stone-500 uppercase mb-1"
  }, "\u6C0F\u540D"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "\u4F8B\uFF1A\u8FD1\u5927 \u82B1\u5B50",
    className: "w-full border-2 border-stone-300 p-3 font-mono text-sm focus:outline-none focus:border-stone-900"
  }))), err && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-red-700 bg-red-50 border border-red-300 p-2"
  }, err), /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    className: "w-full bg-stone-900 text-sky-50 py-3 font-serif text-base hover:bg-stone-800 transition-colors border-2 border-stone-900"
  }, "\u6B21\u3078 \u2192"));
};
const IntroScreen = ({
  onStart,
  hasProgress
}) => /*#__PURE__*/React.createElement("div", {
  className: "max-w-2xl mx-auto px-4 py-8 space-y-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "border-l-4 border-sky-600 pl-4 py-1"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] tracking-[0.3em] font-mono text-sky-700 uppercase mb-1"
}, "Step 2 of 3 \xB7 Introduction"), /*#__PURE__*/React.createElement("h2", {
  className: "text-xl font-serif text-stone-900"
}, "\u6280\u8853\u82F1\u8A9E\u306E\u983B\u51FA\u8A9E\u5F59\u3092\u899A\u3048\u3088\u3046")), /*#__PURE__*/React.createElement("div", {
  className: "text-sm leading-relaxed text-stone-700 space-y-3"
}, /*#__PURE__*/React.createElement("p", null, "\u6559\u79D1\u66F8\u306E\u82F1\u6587\u306B\u767B\u5834\u3059\u308B\u6280\u8853\u82F1\u8A9E\u306E\u91CD\u8981\u8A9E\u5F59\u3092\u30014 \u629E\u3067\u5B66\u7FD2\u3059\u308B\u3002\u82F1\u5358\u8A9E\u306E\u610F\u5473\u3092\u9078\u3073\u3001\u6B63\u89E3\u3059\u308B\u3068\u65B0\u3057\u3044\u4F8B\u6587\u3067\u5B9F\u969B\u306E\u4F7F\u3044\u65B9\u3092\u78BA\u8A8D\u3067\u304D\u308B\u3002"), /*#__PURE__*/React.createElement("p", null, "\u5168 4 \u30B0\u30EB\u30FC\u30D7\u3001\u8A08 ", /*#__PURE__*/React.createElement("strong", null, ALL_ITEMS.length, " \u8A9E"), "\u3002\u81EA\u7FD2\u6642\u306E\u76EE\u5B89\u306F ", /*#__PURE__*/React.createElement("strong", null, "20 \u5206\u4EE5\u5185"), "\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "bg-sky-50 border-l-4 border-sky-600 p-3 text-xs space-y-1.5"
}, /*#__PURE__*/React.createElement("div", null, "\u25B8 \u9014\u4E2D\u3067\u9589\u3058\u3066\u3082\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u308B\u3002\u518D\u3073\u958B\u304F\u3068\u7D9A\u304D\u304B\u3089\u59CB\u3081\u3089\u308C\u308B\u3002"), /*#__PURE__*/React.createElement("div", null, "\u25B8 \u5168\u8A9E\u7D42\u4E86\u5F8C\u3001\u9593\u9055\u3048\u305F\u8A9E\u306F\u3082\u3046\u4E00\u5EA6\u51FA\u984C\u3055\u308C\u308B\u3002"), /*#__PURE__*/React.createElement("div", null, "\u25B8 \u6700\u5F8C\u306B\u63A1\u70B9\u753B\u9762\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3057\u3066\u63D0\u51FA\u3059\u308B\u3002"))), /*#__PURE__*/React.createElement("div", {
  className: "border-2 border-stone-900 bg-white"
}, /*#__PURE__*/React.createElement("div", {
  className: "border-b border-stone-300 px-4 py-2 bg-stone-100"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] font-mono tracking-widest text-stone-500 uppercase"
}, "4 groups \xB7 ", ALL_ITEMS.length, " words")), /*#__PURE__*/React.createElement("div", {
  className: "divide-y divide-stone-200"
}, VOCAB_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
  key: g.id,
  className: "px-4 py-3 flex items-start gap-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "font-mono text-sky-700 text-sm w-10 shrink-0"
}, g.id), /*#__PURE__*/React.createElement("div", {
  className: "flex-1"
}, /*#__PURE__*/React.createElement("div", {
  className: "font-serif text-stone-900"
}, g.title), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] font-mono text-stone-500 tracking-wider"
}, g.subtitle)), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] font-mono text-stone-500 shrink-0"
}, g.items.length, " \u8A9E"))))), /*#__PURE__*/React.createElement("button", {
  onClick: onStart,
  className: "w-full bg-stone-900 text-sky-50 py-4 font-serif text-lg hover:bg-stone-800 transition-colors border-2 border-stone-900"
}, hasProgress ? "続きから始める →" : "開始する →"));
const VocabQuestion = ({
  item,
  globalIndex,
  answer,
  onAnswer,
  retryMode,
  teacherMode
}) => {
  const {
    options,
    correctIndex
  } = getShuffledOptions(item, globalIndex);
  const revealed = answer !== undefined && answer !== null;
  const selected = revealed ? answer : null;
  const handleSelect = i => {
    if (revealed && !retryMode && !teacherMode) return;
    onAnswer(i);
  };
  const handleTeacherReveal = () => {
    onAnswer(correctIndex);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono tracking-wider text-stone-500 uppercase flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Q", globalIndex + 1, " / ", ALL_ITEMS.length, " \xB7 Group ", item.groupId), retryMode && /*#__PURE__*/React.createElement("span", {
    className: "text-sky-700"
  }, "\uD83D\uDD01 \u3084\u308A\u76F4\u3057"), teacherMode && !retryMode && /*#__PURE__*/React.createElement("span", {
    className: "text-fuchsia-700"
  }, "\u2728 Teacher")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-2 border-stone-900 p-5 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono text-stone-500 tracking-widest uppercase"
  }, "Meaning of"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-serif text-stone-900"
  }, item.word), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono text-stone-500"
  }, item.pos))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, options.map((opt, i) => {
    const isCorrect = i === correctIndex;
    const isSelected = selected === i;
    let style = "border-stone-300 bg-white hover:border-stone-900 hover:bg-stone-50";
    if (revealed) {
      if (isCorrect) {
        style = "border-emerald-600 bg-emerald-50 text-emerald-900";
      } else if (isSelected) {
        style = "border-red-600 bg-red-50 text-red-900";
      } else {
        style = "border-stone-200 bg-stone-50 text-stone-400";
      }
    }
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => handleSelect(i),
      disabled: revealed && !retryMode && !teacherMode,
      className: `w-full text-left border-2 p-3 text-sm font-serif transition-all ${style} ${revealed && !retryMode && !teacherMode ? "cursor-default" : ""}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-block w-6 text-stone-500 font-mono"
    }, String.fromCharCode(65 + i), "."), opt, revealed && isCorrect && /*#__PURE__*/React.createElement("span", {
      className: "ml-2 text-xs"
    }, "\u2713"), revealed && !isCorrect && isSelected && /*#__PURE__*/React.createElement("span", {
      className: "ml-2 text-xs"
    }, "\xD7"));
  })), teacherMode && !revealed && /*#__PURE__*/React.createElement("button", {
    onClick: handleTeacherReveal,
    className: "w-full border-2 border-fuchsia-600 bg-fuchsia-50 text-fuchsia-800 py-2 text-xs font-mono tracking-wider hover:bg-fuchsia-100 transition-colors"
  }, "\u2728 \u89E3\u7B54\u3092\u8868\u793A\uFF08\u6559\u54E1\u30E2\u30FC\u30C9\uFF09"), revealed && /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-sky-600 bg-sky-50 p-4 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono tracking-[0.25em] text-sky-700 uppercase"
  }, "Example \xB7 \u4F7F\u3044\u65B9"), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-sm text-stone-900"
  }, item.example), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-700 font-serif pt-2 border-t border-sky-200"
  }, item.exampleJp)), retryMode && revealed && selected !== correctIndex && /*#__PURE__*/React.createElement("button", {
    onClick: () => onAnswer(null),
    className: "w-full border-2 border-sky-600 text-sky-800 py-2 text-xs font-mono tracking-wider hover:bg-sky-50 transition-colors"
  }, "\u3082\u3046\u4E00\u5EA6\u89E3\u304F \u2192"));
};
const QuizView = ({
  answers,
  onAnswer,
  onComplete,
  teacherMode
}) => {
  const answered = ALL_ITEMS.map((_, i) => answers[i] !== undefined && answers[i] !== null);
  const answeredCount = answered.filter(Boolean).length;
  const allAnswered = answered.every(Boolean);
  const canProceed = teacherMode || allAnswered;

  // グループごとに分割してレンダリング
  let globalIdx = 0;
  const grouped = VOCAB_GROUPS.map(g => {
    const items = g.items.map(it => {
      const idx = globalIdx;
      globalIdx++;
      return {
        item: {
          ...it,
          groupId: g.id,
          groupTitle: g.title
        },
        idx
      };
    });
    return {
      group: g,
      items
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto px-4 py-6 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-l-4 border-sky-600 pl-4 py-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] font-mono text-sky-700 uppercase mb-1"
  }, "Vocabulary Quiz"), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-serif text-stone-900"
  }, "\u8A9E\u5F59 4 \u629E\u30AF\u30A4\u30BA")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-[10px] font-mono tracking-widest text-stone-500 uppercase"
  }, /*#__PURE__*/React.createElement("span", null, "\u9032\u6357"), /*#__PURE__*/React.createElement("span", null, answeredCount, " / ", ALL_ITEMS.length, " \u8A9E")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-0.5"
  }, answered.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `h-1.5 flex-1 ${a ? "bg-sky-600" : "bg-stone-200"}`
  })))), grouped.map(({
    group,
    items
  }) => /*#__PURE__*/React.createElement("div", {
    key: group.id,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-t-2 border-stone-900 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-2xl text-sky-700"
  }, group.id), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-serif text-stone-900"
  }, group.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono text-stone-500 tracking-wider uppercase"
  }, group.subtitle)))), items.map(({
    item,
    idx
  }) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "border border-stone-300 bg-white p-5 space-y-4"
  }, /*#__PURE__*/React.createElement(VocabQuestion, {
    item: item,
    globalIndex: idx,
    answer: answers[idx],
    onAnswer: a => onAnswer(idx, a),
    teacherMode: teacherMode
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 pt-4 border-t-2 border-stone-900"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onComplete,
    disabled: !canProceed,
    className: "w-full bg-stone-900 text-sky-50 py-3 font-mono text-sm hover:bg-stone-800 transition-colors disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed"
  }, canProceed ? "やり直しへ進む →" : `全 ${ALL_ITEMS.length} 語に回答してください`)));
};
const RetryView = ({
  answers,
  onAnswer,
  onComplete,
  onSkip,
  teacherMode
}) => {
  // 間違えた問題のインデックス一覧
  const wrongIndices = ALL_ITEMS.map((item, i) => {
    const {
      correctIndex
    } = getShuffledOptions(item, i);
    const a = answers[i];
    if (a === undefined || a === null) return i;
    return a !== correctIndex ? i : -1;
  }).filter(i => i !== -1);
  const remaining = wrongIndices.filter(i => {
    const {
      correctIndex
    } = getShuffledOptions(ALL_ITEMS[i], i);
    const a = answers[i];
    return a === undefined || a === null || a !== correctIndex;
  });
  if (wrongIndices.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "max-w-2xl mx-auto px-4 py-8 space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "border-l-4 border-emerald-600 pl-4 py-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] tracking-[0.3em] font-mono text-emerald-700 uppercase mb-1"
    }, "Perfect!"), /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-serif text-stone-900"
    }, "\u5168\u8A9E\u6B63\u89E3\u3057\u307E\u3057\u305F")), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-serif text-stone-700"
    }, "\u3084\u308A\u76F4\u3057\u304C\u5FC5\u8981\u306A\u8A9E\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u7D20\u6674\u3089\u3057\u3044\u3002"), /*#__PURE__*/React.createElement("button", {
      onClick: onComplete,
      className: "w-full bg-stone-900 text-sky-50 py-4 font-serif text-lg hover:bg-stone-800 transition-colors border-2 border-stone-900"
    }, "\u6700\u7D42\u7D50\u679C\u3092\u898B\u308B \u2192"));
  }
  const allDone = remaining.length === 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto px-4 py-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-l-4 border-sky-600 pl-4 py-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] font-mono text-sky-700 uppercase mb-1"
  }, "Step 3 of 3 \xB7 Retry"), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-serif text-stone-900"
  }, "\u9593\u9055\u3048\u305F\u8A9E\u306E\u3084\u308A\u76F4\u3057")), /*#__PURE__*/React.createElement("div", {
    className: "bg-sky-50 border border-sky-300 p-3 text-xs font-serif text-stone-800 leading-relaxed"
  }, "\u9593\u9055\u3048\u305F\u8A9E\u3092\u3082\u3046\u4E00\u5EA6\u89E3\u3053\u3046\u3002\u5404\u554F\u984C\u306E\u4E0B\u306B\u300C\u3082\u3046\u4E00\u5EA6\u89E3\u304F\u300D\u30DC\u30BF\u30F3\u304C\u3042\u308B\u306E\u3067\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304B\u3089\u518D\u6311\u6226\u3002\u5168\u8A9E\u30AF\u30EA\u30A2\u3067\u6700\u7D42\u7D50\u679C\u753B\u9762\u3078\u9032\u3081\u308B\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-[10px] font-mono tracking-widest text-stone-500 uppercase"
  }, /*#__PURE__*/React.createElement("span", null, "\u6B8B\u308A ", remaining.length, " / ", wrongIndices.length, " \u8A9E"), /*#__PURE__*/React.createElement("span", null, wrongIndices.length - remaining.length, " \u8A9E\u30AF\u30EA\u30A2")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5"
  }, wrongIndices.map(i => {
    const {
      correctIndex
    } = getShuffledOptions(ALL_ITEMS[i], i);
    const a = answers[i];
    const done = a !== undefined && a !== null && a === correctIndex;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `h-1.5 flex-1 ${done ? "bg-emerald-600" : "bg-stone-200"}`
    });
  })), wrongIndices.map(idx => {
    const item = ALL_ITEMS[idx];
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "border border-stone-300 bg-white p-5 space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-mono tracking-widest text-sky-700 uppercase border-b border-stone-200 pb-2"
    }, "Group ", item.groupId, " \xB7 ", item.groupTitle), /*#__PURE__*/React.createElement(VocabQuestion, {
      item: item,
      globalIndex: idx,
      answer: answers[idx],
      onAnswer: a => onAnswer(idx, a),
      retryMode: true,
      teacherMode: teacherMode
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 pt-4 border-t-2 border-stone-900"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSkip,
    className: "flex-1 border-2 border-stone-900 py-3 font-mono text-sm hover:bg-stone-100 transition-colors"
  }, "\u30B9\u30AD\u30C3\u30D7\u3057\u3066\u7D50\u679C\u3078"), /*#__PURE__*/React.createElement("button", {
    onClick: onComplete,
    disabled: !allDone && !teacherMode,
    className: "flex-[2] bg-stone-900 text-sky-50 py-3 font-mono text-sm hover:bg-stone-800 transition-colors disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed"
  }, allDone || teacherMode ? "最終結果を見る →" : "全語クリアで次へ")));
};
const ResultScreen = ({
  answers,
  student,
  onRestart
}) => {
  let correct = 0;
  const groupStats = {};
  VOCAB_GROUPS.forEach(g => {
    groupStats[g.id] = {
      correct: 0,
      total: g.items.length
    };
  });
  ALL_ITEMS.forEach((item, i) => {
    const {
      correctIndex
    } = getShuffledOptions(item, i);
    if (answers[i] === correctIndex) {
      correct++;
      groupStats[item.groupId].correct++;
    }
  });
  const total = ALL_ITEMS.length;
  const percent = Math.round(correct / total * 100);
  const achievement = percent === 100 ? {
    label: "◎ PERFECT",
    color: "emerald",
    msg: "全語正解。語彙力が完璧。"
  } : percent >= 80 ? {
    label: "○ EXCELLENT",
    color: "emerald",
    msg: "よくできている。"
  } : percent >= 60 ? {
    label: "△ GOOD",
    color: "amber",
    msg: "基本はできている。もう一周で定着。"
  } : {
    label: "× NEEDS REVIEW",
    color: "stone",
    msg: "復習が必要。もう一度挑戦しよう。"
  };
  const now = new Date();
  const dateStr = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto px-4 py-8 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    id: "submission-card",
    className: "border-4 border-stone-900 bg-white p-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between border-b-2 border-stone-900 pb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] font-mono text-sky-700 uppercase"
  }, "Submission \xB7 \u63D0\u51FA\u7528"), /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-serif text-stone-900 mt-1"
  }, "\u6280\u8853\u82F1\u8A9E \u8A9E\u5F59\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0")), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono text-stone-500 text-right"
  }, dateStr)), student && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-6 text-sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono text-stone-500 tracking-wider uppercase"
  }, "\u51FA\u5E2D\u756A\u53F7"), /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-stone-900 text-base"
  }, student.id)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono text-stone-500 tracking-wider uppercase"
  }, "\u6C0F\u540D"), /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-stone-900 text-base"
  }, student.name))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-stone-300 p-3 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono text-stone-500 tracking-wider uppercase"
  }, "Total Score"), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-serif text-stone-900"
  }, correct, /*#__PURE__*/React.createElement("span", {
    className: "text-base text-stone-500"
  }, "/", total)), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-600"
  }, percent, "%")), /*#__PURE__*/React.createElement("div", {
    className: `border-2 p-3 ${achievement.color === "emerald" ? "border-emerald-600 bg-emerald-50" : achievement.color === "amber" ? "border-amber-600 bg-amber-50" : "border-stone-400 bg-stone-50"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono tracking-widest text-stone-600 uppercase"
  }, "Achievement"), /*#__PURE__*/React.createElement("div", {
    className: "font-mono tracking-[0.2em] text-sm mt-1"
  }, achievement.label), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-serif mt-1 text-stone-700"
  }, achievement.msg))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-stone-300 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono text-stone-500 tracking-widest uppercase mb-2"
  }, "Group Breakdown"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, VOCAB_GROUPS.map(g => {
    const stat = groupStats[g.id];
    return /*#__PURE__*/React.createElement("div", {
      key: g.id,
      className: "flex items-center justify-between text-xs font-mono py-1 border-b border-stone-100 last:border-0"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "text-sky-700 mr-2"
    }, g.id), /*#__PURE__*/React.createElement("span", {
      className: "font-serif text-stone-800"
    }, g.title)), /*#__PURE__*/React.createElement("span", {
      className: "text-stone-600"
    }, stat.correct, "/", stat.total));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono text-stone-400 text-center pt-2 border-t border-stone-200"
  }, "\xA9 2026 Kaoruko Takechi")), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-900 text-stone-100 p-5 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono tracking-[0.25em] text-sky-400 uppercase"
  }, "\uD83D\uDCF8 \u63D0\u51FA\u65B9\u6CD5"), /*#__PURE__*/React.createElement("ol", {
    className: "text-sm font-serif space-y-2 list-decimal list-inside"
  }, /*#__PURE__*/React.createElement("li", null, "\u4E0A\u306E\u300C\u63D0\u51FA\u7528\u300D\u30AB\u30FC\u30C9\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\uFF08\u307E\u305F\u306F\u753B\u9762\u306E\u5199\u771F\u3092\u64AE\u5F71\uFF09"), /*#__PURE__*/React.createElement("li", null, "Google Classroom \u306E\u8A72\u5F53\u8AB2\u984C\u306B\u753B\u50CF\u3092\u6DFB\u4ED8\u3057\u3066\u63D0\u51FA")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-400 font-serif pt-2 border-t border-stone-700"
  }, "\u203B \u6C0F\u540D\u30FB\u51FA\u5E2D\u756A\u53F7\u30FB\u70B9\u6570\u304C\u5199\u3063\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u63D0\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "bg-sky-50 border-2 border-sky-600 p-4 text-xs leading-relaxed font-serif text-stone-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono tracking-widest text-sky-700 uppercase mb-2"
  }, "\u5B66\u7FD2\u306E\u307E\u3068\u3081"), "\u6280\u8853\u82F1\u8A9E\u306E\u8A9E\u5F59\u306F\u3001\u4E00\u822C\u82F1\u8A9E\u3088\u308A\u3082\u610F\u5473\u306E\u7BC4\u56F2\u304C\u9650\u5B9A\u7684\u3067\u3001\u4F7F\u3044\u65B9\u306E\u578B\u304C\u6C7A\u307E\u3063\u3066\u3044\u308B\u3082\u306E\u304C\u591A\u3044\u3002\u4ECA\u65E5\u5B66\u3093\u3060\u8A9E\u3092\u3001\u6559\u79D1\u66F8\u306E\u4ED6\u306E\u82F1\u6587\u3084\u81EA\u5206\u306E\u82F1\u4F5C\u6587\u3067\u3082\u4F7F\u3063\u3066\u307F\u3088\u3046\u3002\u5B9A\u671F\u7684\u306B\u898B\u76F4\u3059\u3053\u3068\u3067\u8A18\u61B6\u306B\u5B9A\u7740\u3059\u308B\u3002"), /*#__PURE__*/React.createElement("button", {
    onClick: onRestart,
    className: "w-full bg-stone-900 text-sky-50 py-3 font-mono text-sm hover:bg-stone-800 transition-colors"
  }, "\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"));
};

// ============================================================
// MAIN APP
// ============================================================

function App() {
  const [screen, setScreen] = useState("studentForm");
  const [student, setStudent] = useState(null);
  const [teacherMode, setTeacherMode] = useState(false);
  const [answers, setAnswers] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await loadProgress();
      if (data) {
        setScreen(data.screen || "studentForm");
        setStudent(data.student || null);
        setTeacherMode(data.teacherMode || false);
        setAnswers(data.answers || {});
      }
      setLoaded(true);
    })();
  }, []);
  useEffect(() => {
    if (!loaded) return;
    saveProgress({
      screen,
      student,
      teacherMode,
      answers
    });
  }, [screen, student, teacherMode, answers, loaded]);
  const handleStudentSubmit = s => {
    setStudent({
      id: s.id,
      name: s.name
    });
    setTeacherMode(!!s.isTeacher);
    setScreen("intro");
  };
  const handleStart = () => setScreen("quiz");
  const [resetConfirm, setResetConfirm] = useState(false);
  const [restartConfirm, setRestartConfirm] = useState(false);
  const handleReset = () => {
    setResetConfirm(true);
  };
  const doReset = async () => {
    await clearProgress();
    setScreen("studentForm");
    setStudent(null);
    setTeacherMode(false);
    setAnswers({});
    setResetConfirm(false);
  };
  const handleAnswer = (idx, ans) => {
    setAnswers(prev => {
      const updated = {
        ...prev,
        [idx]: ans
      };
      if (ans === null) delete updated[idx];
      return updated;
    });
  };
  const handleQuizComplete = () => {
    setScreen("retry");
    window.scrollTo(0, 0);
  };
  const handleRetryComplete = () => {
    setScreen("result");
    window.scrollTo(0, 0);
  };
  const handleRestartAll = () => {
    setRestartConfirm(true);
  };
  const doRestartAll = () => {
    setScreen("intro");
    setAnswers({});
    setRestartConfirm(false);
    window.scrollTo(0, 0);
  };
  if (!loaded) {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-stone-50 flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-mono text-xs text-stone-500 tracking-widest"
    }, "LOADING..."));
  }
  const hasProgress = Object.keys(answers).length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-stone-50 flex flex-col",
    style: {
      fontFamily: '"Noto Serif JP", "Hiragino Mincho ProN", serif'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .font-mono { font-family: "JetBrains Mono", ui-monospace, monospace; }
        .font-serif { font-family: "Noto Serif JP", "Hiragino Mincho ProN", serif; }
      `), screen !== "studentForm" && /*#__PURE__*/React.createElement(Header, {
    onReset: handleReset,
    student: student,
    teacherMode: teacherMode
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1"
  }, screen === "studentForm" && /*#__PURE__*/React.createElement(StudentForm, {
    onSubmit: handleStudentSubmit
  }), screen === "intro" && /*#__PURE__*/React.createElement(IntroScreen, {
    onStart: handleStart,
    hasProgress: hasProgress
  }), screen === "quiz" && /*#__PURE__*/React.createElement(QuizView, {
    answers: answers,
    onAnswer: handleAnswer,
    onComplete: handleQuizComplete,
    teacherMode: teacherMode
  }), screen === "retry" && /*#__PURE__*/React.createElement(RetryView, {
    answers: answers,
    onAnswer: handleAnswer,
    onComplete: handleRetryComplete,
    onSkip: handleRetryComplete,
    teacherMode: teacherMode
  }), screen === "result" && /*#__PURE__*/React.createElement(ResultScreen, {
    answers: answers,
    student: student,
    onRestart: handleRestartAll
  })), /*#__PURE__*/React.createElement(Footer, null), resetConfirm && /*#__PURE__*/React.createElement(ConfirmModal, {
    title: "\u30EA\u30BB\u30C3\u30C8\u306E\u78BA\u8A8D",
    message: "\u3059\u3079\u3066\u306E\u9032\u6357\u30FB\u5B66\u751F\u60C5\u5831\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3059\u3002\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",
    onConfirm: doReset,
    onCancel: () => setResetConfirm(false),
    confirmLabel: "\u30EA\u30BB\u30C3\u30C8\u3059\u308B",
    danger: true
  }), restartConfirm && /*#__PURE__*/React.createElement(ConfirmModal, {
    title: "\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3057",
    message: "\u56DE\u7B54\u3092\u3059\u3079\u3066\u30EA\u30BB\u30C3\u30C8\u3057\u3066\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3057\u307E\u3059\u3002\u5B66\u751F\u60C5\u5831\u306F\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002",
    onConfirm: doRestartAll,
    onCancel: () => setRestartConfirm(false),
    confirmLabel: "\u3084\u308A\u76F4\u3059"
  }));
}
const rootEl = document.getElementById("root");
ReactDOM.createRoot(rootEl).render(/*#__PURE__*/React.createElement(App, null));
