import { defineComponent as T, ref as b, onMounted as R, onUpdated as be, openBlock as u, createElementBlock as d, normalizeStyle as x, createCommentVNode as I, createElementVNode as r, renderSlot as W, resolveComponent as ee, createVNode as Q, withCtx as X, createTextVNode as J, toDisplayString as C, Transition as pe, withDirectives as H, vShow as K, pushScopeId as se, popScopeId as ae, watch as G, createBlock as te, Fragment as O, renderList as N, normalizeClass as oe, computed as ye, withModifiers as me, getCurrentInstance as de, useSlots as ue, Teleport as ge, render as re } from "vue";
const _e = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "default"
  },
  shape: {
    type: String,
    default: "default"
  },
  loading: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, $e = (e, t) => {
  if (!t)
    throw new Error("name is required");
  let n = [];
  const l = [!1];
  for (let a in e)
    a != "loading" && (l.includes(e[a]) || (e[a] == "default" ? n.push(`${t}-${a}-${e[a]}`) : e[a] == !0 ? n.push(`${t}-${a}`) : n.push(`${t}-${e[a]}`)));
  return n;
}, we = T({
  name: "CptButton",
  props: _e,
  setup(e) {
    const t = b(), n = e, l = () => {
      t.value.classList = [], t.value.classList.add("cpt-btn", "c-pointer", ...$e(n, "cpt"));
    }, a = () => n.loading;
    return R(() => {
      l();
    }), be(() => {
      l();
    }), {
      buttonRef: t,
      isLoading: a
    };
  }
});
const F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t)
    n[l] = a;
  return n;
}, Ce = {
  key: 0,
  class: "cpt-loading"
};
function ke(e, t, n, l, a, c) {
  return u(), d("button", {
    ref: "buttonRef",
    class: "",
    style: x(e.isLoading() ? "padding-left:30px;pointer-events:none;" : "")
  }, [e.isLoading() ? (u(), d("div", Ce)) : I("", !0), r("span", null, [W(e.$slots, "default", {}, void 0, !0)])], 4);
}
const Se = /* @__PURE__ */ F(we, [["render", ke], ["__scopeId", "data-v-b01a9a9a"]]), Le = {
  trigger: {
    type: String,
    default: "hover"
  },
  btnType: {
    type: String,
    default: "primary"
  },
  handle: {
    type: Boolean,
    default: !1
  },
  text: {
    type: String,
    default: "dropdown"
  }
}, De = T({
  name: "CptDropdown",
  props: Le,
  setup(e) {
    const t = e, n = t.handle, l = b(!1), a = b(), c = b(), o = () => {
      l.value = !l.value;
    }, s = t.trigger == "hover" ? "mouseenter" : "click";
    let g = null;
    const f = () => {
      g && clearTimeout(g), g = setTimeout(() => {
        l.value = !1;
      }, 500);
    }, p = () => {
      c.value.buttonRef.addEventListener("mouseleave", () => {
        f();
      }), a.value.addEventListener("mouseenter", () => {
        clearTimeout(g);
      }), a.value.addEventListener("mouseleave", () => {
        f();
      });
    }, v = () => {
      n || a.value.addEventListener("mousedown", (h) => (h.preventDefault(), !1)), c.value.buttonRef.addEventListener("blur", () => {
        l.value = !1;
      });
    }, $ = () => {
      t.trigger == "hover" ? p() : v(), c.value.buttonRef.addEventListener(s, () => {
        const h = a.value.getBoundingClientRect().left;
        if (document.documentElement.clientWidth - h < 100) {
          const w = document.getElementById("arrow");
          w.style.right = "10px", w.style.left = "auto", a.value.style.right = "100px";
        } else if (h < 100) {
          const w = document.getElementById("arrow");
          w.style.left = "10px", w.style.right = "auto", a.value.style.left = "100px";
        }
        s == "mouseenter" ? (clearTimeout(g), l.value = !0) : o();
      });
    };
    return R(() => {
      $();
    }), {
      isShow: o,
      show: l,
      listRef: a,
      btnRef: c
    };
  }
});
const Be = (e) => (se("data-v-77b1ac2c"), e = e(), ae(), e), Ie = {
  class: "cpt-dropdown"
}, Ee = {
  ref: "listRef",
  class: "cpt-dropdown-content"
}, Te = {
  class: "cpt-dropdown-menu"
}, Fe = /* @__PURE__ */ Be(() => /* @__PURE__ */ r("div", {
  class: "cpt-dropdown-arrow"
}, null, -1));
function Ve(e, t, n, l, a, c) {
  const o = ee("CptButton");
  return u(), d("div", Ie, [Q(o, {
    ref: "btnRef",
    type: e.btnType
  }, {
    default: X(() => [J(C(e.text), 1)]),
    _: 1
  }, 8, ["type"]), r("div", Ee, [Q(pe, {
    name: "slide-fade"
  }, {
    default: X(() => [H(r("div", Te, [Fe, r("ul", null, [W(e.$slots, "default", {}, void 0, !0)])], 512), [[K, e.show]])]),
    _: 3
  })], 512)]);
}
const Me = /* @__PURE__ */ F(De, [["render", Ve], ["__scopeId", "data-v-77b1ac2c"]]), Ae = {
  modelValue: {
    type: Array,
    default: []
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    default: "defalut"
  },
  todoList: {
    type: Array,
    default: []
  },
  colorType: {
    type: Object,
    default: {
      success: "#67C23A",
      danger: "#f00"
    }
  }
}, ie = {
  lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 92821, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 37600, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560],
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
  Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
  Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
  festival: {
    "1-1": {
      title: "元旦节"
    },
    "2-14": {
      title: "情人节"
    },
    "5-1": {
      title: "劳动节"
    },
    "5-4": {
      title: "青年节"
    },
    "6-1": {
      title: "儿童节"
    },
    "9-10": {
      title: "教师节"
    },
    "10-1": {
      title: "国庆节"
    },
    "12-25": {
      title: "圣诞节"
    },
    "3-8": {
      title: "妇女节"
    },
    "3-12": {
      title: "植树节"
    },
    "4-1": {
      title: "愚人节"
    },
    "5-12": {
      title: "护士节"
    },
    "7-1": {
      title: "建党节"
    },
    "8-1": {
      title: "建军节"
    },
    "12-24": {
      title: "平安夜"
    }
  },
  lFestival: {
    "12-30": {
      title: "除夕"
    },
    "1-1": {
      title: "春节"
    },
    "1-15": {
      title: "元宵节"
    },
    "2-2": {
      title: "龙抬头"
    },
    "5-5": {
      title: "端午节"
    },
    "7-7": {
      title: "七夕节"
    },
    "7-15": {
      title: "中元节"
    },
    "8-15": {
      title: "中秋节"
    },
    "9-9": {
      title: "重阳节"
    },
    "10-1": {
      title: "寒衣节"
    },
    "10-15": {
      title: "下元节"
    },
    "12-8": {
      title: "腊八节"
    },
    "12-23": {
      title: "北方小年"
    },
    "12-24": {
      title: "南方小年"
    }
  },
  getFestival() {
    return this.festival;
  },
  getLunarFestival() {
    return this.lFestival;
  },
  setFestival(e = {}) {
    this.festival = e;
  },
  setLunarFestival(e = {}) {
    this.lFestival = e;
  },
  solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
  sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"],
  nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
  nStr2: ["初", "十", "廿", "卅"],
  nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
  lYearDays: function(e) {
    let t, n = 348;
    for (t = 32768; t > 8; t >>= 1)
      n += this.lunarInfo[e - 1900] & t ? 1 : 0;
    return n + this.leapDays(e);
  },
  leapMonth: function(e) {
    return 15 & this.lunarInfo[e - 1900];
  },
  leapDays: function(e) {
    return this.leapMonth(e) ? 65536 & this.lunarInfo[e - 1900] ? 30 : 29 : 0;
  },
  monthDays: function(e, t) {
    return t > 12 || t < 1 ? -1 : this.lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
  },
  solarDays: function(e, t) {
    if (t > 12 || t < 1)
      return -1;
    const n = t - 1;
    return n === 1 ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : this.solarMonth[n];
  },
  toGanZhiYear: function(e) {
    let t = (e - 3) % 10, n = (e - 3) % 12;
    return t === 0 && (t = 10), n === 0 && (n = 12), this.Gan[t - 1] + this.Zhi[n - 1];
  },
  toAstro: function(e, t) {
    return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (t < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
  },
  toGanZhi: function(e) {
    return this.Gan[e % 10] + this.Zhi[e % 12];
  },
  getTerm: function(e, t) {
    if (e < 1900 || e > 2100 || t < 1 || t > 24)
      return -1;
    const n = this.sTermInfo[e - 1900], l = [parseInt("0x" + n.substr(0, 5)).toString(), parseInt("0x" + n.substr(5, 5)).toString(), parseInt("0x" + n.substr(10, 5)).toString(), parseInt("0x" + n.substr(15, 5)).toString(), parseInt("0x" + n.substr(20, 5)).toString(), parseInt("0x" + n.substr(25, 5)).toString()], a = [l[0].substr(0, 1), l[0].substr(1, 2), l[0].substr(3, 1), l[0].substr(4, 2), l[1].substr(0, 1), l[1].substr(1, 2), l[1].substr(3, 1), l[1].substr(4, 2), l[2].substr(0, 1), l[2].substr(1, 2), l[2].substr(3, 1), l[2].substr(4, 2), l[3].substr(0, 1), l[3].substr(1, 2), l[3].substr(3, 1), l[3].substr(4, 2), l[4].substr(0, 1), l[4].substr(1, 2), l[4].substr(3, 1), l[4].substr(4, 2), l[5].substr(0, 1), l[5].substr(1, 2), l[5].substr(3, 1), l[5].substr(4, 2)];
    return parseInt(a[t - 1]);
  },
  toChinaMonth: function(e) {
    if (e > 12 || e < 1)
      return -1;
    let t = this.nStr3[e - 1];
    return t += "月";
  },
  toChinaDay: function(e) {
    let t;
    switch (e) {
      case 10:
        t = "初十";
        break;
      case 20:
        t = "二十";
        break;
      case 30:
        t = "三十";
        break;
      default:
        t = this.nStr2[Math.floor(e / 10)], t += this.nStr1[e % 10];
    }
    return t;
  },
  getAnimal: function(e) {
    return this.Animals[(e - 4) % 12];
  },
  solar2lunar: function(e, t, n) {
    let l, a = parseInt(e), c = parseInt(t), o = parseInt(n);
    if (a < 1900 || a > 2100 || a === 1900 && c === 1 && o < 31)
      return -1;
    let s, g = 0, f = 0;
    a = (l = a ? new Date(a, parseInt(c.toString()) - 1, o) : /* @__PURE__ */ new Date()).getFullYear(), c = l.getMonth() + 1, o = l.getDate();
    let p = (Date.UTC(l.getFullYear(), l.getMonth(), l.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
    for (s = 1900; s < 2101 && p > 0; s++)
      p -= f = this.lYearDays(s);
    p < 0 && (p += f, s--);
    let v = /* @__PURE__ */ new Date(), $ = !1;
    v.getFullYear() === a && v.getMonth() + 1 === c && v.getDate() === o && ($ = !0);
    let h = l.getDay(), E = this.nStr1[h];
    h === 0 && (h = 7);
    const w = s;
    g = this.leapMonth(s);
    let y = !1;
    for (s = 1; s < 13 && p > 0; s++)
      g > 0 && s === g + 1 && y === !1 ? (--s, y = !0, f = this.leapDays(w)) : f = this.monthDays(w, s), y === !0 && s === g + 1 && (y = !1), p -= f;
    p === 0 && g > 0 && s === g + 1 && (y ? y = !1 : (y = !0, --s)), p < 0 && (p += f, --s);
    const S = s, M = p + 1, _ = c - 1, A = this.toGanZhiYear(w), j = this.getTerm(a, 2 * c - 1), Y = this.getTerm(a, 2 * c);
    let Z = this.toGanZhi(12 * (a - 1900) + c + 11);
    o >= j && (Z = this.toGanZhi(12 * (a - 1900) + c + 12));
    let z = !1, i = null;
    j === o && (z = !0, i = this.solarTerm[2 * c - 2]), Y === o && (z = !0, i = this.solarTerm[2 * c - 1]);
    const m = Date.UTC(a, _, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, k = this.toGanZhi(m + o - 1), V = this.toAstro(c, o), L = a + "-" + c + "-" + o, D = w + "-" + S + "-" + M, B = this.festival, P = this.lFestival, U = c + "-" + o, q = S + "-" + M;
    return {
      date: L,
      lunarDate: D,
      festival: B[U] ? B[U].title : null,
      lunarFestival: P[q] ? P[q].title : null,
      lYear: w,
      lMonth: S,
      lDay: M,
      Animal: this.getAnimal(w),
      IMonthCn: (y ? "闰" : "") + this.toChinaMonth(S),
      IDayCn: this.toChinaDay(M),
      cYear: a,
      cMonth: c,
      cDay: o,
      gzYear: A,
      gzMonth: Z,
      gzDay: k,
      isToday: $,
      isLeap: y,
      nWeek: h,
      ncWeek: "星期" + E,
      isTerm: z,
      Term: i,
      astro: V
    };
  },
  lunar2solar: function(e, t, n, l) {
    e = parseInt(e), t = parseInt(t), n = parseInt(n), l = !!l;
    const a = this.leapMonth(e);
    if (l && a !== t || e === 2100 && t === 12 && n > 1 || e === 1900 && t === 1 && n < 31)
      return -1;
    const c = this.monthDays(e, t);
    let o = c;
    if (l && (o = this.leapDays(e, t)), e < 1900 || e > 2100 || n > o)
      return -1;
    let s, g = 0;
    for (s = 1900; s < e; s++)
      g += this.lYearDays(s);
    let f = 0, p = !1;
    for (s = 1; s < t; s++)
      f = this.leapMonth(e), p || f <= s && f > 0 && (g += this.leapDays(e), p = !0), g += this.monthDays(e, s);
    l && (g += c);
    const v = Date.UTC(1900, 1, 30, 0, 0, 0), $ = new Date(864e5 * (g + n - 31) + v), h = $.getUTCFullYear(), E = $.getUTCMonth() + 1, w = $.getUTCDate();
    return this.solar2lunar(h, E, w);
  }
}, ze = T({
  name: "CptCalendar",
  props: Ae,
  emits: ["update:fullscreen", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const {
      fullscreen: n,
      todoList: l,
      colorType: a
    } = e, c = b(e.type);
    if (!a)
      throw new Error("colorType is required");
    const o = b(0), s = b(0), g = b([]), f = b([]), p = b([]), v = b(), $ = b((/* @__PURE__ */ new Date()).getFullYear()), h = b((/* @__PURE__ */ new Date()).getMonth() + 1);
    (() => {
      const i = [], m = [];
      for (let k = 2013; k <= 2050; k++)
        i.push(k);
      for (let k = 1; k <= 12; k++)
        m.push(k);
      g.value = i, f.value = m;
    })();
    const w = (i) => {
      const m = [], V = i.length / 7;
      for (let L = 0; L < V; L++)
        m.push(i.splice(0, 7));
      return m;
    }, y = (i, m) => {
      const k = [], V = /* @__PURE__ */ new Date(), L = new Date(i, m, 0).getDate(), D = new Date(i, m - 1, 1).getDay();
      let B = 1, P = new Date(i, m - 1, 0).getDate();
      for (let U = 0; U < 6; U++)
        for (let q = 0; q < 7; q++)
          if (U == 0 && q < D) {
            const le = m - 1 <= 0 ? 12 : m - 1, ce = m - 1 <= 0 ? i - 1 : i, ne = P - (D - q - 1);
            k.push({
              lunar: ie.solar2lunar(ce, le, ne),
              day: ne,
              month: !1,
              prev: !0,
              select: !1
            });
          } else if (B > L) {
            const le = m + 1 > 12 ? 1 : m + 1, ce = m + 1 > 12 ? i + 1 : i, ne = B - L;
            k.push({
              lunar: ie.solar2lunar(ce, le, ne),
              day: ne,
              month: !1,
              select: !1,
              next: !0
            }), B++;
          } else {
            const le = B === V.getDate() && m === V.getMonth() + 1 && i === V.getFullYear();
            k.push({
              lunar: ie.solar2lunar(i, m, B),
              day: B,
              now: le,
              month: !0,
              select: p.value.includes(`${i}-${m}-${B}`),
              date: `${i}-${m}-${B}`,
              showDate: `${m}-${B}`,
              todoList: []
            }), B++;
          }
      return w(k);
    }, S = b(y($.value, h.value)), M = (i) => {
      if (i.prev | i.next) {
        if (c.value === "card")
          return;
        i.prev ? (h.value--, h.value < 1 && (h.value = 12, $.value--), S.value = y($.value, h.value)) : i.next && (h.value++, h.value > 12 && (h.value = 1, $.value++), S.value = y($.value, h.value));
        return;
      }
      i.select = !i.select, i.select ? p.value.push(i.date) : p.value = p.value.filter((m) => m !== i.date), t("update:modelValue", p.value);
    }, _ = () => {
      const i = v.value;
      i.style.cssText = "position:absolute;top:0;left:0;width:100%;z-index:1100;", o.value = window.innerHeight * (100 / S.value.length) / 100 - 20 / S.value.length;
    }, A = () => {
      const i = v.value;
      i.style.cssText = `width:${s.value}px`, o.value = s.value / 7;
    }, j = (i, m) => {
      S.value = y(i, m), Y();
    };
    R(() => {
      const i = document.getElementById("calendar").parentNode;
      i.offsetWidth && (s.value = i.offsetWidth), n ? _() : A();
    });
    const Y = () => {
      S.value.map((i) => {
        i.map((m) => {
          m.todoList = [], z.value.map((k) => {
            m.lunar.date === k.date && (m.todoList = k.list);
          });
        });
      });
    }, Z = () => {
      t("update:fullscreen", !1);
    }, z = b([]);
    return G(() => e.todoList, (i) => {
      i.length > 0 && c.value == "card" && (z.value = i, Y());
    }, {
      immediate: !0
    }), G(() => e.fullscreen, (i) => {
      const m = document.getElementById("calendar").parentNode;
      m.offsetWidth && (s.value = m.offsetWidth), i ? _() : A();
    }), G(() => e.type, (i) => {
      (i === "card" || i === "defalut") && (c.value = i);
    }), G(() => e.modelValue, (i) => {
      p.value = i;
    }, {
      immediate: !0
    }), {
      calendarList: S,
      boxItemWidth: o,
      select: M,
      type: c,
      todoList: l,
      colorType: a,
      selectYear: g,
      selectMonth: f,
      year: $,
      month: h,
      changeCalendar: j,
      returnFullscreen: Z,
      dom: v
    };
  }
});
const ve = (e) => (se("data-v-bb59849b"), e = e(), ae(), e), xe = {
  id: "calendar",
  class: "calendar",
  ref: "dom"
}, Ye = {
  class: "serach flex"
}, We = {
  key: 1
}, Ue = {
  class: "flex"
}, Pe = {
  key: 0,
  class: "card"
}, Oe = /* @__PURE__ */ ve(() => /* @__PURE__ */ r("thead", null, [/* @__PURE__ */ r("tr", null, [/* @__PURE__ */ r("td", {
  width: "14.28%"
}, "日"), /* @__PURE__ */ r("td", {
  width: "14.28%"
}, "一"), /* @__PURE__ */ r("td", {
  width: "14.28%"
}, "二"), /* @__PURE__ */ r("td", {
  width: "14.28%"
}, "三"), /* @__PURE__ */ r("td", {
  width: "14.28%"
}, "四"), /* @__PURE__ */ r("td", {
  width: "14.28%"
}, "五"), /* @__PURE__ */ r("td", {
  width: "14.28%"
}, "六")])], -1)), Ne = ["onClick"], Ge = {
  class: "showDate"
}, Re = {
  key: 0
}, Ze = ["title"], Xe = {
  key: 1
}, je = {
  key: 1,
  class: "default"
}, qe = /* @__PURE__ */ ve(() => /* @__PURE__ */ r("thead", null, [/* @__PURE__ */ r("tr", null, [/* @__PURE__ */ r("td", null, "日"), /* @__PURE__ */ r("td", null, "一"), /* @__PURE__ */ r("td", null, "二"), /* @__PURE__ */ r("td", null, "三"), /* @__PURE__ */ r("td", null, "四"), /* @__PURE__ */ r("td", null, "五"), /* @__PURE__ */ r("td", null, "六")])], -1)), Je = ["onClick"], He = {
  class: ""
}, Ke = {
  key: 0
}, Qe = {
  key: 0
}, et = {
  key: 1
}, tt = {
  key: 2
};
function lt(e, t, n, l, a, c) {
  const o = ee("CptButton"), s = ee("CptSelectOption"), g = ee("CptSelect");
  return u(), d("div", xe, [r("div", Ye, [e.fullscreen ? (u(), te(o, {
    key: 0,
    onClick: e.returnFullscreen,
    type: "primary"
  }, {
    default: X(() => [J("退出")]),
    _: 1
  }, 8, ["onClick"])) : (u(), d("div", We)), r("div", Ue, [Q(g, {
    modelValue: e.year,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.year = f),
    onChange: t[1] || (t[1] = (f) => e.changeCalendar(e.year, e.month)),
    class: "item",
    size: "small",
    style: {
      width: "80px"
    },
    placeholder: ""
  }, {
    default: X(() => [(u(!0), d(O, null, N(e.selectYear, (f) => (u(), te(s, {
      value: f,
      label: f
    }, null, 8, ["value", "label"]))), 256))]),
    _: 1
  }, 8, ["modelValue"]), Q(g, {
    modelValue: e.month,
    "onUpdate:modelValue": t[2] || (t[2] = (f) => e.month = f),
    onChange: t[3] || (t[3] = (f) => e.changeCalendar(e.year, e.month)),
    class: "item",
    size: "small",
    style: {
      width: "80px"
    },
    placeholder: ""
  }, {
    default: X(() => [(u(!0), d(O, null, N(e.selectMonth, (f) => (u(), te(s, {
      value: f,
      label: f
    }, null, 8, ["value", "label"]))), 256))]),
    _: 1
  }, 8, ["modelValue"])])]), e.type == "card" ? (u(), d("table", Pe, [Oe, r("tbody", null, [(u(!0), d(O, null, N(e.calendarList, (f, p) => (u(), d("tr", {
    key: p
  }, [(u(!0), d(O, null, N(f, (v, $) => (u(), d("td", {
    key: $,
    onClick: (h) => e.select(v),
    style: x({
      height: e.boxItemWidth - 4 + "px",
      "max-height": e.boxItemWidth - 4 + "px",
      "max-width": e.boxItemWidth + "px"
    })
  }, [r("div", Ge, C(v.day), 1), v.todoList && v.todoList.length > 0 ? (u(), d("ul", Re, [(u(!0), d(O, null, N(v.todoList, (h, E) => (u(), d("li", {
    class: "ell",
    key: E
  }, [r("span", {
    title: h.content
  }, [r("span", {
    class: "mark",
    style: x({
      background: e.colorType[h.type]
    })
  }, null, 4), r("span", null, C(h.content), 1)], 8, Ze)]))), 128))])) : (u(), d("ul", Xe))], 12, Ne))), 128))]))), 128))])])) : (u(), d("table", je, [qe, r("tbody", null, [(u(!0), d(O, null, N(e.calendarList, (f, p) => (u(), d("tr", {
    key: p
  }, [(u(!0), d(O, null, N(f, (v, $) => (u(), d("td", {
    key: $,
    class: oe(["transition overflow-hidden text-nowrap", [v.prev || v.next ? "prev" : "", v.now ? "now" : "", v.select ? "select" : ""]]),
    style: x({
      height: e.boxItemWidth - 4.5 + "px",
      width: e.boxItemWidth + "px",
      "max-width": e.boxItemWidth - 4.5 + "px"
    }),
    onClick: (h) => e.select(v)
  }, [r("div", He, [r("span", null, C(v.day), 1), v.lunar ? (u(), d("span", Ke, [v.lunar.festival ? (u(), d("span", Qe, C(v.lunar.festival), 1)) : v.lunar.lunarFestival ? (u(), d("span", et, C(v.lunar.lunarFestival), 1)) : (u(), d("span", tt, C(v.lunar.IDayCn), 1))])) : I("", !0), W(e.$slots, "default", {}, void 0, !0)])], 14, Je))), 128))]))), 128))])]))], 512);
}
const nt = /* @__PURE__ */ F(ze, [["render", lt], ["__scopeId", "data-v-bb59849b"]]), st = {
  modelValue: {},
  size: {
    type: String,
    default: "default"
  },
  labelBg: {
    type: String,
    default: "#f0f0f0"
  },
  labelColor: {
    type: String,
    default: "#000"
  },
  multiline: {
    type: Boolean,
    default: !1
  },
  placeholder: {
    type: String,
    default: "Please select"
  }
}, at = {
  value: {
    required: !0
  },
  label: {
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, ot = T({
  name: "CptSelect",
  props: st,
  emits: ["update:modelValue", "change"],
  setup(e, {
    emit: t
  }) {
    const n = b(), l = b(), a = b({
      // label:props.modelValue,
      value: e.modelValue
    }), c = b(), o = b([]), s = b(), g = () => {
      s.value ? l.value.blur() : (l.value.focus(), l.value.setAttribute("readonly", "readonly"), e.multiline && setTimeout(() => {
        l.value.removeAttribute("readonly");
      }, 200));
    };
    function f(y) {
      e.multiline && y.stopPropagation();
    }
    function p() {
      s.value && n.value.classList.remove("multipleFocus"), s.value = !1;
    }
    function v() {
      s.value || (s.value = !0), n.value.classList.add("multipleFocus");
    }
    function $(y) {
      return y.preventDefault(), !1;
    }
    function h(y) {
      o.value.splice(o.value.indexOf(y), 1), t("update:modelValue", o.value), o.value.length == 0 && (a.value = {});
    }
    const E = (y) => {
      y.keyCode === 8 && o.value.splice(o.value.length - 1, 1);
    };
    R(() => {
      c.value.addEventListener("mousedown", $), l.value.addEventListener("blur", p), l.value.addEventListener("focus", v), e.multiline && l.value.addEventListener("keydown", E), e.size && e.size != "defalut" && n.value.classList.add(e.size);
    });
    const w = b(ye(() => o.value.map((y) => y.value)));
    return G(() => a.value, (y) => {
      if (e.multiline && y.value) {
        let S = -1;
        for (let M = 0; M < o.value.length; M++)
          if (o.value[M].label === y.label) {
            S = M;
            break;
          }
        S === -1 ? o.value.push(JSON.parse(JSON.stringify(y))) : o.value.splice(S, 1);
      }
      t("update:modelValue", e.multiline ? w.value : y.value), t("change", !0);
    }, {
      deep: !0
    }), {
      inputFocus: g,
      multiple: n,
      optionClick: f,
      iptD: l,
      optionShow: s,
      text: a,
      select: c,
      multilineArr: o,
      labelRemove: h
    };
  }
});
const ct = {
  class: "cpt-select",
  ref: "select"
}, it = {
  class: "input"
}, ut = {
  class: "box"
}, dt = ["onClick"], rt = {
  key: 1,
  class: "label text"
}, ft = {
  oninput: "value=value.replace(/.*/g,'')",
  ref: "iptD"
}, bt = {
  key: 0,
  id: "placeholder"
}, pt = {
  key: 1,
  id: "placeholder"
}, vt = {
  class: "option"
};
function ht(e, t, n, l, a, c) {
  return u(), d("div", ct, [r("div", {
    ref: "multiple",
    onClick: t[0] || (t[0] = (...o) => e.inputFocus && e.inputFocus(...o)),
    class: "multiple"
  }, [r("div", it, [r("div", ut, [e.multiline ? (u(!0), d(O, {
    key: 0
  }, N(e.multilineArr, (o, s) => (u(), d("div", {
    class: "label",
    style: x({
      background: e.labelBg,
      color: e.labelColor
    }),
    key: s
  }, [J(C(o.label) + " ", 1), r("span", {
    onClick: me((g) => e.labelRemove(o), ["stop"]),
    class: "close"
  }, "×", 8, dt)], 4))), 128)) : I("", !0), !e.multiline && e.text.value ? (u(), d("span", rt, C(e.text.label), 1)) : I("", !0), r("input", ft, null, 512)]), e.multiline && e.multilineArr.length == 0 ? (u(), d("span", bt, C(e.placeholder), 1)) : !e.multiline && !e.text.label ? (u(), d("span", pt, C(e.placeholder), 1)) : I("", !0)])], 512), H(Q(pe, {
    name: "slide-fade"
  }, {
    default: X(() => [r("div", vt, [r("ul", {
      onClick: t[1] || (t[1] = (...o) => e.optionClick && e.optionClick(...o))
    }, [W(e.$slots, "default", {}, void 0, !0)])])]),
    _: 3
  }, 512), [[K, e.optionShow]])], 512);
}
const yt = /* @__PURE__ */ F(ot, [["render", ht], ["__scopeId", "data-v-e2a5ba0e"]]), mt = T({
  name: "CptSelectOption",
  props: at,
  setup(e) {
    const t = b(), n = b([]), l = b({}), a = b(!1);
    let c = !1;
    const o = () => {
      e.disabled || (t.value.multiline && (t.value.text.value = "", t.value.text.label = ""), t.value.text.value = e.value, t.value.text.label = e.label);
    };
    R(() => {
      if (t.value)
        return;
      const {
        proxy: p
      } = de();
      t.value = p.$parent.$parent, n.value = t.value.multilineArr, a.value = t.value.multiline, l.value = t.value.text, s(), G(() => t.value.modelValue, () => {
        c || (s(), c = !0);
      });
    });
    const s = () => {
      !t.value.multiline && e.value == t.value.modelValue ? (l.value.label = e.label, l.value.value = e.label) : t.value.modelValue && Array.isArray(t.value.modelValue) && t.value.modelValue.length > 0 && t.value.modelValue.map((p, v) => {
        if (p === e.value) {
          let $ = {
            value: e.value,
            label: e.label,
            id: Date.now()
          };
          t.value.multilineArr[v] = $;
        }
      });
    };
    return {
      multiline: a,
      selectValue: o,
      multilineFn: () => {
        for (let p = 0; p < n.value.length; p++)
          if (n.value[p].value === e.value)
            return !0;
        return !1;
      },
      textFn: () => l.value.label === e.label
    };
  }
});
function gt(e, t, n, l, a, c) {
  return u(), d("li", {
    ref: "li",
    class: oe([{
      active: e.multiline ? e.multilineFn() : e.textFn(),
      disabled: e.disabled
    }, "li"]),
    onClick: t[0] || (t[0] = (...o) => e.selectValue && e.selectValue(...o))
  }, C(e.label), 3);
}
const _t = /* @__PURE__ */ F(mt, [["render", gt], ["__scopeId", "data-v-bc98110d"]]), $t = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  activeBg: {
    type: String,
    default: "#409EFF"
  },
  closeBg: {
    type: String,
    default: "#BFBFBF"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: String,
    default: ""
  },
  unChecked: {
    type: String,
    default: ""
  }
}, wt = T({
  name: "CptSwitch",
  props: $t,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = b(), l = () => {
      e.loading || (e.modelValue ? t("update:modelValue", !1) : t("update:modelValue", !0));
    }, a = (o) => {
      o ? n.value.classList.add("cpt-switch-checked") : n.value.classList.remove("cpt-switch-checked");
    }, c = (o) => {
      o ? (n.value.classList.add("cpt-switch-disabled"), n.value.children[0].classList.add("cpt-switch-loading")) : (n.value.classList.remove("cpt-switch-disabled"), n.value.children[0].classList.remove("cpt-switch-loading"));
    };
    return R(() => {
      a(e.modelValue), e.disabled || c(e.loading);
    }), G(() => e.modelValue, (o) => {
      e.loading || a(o);
    }), G(() => e.loading, (o) => {
      c(o);
    }), {
      click: l,
      switchs: n,
      props: e
    };
  }
});
const Ct = ["disabled"], kt = /* @__PURE__ */ r("div", {
  class: "handle"
}, null, -1), St = {
  class: "inner"
};
function Lt(e, t, n, l, a, c) {
  return u(), d("button", {
    disabled: e.props.disabled,
    style: x({
      "background-color": e.props.modelValue ? e.props.activeBg : e.props.closeBg
    }),
    class: oe([{
      "cpt-switch-disabled": e.props.disabled
    }, "cpt-switch"]),
    ref: "switchs",
    onClick: t[0] || (t[0] = (...o) => e.click && e.click(...o))
  }, [kt, r("span", St, [r("span", null, [J(C(e.props.checked) + " ", 1), W(e.$slots, "open")]), r("span", null, [J(C(e.props.unChecked) + " ", 1), W(e.$slots, "close")])])], 14, Ct);
}
const Dt = /* @__PURE__ */ F(wt, [["render", Lt]]), Bt = T({
  name: "CptUpload",
  emits: ["change"],
  setup(e, {
    emit: t
  }) {
    const n = b([]);
    function l() {
      let a = document.createElement("input");
      a.type = "file", a.multiple = !0, a.onchange = c, a.click();
      function c() {
        if (a.files) {
          for (let o = 0; o < a.files.length; o++) {
            const s = a.files[o], g = new FormData();
            g.append("file", s), n.value.push({
              name: s.name,
              id: s.lastModified,
              formData: g
            }), t("change", n.value);
          }
          a = "";
        }
      }
    }
    return {
      handleFileSelect: l,
      filesList: n
    };
  }
});
function It(e, t, n, l, a, c) {
  const o = ee("CptButton");
  return u(), d("div", null, [Q(o, {
    onClick: e.handleFileSelect,
    multiple: ""
  }, {
    default: X(() => [J("upload")]),
    _: 1
  }, 8, ["onClick"]), r("div", null, [(u(!0), d(O, null, N(e.filesList, (s) => (u(), d("p", {
    key: s.id
  }, C(s.name), 1))), 128))])]);
}
const Et = /* @__PURE__ */ F(Bt, [["render", It]]), Tt = {
  modelValue: {},
  name: {},
  title: {
    type: String,
    default: "check"
  },
  type: {
    type: String,
    default: "radio"
  }
}, Ft = {
  modelValue: {},
  multiline: {
    type: Boolean,
    default: !1
  }
}, Vt = {
  name: {},
  title: {
    type: String,
    default: "checkButton"
  }
}, Mt = T({
  name: "CptCheckbox",
  props: Tt,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = b(ue().default), l = () => {
      if (a.value) {
        a.value.includes(e.name) ? a.value.splice(a.value.indexOf(e.name), 1) : a.value.push(e.name);
        return;
      }
      t("update:modelValue", e.modelValue == e.name && e.type == "checkbox" ? null : e.name);
    }, a = b();
    return R(() => {
      const {
        proxy: c
      } = de();
      a.value = c.$parent.modelValue;
    }), be(() => {
      n.value = ue().default;
    }), {
      change: l,
      isSlot: n,
      father: a
    };
  }
});
const At = {
  class: "cpt-checkbox c-pointer"
}, zt = ["type", "checked"], xt = ["type", "checked"], Yt = {
  class: "cpt-checkbox-label"
}, Wt = {
  key: 0
};
function Ut(e, t, n, l, a, c) {
  return u(), d("label", At, [e.father ? (u(), d("input", {
    key: 0,
    type: e.type,
    onClick: t[0] || (t[0] = (...o) => e.change && e.change(...o)),
    checked: e.father.includes(e.name),
    class: "cpt-checkbox-input"
  }, null, 8, zt)) : (u(), d("input", {
    key: 1,
    type: e.type,
    onClick: t[1] || (t[1] = (...o) => e.change && e.change(...o)),
    checked: e.modelValue == e.name,
    class: "cpt-checkbox-input"
  }, null, 8, xt)), r("span", Yt, [e.isSlot ? I("", !0) : (u(), d("span", Wt, C(e.title), 1)), W(e.$slots, "default", {}, void 0, !0)])]);
}
const Pt = /* @__PURE__ */ F(Mt, [["render", Ut], ["__scopeId", "data-v-e97caed6"]]), Ot = T({
  name: "CptCheckboxGroup",
  props: Ft
});
const Nt = {
  class: "cpt-checkbox-group"
};
function Gt(e, t, n, l, a, c) {
  return u(), d("div", Nt, [W(e.$slots, "default", {}, void 0, !0)]);
}
const Rt = /* @__PURE__ */ F(Ot, [["render", Gt], ["__scopeId", "data-v-17e61679"]]), Zt = T({
  name: "CptCheckboxButton",
  props: Vt,
  setup(e) {
    const t = () => {
      n.value = e.name;
    }, n = b();
    return R(() => {
      const {
        proxy: l
      } = de();
      n.value = l.$parent.modelValue;
    }), {
      btnClick: t,
      father: n
    };
  }
});
function Xt(e, t, n, l, a, c) {
  return u(), d("button", {
    onClick: t[0] || (t[0] = (...o) => e.btnClick && e.btnClick(...o)),
    class: oe([{
      "cpt-checkbox-button-check": e.father == e.name
    }, "cpt-checkbox-button c-pointer"])
  }, C(e.title), 3);
}
const jt = /* @__PURE__ */ F(Zt, [["render", Xt], ["__scopeId", "data-v-03833d04"]]), qt = {
  modelValue: {
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  showTips: {
    type: Boolean,
    default: !0
  },
  showStops: {
    type: Boolean,
    default: !1
  },
  reverse: {
    type: Boolean,
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  range: {
    type: Boolean,
    default: !1
  }
}, Jt = T({
  name: "CptSlider",
  props: qt,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t
  }) {
    R(() => {
      M();
    });
    const n = b(), l = b(), a = b(), c = b(), o = b(e.step), s = b(e.modelValue), g = b(e.reverse), f = b(!1), p = b(!1);
    let v = "", $ = "", h = "";
    const E = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    E ? (v = "touchstart", $ = "touchmove", h = "touchend") : (v = "mousedown", $ = "mousemove", h = "mouseup");
    const w = "cpt-slider-sphere-active";
    function y() {
      n.value.addEventListener("mousedown", () => {
        f.value = !0;
      });
      const _ = o.value, A = g.value;
      (() => {
        const z = A ? 100 - s.value : s.value;
        c.value.style[A ? "right" : "left"] = 0, l.value.style.left = z + "%", c.value.style.width = s.value + "%";
      })();
      const Y = n.value.offsetLeft, Z = n.value.offsetWidth / 100;
      n.value.addEventListener(v, (z) => {
        let i = 0;
        l.value.classList.add(w), f.value = !0;
        const m = (V) => {
          V.preventDefault();
          const L = E ? V.touches[0].clientX : V.clientX, D = Math.trunc((L - Y) / Z % _);
          if (i = Math.trunc((L - Y) / Z / _) * _, i < 0)
            return;
          if (_ % 2 === 0) {
            if (i >= 100)
              return;
          } else {
            if (_ === 1 && i > 100)
              return;
            if (_ !== 1 && i + _ > 100)
              return;
          }
          if (D > _ / 2) {
            const U = A ? 100 - i - _ : i + _;
            l.value.style.left = i + _ + "%", c.value.style.width = U + "%", s.value = i + _;
          } else if (D < _ / 2) {
            const U = A ? 100 - i : i;
            l.value.style.left = i + "%", c.value.style.width = U + "%", s.value = i;
          }
          s.value = A ? 100 - s.value : s.value, t("update:modelValue", s.value);
        };
        m(z);
        const k = () => {
          document.removeEventListener($, m), document.removeEventListener(h, k), l.value.classList.remove(w), f.value = !1;
        };
        document.addEventListener($, m), document.addEventListener(h, k);
      });
    }
    function S() {
      const _ = o.value, A = n.value.offsetLeft, j = n.value.offsetWidth / 100;
      let Y = {
        0: l.value,
        1: a.value
      };
      const Z = () => {
        l.value.style.left = s.value[0] + "%", a.value.style.left = s.value[1] + "%";
      }, z = () => {
        s.value[0] >= s.value[1] ? (c.value.style.left = s.value[1] + "%", c.value.style.width = s.value[0] - s.value[1] + "%") : (c.value.style.left = s.value[0] + "%", c.value.style.width = s.value[1] - s.value[0] + "%");
      };
      Z(), z();
      let i = 0;
      const m = (L) => {
        L.preventDefault();
        let D = 0;
        const B = E ? L.touches[0].clientX : L.clientX, P = Math.trunc((B - A) / j % _);
        if (D = Math.trunc((B - A) / j / _) * _, D < 0)
          return;
        if (_ % 2 === 0) {
          if (D >= 100)
            return;
        } else {
          if (_ === 1 && D > 100)
            return;
          if (_ !== 1 && D + _ > 100)
            return;
        }
        P > _ / 2 ? s.value[i] = D + _ : P < _ / 2 && (s.value[i] = D), P > _ / 2 ? Y[i].style.left = D + _ + "%" : P < _ / 2 && (Y[i].style.left = D + "%"), z();
      }, k = () => {
        document.removeEventListener($, m), document.removeEventListener(h, k), l.value.classList.remove(w), a.value.classList.remove(w), f.value = !1, p.value = !1, Y[0].style.left = s.value[0] + "%", Y[1].style.left = s.value[1] + "%";
        const L = JSON.parse(JSON.stringify(s.value)).sort((D, B) => D - B);
        t("update:modelValue", L);
      }, V = (L) => {
        document.addEventListener($, m), document.addEventListener(h, k);
      };
      l.value.addEventListener(v, (L) => {
        i = 0, f.value = !0, l.value.classList.add(w), V();
      }), a.value.addEventListener(v, (L) => {
        i = 1, p.value = !0, a.value.classList.add(w), V();
      });
    }
    function M() {
      if (e.range) {
        if (!Array.isArray(e.modelValue))
          throw new Error("双滑块接收参数必须是数组");
        S();
      } else {
        if (!/^\d+(\.\d+)?$/.test(e.modelValue.toString()))
          throw new Error("接收参数必须是数字");
        y();
      }
    }
    return G(() => e.disabled, (_) => {
      n.value && (_ ? n.value.classList.add("zdisabled") : n.value.classList.remove("zdisabled"));
    }, {
      deep: !0,
      immediate: !0
    }), {
      slider: n,
      sphere: l,
      line: c,
      num: s,
      tipShow: f,
      tipShowC: p,
      step: o,
      sphereC: a
    };
  }
});
const Ht = {
  ref: "slider",
  class: "cpt-slider"
}, Kt = {
  key: 0,
  class: "isdisable"
}, Qt = {
  class: "cpt-slider-content"
}, el = {
  ref: "line",
  class: "cpt-slider-line"
}, tl = {
  key: 0,
  class: "cpt-slider-step"
}, ll = {
  ref: "sphere",
  tabindex: "0",
  class: "cpt-slider-sphere"
}, nl = {
  key: 1,
  ref: "sphereC",
  tabindex: "1",
  class: "cpt-slider-sphere"
};
function sl(e, t, n, l, a, c) {
  return u(), d("div", Ht, [e.disabled ? (u(), d("div", Kt)) : I("", !0), r("div", Qt, [r("div", el, null, 512), e.showStops ? (u(), d("div", tl, [(u(!0), d(O, null, N(100 / e.step - 1, (o) => (u(), d("span", {
    key: o,
    class: "item",
    style: x({
      left: e.step * o + "%"
    })
  }, null, 4))), 128))])) : I("", !0), r("button", ll, [e.showTips && !e.range ? H((u(), d("div", {
    key: 0,
    class: "cpt-slider-sphere-tips"
  }, C(e.num), 513)), [[K, e.tipShow]]) : H((u(), d("div", {
    key: 1,
    class: "cpt-slider-sphere-tips"
  }, C(e.num[0]), 513)), [[K, e.tipShow]])], 512), e.range ? (u(), d("button", nl, [e.showTips && !e.range ? H((u(), d("div", {
    key: 0,
    class: "cpt-slider-sphere-tips"
  }, C(e.num), 513)), [[K, e.tipShow]]) : H((u(), d("div", {
    key: 1,
    class: "cpt-slider-sphere-tips"
  }, C(e.num[1]), 513)), [[K, e.tipShowC]])], 512)) : I("", !0)])], 512);
}
const al = /* @__PURE__ */ F(Jt, [["render", sl], ["__scopeId", "data-v-df48ba84"]]), ol = T({
  name: "CptShowText",
  props: {
    line: {
      type: String,
      default: "3"
    }
  },
  setup(e) {
    return {
      changeCSS: () => `-webkit-line-clamp: ${e.line}`
    };
  }
});
const he = (e) => (se("data-v-492a9ba6"), e = e(), ae(), e), cl = {
  class: "cpt-show-text"
}, il = /* @__PURE__ */ he(() => /* @__PURE__ */ r("input", {
  id: "input",
  type: "checkbox"
}, null, -1)), ul = /* @__PURE__ */ he(() => /* @__PURE__ */ r("label", {
  class: "btn",
  for: "input"
}, null, -1));
function dl(e, t, n, l, a, c) {
  return u(), d("div", cl, [il, r("div", {
    id: "content",
    style: x(e.changeCSS())
  }, [ul, W(e.$slots, "default", {}, void 0, !0)], 4)]);
}
const rl = /* @__PURE__ */ F(ol, [["render", dl], ["__scopeId", "data-v-492a9ba6"]]), fl = T({
  name: "CptInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = ue();
    function n(a) {
      e.type == "number" && (a.target.value = a.target.value.replace(/[^\d]/g, ""));
    }
    function l() {
      return e.type;
    }
    return {
      ininput: n,
      chageType: l,
      isUseSlot: t
    };
  }
});
const bl = {
  class: "cpt-input flex-center"
}, pl = {
  key: 0
}, vl = {
  key: 1,
  class: "label left-text"
}, hl = ["type"], yl = {
  key: 2
}, ml = {
  key: 3,
  class: "label right-text"
};
function gl(e, t, n, l, a, c) {
  return u(), d("div", bl, [e.isUseSlot.left ? (u(), d("div", pl, [W(e.$slots, "left", {}, void 0, !0)])) : e.leftText ? (u(), d("span", vl, C(e.leftText), 1)) : I("", !0), r("input", {
    type: e.chageType(),
    onInput: t[0] || (t[0] = (...o) => e.ininput && e.ininput(...o))
  }, null, 40, hl), e.isUseSlot.right ? (u(), d("div", yl, [W(e.$slots, "right", {}, void 0, !0)])) : e.rightText ? (u(), d("span", ml, C(e.rightText), 1)) : I("", !0)]);
}
const _l = /* @__PURE__ */ F(fl, [["render", gl], ["__scopeId", "data-v-d7cc9e46"]]), $l = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  width: {
    type: String,
    default: "60%"
  },
  title: {
    type: String,
    default: "提示"
  },
  headBg: {
    type: String,
    default: "#F1F4F8"
  },
  headColor: {
    type: String,
    default: "#000"
  },
  headShow: {
    type: Boolean,
    default: !0
  },
  // iconShow:{type:Boolean,default:true},
  footShow: {
    type: Boolean,
    default: !0
  },
  bgClose: {
    type: Boolean,
    default: !0
  },
  leaveText: {
    type: String,
    default: "取消"
  },
  enterText: {
    type: String,
    default: "确定"
  },
  leaveColor: {
    type: String,
    default: "#000"
  },
  enterColor: {
    type: String,
    default: "#000"
  },
  leaveType: {
    type: String,
    default: "primary"
  },
  enterType: {
    type: String,
    default: "warning"
  },
  leaveShow: {
    type: Boolean,
    default: !0
  },
  enterShow: {
    type: Boolean,
    default: !0
  }
}, wl = T({
  name: "CptDialog",
  props: $l,
  emits: ["update:modelValue", "close", "enter"],
  setup(e, {
    emit: t
  }) {
    const n = b(), l = b(), a = b(!1), c = b(e.width), o = b(), s = b();
    function g(y) {
      y == "bg" && !e.bgClose || (h(), E());
    }
    function f() {
      s.value.style.transition = "all 0.3s ease-in-out", s.value.style.top = "20%", s.value.style.left = "50%", s.value.style.transform = "scale(1) translate(-50%, 0)", s.value.removeEventListener("transitionend", f);
    }
    function p() {
      s.value.style.width = 0, s.value.style.left = 0, s.value.style.top = 0, s.value.style.transition = "", s.value.style.transform = "", s.value.removeEventListener("transitionend", p), a.value = !1, t("update:modelValue", !1);
    }
    function v(y, S) {
      a.value = !0, s.value.style.width = c + "px", s.value.style.left = y + "px", s.value.style.top = S + "px", s.value.style.transition = "all 1ms ease-in-out", s.value.style.transform = "scale(0) translate(0px,0px)", s.value.addEventListener("transitionend", f);
    }
    function $() {
      document.body.addEventListener("mousedown", (y) => {
        a.value || (n.value = y.clientX, l.value = y.clientY);
      });
    }
    function h() {
      s.value.style.width = c + "px", s.value.style.left = n.value + "px", s.value.style.top = l.value + "px", s.value.style.transform = "scale(0) translate(0px, 0px)", s.value.addEventListener("transitionend", p);
    }
    function E() {
      t("close", !0);
    }
    function w() {
      t("enter", !0);
    }
    return $(), R(() => {
    }), G(() => e.modelValue, (y) => {
      setTimeout(() => {
        y && v(n.value, l.value);
      });
    }), {
      bg: o,
      content: s,
      closeDialog: g,
      BtnEnter: w,
      prop: e,
      reset: h
    };
  }
});
const Cl = {
  class: "CptAlert"
}, kl = {
  class: "body"
}, Sl = {
  key: 1,
  class: "btn"
};
function Ll(e, t, n, l, a, c) {
  const o = ee("Cpt-button");
  return u(), te(ge, {
    to: "body"
  }, [H(r("div", Cl, [r("div", {
    ref: "bg",
    class: "bg",
    onClick: t[0] || (t[0] = (s) => e.closeDialog("bg"))
  }, null, 512), r("div", {
    ref: "content",
    class: "content",
    style: x({
      width: e.width
    })
  }, [e.headShow ? (u(), d("div", {
    key: 0,
    class: "head",
    style: x({
      background: e.headBg,
      color: e.headColor
    }),
    ref: "head"
  }, C(e.title) + " ", 5)) : I("", !0), r("div", kl, [W(e.$slots, "default", {}, void 0, !0)]), e.footShow ? (u(), d("div", Sl, [e.leaveShow ? (u(), te(o, {
    key: 0,
    type: e.leaveType,
    style: x({
      color: e.leaveColor
    }),
    onClick: e.closeDialog
  }, {
    default: X(() => [J(C(e.leaveText), 1)]),
    _: 1
  }, 8, ["type", "style", "onClick"])) : I("", !0), e.enterShow ? (u(), te(o, {
    key: 1,
    type: e.enterType,
    style: x({
      color: e.enterColor
    }),
    onClick: e.BtnEnter
  }, {
    default: X(() => [J(C(e.enterText), 1)]),
    _: 1
  }, 8, ["type", "style", "onClick"])) : I("", !0)])) : I("", !0)], 4)], 512), [[K, e.prop.modelValue]])]);
}
const Dl = /* @__PURE__ */ F(wl, [["render", Ll], ["__scopeId", "data-v-0660e028"]]), Bl = (e) => (se("data-v-7c787b60"), e = e(), ae(), e), Il = {
  key: 0,
  class: "zzcpt-loading-mask"
}, El = {
  class: "content"
}, Tl = /* @__PURE__ */ Bl(() => /* @__PURE__ */ r("svg", {
  class: "circular",
  viewBox: "0 0 50 50"
}, [/* @__PURE__ */ r("circle", {
  class: "path",
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none"
})], -1)), Fl = /* @__PURE__ */ T({
  __name: "loading",
  setup(e, {
    expose: t
  }) {
    const n = b(!0), l = () => {
      n.value = !0;
    }, a = () => {
      n.value = !1;
    }, c = b(""), o = (f) => {
      c.value = f;
    }, s = b("#409eff");
    return t({
      show: l,
      hide: a,
      text: o,
      color: (f) => {
        s.value = f;
      }
    }), (f, p) => n.value ? (u(), d("div", Il, [r("div", El, [Tl, c.value ? (u(), d("span", {
      key: 0,
      class: "text",
      style: x({
        color: s.value
      })
    }, C(c.value), 5)) : I("", !0)])])) : I("", !0);
  }
});
const Vl = /* @__PURE__ */ F(Fl, [["__scopeId", "data-v-7c787b60"]]);
function fe(e, t) {
  return e.classList.contains(t);
}
const Ml = {
  install(e) {
    const t = Q(Vl);
    e.directive("loading", {
      mounted(n, l) {
        n && l.value && (n.classList.add("zzcpt-loading"), re(t, n));
      },
      updated(n, l) {
        var a, c, o, s;
        l.value ? fe(n, "zzcpt-loading") || (n.classList.add("zzcpt-loading"), re(t, n), (c = (a = t.component) == null ? void 0 : a.exposed) == null || c.show()) : fe(n, "zzcpt-loading") && (n.classList.remove("zzcpt-loading"), (s = (o = t.component) == null ? void 0 : o.exposed) == null || s.hide());
      },
      unmounted(n) {
        var l, a;
        n.classList.remove("zzcpt-loading"), (a = (l = t.component) == null ? void 0 : l.exposed) == null || a.hide();
      }
    }), e.directive("loading-text", {
      mounted(n, l) {
        var a, c;
        n && ((c = (a = t.component) == null ? void 0 : a.exposed) == null || c.text(l.value));
      }
    }), e.directive("loading-color", {
      mounted(n, l) {
        var a, c;
        n && ((c = (a = t.component) == null ? void 0 : a.exposed) == null || c.color(l.value));
      }
    });
  }
}, Al = [Se, Me, nt, yt, _t, Dt, Et, Pt, Rt, jt, al, rl, _l, Dl, Ml], zl = Al, xl = (e) => {
  zl.forEach((t) => {
    t.name ? e.component(t.name, t) : e.use(t);
  });
}, Wl = {
  install: xl
};
export {
  Se as CptButton,
  nt as CptCalendar,
  Pt as CptCheckbox,
  jt as CptCheckboxButton,
  Rt as CptCheckboxGroup,
  Dl as CptDialog,
  Me as CptDropdown,
  _l as CptInput,
  yt as CptSelect,
  _t as CptSelectOption,
  rl as CptShowText,
  al as CptSlider,
  Dt as CptSwitch,
  Et as CptUpload,
  Wl as default
};
