const {
  useState,
  useEffect
} = React;

// ============================================================
// DATA: 完全オリジナル例文（著作権配慮でテキスト例と重複なし）
// ============================================================

const SECTIONS = [{
  id: "1-1",
  title: "動作が主語のSVO",
  subtitle: "Action as Subject",
  principle: "日本語の「〜すると〜される」は、英語では「〜することが、〜を〜する」と組み立て直して、動名詞（V-ing）を主語にした SVO で表す。",
  tips: ["主語は動名詞（V-ing + 目的語）にする", "主語が単数扱いなので、動詞に三単現の -s を付ける", "when / if 節を避けて、シンプルな単文にする"],
  example: {
    jp: "古いパスワードを使うと、アカウントが攻撃を受けやすくなる。",
    restructured: "古いパスワードを使うことが、アカウントを攻撃にさらす。",
    en: "Using old passwords exposes accounts to attacks.",
    breakdown: {
      s: "Using old passwords",
      v: "exposes",
      o: "accounts to attacks"
    }
  },
  questions: [{
    type: "mc",
    prompt: "次の日本語を SVO で英訳するとき、主語として最も適切なものは？",
    jp: "コードを定期的にレビューすると、不具合を早期に発見できる。",
    options: ["Code reviews regularly", "Regularly reviewing code", "If you review code regularly"],
    correct: 1,
    explanation: "「〜すると」を動名詞主語に変換する。副詞 regularly は動名詞の前に置く。if 節を使った選択肢（If you review code regularly）は単文の SVO にならない。"
  }, {
    type: "mc",
    prompt: "空所に入る動詞として最も適切なものは？",
    jp: "データを暗号化すると、不正アクセスを防げる。",
    sentence: "Encrypting data ___ unauthorized access.",
    options: ["prevent", "is prevented", "prevents"],
    correct: 2,
    explanation: "動名詞主語 Encrypting data は単数扱い。三単現の -s を付けて prevents とする。"
  }, {
    type: "mc",
    prompt: "より簡潔で技術英語として適切な表現はどちらか？",
    jp: "ソフトウェアを更新すると、セキュリティ上の脆弱性が修正される。",
    options: ["When software is updated, security vulnerabilities will be fixed.", "Updating software fixes security vulnerabilities."],
    correct: 1,
    explanation: "動作を主語にした能動態 SVO の方が短く、明快。受け身と when 節を同時に避けられる。"
  }, {
    type: "write",
    prompt: "次の日本語を、動作主語の SVO で英訳してみよう。",
    jp: "レンズを清掃すると、画像品質が向上する。",
    hint: "主語：「レンズを清掃すること」／ 動詞：「向上させる」",
    vocabHints: [{
      word: "cl_an_ng",
      meaning: "清掃すること"
    }, {
      word: "l_ns",
      meaning: "レンズ"
    }, {
      word: "i_pr_v_s",
      meaning: "向上させる（三単現）"
    }, {
      word: "im_ge qu_l_ty",
      meaning: "画像品質"
    }],
    model: "Cleaning the lens improves image quality.",
    note: "Cleaning the lens（主語）→ improves（V、三単現の -s）→ image quality（目的語）。image quality は不可算なので冠詞なしで可。"
  }, {
    type: "write",
    prompt: "次の日本語を、動作主語の SVO で英訳してみよう。",
    jp: "ファイアウォールを設定すると、多くのネットワーク攻撃を遮断できる。",
    hint: "動詞 block（〜を遮断する）が使える。",
    vocabHints: [{
      word: "c_nfi_ur_ng",
      meaning: "設定すること"
    }, {
      word: "fir_wa_l",
      meaning: "ファイアウォール"
    }, {
      word: "bl_cks",
      meaning: "遮断する（三単現）"
    }, {
      word: "netw_rk att_cks",
      meaning: "ネットワーク攻撃"
    }],
    model: "Configuring a firewall blocks many network attacks.",
    note: "Configuring a firewall（主語）→ blocks（V、三単現）→ many network attacks（目的語）。can を使って Configuring a firewall can block ... も可。"
  }]
}, {
  id: "1-2",
  title: "無生物主語のSVO",
  subtitle: "Inanimate Subject",
  principle: "モノ・事象・工程・概念といった無生物を主語にして、「それが動作を引き起こす」と組み立て直す。英語特有の擬人化表現。",
  tips: ["「〜において」と文頭に飛び出す句は、主語に変換する", "主語を工夫することで、受け身を減らせる", "when / if 節の複文を、単文の SVO に圧縮できる"],
  example: {
    jp: "多くの工場において、再生可能エネルギーが使用されている。",
    restructured: "多くの工場が、再生可能エネルギーを使用している。",
    en: "Many factories use renewable energy.",
    breakdown: {
      s: "Many factories",
      v: "use",
      o: "renewable energy"
    }
  },
  questions: [{
    type: "mc",
    prompt: "次の日本語を無生物主語 SVO で表すとき、主語として最も適切なものは？",
    jp: "ソーラーパネルは太陽光を電気に変換する。",
    options: ["Solar panels", "Sunlight", "Electricity"],
    correct: 0,
    explanation: "「ソーラーパネルが変換する」と考える。Solar panels を主語にして能動態で表す。"
  }, {
    type: "mc",
    prompt: "空所に入る動詞として最も適切なものは？",
    jp: "新しいアルゴリズムは処理時間を大幅に短縮する。",
    sentence: "The new algorithm ___ processing time significantly.",
    options: ["is reduced", "reducing", "reduces"],
    correct: 2,
    explanation: "無生物主語 The new algorithm は単数扱い。能動態で reduces（三単現）とする。"
  }, {
    type: "mc",
    prompt: "より簡潔で技術英語として適切な表現はどちらか？",
    jp: "強風があると橋が揺れることがある。",
    options: ["Strong winds can sway a bridge.", "If there are strong winds, a bridge can be swayed."],
    correct: 0,
    explanation: "Strong winds を主語にすることで、if 節と受け身を同時に避けられる。語数も大幅に減る。"
  }, {
    type: "write",
    prompt: "次の日本語を、無生物主語の SVO で英訳してみよう。",
    jp: "機械学習モデルは大量のデータを処理する。",
    hint: "主語：「機械学習モデル」／ 動詞：「処理する」= process",
    vocabHints: [{
      word: "m_chi_e le_rn_ng",
      meaning: "機械学習"
    }, {
      word: "m_d_ls",
      meaning: "モデル（複数）"
    }, {
      word: "pr_c_ss",
      meaning: "処理する"
    }, {
      word: "l_rge am_unts of d_ta",
      meaning: "大量のデータ"
    }],
    model: "Machine learning models process large amounts of data.",
    note: "Machine learning models（主語、複数）→ process（動詞、s なし）→ large amounts of data（目的語）。data は不可算扱いが一般的。"
  }, {
    type: "write",
    prompt: "次の日本語を、無生物主語の SVO で英訳してみよう。",
    jp: "画像認識技術は医療診断を支援する。",
    hint: "主語：「画像認識技術」／ 動詞：「支援する」= support",
    vocabHints: [{
      word: "im_ge rec_gn_tion",
      meaning: "画像認識"
    }, {
      word: "techn_l_gy",
      meaning: "技術"
    }, {
      word: "s_pp_rts",
      meaning: "支援する（三単現）"
    }, {
      word: "m_dical d_agn_sis",
      meaning: "医療診断"
    }],
    model: "Image recognition technology supports medical diagnosis.",
    note: "Image recognition technology（主語、不可算扱い・単数）→ supports（三単現）→ medical diagnosis（目的語）。"
  }]
}, {
  id: "1-3",
  title: "主語と動詞だけのSV",
  subtitle: "Subject + Intransitive Verb",
  principle: "主語と自動詞（ひとりでに起こる動作を表す動詞）だけで文の骨組みを作る。受け身を避けて、最小限の語数で技術内容を描写できる。",
  tips: ["動作の対象がない／不要な場合は自動詞を使う", "break, melt, form などは自動詞・他動詞の両方で使える", "emerge, occur, result, appear などは自動詞のみ"],
  example: {
    jp: "加熱すると、多くの金属が溶ける。",
    restructured: "多くの金属は、加熱されると溶ける（自動詞 melt）。",
    en: "Many metals melt when heated.",
    breakdown: {
      s: "Many metals",
      v: "melt",
      o: "（修飾句 when heated）"
    }
  },
  questions: [{
    type: "mc",
    prompt: "次の日本語を SV で表すとき、最も適切な動詞は？",
    jp: "水は 100 度で沸騰する。",
    sentence: "Water ___ at 100 degrees Celsius.",
    options: ["is boiled", "boils", "boiling"],
    correct: 1,
    explanation: "boil は自動詞・他動詞両用。ここでは「ひとりでに起こる」現象なので自動詞を使い、受け身（is boiled）を避ける。"
  }, {
    type: "mc",
    prompt: "次の日本語を SV で表すとき、最も適切な動詞は？",
    jp: "地震の後に津波が発生することがある。",
    sentence: "Tsunamis may ___ after earthquakes.",
    options: ["occur", "be occurred", "occurring"],
    correct: 0,
    explanation: "occur は自動詞のみ。be occurred という受け身は存在しない。"
  }, {
    type: "mc",
    prompt: "より簡潔で技術英語として適切な表現はどちらか？",
    jp: "バッテリーから酸が漏れることがある。",
    options: ["Acid may be leaked from the battery.", "Acid may leak from the battery."],
    correct: 1,
    explanation: "受け身 be leaked は「誰かが漏らした」という動作主を暗示する。自然に漏れる状況は自動詞 leak で表す。"
  }, {
    type: "write",
    prompt: "次の日本語を、自動詞を使った SV で英訳してみよう。",
    jp: "気温は昼と夜で大きく異なる。",
    hint: "「異なる、変動する」= vary は自動詞。「昼と夜で」は between day and night。",
    vocabHints: [{
      word: "t_mp_ratures",
      meaning: "気温（複数）"
    }, {
      word: "v_ry",
      meaning: "異なる・変動する（自動詞）"
    }, {
      word: "signif_cantly",
      meaning: "大きく・著しく"
    }, {
      word: "betw_en d_y and n_ght",
      meaning: "昼と夜で"
    }],
    model: "Temperatures vary significantly between day and night.",
    note: "Temperatures（主語、複数扱い）→ vary（自動詞、s なし）→ significantly（副詞）→ between day and night（修飾句）。受け身を避けてシンプルに。"
  }, {
    type: "write",
    prompt: "次の日本語を、自動詞を使った SV で英訳してみよう。",
    jp: "新しい症状はゆっくりと時間をかけて現れることがある。",
    hint: "「現れる」= emerge は自動詞のみ。may で「〜ことがある」。",
    vocabHints: [{
      word: "s_mpt_ms",
      meaning: "症状（複数）"
    }, {
      word: "em_rge",
      meaning: "現れる（自動詞）"
    }, {
      word: "sl_wly",
      meaning: "ゆっくりと"
    }, {
      word: "_ver t_me",
      meaning: "時間をかけて"
    }],
    model: "New symptoms may emerge slowly over time.",
    note: "New symptoms（主語）→ may emerge（助動詞 + 自動詞）→ slowly over time（副詞＋修飾句）。appear でも可。"
  }]
}, {
  id: "1-4",
  title: "be動詞＋名詞・形容詞で作るSVC",
  subtitle: "SVC with Noun or Adjective",
  principle: "be 動詞 + 名詞で主語を定義し、be 動詞 + 形容詞で主語の状態を表す。名詞の単数・複数と冠詞を適切に扱う。",
  tips: ["「be + 名詞」は定義文：A is B の形", "「be + 形容詞」は状態の説明：The X is + 具体的な形容詞", "便利な形容詞句：be vulnerable to（〜に脆弱）、be susceptible to（〜の影響を受けやすい）、be common in（〜において一般的）"],
  example: {
    jp: "アルミニウムは軽くて錆に強い。",
    restructured: "アルミニウム（主語）= 軽い、錆に強い（状態）",
    en: "Aluminum is light and rust-resistant.",
    breakdown: {
      s: "Aluminum",
      v: "is",
      o: "light and rust-resistant（C）"
    }
  },
  questions: [{
    type: "mc",
    prompt: "次の定義文として最も自然な英文は？",
    jp: "太陽電池とは光を電気に変換する装置である。",
    options: ["A solar cell converts light to electricity as a device.", "A solar cell is a device that converts light into electricity.", "There is a solar cell that is a device converting light."],
    correct: 1,
    explanation: "定義文は「be 動詞 + 名詞」で A is B の形にする。関係代名詞 that で名詞を修飾する。"
  }, {
    type: "mc",
    prompt: "空所に入る形容詞句として最も適切なものは？",
    jp: "古い配線は火災に対して脆弱である。",
    sentence: "Old wiring is ___ fire.",
    options: ["vulnerable to", "vulnerable from", "vulnerable about"],
    correct: 0,
    explanation: "be vulnerable to + 名詞 =「〜に対して脆弱である」が定番。前置詞は to を使う。"
  }, {
    type: "mc",
    prompt: "より簡潔で技術英語として適切な表現はどちらか？",
    jp: "このアプリは使いやすく、エネルギー効率が高い。",
    options: ["This app is user-friendly and energy-efficient.", "This app has the characteristic of being easy to use and having high energy efficiency."],
    correct: 0,
    explanation: "効果的な形容詞を並べて SVC を活用する。user-friendly や energy-efficient のような一語形容詞が便利。"
  }, {
    type: "write",
    prompt: "次の日本語を、be 動詞 + 形容詞の SVC で英訳してみよう。",
    jp: "リチウムイオン電池は携帯機器において一般的である。",
    hint: "定番表現：be common in ...（〜において一般的である）",
    vocabHints: [{
      word: "L_thium-i_n b_tt_ries",
      meaning: "リチウムイオン電池"
    }, {
      word: "c_mm_n",
      meaning: "一般的な"
    }, {
      word: "p_rt_ble d_v_ces",
      meaning: "携帯機器"
    }],
    model: "Lithium-ion batteries are common in portable devices.",
    note: "Lithium-ion batteries（主語、複数）→ are（be 動詞）→ common in portable devices（形容詞句）。複数主語なので are。"
  }, {
    type: "write",
    prompt: "次の日本語を、be 動詞を使った SVC で英訳してみよう。",
    jp: "炭素繊維とは、高い強度と軽量性を併せ持つ素材である。",
    hint: "定義文。「〜を併せ持つ」は関係代名詞 that で修飾。",
    vocabHints: [{
      word: "C_rbon f_b_r",
      meaning: "炭素繊維（不可算）"
    }, {
      word: "m_ter_al",
      meaning: "素材"
    }, {
      word: "c_mb_nes",
      meaning: "併せ持つ（三単現）"
    }, {
      word: "str_ngth",
      meaning: "強度"
    }, {
      word: "l_ghtn_ss",
      meaning: "軽量性"
    }],
    model: "Carbon fiber is a material that combines high strength with lightness.",
    note: "Carbon fiber（不可算、冠詞なし）→ is（be 動詞）→ a material that ...（C + 関係代名詞節）。"
  }]
}];
const MIN_WORDS_FOR_REVEAL = 5;

// ============================================================
// STORAGE
// ============================================================

const STORAGE_KEY = "tech-eng-practice-v3";
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
const countWords = text => text.trim().split(/\s+/).filter(Boolean).length;

// ============================================================
// UI COMPONENTS
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
  className: `flex-1 py-2 text-sm font-mono transition-colors ${danger ? "bg-red-700 text-white hover:bg-red-800 border-2 border-red-700" : "bg-stone-900 text-amber-50 hover:bg-stone-800 border-2 border-stone-900"}`
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
}, "Technical English \xB7 Practice"), /*#__PURE__*/React.createElement("h1", {
  className: "text-lg font-serif text-stone-900 leading-tight"
}, "\u6280\u8853\u82F1\u8A9E \u6587\u69CB\u9020\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0")), /*#__PURE__*/React.createElement("div", {
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
    className: "border-l-4 border-amber-600 pl-4 py-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] font-mono text-amber-700 uppercase mb-1"
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
    className: "w-full bg-stone-900 text-amber-50 py-3 font-serif text-base hover:bg-stone-800 transition-colors border-2 border-stone-900"
  }, "\u6B21\u3078 \u2192"));
};
const IntroScreen = ({
  onStart,
  hasProgress
}) => /*#__PURE__*/React.createElement("div", {
  className: "max-w-2xl mx-auto px-4 py-8 space-y-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "border-l-4 border-amber-600 pl-4 py-1"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] tracking-[0.3em] font-mono text-amber-700 uppercase mb-1"
}, "Step 2 of 3 \xB7 Introduction"), /*#__PURE__*/React.createElement("h2", {
  className: "text-xl font-serif text-stone-900"
}, "\u82F1\u6587\u306E\u9AA8\u7D44\u307F\u3092\u9078\u3076 4 \u3064\u306E\u578B")), /*#__PURE__*/React.createElement("div", {
  className: "text-sm leading-relaxed text-stone-700 space-y-3"
}, /*#__PURE__*/React.createElement("p", null, "\u6280\u8853\u82F1\u8A9E\u3067\u306F\u3001\u4E3B\u8A9E\u3068\u52D5\u8A5E\u306E\u9078\u3073\u65B9\u304C\u6587\u306E\u8AAD\u307F\u3084\u3059\u3055\u3092\u6C7A\u3081\u308B\u3002\u3053\u306E\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3067\u306F\u30011 \u3064\u306E\u65E5\u672C\u8A9E\u3092\u898B\u305F\u3068\u304D\u306B\u3001\u3069\u306E\u578B\u3067\u82F1\u6587\u3092\u7D44\u307F\u7ACB\u3066\u308B\u304B\u5224\u65AD\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u3053\u3068\u3092\u76EE\u6307\u3059\u3002"), /*#__PURE__*/React.createElement("p", null, "\u5168 4 \u30BB\u30AF\u30B7\u30E7\u30F3\u3001\u5404 5 \u554F\u3001\u8A08 ", /*#__PURE__*/React.createElement("strong", null, "20 \u554F"), "\u3002\u81EA\u7FD2\u6642\u306E\u76EE\u5B89\u306F ", /*#__PURE__*/React.createElement("strong", null, "20 \u5206\u4EE5\u5185"), "\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "bg-amber-50 border-l-4 border-amber-600 p-3 text-xs space-y-1.5"
}, /*#__PURE__*/React.createElement("div", null, "\u25B8 \u9014\u4E2D\u3067\u9589\u3058\u3066\u3082\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u308B\u306E\u3067\u3001\u518D\u3073\u958B\u304F\u3068\u7D9A\u304D\u304B\u3089\u59CB\u3081\u3089\u308C\u308B\u3002"), /*#__PURE__*/React.createElement("div", null, "\u25B8 \u8A18\u8FF0\u554F\u984C\u306F ", MIN_WORDS_FOR_REVEAL, " \u8A9E\u4EE5\u4E0A\u5165\u529B\u3059\u308B\u3068\u30E2\u30C7\u30EB\u89E3\u7B54\u3092\u78BA\u8A8D\u3067\u304D\u308B\u3002"), /*#__PURE__*/React.createElement("div", null, "\u25B8 \u5168\u554F\u7D42\u4E86\u5F8C\u3001\u9593\u9055\u3048\u305F\u591A\u80A2\u9078\u629E\u3068\u300C\u25CE \u540C\u3058\u300D\u306B\u306A\u3089\u306A\u304B\u3063\u305F\u8A18\u8FF0\u3092\u3084\u308A\u76F4\u3059\u3002"), /*#__PURE__*/React.createElement("div", null, "\u25B8 \u6700\u5F8C\u306B\u63A1\u70B9\u753B\u9762\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3057\u3066\u63D0\u51FA\u3059\u308B\u3002"))), /*#__PURE__*/React.createElement("div", {
  className: "border-2 border-stone-900 bg-white"
}, /*#__PURE__*/React.createElement("div", {
  className: "border-b border-stone-300 px-4 py-2 bg-stone-100"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] font-mono tracking-widest text-stone-500 uppercase"
}, "4 sections")), /*#__PURE__*/React.createElement("div", {
  className: "divide-y divide-stone-200"
}, SECTIONS.map(s => /*#__PURE__*/React.createElement("div", {
  key: s.id,
  className: "px-4 py-3 flex items-start gap-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "font-mono text-amber-700 text-sm w-10 shrink-0"
}, s.id), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "font-serif text-stone-900"
}, s.title), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] font-mono text-stone-500 tracking-wider"
}, s.subtitle)))))), /*#__PURE__*/React.createElement("button", {
  onClick: onStart,
  className: "w-full bg-stone-900 text-amber-50 py-4 font-serif text-lg hover:bg-stone-800 transition-colors border-2 border-stone-900"
}, hasProgress ? "続きから始める →" : "開始する →"));
const PrincipleCard = ({
  section
}) => /*#__PURE__*/React.createElement("div", {
  className: "space-y-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-baseline gap-3"
}, /*#__PURE__*/React.createElement("div", {
  className: "font-mono text-2xl text-amber-700"
}, section.id), /*#__PURE__*/React.createElement("h2", {
  className: "text-xl font-serif text-stone-900"
}, section.title)), /*#__PURE__*/React.createElement("div", {
  className: "bg-stone-900 text-stone-100 p-5 space-y-3"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] font-mono tracking-[0.25em] text-amber-400 uppercase"
}, "Principle"), /*#__PURE__*/React.createElement("p", {
  className: "text-sm leading-relaxed font-serif"
}, section.principle), /*#__PURE__*/React.createElement("ul", {
  className: "text-xs space-y-1.5 text-stone-300 pt-2 border-t border-stone-700"
}, section.tips.map((t, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  className: "flex gap-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-amber-400 font-mono"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, t))))), /*#__PURE__*/React.createElement("div", {
  className: "border-2 border-stone-900 bg-amber-50 p-4 space-y-3"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] font-mono tracking-[0.25em] text-stone-600 uppercase"
}, "Example"), /*#__PURE__*/React.createElement("div", {
  className: "text-sm text-stone-800 font-serif"
}, section.example.jp), /*#__PURE__*/React.createElement("div", {
  className: "text-xs text-stone-600 font-serif border-l-2 border-amber-600 pl-3"
}, "\u2193 \u7D44\u307F\u7ACB\u3066\u76F4\u3057\uFF1A", section.example.restructured), /*#__PURE__*/React.createElement("div", {
  className: "text-base font-mono text-stone-900 pt-1"
}, section.example.en), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-mono text-stone-500 pt-1 border-t border-amber-200"
}, /*#__PURE__*/React.createElement("span", null, "S: ", section.example.breakdown.s), /*#__PURE__*/React.createElement("span", null, "V: ", section.example.breakdown.v), /*#__PURE__*/React.createElement("span", null, "O/C: ", section.example.breakdown.o))));
const MCQuestion = ({
  q,
  qIndex,
  answer,
  onAnswer,
  retryMode,
  teacherMode
}) => {
  const revealed = answer !== undefined && answer !== null;
  const selected = revealed ? answer : null;
  const handleSelect = i => {
    if (revealed && !retryMode && !teacherMode) return;
    onAnswer(i);
  };
  const handleTeacherReveal = () => {
    onAnswer(q.correct);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono tracking-wider text-stone-500 uppercase flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Q", qIndex + 1, " \xB7 Multiple Choice"), retryMode && /*#__PURE__*/React.createElement("span", {
    className: "text-amber-700"
  }, "\uD83D\uDD01 \u3084\u308A\u76F4\u3057"), teacherMode && !retryMode && /*#__PURE__*/React.createElement("span", {
    className: "text-fuchsia-700"
  }, "\u2728 Teacher")), /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-stone-900 text-sm"
  }, q.prompt), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-100 border-l-4 border-stone-400 p-3 text-sm font-serif text-stone-800"
  }, q.jp), q.sentence && /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-sm bg-white border border-stone-300 p-3 text-stone-900"
  }, q.sentence), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, q.options.map((opt, i) => {
    const isCorrect = i === q.correct;
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
      className: `w-full text-left border-2 p-3 text-sm font-mono transition-all ${style} ${revealed && !retryMode && !teacherMode ? "cursor-default" : ""}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-block w-6 text-stone-500"
    }, String.fromCharCode(65 + i), "."), opt, revealed && isCorrect && /*#__PURE__*/React.createElement("span", {
      className: "ml-2 text-xs font-sans"
    }, "\u2713 \u6B63\u89E3"), revealed && !isCorrect && isSelected && /*#__PURE__*/React.createElement("span", {
      className: "ml-2 text-xs font-sans"
    }, "\xD7 \u4E0D\u6B63\u89E3"));
  })), teacherMode && !revealed && /*#__PURE__*/React.createElement("button", {
    onClick: handleTeacherReveal,
    className: "w-full border-2 border-fuchsia-600 bg-fuchsia-50 text-fuchsia-800 py-2 text-xs font-mono tracking-wider hover:bg-fuchsia-100 transition-colors"
  }, "\u2728 \u89E3\u7B54\u3092\u8868\u793A\uFF08\u6559\u54E1\u30E2\u30FC\u30C9\uFF09"), revealed && /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 border border-amber-300 p-3 text-xs leading-relaxed text-stone-800 font-serif"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-amber-700 tracking-wider uppercase text-[10px]"
  }, "Explanation \xB7", " "), q.explanation), retryMode && revealed && selected !== q.correct && /*#__PURE__*/React.createElement("button", {
    onClick: () => onAnswer(null),
    className: "w-full border-2 border-amber-600 text-amber-800 py-2 text-xs font-mono tracking-wider hover:bg-amber-50 transition-colors"
  }, "\u3082\u3046\u4E00\u5EA6\u89E3\u304F \u2192"));
};
const WriteQuestion = ({
  q,
  qIndex,
  answer,
  onAnswer,
  retryMode,
  teacherMode
}) => {
  const [text, setText] = useState(answer?.text || "");
  const [revealed, setRevealed] = useState(answer?.revealed || false);
  const [selfScore, setSelfScore] = useState(answer?.selfScore || null);
  useEffect(() => {
    setText(answer?.text || "");
    setRevealed(answer?.revealed || false);
    setSelfScore(answer?.selfScore || null);
  }, [answer]);
  const wordCount = countWords(text);
  const canReveal = teacherMode || wordCount >= MIN_WORDS_FOR_REVEAL;
  const handleReveal = () => {
    if (!canReveal) return;
    setRevealed(true);
    onAnswer({
      text,
      revealed: true,
      selfScore: null
    });
  };
  const handleTeacherAutoFill = () => {
    setText(q.model);
    setRevealed(true);
    setSelfScore("ok");
    onAnswer({
      text: q.model,
      revealed: true,
      selfScore: "ok"
    });
  };
  const handleSelfScore = s => {
    setSelfScore(s);
    onAnswer({
      text,
      revealed: true,
      selfScore: s
    });
  };
  const handleRetry = () => {
    setText("");
    setRevealed(false);
    setSelfScore(null);
    onAnswer(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono tracking-wider text-stone-500 uppercase flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Q", qIndex + 1, " \xB7 Write Your Own"), retryMode && /*#__PURE__*/React.createElement("span", {
    className: "text-amber-700"
  }, "\uD83D\uDD01 \u3084\u308A\u76F4\u3057"), teacherMode && !retryMode && /*#__PURE__*/React.createElement("span", {
    className: "text-fuchsia-700"
  }, "\u2728 Teacher")), /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-stone-900 text-sm"
  }, q.prompt), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-100 border-l-4 border-stone-400 p-3 text-sm font-serif text-stone-800"
  }, q.jp), q.hint && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-600 italic font-serif"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-amber-700 not-italic"
  }, "[hint]"), " ", q.hint), q.vocabHints && /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50 border border-dashed border-stone-400 p-3 space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono tracking-widest text-stone-500 uppercase"
  }, "\u8A9E\u5F59\u30D2\u30F3\u30C8\uFF08\u866B\u98DF\u3044 \xB7 \u8A9E\u9806\u306F\u81EA\u7531\uFF09"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-1 sm:grid-cols-2"
  }, q.vocabHints.map((vh, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "text-xs flex gap-2 items-baseline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-stone-900 tracking-wide"
  }, vh.word), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-500 text-[10px]"
  }, "\uFF1D ", vh.meaning))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    disabled: revealed,
    placeholder: "\u3053\u3053\u306B\u82F1\u8A33\u3092\u5165\u529B...",
    className: "w-full border-2 border-stone-300 p-3 font-mono text-sm min-h-[80px] focus:outline-none focus:border-stone-900 disabled:bg-stone-100"
  }), !revealed && !teacherMode && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-[10px] font-mono text-stone-500"
  }, /*#__PURE__*/React.createElement("span", null, "\u5165\u529B\u6E08\u307F: ", wordCount, " \u8A9E / \u5FC5\u9808: ", MIN_WORDS_FOR_REVEAL, " \u8A9E\u4EE5\u4E0A"), /*#__PURE__*/React.createElement("span", {
    className: canReveal ? "text-emerald-700" : "text-stone-400"
  }, canReveal ? "✓ モデル解答を見られます" : "あと " + (MIN_WORDS_FOR_REVEAL - wordCount) + " 語"))), !revealed && !teacherMode && /*#__PURE__*/React.createElement("button", {
    onClick: handleReveal,
    disabled: !canReveal,
    className: "w-full bg-stone-900 text-amber-50 py-2 text-sm font-mono tracking-wider hover:bg-stone-800 transition-colors disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed"
  }, canReveal ? "モデル解答を見る →" : `${MIN_WORDS_FOR_REVEAL} 語以上入力してください`), !revealed && teacherMode && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleReveal,
    className: "bg-stone-900 text-amber-50 py-2 text-xs font-mono tracking-wider hover:bg-stone-800 transition-colors"
  }, "\u30E2\u30C7\u30EB\u89E3\u7B54\u3092\u898B\u308B \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: handleTeacherAutoFill,
    className: "border-2 border-fuchsia-600 bg-fuchsia-50 text-fuchsia-800 py-2 text-xs font-mono tracking-wider hover:bg-fuchsia-100 transition-colors"
  }, "\u2728 \u89E3\u7B54\u3092\u81EA\u52D5\u8A18\u5165")), revealed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-emerald-600 bg-emerald-50 p-4 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono tracking-[0.25em] text-emerald-700 uppercase"
  }, "Model Answer"), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-sm text-stone-900"
  }, q.model), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-700 font-serif pt-2 border-t border-emerald-200"
  }, q.note)), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50 border border-stone-300 p-3 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-serif text-stone-700"
  }, "\u81EA\u5DF1\u8A55\u4FA1\uFF1A\u3042\u306A\u305F\u306E\u89E3\u7B54\u306F\u30E2\u30C7\u30EB\u3068\u6BD4\u3079\u3066\u3069\u3046\u3060\u3063\u305F\uFF1F"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, [{
    s: "ok",
    label: "◎ ほぼ同じ"
  }, {
    s: "close",
    label: "○ 近い"
  }, {
    s: "diff",
    label: "△ 違った"
  }].map(({
    s,
    label
  }) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => handleSelfScore(s),
    className: `flex-1 text-xs font-mono py-2 border-2 transition-colors ${selfScore === s ? "border-stone-900 bg-stone-900 text-amber-50" : "border-stone-300 bg-white hover:border-stone-600"}`
  }, label)))), retryMode && selfScore && selfScore !== "ok" && /*#__PURE__*/React.createElement("button", {
    onClick: handleRetry,
    className: "w-full border-2 border-amber-600 text-amber-800 py-2 text-xs font-mono tracking-wider hover:bg-amber-50 transition-colors"
  }, "\u3082\u3046\u4E00\u5EA6\u89E3\u304F \u2192")));
};
const SectionView = ({
  section,
  sIndex,
  answers,
  onAnswer,
  onNext,
  onBack,
  teacherMode
}) => {
  const qCount = section.questions.length;
  const answered = Array.from({
    length: qCount
  }).map((_, i) => {
    const a = answers[i];
    if (a === undefined || a === null) return false;
    if (section.questions[i].type === "write") {
      return a.revealed && a.selfScore !== null;
    }
    return true;
  });
  const allAnswered = answered.every(Boolean);
  const canProceed = teacherMode || allAnswered;
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto px-4 py-6 space-y-8"
  }, /*#__PURE__*/React.createElement(PrincipleCard, {
    section: section
  }), /*#__PURE__*/React.createElement("div", {
    className: "border-t-2 border-stone-900 pt-6 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono tracking-[0.3em] text-stone-500 uppercase"
  }, "Practice \xB7 ", qCount, " questions"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5"
  }, answered.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `h-1.5 flex-1 ${a ? "bg-amber-600" : "bg-stone-200"}`
  })))), section.questions.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "border border-stone-300 bg-white p-5 space-y-4"
  }, q.type === "mc" ? /*#__PURE__*/React.createElement(MCQuestion, {
    q: q,
    qIndex: i,
    answer: answers[i],
    onAnswer: a => onAnswer(i, a),
    teacherMode: teacherMode
  }) : /*#__PURE__*/React.createElement(WriteQuestion, {
    q: q,
    qIndex: i,
    answer: answers[i],
    onAnswer: a => onAnswer(i, a),
    teacherMode: teacherMode
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 pt-4 border-t-2 border-stone-900"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "flex-1 border-2 border-stone-900 py-3 font-mono text-sm hover:bg-stone-100 transition-colors"
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("button", {
    onClick: onNext,
    disabled: !canProceed,
    className: "flex-[2] bg-stone-900 text-amber-50 py-3 font-mono text-sm hover:bg-stone-800 transition-colors disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed"
  }, sIndex === SECTIONS.length - 1 ? "やり直しへ進む →" : `次のセクション（${SECTIONS[sIndex + 1].id}）→`)));
};
const RetryScreen = ({
  retryQueue,
  allAnswers,
  onAnswer,
  onComplete,
  onSkip,
  teacherMode
}) => {
  const remaining = retryQueue.filter(({
    sIdx,
    qIdx
  }) => {
    const a = allAnswers[sIdx]?.[qIdx];
    const q = SECTIONS[sIdx].questions[qIdx];
    if (a === undefined || a === null) return true;
    if (q.type === "mc") return a !== q.correct;
    return !a.revealed || a.selfScore !== "ok";
  });
  if (retryQueue.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "max-w-2xl mx-auto px-4 py-8 space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "border-l-4 border-emerald-600 pl-4 py-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] tracking-[0.3em] font-mono text-emerald-700 uppercase mb-1"
    }, "Perfect!"), /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-serif text-stone-900"
    }, "\u3084\u308A\u76F4\u3057\u304C\u5FC5\u8981\u306A\u554F\u984C\u306F\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-serif text-stone-700"
    }, "\u5168\u554F\u3001\u591A\u80A2\u9078\u629E\u306F\u6B63\u89E3\u3001\u8A18\u8FF0\u554F\u984C\u306F\u300C\u25CE \u307B\u307C\u540C\u3058\u300D\u3067\u3057\u305F\u3002"), /*#__PURE__*/React.createElement("button", {
      onClick: onComplete,
      className: "w-full bg-stone-900 text-amber-50 py-4 font-serif text-lg hover:bg-stone-800 transition-colors border-2 border-stone-900"
    }, "\u6700\u7D42\u7D50\u679C\u3092\u898B\u308B \u2192"));
  }
  const allDone = remaining.length === 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto px-4 py-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-l-4 border-amber-600 pl-4 py-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] font-mono text-amber-700 uppercase mb-1"
  }, "Step 3 of 3 \xB7 Retry"), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-serif text-stone-900"
  }, "\u9593\u9055\u3048\u305F\u554F\u984C\u306E\u3084\u308A\u76F4\u3057")), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 border border-amber-300 p-3 text-xs font-serif text-stone-800 leading-relaxed"
  }, "\u591A\u80A2\u9078\u629E\u3067\u4E0D\u6B63\u89E3\u3060\u3063\u305F\u554F\u984C\u3001\u8A18\u8FF0\u3067\u300C\u25CE \u307B\u307C\u540C\u3058\u300D\u4EE5\u5916\u3060\u3063\u305F\u554F\u984C\u3092\u3001\u3082\u3046\u4E00\u5EA6\u89E3\u3053\u3046\u3002\u5404\u554F\u984C\u306E\u4E0B\u306B\u300C\u3082\u3046\u4E00\u5EA6\u89E3\u304F\u300D\u30DC\u30BF\u30F3\u304C\u3042\u308B\u306E\u3067\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304B\u3089\u518D\u6311\u6226\u3002\u5168\u554F\u30AF\u30EA\u30A2\u3067\u6700\u7D42\u7D50\u679C\u753B\u9762\u3078\u9032\u3081\u308B\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-[10px] font-mono tracking-widest text-stone-500 uppercase"
  }, /*#__PURE__*/React.createElement("span", null, "\u6B8B\u308A ", remaining.length, " / ", retryQueue.length, " \u554F"), /*#__PURE__*/React.createElement("span", null, retryQueue.length - remaining.length, " \u554F\u30AF\u30EA\u30A2")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5"
  }, retryQueue.map(({
    sIdx,
    qIdx
  }, i) => {
    const a = allAnswers[sIdx]?.[qIdx];
    const q = SECTIONS[sIdx].questions[qIdx];
    const done = a && (q.type === "mc" && a === q.correct || q.type === "write" && a.revealed && a.selfScore === "ok");
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `h-1.5 flex-1 ${done ? "bg-emerald-600" : "bg-stone-200"}`
    });
  })), retryQueue.map(({
    sIdx,
    qIdx
  }) => {
    const q = SECTIONS[sIdx].questions[qIdx];
    const a = allAnswers[sIdx]?.[qIdx];
    const section = SECTIONS[sIdx];
    return /*#__PURE__*/React.createElement("div", {
      key: `${sIdx}-${qIdx}`,
      className: "border border-stone-300 bg-white p-5 space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-mono tracking-widest text-amber-700 uppercase border-b border-stone-200 pb-2"
    }, section.id, " ", section.title), q.type === "mc" ? /*#__PURE__*/React.createElement(MCQuestion, {
      q: q,
      qIndex: qIdx,
      answer: a,
      onAnswer: ans => onAnswer(sIdx, qIdx, ans),
      retryMode: true,
      teacherMode: teacherMode
    }) : /*#__PURE__*/React.createElement(WriteQuestion, {
      q: q,
      qIndex: qIdx,
      answer: a,
      onAnswer: ans => onAnswer(sIdx, qIdx, ans),
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
    className: "flex-[2] bg-stone-900 text-amber-50 py-3 font-mono text-sm hover:bg-stone-800 transition-colors disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed"
  }, allDone || teacherMode ? "最終結果を見る →" : "全問クリアで次へ")));
};
const ResultScreen = ({
  allAnswers,
  student,
  onRestart,
  onReview
}) => {
  let mcTotal = 0;
  let mcCorrect = 0;
  let writeTotal = 0;
  let writeSelfOk = 0;
  SECTIONS.forEach((section, sIdx) => {
    section.questions.forEach((q, qIdx) => {
      const ans = allAnswers[sIdx]?.[qIdx];
      if (q.type === "mc") {
        mcTotal++;
        if (ans === q.correct) mcCorrect++;
      } else {
        writeTotal++;
        if (ans?.selfScore === "ok") writeSelfOk++;
      }
    });
  });
  const totalCorrect = mcCorrect + writeSelfOk;
  const totalQ = mcTotal + writeTotal;
  const percent = Math.round(totalCorrect / totalQ * 100);
  const achievement = percent === 100 ? {
    label: "◎ PERFECT",
    color: "emerald",
    msg: "全問クリア。素晴らしい。"
  } : percent >= 80 ? {
    label: "○ EXCELLENT",
    color: "emerald",
    msg: "よく理解できている。"
  } : percent >= 60 ? {
    label: "△ GOOD",
    color: "amber",
    msg: "基本はできている。復習でさらに伸ばそう。"
  } : {
    label: "× NEEDS REVIEW",
    color: "stone",
    msg: "もう一度挑戦して、パターンに慣れよう。"
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
    className: "text-[10px] tracking-[0.3em] font-mono text-amber-700 uppercase"
  }, "Submission \xB7 \u63D0\u51FA\u7528"), /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-serif text-stone-900 mt-1"
  }, "\u6280\u8853\u82F1\u8A9E \u6587\u69CB\u9020\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0")), /*#__PURE__*/React.createElement("div", {
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
    className: "grid grid-cols-3 gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-stone-300 p-3 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono text-stone-500 tracking-wider uppercase"
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-serif text-stone-900"
  }, totalCorrect, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-stone-500"
  }, "/", totalQ)), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-600"
  }, percent, "%")), /*#__PURE__*/React.createElement("div", {
    className: "border border-stone-300 p-3 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono text-stone-500 tracking-wider uppercase"
  }, "MC"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-serif text-stone-900"
  }, mcCorrect, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-stone-500"
  }, "/", mcTotal))), /*#__PURE__*/React.createElement("div", {
    className: "border border-stone-300 p-3 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono text-stone-500 tracking-wider uppercase"
  }, "Write \u25CE"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-serif text-stone-900"
  }, writeSelfOk, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-stone-500"
  }, "/", writeTotal)))), /*#__PURE__*/React.createElement("div", {
    className: `border-2 p-3 text-center ${achievement.color === "emerald" ? "border-emerald-600 bg-emerald-50" : achievement.color === "amber" ? "border-amber-600 bg-amber-50" : "border-stone-400 bg-stone-50"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono tracking-[0.3em] text-sm"
  }, achievement.label), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-serif mt-1 text-stone-700"
  }, achievement.msg)), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-stone-300 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono text-stone-500 tracking-widest uppercase mb-2"
  }, "Section Breakdown"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, SECTIONS.map((section, sIdx) => {
    const secAnswers = allAnswers[sIdx] || {};
    const mcQs = section.questions.filter(q => q.type === "mc");
    const writeQs = section.questions.filter(q => q.type === "write");
    const mcC = mcQs.filter(q => {
      const actualIdx = section.questions.indexOf(q);
      return secAnswers[actualIdx] === q.correct;
    }).length;
    const wC = writeQs.filter(q => {
      const actualIdx = section.questions.indexOf(q);
      return secAnswers[actualIdx]?.selfScore === "ok";
    }).length;
    return /*#__PURE__*/React.createElement("div", {
      key: section.id,
      className: "flex items-center justify-between text-xs font-mono py-1 border-b border-stone-100 last:border-0"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "text-amber-700 mr-2"
    }, section.id), /*#__PURE__*/React.createElement("span", {
      className: "font-serif text-stone-800"
    }, section.title)), /*#__PURE__*/React.createElement("span", {
      className: "text-stone-600"
    }, "MC ", mcC, "/", mcQs.length, " \xB7 W ", wC, "/", writeQs.length));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-mono text-stone-400 text-center pt-2 border-t border-stone-200"
  }, "\xA9 2026 Kaoruko Takechi")), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-900 text-stone-100 p-5 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono tracking-[0.25em] text-amber-400 uppercase"
  }, "\uD83D\uDCF8 \u63D0\u51FA\u65B9\u6CD5"), /*#__PURE__*/React.createElement("ol", {
    className: "text-sm font-serif space-y-2 list-decimal list-inside"
  }, /*#__PURE__*/React.createElement("li", null, "\u4E0A\u306E\u300C\u63D0\u51FA\u7528\u300D\u30AB\u30FC\u30C9\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\uFF08\u307E\u305F\u306F\u753B\u9762\u306E\u5199\u771F\u3092\u64AE\u5F71\uFF09"), /*#__PURE__*/React.createElement("li", null, "Google Classroom \u306E\u8A72\u5F53\u8AB2\u984C\u306B\u753B\u50CF\u3092\u6DFB\u4ED8\u3057\u3066\u63D0\u51FA")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-400 font-serif pt-2 border-t border-stone-700"
  }, "\u203B \u6C0F\u540D\u30FB\u51FA\u5E2D\u756A\u53F7\u30FB\u70B9\u6570\u304C\u5199\u3063\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u63D0\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 border-2 border-amber-600 p-4 text-xs leading-relaxed font-serif text-stone-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono tracking-widest text-amber-700 uppercase mb-2"
  }, "\u5B66\u7FD2\u306E\u307E\u3068\u3081"), "4 \u3064\u306E\u578B\uFF08\u52D5\u4F5C\u4E3B\u8A9E SVO\u3001\u7121\u751F\u7269\u4E3B\u8A9E SVO\u3001SV\u3001SVC\uFF09\u306F\u3001\u6280\u8853\u82F1\u8A9E\u306E\u6587\u3092\u7D44\u307F\u7ACB\u3066\u308B\u57FA\u672C\u306E\u9AA8\u7D44\u307F\u3002\u3069\u306E\u578B\u3092\u9078\u3076\u304B\u3067\u3001\u6587\u306E\u8AAD\u307F\u3084\u3059\u3055\u304C\u5927\u304D\u304F\u5909\u308F\u308B\u3002\u8FF7\u3063\u305F\u3068\u304D\u306F\u300C\u8AB0\u304C\u30FB\u4F55\u304C\u3001\u4F55\u3092\u3059\u308B\u306E\u304B\u300D\u3092\u65E5\u672C\u8A9E\u3067\u7D44\u307F\u7ACB\u3066\u76F4\u3057\u3066\u304B\u3089\u3001\u82F1\u8A9E\u306B\u3059\u308B\u3068\u3088\u3044\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onReview,
    className: "flex-1 border-2 border-stone-900 py-3 font-mono text-sm hover:bg-stone-100 transition-colors"
  }, "\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u898B\u76F4\u3059"), /*#__PURE__*/React.createElement("button", {
    onClick: onRestart,
    className: "flex-1 bg-stone-900 text-amber-50 py-3 font-mono text-sm hover:bg-stone-800 transition-colors"
  }, "\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059")));
};

// ============================================================
// MAIN APP
// ============================================================

function App() {
  const [screen, setScreen] = useState("studentForm");
  const [student, setStudent] = useState(null);
  const [teacherMode, setTeacherMode] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [allAnswers, setAllAnswers] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await loadProgress();
      if (data) {
        setScreen(data.screen || "studentForm");
        setStudent(data.student || null);
        setTeacherMode(data.teacherMode || false);
        setSectionIndex(data.sectionIndex || 0);
        setAllAnswers(data.allAnswers || {});
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
      sectionIndex,
      allAnswers
    });
  }, [screen, student, teacherMode, sectionIndex, allAnswers, loaded]);
  const handleStudentSubmit = s => {
    setStudent({
      id: s.id,
      name: s.name
    });
    setTeacherMode(!!s.isTeacher);
    setScreen("intro");
  };
  const handleStart = () => setScreen("section");
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
    setSectionIndex(0);
    setAllAnswers({});
    setResetConfirm(false);
  };
  const handleAnswer = (qIdx, ans) => {
    setAllAnswers(prev => ({
      ...prev,
      [sectionIndex]: {
        ...(prev[sectionIndex] || {}),
        [qIdx]: ans
      }
    }));
  };
  const handleRetryAnswer = (sIdx, qIdx, ans) => {
    setAllAnswers(prev => {
      const updated = {
        ...prev,
        [sIdx]: {
          ...(prev[sIdx] || {}),
          [qIdx]: ans
        }
      };
      if (ans === null) {
        const {
          [qIdx]: _,
          ...rest
        } = updated[sIdx];
        updated[sIdx] = rest;
      }
      return updated;
    });
  };
  const handleNext = () => {
    if (sectionIndex < SECTIONS.length - 1) {
      setSectionIndex(sectionIndex + 1);
      window.scrollTo(0, 0);
    } else {
      setScreen("retry");
      window.scrollTo(0, 0);
    }
  };
  const handleBack = () => {
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
      window.scrollTo(0, 0);
    } else {
      setScreen("intro");
      window.scrollTo(0, 0);
    }
  };
  const handleReview = () => {
    setScreen("section");
    setSectionIndex(0);
    window.scrollTo(0, 0);
  };
  const handleRestartAll = () => {
    setRestartConfirm(true);
  };
  const doRestartAll = () => {
    setScreen("intro");
    setSectionIndex(0);
    setAllAnswers({});
    setRestartConfirm(false);
    window.scrollTo(0, 0);
  };
  const getRetryQueue = () => {
    const queue = [];
    SECTIONS.forEach((section, sIdx) => {
      section.questions.forEach((q, qIdx) => {
        const a = allAnswers[sIdx]?.[qIdx];
        if (q.type === "mc") {
          if (a !== q.correct) queue.push({
            sIdx,
            qIdx
          });
        } else {
          if (!a || !a.revealed || a.selfScore !== "ok") {
            queue.push({
              sIdx,
              qIdx
            });
          }
        }
      });
    });
    return queue;
  };
  if (!loaded) {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-stone-50 flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-mono text-xs text-stone-500 tracking-widest"
    }, "LOADING..."));
  }
  const hasProgress = Object.keys(allAnswers).length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-stone-50 flex flex-col",
    style: {
      fontFamily: '"Noto Serif JP", "Hiragino Mincho ProN", serif'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .font-mono { font-family: "JetBrains Mono", ui-monospace, monospace; }
        .font-serif { font-family: "Noto Serif JP", "Hiragino Mincho ProN", serif; }
        .font-sans { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", sans-serif; }
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
  }), screen === "section" && /*#__PURE__*/React.createElement(SectionView, {
    key: sectionIndex,
    section: SECTIONS[sectionIndex],
    sIndex: sectionIndex,
    answers: allAnswers[sectionIndex] || {},
    onAnswer: handleAnswer,
    onNext: handleNext,
    onBack: handleBack,
    teacherMode: teacherMode
  }), screen === "retry" && /*#__PURE__*/React.createElement(RetryScreen, {
    retryQueue: getRetryQueue(),
    allAnswers: allAnswers,
    onAnswer: handleRetryAnswer,
    onComplete: () => {
      setScreen("result");
      window.scrollTo(0, 0);
    },
    onSkip: () => {
      setScreen("result");
      window.scrollTo(0, 0);
    },
    teacherMode: teacherMode
  }), screen === "result" && /*#__PURE__*/React.createElement(ResultScreen, {
    allAnswers: allAnswers,
    student: student,
    onRestart: handleRestartAll,
    onReview: handleReview
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
