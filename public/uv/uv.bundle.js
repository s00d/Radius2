/*! For license information please see uv.bundle.js.LICENSE.txt */
(() => {
  var e = {
    360: (e, t) => {
      "use strict";
      var n, a, i, s, o, r, c, l, p, u, d, m = {
        AssignmentExpression: "AssignmentExpression",
        AssignmentPattern: "AssignmentPattern",
        ArrayExpression: "ArrayExpression",
        ArrayPattern: "ArrayPattern",
        ArrowFunctionExpression: "ArrowFunctionExpression",
        AwaitExpression: "AwaitExpression",
        BlockStatement: "BlockStatement",
        BinaryExpression: "BinaryExpression",
        BreakStatement: "BreakStatement",
        CallExpression: "CallExpression",
        CatchClause: "CatchClause",
        ClassBody: "ClassBody",
        ClassDeclaration: "ClassDeclaration",
        ClassExpression: "ClassExpression",
        ComprehensionBlock: "ComprehensionBlock",
        ComprehensionExpression: "ComprehensionExpression",
        ConditionalExpression: "ConditionalExpression",
        ContinueStatement: "ContinueStatement",
        DirectiveStatement: "DirectiveStatement",
        DoWhileStatement: "DoWhileStatement",
        DebuggerStatement: "DebuggerStatement",
        EmptyStatement: "EmptyStatement",
        ExportAllDeclaration: "ExportAllDeclaration",
        ExportBatchSpecifier: "ExportBatchSpecifier",
        ExportDeclaration: "ExportDeclaration",
        ExportNamedDeclaration: "ExportNamedDeclaration",
        ExportSpecifier: "ExportSpecifier",
        ExpressionStatement: "ExpressionStatement",
        ForStatement: "ForStatement",
        ForInStatement: "ForInStatement",
        ForOfStatement: "ForOfStatement",
        FunctionDeclaration: "FunctionDeclaration",
        FunctionExpression: "FunctionExpression",
        GeneratorExpression: "GeneratorExpression",
        Identifier: "Identifier",
        IfStatement: "IfStatement",
        ImportExpression: "ImportExpression",
        ImportSpecifier: "ImportSpecifier",
        ImportDeclaration: "ImportDeclaration",
        ChainExpression: "ChainExpression",
        Literal: "Literal",
        LabeledStatement: "LabeledStatement",
        LogicalExpression: "LogicalExpression",
        MemberExpression: "MemberExpression",
        MetaProperty: "MetaProperty",
        MethodDefinition: "MethodDefinition",
        ModuleDeclaration: "ModuleDeclaration",
        NewExpression: "NewExpression",
        ObjectExpression: "ObjectExpression",
        ObjectPattern: "ObjectPattern",
        Program: "Program",
        Property: "Property",
        RestElement: "RestElement",
        ReturnStatement: "ReturnStatement",
        SequenceExpression: "SequenceExpression",
        SpreadElement: "SpreadElement",
        Super: "Super",
        SwitchStatement: "SwitchStatement",
        SwitchCase: "SwitchCase",
        TaggedTemplateExpression: "TaggedTemplateExpression",
        TemplateElement: "TemplateElement",
        TemplateLiteral: "TemplateLiteral",
        ThisExpression: "ThisExpression",
        ThrowStatement: "ThrowStatement",
        TryStatement: "TryStatement",
        UnaryExpression: "UnaryExpression",
        UpdateExpression: "UpdateExpression",
        VariableDeclaration: "VariableDeclaration",
        VariableDeclarator: "VariableDeclarator",
        WhileStatement: "WhileStatement",
        WithStatement: "WithStatement",
        YieldExpression: "YieldExpression"
      };
      t.G = m;
      var h = 0, f = 1, g = 1, b = 2, x = 2, E = 3, v = 8, k = 9, T = 10, A = 11, y = 12, _ = 13, C = 14, S = 14,
        w = 15, I = 16, N = 17, D = 17, L = 18, R = 19, P = {
          "||": E,
          "&&": 4,
          "|": 5,
          "^": 6,
          "&": 7,
          "==": v,
          "!=": v,
          "===": v,
          "!==": v,
          is: v,
          isnt: v,
          "<": k,
          ">": k,
          "<=": k,
          ">=": k,
          in: k,
          instanceof: k,
          "<<": T,
          ">>": T,
          ">>>": T,
          "+": A,
          "-": A,
          "*": y,
          "%": y,
          "/": y,
          "??": 3,
          "**": 14
        };
      var O = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
        M = new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]");

      function B(e) {
        if (e < 128) return e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57 || 36 === e || 95 === e || 92 === e;
        var t = String.fromCharCode(e);
        return M.test(t)
      }

      function U(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e
      }

      function F(e) {
        return 32 === e || 9 === e || U(e) || 11 === e || 12 === e || 160 === e || e >= 5760 && O.indexOf(e) >= 0
      }

      function H(e, t) {
        var n = "";
        for (t |= 0; t > 0; t >>>= 1, e += e) 1 & t && (n += e);
        return n
      }

      function j(e, t) {
        var n, a;

        function i(e) {
          return "object" == typeof e && e instanceof Object && !(e instanceof RegExp)
        }

        for (n in t) t.hasOwnProperty(n) && (i(a = t[n]) ? i(e[n]) ? j(e[n], a) : e[n] = j({}, a) : e[n] = a);
        return e
      }

      function G(e, t) {
        return 8232 == (-2 & e) ? (t ? "u" : "\\u") + (8232 === e ? "2028" : "2029") : 10 === e || 13 === e ? (t ? "" : "\\") + (10 === e ? "n" : "r") : String.fromCharCode(e)
      }

      function q(e, t) {
        var n, i, s = "\\";
        switch (e) {
          case 8:
            s += "b";
            break;
          case 12:
            s += "f";
            break;
          case 9:
            s += "t";
            break;
          default:
            n = e.toString(16).toUpperCase(), a || e > 255 ? s += "u" + "0000".slice(n.length) + n : 0 !== e || (i = t) >= 48 && i <= 57 ? s += 11 === e ? "x0B" : "x" + "00".slice(n.length) + n : s += "0"
        }
        return s
      }

      function z(e) {
        var t = "\\";
        switch (e) {
          case 92:
            t += "\\";
            break;
          case 10:
            t += "n";
            break;
          case 13:
            t += "r";
            break;
          case 8232:
            t += "u2028";
            break;
          case 8233:
            t += "u2029"
        }
        return t
      }

      function Y(e, t) {
        if (!e.length) return t;
        if (!t.length) return e;
        var n = e.charCodeAt(e.length - 1), a = t.charCodeAt(0);
        return B(n) && B(a) || n === a && (43 === n || 45 === n) || 47 === n && 105 === a ? e + ue.space + t : F(n) || F(a) ? e + t : e + ue.optSpace + t
      }

      function V() {
        var e = ue.indent;
        return ue.indent += ue.indentUnit, e
      }

      function W(e) {
        return e.type === m.BlockStatement ? ue.optSpace : e.type === m.EmptyStatement ? "" : ue.newline + ue.indent + ue.indentUnit
      }

      function Q(e) {
        return e.type === m.BlockStatement ? ue.optSpace : ue.newline + ue.indent
      }

      function X(e) {
        var t = e.body;
        if (function (e) {
          var t = e.params, n = t.length, a = n - 1;
          if (e.type === m.ArrowFunctionExpression && 1 === n && t[0].type === m.Identifier) ue.js += t[0].name; else {
            ue.js += "(";
            for (var i = 0; i < n; ++i) {
              var s = t[i];
              t[i].type === m.Identifier ? ue.js += s.name : de[s.type](s, K.e4), i !== a && (ue.js += "," + ue.optSpace)
            }
            ue.js += ")"
          }
        }(e), e.type === m.ArrowFunctionExpression && (ue.js += ue.optSpace + "=>"), e.expression) {
          ue.js += ue.optSpace;
          var n = ce(t, K.e4);
          "{" === n.charAt(0) && (n = "(" + n + ")"), ue.js += n
        } else ue.js += W(t), me[t.type](t, K.s8)
      }

      (n = Array.isArray) || (n = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      });
      var K = {
        e1: function (e) {
          return {precedence: g, allowIn: e, allowCall: !0, allowUnparenthesizedNew: !0}
        },
        e2: function (e) {
          return {precedence: E, allowIn: e, allowCall: !0, allowUnparenthesizedNew: !0}
        },
        e3: {precedence: w, allowIn: !0, allowCall: !0, allowUnparenthesizedNew: !1},
        e4: {precedence: g, allowIn: !0, allowCall: !0, allowUnparenthesizedNew: !0},
        e5: {precedence: h, allowIn: !0, allowCall: !0, allowUnparenthesizedNew: !0},
        e6: function (e) {
          return {precedence: I, allowIn: !0, allowCall: !1, allowUnparenthesizedNew: e}
        },
        e7: {precedence: _, allowIn: !0, allowCall: !0, allowUnparenthesizedNew: !0},
        e8: {precedence: C, allowIn: !0, allowCall: !0, allowUnparenthesizedNew: !0},
        e9: {precedence: void 0, allowIn: !0, allowCall: !0, allowUnparenthesizedNew: !0},
        e10: {precedence: w, allowIn: !0, allowCall: !0, allowUnparenthesizedNew: !0},
        e11: function (e) {
          return {precedence: w, allowIn: !0, allowCall: e, allowUnparenthesizedNew: !1}
        },
        e12: {precedence: R, allowIn: !1, allowCall: !1, allowUnparenthesizedNew: !0},
        e13: {precedence: R, allowIn: !0, allowCall: !0, allowUnparenthesizedNew: !0},
        e14: {precedence: h, allowIn: !1, allowCall: !0, allowUnparenthesizedNew: !0},
        e15: function (e) {
          return {precedence: h, allowIn: !0, allowCall: e, allowUnparenthesizedNew: !0}
        },
        e16: function (e, t) {
          return {precedence: e, allowIn: t, allowCall: !0, allowUnparenthesizedNew: !0}
        },
        e17: function (e) {
          return {precedence: w, allowIn: e, allowCall: !0, allowUnparenthesizedNew: !0}
        },
        e18: function (e) {
          return {precedence: g, allowIn: e, allowCall: !0, allowUnparenthesizedNew: !0}
        },
        e19: {precedence: h, allowIn: !0, allowCall: !0, semicolonOptional: !1},
        e20: {precedence: S, allowCall: !0},
        s1: function (e, t) {
          return {allowIn: !0, functionBody: !1, directiveContext: e, semicolonOptional: t}
        },
        s2: {allowIn: !0, functionBody: !1, directiveContext: !1, semicolonOptional: !0},
        s3: function (e) {
          return {allowIn: e, functionBody: !1, directiveContext: !1, semicolonOptional: !1}
        },
        s4: function (e) {
          return {allowIn: !0, functionBody: !1, directiveContext: !1, semicolonOptional: e}
        },
        s5: function (e) {
          return {allowIn: !0, functionBody: !1, directiveContext: !0, semicolonOptional: e}
        },
        s6: {allowIn: !1, functionBody: !1, directiveContext: !1, semicolonOptional: !1},
        s7: {allowIn: !0, functionBody: !1, directiveContext: !1, semicolonOptional: !1},
        s8: {allowIn: !0, functionBody: !0, directiveContext: !1, semicolonOptional: !1}
      }, $ = /[.eExX]|^0[0-9]+/, J = /[0-9]$/;

      function Z(e) {
        return !!e && e.type === m.LogicalExpression
      }

      function ee(e, t, n) {
        var a = e.operator, i = P[e.operator], s = i < t.precedence, o = t.allowIn || s, r = K.e16(i, o),
          c = ce(e.left, r, e);
        s |= "in" === a && !o;
        var l = function (e, t) {
          switch (e.operator) {
            case"||":
              return !!Z(t) && ("??" === t.operator || "&&" === t.operator);
            case"&&":
              return Z(t);
            case"??":
              return Z(t) && "??" !== t.operator
          }
        }(e, n);
        (s || l) && (ue.js += "("), c = 47 === c.charCodeAt(c.length - 1) && B(a.charCodeAt(0)) ? c + ue.space + a : Y(c, a), r.precedence++;
        var p = ce(e.right, r);
        "/" === a && "/" === p.charAt(0) || "<" === a.slice(-1) && "!--" === p.slice(0, 3) ? c += ue.space + p : c = Y(c, p), ue.js += c, (s || l) && (ue.js += ")")
      }

      function te(e) {
        var t = e.elements, n = t.length;
        if (n) {
          var a = n - 1, i = n > 1, s = V(), o = ue.newline + ue.indent;
          ue.js += "[";
          for (var r = 0; r < n; r++) {
            var c = t[r];
            i && (ue.js += o), c && de[c.type](c, K.e4), r === a && c || (ue.js += ",")
          }
          ue.indent = s, i && (ue.js += ue.newline + ue.indent), ue.js += "]"
        } else ue.js += "[]"
      }

      function ne(e) {
        var t = e.blocks, n = e.filter, a = e.type === m.GeneratorExpression, i = a ? "(" : "[", s = ce(e.body, K.e4);
        if (t) {
          for (var o = V(), r = t.length, c = 0; c < r; ++c) {
            var l = ce(t[c], K.e5);
            i = c > 0 ? Y(i, l) : i + l
          }
          ue.indent = o
        }
        if (n) {
          var p = ce(n, K.e5);
          i = Y(i, "if" + ue.optSpace), i = Y(i, "(" + p + ")")
        }
        i = Y(i, s), i += a ? ")" : "]", ue.js += i
      }

      var ae = {
        SequenceExpression: function (e, t) {
          var n = e.expressions, a = n.length, i = a - 1, s = h < t.precedence, o = K.e1(t.allowIn || s);
          s && (ue.js += "(");
          for (var r = 0; r < a; r++) {
            var c = n[r];
            de[c.type](c, o), r !== i && (ue.js += "," + ue.optSpace)
          }
          s && (ue.js += ")")
        }, AssignmentExpression: function (e, t) {
          var n = e.left, a = e.right, i = g < t.precedence, s = t.allowIn || i;
          i && (ue.js += "("), de[n.type](n, K.e17(s)), ue.js += ue.optSpace + e.operator + ue.optSpace, de[a.type](a, K.e18(s)), i && (ue.js += ")")
        }, AssignmentPattern: function (e) {
          var t = {left: e.left, right: e.right, operator: "="};
          de.AssignmentExpression(t, K.e4)
        }, ArrowFunctionExpression: function (e, t) {
          var n = x < t.precedence;
          n && (ue.js += "("), e.async && (ue.js += "async "), X(e), n && (ue.js += ")")
        }, AwaitExpression: function (e, t) {
          var n = S < t.precedence;
          n && (ue.js += "("), ue.js += e.all ? "await* " : "await ", de[e.argument.type](e.argument, K.e20), n && (ue.js += ")")
        }, ConditionalExpression: function (e, t) {
          var n = e.test, a = e.consequent, i = e.alternate, s = b < t.precedence, o = t.allowIn || s, r = K.e2(o),
            c = K.e1(o);
          s && (ue.js += "("), de[n.type](n, r), ue.js += ue.optSpace + "?" + ue.optSpace, de[a.type](a, c), ue.js += ue.optSpace + ":" + ue.optSpace, de[i.type](i, c), s && (ue.js += ")")
        }, LogicalExpression: ee, BinaryExpression: ee, CallExpression: function (e, t) {
          var n = e.callee, a = e.arguments, i = a.length, s = i - 1, o = !t.allowCall || w < t.precedence;
          o && (ue.js += "("), de[n.type](n, K.e3), e.optional && (ue.js += "?."), ue.js += "(";
          for (var r = 0; r < i; ++r) {
            var c = a[r];
            de[c.type](c, K.e4), r !== s && (ue.js += "," + ue.optSpace)
          }
          ue.js += ")", o && (ue.js += ")")
        }, NewExpression: function (e, t) {
          var n = e.arguments, a = I < t.precedence, i = n.length, s = i - 1,
            o = !t.allowUnparenthesizedNew || c || i > 0, r = ce(e.callee, K.e6(!o));
          if (a && (ue.js += "("), ue.js += Y("new", r), o) {
            ue.js += "(";
            for (var l = 0; l < i; ++l) {
              var p = n[l];
              de[p.type](p, K.e4), l !== s && (ue.js += "," + ue.optSpace)
            }
            ue.js += ")"
          }
          a && (ue.js += ")")
        }, MemberExpression: function (e, t) {
          var n = e.object, a = e.property, i = L < t.precedence,
            s = !e.computed && n.type === m.Literal && "number" == typeof n.value;
          if (i && (ue.js += "("), s) {
            var o = ce(n, K.e11(t.allowCall)), r = J.test(o) && !$.test(o);
            ue.js += r ? o + "." : o
          } else de[n.type](n, K.e11(t.allowCall));
          e.computed ? (e.optional && (ue.js += "?."), ue.js += "[", de[a.type](a, K.e15(t.allowCall)), ue.js += "]") : ue.js += (e.optional ? "?." : ".") + a.name, i && (ue.js += ")")
        }, UnaryExpression: function (e, t) {
          var n = _ < t.precedence, a = e.operator, i = ce(e.argument, K.e7);
          if (n && (ue.js += "("), "" === ue.optSpace || a.length > 2) ue.js += Y(a, i); else {
            ue.js += a;
            var s = a.charCodeAt(a.length - 1), o = i.charCodeAt(0);
            (s === o && (43 === s || 45 === s) || B(s) && B(o)) && (ue.js += ue.space), ue.js += i
          }
          n && (ue.js += ")")
        }, YieldExpression: function (e, t) {
          var n = e.argument, a = e.delegate ? "yield*" : "yield", i = f < t.precedence;
          (i && (ue.js += "("), n) && (a = Y(a, ce(n, K.e4)));
          ue.js += a, i && (ue.js += ")")
        }, UpdateExpression: function (e, t) {
          var n = e.argument, a = e.operator, i = e.prefix, s = (i ? _ : C) < t.precedence;
          s && (ue.js += "("), i ? (ue.js += a, de[n.type](n, K.e8)) : (de[n.type](n, K.e8), ue.js += a), s && (ue.js += ")")
        }, FunctionExpression: function (e) {
          var t = !!e.generator;
          e.async && (ue.js += "async "), ue.js += t ? "function*" : "function", e.id ? (ue.js += t ? ue.optSpace : ue.space, ue.js += e.id.name) : ue.js += ue.optSpace, X(e)
        }, ExportBatchSpecifier: function () {
          ue.js += "*"
        }, ArrayPattern: te, ArrayExpression: te, ClassExpression: function (e) {
          var t = e.id, n = e.superClass, a = e.body, i = "class";
          t && (i = Y(i, ce(t, K.e9)));
          if (n) {
            var s = ce(n, K.e4);
            s = Y("extends", s), i = Y(i, s)
          }
          ue.js += i + ue.optSpace, me[a.type](a, K.s2)
        }, MetaProperty: function (e, t) {
          var n = e.meta, a = e.property, i = L < t.precedence;
          i && (ue.js += "("), ue.js += ("string" == typeof n ? n : n.name) + "." + ("string" == typeof a ? a : a.name), i && (ue.js += ")")
        }, MethodDefinition: function (e) {
          var t = e.static ? "static" + ue.optSpace : "", n = ce(e.key, K.e5);
          e.computed && (n = "[" + n + "]"), "get" === e.kind || "set" === e.kind ? (n = Y(e.kind, n), ue.js += Y(t, n)) : e.value.generator ? ue.js += t + "*" + n : e.value.async ? ue.js += t + "async " + n : ue.js += Y(t, n), X(e.value)
        }, Property: function (e) {
          var t = e.value, n = e.kind, a = ce(e.key, K.e4);
          e.computed && (a = "[" + a + "]"), "get" === n || "set" === n ? (ue.js += n + ue.space + a, X(t)) : e.shorthand ? ue.js += a : e.method ? (t.generator ? a = "*" + a : t.async && (a = "async " + a), ue.js += a, X(t)) : (ue.js += a + ":" + ue.optSpace, de[t.type](t, K.e4))
        }, ObjectExpression: function (e) {
          var t = e.properties, n = t.length;
          if (n) {
            var a = n - 1, i = V();
            ue.js += "{";
            for (var s = 0; s < n; s++) {
              var o = t[s], r = o.type || m.Property;
              ue.js += ue.newline + ue.indent, de[r](o, K.e5), s !== a && (ue.js += ",")
            }
            ue.indent = i, ue.js += ue.newline + ue.indent + "}"
          } else ue.js += "{}"
        }, ObjectPattern: function (e) {
          var t = e.properties, n = t.length;
          if (n) {
            var a = n - 1, i = !1;
            if (1 === n) i = t[0].value.type !== m.Identifier; else for (var s = 0; s < n; s++) if (!t[s].shorthand) {
              i = !0;
              break
            }
            ue.js += i ? "{" + ue.newline : "{";
            var o = V(), r = "," + (i ? ue.newline : ue.optSpace);
            for (s = 0; s < n; s++) {
              var c = t[s];
              i && (ue.js += ue.indent), de[c.type](c, K.e5), s !== a && (ue.js += r)
            }
            ue.indent = o, ue.js += i ? ue.newline + ue.indent + "}" : "}"
          } else ue.js += "{}"
        }, ThisExpression: function () {
          ue.js += "this"
        }, Identifier: function (e, t, n) {
          ue.js += e.name
        }, ImportExpression: function (e, t) {
          var n = w < t.precedence, a = e.source;
          n && (ue.js += "("), ue.js += "import(", de[a.type](a, K.e4), ue.js += ")", n && (ue.js += ")")
        }, ImportSpecifier: function (e) {
          ue.js += e.imported.name, e.local && (ue.js += ue.space + "as" + ue.space + e.local.name)
        }, ExportSpecifier: function (e) {
          ue.js += e.local.name, e.exported && (ue.js += ue.space + "as" + ue.space + e.exported.name)
        }, ChainExpression: function (e, t) {
          var n = D < t.precedence, a = e.expression, i = {
            precedence: D,
            allowIn: (t = t || {}).allowIn,
            allowCall: t.allowCall,
            allowUnparenthesizedNew: t.allowUnparenthesizedNew
          };
          n && (i.allowCall = !0, ue.js += "("), de[a.type](a, i), n && (ue.js += ")")
        }, Literal: function (e) {
          if (d.raw && void 0 !== e.raw) ue.js += e.raw; else if (null === e.value) ue.js += "null"; else {
            var t = typeof e.value;
            ue.js += "string" === t ? function (e) {
              var t, n, i, s, c, l = "", p = 0, u = 0;
              for (t = 0, n = e.length; t < n; ++t) {
                if (39 === (i = e.charCodeAt(t))) ++p; else if (34 === i) ++u; else if (47 === i && a) l += "\\"; else {
                  if (U(i) || 92 === i) {
                    l += z(i);
                    continue
                  }
                  if (a && i < 32 || !(a || r || i >= 32 && i <= 126)) {
                    l += q(i, e.charCodeAt(t + 1));
                    continue
                  }
                }
                l += String.fromCharCode(i)
              }
              if (c = (s = !("double" === o || "auto" === o && u < p)) ? "'" : '"', !(s ? p : u)) return c + l + c;
              for (e = l, l = c, t = 0, n = e.length; t < n; ++t) (39 === (i = e.charCodeAt(t)) && s || 34 === i && !s) && (l += "\\"), l += String.fromCharCode(i);
              return l + c
            }(e.value) : "number" === t ? function (e) {
              var t, n, o, r, c;
              if (e === 1 / 0) return a ? "null" : i ? "1e400" : "1e+400";
              if (t = "" + e, !i || t.length < 3) return t;
              for (n = t.indexOf("."), a || 48 !== t.charCodeAt(0) || 1 !== n || (n = 0, t = t.slice(1)), o = t, t = t.replace("e+", "e"), r = 0, (c = o.indexOf("e")) > 0 && (r = +o.slice(c + 1), o = o.slice(0, c)), n >= 0 && (r -= o.length - n - 1, o = +(o.slice(0, n) + o.slice(n + 1)) + ""), c = 0; 48 === o.charCodeAt(o.length + c - 1);) --c;
              return 0 !== c && (r -= c, o = o.slice(0, c)), 0 !== r && (o += "e" + r), (o.length < t.length || s && e > 1e12 && Math.floor(e) === e && (o = "0x" + e.toString(16)).length < t.length) && +o === e && (t = o), t
            }(e.value) : "boolean" === t ? e.value ? "true" : "false" : function (e) {
              var t, n, a, i, s, o, r, c;
              if (n = e.toString(), e.source) {
                if (!(t = n.match(/\/([^/]*)$/))) return n;
                for (a = t[1], n = "", r = !1, c = !1, i = 0, s = e.source.length; i < s; ++i) o = e.source.charCodeAt(i), c ? (n += G(o, c), c = !1) : (r ? 93 === o && (r = !1) : 47 === o ? n += "\\" : 91 === o && (r = !0), n += G(o, c), c = 92 === o);
                return "/" + n + "/" + a
              }
              return n
            }(e.value)
          }
        }, GeneratorExpression: ne, ComprehensionExpression: ne, ComprehensionBlock: function (e) {
          var t = e.left, n = void 0, a = ce(e.right, K.e5);
          n = Y(n = t.type === m.VariableDeclaration ? t.kind + ue.space + le(t.declarations[0], K.s6) : ce(t, K.e10), e.of ? "of" : "in"), ue.js += "for" + ue.optSpace + "(" + Y(n, a) + ")"
        }, RestElement: function (e) {
          ue.js += "..." + e.argument.name
        }, SpreadElement: function (e) {
          var t = e.argument;
          ue.js += "...", de[t.type](t, K.e4)
        }, TaggedTemplateExpression: function (e, t) {
          var n = e.tag, a = e.quasi, i = N < t.precedence;
          i && (ue.js += "("), de[n.type](n, K.e11(t.allowCall)), de[a.type](a, K.e12), i && (ue.js += ")")
        }, TemplateElement: function (e) {
          ue.js += e.value.raw
        }, TemplateLiteral: function (e) {
          var t = e.quasis, n = e.expressions, a = t.length, i = a - 1;
          ue.js += "`";
          for (var s = 0; s < a; ++s) {
            var o = t[s];
            if (de[o.type](o, K.e13), s !== i) {
              var r = n[s];
              ue.js += "${" + ue.optSpace, de[r.type](r, K.e5), ue.js += ue.optSpace + "}"
            }
          }
          ue.js += "`"
        }, Super: function () {
          ue.js += "super"
        }
      }, ie = /^{|^class(?:\s|{)|^(async )?function(?:\s|\*|\()/;

      function se(e, t, n) {
        for (var a = n.length, i = a - 1, s = 0; s < a; ++s) {
          e = Y(e, le(n[s], K.s7)), (t || s !== i) && (e += Q(n[s].body))
        }
        return e
      }

      function oe(e, t, n) {
        var a = t.body, i = t.left, s = !l && n.semicolonOptional, o = V(),
          r = "for" + (t.await ? " await" : "") + ue.optSpace + "(";
        if (i.type === m.VariableDeclaration) {
          var c = V();
          r += i.kind + ue.space + le(i.declarations[0], K.s6), ue.indent = c
        } else r += ce(i, K.e10);
        r = Y(r, e), r = Y(r, ce(t.right, K.e4)) + ")", ue.indent = o, ue.js += r + W(a), me[a.type](a, K.s4(s))
      }

      var re = {
        BlockStatement: function (e, t) {
          var n = e.body, a = n.length, i = a - 1, s = V();
          ue.js += "{" + ue.newline;
          for (var o = 0; o < a; o++) {
            var r = n[o];
            ue.js += ue.indent, me[r.type](r, K.s1(t.functionBody, o === i)), ue.js += ue.newline
          }
          ue.indent = s, ue.js += ue.indent + "}"
        }, BreakStatement: function (e, t) {
          e.label ? ue.js += "break " + e.label.name : ue.js += "break", !l && t.semicolonOptional || (ue.js += ";")
        }, ContinueStatement: function (e, t) {
          e.label ? ue.js += "continue " + e.label.name : ue.js += "continue", !l && t.semicolonOptional || (ue.js += ";")
        }, ClassBody: function (e) {
          var t = e.body, n = t.length, a = n - 1, i = V();
          ue.js += "{" + ue.newline;
          for (var s = 0; s < n; s++) {
            var o = t[s], r = o.type || m.Property;
            ue.js += ue.indent, de[r](o, K.e5), s !== a && (ue.js += ue.newline)
          }
          ue.indent = i, ue.js += ue.newline + ue.indent + "}"
        }, ClassDeclaration: function (e) {
          var t = e.body, n = e.superClass, a = "class " + e.id.name;
          if (n) {
            var i = ce(n, K.e4);
            a += ue.space + Y("extends", i)
          }
          ue.js += a + ue.optSpace, me[t.type](t, K.s2)
        }, DirectiveStatement: function (e, t) {
          d.raw && e.raw ? ue.js += e.raw : ue.js += function (e) {
            var t, n, a, i;
            for (i = "double" === o ? '"' : "'", t = 0, n = e.length; t < n; ++t) {
              if (39 === (a = e.charCodeAt(t))) {
                i = '"';
                break
              }
              if (34 === a) {
                i = "'";
                break
              }
              92 === a && ++t
            }
            return i + e + i
          }(e.directive), !l && t.semicolonOptional || (ue.js += ";")
        }, DoWhileStatement: function (e, t) {
          var n = e.body, a = e.test, i = Y("do", W(n) + le(n, K.s7) + Q(n));
          ue.js += Y(i, "while" + ue.optSpace + "("), de[a.type](a, K.e5), ue.js += ")", !l && t.semicolonOptional || (ue.js += ";")
        }, CatchClause: function (e) {
          var t = e.param, n = e.guard, a = e.body, i = V();
          ue.js += "catch" + ue.optSpace, t && (ue.js += "(", de[t.type](t, K.e5)), n && (ue.js += " if ", de[n.type](n, K.e5)), ue.indent = i, t && (ue.js += ")"), ue.js += W(a), me[a.type](a, K.s7)
        }, DebuggerStatement: function (e, t) {
          ue.js += "debugger", !l && t.semicolonOptional || (ue.js += ";")
        }, EmptyStatement: function () {
          ue.js += ";"
        }, ExportAllDeclaration: function (e, t) {
          re.ExportDeclaration(e, t, !0)
        }, ExportDeclaration: function (e, t, n) {
          var a = e.specifiers, i = e.declaration, s = l || !t.semicolonOptional;
          if (e.default) {
            var o = ce(i, K.e4);
            ue.js += Y("export default", o), s && (ue.js += ";")
          } else if (a || n) {
            var r = "export";
            if (n) r += ue.optSpace + "*"; else if (0 === a.length) r += ue.optSpace + "{" + ue.optSpace + "}"; else if (a[0].type === m.ExportBatchSpecifier) {
              r = Y(r, ce(a[0], K.e5))
            } else {
              var c = V(), p = a.length, u = p - 1;
              r += ue.optSpace + "{";
              for (var d = 0; d < p; ++d) r += ue.newline + ue.indent, r += ce(a[d], K.e5), d !== u && (r += ",");
              ue.indent = c, r += ue.newline + ue.indent + "}"
            }
            e.source ? (ue.js += Y(r, "from" + ue.optSpace), de.Literal(e.source)) : ue.js += r, s && (ue.js += ";")
          } else if (i) {
            o = le(i, K.s4(!s));
            ue.js += Y("export", o)
          }
        }, ExportNamedDeclaration: function (e, t) {
          re.ExportDeclaration(e, t)
        }, ExpressionStatement: function (e, t) {
          var n = ce(e.expression, K.e5),
            a = ie.test(n) || u && t.directiveContext && e.expression.type === m.Literal && "string" == typeof e.expression.value;
          ue.js += a ? "(" + n + ")" : n, !l && t.semicolonOptional || (ue.js += ";")
        }, ImportDeclaration: function (e, t) {
          var n = e.specifiers, a = "import", i = n.length;
          if (i) {
            var s = !!n[0].default, o = s ? 1 : 0, r = i - 1;
            if (s && (a = Y(a, n[0].id.name)), o < i) {
              if (s && (a += ","), a += ue.optSpace + "{", o === r) a += ue.optSpace + ce(n[o], K.e5) + ue.optSpace; else {
                for (var c = V(), p = o; p < i; p++) a += ue.newline + ue.indent + ce(n[p], K.e5), p !== r && (a += ",");
                ue.indent = c, a += ue.newline + ue.indent
              }
              a += "}" + ue.optSpace
            }
            a = Y(a, "from")
          }
          ue.js += a + ue.optSpace, de.Literal(e.source), !l && t.semicolonOptional || (ue.js += ";")
        }, VariableDeclarator: function (e, t) {
          var n = e.id, a = e.init, i = K.e1(t.allowIn);
          a ? (de[n.type](n, i), ue.js += ue.optSpace + "=" + ue.optSpace, de[a.type](a, i, e)) : n.type === m.Identifier ? ue.js += n.name : de[n.type](n, i)
        }, VariableDeclaration: function (e, t) {
          var n = e.declarations, a = n.length, i = a > 1 ? V() : ue.indent, s = K.s3(t.allowIn);
          ue.js += e.kind;
          for (var o = 0; o < a; o++) {
            var r = n[o];
            ue.js += 0 === o ? ue.space : "," + ue.optSpace, me[r.type](r, s)
          }
          !l && t.semicolonOptional || (ue.js += ";"), ue.indent = i
        }, ThrowStatement: function (e, t) {
          var n = ce(e.argument, K.e5);
          ue.js += Y("throw", n), !l && t.semicolonOptional || (ue.js += ";")
        }, TryStatement: function (e) {
          var t = e.block, a = e.finalizer, i = "try" + W(t) + le(t, K.s7) + Q(t), s = e.handlers || e.guardedHandlers;
          s && (i = se(i, a, s)), e.handler && (i = se(i, a, s = n(e.handler) ? e.handler : [e.handler])), a && (i = Y(i, "finally" + W(a)), i += le(a, K.s7)), ue.js += i
        }, SwitchStatement: function (e) {
          var t = e.cases, n = e.discriminant, a = V();
          if (ue.js += "switch" + ue.optSpace + "(", de[n.type](n, K.e5), ue.js += ")" + ue.optSpace + "{" + ue.newline, ue.indent = a, t) for (var i = t.length, s = i - 1, o = 0; o < i; o++) {
            var r = t[o];
            ue.js += ue.indent, me[r.type](r, K.s4(o === s)), ue.js += ue.newline
          }
          ue.js += ue.indent + "}"
        }, SwitchCase: function (e, t) {
          var n = e.consequent, a = n[0], i = e.test, s = 0, o = !l && t.semicolonOptional, r = n.length, c = r - 1,
            p = V();
          if (i) {
            var u = ce(i, K.e5);
            ue.js += Y("case", u) + ":"
          } else ue.js += "default:";
          for (r && a.type === m.BlockStatement && (s++, ue.js += W(a), me[a.type](a, K.s7)); s < r; s++) {
            var d = n[s], h = s === c && o;
            ue.js += ue.newline + ue.indent, me[d.type](d, K.s4(h))
          }
          ue.indent = p
        }, IfStatement: function (e, t) {
          var n = e.consequent, a = e.test, i = V(), s = !l && t.semicolonOptional;
          if (ue.js += "if" + ue.optSpace + "(", de[a.type](a, K.e5), ue.js += ")", ue.indent = i, ue.js += W(n), e.alternate) {
            var o = le(n, K.s7) + Q(n), r = le(e.alternate, K.s4(s));
            r = e.alternate.type === m.IfStatement ? "else " + r : Y("else", W(e.alternate) + r), ue.js += Y(o, r)
          } else me[n.type](n, K.s4(s))
        }, ForStatement: function (e, t) {
          var n = e.init, a = e.test, i = e.body, s = e.update, o = !l && t.semicolonOptional, r = V();
          ue.js += "for" + ue.optSpace + "(", n ? n.type === m.VariableDeclaration ? me[n.type](n, K.s6) : (de[n.type](n, K.e14), ue.js += ";") : ue.js += ";", a && (ue.js += ue.optSpace, de[a.type](a, K.e5)), ue.js += ";", s && (ue.js += ue.optSpace, de[s.type](s, K.e5)), ue.js += ")", ue.indent = r, ue.js += W(i), me[i.type](i, K.s4(o))
        }, ForInStatement: function (e, t) {
          oe("in", e, t)
        }, ForOfStatement: function (e, t) {
          oe("of", e, t)
        }, LabeledStatement: function (e, t) {
          var n = e.body, a = !l && t.semicolonOptional, i = ue.indent;
          ue.js += e.label.name + ":" + W(n), n.type !== m.BlockStatement && (i = V()), me[n.type](n, K.s4(a)), ue.indent = i
        }, ModuleDeclaration: function (e, t) {
          ue.js += "module" + ue.space + e.id.name + ue.space + "from" + ue.optSpace, de.Literal(e.source), !l && t.semicolonOptional || (ue.js += ";")
        }, Program: function (e) {
          var t = e.body, n = t.length, a = n - 1;
          p && n > 0 && (ue.js += "\n");
          for (var i = 0; i < n; i++) {
            var s = t[i];
            ue.js += ue.indent, me[s.type](s, K.s5(!p && i === a)), i !== a && (ue.js += ue.newline)
          }
        }, FunctionDeclaration: function (e) {
          var t = !!e.generator;
          e.async && (ue.js += "async "), ue.js += t ? "function*" + ue.optSpace : "function" + ue.space, ue.js += e.id.name, X(e)
        }, ReturnStatement: function (e, t) {
          var n = e.argument;
          if (n) {
            var a = ce(n, K.e5);
            ue.js += Y("return", a)
          } else ue.js += "return";
          !l && t.semicolonOptional || (ue.js += ";")
        }, WhileStatement: function (e, t) {
          var n = e.body, a = e.test, i = !l && t.semicolonOptional, s = V();
          ue.js += "while" + ue.optSpace + "(", de[a.type](a, K.e5), ue.js += ")", ue.indent = s, ue.js += W(n), me[n.type](n, K.s4(i))
        }, WithStatement: function (e, t) {
          var n = e.body, a = e.object, i = !l && t.semicolonOptional, s = V();
          ue.js += "with" + ue.optSpace + "(", de[a.type](a, K.e5), ue.js += ")", ue.indent = s, ue.js += W(n), me[n.type](n, K.s4(i))
        }
      };

      function ce(e, t, n) {
        var a = ue.js;
        ue.js = "", de[e.type](e, t, n);
        var i = ue.js;
        return ue.js = a, i
      }

      function le(e, t) {
        var n = ue.js;
        ue.js = "", me[e.type](e, t);
        var a = ue.js;
        return ue.js = n, a
      }

      function pe(e) {
        return function (t, n) {
          d.verbatim && t.hasOwnProperty(d.verbatim) ? function (e, t) {
            var n = e[d.verbatim], a = "string" == typeof n,
              i = (a || void 0 === n.precedence ? h : n.precedence) < t.precedence,
              s = (a ? n : n.content).split(/\r\n|\n/), o = s.length;
            i && (ue.js += "("), ue.js += s[0];
            for (var r = 1; r < o; r++) ue.js += ue.newline + ue.indent + s[r];
            i && (ue.js += ")")
          }(t, n) : e(t, n)
        }
      }

      var ue = {js: "", newline: "\n", optSpace: " ", space: " ", indentUnit: "    ", indent: ""}, de = void 0, me = re;
      t.R = function (e, t) {
        var n = {
          indent: null,
          base: null,
          parse: null,
          format: {
            indent: {style: "    ", base: 0},
            newline: "\n",
            space: " ",
            json: !1,
            renumber: !1,
            hexadecimal: !1,
            quotes: "single",
            escapeless: !1,
            compact: !1,
            parentheses: !0,
            semicolons: !0,
            safeConcatenation: !1
          },
          directive: !1,
          raw: !0,
          verbatim: null
        };
        return null != t ? ("string" == typeof t.indent && (n.format.indent.style = t.indent), "number" == typeof t.base && (n.format.indent.base = t.base), t = j(n, t), ue.indentUnit = t.format.indent.style, "string" == typeof t.base ? ue.indent = t.base : ue.indent = H(ue.indentUnit, t.format.indent.base)) : (t = n, ue.indentUnit = t.format.indent.style, ue.indent = H(ue.indentUnit, t.format.indent.base)), a = t.format.json, i = t.format.renumber, s = !a && t.format.hexadecimal, o = a ? "double" : t.format.quotes, r = t.format.escapeless, ue.newline = t.format.newline, ue.optSpace = t.format.space, t.format.compact && (ue.newline = ue.optSpace = ue.indentUnit = ue.indent = ""), ue.space = ue.optSpace ? ue.optSpace : " ", c = t.format.parentheses, l = t.format.semicolons, p = t.format.safeConcatenation, u = t.directive, a ? null : t.parse, de = (d = t).verbatim ? function () {
          var e = {};
          for (var t in ae) ae.hasOwnProperty(t) && (e[t] = pe(ae[t]));
          return e
        }() : ae, function (e) {
          return ue.js = "", me[e.type] ? me[e.type](e, K.s7) : de[e.type](e, K.e19), ue.js
        }(e)
      }
    }, 666: e => {
      "use strict";
      var t, n = "object" == typeof Reflect ? Reflect : null,
        a = n && "function" == typeof n.apply ? n.apply : function (e, t, n) {
          return Function.prototype.apply.call(e, t, n)
        };
      t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
      } : function (e) {
        return Object.getOwnPropertyNames(e)
      };
      var i = Number.isNaN || function (e) {
        return e != e
      };

      function s() {
        s.init.call(this)
      }

      e.exports = s, e.exports.once = function (e, t) {
        return new Promise((function (n, a) {
          function i(n) {
            e.removeListener(t, s), a(n)
          }

          function s() {
            "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments))
          }

          f(e, t, s, {once: !0}), "error" !== t && function (e, t, n) {
            "function" == typeof e.on && f(e, "error", t, n)
          }(e, i, {once: !0})
        }))
      }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
      var o = 10;

      function r(e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
      }

      function c(e) {
        return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
      }

      function l(e, t, n, a) {
        var i, s, o, l;
        if (r(n), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), o = s[t]), void 0 === o) o = s[t] = n, ++e._eventsCount; else if ("function" == typeof o ? o = s[t] = a ? [n, o] : [o, n] : a ? o.unshift(n) : o.push(n), (i = c(e)) > 0 && o.length > i && !o.warned) {
          o.warned = !0;
          var p = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          p.name = "MaxListenersExceededWarning", p.emitter = e, p.type = t, p.count = o.length, l = p, console && console.warn && console.warn(l)
        }
        return e
      }

      function p() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
      }

      function u(e, t, n) {
        var a = {fired: !1, wrapFn: void 0, target: e, type: t, listener: n}, i = p.bind(a);
        return i.listener = n, a.wrapFn = i, i
      }

      function d(e, t, n) {
        var a = e._events;
        if (void 0 === a) return [];
        var i = a[t];
        return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function (e) {
          for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
          return t
        }(i) : h(i, i.length)
      }

      function m(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" == typeof n) return 1;
          if (void 0 !== n) return n.length
        }
        return 0
      }

      function h(e, t) {
        for (var n = new Array(t), a = 0; a < t; ++a) n[a] = e[a];
        return n
      }

      function f(e, t, n, a) {
        if ("function" == typeof e.on) a.once ? e.once(t, n) : e.on(t, n); else {
          if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
          e.addEventListener(t, (function i(s) {
            a.once && e.removeEventListener(t, i), n(s)
          }))
        }
      }

      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0, get: function () {
          return o
        }, set: function (e) {
          if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
          o = e
        }
      }), s.init = function () {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
      }, s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
      }, s.prototype.getMaxListeners = function () {
        return c(this)
      }, s.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var i = "error" === e, s = this._events;
        if (void 0 !== s) i = i && void 0 === s.error; else if (!i) return !1;
        if (i) {
          var o;
          if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
          var r = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
          throw r.context = o, r
        }
        var c = s[e];
        if (void 0 === c) return !1;
        if ("function" == typeof c) a(c, this, t); else {
          var l = c.length, p = h(c, l);
          for (n = 0; n < l; ++n) a(p[n], this, t)
        }
        return !0
      }, s.prototype.addListener = function (e, t) {
        return l(this, e, t, !1)
      }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function (e, t) {
        return l(this, e, t, !0)
      }, s.prototype.once = function (e, t) {
        return r(t), this.on(e, u(this, e, t)), this
      }, s.prototype.prependOnceListener = function (e, t) {
        return r(t), this.prependListener(e, u(this, e, t)), this
      }, s.prototype.removeListener = function (e, t) {
        var n, a, i, s, o;
        if (r(t), void 0 === (a = this._events)) return this;
        if (void 0 === (n = a[e])) return this;
        if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, n.listener || t)); else if ("function" != typeof n) {
          for (i = -1, s = n.length - 1; s >= 0; s--) if (n[s] === t || n[s].listener === t) {
            o = n[s].listener, i = s;
            break
          }
          if (i < 0) return this;
          0 === i ? n.shift() : function (e, t) {
            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
            e.pop()
          }(n, i), 1 === n.length && (a[e] = n[0]), void 0 !== a.removeListener && this.emit("removeListener", e, o || t)
        }
        return this
      }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function (e) {
        var t, n, a;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
        if (0 === arguments.length) {
          var i, s = Object.keys(n);
          for (a = 0; a < s.length; ++a) "removeListener" !== (i = s[a]) && this.removeAllListeners(i);
          return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t); else if (void 0 !== t) for (a = t.length - 1; a >= 0; a--) this.removeListener(e, t[a]);
        return this
      }, s.prototype.listeners = function (e) {
        return d(this, e, !0)
      }, s.prototype.rawListeners = function (e) {
        return d(this, e, !1)
      }, s.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t)
      }, s.prototype.listenerCount = m, s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? t(this._events) : []
      }
    }, 793: (e, t, n) => {
      e.exports = n(765)
    }, 711: e => {
      "use strict";
      var t = {decodeValues: !0, map: !1, silent: !1};

      function n(e) {
        return "string" == typeof e && !!e.trim()
      }

      function a(e, a) {
        var i = e.split(";").filter(n), s = function (e) {
          var t = "", n = "", a = e.split("=");
          a.length > 1 ? (t = a.shift(), n = a.join("=")) : n = e;
          return {name: t, value: n}
        }(i.shift()), o = s.name, r = s.value;
        a = a ? Object.assign({}, t, a) : t;
        try {
          r = a.decodeValues ? decodeURIComponent(r) : r
        } catch (e) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + r + "'. Set options.decodeValues to false to disable this feature.", e)
        }
        var c = {name: o, value: r};
        return i.forEach((function (e) {
          var t = e.split("="), n = t.shift().trimLeft().toLowerCase(), a = t.join("=");
          "expires" === n ? c.expires = new Date(a) : "max-age" === n ? c.maxAge = parseInt(a, 10) : "secure" === n ? c.secure = !0 : "httponly" === n ? c.httpOnly = !0 : "samesite" === n ? c.sameSite = a : c[n] = a
        })), c
      }

      function i(e, i) {
        if (i = i ? Object.assign({}, t, i) : t, !e) return i.map ? {} : [];
        if (e.headers && e.headers["set-cookie"]) e = e.headers["set-cookie"]; else if (e.headers) {
          var s = e.headers[Object.keys(e.headers).find((function (e) {
            return "set-cookie" === e.toLowerCase()
          }))];
          s || !e.headers.cookie || i.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = s
        }
        if (Array.isArray(e) || (e = [e]), (i = i ? Object.assign({}, t, i) : t).map) {
          return e.filter(n).reduce((function (e, t) {
            var n = a(t, i);
            return e[n.name] = n, e
          }), {})
        }
        return e.filter(n).map((function (e) {
          return a(e, i)
        }))
      }

      e.exports = i, e.exports.parse = i, e.exports.parseString = a, e.exports.splitCookiesString = function (e) {
        if (Array.isArray(e)) return e;
        if ("string" != typeof e) return [];
        var t, n, a, i, s, o = [], r = 0;

        function c() {
          for (; r < e.length && /\s/.test(e.charAt(r));) r += 1;
          return r < e.length
        }

        for (; r < e.length;) {
          for (t = r, s = !1; c();) if ("," === (n = e.charAt(r))) {
            for (a = r, r += 1, c(), i = r; r < e.length && "=" !== (n = e.charAt(r)) && ";" !== n && "," !== n;) r += 1;
            r < e.length && "=" === e.charAt(r) ? (s = !0, r = i, o.push(e.substring(t, a)), t = r) : r = a + 1
          } else r += 1;
          (!s || r >= e.length) && o.push(e.substring(t, e.length))
        }
        return o
      }
    }, 946: (e, t, n) => {
      var a = n(12), i = Object.prototype.hasOwnProperty, s = "undefined" != typeof Map;

      function o() {
        this._array = [], this._set = s ? new Map : Object.create(null)
      }

      o.fromArray = function (e, t) {
        for (var n = new o, a = 0, i = e.length; a < i; a++) n.add(e[a], t);
        return n
      }, o.prototype.size = function () {
        return s ? this._set.size : Object.getOwnPropertyNames(this._set).length
      }, o.prototype.add = function (e, t) {
        var n = s ? e : a.toSetString(e), o = s ? this.has(e) : i.call(this._set, n), r = this._array.length;
        o && !t || this._array.push(e), o || (s ? this._set.set(e, r) : this._set[n] = r)
      }, o.prototype.has = function (e) {
        if (s) return this._set.has(e);
        var t = a.toSetString(e);
        return i.call(this._set, t)
      }, o.prototype.indexOf = function (e) {
        if (s) {
          var t = this._set.get(e);
          if (t >= 0) return t
        } else {
          var n = a.toSetString(e);
          if (i.call(this._set, n)) return this._set[n]
        }
        throw new Error('"' + e + '" is not in the set.')
      }, o.prototype.at = function (e) {
        if (e >= 0 && e < this._array.length) return this._array[e];
        throw new Error("No element indexed by " + e)
      }, o.prototype.toArray = function () {
        return this._array.slice()
      }, t.I = o
    }, 298: (e, t, n) => {
      var a = n(433);
      t.encode = function (e) {
        var t, n = "", i = function (e) {
          return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
        }(e);
        do {
          t = 31 & i, (i >>>= 5) > 0 && (t |= 32), n += a.encode(t)
        } while (i > 0);
        return n
      }, t.decode = function (e, t, n) {
        var i, s, o, r, c = e.length, l = 0, p = 0;
        do {
          if (t >= c) throw new Error("Expected more digits in base 64 VLQ value.");
          if (-1 === (s = a.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
          i = !!(32 & s), l += (s &= 31) << p, p += 5
        } while (i);
        n.value = (r = (o = l) >> 1, 1 == (1 & o) ? -r : r), n.rest = t
      }
    }, 433: (e, t) => {
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      t.encode = function (e) {
        if (0 <= e && e < n.length) return n[e];
        throw new TypeError("Must be between 0 and 63: " + e)
      }, t.decode = function (e) {
        return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
      }
    }, 232: (e, t, n) => {
      var a = n(12);

      function i() {
        this._array = [], this._sorted = !0, this._last = {generatedLine: -1, generatedColumn: 0}
      }

      i.prototype.unsortedForEach = function (e, t) {
        this._array.forEach(e, t)
      }, i.prototype.add = function (e) {
        var t, n, i, s, o, r;
        t = this._last, n = e, i = t.generatedLine, s = n.generatedLine, o = t.generatedColumn, r = n.generatedColumn, s > i || s == i && r >= o || a.compareByGeneratedPositionsInflated(t, n) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
      }, i.prototype.toArray = function () {
        return this._sorted || (this._array.sort(a.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
      }, t.H = i
    }, 257: (e, t, n) => {
      var a = n(298), i = n(12), s = n(946).I, o = n(232).H;

      function r(e) {
        e || (e = {}), this._file = i.getArg(e, "file", null), this._sourceRoot = i.getArg(e, "sourceRoot", null), this._skipValidation = i.getArg(e, "skipValidation", !1), this._sources = new s, this._names = new s, this._mappings = new o, this._sourcesContents = null
      }

      r.prototype._version = 3, r.fromSourceMap = function (e) {
        var t = e.sourceRoot, n = new r({file: e.file, sourceRoot: t});
        return e.eachMapping((function (e) {
          var a = {generated: {line: e.generatedLine, column: e.generatedColumn}};
          null != e.source && (a.source = e.source, null != t && (a.source = i.relative(t, a.source)), a.original = {
            line: e.originalLine,
            column: e.originalColumn
          }, null != e.name && (a.name = e.name)), n.addMapping(a)
        })), e.sources.forEach((function (a) {
          var s = a;
          null !== t && (s = i.relative(t, a)), n._sources.has(s) || n._sources.add(s);
          var o = e.sourceContentFor(a);
          null != o && n.setSourceContent(a, o)
        })), n
      }, r.prototype.addMapping = function (e) {
        var t = i.getArg(e, "generated"), n = i.getArg(e, "original", null), a = i.getArg(e, "source", null),
          s = i.getArg(e, "name", null);
        this._skipValidation || this._validateMapping(t, n, a, s), null != a && (a = String(a), this._sources.has(a) || this._sources.add(a)), null != s && (s = String(s), this._names.has(s) || this._names.add(s)), this._mappings.add({
          generatedLine: t.line,
          generatedColumn: t.column,
          originalLine: null != n && n.line,
          originalColumn: null != n && n.column,
          source: a,
          name: s
        })
      }, r.prototype.setSourceContent = function (e, t) {
        var n = e;
        null != this._sourceRoot && (n = i.relative(this._sourceRoot, n)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[i.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[i.toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
      }, r.prototype.applySourceMap = function (e, t, n) {
        var a = t;
        if (null == t) {
          if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
          a = e.file
        }
        var o = this._sourceRoot;
        null != o && (a = i.relative(o, a));
        var r = new s, c = new s;
        this._mappings.unsortedForEach((function (t) {
          if (t.source === a && null != t.originalLine) {
            var s = e.originalPositionFor({line: t.originalLine, column: t.originalColumn});
            null != s.source && (t.source = s.source, null != n && (t.source = i.join(n, t.source)), null != o && (t.source = i.relative(o, t.source)), t.originalLine = s.line, t.originalColumn = s.column, null != s.name && (t.name = s.name))
          }
          var l = t.source;
          null == l || r.has(l) || r.add(l);
          var p = t.name;
          null == p || c.has(p) || c.add(p)
        }), this), this._sources = r, this._names = c, e.sources.forEach((function (t) {
          var a = e.sourceContentFor(t);
          null != a && (null != n && (t = i.join(n, t)), null != o && (t = i.relative(o, t)), this.setSourceContent(t, a))
        }), this)
      }, r.prototype._validateMapping = function (e, t, n, a) {
        if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
        if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || a) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) throw new Error("Invalid mapping: " + JSON.stringify({
          generated: e,
          source: n,
          original: t,
          name: a
        }))
      }, r.prototype._serializeMappings = function () {
        for (var e, t, n, s, o = 0, r = 1, c = 0, l = 0, p = 0, u = 0, d = "", m = this._mappings.toArray(), h = 0, f = m.length; h < f; h++) {
          if (e = "", (t = m[h]).generatedLine !== r) for (o = 0; t.generatedLine !== r;) e += ";", r++; else if (h > 0) {
            if (!i.compareByGeneratedPositionsInflated(t, m[h - 1])) continue;
            e += ","
          }
          e += a.encode(t.generatedColumn - o), o = t.generatedColumn, null != t.source && (s = this._sources.indexOf(t.source), e += a.encode(s - u), u = s, e += a.encode(t.originalLine - 1 - l), l = t.originalLine - 1, e += a.encode(t.originalColumn - c), c = t.originalColumn, null != t.name && (n = this._names.indexOf(t.name), e += a.encode(n - p), p = n)), d += e
        }
        return d
      }, r.prototype._generateSourcesContent = function (e, t) {
        return e.map((function (e) {
          if (!this._sourcesContents) return null;
          null != t && (e = i.relative(t, e));
          var n = i.toSetString(e);
          return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null
        }), this)
      }, r.prototype.toJSON = function () {
        var e = {
          version: this._version,
          sources: this._sources.toArray(),
          names: this._names.toArray(),
          mappings: this._serializeMappings()
        };
        return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
      }, r.prototype.toString = function () {
        return JSON.stringify(this.toJSON())
      }, t.h = r
    }, 12: (e, t) => {
      t.getArg = function (e, t, n) {
        if (t in e) return e[t];
        if (3 === arguments.length) return n;
        throw new Error('"' + t + '" is a required argument.')
      };
      var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, a = /^data:.+\,.+$/;

      function i(e) {
        var t = e.match(n);
        return t ? {scheme: t[1], auth: t[2], host: t[3], port: t[4], path: t[5]} : null
      }

      function s(e) {
        var t = "";
        return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
      }

      t.urlParse = i, t.urlGenerate = s;
      var o, r, c = (o = function (e) {
        var n = e, a = i(e);
        if (a) {
          if (!a.path) return e;
          n = a.path
        }
        for (var o = t.isAbsolute(n), r = [], c = 0, l = 0; ;) {
          if (c = l, -1 === (l = n.indexOf("/", c))) {
            r.push(n.slice(c));
            break
          }
          for (r.push(n.slice(c, l)); l < n.length && "/" === n[l];) l++
        }
        var p, u = 0;
        for (l = r.length - 1; l >= 0; l--) "." === (p = r[l]) ? r.splice(l, 1) : ".." === p ? u++ : u > 0 && ("" === p ? (r.splice(l + 1, u), u = 0) : (r.splice(l, 2), u--));
        return "" === (n = r.join("/")) && (n = o ? "/" : "."), a ? (a.path = n, s(a)) : n
      }, r = [], function (e) {
        for (var t = 0; t < r.length; t++) if (r[t].input === e) {
          var n = r[0];
          return r[0] = r[t], r[t] = n, r[0].result
        }
        var a = o(e);
        return r.unshift({input: e, result: a}), r.length > 32 && r.pop(), a
      });

      function l(e, t) {
        "" === e && (e = "."), "" === t && (t = ".");
        var n = i(t), o = i(e);
        if (o && (e = o.path || "/"), n && !n.scheme) return o && (n.scheme = o.scheme), s(n);
        if (n || t.match(a)) return t;
        if (o && !o.host && !o.path) return o.host = t, s(o);
        var r = "/" === t.charAt(0) ? t : c(e.replace(/\/+$/, "") + "/" + t);
        return o ? (o.path = r, s(o)) : r
      }

      t.normalize = c, t.join = l, t.isAbsolute = function (e) {
        return "/" === e.charAt(0) || n.test(e)
      }, t.relative = function (e, t) {
        "" === e && (e = "."), e = e.replace(/\/$/, "");
        for (var n = 0; 0 !== t.indexOf(e + "/");) {
          var a = e.lastIndexOf("/");
          if (a < 0) return t;
          if ((e = e.slice(0, a)).match(/^([^\/]+:\/)?\/*$/)) return t;
          ++n
        }
        return Array(n + 1).join("../") + t.substr(e.length + 1)
      };
      var p = !("__proto__" in Object.create(null));

      function u(e) {
        return e
      }

      function d(e) {
        if (!e) return !1;
        var t = e.length;
        if (t < 9) return !1;
        if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
        for (var n = t - 10; n >= 0; n--) if (36 !== e.charCodeAt(n)) return !1;
        return !0
      }

      function m(e, t) {
        return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1
      }

      t.toSetString = p ? u : function (e) {
        return d(e) ? "$" + e : e
      }, t.fromSetString = p ? u : function (e) {
        return d(e) ? e.slice(1) : e
      }, t.compareByOriginalPositions = function (e, t, n) {
        var a = m(e.source, t.source);
        return 0 !== a || 0 !== (a = e.originalLine - t.originalLine) || 0 !== (a = e.originalColumn - t.originalColumn) || n || 0 !== (a = e.generatedColumn - t.generatedColumn) || 0 !== (a = e.generatedLine - t.generatedLine) ? a : m(e.name, t.name)
      }, t.compareByOriginalPositionsNoSource = function (e, t, n) {
        var a;
        return 0 !== (a = e.originalLine - t.originalLine) || 0 !== (a = e.originalColumn - t.originalColumn) || n || 0 !== (a = e.generatedColumn - t.generatedColumn) || 0 !== (a = e.generatedLine - t.generatedLine) ? a : m(e.name, t.name)
      }, t.compareByGeneratedPositionsDeflated = function (e, t, n) {
        var a = e.generatedLine - t.generatedLine;
        return 0 !== a || 0 !== (a = e.generatedColumn - t.generatedColumn) || n || 0 !== (a = m(e.source, t.source)) || 0 !== (a = e.originalLine - t.originalLine) || 0 !== (a = e.originalColumn - t.originalColumn) ? a : m(e.name, t.name)
      }, t.compareByGeneratedPositionsDeflatedNoLine = function (e, t, n) {
        var a = e.generatedColumn - t.generatedColumn;
        return 0 !== a || n || 0 !== (a = m(e.source, t.source)) || 0 !== (a = e.originalLine - t.originalLine) || 0 !== (a = e.originalColumn - t.originalColumn) ? a : m(e.name, t.name)
      }, t.compareByGeneratedPositionsInflated = function (e, t) {
        var n = e.generatedLine - t.generatedLine;
        return 0 !== n || 0 !== (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = m(e.source, t.source)) || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) ? n : m(e.name, t.name)
      }, t.parseSourceMapInput = function (e) {
        return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""))
      }, t.computeSourceURL = function (e, t, n) {
        if (t = t || "", e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"), t = e + t), n) {
          var a = i(n);
          if (!a) throw new Error("sourceMapURL could not be parsed");
          if (a.path) {
            var o = a.path.lastIndexOf("/");
            o >= 0 && (a.path = a.path.substring(0, o + 1))
          }
          t = l(s(a), t)
        }
        return c(t)
      }
    }, 765: e => {
      "use strict";
      e.exports = JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hl7cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}')
    }
  }, t = {};

  function n(a) {
    var i = t[a];
    if (void 0 !== i) return i.exports;
    var s = t[a] = {exports: {}};
    return e[a](s, s.exports, n), s.exports
  }

  n.d = (e, t) => {
    for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {enumerable: !0, get: t[a]})
  }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, (() => {
    "use strict";
    var e = {};
    n.r(e), n.d(e, {safe: () => Ja, spec: () => $a});
    var t = {};
    n.r(t), n.d(t, {getTrace: () => Ds, isKeyword: () => Ps, isProperty: () => Rs, isType: () => Ls});
    var a = {};
    n.r(a), n.d(a, {generate: () => xo, name: () => fo, parse: () => bo, structure: () => go});
    var i = {};
    n.r(i), n.d(i, {generate: () => _o, name: () => ko, parse: () => yo, structure: () => Ao, walkContext: () => To});
    var s = {};
    n.r(s), n.d(s, {generate: () => No, name: () => Co, parse: () => Io, structure: () => wo, walkContext: () => So});
    var o = {};
    n.r(o), n.d(o, {generate: () => Mo, name: () => Ro, parse: () => Oo, structure: () => Po});
    var r = {};
    n.r(r), n.d(r, {generate: () => Yo, name: () => jo, parse: () => zo, structure: () => qo, walkContext: () => Go});
    var c = {};
    n.r(c), n.d(c, {generate: () => Xo, name: () => Vo, parse: () => Qo, structure: () => Wo});
    var l = {};
    n.r(l), n.d(l, {generate: () => Zo, name: () => Ko, parse: () => Jo, structure: () => $o});
    var p = {};
    n.r(p), n.d(p, {generate: () => ar, name: () => er, parse: () => nr, structure: () => tr});
    var u = {};
    n.r(u), n.d(u, {generate: () => rr, name: () => ir, parse: () => or, structure: () => sr});
    var d = {};
    n.r(d), n.d(d, {generate: () => ur, name: () => cr, parse: () => pr, structure: () => lr});
    var m = {};
    n.r(m), n.d(m, {generate: () => fr, name: () => dr, parse: () => hr, structure: () => mr});
    var h = {};
    n.r(h), n.d(h, {generate: () => Ar, name: () => Er, parse: () => Tr, structure: () => kr, walkContext: () => vr});
    var f = {};
    n.r(f), n.d(f, {generate: () => Nr, name: () => Sr, parse: () => Ir, structure: () => wr});
    var g = {};
    n.r(g), n.d(g, {generate: () => Pr, name: () => Dr, parse: () => Rr, structure: () => Lr});
    var b = {};
    n.r(b), n.d(b, {generate: () => Fr, name: () => Or, parse: () => Ur, structure: () => Br, walkContext: () => Mr});
    var x = {};
    n.r(x), n.d(x, {generate: () => zr, name: () => jr, parse: () => qr, structure: () => Gr, xxx: () => Hr});
    var E = {};
    n.r(E), n.d(E, {generate: () => Qr, name: () => Yr, parse: () => Wr, structure: () => Vr});
    var v = {};
    n.r(v), n.d(v, {generate: () => Jr, name: () => Xr, parse: () => $r, structure: () => Kr});
    var k = {};
    n.r(k), n.d(k, {generate: () => nc, name: () => Zr, parse: () => tc, structure: () => ec});
    var T = {};
    n.r(T), n.d(T, {generate: () => oc, name: () => ac, parse: () => sc, structure: () => ic});
    var A = {};
    n.r(A), n.d(A, {generate: () => pc, name: () => rc, parse: () => lc, structure: () => cc});
    var y = {};
    n.r(y), n.d(y, {generate: () => hc, name: () => uc, parse: () => mc, structure: () => dc});
    var _ = {};
    n.r(_), n.d(_, {generate: () => xc, name: () => fc, parse: () => bc, structure: () => gc});
    var C = {};
    n.r(C), n.d(C, {generate: () => Tc, name: () => Ec, parse: () => kc, structure: () => vc});
    var S = {};
    n.r(S), n.d(S, {generate: () => Cc, name: () => Ac, parse: () => _c, structure: () => yc});
    var w = {};
    n.r(w), n.d(w, {generate: () => Nc, name: () => Sc, parse: () => Ic, structure: () => wc});
    var I = {};
    n.r(I), n.d(I, {generate: () => Oc, name: () => Dc, parse: () => Pc, structure: () => Rc, walkContext: () => Lc});
    var N = {};
    n.r(N), n.d(N, {generate: () => Hc, name: () => Mc, parse: () => Fc, structure: () => Uc, walkContext: () => Bc});
    var D = {};
    n.r(D), n.d(D, {generate: () => Yc, name: () => Gc, parse: () => zc, structure: () => qc});
    var L = {};
    n.r(L), n.d(L, {generate: () => Kc, name: () => Wc, parse: () => Xc, structure: () => Qc});
    var R = {};
    n.r(R), n.d(R, {generate: () => al, name: () => Zc, parse: () => nl, structure: () => tl, walkContext: () => el});
    var P = {};
    n.r(P), n.d(P, {generate: () => rl, name: () => il, parse: () => ol, structure: () => sl});
    var O = {};
    n.r(O), n.d(O, {generate: () => dl, name: () => cl, parse: () => ul, structure: () => pl, walkContext: () => ll});
    var M = {};
    n.r(M), n.d(M, {generate: () => bl, name: () => hl, parse: () => gl, structure: () => fl});
    var B = {};
    n.r(B), n.d(B, {generate: () => Al, name: () => El, parse: () => Tl, structure: () => kl, walkContext: () => vl});
    var U = {};
    n.r(U), n.d(U, {generate: () => wl, name: () => _l, parse: () => Sl, structure: () => Cl});
    var F = {};
    n.r(F), n.d(F, {generate: () => Ml, name: () => Rl, parse: () => Ol, structure: () => Pl});
    var H = {};
    n.r(H), n.d(H, {generate: () => Hl, name: () => Bl, parse: () => Fl, structure: () => Ul});
    var j = {};
    n.r(j), n.d(j, {generate: () => zl, name: () => jl, parse: () => ql, structure: () => Gl});
    var G = {};
    n.r(G), n.d(G, {generate: () => Xl, name: () => Vl, parse: () => Ql, structure: () => Wl});
    var q = {};
    n.r(q), n.d(q, {
      AnPlusB: () => a,
      Atrule: () => i,
      AtrulePrelude: () => s,
      AttributeSelector: () => o,
      Block: () => r,
      Brackets: () => c,
      CDC: () => l,
      CDO: () => p,
      ClassSelector: () => u,
      Combinator: () => d,
      Comment: () => m,
      Declaration: () => h,
      DeclarationList: () => f,
      Dimension: () => g,
      Function: () => b,
      Hash: () => x,
      IdSelector: () => v,
      Identifier: () => E,
      MediaFeature: () => k,
      MediaQuery: () => T,
      MediaQueryList: () => A,
      Nth: () => y,
      Number: () => _,
      Operator: () => C,
      Parentheses: () => S,
      Percentage: () => w,
      PseudoClassSelector: () => I,
      PseudoElementSelector: () => N,
      Ratio: () => D,
      Raw: () => L,
      Rule: () => R,
      Selector: () => P,
      SelectorList: () => O,
      String: () => M,
      StyleSheet: () => B,
      TypeSelector: () => U,
      UnicodeRange: () => F,
      Url: () => H,
      Value: () => j,
      WhiteSpace: () => G
    });
    var z = {};
    n.r(z), n.d(z, {AtrulePrelude: () => $l, Selector: () => Jl, Value: () => ep});
    var Y = {};
    n.r(Y), n.d(Y, {
      AnPlusB: () => bo,
      Atrule: () => yo,
      AtrulePrelude: () => Io,
      AttributeSelector: () => Oo,
      Block: () => zo,
      Brackets: () => Qo,
      CDC: () => Jo,
      CDO: () => nr,
      ClassSelector: () => or,
      Combinator: () => pr,
      Comment: () => hr,
      Declaration: () => Tr,
      DeclarationList: () => Ir,
      Dimension: () => Rr,
      Function: () => Ur,
      Hash: () => qr,
      IdSelector: () => $r,
      Identifier: () => Wr,
      MediaFeature: () => tc,
      MediaQuery: () => sc,
      MediaQueryList: () => lc,
      Nth: () => mc,
      Number: () => bc,
      Operator: () => kc,
      Parentheses: () => _c,
      Percentage: () => Ic,
      PseudoClassSelector: () => Pc,
      PseudoElementSelector: () => Fc,
      Ratio: () => zc,
      Raw: () => Xc,
      Rule: () => nl,
      Selector: () => ol,
      SelectorList: () => ul,
      String: () => gl,
      StyleSheet: () => Tl,
      TypeSelector: () => Sl,
      UnicodeRange: () => Ol,
      Url: () => Fl,
      Value: () => ql,
      WhiteSpace: () => Ql
    });
    var V = {};
    n.r(V), n.d(V, {
      charset: () => vm,
      charsets: () => Em,
      contentType: () => km,
      extension: () => Tm,
      lookup: () => Am
    });
    var W = n(666);
    const Q = new Set([65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]),
      X = "�";
    var K;
    !function (e) {
      e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.NUMBER_SIGN = 35] = "NUMBER_SIGN", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_F = 70] = "LATIN_CAPITAL_F", e[e.LATIN_CAPITAL_X = 88] = "LATIN_CAPITAL_X", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_F = 102] = "LATIN_SMALL_F", e[e.LATIN_SMALL_X = 120] = "LATIN_SMALL_X", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z", e[e.REPLACEMENT_CHARACTER = 65533] = "REPLACEMENT_CHARACTER"
    }(K = K || (K = {}));
    const $ = "--", J = "[CDATA[", Z = "doctype", ee = "script", te = "public", ne = "system";

    function ae(e) {
      return e >= 55296 && e <= 57343
    }

    function ie(e) {
      return 32 !== e && 10 !== e && 13 !== e && 9 !== e && 12 !== e && e >= 1 && e <= 31 || e >= 127 && e <= 159
    }

    function se(e) {
      return e >= 64976 && e <= 65007 || Q.has(e)
    }

    var oe;
    !function (e) {
      e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text"
    }(oe = oe || (oe = {}));

    class re {
      constructor(e) {
        this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = 65536, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1
      }

      get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
      }

      get offset() {
        return this.droppedBufferSize + this.pos
      }

      getError(e) {
        const {line: t, col: n, offset: a} = this;
        return {code: e, startLine: t, endLine: t, startCol: n, endCol: n, startOffset: a, endOffset: a}
      }

      _err(e) {
        this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e)))
      }

      _addGap() {
        this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos
      }

      _processSurrogate(e) {
        if (this.pos !== this.html.length - 1) {
          const t = this.html.charCodeAt(this.pos + 1);
          if (function (e) {
            return e >= 56320 && e <= 57343
          }(t)) return this.pos++, this._addGap(), 1024 * (e - 55296) + 9216 + t
        } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, K.EOF;
        return this._err(oe.surrogateInInputStream), e
      }

      willDropParsedChunk() {
        return this.pos > this.bufferWaterline
      }

      dropParsedChunk() {
        this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0)
      }

      write(e, t) {
        this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t
      }

      insertHtmlAtCurrentPos(e) {
        this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1
      }

      startsWith(e, t) {
        if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
        if (t) return this.html.startsWith(e, this.pos);
        for (let t = 0; t < e.length; t++) {
          if ((32 | this.html.charCodeAt(this.pos + t)) !== e.charCodeAt(t)) return !1
        }
        return !0
      }

      peek(e) {
        const t = this.pos + e;
        if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, K.EOF;
        const n = this.html.charCodeAt(t);
        return n === K.CARRIAGE_RETURN ? K.LINE_FEED : n
      }

      advance() {
        if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, K.EOF;
        let e = this.html.charCodeAt(this.pos);
        if (e === K.CARRIAGE_RETURN) return this.isEol = !0, this.skipNextNewLine = !0, K.LINE_FEED;
        if (e === K.LINE_FEED && (this.isEol = !0, this.skipNextNewLine)) return this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance();
        this.skipNextNewLine = !1, ae(e) && (e = this._processSurrogate(e));
        return null === this.handler.onParseError || e > 31 && e < 127 || e === K.LINE_FEED || e === K.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e
      }

      _checkForProblematicCharacters(e) {
        ie(e) ? this._err(oe.controlCharacterInInputStream) : se(e) && this._err(oe.noncharacterInInputStream)
      }

      retreat(e) {
        for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
        this.isEol = !1
      }
    }

    var ce;

    function le(e, t) {
      for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
      return null
    }

    !function (e) {
      e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION"
    }(ce = ce || (ce = {}));
    const pe = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e => e.charCodeAt(0)))),
      ue = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e => e.charCodeAt(0))));
    var de;
    const me = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]),
      he = null !== (de = String.fromCodePoint) && void 0 !== de ? de : function (e) {
        let t = "";
        return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += String.fromCharCode(e), t
      };

    function fe(e) {
      return he(function (e) {
        var t;
        return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : null !== (t = me.get(e)) && void 0 !== t ? t : e
      }(e))
    }

    var ge, be;

    function xe(e) {
      return function (t, n) {
        let a = "", i = 0, s = 0;
        for (; (s = t.indexOf("&", s)) >= 0;) {
          if (a += t.slice(i, s), i = s, s += 1, t.charCodeAt(s) === ge.NUM) {
            let e = s + 1, o = 10, r = t.charCodeAt(e);
            (r | ge.To_LOWER_BIT) === ge.LOWER_X && (o = 16, s += 1, e += 1);
            do {
              r = t.charCodeAt(++s)
            } while (r >= ge.ZERO && r <= ge.NINE || 16 === o && (r | ge.To_LOWER_BIT) >= ge.LOWER_A && (r | ge.To_LOWER_BIT) <= ge.LOWER_F);
            if (e !== s) {
              const r = t.substring(e, s), c = parseInt(r, o);
              if (t.charCodeAt(s) === ge.SEMI) s += 1; else if (n) continue;
              a += fe(c), i = s
            }
            continue
          }
          let o = 0, r = 1, c = 0, l = e[c];
          for (; s < t.length && (c = Ee(e, l, c + 1, t.charCodeAt(s)), !(c < 0)); s++, r++) {
            l = e[c];
            const a = l & be.VALUE_LENGTH;
            if (a) {
              n && t.charCodeAt(s) !== ge.SEMI || (o = c, r = 0);
              const e = (a >> 14) - 1;
              if (0 === e) break;
              c += e
            }
          }
          if (0 !== o) {
            const t = (e[o] & be.VALUE_LENGTH) >> 14;
            a += 1 === t ? String.fromCharCode(e[o] & ~be.VALUE_LENGTH) : 2 === t ? String.fromCharCode(e[o + 1]) : String.fromCharCode(e[o + 1], e[o + 2]), i = s - r + 1
          }
        }
        return a + t.slice(i)
      }
    }

    function Ee(e, t, n, a) {
      const i = (t & be.BRANCH_LENGTH) >> 7, s = t & be.JUMP_TABLE;
      if (0 === i) return 0 !== s && a === s ? n : -1;
      if (s) {
        const t = a - s;
        return t < 0 || t >= i ? -1 : e[n + t] - 1
      }
      let o = n, r = o + i - 1;
      for (; o <= r;) {
        const t = o + r >>> 1, n = e[t];
        if (n < a) o = t + 1; else {
          if (!(n > a)) return e[t + i];
          r = t - 1
        }
      }
      return -1
    }

    !function (e) {
      e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.To_LOWER_BIT = 32] = "To_LOWER_BIT"
    }(ge || (ge = {})), function (e) {
      e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"
    }(be || (be = {}));
    xe(pe), xe(ue);
    var ve, ke, Te, Ae, ye;
    !function (e) {
      e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/"
    }(ve = ve || (ve = {})), function (e) {
      e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size"
    }(ke = ke || (ke = {})), function (e) {
      e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks"
    }(Te = Te || (Te = {})), function (e) {
      e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style",e.SUB = "sub",e.SUMMARY = "summary",e.SUP = "sup",e.TABLE = "table",e.TBODY = "tbody",e.TEMPLATE = "template",e.TEXTAREA = "textarea",e.TFOOT = "tfoot",e.TD = "td",e.TH = "th",e.THEAD = "thead",e.TITLE = "title",e.TR = "tr",e.TRACK = "track",e.TT = "tt",e.U = "u",e.UL = "ul",e.SVG = "svg",e.VAR = "var",e.WBR = "wbr",e.XMP = "xmp"
    }(Ae = Ae || (Ae = {})), function (e) {
      e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SECTION = 94] = "SECTION", e[e.SELECT = 95] = "SELECT", e[e.SOURCE = 96] = "SOURCE", e[e.SMALL = 97] = "SMALL", e[e.SPAN = 98] = "SPAN", e[e.STRIKE = 99] = "STRIKE", e[e.STRONG = 100] = "STRONG",e[e.STYLE = 101] = "STYLE",e[e.SUB = 102] = "SUB",e[e.SUMMARY = 103] = "SUMMARY",e[e.SUP = 104] = "SUP",e[e.TABLE = 105] = "TABLE",e[e.TBODY = 106] = "TBODY",e[e.TEMPLATE = 107] = "TEMPLATE",e[e.TEXTAREA = 108] = "TEXTAREA",e[e.TFOOT = 109] = "TFOOT",e[e.TD = 110] = "TD",e[e.TH = 111] = "TH",e[e.THEAD = 112] = "THEAD",e[e.TITLE = 113] = "TITLE",e[e.TR = 114] = "TR",e[e.TRACK = 115] = "TRACK",e[e.TT = 116] = "TT",e[e.U = 117] = "U",e[e.UL = 118] = "UL",e[e.SVG = 119] = "SVG",e[e.VAR = 120] = "VAR",e[e.WBR = 121] = "WBR",e[e.XMP = 122] = "XMP"
    }(ye = ye || (ye = {}));
    const _e = new Map([[Ae.A, ye.A], [Ae.ADDRESS, ye.ADDRESS], [Ae.ANNOTATION_XML, ye.ANNOTATION_XML], [Ae.APPLET, ye.APPLET], [Ae.AREA, ye.AREA], [Ae.ARTICLE, ye.ARTICLE], [Ae.ASIDE, ye.ASIDE], [Ae.B, ye.B], [Ae.BASE, ye.BASE], [Ae.BASEFONT, ye.BASEFONT], [Ae.BGSOUND, ye.BGSOUND], [Ae.BIG, ye.BIG], [Ae.BLOCKQUOTE, ye.BLOCKQUOTE], [Ae.BODY, ye.BODY], [Ae.BR, ye.BR], [Ae.BUTTON, ye.BUTTON], [Ae.CAPTION, ye.CAPTION], [Ae.CENTER, ye.CENTER], [Ae.CODE, ye.CODE], [Ae.COL, ye.COL], [Ae.COLGROUP, ye.COLGROUP], [Ae.DD, ye.DD], [Ae.DESC, ye.DESC], [Ae.DETAILS, ye.DETAILS], [Ae.DIALOG, ye.DIALOG], [Ae.DIR, ye.DIR], [Ae.DIV, ye.DIV], [Ae.DL, ye.DL], [Ae.DT, ye.DT], [Ae.EM, ye.EM], [Ae.EMBED, ye.EMBED], [Ae.FIELDSET, ye.FIELDSET], [Ae.FIGCAPTION, ye.FIGCAPTION], [Ae.FIGURE, ye.FIGURE], [Ae.FONT, ye.FONT], [Ae.FOOTER, ye.FOOTER], [Ae.FOREIGN_OBJECT, ye.FOREIGN_OBJECT], [Ae.FORM, ye.FORM], [Ae.FRAME, ye.FRAME], [Ae.FRAMESET, ye.FRAMESET], [Ae.H1, ye.H1], [Ae.H2, ye.H2], [Ae.H3, ye.H3], [Ae.H4, ye.H4], [Ae.H5, ye.H5], [Ae.H6, ye.H6], [Ae.HEAD, ye.HEAD], [Ae.HEADER, ye.HEADER], [Ae.HGROUP, ye.HGROUP], [Ae.HR, ye.HR], [Ae.HTML, ye.HTML], [Ae.I, ye.I], [Ae.IMG, ye.IMG], [Ae.IMAGE, ye.IMAGE], [Ae.INPUT, ye.INPUT], [Ae.IFRAME, ye.IFRAME], [Ae.KEYGEN, ye.KEYGEN], [Ae.LABEL, ye.LABEL], [Ae.LI, ye.LI], [Ae.LINK, ye.LINK], [Ae.LISTING, ye.LISTING], [Ae.MAIN, ye.MAIN], [Ae.MALIGNMARK, ye.MALIGNMARK], [Ae.MARQUEE, ye.MARQUEE], [Ae.MATH, ye.MATH], [Ae.MENU, ye.MENU], [Ae.META, ye.META], [Ae.MGLYPH, ye.MGLYPH], [Ae.MI, ye.MI], [Ae.MO, ye.MO], [Ae.MN, ye.MN], [Ae.MS, ye.MS], [Ae.MTEXT, ye.MTEXT], [Ae.NAV, ye.NAV], [Ae.NOBR, ye.NOBR], [Ae.NOFRAMES, ye.NOFRAMES], [Ae.NOEMBED, ye.NOEMBED], [Ae.NOSCRIPT, ye.NOSCRIPT], [Ae.OBJECT, ye.OBJECT], [Ae.OL, ye.OL], [Ae.OPTGROUP, ye.OPTGROUP], [Ae.OPTION, ye.OPTION], [Ae.P, ye.P], [Ae.PARAM, ye.PARAM], [Ae.PLAINTEXT, ye.PLAINTEXT], [Ae.PRE, ye.PRE], [Ae.RB, ye.RB], [Ae.RP, ye.RP], [Ae.RT, ye.RT], [Ae.RTC, ye.RTC], [Ae.RUBY, ye.RUBY], [Ae.S, ye.S], [Ae.SCRIPT, ye.SCRIPT], [Ae.SECTION, ye.SECTION], [Ae.SELECT, ye.SELECT], [Ae.SOURCE, ye.SOURCE], [Ae.SMALL, ye.SMALL], [Ae.SPAN, ye.SPAN], [Ae.STRIKE, ye.STRIKE], [Ae.STRONG, ye.STRONG], [Ae.STYLE, ye.STYLE], [Ae.SUB, ye.SUB], [Ae.SUMMARY, ye.SUMMARY], [Ae.SUP, ye.SUP], [Ae.TABLE, ye.TABLE], [Ae.TBODY, ye.TBODY], [Ae.TEMPLATE, ye.TEMPLATE], [Ae.TEXTAREA, ye.TEXTAREA], [Ae.TFOOT, ye.TFOOT], [Ae.TD, ye.TD], [Ae.TH, ye.TH], [Ae.THEAD, ye.THEAD], [Ae.TITLE, ye.TITLE], [Ae.TR, ye.TR], [Ae.TRACK, ye.TRACK], [Ae.TT, ye.TT], [Ae.U, ye.U], [Ae.UL, ye.UL], [Ae.SVG, ye.SVG], [Ae.VAR, ye.VAR], [Ae.WBR, ye.WBR], [Ae.XMP, ye.XMP]]);

    function Ce(e) {
      var t;
      return null !== (t = _e.get(e)) && void 0 !== t ? t : ye.UNKNOWN
    }

    const Se = ye, we = {
      [ve.HTML]: new Set([Se.ADDRESS, Se.APPLET, Se.AREA, Se.ARTICLE, Se.ASIDE, Se.BASE, Se.BASEFONT, Se.BGSOUND, Se.BLOCKQUOTE, Se.BODY, Se.BR, Se.BUTTON, Se.CAPTION, Se.CENTER, Se.COL, Se.COLGROUP, Se.DD, Se.DETAILS, Se.DIR, Se.DIV, Se.DL, Se.DT, Se.EMBED, Se.FIELDSET, Se.FIGCAPTION, Se.FIGURE, Se.FOOTER, Se.FORM, Se.FRAME, Se.FRAMESET, Se.H1, Se.H2, Se.H3, Se.H4, Se.H5, Se.H6, Se.HEAD, Se.HEADER, Se.HGROUP, Se.HR, Se.HTML, Se.IFRAME, Se.IMG, Se.INPUT, Se.LI, Se.LINK, Se.LISTING, Se.MAIN, Se.MARQUEE, Se.MENU, Se.META, Se.NAV, Se.NOEMBED, Se.NOFRAMES, Se.NOSCRIPT, Se.OBJECT, Se.OL, Se.P, Se.PARAM, Se.PLAINTEXT, Se.PRE, Se.SCRIPT, Se.SECTION, Se.SELECT, Se.SOURCE, Se.STYLE, Se.SUMMARY, Se.TABLE, Se.TBODY, Se.TD, Se.TEMPLATE, Se.TEXTAREA, Se.TFOOT, Se.TH, Se.THEAD, Se.TITLE, Se.TR, Se.TRACK, Se.UL, Se.WBR, Se.XMP]),
      [ve.MATHML]: new Set([Se.MI, Se.MO, Se.MN, Se.MS, Se.MTEXT, Se.ANNOTATION_XML]),
      [ve.SVG]: new Set([Se.TITLE, Se.FOREIGN_OBJECT, Se.DESC]),
      [ve.XLINK]: new Set,
      [ve.XML]: new Set,
      [ve.XMLNS]: new Set
    };

    function Ie(e) {
      return e === Se.H1 || e === Se.H2 || e === Se.H3 || e === Se.H4 || e === Se.H5 || e === Se.H6
    }

    const Ne = new Set([Ae.STYLE, Ae.SCRIPT, Ae.XMP, Ae.IFRAME, Ae.NOEMBED, Ae.NOFRAMES, Ae.PLAINTEXT]);
    const De = new Map([[128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
    var Le;
    !function (e) {
      e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.NAMED_CHARACTER_REFERENCE = 72] = "NAMED_CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 73] = "AMBIGUOUS_AMPERSAND", e[e.NUMERIC_CHARACTER_REFERENCE = 74] = "NUMERIC_CHARACTER_REFERENCE", e[e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START", e[e.HEXADEMICAL_CHARACTER_REFERENCE = 76] = "HEXADEMICAL_CHARACTER_REFERENCE", e[e.DECIMAL_CHARACTER_REFERENCE = 77] = "DECIMAL_CHARACTER_REFERENCE", e[e.NUMERIC_CHARACTER_REFERENCE_END = 78] = "NUMERIC_CHARACTER_REFERENCE_END"
    }(Le || (Le = {}));
    const Re = {
      DATA: Le.DATA,
      RCDATA: Le.RCDATA,
      RAWTEXT: Le.RAWTEXT,
      SCRIPT_DATA: Le.SCRIPT_DATA,
      PLAINTEXT: Le.PLAINTEXT,
      CDATA_SECTION: Le.CDATA_SECTION
    };

    function Pe(e) {
      return e >= K.DIGIT_0 && e <= K.DIGIT_9
    }

    function Oe(e) {
      return e >= K.LATIN_CAPITAL_A && e <= K.LATIN_CAPITAL_Z
    }

    function Me(e) {
      return function (e) {
        return e >= K.LATIN_SMALL_A && e <= K.LATIN_SMALL_Z
      }(e) || Oe(e)
    }

    function Be(e) {
      return Me(e) || Pe(e)
    }

    function Ue(e) {
      return e >= K.LATIN_CAPITAL_A && e <= K.LATIN_CAPITAL_F
    }

    function Fe(e) {
      return e >= K.LATIN_SMALL_A && e <= K.LATIN_SMALL_F
    }

    function He(e) {
      return e + 32
    }

    function je(e) {
      return e === K.SPACE || e === K.LINE_FEED || e === K.TABULATION || e === K.FORM_FEED
    }

    function Ge(e) {
      return je(e) || e === K.SOLIDUS || e === K.GREATER_THAN_SIGN
    }

    class qe {
      constructor(e, t) {
        this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = Le.DATA, this.returnState = Le.DATA, this.charRefCode = -1, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
          name: "",
          value: ""
        }, this.preprocessor = new re(t), this.currentLocation = this.getCurrentLocation(-1)
      }

      _err(e) {
        var t, n;
        null === (n = (t = this.handler).onParseError) || void 0 === n || n.call(t, this.preprocessor.getError(e))
      }

      getCurrentLocation(e) {
        return this.options.sourceCodeLocationInfo ? {
          startLine: this.preprocessor.line,
          startCol: this.preprocessor.col - e,
          startOffset: this.preprocessor.offset - e,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        } : null
      }

      _runParsingLoop() {
        if (!this.inLoop) {
          for (this.inLoop = !0; this.active && !this.paused;) {
            this.consumedAfterSnapshot = 0;
            const e = this._consume();
            this._ensureHibernation() || this._callState(e)
          }
          this.inLoop = !1
        }
      }

      pause() {
        this.paused = !0
      }

      resume(e) {
        if (!this.paused) throw new Error("Parser was already resumed");
        this.paused = !1, this.inLoop || (this._runParsingLoop(), this.paused || null == e || e())
      }

      write(e, t, n) {
        this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || null == n || n()
      }

      insertHtmlAtCurrentPos(e) {
        this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop()
      }

      _ensureHibernation() {
        return !!this.preprocessor.endOfChunkHit && (this._unconsume(this.consumedAfterSnapshot), this.active = !1, !0)
      }

      _consume() {
        return this.consumedAfterSnapshot++, this.preprocessor.advance()
      }

      _unconsume(e) {
        this.consumedAfterSnapshot -= e, this.preprocessor.retreat(e)
      }

      _reconsumeInState(e, t) {
        this.state = e, this._callState(t)
      }

      _advanceBy(e) {
        this.consumedAfterSnapshot += e;
        for (let t = 0; t < e; t++) this.preprocessor.advance()
      }

      _consumeSequenceIfMatch(e, t) {
        return !!this.preprocessor.startsWith(e, t) && (this._advanceBy(e.length - 1), !0)
      }

      _createStartTagToken() {
        this.currentToken = {
          type: ce.START_TAG,
          tagName: "",
          tagID: ye.UNKNOWN,
          selfClosing: !1,
          ackSelfClosing: !1,
          attrs: [],
          location: this.getCurrentLocation(1)
        }
      }

      _createEndTagToken() {
        this.currentToken = {
          type: ce.END_TAG,
          tagName: "",
          tagID: ye.UNKNOWN,
          selfClosing: !1,
          ackSelfClosing: !1,
          attrs: [],
          location: this.getCurrentLocation(2)
        }
      }

      _createCommentToken(e) {
        this.currentToken = {type: ce.COMMENT, data: "", location: this.getCurrentLocation(e)}
      }

      _createDoctypeToken(e) {
        this.currentToken = {
          type: ce.DOCTYPE,
          name: e,
          forceQuirks: !1,
          publicId: null,
          systemId: null,
          location: this.currentLocation
        }
      }

      _createCharacterToken(e, t) {
        this.currentCharacterToken = {type: e, chars: t, location: this.currentLocation}
      }

      _createAttr(e) {
        this.currentAttr = {name: e, value: ""}, this.currentLocation = this.getCurrentLocation(0)
      }

      _leaveAttrName() {
        var e, t;
        const n = this.currentToken;
        if (null === le(n, this.currentAttr.name)) {
          if (n.attrs.push(this.currentAttr), n.location && this.currentLocation) {
            (null !== (e = (t = n.location).attrs) && void 0 !== e ? e : t.attrs = Object.create(null))[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue()
          }
        } else this._err(oe.duplicateAttribute)
      }

      _leaveAttrValue() {
        this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset)
      }

      prepareToken(e) {
        this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1)
      }

      emitCurrentTagToken() {
        const e = this.currentToken;
        this.prepareToken(e), e.tagID = Ce(e.tagName), e.type === ce.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(oe.endTagWithAttributes), e.selfClosing && this._err(oe.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk()
      }

      emitCurrentComment(e) {
        this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk()
      }

      emitCurrentDoctype(e) {
        this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk()
      }

      _emitCurrentCharacterToken(e) {
        if (this.currentCharacterToken) {
          switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
            case ce.CHARACTER:
              this.handler.onCharacter(this.currentCharacterToken);
              break;
            case ce.NULL_CHARACTER:
              this.handler.onNullCharacter(this.currentCharacterToken);
              break;
            case ce.WHITESPACE_CHARACTER:
              this.handler.onWhitespaceCharacter(this.currentCharacterToken)
          }
          this.currentCharacterToken = null
        }
      }

      _emitEOFToken() {
        const e = this.getCurrentLocation(0);
        e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
          type: ce.EOF,
          location: e
        }), this.active = !1
      }

      _appendCharToCurrentCharacterToken(e, t) {
        if (this.currentCharacterToken) {
          if (this.currentCharacterToken.type === e) return void (this.currentCharacterToken.chars += t);
          this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk()
        }
        this._createCharacterToken(e, t)
      }

      _emitCodePoint(e) {
        const t = je(e) ? ce.WHITESPACE_CHARACTER : e === K.NULL ? ce.NULL_CHARACTER : ce.CHARACTER;
        this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e))
      }

      _emitChars(e) {
        this._appendCharToCurrentCharacterToken(ce.CHARACTER, e)
      }

      _matchNamedCharacterReference(e) {
        let t = null, n = 0, a = !1;
        for (let s = 0, o = pe[0]; s >= 0 && (s = Ee(pe, o, s + 1, e), !(s < 0)); e = this._consume()) {
          n += 1, o = pe[s];
          const r = o & be.VALUE_LENGTH;
          if (r) {
            const o = (r >> 14) - 1;
            if (e !== K.SEMICOLON && this._isCharacterReferenceInAttribute() && ((i = this.preprocessor.peek(1)) === K.EQUALS_SIGN || Be(i)) ? (t = [K.AMPERSAND], s += o) : (t = 0 === o ? [pe[s] & ~be.VALUE_LENGTH] : 1 === o ? [pe[++s]] : [pe[++s], pe[++s]], n = 0, a = e !== K.SEMICOLON), 0 === o) {
              this._consume();
              break
            }
          }
        }
        var i;
        return this._unconsume(n), a && !this.preprocessor.endOfChunkHit && this._err(oe.missingSemicolonAfterCharacterReference), this._unconsume(1), t
      }

      _isCharacterReferenceInAttribute() {
        return this.returnState === Le.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === Le.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === Le.ATTRIBUTE_VALUE_UNQUOTED
      }

      _flushCodePointConsumedAsCharacterReference(e) {
        this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e)
      }

      _callState(e) {
        switch (this.state) {
          case Le.DATA:
            this._stateData(e);
            break;
          case Le.RCDATA:
            this._stateRcdata(e);
            break;
          case Le.RAWTEXT:
            this._stateRawtext(e);
            break;
          case Le.SCRIPT_DATA:
            this._stateScriptData(e);
            break;
          case Le.PLAINTEXT:
            this._statePlaintext(e);
            break;
          case Le.TAG_OPEN:
            this._stateTagOpen(e);
            break;
          case Le.END_TAG_OPEN:
            this._stateEndTagOpen(e);
            break;
          case Le.TAG_NAME:
            this._stateTagName(e);
            break;
          case Le.RCDATA_LESS_THAN_SIGN:
            this._stateRcdataLessThanSign(e);
            break;
          case Le.RCDATA_END_TAG_OPEN:
            this._stateRcdataEndTagOpen(e);
            break;
          case Le.RCDATA_END_TAG_NAME:
            this._stateRcdataEndTagName(e);
            break;
          case Le.RAWTEXT_LESS_THAN_SIGN:
            this._stateRawtextLessThanSign(e);
            break;
          case Le.RAWTEXT_END_TAG_OPEN:
            this._stateRawtextEndTagOpen(e);
            break;
          case Le.RAWTEXT_END_TAG_NAME:
            this._stateRawtextEndTagName(e);
            break;
          case Le.SCRIPT_DATA_LESS_THAN_SIGN:
            this._stateScriptDataLessThanSign(e);
            break;
          case Le.SCRIPT_DATA_END_TAG_OPEN:
            this._stateScriptDataEndTagOpen(e);
            break;
          case Le.SCRIPT_DATA_END_TAG_NAME:
            this._stateScriptDataEndTagName(e);
            break;
          case Le.SCRIPT_DATA_ESCAPE_START:
            this._stateScriptDataEscapeStart(e);
            break;
          case Le.SCRIPT_DATA_ESCAPE_START_DASH:
            this._stateScriptDataEscapeStartDash(e);
            break;
          case Le.SCRIPT_DATA_ESCAPED:
            this._stateScriptDataEscaped(e);
            break;
          case Le.SCRIPT_DATA_ESCAPED_DASH:
            this._stateScriptDataEscapedDash(e);
            break;
          case Le.SCRIPT_DATA_ESCAPED_DASH_DASH:
            this._stateScriptDataEscapedDashDash(e);
            break;
          case Le.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
            this._stateScriptDataEscapedLessThanSign(e);
            break;
          case Le.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
            this._stateScriptDataEscapedEndTagOpen(e);
            break;
          case Le.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
            this._stateScriptDataEscapedEndTagName(e);
            break;
          case Le.SCRIPT_DATA_DOUBLE_ESCAPE_START:
            this._stateScriptDataDoubleEscapeStart(e);
            break;
          case Le.SCRIPT_DATA_DOUBLE_ESCAPED:
            this._stateScriptDataDoubleEscaped(e);
            break;
          case Le.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
            this._stateScriptDataDoubleEscapedDash(e);
            break;
          case Le.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
            this._stateScriptDataDoubleEscapedDashDash(e);
            break;
          case Le.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
            this._stateScriptDataDoubleEscapedLessThanSign(e);
            break;
          case Le.SCRIPT_DATA_DOUBLE_ESCAPE_END:
            this._stateScriptDataDoubleEscapeEnd(e);
            break;
          case Le.BEFORE_ATTRIBUTE_NAME:
            this._stateBeforeAttributeName(e);
            break;
          case Le.ATTRIBUTE_NAME:
            this._stateAttributeName(e);
            break;
          case Le.AFTER_ATTRIBUTE_NAME:
            this._stateAfterAttributeName(e);
            break;
          case Le.BEFORE_ATTRIBUTE_VALUE:
            this._stateBeforeAttributeValue(e);
            break;
          case Le.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
            this._stateAttributeValueDoubleQuoted(e);
            break;
          case Le.ATTRIBUTE_VALUE_SINGLE_QUOTED:
            this._stateAttributeValueSingleQuoted(e);
            break;
          case Le.ATTRIBUTE_VALUE_UNQUOTED:
            this._stateAttributeValueUnquoted(e);
            break;
          case Le.AFTER_ATTRIBUTE_VALUE_QUOTED:
            this._stateAfterAttributeValueQuoted(e);
            break;
          case Le.SELF_CLOSING_START_TAG:
            this._stateSelfClosingStartTag(e);
            break;
          case Le.BOGUS_COMMENT:
            this._stateBogusComment(e);
            break;
          case Le.MARKUP_DECLARATION_OPEN:
            this._stateMarkupDeclarationOpen(e);
            break;
          case Le.COMMENT_START:
            this._stateCommentStart(e);
            break;
          case Le.COMMENT_START_DASH:
            this._stateCommentStartDash(e);
            break;
          case Le.COMMENT:
            this._stateComment(e);
            break;
          case Le.COMMENT_LESS_THAN_SIGN:
            this._stateCommentLessThanSign(e);
            break;
          case Le.COMMENT_LESS_THAN_SIGN_BANG:
            this._stateCommentLessThanSignBang(e);
            break;
          case Le.COMMENT_LESS_THAN_SIGN_BANG_DASH:
            this._stateCommentLessThanSignBangDash(e);
            break;
          case Le.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
            this._stateCommentLessThanSignBangDashDash(e);
            break;
          case Le.COMMENT_END_DASH:
            this._stateCommentEndDash(e);
            break;
          case Le.COMMENT_END:
            this._stateCommentEnd(e);
            break;
          case Le.COMMENT_END_BANG:
            this._stateCommentEndBang(e);
            break;
          case Le.DOCTYPE:
            this._stateDoctype(e);
            break;
          case Le.BEFORE_DOCTYPE_NAME:
            this._stateBeforeDoctypeName(e);
            break;
          case Le.DOCTYPE_NAME:
            this._stateDoctypeName(e);
            break;
          case Le.AFTER_DOCTYPE_NAME:
            this._stateAfterDoctypeName(e);
            break;
          case Le.AFTER_DOCTYPE_PUBLIC_KEYWORD:
            this._stateAfterDoctypePublicKeyword(e);
            break;
          case Le.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
            this._stateBeforeDoctypePublicIdentifier(e);
            break;
          case Le.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
            this._stateDoctypePublicIdentifierDoubleQuoted(e);
            break;
          case Le.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
            this._stateDoctypePublicIdentifierSingleQuoted(e);
            break;
          case Le.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
            this._stateAfterDoctypePublicIdentifier(e);
            break;
          case Le.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
            this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
            break;
          case Le.AFTER_DOCTYPE_SYSTEM_KEYWORD:
            this._stateAfterDoctypeSystemKeyword(e);
            break;
          case Le.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
            this._stateBeforeDoctypeSystemIdentifier(e);
            break;
          case Le.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
            this._stateDoctypeSystemIdentifierDoubleQuoted(e);
            break;
          case Le.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
            this._stateDoctypeSystemIdentifierSingleQuoted(e);
            break;
          case Le.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
            this._stateAfterDoctypeSystemIdentifier(e);
            break;
          case Le.BOGUS_DOCTYPE:
            this._stateBogusDoctype(e);
            break;
          case Le.CDATA_SECTION:
            this._stateCdataSection(e);
            break;
          case Le.CDATA_SECTION_BRACKET:
            this._stateCdataSectionBracket(e);
            break;
          case Le.CDATA_SECTION_END:
            this._stateCdataSectionEnd(e);
            break;
          case Le.CHARACTER_REFERENCE:
            this._stateCharacterReference(e);
            break;
          case Le.NAMED_CHARACTER_REFERENCE:
            this._stateNamedCharacterReference(e);
            break;
          case Le.AMBIGUOUS_AMPERSAND:
            this._stateAmbiguousAmpersand(e);
            break;
          case Le.NUMERIC_CHARACTER_REFERENCE:
            this._stateNumericCharacterReference(e);
            break;
          case Le.HEXADEMICAL_CHARACTER_REFERENCE_START:
            this._stateHexademicalCharacterReferenceStart(e);
            break;
          case Le.HEXADEMICAL_CHARACTER_REFERENCE:
            this._stateHexademicalCharacterReference(e);
            break;
          case Le.DECIMAL_CHARACTER_REFERENCE:
            this._stateDecimalCharacterReference(e);
            break;
          case Le.NUMERIC_CHARACTER_REFERENCE_END:
            this._stateNumericCharacterReferenceEnd(e);
            break;
          default:
            throw new Error("Unknown state")
        }
      }

      _stateData(e) {
        switch (e) {
          case K.LESS_THAN_SIGN:
            this.state = Le.TAG_OPEN;
            break;
          case K.AMPERSAND:
            this.returnState = Le.DATA, this.state = Le.CHARACTER_REFERENCE;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this._emitCodePoint(e);
            break;
          case K.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e)
        }
      }

      _stateRcdata(e) {
        switch (e) {
          case K.AMPERSAND:
            this.returnState = Le.RCDATA, this.state = Le.CHARACTER_REFERENCE;
            break;
          case K.LESS_THAN_SIGN:
            this.state = Le.RCDATA_LESS_THAN_SIGN;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this._emitChars(X);
            break;
          case K.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e)
        }
      }

      _stateRawtext(e) {
        switch (e) {
          case K.LESS_THAN_SIGN:
            this.state = Le.RAWTEXT_LESS_THAN_SIGN;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this._emitChars(X);
            break;
          case K.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e)
        }
      }

      _stateScriptData(e) {
        switch (e) {
          case K.LESS_THAN_SIGN:
            this.state = Le.SCRIPT_DATA_LESS_THAN_SIGN;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this._emitChars(X);
            break;
          case K.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e)
        }
      }

      _statePlaintext(e) {
        switch (e) {
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this._emitChars(X);
            break;
          case K.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e)
        }
      }

      _stateTagOpen(e) {
        if (Me(e)) this._createStartTagToken(), this.state = Le.TAG_NAME, this._stateTagName(e); else switch (e) {
          case K.EXCLAMATION_MARK:
            this.state = Le.MARKUP_DECLARATION_OPEN;
            break;
          case K.SOLIDUS:
            this.state = Le.END_TAG_OPEN;
            break;
          case K.QUESTION_MARK:
            this._err(oe.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = Le.BOGUS_COMMENT, this._stateBogusComment(e);
            break;
          case K.EOF:
            this._err(oe.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
            break;
          default:
            this._err(oe.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = Le.DATA, this._stateData(e)
        }
      }

      _stateEndTagOpen(e) {
        if (Me(e)) this._createEndTagToken(), this.state = Le.TAG_NAME, this._stateTagName(e); else switch (e) {
          case K.GREATER_THAN_SIGN:
            this._err(oe.missingEndTagName), this.state = Le.DATA;
            break;
          case K.EOF:
            this._err(oe.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
            break;
          default:
            this._err(oe.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = Le.BOGUS_COMMENT, this._stateBogusComment(e)
        }
      }

      _stateTagName(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            this.state = Le.BEFORE_ATTRIBUTE_NAME;
            break;
          case K.SOLIDUS:
            this.state = Le.SELF_CLOSING_START_TAG;
            break;
          case K.GREATER_THAN_SIGN:
            this.state = Le.DATA, this.emitCurrentTagToken();
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), t.tagName += X;
            break;
          case K.EOF:
            this._err(oe.eofInTag), this._emitEOFToken();
            break;
          default:
            t.tagName += String.fromCodePoint(Oe(e) ? He(e) : e)
        }
      }

      _stateRcdataLessThanSign(e) {
        e === K.SOLIDUS ? this.state = Le.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = Le.RCDATA, this._stateRcdata(e))
      }

      _stateRcdataEndTagOpen(e) {
        Me(e) ? (this.state = Le.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = Le.RCDATA, this._stateRcdata(e))
      }

      handleSpecialEndTag(e) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
        this._createEndTagToken();
        this.currentToken.tagName = this.lastStartTagName;
        switch (this.preprocessor.peek(this.lastStartTagName.length)) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            return this._advanceBy(this.lastStartTagName.length), this.state = Le.BEFORE_ATTRIBUTE_NAME, !1;
          case K.SOLIDUS:
            return this._advanceBy(this.lastStartTagName.length), this.state = Le.SELF_CLOSING_START_TAG, !1;
          case K.GREATER_THAN_SIGN:
            return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = Le.DATA, !1;
          default:
            return !this._ensureHibernation()
        }
      }

      _stateRcdataEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Le.RCDATA, this._stateRcdata(e))
      }

      _stateRawtextLessThanSign(e) {
        e === K.SOLIDUS ? this.state = Le.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = Le.RAWTEXT, this._stateRawtext(e))
      }

      _stateRawtextEndTagOpen(e) {
        Me(e) ? (this.state = Le.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = Le.RAWTEXT, this._stateRawtext(e))
      }

      _stateRawtextEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Le.RAWTEXT, this._stateRawtext(e))
      }

      _stateScriptDataLessThanSign(e) {
        switch (e) {
          case K.SOLIDUS:
            this.state = Le.SCRIPT_DATA_END_TAG_OPEN;
            break;
          case K.EXCLAMATION_MARK:
            this.state = Le.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
            break;
          default:
            this._emitChars("<"), this.state = Le.SCRIPT_DATA, this._stateScriptData(e)
        }
      }

      _stateScriptDataEndTagOpen(e) {
        Me(e) ? (this.state = Le.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = Le.SCRIPT_DATA, this._stateScriptData(e))
      }

      _stateScriptDataEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Le.SCRIPT_DATA, this._stateScriptData(e))
      }

      _stateScriptDataEscapeStart(e) {
        e === K.HYPHEN_MINUS ? (this.state = Le.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = Le.SCRIPT_DATA, this._stateScriptData(e))
      }

      _stateScriptDataEscapeStartDash(e) {
        e === K.HYPHEN_MINUS ? (this.state = Le.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = Le.SCRIPT_DATA, this._stateScriptData(e))
      }

      _stateScriptDataEscaped(e) {
        switch (e) {
          case K.HYPHEN_MINUS:
            this.state = Le.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
            break;
          case K.LESS_THAN_SIGN:
            this.state = Le.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this._emitChars(X);
            break;
          case K.EOF:
            this._err(oe.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e)
        }
      }

      _stateScriptDataEscapedDash(e) {
        switch (e) {
          case K.HYPHEN_MINUS:
            this.state = Le.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
            break;
          case K.LESS_THAN_SIGN:
            this.state = Le.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this.state = Le.SCRIPT_DATA_ESCAPED, this._emitChars(X);
            break;
          case K.EOF:
            this._err(oe.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            this.state = Le.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e)
        }
      }

      _stateScriptDataEscapedDashDash(e) {
        switch (e) {
          case K.HYPHEN_MINUS:
            this._emitChars("-");
            break;
          case K.LESS_THAN_SIGN:
            this.state = Le.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          case K.GREATER_THAN_SIGN:
            this.state = Le.SCRIPT_DATA, this._emitChars(">");
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this.state = Le.SCRIPT_DATA_ESCAPED, this._emitChars(X);
            break;
          case K.EOF:
            this._err(oe.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            this.state = Le.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e)
        }
      }

      _stateScriptDataEscapedLessThanSign(e) {
        e === K.SOLIDUS ? this.state = Le.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : Me(e) ? (this._emitChars("<"), this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = Le.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e))
      }

      _stateScriptDataEscapedEndTagOpen(e) {
        Me(e) ? (this.state = Le.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = Le.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e))
      }

      _stateScriptDataEscapedEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Le.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e))
      }

      _stateScriptDataDoubleEscapeStart(e) {
        if (this.preprocessor.startsWith(ee, !1) && Ge(this.preprocessor.peek(ee.length))) {
          this._emitCodePoint(e);
          for (let e = 0; e < ee.length; e++) this._emitCodePoint(this._consume());
          this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED
        } else this._ensureHibernation() || (this.state = Le.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e))
      }

      _stateScriptDataDoubleEscaped(e) {
        switch (e) {
          case K.HYPHEN_MINUS:
            this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
            break;
          case K.LESS_THAN_SIGN:
            this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this._emitChars(X);
            break;
          case K.EOF:
            this._err(oe.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e)
        }
      }

      _stateScriptDataDoubleEscapedDash(e) {
        switch (e) {
          case K.HYPHEN_MINUS:
            this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
            break;
          case K.LESS_THAN_SIGN:
            this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(X);
            break;
          case K.EOF:
            this._err(oe.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e)
        }
      }

      _stateScriptDataDoubleEscapedDashDash(e) {
        switch (e) {
          case K.HYPHEN_MINUS:
            this._emitChars("-");
            break;
          case K.LESS_THAN_SIGN:
            this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
            break;
          case K.GREATER_THAN_SIGN:
            this.state = Le.SCRIPT_DATA, this._emitChars(">");
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(X);
            break;
          case K.EOF:
            this._err(oe.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e)
        }
      }

      _stateScriptDataDoubleEscapedLessThanSign(e) {
        e === K.SOLIDUS ? (this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e))
      }

      _stateScriptDataDoubleEscapeEnd(e) {
        if (this.preprocessor.startsWith(ee, !1) && Ge(this.preprocessor.peek(ee.length))) {
          this._emitCodePoint(e);
          for (let e = 0; e < ee.length; e++) this._emitCodePoint(this._consume());
          this.state = Le.SCRIPT_DATA_ESCAPED
        } else this._ensureHibernation() || (this.state = Le.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e))
      }

      _stateBeforeAttributeName(e) {
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.SOLIDUS:
          case K.GREATER_THAN_SIGN:
          case K.EOF:
            this.state = Le.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
            break;
          case K.EQUALS_SIGN:
            this._err(oe.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = Le.ATTRIBUTE_NAME;
            break;
          default:
            this._createAttr(""), this.state = Le.ATTRIBUTE_NAME, this._stateAttributeName(e)
        }
      }

      _stateAttributeName(e) {
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
          case K.SOLIDUS:
          case K.GREATER_THAN_SIGN:
          case K.EOF:
            this._leaveAttrName(), this.state = Le.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
            break;
          case K.EQUALS_SIGN:
            this._leaveAttrName(), this.state = Le.BEFORE_ATTRIBUTE_VALUE;
            break;
          case K.QUOTATION_MARK:
          case K.APOSTROPHE:
          case K.LESS_THAN_SIGN:
            this._err(oe.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this.currentAttr.name += X;
            break;
          default:
            this.currentAttr.name += String.fromCodePoint(Oe(e) ? He(e) : e)
        }
      }

      _stateAfterAttributeName(e) {
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.SOLIDUS:
            this.state = Le.SELF_CLOSING_START_TAG;
            break;
          case K.EQUALS_SIGN:
            this.state = Le.BEFORE_ATTRIBUTE_VALUE;
            break;
          case K.GREATER_THAN_SIGN:
            this.state = Le.DATA, this.emitCurrentTagToken();
            break;
          case K.EOF:
            this._err(oe.eofInTag), this._emitEOFToken();
            break;
          default:
            this._createAttr(""), this.state = Le.ATTRIBUTE_NAME, this._stateAttributeName(e)
        }
      }

      _stateBeforeAttributeValue(e) {
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.QUOTATION_MARK:
            this.state = Le.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            break;
          case K.APOSTROPHE:
            this.state = Le.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.missingAttributeValue), this.state = Le.DATA, this.emitCurrentTagToken();
            break;
          default:
            this.state = Le.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e)
        }
      }

      _stateAttributeValueDoubleQuoted(e) {
        switch (e) {
          case K.QUOTATION_MARK:
            this.state = Le.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          case K.AMPERSAND:
            this.returnState = Le.ATTRIBUTE_VALUE_DOUBLE_QUOTED, this.state = Le.CHARACTER_REFERENCE;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this.currentAttr.value += X;
            break;
          case K.EOF:
            this._err(oe.eofInTag), this._emitEOFToken();
            break;
          default:
            this.currentAttr.value += String.fromCodePoint(e)
        }
      }

      _stateAttributeValueSingleQuoted(e) {
        switch (e) {
          case K.APOSTROPHE:
            this.state = Le.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          case K.AMPERSAND:
            this.returnState = Le.ATTRIBUTE_VALUE_SINGLE_QUOTED, this.state = Le.CHARACTER_REFERENCE;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this.currentAttr.value += X;
            break;
          case K.EOF:
            this._err(oe.eofInTag), this._emitEOFToken();
            break;
          default:
            this.currentAttr.value += String.fromCodePoint(e)
        }
      }

      _stateAttributeValueUnquoted(e) {
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            this._leaveAttrValue(), this.state = Le.BEFORE_ATTRIBUTE_NAME;
            break;
          case K.AMPERSAND:
            this.returnState = Le.ATTRIBUTE_VALUE_UNQUOTED, this.state = Le.CHARACTER_REFERENCE;
            break;
          case K.GREATER_THAN_SIGN:
            this._leaveAttrValue(), this.state = Le.DATA, this.emitCurrentTagToken();
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this.currentAttr.value += X;
            break;
          case K.QUOTATION_MARK:
          case K.APOSTROPHE:
          case K.LESS_THAN_SIGN:
          case K.EQUALS_SIGN:
          case K.GRAVE_ACCENT:
            this._err(oe.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
            break;
          case K.EOF:
            this._err(oe.eofInTag), this._emitEOFToken();
            break;
          default:
            this.currentAttr.value += String.fromCodePoint(e)
        }
      }

      _stateAfterAttributeValueQuoted(e) {
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            this._leaveAttrValue(), this.state = Le.BEFORE_ATTRIBUTE_NAME;
            break;
          case K.SOLIDUS:
            this._leaveAttrValue(), this.state = Le.SELF_CLOSING_START_TAG;
            break;
          case K.GREATER_THAN_SIGN:
            this._leaveAttrValue(), this.state = Le.DATA, this.emitCurrentTagToken();
            break;
          case K.EOF:
            this._err(oe.eofInTag), this._emitEOFToken();
            break;
          default:
            this._err(oe.missingWhitespaceBetweenAttributes), this.state = Le.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e)
        }
      }

      _stateSelfClosingStartTag(e) {
        switch (e) {
          case K.GREATER_THAN_SIGN:
            this.currentToken.selfClosing = !0, this.state = Le.DATA, this.emitCurrentTagToken();
            break;
          case K.EOF:
            this._err(oe.eofInTag), this._emitEOFToken();
            break;
          default:
            this._err(oe.unexpectedSolidusInTag), this.state = Le.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e)
        }
      }

      _stateBogusComment(e) {
        const t = this.currentToken;
        switch (e) {
          case K.GREATER_THAN_SIGN:
            this.state = Le.DATA, this.emitCurrentComment(t);
            break;
          case K.EOF:
            this.emitCurrentComment(t), this._emitEOFToken();
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), t.data += X;
            break;
          default:
            t.data += String.fromCodePoint(e)
        }
      }

      _stateMarkupDeclarationOpen(e) {
        this._consumeSequenceIfMatch($, !0) ? (this._createCommentToken($.length + 1), this.state = Le.COMMENT_START) : this._consumeSequenceIfMatch(Z, !1) ? (this.currentLocation = this.getCurrentLocation(Z.length + 1), this.state = Le.DOCTYPE) : this._consumeSequenceIfMatch(J, !0) ? this.inForeignNode ? this.state = Le.CDATA_SECTION : (this._err(oe.cdataInHtmlContent), this._createCommentToken(J.length + 1), this.currentToken.data = "[CDATA[", this.state = Le.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(oe.incorrectlyOpenedComment), this._createCommentToken(2), this.state = Le.BOGUS_COMMENT, this._stateBogusComment(e))
      }

      _stateCommentStart(e) {
        switch (e) {
          case K.HYPHEN_MINUS:
            this.state = Le.COMMENT_START_DASH;
            break;
          case K.GREATER_THAN_SIGN: {
            this._err(oe.abruptClosingOfEmptyComment), this.state = Le.DATA;
            const e = this.currentToken;
            this.emitCurrentComment(e);
            break
          }
          default:
            this.state = Le.COMMENT, this._stateComment(e)
        }
      }

      _stateCommentStartDash(e) {
        const t = this.currentToken;
        switch (e) {
          case K.HYPHEN_MINUS:
            this.state = Le.COMMENT_END;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.abruptClosingOfEmptyComment), this.state = Le.DATA, this.emitCurrentComment(t);
            break;
          case K.EOF:
            this._err(oe.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
            break;
          default:
            t.data += "-", this.state = Le.COMMENT, this._stateComment(e)
        }
      }

      _stateComment(e) {
        const t = this.currentToken;
        switch (e) {
          case K.HYPHEN_MINUS:
            this.state = Le.COMMENT_END_DASH;
            break;
          case K.LESS_THAN_SIGN:
            t.data += "<", this.state = Le.COMMENT_LESS_THAN_SIGN;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), t.data += X;
            break;
          case K.EOF:
            this._err(oe.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
            break;
          default:
            t.data += String.fromCodePoint(e)
        }
      }

      _stateCommentLessThanSign(e) {
        const t = this.currentToken;
        switch (e) {
          case K.EXCLAMATION_MARK:
            t.data += "!", this.state = Le.COMMENT_LESS_THAN_SIGN_BANG;
            break;
          case K.LESS_THAN_SIGN:
            t.data += "<";
            break;
          default:
            this.state = Le.COMMENT, this._stateComment(e)
        }
      }

      _stateCommentLessThanSignBang(e) {
        e === K.HYPHEN_MINUS ? this.state = Le.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = Le.COMMENT, this._stateComment(e))
      }

      _stateCommentLessThanSignBangDash(e) {
        e === K.HYPHEN_MINUS ? this.state = Le.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = Le.COMMENT_END_DASH, this._stateCommentEndDash(e))
      }

      _stateCommentLessThanSignBangDashDash(e) {
        e !== K.GREATER_THAN_SIGN && e !== K.EOF && this._err(oe.nestedComment), this.state = Le.COMMENT_END, this._stateCommentEnd(e)
      }

      _stateCommentEndDash(e) {
        const t = this.currentToken;
        switch (e) {
          case K.HYPHEN_MINUS:
            this.state = Le.COMMENT_END;
            break;
          case K.EOF:
            this._err(oe.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
            break;
          default:
            t.data += "-", this.state = Le.COMMENT, this._stateComment(e)
        }
      }

      _stateCommentEnd(e) {
        const t = this.currentToken;
        switch (e) {
          case K.GREATER_THAN_SIGN:
            this.state = Le.DATA, this.emitCurrentComment(t);
            break;
          case K.EXCLAMATION_MARK:
            this.state = Le.COMMENT_END_BANG;
            break;
          case K.HYPHEN_MINUS:
            t.data += "-";
            break;
          case K.EOF:
            this._err(oe.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
            break;
          default:
            t.data += "--", this.state = Le.COMMENT, this._stateComment(e)
        }
      }

      _stateCommentEndBang(e) {
        const t = this.currentToken;
        switch (e) {
          case K.HYPHEN_MINUS:
            t.data += "--!", this.state = Le.COMMENT_END_DASH;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.incorrectlyClosedComment), this.state = Le.DATA, this.emitCurrentComment(t);
            break;
          case K.EOF:
            this._err(oe.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
            break;
          default:
            t.data += "--!", this.state = Le.COMMENT, this._stateComment(e)
        }
      }

      _stateDoctype(e) {
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            this.state = Le.BEFORE_DOCTYPE_NAME;
            break;
          case K.GREATER_THAN_SIGN:
            this.state = Le.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
            break;
          case K.EOF: {
            this._err(oe.eofInDoctype), this._createDoctypeToken(null);
            const e = this.currentToken;
            e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
            break
          }
          default:
            this._err(oe.missingWhitespaceBeforeDoctypeName), this.state = Le.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e)
        }
      }

      _stateBeforeDoctypeName(e) {
        if (Oe(e)) this._createDoctypeToken(String.fromCharCode(He(e))), this.state = Le.DOCTYPE_NAME; else switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), this._createDoctypeToken(X), this.state = Le.DOCTYPE_NAME;
            break;
          case K.GREATER_THAN_SIGN: {
            this._err(oe.missingDoctypeName), this._createDoctypeToken(null);
            const e = this.currentToken;
            e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Le.DATA;
            break
          }
          case K.EOF: {
            this._err(oe.eofInDoctype), this._createDoctypeToken(null);
            const e = this.currentToken;
            e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
            break
          }
          default:
            this._createDoctypeToken(String.fromCodePoint(e)), this.state = Le.DOCTYPE_NAME
        }
      }

      _stateDoctypeName(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            this.state = Le.AFTER_DOCTYPE_NAME;
            break;
          case K.GREATER_THAN_SIGN:
            this.state = Le.DATA, this.emitCurrentDoctype(t);
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), t.name += X;
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            t.name += String.fromCodePoint(Oe(e) ? He(e) : e)
        }
      }

      _stateAfterDoctypeName(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.GREATER_THAN_SIGN:
            this.state = Le.DATA, this.emitCurrentDoctype(t);
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            this._consumeSequenceIfMatch(te, !1) ? this.state = Le.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(ne, !1) ? this.state = Le.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(oe.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = Le.BOGUS_DOCTYPE, this._stateBogusDoctype(e))
        }
      }

      _stateAfterDoctypePublicKeyword(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            this.state = Le.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          case K.QUOTATION_MARK:
            this._err(oe.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Le.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          case K.APOSTROPHE:
            this._err(oe.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Le.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Le.DATA, this.emitCurrentDoctype(t);
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            this._err(oe.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Le.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
        }
      }

      _stateBeforeDoctypePublicIdentifier(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.QUOTATION_MARK:
            t.publicId = "", this.state = Le.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          case K.APOSTROPHE:
            t.publicId = "", this.state = Le.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Le.DATA, this.emitCurrentDoctype(t);
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            this._err(oe.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Le.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
        }
      }

      _stateDoctypePublicIdentifierDoubleQuoted(e) {
        const t = this.currentToken;
        switch (e) {
          case K.QUOTATION_MARK:
            this.state = Le.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), t.publicId += X;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Le.DATA;
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            t.publicId += String.fromCodePoint(e)
        }
      }

      _stateDoctypePublicIdentifierSingleQuoted(e) {
        const t = this.currentToken;
        switch (e) {
          case K.APOSTROPHE:
            this.state = Le.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), t.publicId += X;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Le.DATA;
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            t.publicId += String.fromCodePoint(e)
        }
      }

      _stateAfterDoctypePublicIdentifier(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            this.state = Le.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
            break;
          case K.GREATER_THAN_SIGN:
            this.state = Le.DATA, this.emitCurrentDoctype(t);
            break;
          case K.QUOTATION_MARK:
            this._err(oe.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Le.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          case K.APOSTROPHE:
            this._err(oe.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Le.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            this._err(oe.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Le.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
        }
      }

      _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.GREATER_THAN_SIGN:
            this.emitCurrentDoctype(t), this.state = Le.DATA;
            break;
          case K.QUOTATION_MARK:
            t.systemId = "", this.state = Le.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          case K.APOSTROPHE:
            t.systemId = "", this.state = Le.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            this._err(oe.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Le.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
        }
      }

      _stateAfterDoctypeSystemKeyword(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            this.state = Le.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          case K.QUOTATION_MARK:
            this._err(oe.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Le.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          case K.APOSTROPHE:
            this._err(oe.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Le.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Le.DATA, this.emitCurrentDoctype(t);
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            this._err(oe.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Le.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
        }
      }

      _stateBeforeDoctypeSystemIdentifier(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.QUOTATION_MARK:
            t.systemId = "", this.state = Le.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          case K.APOSTROPHE:
            t.systemId = "", this.state = Le.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Le.DATA, this.emitCurrentDoctype(t);
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            this._err(oe.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Le.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
        }
      }

      _stateDoctypeSystemIdentifierDoubleQuoted(e) {
        const t = this.currentToken;
        switch (e) {
          case K.QUOTATION_MARK:
            this.state = Le.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), t.systemId += X;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Le.DATA;
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            t.systemId += String.fromCodePoint(e)
        }
      }

      _stateDoctypeSystemIdentifierSingleQuoted(e) {
        const t = this.currentToken;
        switch (e) {
          case K.APOSTROPHE:
            this.state = Le.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter), t.systemId += X;
            break;
          case K.GREATER_THAN_SIGN:
            this._err(oe.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Le.DATA;
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            t.systemId += String.fromCodePoint(e)
        }
      }

      _stateAfterDoctypeSystemIdentifier(e) {
        const t = this.currentToken;
        switch (e) {
          case K.SPACE:
          case K.LINE_FEED:
          case K.TABULATION:
          case K.FORM_FEED:
            break;
          case K.GREATER_THAN_SIGN:
            this.emitCurrentDoctype(t), this.state = Le.DATA;
            break;
          case K.EOF:
            this._err(oe.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
            break;
          default:
            this._err(oe.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = Le.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
        }
      }

      _stateBogusDoctype(e) {
        const t = this.currentToken;
        switch (e) {
          case K.GREATER_THAN_SIGN:
            this.emitCurrentDoctype(t), this.state = Le.DATA;
            break;
          case K.NULL:
            this._err(oe.unexpectedNullCharacter);
            break;
          case K.EOF:
            this.emitCurrentDoctype(t), this._emitEOFToken()
        }
      }

      _stateCdataSection(e) {
        switch (e) {
          case K.RIGHT_SQUARE_BRACKET:
            this.state = Le.CDATA_SECTION_BRACKET;
            break;
          case K.EOF:
            this._err(oe.eofInCdata), this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e)
        }
      }

      _stateCdataSectionBracket(e) {
        e === K.RIGHT_SQUARE_BRACKET ? this.state = Le.CDATA_SECTION_END : (this._emitChars("]"), this.state = Le.CDATA_SECTION, this._stateCdataSection(e))
      }

      _stateCdataSectionEnd(e) {
        switch (e) {
          case K.GREATER_THAN_SIGN:
            this.state = Le.DATA;
            break;
          case K.RIGHT_SQUARE_BRACKET:
            this._emitChars("]");
            break;
          default:
            this._emitChars("]]"), this.state = Le.CDATA_SECTION, this._stateCdataSection(e)
        }
      }

      _stateCharacterReference(e) {
        e === K.NUMBER_SIGN ? this.state = Le.NUMERIC_CHARACTER_REFERENCE : Be(e) ? (this.state = Le.NAMED_CHARACTER_REFERENCE, this._stateNamedCharacterReference(e)) : (this._flushCodePointConsumedAsCharacterReference(K.AMPERSAND), this._reconsumeInState(this.returnState, e))
      }

      _stateNamedCharacterReference(e) {
        const t = this._matchNamedCharacterReference(e);
        if (this._ensureHibernation()) ; else if (t) {
          for (let e = 0; e < t.length; e++) this._flushCodePointConsumedAsCharacterReference(t[e]);
          this.state = this.returnState
        } else this._flushCodePointConsumedAsCharacterReference(K.AMPERSAND), this.state = Le.AMBIGUOUS_AMPERSAND
      }

      _stateAmbiguousAmpersand(e) {
        Be(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === K.SEMICOLON && this._err(oe.unknownNamedCharacterReference), this._reconsumeInState(this.returnState, e))
      }

      _stateNumericCharacterReference(e) {
        this.charRefCode = 0, e === K.LATIN_SMALL_X || e === K.LATIN_CAPITAL_X ? this.state = Le.HEXADEMICAL_CHARACTER_REFERENCE_START : Pe(e) ? (this.state = Le.DECIMAL_CHARACTER_REFERENCE, this._stateDecimalCharacterReference(e)) : (this._err(oe.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(K.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(K.NUMBER_SIGN), this._reconsumeInState(this.returnState, e))
      }

      _stateHexademicalCharacterReferenceStart(e) {
        !function (e) {
          return Pe(e) || Ue(e) || Fe(e)
        }(e) ? (this._err(oe.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(K.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(K.NUMBER_SIGN), this._unconsume(2), this.state = this.returnState) : (this.state = Le.HEXADEMICAL_CHARACTER_REFERENCE, this._stateHexademicalCharacterReference(e))
      }

      _stateHexademicalCharacterReference(e) {
        Ue(e) ? this.charRefCode = 16 * this.charRefCode + e - 55 : Fe(e) ? this.charRefCode = 16 * this.charRefCode + e - 87 : Pe(e) ? this.charRefCode = 16 * this.charRefCode + e - 48 : e === K.SEMICOLON ? this.state = Le.NUMERIC_CHARACTER_REFERENCE_END : (this._err(oe.missingSemicolonAfterCharacterReference), this.state = Le.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(e))
      }

      _stateDecimalCharacterReference(e) {
        Pe(e) ? this.charRefCode = 10 * this.charRefCode + e - 48 : e === K.SEMICOLON ? this.state = Le.NUMERIC_CHARACTER_REFERENCE_END : (this._err(oe.missingSemicolonAfterCharacterReference), this.state = Le.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(e))
      }

      _stateNumericCharacterReferenceEnd(e) {
        if (this.charRefCode === K.NULL) this._err(oe.nullCharacterReference), this.charRefCode = K.REPLACEMENT_CHARACTER; else if (this.charRefCode > 1114111) this._err(oe.characterReferenceOutsideUnicodeRange), this.charRefCode = K.REPLACEMENT_CHARACTER; else if (ae(this.charRefCode)) this._err(oe.surrogateCharacterReference), this.charRefCode = K.REPLACEMENT_CHARACTER; else if (se(this.charRefCode)) this._err(oe.noncharacterCharacterReference); else if (ie(this.charRefCode) || this.charRefCode === K.CARRIAGE_RETURN) {
          this._err(oe.controlCharacterReference);
          const e = De.get(this.charRefCode);
          void 0 !== e && (this.charRefCode = e)
        }
        this._flushCodePointConsumedAsCharacterReference(this.charRefCode), this._reconsumeInState(this.returnState, e)
      }
    }

    const ze = new Set([ye.DD, ye.DT, ye.LI, ye.OPTGROUP, ye.OPTION, ye.P, ye.RB, ye.RP, ye.RT, ye.RTC]),
      Ye = new Set([...ze, ye.CAPTION, ye.COLGROUP, ye.TBODY, ye.TD, ye.TFOOT, ye.TH, ye.THEAD, ye.TR]),
      Ve = new Map([[ye.APPLET, ve.HTML], [ye.CAPTION, ve.HTML], [ye.HTML, ve.HTML], [ye.MARQUEE, ve.HTML], [ye.OBJECT, ve.HTML], [ye.TABLE, ve.HTML], [ye.TD, ve.HTML], [ye.TEMPLATE, ve.HTML], [ye.TH, ve.HTML], [ye.ANNOTATION_XML, ve.MATHML], [ye.MI, ve.MATHML], [ye.MN, ve.MATHML], [ye.MO, ve.MATHML], [ye.MS, ve.MATHML], [ye.MTEXT, ve.MATHML], [ye.DESC, ve.SVG], [ye.FOREIGN_OBJECT, ve.SVG], [ye.TITLE, ve.SVG]]),
      We = [ye.H1, ye.H2, ye.H3, ye.H4, ye.H5, ye.H6], Qe = [ye.TR, ye.TEMPLATE, ye.HTML],
      Xe = [ye.TBODY, ye.TFOOT, ye.THEAD, ye.TEMPLATE, ye.HTML], Ke = [ye.TABLE, ye.TEMPLATE, ye.HTML],
      $e = [ye.TD, ye.TH];

    class Je {
      get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current
      }

      constructor(e, t, n) {
        this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = ye.UNKNOWN, this.current = e
      }

      _indexOf(e) {
        return this.items.lastIndexOf(e, this.stackTop)
      }

      _isInTemplate() {
        return this.currentTagId === ye.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === ve.HTML
      }

      _updateCurrentElement() {
        this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop]
      }

      push(e, t) {
        this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0)
      }

      pop() {
        const e = this.current;
        this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0)
      }

      replace(e, t) {
        const n = this._indexOf(e);
        this.items[n] = t, n === this.stackTop && (this.current = t)
      }

      insertAfter(e, t, n) {
        const a = this._indexOf(e) + 1;
        this.items.splice(a, 0, t), this.tagIDs.splice(a, 0, n), this.stackTop++, a === this.stackTop && this._updateCurrentElement(), this.handler.onItemPush(this.current, this.currentTagId, a === this.stackTop)
      }

      popUntilTagNamePopped(e) {
        let t = this.stackTop + 1;
        do {
          t = this.tagIDs.lastIndexOf(e, t - 1)
        } while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== ve.HTML);
        this.shortenToLength(t < 0 ? 0 : t)
      }

      shortenToLength(e) {
        for (; this.stackTop >= e;) {
          const t = this.current;
          this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e)
        }
      }

      popUntilElementPopped(e) {
        const t = this._indexOf(e);
        this.shortenToLength(t < 0 ? 0 : t)
      }

      popUntilPopped(e, t) {
        const n = this._indexOfTagNames(e, t);
        this.shortenToLength(n < 0 ? 0 : n)
      }

      popUntilNumberedHeaderPopped() {
        this.popUntilPopped(We, ve.HTML)
      }

      popUntilTableCellPopped() {
        this.popUntilPopped($e, ve.HTML)
      }

      popAllUpToHtmlElement() {
        this.tmplCount = 0, this.shortenToLength(1)
      }

      _indexOfTagNames(e, t) {
        for (let n = this.stackTop; n >= 0; n--) if (e.includes(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
        return -1
      }

      clearBackTo(e, t) {
        const n = this._indexOfTagNames(e, t);
        this.shortenToLength(n + 1)
      }

      clearBackToTableContext() {
        this.clearBackTo(Ke, ve.HTML)
      }

      clearBackToTableBodyContext() {
        this.clearBackTo(Xe, ve.HTML)
      }

      clearBackToTableRowContext() {
        this.clearBackTo(Qe, ve.HTML)
      }

      remove(e) {
        const t = this._indexOf(e);
        t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)))
      }

      tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === ye.BODY ? this.items[1] : null
      }

      contains(e) {
        return this._indexOf(e) > -1
      }

      getCommonAncestor(e) {
        const t = this._indexOf(e) - 1;
        return t >= 0 ? this.items[t] : null
      }

      isRootHtmlElementCurrent() {
        return 0 === this.stackTop && this.tagIDs[0] === ye.HTML
      }

      hasInScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const n = this.tagIDs[t], a = this.treeAdapter.getNamespaceURI(this.items[t]);
          if (n === e && a === ve.HTML) return !0;
          if (Ve.get(n) === a) return !1
        }
        return !0
      }

      hasNumberedHeaderInScope() {
        for (let e = this.stackTop; e >= 0; e--) {
          const t = this.tagIDs[e], n = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (Ie(t) && n === ve.HTML) return !0;
          if (Ve.get(t) === n) return !1
        }
        return !0
      }

      hasInListItemScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const n = this.tagIDs[t], a = this.treeAdapter.getNamespaceURI(this.items[t]);
          if (n === e && a === ve.HTML) return !0;
          if ((n === ye.UL || n === ye.OL) && a === ve.HTML || Ve.get(n) === a) return !1
        }
        return !0
      }

      hasInButtonScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const n = this.tagIDs[t], a = this.treeAdapter.getNamespaceURI(this.items[t]);
          if (n === e && a === ve.HTML) return !0;
          if (n === ye.BUTTON && a === ve.HTML || Ve.get(n) === a) return !1
        }
        return !0
      }

      hasInTableScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const n = this.tagIDs[t];
          if (this.treeAdapter.getNamespaceURI(this.items[t]) === ve.HTML) {
            if (n === e) return !0;
            if (n === ye.TABLE || n === ye.TEMPLATE || n === ye.HTML) return !1
          }
        }
        return !0
      }

      hasTableBodyContextInTableScope() {
        for (let e = this.stackTop; e >= 0; e--) {
          const t = this.tagIDs[e];
          if (this.treeAdapter.getNamespaceURI(this.items[e]) === ve.HTML) {
            if (t === ye.TBODY || t === ye.THEAD || t === ye.TFOOT) return !0;
            if (t === ye.TABLE || t === ye.HTML) return !1
          }
        }
        return !0
      }

      hasInSelectScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const n = this.tagIDs[t];
          if (this.treeAdapter.getNamespaceURI(this.items[t]) === ve.HTML) {
            if (n === e) return !0;
            if (n !== ye.OPTION && n !== ye.OPTGROUP) return !1
          }
        }
        return !0
      }

      generateImpliedEndTags() {
        for (; ze.has(this.currentTagId);) this.pop()
      }

      generateImpliedEndTagsThoroughly() {
        for (; Ye.has(this.currentTagId);) this.pop()
      }

      generateImpliedEndTagsWithExclusion(e) {
        for (; this.currentTagId !== e && Ye.has(this.currentTagId);) this.pop()
      }
    }

    var Ze;
    !function (e) {
      e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element"
    }(Ze = Ze || (Ze = {}));
    const et = {type: Ze.Marker};

    class tt {
      constructor(e) {
        this.treeAdapter = e, this.entries = [], this.bookmark = null
      }

      _getNoahArkConditionCandidates(e, t) {
        const n = [], a = t.length, i = this.treeAdapter.getTagName(e), s = this.treeAdapter.getNamespaceURI(e);
        for (let e = 0; e < this.entries.length; e++) {
          const t = this.entries[e];
          if (t.type === Ze.Marker) break;
          const {element: o} = t;
          if (this.treeAdapter.getTagName(o) === i && this.treeAdapter.getNamespaceURI(o) === s) {
            const t = this.treeAdapter.getAttrList(o);
            t.length === a && n.push({idx: e, attrs: t})
          }
        }
        return n
      }

      _ensureNoahArkCondition(e) {
        if (this.entries.length < 3) return;
        const t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
        if (n.length < 3) return;
        const a = new Map(t.map((e => [e.name, e.value])));
        let i = 0;
        for (let e = 0; e < n.length; e++) {
          const t = n[e];
          t.attrs.every((e => a.get(e.name) === e.value)) && (i += 1, i >= 3 && this.entries.splice(t.idx, 1))
        }
      }

      insertMarker() {
        this.entries.unshift(et)
      }

      pushElement(e, t) {
        this._ensureNoahArkCondition(e), this.entries.unshift({type: Ze.Element, element: e, token: t})
      }

      insertElementAfterBookmark(e, t) {
        const n = this.entries.indexOf(this.bookmark);
        this.entries.splice(n, 0, {type: Ze.Element, element: e, token: t})
      }

      removeEntry(e) {
        const t = this.entries.indexOf(e);
        t >= 0 && this.entries.splice(t, 1)
      }

      clearToLastMarker() {
        const e = this.entries.indexOf(et);
        e >= 0 ? this.entries.splice(0, e + 1) : this.entries.length = 0
      }

      getElementEntryInScopeWithTagName(e) {
        const t = this.entries.find((t => t.type === Ze.Marker || this.treeAdapter.getTagName(t.element) === e));
        return t && t.type === Ze.Element ? t : null
      }

      getElementEntry(e) {
        return this.entries.find((t => t.type === Ze.Element && t.element === e))
      }
    }

    function nt(e) {
      return {nodeName: "#text", value: e, parentNode: null}
    }

    const at = {
        createDocument: () => ({nodeName: "#document", mode: Te.NO_QUIRKS, childNodes: []}),
        createDocumentFragment: () => ({nodeName: "#document-fragment", childNodes: []}),
        createElement: (e, t, n) => ({
          nodeName: e,
          tagName: e,
          attrs: n,
          namespaceURI: t,
          childNodes: [],
          parentNode: null
        }),
        createCommentNode: e => ({nodeName: "#comment", data: e, parentNode: null}),
        appendChild(e, t) {
          e.childNodes.push(t), t.parentNode = e
        },
        insertBefore(e, t, n) {
          const a = e.childNodes.indexOf(n);
          e.childNodes.splice(a, 0, t), t.parentNode = e
        },
        setTemplateContent(e, t) {
          e.content = t
        },
        getTemplateContent: e => e.content,
        setDocumentType(e, t, n, a) {
          const i = e.childNodes.find((e => "#documentType" === e.nodeName));
          if (i) i.name = t, i.publicId = n, i.systemId = a; else {
            const i = {nodeName: "#documentType", name: t, publicId: n, systemId: a, parentNode: null};
            at.appendChild(e, i)
          }
        },
        setDocumentMode(e, t) {
          e.mode = t
        },
        getDocumentMode: e => e.mode,
        detachNode(e) {
          if (e.parentNode) {
            const t = e.parentNode.childNodes.indexOf(e);
            e.parentNode.childNodes.splice(t, 1), e.parentNode = null
          }
        },
        insertText(e, t) {
          if (e.childNodes.length > 0) {
            const n = e.childNodes[e.childNodes.length - 1];
            if (at.isTextNode(n)) return void (n.value += t)
          }
          at.appendChild(e, nt(t))
        },
        insertTextBefore(e, t, n) {
          const a = e.childNodes[e.childNodes.indexOf(n) - 1];
          a && at.isTextNode(a) ? a.value += t : at.insertBefore(e, nt(t), n)
        },
        adoptAttributes(e, t) {
          const n = new Set(e.attrs.map((e => e.name)));
          for (let a = 0; a < t.length; a++) n.has(t[a].name) || e.attrs.push(t[a])
        },
        getFirstChild: e => e.childNodes[0],
        getChildNodes: e => e.childNodes,
        getParentNode: e => e.parentNode,
        getAttrList: e => e.attrs,
        getTagName: e => e.tagName,
        getNamespaceURI: e => e.namespaceURI,
        getTextNodeContent: e => e.value,
        getCommentNodeContent: e => e.data,
        getDocumentTypeNodeName: e => e.name,
        getDocumentTypeNodePublicId: e => e.publicId,
        getDocumentTypeNodeSystemId: e => e.systemId,
        isTextNode: e => "#text" === e.nodeName,
        isCommentNode: e => "#comment" === e.nodeName,
        isDocumentTypeNode: e => "#documentType" === e.nodeName,
        isElementNode: e => Object.prototype.hasOwnProperty.call(e, "tagName"),
        setNodeSourceCodeLocation(e, t) {
          e.sourceCodeLocation = t
        },
        getNodeSourceCodeLocation: e => e.sourceCodeLocation,
        updateNodeSourceCodeLocation(e, t) {
          e.sourceCodeLocation = {...e.sourceCodeLocation, ...t}
        }
      }, it = "html",
      st = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"],
      ot = [...st, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"],
      rt = new Set(["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"]),
      ct = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"],
      lt = [...ct, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"];

    function pt(e, t) {
      return t.some((t => e.startsWith(t)))
    }

    const ut = "text/html", dt = "application/xhtml+xml",
      mt = new Map(["attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map((e => [e.toLowerCase(), e]))),
      ht = new Map([["xlink:actuate", {
        prefix: "xlink",
        name: "actuate",
        namespace: ve.XLINK
      }], ["xlink:arcrole", {prefix: "xlink", name: "arcrole", namespace: ve.XLINK}], ["xlink:href", {
        prefix: "xlink",
        name: "href",
        namespace: ve.XLINK
      }], ["xlink:role", {prefix: "xlink", name: "role", namespace: ve.XLINK}], ["xlink:show", {
        prefix: "xlink",
        name: "show",
        namespace: ve.XLINK
      }], ["xlink:title", {prefix: "xlink", name: "title", namespace: ve.XLINK}], ["xlink:type", {
        prefix: "xlink",
        name: "type",
        namespace: ve.XLINK
      }], ["xml:base", {prefix: "xml", name: "base", namespace: ve.XML}], ["xml:lang", {
        prefix: "xml",
        name: "lang",
        namespace: ve.XML
      }], ["xml:space", {prefix: "xml", name: "space", namespace: ve.XML}], ["xmlns", {
        prefix: "",
        name: "xmlns",
        namespace: ve.XMLNS
      }], ["xmlns:xlink", {prefix: "xmlns", name: "xlink", namespace: ve.XMLNS}]]),
      ft = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map((e => [e.toLowerCase(), e]))),
      gt = new Set([ye.B, ye.BIG, ye.BLOCKQUOTE, ye.BODY, ye.BR, ye.CENTER, ye.CODE, ye.DD, ye.DIV, ye.DL, ye.DT, ye.EM, ye.EMBED, ye.H1, ye.H2, ye.H3, ye.H4, ye.H5, ye.H6, ye.HEAD, ye.HR, ye.I, ye.IMG, ye.LI, ye.LISTING, ye.MENU, ye.META, ye.NOBR, ye.OL, ye.P, ye.PRE, ye.RUBY, ye.S, ye.SMALL, ye.SPAN, ye.STRONG, ye.STRIKE, ye.SUB, ye.SUP, ye.TABLE, ye.TT, ye.U, ye.UL, ye.VAR]);

    function bt(e) {
      for (let t = 0; t < e.attrs.length; t++) if ("definitionurl" === e.attrs[t].name) {
        e.attrs[t].name = "definitionURL";
        break
      }
    }

    function xt(e) {
      for (let t = 0; t < e.attrs.length; t++) {
        const n = mt.get(e.attrs[t].name);
        null != n && (e.attrs[t].name = n)
      }
    }

    function Et(e) {
      for (let t = 0; t < e.attrs.length; t++) {
        const n = ht.get(e.attrs[t].name);
        n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace)
      }
    }

    function vt(e, t, n, a) {
      return (!a || a === ve.HTML) && function (e, t, n) {
        if (t === ve.MATHML && e === ye.ANNOTATION_XML) for (let e = 0; e < n.length; e++) if (n[e].name === ke.ENCODING) {
          const t = n[e].value.toLowerCase();
          return t === ut || t === dt
        }
        return t === ve.SVG && (e === ye.FOREIGN_OBJECT || e === ye.DESC || e === ye.TITLE)
      }(e, t, n) || (!a || a === ve.MATHML) && function (e, t) {
        return t === ve.MATHML && (e === ye.MI || e === ye.MO || e === ye.MN || e === ye.MS || e === ye.MTEXT)
      }(e, t)
    }

    var kt;
    !function (e) {
      e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET"
    }(kt || (kt = {}));
    const Tt = {startLine: -1, startCol: -1, startOffset: -1, endLine: -1, endCol: -1, endOffset: -1},
      At = new Set([ye.TABLE, ye.TBODY, ye.TFOOT, ye.THEAD, ye.TR]),
      yt = {scriptingEnabled: !0, sourceCodeLocationInfo: !1, treeAdapter: at, onParseError: null};

    class _t {
      constructor(e, t, n = null, a = null) {
        this.fragmentContext = n, this.scriptHandler = a, this.currentToken = null, this.stopped = !1, this.insertionMode = kt.INITIAL, this.originalInsertionMode = kt.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {...yt, ...e}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = null != t ? t : this.treeAdapter.createDocument(), this.tokenizer = new qe(this.options, this), this.activeFormattingElements = new tt(this.treeAdapter), this.fragmentContextID = n ? Ce(this.treeAdapter.getTagName(n)) : ye.UNKNOWN, this._setContextModes(null != n ? n : this.document, this.fragmentContextID), this.openElements = new Je(this.document, this.treeAdapter, this)
      }

      static parse(e, t) {
        const n = new this(t);
        return n.tokenizer.write(e, !0), n.document
      }

      static getFragmentParser(e, t) {
        const n = {...yt, ...t};
        null != e || (e = n.treeAdapter.createElement(Ae.TEMPLATE, ve.HTML, []));
        const a = n.treeAdapter.createElement("documentmock", ve.HTML, []), i = new this(n, a, e);
        return i.fragmentContextID === ye.TEMPLATE && i.tmplInsertionModeStack.unshift(kt.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i
      }

      getFragment() {
        const e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
        return this._adoptNodes(e, t), t
      }

      _err(e, t, n) {
        var a;
        if (!this.onParseError) return;
        const i = null !== (a = e.location) && void 0 !== a ? a : Tt, s = {
          code: t,
          startLine: i.startLine,
          startCol: i.startCol,
          startOffset: i.startOffset,
          endLine: n ? i.startLine : i.endLine,
          endCol: n ? i.startCol : i.endCol,
          endOffset: n ? i.startOffset : i.endOffset
        };
        this.onParseError(s)
      }

      onItemPush(e, t, n) {
        var a, i;
        null === (i = (a = this.treeAdapter).onItemPush) || void 0 === i || i.call(a, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t)
      }

      onItemPop(e, t) {
        var n, a;
        if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), null === (a = (n = this.treeAdapter).onItemPop) || void 0 === a || a.call(n, e, this.openElements.current), t) {
          let e, t;
          0 === this.openElements.stackTop && this.fragmentContext ? (e = this.fragmentContext, t = this.fragmentContextID) : ({
            current: e,
            currentTagId: t
          } = this.openElements), this._setContextModes(e, t)
        }
      }

      _setContextModes(e, t) {
        const n = e === this.document || this.treeAdapter.getNamespaceURI(e) === ve.HTML;
        this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && !this._isIntegrationPoint(t, e)
      }

      _switchToTextParsing(e, t) {
        this._insertElement(e, ve.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = kt.TEXT
      }

      switchToPlaintextParsing() {
        this.insertionMode = kt.TEXT, this.originalInsertionMode = kt.IN_BODY, this.tokenizer.state = Re.PLAINTEXT
      }

      _getAdjustedCurrentElement() {
        return 0 === this.openElements.stackTop && this.fragmentContext ? this.fragmentContext : this.openElements.current
      }

      _findFormInFragmentContext() {
        let e = this.fragmentContext;
        for (; e;) {
          if (this.treeAdapter.getTagName(e) === Ae.FORM) {
            this.formElement = e;
            break
          }
          e = this.treeAdapter.getParentNode(e)
        }
      }

      _initTokenizerForFragmentParsing() {
        if (this.fragmentContext && this.treeAdapter.getNamespaceURI(this.fragmentContext) === ve.HTML) switch (this.fragmentContextID) {
          case ye.TITLE:
          case ye.TEXTAREA:
            this.tokenizer.state = Re.RCDATA;
            break;
          case ye.STYLE:
          case ye.XMP:
          case ye.IFRAME:
          case ye.NOEMBED:
          case ye.NOFRAMES:
          case ye.NOSCRIPT:
            this.tokenizer.state = Re.RAWTEXT;
            break;
          case ye.SCRIPT:
            this.tokenizer.state = Re.SCRIPT_DATA;
            break;
          case ye.PLAINTEXT:
            this.tokenizer.state = Re.PLAINTEXT
        }
      }

      _setDocumentType(e) {
        const t = e.name || "", n = e.publicId || "", a = e.systemId || "";
        if (this.treeAdapter.setDocumentType(this.document, t, n, a), e.location) {
          const t = this.treeAdapter.getChildNodes(this.document).find((e => this.treeAdapter.isDocumentTypeNode(e)));
          t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location)
        }
      }

      _attachElementToTree(e, t) {
        if (this.options.sourceCodeLocationInfo) {
          const n = t && {...t, startTag: t};
          this.treeAdapter.setNodeSourceCodeLocation(e, n)
        }
        if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e); else {
          const t = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.appendChild(t, e)
        }
      }

      _appendElement(e, t) {
        const n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(n, e.location)
      }

      _insertElement(e, t) {
        const n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID)
      }

      _insertFakeElement(e, t) {
        const n = this.treeAdapter.createElement(e, ve.HTML, []);
        this._attachElementToTree(n, null), this.openElements.push(n, t)
      }

      _insertTemplate(e) {
        const t = this.treeAdapter.createElement(e.tagName, ve.HTML, e.attrs),
          n = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null)
      }

      _insertFakeRootElement() {
        const e = this.treeAdapter.createElement(Ae.HTML, ve.HTML, []);
        this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, ye.HTML)
      }

      _appendCommentNode(e, t) {
        const n = this.treeAdapter.createCommentNode(e.data);
        this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location)
      }

      _insertCharacters(e) {
        let t, n;
        if (this._shouldFosterParentOnInsertion() ? (({
          parent: t,
          beforeElement: n
        } = this._findFosterParentingLocation()), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), !e.location) return;
        const a = this.treeAdapter.getChildNodes(t), i = n ? a.lastIndexOf(n) : a.length, s = a[i - 1];
        if (this.treeAdapter.getNodeSourceCodeLocation(s)) {
          const {endLine: t, endCol: n, endOffset: a} = e.location;
          this.treeAdapter.updateNodeSourceCodeLocation(s, {endLine: t, endCol: n, endOffset: a})
        } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s, e.location)
      }

      _adoptNodes(e, t) {
        for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n)
      }

      _setEndLocation(e, t) {
        if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
          const n = t.location, a = this.treeAdapter.getTagName(e), i = t.type === ce.END_TAG && a === t.tagName ? {
            endTag: {...n},
            endLine: n.endLine,
            endCol: n.endCol,
            endOffset: n.endOffset
          } : {endLine: n.startLine, endCol: n.startCol, endOffset: n.startOffset};
          this.treeAdapter.updateNodeSourceCodeLocation(e, i)
        }
      }

      shouldProcessStartTagTokenInForeignContent(e) {
        if (!this.currentNotInHTML) return !1;
        let t, n;
        return 0 === this.openElements.stackTop && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : ({
          current: t,
          currentTagId: n
        } = this.openElements), (e.tagID !== ye.SVG || this.treeAdapter.getTagName(t) !== Ae.ANNOTATION_XML || this.treeAdapter.getNamespaceURI(t) !== ve.MATHML) && (this.tokenizer.inForeignNode || (e.tagID === ye.MGLYPH || e.tagID === ye.MALIGNMARK) && !this._isIntegrationPoint(n, t, ve.HTML))
      }

      _processToken(e) {
        switch (e.type) {
          case ce.CHARACTER:
            this.onCharacter(e);
            break;
          case ce.NULL_CHARACTER:
            this.onNullCharacter(e);
            break;
          case ce.COMMENT:
            this.onComment(e);
            break;
          case ce.DOCTYPE:
            this.onDoctype(e);
            break;
          case ce.START_TAG:
            this._processStartTag(e);
            break;
          case ce.END_TAG:
            this.onEndTag(e);
            break;
          case ce.EOF:
            this.onEof(e);
            break;
          case ce.WHITESPACE_CHARACTER:
            this.onWhitespaceCharacter(e)
        }
      }

      _isIntegrationPoint(e, t, n) {
        return vt(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n)
      }

      _reconstructActiveFormattingElements() {
        const e = this.activeFormattingElements.entries.length;
        if (e) {
          const t = this.activeFormattingElements.entries.findIndex((e => e.type === Ze.Marker || this.openElements.contains(e.element)));
          for (let n = t < 0 ? e - 1 : t - 1; n >= 0; n--) {
            const e = this.activeFormattingElements.entries[n];
            this._insertElement(e.token, this.treeAdapter.getNamespaceURI(e.element)), e.element = this.openElements.current
          }
        }
      }

      _closeTableCell() {
        this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = kt.IN_ROW
      }

      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(ye.P), this.openElements.popUntilTagNamePopped(ye.P)
      }

      _resetInsertionMode() {
        for (let e = this.openElements.stackTop; e >= 0; e--) switch (0 === e && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
          case ye.TR:
            return void (this.insertionMode = kt.IN_ROW);
          case ye.TBODY:
          case ye.THEAD:
          case ye.TFOOT:
            return void (this.insertionMode = kt.IN_TABLE_BODY);
          case ye.CAPTION:
            return void (this.insertionMode = kt.IN_CAPTION);
          case ye.COLGROUP:
            return void (this.insertionMode = kt.IN_COLUMN_GROUP);
          case ye.TABLE:
            return void (this.insertionMode = kt.IN_TABLE);
          case ye.BODY:
            return void (this.insertionMode = kt.IN_BODY);
          case ye.FRAMESET:
            return void (this.insertionMode = kt.IN_FRAMESET);
          case ye.SELECT:
            return void this._resetInsertionModeForSelect(e);
          case ye.TEMPLATE:
            return void (this.insertionMode = this.tmplInsertionModeStack[0]);
          case ye.HTML:
            return void (this.insertionMode = this.headElement ? kt.AFTER_HEAD : kt.BEFORE_HEAD);
          case ye.TD:
          case ye.TH:
            if (e > 0) return void (this.insertionMode = kt.IN_CELL);
            break;
          case ye.HEAD:
            if (e > 0) return void (this.insertionMode = kt.IN_HEAD)
        }
        this.insertionMode = kt.IN_BODY
      }

      _resetInsertionModeForSelect(e) {
        if (e > 0) for (let t = e - 1; t > 0; t--) {
          const e = this.openElements.tagIDs[t];
          if (e === ye.TEMPLATE) break;
          if (e === ye.TABLE) return void (this.insertionMode = kt.IN_SELECT_IN_TABLE)
        }
        this.insertionMode = kt.IN_SELECT
      }

      _isElementCausesFosterParenting(e) {
        return At.has(e)
      }

      _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId)
      }

      _findFosterParentingLocation() {
        for (let e = this.openElements.stackTop; e >= 0; e--) {
          const t = this.openElements.items[e];
          switch (this.openElements.tagIDs[e]) {
            case ye.TEMPLATE:
              if (this.treeAdapter.getNamespaceURI(t) === ve.HTML) return {
                parent: this.treeAdapter.getTemplateContent(t),
                beforeElement: null
              };
              break;
            case ye.TABLE: {
              const n = this.treeAdapter.getParentNode(t);
              return n ? {parent: n, beforeElement: t} : {parent: this.openElements.items[e - 1], beforeElement: null}
            }
          }
        }
        return {parent: this.openElements.items[0], beforeElement: null}
      }

      _fosterParentElement(e) {
        const t = this._findFosterParentingLocation();
        t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e)
      }

      _isSpecialElement(e, t) {
        const n = this.treeAdapter.getNamespaceURI(e);
        return we[n].has(t)
      }

      onCharacter(e) {
        if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) !function (e, t) {
          e._insertCharacters(t), e.framesetOk = !1
        }(this, e); else switch (this.insertionMode) {
          case kt.INITIAL:
            Ot(this, e);
            break;
          case kt.BEFORE_HTML:
            Mt(this, e);
            break;
          case kt.BEFORE_HEAD:
            Bt(this, e);
            break;
          case kt.IN_HEAD:
            Ht(this, e);
            break;
          case kt.IN_HEAD_NO_SCRIPT:
            jt(this, e);
            break;
          case kt.AFTER_HEAD:
            Gt(this, e);
            break;
          case kt.IN_BODY:
          case kt.IN_CAPTION:
          case kt.IN_CELL:
          case kt.IN_TEMPLATE:
            Yt(this, e);
            break;
          case kt.TEXT:
          case kt.IN_SELECT:
          case kt.IN_SELECT_IN_TABLE:
            this._insertCharacters(e);
            break;
          case kt.IN_TABLE:
          case kt.IN_TABLE_BODY:
          case kt.IN_ROW:
            en(this, e);
            break;
          case kt.IN_TABLE_TEXT:
            on(this, e);
            break;
          case kt.IN_COLUMN_GROUP:
            pn(this, e);
            break;
          case kt.AFTER_BODY:
            En(this, e);
            break;
          case kt.AFTER_AFTER_BODY:
            vn(this, e)
        }
      }

      onNullCharacter(e) {
        if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) !function (e, t) {
          t.chars = X, e._insertCharacters(t)
        }(this, e); else switch (this.insertionMode) {
          case kt.INITIAL:
            Ot(this, e);
            break;
          case kt.BEFORE_HTML:
            Mt(this, e);
            break;
          case kt.BEFORE_HEAD:
            Bt(this, e);
            break;
          case kt.IN_HEAD:
            Ht(this, e);
            break;
          case kt.IN_HEAD_NO_SCRIPT:
            jt(this, e);
            break;
          case kt.AFTER_HEAD:
            Gt(this, e);
            break;
          case kt.TEXT:
            this._insertCharacters(e);
            break;
          case kt.IN_TABLE:
          case kt.IN_TABLE_BODY:
          case kt.IN_ROW:
            en(this, e);
            break;
          case kt.IN_COLUMN_GROUP:
            pn(this, e);
            break;
          case kt.AFTER_BODY:
            En(this, e);
            break;
          case kt.AFTER_AFTER_BODY:
            vn(this, e)
        }
      }

      onComment(e) {
        if (this.skipNextNewLine = !1, this.currentNotInHTML) Rt(this, e); else switch (this.insertionMode) {
          case kt.INITIAL:
          case kt.BEFORE_HTML:
          case kt.BEFORE_HEAD:
          case kt.IN_HEAD:
          case kt.IN_HEAD_NO_SCRIPT:
          case kt.AFTER_HEAD:
          case kt.IN_BODY:
          case kt.IN_TABLE:
          case kt.IN_CAPTION:
          case kt.IN_COLUMN_GROUP:
          case kt.IN_TABLE_BODY:
          case kt.IN_ROW:
          case kt.IN_CELL:
          case kt.IN_SELECT:
          case kt.IN_SELECT_IN_TABLE:
          case kt.IN_TEMPLATE:
          case kt.IN_FRAMESET:
          case kt.AFTER_FRAMESET:
            Rt(this, e);
            break;
          case kt.IN_TABLE_TEXT:
            rn(this, e);
            break;
          case kt.AFTER_BODY:
            !function (e, t) {
              e._appendCommentNode(t, e.openElements.items[0])
            }(this, e);
            break;
          case kt.AFTER_AFTER_BODY:
          case kt.AFTER_AFTER_FRAMESET:
            !function (e, t) {
              e._appendCommentNode(t, e.document)
            }(this, e)
        }
      }

      onDoctype(e) {
        switch (this.skipNextNewLine = !1, this.insertionMode) {
          case kt.INITIAL:
            !function (e, t) {
              e._setDocumentType(t);
              const n = t.forceQuirks ? Te.QUIRKS : function (e) {
                if (e.name !== it) return Te.QUIRKS;
                const {systemId: t} = e;
                if (t && "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" === t.toLowerCase()) return Te.QUIRKS;
                let {publicId: n} = e;
                if (null !== n) {
                  if (n = n.toLowerCase(), rt.has(n)) return Te.QUIRKS;
                  let e = null === t ? ot : st;
                  if (pt(n, e)) return Te.QUIRKS;
                  if (e = null === t ? ct : lt, pt(n, e)) return Te.LIMITED_QUIRKS
                }
                return Te.NO_QUIRKS
              }(t);
              (function (e) {
                return e.name === it && null === e.publicId && (null === e.systemId || "about:legacy-compat" === e.systemId)
              })(t) || e._err(t, oe.nonConformingDoctype);
              e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = kt.BEFORE_HTML
            }(this, e);
            break;
          case kt.BEFORE_HEAD:
          case kt.IN_HEAD:
          case kt.IN_HEAD_NO_SCRIPT:
          case kt.AFTER_HEAD:
            this._err(e, oe.misplacedDoctype);
            break;
          case kt.IN_TABLE_TEXT:
            rn(this, e)
        }
      }

      onStartTag(e) {
        this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, oe.nonVoidHtmlElementStartTagWithTrailingSolidus)
      }

      _processStartTag(e) {
        this.shouldProcessStartTagTokenInForeignContent(e) ? function (e, t) {
          if (function (e) {
            const t = e.tagID;
            return t === ye.FONT && e.attrs.some((({name: e}) => e === ke.COLOR || e === ke.SIZE || e === ke.FACE)) || gt.has(t)
          }(t)) kn(e), e._startTagOutsideForeignContent(t); else {
            const n = e._getAdjustedCurrentElement(), a = e.treeAdapter.getNamespaceURI(n);
            a === ve.MATHML ? bt(t) : a === ve.SVG && (!function (e) {
              const t = ft.get(e.tagName);
              null != t && (e.tagName = t, e.tagID = Ce(e.tagName))
            }(t), xt(t)), Et(t), t.selfClosing ? e._appendElement(t, a) : e._insertElement(t, a), t.ackSelfClosing = !0
          }
        }(this, e) : this._startTagOutsideForeignContent(e)
      }

      _startTagOutsideForeignContent(e) {
        switch (this.insertionMode) {
          case kt.INITIAL:
            Ot(this, e);
            break;
          case kt.BEFORE_HTML:
            !function (e, t) {
              t.tagID === ye.HTML ? (e._insertElement(t, ve.HTML), e.insertionMode = kt.BEFORE_HEAD) : Mt(e, t)
            }(this, e);
            break;
          case kt.BEFORE_HEAD:
            !function (e, t) {
              switch (t.tagID) {
                case ye.HTML:
                  Kt(e, t);
                  break;
                case ye.HEAD:
                  e._insertElement(t, ve.HTML), e.headElement = e.openElements.current, e.insertionMode = kt.IN_HEAD;
                  break;
                default:
                  Bt(e, t)
              }
            }(this, e);
            break;
          case kt.IN_HEAD:
            Ut(this, e);
            break;
          case kt.IN_HEAD_NO_SCRIPT:
            !function (e, t) {
              switch (t.tagID) {
                case ye.HTML:
                  Kt(e, t);
                  break;
                case ye.BASEFONT:
                case ye.BGSOUND:
                case ye.HEAD:
                case ye.LINK:
                case ye.META:
                case ye.NOFRAMES:
                case ye.STYLE:
                  Ut(e, t);
                  break;
                case ye.NOSCRIPT:
                  e._err(t, oe.nestedNoscriptInHead);
                  break;
                default:
                  jt(e, t)
              }
            }(this, e);
            break;
          case kt.AFTER_HEAD:
            !function (e, t) {
              switch (t.tagID) {
                case ye.HTML:
                  Kt(e, t);
                  break;
                case ye.BODY:
                  e._insertElement(t, ve.HTML), e.framesetOk = !1, e.insertionMode = kt.IN_BODY;
                  break;
                case ye.FRAMESET:
                  e._insertElement(t, ve.HTML), e.insertionMode = kt.IN_FRAMESET;
                  break;
                case ye.BASE:
                case ye.BASEFONT:
                case ye.BGSOUND:
                case ye.LINK:
                case ye.META:
                case ye.NOFRAMES:
                case ye.SCRIPT:
                case ye.STYLE:
                case ye.TEMPLATE:
                case ye.TITLE:
                  e._err(t, oe.abandonedHeadElementChild), e.openElements.push(e.headElement, ye.HEAD), Ut(e, t), e.openElements.remove(e.headElement);
                  break;
                case ye.HEAD:
                  e._err(t, oe.misplacedStartTagForHeadElement);
                  break;
                default:
                  Gt(e, t)
              }
            }(this, e);
            break;
          case kt.IN_BODY:
            Kt(this, e);
            break;
          case kt.IN_TABLE:
            tn(this, e);
            break;
          case kt.IN_TABLE_TEXT:
            rn(this, e);
            break;
          case kt.IN_CAPTION:
            !function (e, t) {
              const n = t.tagID;
              cn.has(n) ? e.openElements.hasInTableScope(ye.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(ye.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = kt.IN_TABLE, tn(e, t)) : Kt(e, t)
            }(this, e);
            break;
          case kt.IN_COLUMN_GROUP:
            ln(this, e);
            break;
          case kt.IN_TABLE_BODY:
            un(this, e);
            break;
          case kt.IN_ROW:
            mn(this, e);
            break;
          case kt.IN_CELL:
            !function (e, t) {
              const n = t.tagID;
              cn.has(n) ? (e.openElements.hasInTableScope(ye.TD) || e.openElements.hasInTableScope(ye.TH)) && (e._closeTableCell(), mn(e, t)) : Kt(e, t)
            }(this, e);
            break;
          case kt.IN_SELECT:
            fn(this, e);
            break;
          case kt.IN_SELECT_IN_TABLE:
            !function (e, t) {
              const n = t.tagID;
              n === ye.CAPTION || n === ye.TABLE || n === ye.TBODY || n === ye.TFOOT || n === ye.THEAD || n === ye.TR || n === ye.TD || n === ye.TH ? (e.openElements.popUntilTagNamePopped(ye.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : fn(e, t)
            }(this, e);
            break;
          case kt.IN_TEMPLATE:
            !function (e, t) {
              switch (t.tagID) {
                case ye.BASE:
                case ye.BASEFONT:
                case ye.BGSOUND:
                case ye.LINK:
                case ye.META:
                case ye.NOFRAMES:
                case ye.SCRIPT:
                case ye.STYLE:
                case ye.TEMPLATE:
                case ye.TITLE:
                  Ut(e, t);
                  break;
                case ye.CAPTION:
                case ye.COLGROUP:
                case ye.TBODY:
                case ye.TFOOT:
                case ye.THEAD:
                  e.tmplInsertionModeStack[0] = kt.IN_TABLE, e.insertionMode = kt.IN_TABLE, tn(e, t);
                  break;
                case ye.COL:
                  e.tmplInsertionModeStack[0] = kt.IN_COLUMN_GROUP, e.insertionMode = kt.IN_COLUMN_GROUP, ln(e, t);
                  break;
                case ye.TR:
                  e.tmplInsertionModeStack[0] = kt.IN_TABLE_BODY, e.insertionMode = kt.IN_TABLE_BODY, un(e, t);
                  break;
                case ye.TD:
                case ye.TH:
                  e.tmplInsertionModeStack[0] = kt.IN_ROW, e.insertionMode = kt.IN_ROW, mn(e, t);
                  break;
                default:
                  e.tmplInsertionModeStack[0] = kt.IN_BODY, e.insertionMode = kt.IN_BODY, Kt(e, t)
              }
            }(this, e);
            break;
          case kt.AFTER_BODY:
            !function (e, t) {
              t.tagID === ye.HTML ? Kt(e, t) : En(e, t)
            }(this, e);
            break;
          case kt.IN_FRAMESET:
            !function (e, t) {
              switch (t.tagID) {
                case ye.HTML:
                  Kt(e, t);
                  break;
                case ye.FRAMESET:
                  e._insertElement(t, ve.HTML);
                  break;
                case ye.FRAME:
                  e._appendElement(t, ve.HTML), t.ackSelfClosing = !0;
                  break;
                case ye.NOFRAMES:
                  Ut(e, t)
              }
            }(this, e);
            break;
          case kt.AFTER_FRAMESET:
            !function (e, t) {
              switch (t.tagID) {
                case ye.HTML:
                  Kt(e, t);
                  break;
                case ye.NOFRAMES:
                  Ut(e, t)
              }
            }(this, e);
            break;
          case kt.AFTER_AFTER_BODY:
            !function (e, t) {
              t.tagID === ye.HTML ? Kt(e, t) : vn(e, t)
            }(this, e);
            break;
          case kt.AFTER_AFTER_FRAMESET:
            !function (e, t) {
              switch (t.tagID) {
                case ye.HTML:
                  Kt(e, t);
                  break;
                case ye.NOFRAMES:
                  Ut(e, t)
              }
            }(this, e)
        }
      }

      onEndTag(e) {
        this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? function (e, t) {
          if (t.tagID === ye.P || t.tagID === ye.BR) return kn(e), void e._endTagOutsideForeignContent(t);
          for (let n = e.openElements.stackTop; n > 0; n--) {
            const a = e.openElements.items[n];
            if (e.treeAdapter.getNamespaceURI(a) === ve.HTML) {
              e._endTagOutsideForeignContent(t);
              break
            }
            const i = e.treeAdapter.getTagName(a);
            if (i.toLowerCase() === t.tagName) {
              t.tagName = i, e.openElements.shortenToLength(n);
              break
            }
          }
        }(this, e) : this._endTagOutsideForeignContent(e)
      }

      _endTagOutsideForeignContent(e) {
        switch (this.insertionMode) {
          case kt.INITIAL:
            Ot(this, e);
            break;
          case kt.BEFORE_HTML:
            !function (e, t) {
              const n = t.tagID;
              n !== ye.HTML && n !== ye.HEAD && n !== ye.BODY && n !== ye.BR || Mt(e, t)
            }(this, e);
            break;
          case kt.BEFORE_HEAD:
            !function (e, t) {
              const n = t.tagID;
              n === ye.HEAD || n === ye.BODY || n === ye.HTML || n === ye.BR ? Bt(e, t) : e._err(t, oe.endTagWithoutMatchingOpenElement)
            }(this, e);
            break;
          case kt.IN_HEAD:
            !function (e, t) {
              switch (t.tagID) {
                case ye.HEAD:
                  e.openElements.pop(), e.insertionMode = kt.AFTER_HEAD;
                  break;
                case ye.BODY:
                case ye.BR:
                case ye.HTML:
                  Ht(e, t);
                  break;
                case ye.TEMPLATE:
                  Ft(e, t);
                  break;
                default:
                  e._err(t, oe.endTagWithoutMatchingOpenElement)
              }
            }(this, e);
            break;
          case kt.IN_HEAD_NO_SCRIPT:
            !function (e, t) {
              switch (t.tagID) {
                case ye.NOSCRIPT:
                  e.openElements.pop(), e.insertionMode = kt.IN_HEAD;
                  break;
                case ye.BR:
                  jt(e, t);
                  break;
                default:
                  e._err(t, oe.endTagWithoutMatchingOpenElement)
              }
            }(this, e);
            break;
          case kt.AFTER_HEAD:
            !function (e, t) {
              switch (t.tagID) {
                case ye.BODY:
                case ye.HTML:
                case ye.BR:
                  Gt(e, t);
                  break;
                case ye.TEMPLATE:
                  Ft(e, t);
                  break;
                default:
                  e._err(t, oe.endTagWithoutMatchingOpenElement)
              }
            }(this, e);
            break;
          case kt.IN_BODY:
            Jt(this, e);
            break;
          case kt.TEXT:
            !function (e, t) {
              var n;
              t.tagID === ye.SCRIPT && (null === (n = e.scriptHandler) || void 0 === n || n.call(e, e.openElements.current));
              e.openElements.pop(), e.insertionMode = e.originalInsertionMode
            }(this, e);
            break;
          case kt.IN_TABLE:
            nn(this, e);
            break;
          case kt.IN_TABLE_TEXT:
            rn(this, e);
            break;
          case kt.IN_CAPTION:
            !function (e, t) {
              const n = t.tagID;
              switch (n) {
                case ye.CAPTION:
                case ye.TABLE:
                  e.openElements.hasInTableScope(ye.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(ye.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = kt.IN_TABLE, n === ye.TABLE && nn(e, t));
                  break;
                case ye.BODY:
                case ye.COL:
                case ye.COLGROUP:
                case ye.HTML:
                case ye.TBODY:
                case ye.TD:
                case ye.TFOOT:
                case ye.TH:
                case ye.THEAD:
                case ye.TR:
                  break;
                default:
                  Jt(e, t)
              }
            }(this, e);
            break;
          case kt.IN_COLUMN_GROUP:
            !function (e, t) {
              switch (t.tagID) {
                case ye.COLGROUP:
                  e.openElements.currentTagId === ye.COLGROUP && (e.openElements.pop(), e.insertionMode = kt.IN_TABLE);
                  break;
                case ye.TEMPLATE:
                  Ft(e, t);
                  break;
                case ye.COL:
                  break;
                default:
                  pn(e, t)
              }
            }(this, e);
            break;
          case kt.IN_TABLE_BODY:
            dn(this, e);
            break;
          case kt.IN_ROW:
            hn(this, e);
            break;
          case kt.IN_CELL:
            !function (e, t) {
              const n = t.tagID;
              switch (n) {
                case ye.TD:
                case ye.TH:
                  e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = kt.IN_ROW);
                  break;
                case ye.TABLE:
                case ye.TBODY:
                case ye.TFOOT:
                case ye.THEAD:
                case ye.TR:
                  e.openElements.hasInTableScope(n) && (e._closeTableCell(), hn(e, t));
                  break;
                case ye.BODY:
                case ye.CAPTION:
                case ye.COL:
                case ye.COLGROUP:
                case ye.HTML:
                  break;
                default:
                  Jt(e, t)
              }
            }(this, e);
            break;
          case kt.IN_SELECT:
            gn(this, e);
            break;
          case kt.IN_SELECT_IN_TABLE:
            !function (e, t) {
              const n = t.tagID;
              n === ye.CAPTION || n === ye.TABLE || n === ye.TBODY || n === ye.TFOOT || n === ye.THEAD || n === ye.TR || n === ye.TD || n === ye.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(ye.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : gn(e, t)
            }(this, e);
            break;
          case kt.IN_TEMPLATE:
            !function (e, t) {
              t.tagID === ye.TEMPLATE && Ft(e, t)
            }(this, e);
            break;
          case kt.AFTER_BODY:
            xn(this, e);
            break;
          case kt.IN_FRAMESET:
            !function (e, t) {
              t.tagID !== ye.FRAMESET || e.openElements.isRootHtmlElementCurrent() || (e.openElements.pop(), e.fragmentContext || e.openElements.currentTagId === ye.FRAMESET || (e.insertionMode = kt.AFTER_FRAMESET))
            }(this, e);
            break;
          case kt.AFTER_FRAMESET:
            !function (e, t) {
              t.tagID === ye.HTML && (e.insertionMode = kt.AFTER_AFTER_FRAMESET)
            }(this, e);
            break;
          case kt.AFTER_AFTER_BODY:
            vn(this, e)
        }
      }

      onEof(e) {
        switch (this.insertionMode) {
          case kt.INITIAL:
            Ot(this, e);
            break;
          case kt.BEFORE_HTML:
            Mt(this, e);
            break;
          case kt.BEFORE_HEAD:
            Bt(this, e);
            break;
          case kt.IN_HEAD:
            Ht(this, e);
            break;
          case kt.IN_HEAD_NO_SCRIPT:
            jt(this, e);
            break;
          case kt.AFTER_HEAD:
            Gt(this, e);
            break;
          case kt.IN_BODY:
          case kt.IN_TABLE:
          case kt.IN_CAPTION:
          case kt.IN_COLUMN_GROUP:
          case kt.IN_TABLE_BODY:
          case kt.IN_ROW:
          case kt.IN_CELL:
          case kt.IN_SELECT:
          case kt.IN_SELECT_IN_TABLE:
            Zt(this, e);
            break;
          case kt.TEXT:
            !function (e, t) {
              e._err(t, oe.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t)
            }(this, e);
            break;
          case kt.IN_TABLE_TEXT:
            rn(this, e);
            break;
          case kt.IN_TEMPLATE:
            bn(this, e);
            break;
          case kt.AFTER_BODY:
          case kt.IN_FRAMESET:
          case kt.AFTER_FRAMESET:
          case kt.AFTER_AFTER_BODY:
          case kt.AFTER_AFTER_FRAMESET:
            Pt(this, e)
        }
      }

      onWhitespaceCharacter(e) {
        if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === K.LINE_FEED)) {
          if (1 === e.chars.length) return;
          e.chars = e.chars.substr(1)
        }
        if (this.tokenizer.inForeignNode) this._insertCharacters(e); else switch (this.insertionMode) {
          case kt.IN_HEAD:
          case kt.IN_HEAD_NO_SCRIPT:
          case kt.AFTER_HEAD:
          case kt.TEXT:
          case kt.IN_COLUMN_GROUP:
          case kt.IN_SELECT:
          case kt.IN_SELECT_IN_TABLE:
          case kt.IN_FRAMESET:
          case kt.AFTER_FRAMESET:
            this._insertCharacters(e);
            break;
          case kt.IN_BODY:
          case kt.IN_CAPTION:
          case kt.IN_CELL:
          case kt.IN_TEMPLATE:
          case kt.AFTER_BODY:
          case kt.AFTER_AFTER_BODY:
          case kt.AFTER_AFTER_FRAMESET:
            zt(this, e);
            break;
          case kt.IN_TABLE:
          case kt.IN_TABLE_BODY:
          case kt.IN_ROW:
            en(this, e);
            break;
          case kt.IN_TABLE_TEXT:
            sn(this, e)
        }
      }
    }

    function Ct(e, t) {
      let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
      return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : $t(e, t), n
    }

    function St(e, t) {
      let n = null, a = e.openElements.stackTop;
      for (; a >= 0; a--) {
        const i = e.openElements.items[a];
        if (i === t.element) break;
        e._isSpecialElement(i, e.openElements.tagIDs[a]) && (n = i)
      }
      return n || (e.openElements.shortenToLength(a < 0 ? 0 : a), e.activeFormattingElements.removeEntry(t)), n
    }

    function wt(e, t, n) {
      let a = t, i = e.openElements.getCommonAncestor(t);
      for (let s = 0, o = i; o !== n; s++, o = i) {
        i = e.openElements.getCommonAncestor(o);
        const n = e.activeFormattingElements.getElementEntry(o), r = n && s >= 3;
        !n || r ? (r && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = It(e, n), a === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(a), e.treeAdapter.appendChild(o, a), a = o)
      }
      return a
    }

    function It(e, t) {
      const n = e.treeAdapter.getNamespaceURI(t.element),
        a = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
      return e.openElements.replace(t.element, a), t.element = a, a
    }

    function Nt(e, t, n) {
      const a = Ce(e.treeAdapter.getTagName(t));
      if (e._isElementCausesFosterParenting(a)) e._fosterParentElement(n); else {
        const i = e.treeAdapter.getNamespaceURI(t);
        a === ye.TEMPLATE && i === ve.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n)
      }
    }

    function Dt(e, t, n) {
      const a = e.treeAdapter.getNamespaceURI(n.element), {token: i} = n,
        s = e.treeAdapter.createElement(i.tagName, a, i.attrs);
      e._adoptNodes(t, s), e.treeAdapter.appendChild(t, s), e.activeFormattingElements.insertElementAfterBookmark(s, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, s, i.tagID)
    }

    function Lt(e, t) {
      for (let n = 0; n < 8; n++) {
        const n = Ct(e, t);
        if (!n) break;
        const a = St(e, n);
        if (!a) break;
        e.activeFormattingElements.bookmark = n;
        const i = wt(e, a, n.element), s = e.openElements.getCommonAncestor(n.element);
        e.treeAdapter.detachNode(i), s && Nt(e, s, i), Dt(e, a, n)
      }
    }

    function Rt(e, t) {
      e._appendCommentNode(t, e.openElements.currentTmplContentOrNode)
    }

    function Pt(e, t) {
      if (e.stopped = !0, t.location) {
        const n = e.fragmentContext ? 0 : 2;
        for (let a = e.openElements.stackTop; a >= n; a--) e._setEndLocation(e.openElements.items[a], t);
        if (!e.fragmentContext && e.openElements.stackTop >= 0) {
          const n = e.openElements.items[0], a = e.treeAdapter.getNodeSourceCodeLocation(n);
          if (a && !a.endTag && (e._setEndLocation(n, t), e.openElements.stackTop >= 1)) {
            const n = e.openElements.items[1], a = e.treeAdapter.getNodeSourceCodeLocation(n);
            a && !a.endTag && e._setEndLocation(n, t)
          }
        }
      }
    }

    function Ot(e, t) {
      e._err(t, oe.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, Te.QUIRKS), e.insertionMode = kt.BEFORE_HTML, e._processToken(t)
    }

    function Mt(e, t) {
      e._insertFakeRootElement(), e.insertionMode = kt.BEFORE_HEAD, e._processToken(t)
    }

    function Bt(e, t) {
      e._insertFakeElement(Ae.HEAD, ye.HEAD), e.headElement = e.openElements.current, e.insertionMode = kt.IN_HEAD, e._processToken(t)
    }

    function Ut(e, t) {
      switch (t.tagID) {
        case ye.HTML:
          Kt(e, t);
          break;
        case ye.BASE:
        case ye.BASEFONT:
        case ye.BGSOUND:
        case ye.LINK:
        case ye.META:
          e._appendElement(t, ve.HTML), t.ackSelfClosing = !0;
          break;
        case ye.TITLE:
          e._switchToTextParsing(t, Re.RCDATA);
          break;
        case ye.NOSCRIPT:
          e.options.scriptingEnabled ? e._switchToTextParsing(t, Re.RAWTEXT) : (e._insertElement(t, ve.HTML), e.insertionMode = kt.IN_HEAD_NO_SCRIPT);
          break;
        case ye.NOFRAMES:
        case ye.STYLE:
          e._switchToTextParsing(t, Re.RAWTEXT);
          break;
        case ye.SCRIPT:
          e._switchToTextParsing(t, Re.SCRIPT_DATA);
          break;
        case ye.TEMPLATE:
          e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = kt.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(kt.IN_TEMPLATE);
          break;
        case ye.HEAD:
          e._err(t, oe.misplacedStartTagForHeadElement);
          break;
        default:
          Ht(e, t)
      }
    }

    function Ft(e, t) {
      e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== ye.TEMPLATE && e._err(t, oe.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(ye.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, oe.endTagWithoutMatchingOpenElement)
    }

    function Ht(e, t) {
      e.openElements.pop(), e.insertionMode = kt.AFTER_HEAD, e._processToken(t)
    }

    function jt(e, t) {
      const n = t.type === ce.EOF ? oe.openElementsLeftAfterEof : oe.disallowedContentInNoscriptInHead;
      e._err(t, n), e.openElements.pop(), e.insertionMode = kt.IN_HEAD, e._processToken(t)
    }

    function Gt(e, t) {
      e._insertFakeElement(Ae.BODY, ye.BODY), e.insertionMode = kt.IN_BODY, qt(e, t)
    }

    function qt(e, t) {
      switch (t.type) {
        case ce.CHARACTER:
          Yt(e, t);
          break;
        case ce.WHITESPACE_CHARACTER:
          zt(e, t);
          break;
        case ce.COMMENT:
          Rt(e, t);
          break;
        case ce.START_TAG:
          Kt(e, t);
          break;
        case ce.END_TAG:
          Jt(e, t);
          break;
        case ce.EOF:
          Zt(e, t)
      }
    }

    function zt(e, t) {
      e._reconstructActiveFormattingElements(), e._insertCharacters(t)
    }

    function Yt(e, t) {
      e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1
    }

    function Vt(e, t) {
      e._reconstructActiveFormattingElements(), e._appendElement(t, ve.HTML), e.framesetOk = !1, t.ackSelfClosing = !0
    }

    function Wt(e) {
      const t = le(e, ke.TYPE);
      return null != t && "hidden" === t.toLowerCase()
    }

    function Qt(e, t) {
      e._switchToTextParsing(t, Re.RAWTEXT)
    }

    function Xt(e, t) {
      e._reconstructActiveFormattingElements(), e._insertElement(t, ve.HTML)
    }

    function Kt(e, t) {
      switch (t.tagID) {
        case ye.I:
        case ye.S:
        case ye.B:
        case ye.U:
        case ye.EM:
        case ye.TT:
        case ye.BIG:
        case ye.CODE:
        case ye.FONT:
        case ye.SMALL:
        case ye.STRIKE:
        case ye.STRONG:
          !function (e, t) {
            e._reconstructActiveFormattingElements(), e._insertElement(t, ve.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t)
          }(e, t);
          break;
        case ye.A:
          !function (e, t) {
            const n = e.activeFormattingElements.getElementEntryInScopeWithTagName(Ae.A);
            n && (Lt(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, ve.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t)
          }(e, t);
          break;
        case ye.H1:
        case ye.H2:
        case ye.H3:
        case ye.H4:
        case ye.H5:
        case ye.H6:
          !function (e, t) {
            e.openElements.hasInButtonScope(ye.P) && e._closePElement(), Ie(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, ve.HTML)
          }(e, t);
          break;
        case ye.P:
        case ye.DL:
        case ye.OL:
        case ye.UL:
        case ye.DIV:
        case ye.DIR:
        case ye.NAV:
        case ye.MAIN:
        case ye.MENU:
        case ye.ASIDE:
        case ye.CENTER:
        case ye.FIGURE:
        case ye.FOOTER:
        case ye.HEADER:
        case ye.HGROUP:
        case ye.DIALOG:
        case ye.DETAILS:
        case ye.ADDRESS:
        case ye.ARTICLE:
        case ye.SECTION:
        case ye.SUMMARY:
        case ye.FIELDSET:
        case ye.BLOCKQUOTE:
        case ye.FIGCAPTION:
          !function (e, t) {
            e.openElements.hasInButtonScope(ye.P) && e._closePElement(), e._insertElement(t, ve.HTML)
          }(e, t);
          break;
        case ye.LI:
        case ye.DD:
        case ye.DT:
          !function (e, t) {
            e.framesetOk = !1;
            const n = t.tagID;
            for (let t = e.openElements.stackTop; t >= 0; t--) {
              const a = e.openElements.tagIDs[t];
              if (n === ye.LI && a === ye.LI || (n === ye.DD || n === ye.DT) && (a === ye.DD || a === ye.DT)) {
                e.openElements.generateImpliedEndTagsWithExclusion(a), e.openElements.popUntilTagNamePopped(a);
                break
              }
              if (a !== ye.ADDRESS && a !== ye.DIV && a !== ye.P && e._isSpecialElement(e.openElements.items[t], a)) break
            }
            e.openElements.hasInButtonScope(ye.P) && e._closePElement(), e._insertElement(t, ve.HTML)
          }(e, t);
          break;
        case ye.BR:
        case ye.IMG:
        case ye.WBR:
        case ye.AREA:
        case ye.EMBED:
        case ye.KEYGEN:
          Vt(e, t);
          break;
        case ye.HR:
          !function (e, t) {
            e.openElements.hasInButtonScope(ye.P) && e._closePElement(), e._appendElement(t, ve.HTML), e.framesetOk = !1, t.ackSelfClosing = !0
          }(e, t);
          break;
        case ye.RB:
        case ye.RTC:
          !function (e, t) {
            e.openElements.hasInScope(ye.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, ve.HTML)
          }(e, t);
          break;
        case ye.RT:
        case ye.RP:
          !function (e, t) {
            e.openElements.hasInScope(ye.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(ye.RTC), e._insertElement(t, ve.HTML)
          }(e, t);
          break;
        case ye.PRE:
        case ye.LISTING:
          !function (e, t) {
            e.openElements.hasInButtonScope(ye.P) && e._closePElement(), e._insertElement(t, ve.HTML), e.skipNextNewLine = !0, e.framesetOk = !1
          }(e, t);
          break;
        case ye.XMP:
          !function (e, t) {
            e.openElements.hasInButtonScope(ye.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, Re.RAWTEXT)
          }(e, t);
          break;
        case ye.SVG:
          !function (e, t) {
            e._reconstructActiveFormattingElements(), xt(t), Et(t), t.selfClosing ? e._appendElement(t, ve.SVG) : e._insertElement(t, ve.SVG), t.ackSelfClosing = !0
          }(e, t);
          break;
        case ye.HTML:
          !function (e, t) {
            0 === e.openElements.tmplCount && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs)
          }(e, t);
          break;
        case ye.BASE:
        case ye.LINK:
        case ye.META:
        case ye.STYLE:
        case ye.TITLE:
        case ye.SCRIPT:
        case ye.BGSOUND:
        case ye.BASEFONT:
        case ye.TEMPLATE:
          Ut(e, t);
          break;
        case ye.BODY:
          !function (e, t) {
            const n = e.openElements.tryPeekProperlyNestedBodyElement();
            n && 0 === e.openElements.tmplCount && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs))
          }(e, t);
          break;
        case ye.FORM:
          !function (e, t) {
            const n = e.openElements.tmplCount > 0;
            e.formElement && !n || (e.openElements.hasInButtonScope(ye.P) && e._closePElement(), e._insertElement(t, ve.HTML), n || (e.formElement = e.openElements.current))
          }(e, t);
          break;
        case ye.NOBR:
          !function (e, t) {
            e._reconstructActiveFormattingElements(), e.openElements.hasInScope(ye.NOBR) && (Lt(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, ve.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t)
          }(e, t);
          break;
        case ye.MATH:
          !function (e, t) {
            e._reconstructActiveFormattingElements(), bt(t), Et(t), t.selfClosing ? e._appendElement(t, ve.MATHML) : e._insertElement(t, ve.MATHML), t.ackSelfClosing = !0
          }(e, t);
          break;
        case ye.TABLE:
          !function (e, t) {
            e.treeAdapter.getDocumentMode(e.document) !== Te.QUIRKS && e.openElements.hasInButtonScope(ye.P) && e._closePElement(), e._insertElement(t, ve.HTML), e.framesetOk = !1, e.insertionMode = kt.IN_TABLE
          }(e, t);
          break;
        case ye.INPUT:
          !function (e, t) {
            e._reconstructActiveFormattingElements(), e._appendElement(t, ve.HTML), Wt(t) || (e.framesetOk = !1), t.ackSelfClosing = !0
          }(e, t);
          break;
        case ye.PARAM:
        case ye.TRACK:
        case ye.SOURCE:
          !function (e, t) {
            e._appendElement(t, ve.HTML), t.ackSelfClosing = !0
          }(e, t);
          break;
        case ye.IMAGE:
          !function (e, t) {
            t.tagName = Ae.IMG, t.tagID = ye.IMG, Vt(e, t)
          }(e, t);
          break;
        case ye.BUTTON:
          !function (e, t) {
            e.openElements.hasInScope(ye.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(ye.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, ve.HTML), e.framesetOk = !1
          }(e, t);
          break;
        case ye.APPLET:
        case ye.OBJECT:
        case ye.MARQUEE:
          !function (e, t) {
            e._reconstructActiveFormattingElements(), e._insertElement(t, ve.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1
          }(e, t);
          break;
        case ye.IFRAME:
          !function (e, t) {
            e.framesetOk = !1, e._switchToTextParsing(t, Re.RAWTEXT)
          }(e, t);
          break;
        case ye.SELECT:
          !function (e, t) {
            e._reconstructActiveFormattingElements(), e._insertElement(t, ve.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === kt.IN_TABLE || e.insertionMode === kt.IN_CAPTION || e.insertionMode === kt.IN_TABLE_BODY || e.insertionMode === kt.IN_ROW || e.insertionMode === kt.IN_CELL ? kt.IN_SELECT_IN_TABLE : kt.IN_SELECT
          }(e, t);
          break;
        case ye.OPTION:
        case ye.OPTGROUP:
          !function (e, t) {
            e.openElements.currentTagId === ye.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, ve.HTML)
          }(e, t);
          break;
        case ye.NOEMBED:
          Qt(e, t);
          break;
        case ye.FRAMESET:
          !function (e, t) {
            const n = e.openElements.tryPeekProperlyNestedBodyElement();
            e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, ve.HTML), e.insertionMode = kt.IN_FRAMESET)
          }(e, t);
          break;
        case ye.TEXTAREA:
          !function (e, t) {
            e._insertElement(t, ve.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Re.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = kt.TEXT
          }(e, t);
          break;
        case ye.NOSCRIPT:
          e.options.scriptingEnabled ? Qt(e, t) : Xt(e, t);
          break;
        case ye.PLAINTEXT:
          !function (e, t) {
            e.openElements.hasInButtonScope(ye.P) && e._closePElement(), e._insertElement(t, ve.HTML), e.tokenizer.state = Re.PLAINTEXT
          }(e, t);
          break;
        case ye.COL:
        case ye.TH:
        case ye.TD:
        case ye.TR:
        case ye.HEAD:
        case ye.FRAME:
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
        case ye.CAPTION:
        case ye.COLGROUP:
          break;
        default:
          Xt(e, t)
      }
    }

    function $t(e, t) {
      const n = t.tagName, a = t.tagID;
      for (let t = e.openElements.stackTop; t > 0; t--) {
        const i = e.openElements.items[t], s = e.openElements.tagIDs[t];
        if (a === s && (a !== ye.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
          e.openElements.generateImpliedEndTagsWithExclusion(a), e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
          break
        }
        if (e._isSpecialElement(i, s)) break
      }
    }

    function Jt(e, t) {
      switch (t.tagID) {
        case ye.A:
        case ye.B:
        case ye.I:
        case ye.S:
        case ye.U:
        case ye.EM:
        case ye.TT:
        case ye.BIG:
        case ye.CODE:
        case ye.FONT:
        case ye.NOBR:
        case ye.SMALL:
        case ye.STRIKE:
        case ye.STRONG:
          Lt(e, t);
          break;
        case ye.P:
          !function (e) {
            e.openElements.hasInButtonScope(ye.P) || e._insertFakeElement(Ae.P, ye.P), e._closePElement()
          }(e);
          break;
        case ye.DL:
        case ye.UL:
        case ye.OL:
        case ye.DIR:
        case ye.DIV:
        case ye.NAV:
        case ye.PRE:
        case ye.MAIN:
        case ye.MENU:
        case ye.ASIDE:
        case ye.BUTTON:
        case ye.CENTER:
        case ye.FIGURE:
        case ye.FOOTER:
        case ye.HEADER:
        case ye.HGROUP:
        case ye.DIALOG:
        case ye.ADDRESS:
        case ye.ARTICLE:
        case ye.DETAILS:
        case ye.SECTION:
        case ye.SUMMARY:
        case ye.LISTING:
        case ye.FIELDSET:
        case ye.BLOCKQUOTE:
        case ye.FIGCAPTION:
          !function (e, t) {
            const n = t.tagID;
            e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n))
          }(e, t);
          break;
        case ye.LI:
          !function (e) {
            e.openElements.hasInListItemScope(ye.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(ye.LI), e.openElements.popUntilTagNamePopped(ye.LI))
          }(e);
          break;
        case ye.DD:
        case ye.DT:
          !function (e, t) {
            const n = t.tagID;
            e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n))
          }(e, t);
          break;
        case ye.H1:
        case ye.H2:
        case ye.H3:
        case ye.H4:
        case ye.H5:
        case ye.H6:
          !function (e) {
            e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped())
          }(e);
          break;
        case ye.BR:
          !function (e) {
            e._reconstructActiveFormattingElements(), e._insertFakeElement(Ae.BR, ye.BR), e.openElements.pop(), e.framesetOk = !1
          }(e);
          break;
        case ye.BODY:
          !function (e, t) {
            if (e.openElements.hasInScope(ye.BODY) && (e.insertionMode = kt.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
              const n = e.openElements.tryPeekProperlyNestedBodyElement();
              n && e._setEndLocation(n, t)
            }
          }(e, t);
          break;
        case ye.HTML:
          !function (e, t) {
            e.openElements.hasInScope(ye.BODY) && (e.insertionMode = kt.AFTER_BODY, xn(e, t))
          }(e, t);
          break;
        case ye.FORM:
          !function (e) {
            const t = e.openElements.tmplCount > 0, {formElement: n} = e;
            t || (e.formElement = null), (n || t) && e.openElements.hasInScope(ye.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(ye.FORM) : n && e.openElements.remove(n))
          }(e);
          break;
        case ye.APPLET:
        case ye.OBJECT:
        case ye.MARQUEE:
          !function (e, t) {
            const n = t.tagID;
            e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker())
          }(e, t);
          break;
        case ye.TEMPLATE:
          Ft(e, t);
          break;
        default:
          $t(e, t)
      }
    }

    function Zt(e, t) {
      e.tmplInsertionModeStack.length > 0 ? bn(e, t) : Pt(e, t)
    }

    function en(e, t) {
      if (At.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = kt.IN_TABLE_TEXT, t.type) {
        case ce.CHARACTER:
          on(e, t);
          break;
        case ce.WHITESPACE_CHARACTER:
          sn(e, t)
      } else an(e, t)
    }

    function tn(e, t) {
      switch (t.tagID) {
        case ye.TD:
        case ye.TH:
        case ye.TR:
          !function (e, t) {
            e.openElements.clearBackToTableContext(), e._insertFakeElement(Ae.TBODY, ye.TBODY), e.insertionMode = kt.IN_TABLE_BODY, un(e, t)
          }(e, t);
          break;
        case ye.STYLE:
        case ye.SCRIPT:
        case ye.TEMPLATE:
          Ut(e, t);
          break;
        case ye.COL:
          !function (e, t) {
            e.openElements.clearBackToTableContext(), e._insertFakeElement(Ae.COLGROUP, ye.COLGROUP), e.insertionMode = kt.IN_COLUMN_GROUP, ln(e, t)
          }(e, t);
          break;
        case ye.FORM:
          !function (e, t) {
            e.formElement || 0 !== e.openElements.tmplCount || (e._insertElement(t, ve.HTML), e.formElement = e.openElements.current, e.openElements.pop())
          }(e, t);
          break;
        case ye.TABLE:
          !function (e, t) {
            e.openElements.hasInTableScope(ye.TABLE) && (e.openElements.popUntilTagNamePopped(ye.TABLE), e._resetInsertionMode(), e._processStartTag(t))
          }(e, t);
          break;
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
          !function (e, t) {
            e.openElements.clearBackToTableContext(), e._insertElement(t, ve.HTML), e.insertionMode = kt.IN_TABLE_BODY
          }(e, t);
          break;
        case ye.INPUT:
          !function (e, t) {
            Wt(t) ? e._appendElement(t, ve.HTML) : an(e, t), t.ackSelfClosing = !0
          }(e, t);
          break;
        case ye.CAPTION:
          !function (e, t) {
            e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, ve.HTML), e.insertionMode = kt.IN_CAPTION
          }(e, t);
          break;
        case ye.COLGROUP:
          !function (e, t) {
            e.openElements.clearBackToTableContext(), e._insertElement(t, ve.HTML), e.insertionMode = kt.IN_COLUMN_GROUP
          }(e, t);
          break;
        default:
          an(e, t)
      }
    }

    function nn(e, t) {
      switch (t.tagID) {
        case ye.TABLE:
          e.openElements.hasInTableScope(ye.TABLE) && (e.openElements.popUntilTagNamePopped(ye.TABLE), e._resetInsertionMode());
          break;
        case ye.TEMPLATE:
          Ft(e, t);
          break;
        case ye.BODY:
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.HTML:
        case ye.TBODY:
        case ye.TD:
        case ye.TFOOT:
        case ye.TH:
        case ye.THEAD:
        case ye.TR:
          break;
        default:
          an(e, t)
      }
    }

    function an(e, t) {
      const n = e.fosterParentingEnabled;
      e.fosterParentingEnabled = !0, qt(e, t), e.fosterParentingEnabled = n
    }

    function sn(e, t) {
      e.pendingCharacterTokens.push(t)
    }

    function on(e, t) {
      e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0
    }

    function rn(e, t) {
      let n = 0;
      if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) an(e, e.pendingCharacterTokens[n]); else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
      e.insertionMode = e.originalInsertionMode, e._processToken(t)
    }

    const cn = new Set([ye.CAPTION, ye.COL, ye.COLGROUP, ye.TBODY, ye.TD, ye.TFOOT, ye.TH, ye.THEAD, ye.TR]);

    function ln(e, t) {
      switch (t.tagID) {
        case ye.HTML:
          Kt(e, t);
          break;
        case ye.COL:
          e._appendElement(t, ve.HTML), t.ackSelfClosing = !0;
          break;
        case ye.TEMPLATE:
          Ut(e, t);
          break;
        default:
          pn(e, t)
      }
    }

    function pn(e, t) {
      e.openElements.currentTagId === ye.COLGROUP && (e.openElements.pop(), e.insertionMode = kt.IN_TABLE, e._processToken(t))
    }

    function un(e, t) {
      switch (t.tagID) {
        case ye.TR:
          e.openElements.clearBackToTableBodyContext(), e._insertElement(t, ve.HTML), e.insertionMode = kt.IN_ROW;
          break;
        case ye.TH:
        case ye.TD:
          e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(Ae.TR, ye.TR), e.insertionMode = kt.IN_ROW, mn(e, t);
          break;
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
          e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = kt.IN_TABLE, tn(e, t));
          break;
        default:
          tn(e, t)
      }
    }

    function dn(e, t) {
      const n = t.tagID;
      switch (t.tagID) {
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
          e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = kt.IN_TABLE);
          break;
        case ye.TABLE:
          e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = kt.IN_TABLE, nn(e, t));
          break;
        case ye.BODY:
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.HTML:
        case ye.TD:
        case ye.TH:
        case ye.TR:
          break;
        default:
          nn(e, t)
      }
    }

    function mn(e, t) {
      switch (t.tagID) {
        case ye.TH:
        case ye.TD:
          e.openElements.clearBackToTableRowContext(), e._insertElement(t, ve.HTML), e.insertionMode = kt.IN_CELL, e.activeFormattingElements.insertMarker();
          break;
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
        case ye.TR:
          e.openElements.hasInTableScope(ye.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = kt.IN_TABLE_BODY, un(e, t));
          break;
        default:
          tn(e, t)
      }
    }

    function hn(e, t) {
      switch (t.tagID) {
        case ye.TR:
          e.openElements.hasInTableScope(ye.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = kt.IN_TABLE_BODY);
          break;
        case ye.TABLE:
          e.openElements.hasInTableScope(ye.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = kt.IN_TABLE_BODY, dn(e, t));
          break;
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
          (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(ye.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = kt.IN_TABLE_BODY, dn(e, t));
          break;
        case ye.BODY:
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.HTML:
        case ye.TD:
        case ye.TH:
          break;
        default:
          nn(e, t)
      }
    }

    function fn(e, t) {
      switch (t.tagID) {
        case ye.HTML:
          Kt(e, t);
          break;
        case ye.OPTION:
          e.openElements.currentTagId === ye.OPTION && e.openElements.pop(), e._insertElement(t, ve.HTML);
          break;
        case ye.OPTGROUP:
          e.openElements.currentTagId === ye.OPTION && e.openElements.pop(), e.openElements.currentTagId === ye.OPTGROUP && e.openElements.pop(), e._insertElement(t, ve.HTML);
          break;
        case ye.INPUT:
        case ye.KEYGEN:
        case ye.TEXTAREA:
        case ye.SELECT:
          e.openElements.hasInSelectScope(ye.SELECT) && (e.openElements.popUntilTagNamePopped(ye.SELECT), e._resetInsertionMode(), t.tagID !== ye.SELECT && e._processStartTag(t));
          break;
        case ye.SCRIPT:
        case ye.TEMPLATE:
          Ut(e, t)
      }
    }

    function gn(e, t) {
      switch (t.tagID) {
        case ye.OPTGROUP:
          e.openElements.stackTop > 0 && e.openElements.currentTagId === ye.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === ye.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === ye.OPTGROUP && e.openElements.pop();
          break;
        case ye.OPTION:
          e.openElements.currentTagId === ye.OPTION && e.openElements.pop();
          break;
        case ye.SELECT:
          e.openElements.hasInSelectScope(ye.SELECT) && (e.openElements.popUntilTagNamePopped(ye.SELECT), e._resetInsertionMode());
          break;
        case ye.TEMPLATE:
          Ft(e, t)
      }
    }

    function bn(e, t) {
      e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(ye.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : Pt(e, t)
    }

    function xn(e, t) {
      var n;
      if (t.tagID === ye.HTML) {
        if (e.fragmentContext || (e.insertionMode = kt.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === ye.HTML) {
          e._setEndLocation(e.openElements.items[0], t);
          const a = e.openElements.items[1];
          a && !(null === (n = e.treeAdapter.getNodeSourceCodeLocation(a)) || void 0 === n ? void 0 : n.endTag) && e._setEndLocation(a, t)
        }
      } else En(e, t)
    }

    function En(e, t) {
      e.insertionMode = kt.IN_BODY, qt(e, t)
    }

    function vn(e, t) {
      e.insertionMode = kt.IN_BODY, qt(e, t)
    }

    function kn(e) {
      for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== ve.HTML && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop()
    }

    const Tn = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
    String.prototype.codePointAt;

    function An(e, t) {
      return function (n) {
        let a, i = 0, s = "";
        for (; a = e.exec(n);) i !== a.index && (s += n.substring(i, a.index)), s += t.get(a[0].charCodeAt(0)), i = a.index + 1;
        return s + n.substring(i)
      }
    }

    An(/[&<>'"]/g, Tn);
    const yn = An(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])),
      _n = An(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]])),
      Cn = new Set([Ae.AREA, Ae.BASE, Ae.BASEFONT, Ae.BGSOUND, Ae.BR, Ae.COL, Ae.EMBED, Ae.FRAME, Ae.HR, Ae.IMG, Ae.INPUT, Ae.KEYGEN, Ae.LINK, Ae.META, Ae.PARAM, Ae.SOURCE, Ae.TRACK, Ae.WBR]);

    function Sn(e, t) {
      return t.treeAdapter.isElementNode(e) && t.treeAdapter.getNamespaceURI(e) === ve.HTML && Cn.has(t.treeAdapter.getTagName(e))
    }

    const wn = {treeAdapter: at, scriptingEnabled: !0};

    function In(e, t) {
      const n = {...wn, ...t};
      return Sn(e, n) ? "" : Nn(e, n)
    }

    function Nn(e, t) {
      let n = "";
      const a = t.treeAdapter.isElementNode(e) && t.treeAdapter.getTagName(e) === Ae.TEMPLATE && t.treeAdapter.getNamespaceURI(e) === ve.HTML ? t.treeAdapter.getTemplateContent(e) : e,
        i = t.treeAdapter.getChildNodes(a);
      if (i) for (const e of i) n += Dn(e, t);
      return n
    }

    function Dn(e, t) {
      return t.treeAdapter.isElementNode(e) ? function (e, t) {
        const n = t.treeAdapter.getTagName(e);
        return `<${n}${function (e, {treeAdapter: t}) {
          let n = "";
          for (const a of t.getAttrList(e)) {
            if (n += " ", a.namespace) switch (a.namespace) {
              case ve.XML:
                n += `xml:${a.name}`;
                break;
              case ve.XMLNS:
                "xmlns" !== a.name && (n += "xmlns:"), n += a.name;
                break;
              case ve.XLINK:
                n += `xlink:${a.name}`;
                break;
              default:
                n += `${a.prefix}:${a.name}`
            } else n += a.name;
            n += `="${yn(a.value)}"`
          }
          return n
        }(e, t)}>${Sn(e, t) ? "" : `${Nn(e, t)}</${n}>`}`
      }(e, t) : t.treeAdapter.isTextNode(e) ? function (e, t) {
        const {treeAdapter: n} = t, a = n.getTextNodeContent(e), i = n.getParentNode(e),
          s = i && n.isElementNode(i) && n.getTagName(i);
        return s && n.getNamespaceURI(i) === ve.HTML && (o = s, r = t.scriptingEnabled, Ne.has(o) || r && o === Ae.NOSCRIPT) ? a : _n(a);
        var o, r
      }(e, t) : t.treeAdapter.isCommentNode(e) ? function (e, {treeAdapter: t}) {
        return `\x3c!--${t.getCommentNodeContent(e)}--\x3e`
      }(e, t) : t.treeAdapter.isDocumentTypeNode(e) ? function (e, {treeAdapter: t}) {
        return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`
      }(e, t) : ""
    }

    function Ln(e, t) {
      return _t.parse(e, t)
    }

    function Rn(e, t, n) {
      "string" == typeof e && (n = t, t = e, e = null);
      const a = _t.getFragmentParser(e, n);
      return a.tokenizer.write(t, !0), a.getFragment()
    }

    class Pn extends W {
      constructor(e, t = !1, n = {}) {
        super(), this.stream = t, this.node = e, this.options = n
      }

      setAttribute(e, t) {
        for (const n of this.attrs) if (n.name === e) return n.value = t, !0;
        this.attrs.push({name: e, value: t})
      }

      getAttribute(e) {
        return (this.attrs.find((t => t.name === e)) || {}).value
      }

      hasAttribute(e) {
        return !!this.attrs.find((t => t.name === e))
      }

      removeAttribute(e) {
        const t = this.attrs.findIndex((t => t.name === e));
        void 0 !== t && this.attrs.splice(t, 1)
      }

      get tagName() {
        return this.node.tagName
      }

      set tagName(e) {
        this.node.tagName = e
      }

      get childNodes() {
        return this.stream ? null : this.node.childNodes
      }

      get innerHTML() {
        return this.stream ? null : In({nodeName: "#document-fragment", childNodes: this.childNodes})
      }

      set innerHTML(e) {
        this.stream || (this.node.childNodes = Rn(e).childNodes)
      }

      get outerHTML() {
        return this.stream ? null : In({nodeName: "#document-fragment", childNodes: [this]})
      }

      set outerHTML(e) {
        this.stream || this.parentNode.childNodes.splice(this.parentNode.childNodes.findIndex((e => e === this.node)), 1, ...Rn(e).childNodes)
      }

      get textContent() {
        if (this.stream) return null;
        let e = "";
        return this.iterate(this.node, (t => {
          "#text" === t.nodeName && (e += t.value)
        })), e
      }

      set textContent(e) {
        this.stream || (this.node.childNodes = [{nodeName: "#text", value: e, parentNode: this.node}])
      }

      get nodeName() {
        return this.node.nodeName
      }

      get parentNode() {
        return this.node.parentNode ? new Pn(this.node.parentNode) : null
      }

      get attrs() {
        return this.node.attrs
      }

      get namespaceURI() {
        return this.node.namespaceURI
      }
    }

    class On {
      constructor(e, t, n = {}) {
        this.attr = t, this.attrs = e.attrs, this.node = e, this.options = n
      }

      delete() {
        const e = this.attrs.findIndex((e => e === this.attr));
        return this.attrs.splice(e, 1), Object.defineProperty(this, "deleted", {get: () => !0}), !0
      }

      get name() {
        return this.attr.name
      }

      set name(e) {
        this.attr.name = e
      }

      get value() {
        return this.attr.value
      }

      set value(e) {
        this.attr.value = e
      }

      get deleted() {
        return !1
      }
    }

    class Mn {
      constructor(e, t, n = !1, a = {}) {
        this.stream = n, this.node = e, this.element = t, this.options = a
      }

      get nodeName() {
        return this.node.nodeName
      }

      get parentNode() {
        return this.element
      }

      get value() {
        return this.stream ? this.node.text : this.node.value
      }

      set value(e) {
        this.stream ? this.node.text = e : this.node.value = e
      }
    }

    const Bn = class extends W {
        constructor(e) {
          super(), this.ctx = e, this.rewriteUrl = e.rewriteUrl, this.sourceUrl = e.sourceUrl
        }

        rewrite(e, t = {}) {
          return e ? this.recast(e, (e => {
            e.tagName && this.emit("element", e, "rewrite"), e.attr && this.emit("attr", e, "rewrite"), "#text" === e.nodeName && this.emit("text", e, "rewrite")
          }), t) : e
        }

        source(e, t = {}) {
          return e ? this.recast(e, (e => {
            e.tagName && this.emit("element", e, "source"), e.attr && this.emit("attr", e, "source"), "#text" === e.nodeName && this.emit("text", e, "source")
          }), t) : e
        }

        recast(e, t, n = {}) {
          try {
            const a = (n.document ? Ln : Rn)(new String(e).toString());
            return this.iterate(a, t, n), In(a)
          } catch (t) {
            return e
          }
        }

        iterate(e, t, n) {
          if (!e) return e;
          if (e.tagName) {
            const a = new Pn(e, !1, n);
            if (t(a), e.attrs) for (const i of e.attrs) i.skip || t(new On(a, i, n))
          }
          if (e.childNodes) for (const a of e.childNodes) a.skip || this.iterate(a, t, n);
          return "#text" === e.nodeName && t(new Mn(e, new Pn(e.parentNode), !1, n)), e
        }

        wrapSrcset(e, t = this.ctx.meta) {
          return e.split(",").map((e => {
            const n = e.trimStart().split(" ");
            return n[0] && (n[0] = this.ctx.rewriteUrl(n[0], t)), n.join(" ")
          })).join(", ")
        }

        unwrapSrcset(e, t = this.ctx.meta) {
          return e.split(",").map((e => {
            const n = e.trimStart().split(" ");
            return n[0] && (n[0] = this.ctx.sourceUrl(n[0], t)), n.join(" ")
          })).join(", ")
        }

        static parse = Ln;
        static parseFragment = Rn;
        static serialize = In
      }, Un = 10, Fn = 11, Hn = 12, jn = 13, Gn = 15, qn = 16, zn = 17, Yn = 18, Vn = 19, Wn = 20, Qn = 21, Xn = 22,
      Kn = 23, $n = 24, Jn = 25;

    function Zn(e) {
      return e >= 48 && e <= 57
    }

    function ea(e) {
      return Zn(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102
    }

    function ta(e) {
      return e >= 65 && e <= 90
    }

    function na(e) {
      return function (e) {
        return ta(e) || function (e) {
          return e >= 97 && e <= 122
        }(e)
      }(e) || function (e) {
        return e >= 128
      }(e) || 95 === e
    }

    function aa(e) {
      return na(e) || Zn(e) || 45 === e
    }

    function ia(e) {
      return e >= 0 && e <= 8 || 11 === e || e >= 14 && e <= 31 || 127 === e
    }

    function sa(e) {
      return 10 === e || 13 === e || 12 === e
    }

    function oa(e) {
      return sa(e) || 32 === e || 9 === e
    }

    function ra(e, t) {
      return 92 === e && (!sa(t) && 0 !== t)
    }

    function ca(e, t, n) {
      return 45 === e ? na(t) || 45 === t || ra(t, n) : !!na(e) || 92 === e && ra(e, t)
    }

    function la(e, t, n) {
      return 43 === e || 45 === e ? Zn(t) ? 2 : 46 === t && Zn(n) ? 3 : 0 : 46 === e ? Zn(t) ? 2 : 0 : Zn(e) ? 1 : 0
    }

    function pa(e) {
      return 65279 === e || 65534 === e ? 1 : 0
    }

    const ua = new Array(128), da = 130;
    for (let e = 0; e < ua.length; e++) ua[e] = (oa(e) ? da : Zn(e) && 131) || na(e) && 132 || ia(e) && 133 || e || 128;

    function ma(e) {
      return e < 128 ? ua[e] : 132
    }

    function ha(e, t) {
      return t < e.length ? e.charCodeAt(t) : 0
    }

    function fa(e, t, n) {
      return 13 === n && 10 === ha(e, t + 1) ? 2 : 1
    }

    function ga(e, t, n) {
      let a = e.charCodeAt(t);
      return ta(a) && (a |= 32), a === n
    }

    function ba(e, t, n, a) {
      if (n - t !== a.length) return !1;
      if (t < 0 || n > e.length) return !1;
      for (let i = t; i < n; i++) {
        const n = a.charCodeAt(i - t);
        let s = e.charCodeAt(i);
        if (ta(s) && (s |= 32), s !== n) return !1
      }
      return !0
    }

    function xa(e, t) {
      for (; t < e.length && oa(e.charCodeAt(t)); t++) ;
      return t
    }

    function Ea(e, t) {
      for (; t < e.length && Zn(e.charCodeAt(t)); t++) ;
      return t
    }

    function va(e, t) {
      if (ea(ha(e, (t += 2) - 1))) {
        for (const n = Math.min(e.length, t + 5); t < n && ea(ha(e, t)); t++) ;
        const n = ha(e, t);
        oa(n) && (t += fa(e, t, n))
      }
      return t
    }

    function ka(e, t) {
      for (; t < e.length; t++) {
        const n = e.charCodeAt(t);
        if (!aa(n)) {
          if (!ra(n, ha(e, t + 1))) break;
          t = va(e, t) - 1
        }
      }
      return t
    }

    function Ta(e, t) {
      let n = e.charCodeAt(t);
      if (43 !== n && 45 !== n || (n = e.charCodeAt(t += 1)), Zn(n) && (t = Ea(e, t + 1), n = e.charCodeAt(t)), 46 === n && Zn(e.charCodeAt(t + 1)) && (t = Ea(e, t += 2)), ga(e, t, 101)) {
        let a = 0;
        n = e.charCodeAt(t + 1), 45 !== n && 43 !== n || (a = 1, n = e.charCodeAt(t + 2)), Zn(n) && (t = Ea(e, t + 1 + a + 1))
      }
      return t
    }

    function Aa(e, t) {
      for (; t < e.length; t++) {
        const n = e.charCodeAt(t);
        if (41 === n) {
          t++;
          break
        }
        ra(n, ha(e, t + 1)) && (t = va(e, t))
      }
      return t
    }

    function ya(e) {
      if (1 === e.length && !ea(e.charCodeAt(0))) return e[0];
      let t = parseInt(e, 16);
      return (0 === t || t >= 55296 && t <= 57343 || t > 1114111) && (t = 65533), String.fromCodePoint(t)
    }

    const _a = ["EOF-token", "ident-token", "function-token", "at-keyword-token", "hash-token", "string-token", "bad-string-token", "url-token", "bad-url-token", "delim-token", "number-token", "percentage-token", "dimension-token", "whitespace-token", "CDO-token", "CDC-token", "colon-token", "semicolon-token", "comma-token", "[-token", "]-token", "(-token", ")-token", "{-token", "}-token"];

    function Ca(e = null, t) {
      return null === e || e.length < t ? new Uint32Array(Math.max(t + 1024, 16384)) : e
    }

    function Sa(e) {
      const t = e.source, n = t.length, a = t.length > 0 ? pa(t.charCodeAt(0)) : 0, i = Ca(e.lines, n),
        s = Ca(e.columns, n);
      let o = e.startLine, r = e.startColumn;
      for (let e = a; e < n; e++) {
        const a = t.charCodeAt(e);
        i[e] = o, s[e] = r++, 10 !== a && 13 !== a && 12 !== a || (13 === a && e + 1 < n && 10 === t.charCodeAt(e + 1) && (e++, i[e] = o, s[e] = r), o++, r = 1)
      }
      i[n] = o, s[n] = r, e.lines = i, e.columns = s, e.computed = !0
    }

    class wa {
      constructor() {
        this.lines = null, this.columns = null, this.computed = !1
      }

      setSource(e, t = 0, n = 1, a = 1) {
        this.source = e, this.startOffset = t, this.startLine = n, this.startColumn = a, this.computed = !1
      }

      getLocation(e, t) {
        return this.computed || Sa(this), {
          source: t,
          offset: this.startOffset + e,
          line: this.lines[e],
          column: this.columns[e]
        }
      }

      getLocationRange(e, t, n) {
        return this.computed || Sa(this), {
          source: n,
          start: {offset: this.startOffset + e, line: this.lines[e], column: this.columns[e]},
          end: {offset: this.startOffset + t, line: this.lines[t], column: this.columns[t]}
        }
      }
    }

    const Ia = 16777215, Na = 24, Da = new Map([[2, Xn], [Qn, Xn], [Vn, Wn], [Kn, $n]]);

    class La {
      constructor(e, t) {
        this.setSource(e, t)
      }

      reset() {
        this.eof = !1, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset
      }

      setSource(e = "", t = (() => {
      })) {
        const n = (e = String(e || "")).length, a = Ca(this.offsetAndType, e.length + 1),
          i = Ca(this.balance, e.length + 1);
        let s = 0, o = 0, r = 0, c = -1;
        for (this.offsetAndType = null, this.balance = null, t(e, ((e, t, l) => {
          switch (e) {
            default:
              i[s] = n;
              break;
            case o: {
              let e = r & Ia;
              for (r = i[e], o = r >> Na, i[s] = e, i[e++] = s; e < s; e++) i[e] === n && (i[e] = s);
              break
            }
            case Qn:
            case 2:
            case Vn:
            case Kn:
              i[s] = r, o = Da.get(e), r = o << Na | s
          }
          a[s++] = e << Na | l, -1 === c && (c = t)
        })), a[s] = 0 | n, i[s] = n, i[n] = n; 0 !== r;) {
          const e = r & Ia;
          r = i[e], i[e] = n
        }
        this.source = e, this.firstCharOffset = -1 === c ? 0 : c, this.tokenCount = s, this.offsetAndType = a, this.balance = i, this.reset(), this.next()
      }

      lookupType(e) {
        return (e += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e] >> Na : 0
      }

      lookupOffset(e) {
        return (e += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e - 1] & Ia : this.source.length
      }

      lookupValue(e, t) {
        return (e += this.tokenIndex) < this.tokenCount && ba(this.source, this.offsetAndType[e - 1] & Ia, this.offsetAndType[e] & Ia, t)
      }

      getTokenStart(e) {
        return e === this.tokenIndex ? this.tokenStart : e > 0 ? e < this.tokenCount ? this.offsetAndType[e - 1] & Ia : this.offsetAndType[this.tokenCount] & Ia : this.firstCharOffset
      }

      substrToCursor(e) {
        return this.source.substring(e, this.tokenStart)
      }

      isBalanceEdge(e) {
        return this.balance[this.tokenIndex] < e
      }

      isDelim(e, t) {
        return t ? 9 === this.lookupType(t) && this.source.charCodeAt(this.lookupOffset(t)) === e : 9 === this.tokenType && this.source.charCodeAt(this.tokenStart) === e
      }

      skip(e) {
        let t = this.tokenIndex + e;
        t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = this.offsetAndType[t - 1] & Ia, t = this.offsetAndType[t], this.tokenType = t >> Na, this.tokenEnd = t & Ia) : (this.tokenIndex = this.tokenCount, this.next())
      }

      next() {
        let e = this.tokenIndex + 1;
        e < this.tokenCount ? (this.tokenIndex = e, this.tokenStart = this.tokenEnd, e = this.offsetAndType[e], this.tokenType = e >> Na, this.tokenEnd = e & Ia) : (this.eof = !0, this.tokenIndex = this.tokenCount, this.tokenType = 0, this.tokenStart = this.tokenEnd = this.source.length)
      }

      skipSC() {
        for (; this.tokenType === jn || this.tokenType === Jn;) this.next()
      }

      skipUntilBalanced(e, t) {
        let n, a, i = e;
        e:for (; i < this.tokenCount && (n = this.balance[i], !(n < e)); i++) switch (a = i > 0 ? this.offsetAndType[i - 1] & Ia : this.firstCharOffset, t(this.source.charCodeAt(a))) {
          case 1:
            break e;
          case 2:
            i++;
            break e;
          default:
            this.balance[n] === i && (i = n)
        }
        this.skip(i - this.tokenIndex)
      }

      forEachToken(e) {
        for (let t = 0, n = this.firstCharOffset; t < this.tokenCount; t++) {
          const a = n, i = this.offsetAndType[t], s = i & Ia;
          n = s, e(i >> Na, a, s, t)
        }
      }

      dump() {
        const e = new Array(this.tokenCount);
        return this.forEachToken(((t, n, a, i) => {
          e[i] = {idx: i, type: _a[t], chunk: this.source.substring(n, a), balance: this.balance[i]}
        })), e
      }
    }

    function Ra(e, t) {
      function n(t) {
        return t < o ? e.charCodeAt(t) : 0
      }

      function a() {
        return l = Ta(e, l), ca(n(l), n(l + 1), n(l + 2)) ? (r = Hn, void (l = ka(e, l))) : 37 === n(l) ? (r = Fn, void l++) : void (r = Un)
      }

      function i() {
        const t = l;
        return l = ka(e, l), ba(e, t, l, "url") && 40 === n(l) ? (l = xa(e, l + 1), 34 === n(l) || 39 === n(l) ? (r = 2, void (l = t + 4)) : void function () {
          for (r = 7, l = xa(e, l); l < e.length; l++) {
            const t = e.charCodeAt(l);
            switch (ma(t)) {
              case 41:
                return void l++;
              case da:
                return l = xa(e, l), 41 === n(l) || l >= e.length ? void (l < e.length && l++) : (l = Aa(e, l), void (r = 8));
              case 34:
              case 39:
              case 40:
              case 133:
                return l = Aa(e, l), void (r = 8);
              case 92:
                if (ra(t, n(l + 1))) {
                  l = va(e, l) - 1;
                  break
                }
                return l = Aa(e, l), void (r = 8)
            }
          }
        }()) : 40 === n(l) ? (r = 2, void l++) : void (r = 1)
      }

      function s(t) {
        for (t || (t = n(l++)), r = 5; l < e.length; l++) {
          const a = e.charCodeAt(l);
          switch (ma(a)) {
            case t:
              return void l++;
            case da:
              if (sa(a)) return l += fa(e, l, a), void (r = 6);
              break;
            case 92:
              if (l === e.length - 1) break;
              const i = n(l + 1);
              sa(i) ? l += fa(e, l + 1, i) : ra(a, i) && (l = va(e, l) - 1)
          }
        }
      }

      const o = (e = String(e || "")).length;
      let r, c = pa(n(0)), l = c;
      for (; l < o;) {
        const o = e.charCodeAt(l);
        switch (ma(o)) {
          case da:
            r = jn, l = xa(e, l + 1);
            break;
          case 34:
            s();
            break;
          case 35:
            aa(n(l + 1)) || ra(n(l + 1), n(l + 2)) ? (r = 4, l = ka(e, l + 1)) : (r = 9, l++);
            break;
          case 39:
            s();
            break;
          case 40:
            r = Qn, l++;
            break;
          case 41:
            r = Xn, l++;
            break;
          case 43:
            la(o, n(l + 1), n(l + 2)) ? a() : (r = 9, l++);
            break;
          case 44:
            r = Yn, l++;
            break;
          case 45:
            la(o, n(l + 1), n(l + 2)) ? a() : 45 === n(l + 1) && 62 === n(l + 2) ? (r = Gn, l += 3) : ca(o, n(l + 1), n(l + 2)) ? i() : (r = 9, l++);
            break;
          case 46:
            la(o, n(l + 1), n(l + 2)) ? a() : (r = 9, l++);
            break;
          case 47:
            42 === n(l + 1) ? (r = Jn, l = e.indexOf("*/", l + 2), l = -1 === l ? e.length : l + 2) : (r = 9, l++);
            break;
          case 58:
            r = qn, l++;
            break;
          case 59:
            r = zn, l++;
            break;
          case 60:
            33 === n(l + 1) && 45 === n(l + 2) && 45 === n(l + 3) ? (r = 14, l += 4) : (r = 9, l++);
            break;
          case 64:
            ca(n(l + 1), n(l + 2), n(l + 3)) ? (r = 3, l = ka(e, l + 1)) : (r = 9, l++);
            break;
          case 91:
            r = Vn, l++;
            break;
          case 92:
            ra(o, n(l + 1)) ? i() : (r = 9, l++);
            break;
          case 93:
            r = Wn, l++;
            break;
          case 123:
            r = Kn, l++;
            break;
          case 125:
            r = $n, l++;
            break;
          case 131:
            a();
            break;
          case 132:
            i();
            break;
          default:
            r = 9, l++
        }
        t(r, c, c = l)
      }
    }

    let Pa = null;

    class Oa {
      static createItem(e) {
        return {prev: null, next: null, data: e}
      }

      constructor() {
        this.head = null, this.tail = null, this.cursor = null
      }

      createItem(e) {
        return Oa.createItem(e)
      }

      allocateCursor(e, t) {
        let n;
        return null !== Pa ? (n = Pa, Pa = Pa.cursor, n.prev = e, n.next = t, n.cursor = this.cursor) : n = {
          prev: e,
          next: t,
          cursor: this.cursor
        }, this.cursor = n, n
      }

      releaseCursor() {
        const {cursor: e} = this;
        this.cursor = e.cursor, e.prev = null, e.next = null, e.cursor = Pa, Pa = e
      }

      updateCursors(e, t, n, a) {
        let {cursor: i} = this;
        for (; null !== i;) i.prev === e && (i.prev = t), i.next === n && (i.next = a), i = i.cursor
      }

      * [Symbol.iterator]() {
        for (let e = this.head; null !== e; e = e.next) yield e.data
      }

      get size() {
        let e = 0;
        for (let t = this.head; null !== t; t = t.next) e++;
        return e
      }

      get isEmpty() {
        return null === this.head
      }

      get first() {
        return this.head && this.head.data
      }

      get last() {
        return this.tail && this.tail.data
      }

      fromArray(e) {
        let t = null;
        this.head = null;
        for (let n of e) {
          const e = Oa.createItem(n);
          null !== t ? t.next = e : this.head = e, e.prev = t, t = e
        }
        return this.tail = t, this
      }

      toArray() {
        return [...this]
      }

      toJSON() {
        return [...this]
      }

      forEach(e, t = this) {
        const n = this.allocateCursor(null, this.head);
        for (; null !== n.next;) {
          const a = n.next;
          n.next = a.next, e.call(t, a.data, a, this)
        }
        this.releaseCursor()
      }

      forEachRight(e, t = this) {
        const n = this.allocateCursor(this.tail, null);
        for (; null !== n.prev;) {
          const a = n.prev;
          n.prev = a.prev, e.call(t, a.data, a, this)
        }
        this.releaseCursor()
      }

      reduce(e, t, n = this) {
        let a, i = this.allocateCursor(null, this.head), s = t;
        for (; null !== i.next;) a = i.next, i.next = a.next, s = e.call(n, s, a.data, a, this);
        return this.releaseCursor(), s
      }

      reduceRight(e, t, n = this) {
        let a, i = this.allocateCursor(this.tail, null), s = t;
        for (; null !== i.prev;) a = i.prev, i.prev = a.prev, s = e.call(n, s, a.data, a, this);
        return this.releaseCursor(), s
      }

      some(e, t = this) {
        for (let n = this.head; null !== n; n = n.next) if (e.call(t, n.data, n, this)) return !0;
        return !1
      }

      map(e, t = this) {
        const n = new Oa;
        for (let a = this.head; null !== a; a = a.next) n.appendData(e.call(t, a.data, a, this));
        return n
      }

      filter(e, t = this) {
        const n = new Oa;
        for (let a = this.head; null !== a; a = a.next) e.call(t, a.data, a, this) && n.appendData(a.data);
        return n
      }

      nextUntil(e, t, n = this) {
        if (null === e) return;
        const a = this.allocateCursor(null, e);
        for (; null !== a.next;) {
          const e = a.next;
          if (a.next = e.next, t.call(n, e.data, e, this)) break
        }
        this.releaseCursor()
      }

      prevUntil(e, t, n = this) {
        if (null === e) return;
        const a = this.allocateCursor(e, null);
        for (; null !== a.prev;) {
          const e = a.prev;
          if (a.prev = e.prev, t.call(n, e.data, e, this)) break
        }
        this.releaseCursor()
      }

      clear() {
        this.head = null, this.tail = null
      }

      copy() {
        const e = new Oa;
        for (let t of this) e.appendData(t);
        return e
      }

      prepend(e) {
        return this.updateCursors(null, e, this.head, e), null !== this.head ? (this.head.prev = e, e.next = this.head) : this.tail = e, this.head = e, this
      }

      prependData(e) {
        return this.prepend(Oa.createItem(e))
      }

      append(e) {
        return this.insert(e)
      }

      appendData(e) {
        return this.insert(Oa.createItem(e))
      }

      insert(e, t = null) {
        if (null !== t) if (this.updateCursors(t.prev, e, t, e), null === t.prev) {
          if (this.head !== t) throw new Error("before doesn't belong to list");
          this.head = e, t.prev = e, e.next = t, this.updateCursors(null, e)
        } else t.prev.next = e, e.prev = t.prev, t.prev = e, e.next = t; else this.updateCursors(this.tail, e, null, e), null !== this.tail ? (this.tail.next = e, e.prev = this.tail) : this.head = e, this.tail = e;
        return this
      }

      insertData(e, t) {
        return this.insert(Oa.createItem(e), t)
      }

      remove(e) {
        if (this.updateCursors(e, e.prev, e, e.next), null !== e.prev) e.prev.next = e.next; else {
          if (this.head !== e) throw new Error("item doesn't belong to list");
          this.head = e.next
        }
        if (null !== e.next) e.next.prev = e.prev; else {
          if (this.tail !== e) throw new Error("item doesn't belong to list");
          this.tail = e.prev
        }
        return e.prev = null, e.next = null, e
      }

      push(e) {
        this.insert(Oa.createItem(e))
      }

      pop() {
        return null !== this.tail ? this.remove(this.tail) : null
      }

      unshift(e) {
        this.prepend(Oa.createItem(e))
      }

      shift() {
        return null !== this.head ? this.remove(this.head) : null
      }

      prependList(e) {
        return this.insertList(e, this.head)
      }

      appendList(e) {
        return this.insertList(e)
      }

      insertList(e, t) {
        return null === e.head || (null != t ? (this.updateCursors(t.prev, e.tail, t, e.head), null !== t.prev ? (t.prev.next = e.head, e.head.prev = t.prev) : this.head = e.head, t.prev = e.tail, e.tail.next = t) : (this.updateCursors(this.tail, e.tail, null, e.head), null !== this.tail ? (this.tail.next = e.head, e.head.prev = this.tail) : this.head = e.head, this.tail = e.tail), e.head = null, e.tail = null), this
      }

      replace(e, t) {
        "head" in t ? this.insertList(t, e) : this.insert(t, e), this.remove(e)
      }
    }

    function Ma(e, t) {
      const n = Object.create(SyntaxError.prototype), a = new Error;
      return Object.assign(n, {
        name: e, message: t, get stack() {
          return (a.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}\n`)
        }
      })
    }

    const Ba = "    ";

    function Ua({source: e, line: t, column: n}, a) {
      function i(e, t) {
        return s.slice(e, t).map(((t, n) => String(e + n + 1).padStart(c) + " |" + t)).join("\n")
      }

      const s = e.split(/\r\n?|\n|\f/), o = Math.max(1, t - a) - 1, r = Math.min(t + a, s.length + 1),
        c = Math.max(4, String(r).length) + 1;
      let l = 0;
      (n += (Ba.length - 1) * (s[t - 1].substr(0, n - 1).match(/\t/g) || []).length) > 100 && (l = n - 60 + 3, n = 58);
      for (let e = o; e <= r; e++) e >= 0 && e < s.length && (s[e] = s[e].replace(/\t/g, Ba), s[e] = (l > 0 && s[e].length > l ? "…" : "") + s[e].substr(l, 98) + (s[e].length > l + 100 - 1 ? "…" : ""));
      return [i(o, t), new Array(n + c + 2).join("-") + "^", i(t, r)].filter(Boolean).join("\n")
    }

    function Fa(e, t, n, a, i) {
      return Object.assign(Ma("SyntaxError", e), {
        source: t,
        offset: n,
        line: a,
        column: i,
        sourceFragment: e => Ua({source: t, line: a, column: i}, isNaN(e) ? 0 : e),
        get formattedMessage() {
          return `Parse error: ${e}\n` + Ua({source: t, line: a, column: i}, 2)
        }
      })
    }

    function Ha(e) {
      const t = this.createList();
      let n = !1;
      const a = {recognizer: e};
      for (; !this.eof;) {
        switch (this.tokenType) {
          case Jn:
            this.next();
            continue;
          case jn:
            n = !0, this.next();
            continue
        }
        let i = e.getNode.call(this, a);
        if (void 0 === i) break;
        n && (e.onWhiteSpace && e.onWhiteSpace.call(this, i, t, a), n = !1), t.push(i)
      }
      return n && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, a), t
    }

    const ja = () => {
    };

    function Ga(e) {
      return function () {
        return this[e]()
      }
    }

    function qa(e) {
      const t = Object.create(null);
      for (const n in e) {
        const a = e[n], i = a.parse || a;
        i && (t[n] = i)
      }
      return t
    }

    function za(e) {
      let t = "", n = "<unknown>", a = !1, i = ja, s = !1;
      const o = new wa, r = Object.assign(new La, function (e) {
        const t = {
          context: Object.create(null),
          scope: Object.assign(Object.create(null), e.scope),
          atrule: qa(e.atrule),
          pseudo: qa(e.pseudo),
          node: qa(e.node)
        };
        for (const n in e.parseContext) switch (typeof e.parseContext[n]) {
          case"function":
            t.context[n] = e.parseContext[n];
            break;
          case"string":
            t.context[n] = Ga(e.parseContext[n])
        }
        return {config: t, ...t, ...t.node}
      }(e || {}), {
        parseAtrulePrelude: !0,
        parseRulePrelude: !0,
        parseValue: !0,
        parseCustomProperty: !1,
        readSequence: Ha,
        consumeUntilBalanceEnd: () => 0,
        consumeUntilLeftCurlyBracket: e => 123 === e ? 1 : 0,
        consumeUntilLeftCurlyBracketOrSemicolon: e => 123 === e || 59 === e ? 1 : 0,
        consumeUntilExclamationMarkOrSemicolon: e => 33 === e || 59 === e ? 1 : 0,
        consumeUntilSemicolonIncluded: e => 59 === e ? 2 : 0,
        createList: () => new Oa,
        createSingleNodeList: e => (new Oa).appendData(e),
        getFirstListNode: e => e && e.first,
        getLastListNode: e => e && e.last,
        parseWithFallback(e, t) {
          const n = this.tokenIndex;
          try {
            return e.call(this)
          } catch (e) {
            if (s) throw e;
            const a = t.call(this, n);
            return s = !0, i(e, a), s = !1, a
          }
        },
        lookupNonWSType(e) {
          let t;
          do {
            if (t = this.lookupType(e++), t !== jn) return t
          } while (0 !== t);
          return 0
        },
        charCodeAt: e => e >= 0 && e < t.length ? t.charCodeAt(e) : 0,
        substring: (e, n) => t.substring(e, n),
        substrToCursor(e) {
          return this.source.substring(e, this.tokenStart)
        },
        cmpChar: (e, n) => ga(t, e, n),
        cmpStr: (e, n, a) => ba(t, e, n, a),
        consume(e) {
          const t = this.tokenStart;
          return this.eat(e), this.substrToCursor(t)
        },
        consumeFunctionName() {
          const e = t.substring(this.tokenStart, this.tokenEnd - 1);
          return this.eat(2), e
        },
        consumeNumber(e) {
          const n = t.substring(this.tokenStart, Ta(t, this.tokenStart));
          return this.eat(e), n
        },
        eat(e) {
          if (this.tokenType !== e) {
            const t = _a[e].slice(0, -6).replace(/-/g, " ").replace(/^./, (e => e.toUpperCase()));
            let n = `${/[[\](){}]/.test(t) ? `"${t}"` : t} is expected`, a = this.tokenStart;
            switch (e) {
              case 1:
                2 === this.tokenType || 7 === this.tokenType ? (a = this.tokenEnd - 1, n = "Identifier is expected but function found") : n = "Identifier is expected";
                break;
              case 4:
                this.isDelim(35) && (this.next(), a++, n = "Name is expected");
                break;
              case Fn:
                this.tokenType === Un && (a = this.tokenEnd, n = "Percent sign is expected")
            }
            this.error(n, a)
          }
          this.next()
        },
        eatIdent(e) {
          1 === this.tokenType && !1 !== this.lookupValue(0, e) || this.error(`Identifier "${e}" is expected`), this.next()
        },
        eatDelim(e) {
          this.isDelim(e) || this.error(`Delim "${String.fromCharCode(e)}" is expected`), this.next()
        },
        getLocation: (e, t) => a ? o.getLocationRange(e, t, n) : null,
        getLocationFromList(e) {
          if (a) {
            const t = this.getFirstListNode(e), a = this.getLastListNode(e);
            return o.getLocationRange(null !== t ? t.loc.start.offset - o.startOffset : this.tokenStart, null !== a ? a.loc.end.offset - o.startOffset : this.tokenStart, n)
          }
          return null
        },
        error(e, n) {
          const a = void 0 !== n && n < t.length ? o.getLocation(n) : this.eof ? o.getLocation(function (e, t) {
            for (; t >= 0 && oa(e.charCodeAt(t)); t--) ;
            return t + 1
          }(t, t.length - 1)) : o.getLocation(this.tokenStart);
          throw new Fa(e || "Unexpected input", t, a.offset, a.line, a.column)
        }
      });
      return Object.assign((function (e, c) {
        t = e, c = c || {}, r.setSource(t, Ra), o.setSource(t, c.offset, c.line, c.column), n = c.filename || "<unknown>", a = Boolean(c.positions), i = "function" == typeof c.onParseError ? c.onParseError : ja, s = !1, r.parseAtrulePrelude = !("parseAtrulePrelude" in c) || Boolean(c.parseAtrulePrelude), r.parseRulePrelude = !("parseRulePrelude" in c) || Boolean(c.parseRulePrelude), r.parseValue = !("parseValue" in c) || Boolean(c.parseValue), r.parseCustomProperty = "parseCustomProperty" in c && Boolean(c.parseCustomProperty);
        const {context: l = "default", onComment: p} = c;
        if (l in r.context == !1) throw new Error("Unknown context `" + l + "`");
        "function" == typeof p && r.forEachToken(((e, n, a) => {
          if (e === Jn) {
            const e = r.getLocation(n, a), i = ba(t, a - 2, a, "*/") ? t.slice(n + 2, a - 2) : t.slice(n + 2, a);
            p(i, e)
          }
        }));
        const u = r.context[l].call(r, c);
        return r.eof || r.error(), u
      }), {SyntaxError: Fa, config: r.config})
    }

    var Ya = n(257);
    const Va = new Set(["Atrule", "Selector", "Declaration"]);
    const Wa = (e, t) => {
        if (9 === e && (e = t), "string" == typeof e) {
          const t = e.charCodeAt(0);
          return t > 127 ? 32768 : t << 8
        }
        return e
      },
      Qa = [[1, 1], [1, 2], [1, 7], [1, 8], [1, "-"], [1, Un], [1, Fn], [1, Hn], [1, Gn], [1, Qn], [3, 1], [3, 2], [3, 7], [3, 8], [3, "-"], [3, Un], [3, Fn], [3, Hn], [3, Gn], [4, 1], [4, 2], [4, 7], [4, 8], [4, "-"], [4, Un], [4, Fn], [4, Hn], [4, Gn], [Hn, 1], [Hn, 2], [Hn, 7], [Hn, 8], [Hn, "-"], [Hn, Un], [Hn, Fn], [Hn, Hn], [Hn, Gn], ["#", 1], ["#", 2], ["#", 7], ["#", 8], ["#", "-"], ["#", Un], ["#", Fn], ["#", Hn], ["#", Gn], ["-", 1], ["-", 2], ["-", 7], ["-", 8], ["-", "-"], ["-", Un], ["-", Fn], ["-", Hn], ["-", Gn], [Un, 1], [Un, 2], [Un, 7], [Un, 8], [Un, Un], [Un, Fn], [Un, Hn], [Un, "%"], [Un, Gn], ["@", 1], ["@", 2], ["@", 7], ["@", 8], ["@", "-"], ["@", Gn], [".", Un], [".", Fn], [".", Hn], ["+", Un], ["+", Fn], ["+", Hn], ["/", "*"]],
      Xa = Qa.concat([[1, 4], [Hn, 4], [4, 4], [3, Qn], [3, 5], [3, qn], [Fn, Fn], [Fn, Hn], [Fn, 2], [Fn, "-"], [Xn, 1], [Xn, 2], [Xn, Fn], [Xn, Hn], [Xn, 4], [Xn, "-"]]);

    function Ka(e) {
      const t = new Set(e.map((([e, t]) => Wa(e) << 16 | Wa(t))));
      return function (e, n, a) {
        const i = Wa(n, a), s = a.charCodeAt(0);
        return (45 === s && 1 !== n && 2 !== n && n !== Gn || 43 === s ? t.has(e << 16 | s << 8) : t.has(e << 16 | i)) && this.emit(" ", jn, !0), i
      }
    }

    const $a = Ka(Qa), Ja = Ka(Xa);

    function Za(e, t) {
      if ("function" != typeof t) e.children.forEach(this.node, this); else {
        let n = null;
        e.children.forEach((e => {
          null !== n && t.call(this, n), this.node(e), n = e
        }))
      }
    }

    function ei(e) {
      Ra(e, ((t, n, a) => {
        this.token(t, e.slice(n, a))
      }))
    }

    function ti(t) {
      const n = new Map;
      for (let e in t.node) {
        const a = t.node[e];
        "function" == typeof (a.generate || a) && n.set(e, a.generate || a)
      }
      return function (t, a) {
        let i = "", s = 0, o = {
          node(e) {
            if (!n.has(e.type)) throw new Error("Unknown node type: " + e.type);
            n.get(e.type).call(r, e)
          }, tokenBefore: Ja, token(e, t) {
            s = this.tokenBefore(s, e, t), this.emit(t, e, !1), 9 === e && 92 === t.charCodeAt(0) && this.emit("\n", jn, !0)
          }, emit(e) {
            i += e
          }, result: () => i
        };
        a && ("function" == typeof a.decorator && (o = a.decorator(o)), a.sourceMap && (o = function (e) {
          const t = new Ya.h, n = {line: 1, column: 0}, a = {line: 0, column: 0}, i = {line: 1, column: 0},
            s = {generated: i};
          let o = 1, r = 0, c = !1;
          const l = e.node;
          e.node = function (e) {
            if (e.loc && e.loc.start && Va.has(e.type)) {
              const l = e.loc.start.line, p = e.loc.start.column - 1;
              a.line === l && a.column === p || (a.line = l, a.column = p, n.line = o, n.column = r, c && (c = !1, n.line === i.line && n.column === i.column || t.addMapping(s)), c = !0, t.addMapping({
                source: e.loc.source,
                original: a,
                generated: n
              }))
            }
            l.call(this, e), c && Va.has(e.type) && (i.line = o, i.column = r)
          };
          const p = e.emit;
          e.emit = function (e, t, n) {
            for (let t = 0; t < e.length; t++) 10 === e.charCodeAt(t) ? (o++, r = 0) : r++;
            p(e, t, n)
          };
          const u = e.result;
          return e.result = function () {
            return c && t.addMapping(s), {css: u(), map: t}
          }, e
        }(o)), a.mode in e && (o.tokenBefore = e[a.mode]));
        const r = {node: e => o.node(e), children: Za, token: (e, t) => o.token(e, t), tokenize: ei};
        return o.node(t), o.result()
      }
    }

    const {hasOwnProperty: ni} = Object.prototype, ai = function () {
    };

    function ii(e) {
      return "function" == typeof e ? e : ai
    }

    function si(e, t) {
      return function (n, a, i) {
        n.type === t && e.call(this, n, a, i)
      }
    }

    function oi(e, t) {
      const n = t.structure, a = [];
      for (const e in n) {
        if (!1 === ni.call(n, e)) continue;
        let t = n[e];
        const i = {name: e, type: !1, nullable: !1};
        Array.isArray(t) || (t = [t]);
        for (const e of t) null === e ? i.nullable = !0 : "string" == typeof e ? i.type = "node" : Array.isArray(e) && (i.type = "list");
        i.type && a.push(i)
      }
      return a.length ? {context: t.walkContext, fields: a} : null
    }

    function ri(e, t) {
      const n = e.fields.slice(), a = e.context, i = "string" == typeof a;
      return t && n.reverse(), function (e, s, o, r) {
        let c;
        i && (c = s[a], s[a] = e);
        for (const a of n) {
          const n = e[a.name];
          if (!a.nullable || n) if ("list" === a.type) {
            if (t ? n.reduceRight(r, !1) : n.reduce(r, !1)) return !0
          } else if (o(n)) return !0
        }
        i && (s[a] = c)
      }
    }

    function ci({StyleSheet: e, Atrule: t, Rule: n, Block: a, DeclarationList: i}) {
      return {
        Atrule: {StyleSheet: e, Atrule: t, Rule: n, Block: a},
        Rule: {StyleSheet: e, Atrule: t, Rule: n, Block: a},
        Declaration: {StyleSheet: e, Atrule: t, Rule: n, Block: a, DeclarationList: i}
      }
    }

    function li(e) {
      const t = function (e) {
        const t = {};
        for (const n in e.node) if (ni.call(e.node, n)) {
          const a = e.node[n];
          if (!a.structure) throw new Error("Missed `structure` field in `" + n + "` node type definition");
          t[n] = oi(0, a)
        }
        return t
      }(e), n = {}, a = {}, i = Symbol("break-walk"), s = Symbol("skip-node");
      for (const e in t) ni.call(t, e) && null !== t[e] && (n[e] = ri(t[e], !1), a[e] = ri(t[e], !0));
      const o = ci(n), r = ci(a), c = function (e, c) {
        function l(e, t, n) {
          const a = p.call(h, e, t, n);
          return a === i || a !== s && (!(!d.hasOwnProperty(e.type) || !d[e.type](e, h, l, m)) || u.call(h, e, t, n) === i)
        }

        let p = ai, u = ai, d = n, m = (e, t, n, a) => e || l(t, n, a);
        const h = {
          break: i,
          skip: s,
          root: e,
          stylesheet: null,
          atrule: null,
          atrulePrelude: null,
          rule: null,
          selector: null,
          block: null,
          declaration: null,
          function: null
        };
        if ("function" == typeof c) p = c; else if (c && (p = ii(c.enter), u = ii(c.leave), c.reverse && (d = a), c.visit)) {
          if (o.hasOwnProperty(c.visit)) d = c.reverse ? r[c.visit] : o[c.visit]; else if (!t.hasOwnProperty(c.visit)) throw new Error("Bad value `" + c.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
          p = si(p, c.visit), u = si(u, c.visit)
        }
        if (p === ai && u === ai) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
        l(e)
      };
      return c.break = i, c.skip = s, c.find = function (e, t) {
        let n = null;
        return c(e, (function (e, a, s) {
          if (t.call(this, e, a, s)) return n = e, i
        })), n
      }, c.findLast = function (e, t) {
        let n = null;
        return c(e, {
          reverse: !0, enter(e, a, s) {
            if (t.call(this, e, a, s)) return n = e, i
          }
        }), n
      }, c.findAll = function (e, t) {
        const n = [];
        return c(e, (function (e, a, i) {
          t.call(this, e, a, i) && n.push(e)
        })), n
      }, c
    }

    function pi(e) {
      return e
    }

    function ui(e, t, n, a) {
      let i;
      switch (e.type) {
        case"Group":
          i = function (e, t, n, a) {
            const i = " " === e.combinator || a ? e.combinator : " " + e.combinator + " ",
              s = e.terms.map((e => ui(e, t, n, a))).join(i);
            return e.explicit || n ? (a || "," === s[0] ? "[" : "[ ") + s + (a ? "]" : " ]") : s
          }(e, t, n, a) + (e.disallowEmpty ? "!" : "");
          break;
        case"Multiplier":
          return ui(e.term, t, n, a) + t(function (e) {
            const {min: t, max: n, comma: a} = e;
            return 0 === t && 0 === n ? a ? "#?" : "*" : 0 === t && 1 === n ? "?" : 1 === t && 0 === n ? a ? "#" : "+" : 1 === t && 1 === n ? "" : (a ? "#" : "") + (t === n ? "{" + t + "}" : "{" + t + "," + (0 !== n ? n : "") + "}")
          }(e), e);
        case"Type":
          i = "<" + e.name + (e.opts ? t(function (e) {
            if ("Range" === e.type) return " [" + (null === e.min ? "-∞" : e.min) + "," + (null === e.max ? "∞" : e.max) + "]";
            throw new Error("Unknown node type `" + e.type + "`")
          }(e.opts), e.opts) : "") + ">";
          break;
        case"Property":
          i = "<'" + e.name + "'>";
          break;
        case"Keyword":
          i = e.name;
          break;
        case"AtKeyword":
          i = "@" + e.name;
          break;
        case"Function":
          i = e.name + "(";
          break;
        case"String":
        case"Token":
          i = e.value;
          break;
        case"Comma":
          i = ",";
          break;
        default:
          throw new Error("Unknown node type `" + e.type + "`")
      }
      return t(i, e)
    }

    function di(e, t) {
      let n = pi, a = !1, i = !1;
      return "function" == typeof t ? n = t : t && (a = Boolean(t.forceBraces), i = Boolean(t.compact), "function" == typeof t.decorate && (n = t.decorate)), ui(e, n, a, i)
    }

    const mi = {offset: 0, line: 1, column: 1};

    function hi(e, t) {
      const n = e && e.loc && e.loc[t];
      return n ? "line" in n ? fi(n) : n : null
    }

    function fi({offset: e, line: t, column: n}, a) {
      const i = {offset: e, line: t, column: n};
      if (a) {
        const e = a.split(/\n|\r\n?|\f/);
        i.offset += a.length, i.line += e.length - 1, i.column = 1 === e.length ? i.column + a.length : e.pop().length + 1
      }
      return i
    }

    const gi = function (e, t) {
      const n = Ma("SyntaxReferenceError", e + (t ? " `" + t + "`" : ""));
      return n.reference = t, n
    }, bi = function (e, t, n, a) {
      const i = Ma("SyntaxMatchError", e), {
        css: s,
        mismatchOffset: o,
        mismatchLength: r,
        start: c,
        end: l
      } = function (e, t) {
        const n = e.tokens, a = e.longestMatch, i = a < n.length && n[a].node || null, s = i !== t ? i : null;
        let o, r, c = 0, l = 0, p = 0, u = "";
        for (let e = 0; e < n.length; e++) {
          const t = n[e].value;
          e === a && (l = t.length, c = u.length), null !== s && n[e].node === s && (e <= a ? p++ : p = 0), u += t
        }
        return a === n.length || p > 1 ? (o = hi(s || t, "end") || fi(mi, u), r = fi(o)) : (o = hi(s, "start") || fi(hi(t, "start") || mi, u.slice(0, c)), r = hi(s, "end") || fi(o, u.substr(c, l))), {
          css: u,
          mismatchOffset: c,
          mismatchLength: l,
          start: o,
          end: r
        }
      }(a, n);
      return i.rawMessage = e, i.syntax = t ? di(t) : "<generic>", i.css = s, i.mismatchOffset = o, i.mismatchLength = r, i.message = e + "\n  syntax: " + i.syntax + "\n   value: " + (s || "<empty string>") + "\n  --------" + new Array(i.mismatchOffset + 1).join("-") + "^", Object.assign(i, c), i.loc = {
        source: n && n.loc && n.loc.source || "<unknown>",
        start: c,
        end: l
      }, i
    }, xi = new Map, Ei = new Map, vi = function (e) {
      if (xi.has(e)) return xi.get(e);
      const t = e.toLowerCase();
      let n = xi.get(t);
      if (void 0 === n) {
        const e = Ti(t, 0), a = e ? "" : Ai(t, 0);
        n = Object.freeze({basename: t.substr(a.length), name: t, prefix: a, vendor: a, custom: e})
      }
      return xi.set(e, n), n
    }, ki = function (e) {
      if (Ei.has(e)) return Ei.get(e);
      let t = e, n = e[0];
      "/" === n ? n = "/" === e[1] ? "//" : "/" : "_" !== n && "*" !== n && "$" !== n && "#" !== n && "+" !== n && "&" !== n && (n = "");
      const a = Ti(t, n.length);
      if (!a && (t = t.toLowerCase(), Ei.has(t))) {
        const n = Ei.get(t);
        return Ei.set(e, n), n
      }
      const i = a ? "" : Ai(t, n.length), s = t.substr(0, n.length + i.length), o = Object.freeze({
        basename: t.substr(s.length),
        name: t.substr(n.length),
        hack: n,
        vendor: i,
        prefix: s,
        custom: a
      });
      return Ei.set(e, o), o
    };

    function Ti(e, t) {
      return t = t || 0, e.length - t >= 2 && 45 === e.charCodeAt(t) && 45 === e.charCodeAt(t + 1)
    }

    function Ai(e, t) {
      if (t = t || 0, e.length - t >= 3 && 45 === e.charCodeAt(t) && 45 !== e.charCodeAt(t + 1)) {
        const n = e.indexOf("-", t + 2);
        if (-1 !== n) return e.substring(t, n + 1)
      }
      return ""
    }

    const yi = ["initial", "inherit", "unset", "revert", "revert-layer"], _i = 45, Ci = !0;

    function Si(e, t) {
      return null !== e && 9 === e.type && e.value.charCodeAt(0) === t
    }

    function wi(e, t, n) {
      for (; null !== e && (e.type === jn || e.type === Jn);) e = n(++t);
      return t
    }

    function Ii(e, t, n, a) {
      if (!e) return 0;
      const i = e.value.charCodeAt(t);
      if (43 === i || i === _i) {
        if (n) return 0;
        t++
      }
      for (; t < e.value.length; t++) if (!Zn(e.value.charCodeAt(t))) return 0;
      return a + 1
    }

    function Ni(e, t, n) {
      let a = !1, i = wi(e, t, n);
      if (null === (e = n(i))) return t;
      if (e.type !== Un) {
        if (!Si(e, 43) && !Si(e, _i)) return t;
        if (a = !0, i = wi(n(++i), i, n), null === (e = n(i)) || e.type !== Un) return 0
      }
      if (!a) {
        const t = e.value.charCodeAt(0);
        if (43 !== t && t !== _i) return 0
      }
      return Ii(e, a ? 0 : 1, a, i)
    }

    function Di(e, t) {
      return null !== e && 9 === e.type && e.value.charCodeAt(0) === t
    }

    function Li(e, t, n) {
      let a = 0;
      for (let i = t; i < e.value.length; i++) {
        const s = e.value.charCodeAt(i);
        if (45 === s && n && 0 !== a) return Li(e, t + a + 1, !1), 6;
        if (!ea(s)) return 0;
        if (++a > 6) return 0
      }
      return a
    }

    function Ri(e, t, n) {
      if (!e) return 0;
      for (; Di(n(t), 63);) {
        if (++e > 6) return 0;
        t++
      }
      return t
    }

    const Pi = ["calc(", "-moz-calc(", "-webkit-calc("], Oi = new Map([[2, Xn], [Qn, Xn], [Vn, Wn], [Kn, $n]]);

    function Mi(e, t) {
      return t < e.length ? e.charCodeAt(t) : 0
    }

    function Bi(e, t) {
      return ba(e, 0, e.length, t)
    }

    function Ui(e, t) {
      for (let n = 0; n < t.length; n++) if (Bi(e, t[n])) return !0;
      return !1
    }

    function Fi(e, t) {
      return t === e.length - 2 && (92 === Mi(e, t) && Zn(Mi(e, t + 1)))
    }

    function Hi(e, t, n) {
      if (e && "Range" === e.type) {
        const a = Number(void 0 !== n && n !== t.length ? t.substr(0, n) : t);
        if (isNaN(a)) return !0;
        if (null !== e.min && a < e.min && "string" != typeof e.min) return !0;
        if (null !== e.max && a > e.max && "string" != typeof e.max) return !0
      }
      return !1
    }

    function ji(e) {
      return function (t, n, a) {
        return null === t ? 0 : 2 === t.type && Ui(t.value, Pi) ? function (e, t) {
          let n = 0, a = [], i = 0;
          e:do {
            switch (e.type) {
              case $n:
              case Xn:
              case Wn:
                if (e.type !== n) break e;
                if (n = a.pop(), 0 === a.length) {
                  i++;
                  break e
                }
                break;
              case 2:
              case Qn:
              case Vn:
              case Kn:
                a.push(n), n = Oi.get(e.type)
            }
            i++
          } while (e = t(i));
          return i
        }(t, n) : e(t, n, a)
      }
    }

    function Gi(e) {
      return function (t) {
        return null === t || t.type !== e ? 0 : 1
      }
    }

    function qi(e) {
      return e && (e = new Set(e)), function (t, n, a) {
        if (null === t || t.type !== Hn) return 0;
        const i = Ta(t.value, 0);
        if (null !== e) {
          const n = t.value.indexOf("\\", i),
            a = -1 !== n && Fi(t.value, n) ? t.value.substring(i, n) : t.value.substr(i);
          if (!1 === e.has(a.toLowerCase())) return 0
        }
        return Hi(a, t.value, i) ? 0 : 1
      }
    }

    function zi(e) {
      return "function" != typeof e && (e = function () {
        return 0
      }), function (t, n, a) {
        return null !== t && t.type === Un && 0 === Number(t.value) ? 1 : e(t, n, a)
      }
    }

    const Yi = {
      "ident-token": Gi(1),
      "function-token": Gi(2),
      "at-keyword-token": Gi(3),
      "hash-token": Gi(4),
      "string-token": Gi(5),
      "bad-string-token": Gi(6),
      "url-token": Gi(7),
      "bad-url-token": Gi(8),
      "delim-token": Gi(9),
      "number-token": Gi(Un),
      "percentage-token": Gi(Fn),
      "dimension-token": Gi(Hn),
      "whitespace-token": Gi(jn),
      "CDO-token": Gi(14),
      "CDC-token": Gi(Gn),
      "colon-token": Gi(qn),
      "semicolon-token": Gi(zn),
      "comma-token": Gi(Yn),
      "[-token": Gi(Vn),
      "]-token": Gi(Wn),
      "(-token": Gi(Qn),
      ")-token": Gi(Xn),
      "{-token": Gi(Kn),
      "}-token": Gi($n),
      string: Gi(5),
      ident: Gi(1),
      "custom-ident": function (e) {
        if (null === e || 1 !== e.type) return 0;
        const t = e.value.toLowerCase();
        return Ui(t, yi) || Bi(t, "default") ? 0 : 1
      },
      "custom-property-name": function (e) {
        return null === e || 1 !== e.type || 45 !== Mi(e.value, 0) || 45 !== Mi(e.value, 1) ? 0 : 1
      },
      "hex-color": function (e) {
        if (null === e || 4 !== e.type) return 0;
        const t = e.value.length;
        if (4 !== t && 5 !== t && 7 !== t && 9 !== t) return 0;
        for (let n = 1; n < t; n++) if (!ea(Mi(e.value, n))) return 0;
        return 1
      },
      "id-selector": function (e) {
        return null === e || 4 !== e.type ? 0 : ca(Mi(e.value, 1), Mi(e.value, 2), Mi(e.value, 3)) ? 1 : 0
      },
      "an-plus-b": function (e, t) {
        let n = 0;
        if (!e) return 0;
        if (e.type === Un) return Ii(e, 0, false, n);
        if (1 === e.type && e.value.charCodeAt(0) === _i) {
          if (!ga(e.value, 1, 110)) return 0;
          switch (e.value.length) {
            case 2:
              return Ni(t(++n), n, t);
            case 3:
              return e.value.charCodeAt(2) !== _i ? 0 : (n = wi(t(++n), n, t), Ii(e = t(n), 0, Ci, n));
            default:
              return e.value.charCodeAt(2) !== _i ? 0 : Ii(e, 3, Ci, n)
          }
        } else if (1 === e.type || Si(e, 43) && 1 === t(n + 1).type) {
          if (1 !== e.type && (e = t(++n)), null === e || !ga(e.value, 0, 110)) return 0;
          switch (e.value.length) {
            case 1:
              return Ni(t(++n), n, t);
            case 2:
              return e.value.charCodeAt(1) !== _i ? 0 : (n = wi(t(++n), n, t), Ii(e = t(n), 0, Ci, n));
            default:
              return e.value.charCodeAt(1) !== _i ? 0 : Ii(e, 2, Ci, n)
          }
        } else if (e.type === Hn) {
          let a = e.value.charCodeAt(0), i = 43 === a || a === _i ? 1 : 0, s = i;
          for (; s < e.value.length && Zn(e.value.charCodeAt(s)); s++) ;
          return s === i ? 0 : ga(e.value, s, 110) ? s + 1 === e.value.length ? Ni(t(++n), n, t) : e.value.charCodeAt(s + 1) !== _i ? 0 : s + 2 === e.value.length ? (n = wi(t(++n), n, t), Ii(e = t(n), 0, Ci, n)) : Ii(e, s + 2, Ci, n) : 0
        }
        return 0
      },
      urange: function (e, t) {
        let n = 0;
        if (null === e || 1 !== e.type || !ga(e.value, 0, 117)) return 0;
        if (null === (e = t(++n))) return 0;
        if (Di(e, 43)) return null === (e = t(++n)) ? 0 : 1 === e.type ? Ri(Li(e, 0, !0), ++n, t) : Di(e, 63) ? Ri(1, ++n, t) : 0;
        if (e.type === Un) {
          const a = Li(e, 1, !0);
          return 0 === a ? 0 : null === (e = t(++n)) ? n : e.type === Hn || e.type === Un ? function (e, t) {
            return e.value.charCodeAt(0) === t
          }(e, 45) && Li(e, 1, !1) ? n + 1 : 0 : Ri(a, n, t)
        }
        return e.type === Hn ? Ri(Li(e, 1, !0), ++n, t) : 0
      },
      "declaration-value": function (e, t) {
        if (!e) return 0;
        let n = 0, a = [], i = 0;
        e:do {
          switch (e.type) {
            case 6:
            case 8:
              break e;
            case $n:
            case Xn:
            case Wn:
              if (e.type !== n) break e;
              n = a.pop();
              break;
            case zn:
              if (0 === n) break e;
              break;
            case 9:
              if (0 === n && "!" === e.value) break e;
              break;
            case 2:
            case Qn:
            case Vn:
            case Kn:
              a.push(n), n = Oi.get(e.type)
          }
          i++
        } while (e = t(i));
        return i
      },
      "any-value": function (e, t) {
        if (!e) return 0;
        let n = 0, a = [], i = 0;
        e:do {
          switch (e.type) {
            case 6:
            case 8:
              break e;
            case $n:
            case Xn:
            case Wn:
              if (e.type !== n) break e;
              n = a.pop();
              break;
            case 2:
            case Qn:
            case Vn:
            case Kn:
              a.push(n), n = Oi.get(e.type)
          }
          i++
        } while (e = t(i));
        return i
      },
      dimension: ji(qi(null)),
      angle: ji(qi(["deg", "grad", "rad", "turn"])),
      decibel: ji(qi(["db"])),
      frequency: ji(qi(["hz", "khz"])),
      flex: ji(qi(["fr"])),
      length: ji(zi(qi(["cm", "mm", "q", "in", "pt", "pc", "px", "em", "rem", "ex", "rex", "cap", "rcap", "ch", "rch", "ic", "ric", "lh", "rlh", "vw", "svw", "lvw", "dvw", "vh", "svh", "lvh", "dvh", "vi", "svi", "lvi", "dvi", "vb", "svb", "lvb", "dvb", "vmin", "svmin", "lvmin", "dvmin", "vmax", "svmax", "lvmax", "dvmax", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"]))),
      resolution: ji(qi(["dpi", "dpcm", "dppx", "x"])),
      semitones: ji(qi(["st"])),
      time: ji(qi(["s", "ms"])),
      percentage: ji((function (e, t, n) {
        return null === e || e.type !== Fn || Hi(n, e.value, e.value.length - 1) ? 0 : 1
      })),
      zero: zi(),
      number: ji((function (e, t, n) {
        if (null === e) return 0;
        const a = Ta(e.value, 0);
        return a === e.value.length || Fi(e.value, a) ? Hi(n, e.value, a) ? 0 : 1 : 0
      })),
      integer: ji((function (e, t, n) {
        if (null === e || e.type !== Un) return 0;
        let a = 43 === Mi(e.value, 0) || 45 === Mi(e.value, 0) ? 1 : 0;
        for (; a < e.value.length; a++) if (!Zn(Mi(e.value, a))) return 0;
        return Hi(n, e.value, a) ? 0 : 1
      }))
    };

    function Vi(e, t, n) {
      return Object.assign(Ma("SyntaxError", e), {
        input: t,
        offset: n,
        rawMessage: e,
        message: e + "\n  " + t + "\n--" + new Array((n || t.length) + 1).join("-") + "^"
      })
    }

    class Wi {
      constructor(e) {
        this.str = e, this.pos = 0
      }

      charCodeAt(e) {
        return e < this.str.length ? this.str.charCodeAt(e) : 0
      }

      charCode() {
        return this.charCodeAt(this.pos)
      }

      nextCharCode() {
        return this.charCodeAt(this.pos + 1)
      }

      nextNonWsCode(e) {
        return this.charCodeAt(this.findWsEnd(e))
      }

      findWsEnd(e) {
        for (; e < this.str.length; e++) {
          const t = this.str.charCodeAt(e);
          if (13 !== t && 10 !== t && 12 !== t && 32 !== t && 9 !== t) break
        }
        return e
      }

      substringToPos(e) {
        return this.str.substring(this.pos, this.pos = e)
      }

      eat(e) {
        this.charCode() !== e && this.error("Expect `" + String.fromCharCode(e) + "`"), this.pos++
      }

      peek() {
        return this.pos < this.str.length ? this.str.charAt(this.pos++) : ""
      }

      error(e) {
        throw new Vi(e, this.str, this.pos)
      }
    }

    const Qi = 123, Xi = new Uint8Array(128).map(((e, t) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0)),
      Ki = {" ": 1, "&&": 2, "||": 3, "|": 4};

    function $i(e) {
      return e.substringToPos(e.findWsEnd(e.pos))
    }

    function Ji(e) {
      let t = e.pos;
      for (; t < e.str.length; t++) {
        const n = e.str.charCodeAt(t);
        if (n >= 128 || 0 === Xi[n]) break
      }
      return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t)
    }

    function Zi(e) {
      let t = e.pos;
      for (; t < e.str.length; t++) {
        const n = e.str.charCodeAt(t);
        if (n < 48 || n > 57) break
      }
      return e.pos === t && e.error("Expect a number"), e.substringToPos(t)
    }

    function es(e) {
      const t = e.str.indexOf("'", e.pos + 1);
      return -1 === t && (e.pos = e.str.length, e.error("Expect an apostrophe")), e.substringToPos(t + 1)
    }

    function ts(e) {
      let t = null, n = null;
      return e.eat(Qi), t = Zi(e), 44 === e.charCode() ? (e.pos++, 125 !== e.charCode() && (n = Zi(e))) : n = t, e.eat(125), {
        min: Number(t),
        max: n ? Number(n) : 0
      }
    }

    function ns(e, t) {
      const n = function (e) {
        let t = null, n = !1;
        switch (e.charCode()) {
          case 42:
            e.pos++, t = {min: 0, max: 0};
            break;
          case 43:
            e.pos++, t = {min: 1, max: 0};
            break;
          case 63:
            e.pos++, t = {min: 0, max: 1};
            break;
          case 35:
            e.pos++, n = !0, e.charCode() === Qi ? t = ts(e) : 63 === e.charCode() ? (e.pos++, t = {
              min: 0,
              max: 0
            }) : t = {min: 1, max: 0};
            break;
          case Qi:
            t = ts(e);
            break;
          default:
            return null
        }
        return {type: "Multiplier", comma: n, min: t.min, max: t.max, term: null}
      }(e);
      return null !== n ? (n.term = t, 35 === e.charCode() && 43 === e.charCodeAt(e.pos - 1) ? ns(e, n) : n) : t
    }

    function as(e) {
      const t = e.peek();
      return "" === t ? null : {type: "Token", value: t}
    }

    function is(e) {
      let t, n = null;
      return e.eat(60), t = Ji(e), 40 === e.charCode() && 41 === e.nextCharCode() && (e.pos += 2, t += "()"), 91 === e.charCodeAt(e.findWsEnd(e.pos)) && ($i(e), n = function (e) {
        let t = null, n = null, a = 1;
        return e.eat(91), 45 === e.charCode() && (e.peek(), a = -1), -1 == a && 8734 === e.charCode() ? e.peek() : (t = a * Number(Zi(e)), 0 !== Xi[e.charCode()] && (t += Ji(e))), $i(e), e.eat(44), $i(e), 8734 === e.charCode() ? e.peek() : (a = 1, 45 === e.charCode() && (e.peek(), a = -1), n = a * Number(Zi(e)), 0 !== Xi[e.charCode()] && (n += Ji(e))), e.eat(93), {
          type: "Range",
          min: t,
          max: n
        }
      }(e)), e.eat(62), ns(e, {type: "Type", name: t, opts: n})
    }

    function ss(e, t) {
      function n(e, t) {
        return {type: "Group", terms: e, combinator: t, disallowEmpty: !1, explicit: !1}
      }

      let a;
      for (t = Object.keys(t).sort(((e, t) => Ki[e] - Ki[t])); t.length > 0;) {
        a = t.shift();
        let i = 0, s = 0;
        for (; i < e.length; i++) {
          const t = e[i];
          "Combinator" === t.type && (t.value === a ? (-1 === s && (s = i - 1), e.splice(i, 1), i--) : (-1 !== s && i - s > 1 && (e.splice(s, i - s, n(e.slice(s, i), a)), i = s + 1), s = -1))
        }
        -1 !== s && t.length && e.splice(s, i - s, n(e.slice(s, i), a))
      }
      return a
    }

    function os(e) {
      const t = [], n = {};
      let a, i = null, s = e.pos;
      for (; a = rs(e);) "Spaces" !== a.type && ("Combinator" === a.type ? (null !== i && "Combinator" !== i.type || (e.pos = s, e.error("Unexpected combinator")), n[a.value] = !0) : null !== i && "Combinator" !== i.type && (n[" "] = !0, t.push({
        type: "Combinator",
        value: " "
      })), t.push(a), i = a, s = e.pos);
      return null !== i && "Combinator" === i.type && (e.pos -= s, e.error("Unexpected combinator")), {
        type: "Group",
        terms: t,
        combinator: ss(t, n) || " ",
        disallowEmpty: !1,
        explicit: !1
      }
    }

    function rs(e) {
      let t = e.charCode();
      if (t < 128 && 1 === Xi[t]) return function (e) {
        const t = Ji(e);
        return 40 === e.charCode() ? (e.pos++, {type: "Function", name: t}) : ns(e, {type: "Keyword", name: t})
      }(e);
      switch (t) {
        case 93:
          break;
        case 91:
          return ns(e, function (e) {
            let t;
            return e.eat(91), t = os(e), e.eat(93), t.explicit = !0, 33 === e.charCode() && (e.pos++, t.disallowEmpty = !0), t
          }(e));
        case 60:
          return 39 === e.nextCharCode() ? function (e) {
            let t;
            return e.eat(60), e.eat(39), t = Ji(e), e.eat(39), e.eat(62), ns(e, {type: "Property", name: t})
          }(e) : is(e);
        case 124:
          return {type: "Combinator", value: e.substringToPos(e.pos + (124 === e.nextCharCode() ? 2 : 1))};
        case 38:
          return e.pos++, e.eat(38), {type: "Combinator", value: "&&"};
        case 44:
          return e.pos++, {type: "Comma"};
        case 39:
          return ns(e, {type: "String", value: es(e)});
        case 32:
        case 9:
        case 10:
        case 13:
        case 12:
          return {type: "Spaces", value: $i(e)};
        case 64:
          return t = e.nextCharCode(), t < 128 && 1 === Xi[t] ? (e.pos++, {type: "AtKeyword", name: Ji(e)}) : as(e);
        case 42:
        case 43:
        case 63:
        case 35:
        case 33:
          break;
        case Qi:
          if (t = e.nextCharCode(), t < 48 || t > 57) return as(e);
          break;
        default:
          return as(e)
      }
    }

    function cs(e) {
      const t = new Wi(e), n = os(t);
      return t.pos !== e.length && t.error("Unexpected input"), 1 === n.terms.length && "Group" === n.terms[0].type ? n.terms[0] : n
    }

    const ls = function () {
    };

    function ps(e) {
      return "function" == typeof e ? e : ls
    }

    const us = {
      decorator(e) {
        const t = [];
        let n = null;
        return {
          ...e, node(t) {
            const a = n;
            n = t, e.node.call(this, t), n = a
          }, emit(e, a, i) {
            t.push({type: a, value: e, node: i ? null : n})
          }, result: () => t
        }
      }
    };

    function ds(e, t) {
      return "string" == typeof e ? function (e) {
        const t = [];
        return Ra(e, ((n, a, i) => t.push({type: n, value: e.slice(a, i), node: null}))), t
      }(e) : t.generate(e, us)
    }

    const ms = {type: "Match"}, hs = {type: "Mismatch"}, fs = {type: "DisallowEmpty"};

    function gs(e, t, n) {
      return t === ms && n === hs || e === ms && t === ms && n === ms ? e : ("If" === e.type && e.else === hs && t === ms && (t = e.then, e = e.match), {
        type: "If",
        match: e,
        then: t,
        else: n
      })
    }

    function bs(e) {
      return e.length > 2 && 40 === e.charCodeAt(e.length - 2) && 41 === e.charCodeAt(e.length - 1)
    }

    function xs(e) {
      return "Keyword" === e.type || "AtKeyword" === e.type || "Function" === e.type || "Type" === e.type && bs(e.name)
    }

    function Es(e, t, n) {
      switch (e) {
        case" ": {
          let e = ms;
          for (let n = t.length - 1; n >= 0; n--) {
            e = gs(t[n], e, hs)
          }
          return e
        }
        case"|": {
          let e = hs, n = null;
          for (let a = t.length - 1; a >= 0; a--) {
            let i = t[a];
            if (xs(i) && (null === n && a > 0 && xs(t[a - 1]) && (n = Object.create(null), e = gs({
              type: "Enum",
              map: n
            }, ms, e)), null !== n)) {
              const e = (bs(i.name) ? i.name.slice(0, -1) : i.name).toLowerCase();
              if (e in n == !1) {
                n[e] = i;
                continue
              }
            }
            n = null, e = gs(i, ms, e)
          }
          return e
        }
        case"&&": {
          if (t.length > 5) return {type: "MatchOnce", terms: t, all: !0};
          let n = hs;
          for (let a = t.length - 1; a >= 0; a--) {
            const i = t[a];
            let s;
            s = t.length > 1 ? Es(e, t.filter((function (e) {
              return e !== i
            })), !1) : ms, n = gs(i, s, n)
          }
          return n
        }
        case"||": {
          if (t.length > 5) return {type: "MatchOnce", terms: t, all: !1};
          let a = n ? ms : hs;
          for (let n = t.length - 1; n >= 0; n--) {
            const i = t[n];
            let s;
            s = t.length > 1 ? Es(e, t.filter((function (e) {
              return e !== i
            })), !0) : ms, a = gs(i, s, a)
          }
          return a
        }
      }
    }

    function vs(e) {
      if ("function" == typeof e) return {type: "Generic", fn: e};
      switch (e.type) {
        case"Group": {
          let t = Es(e.combinator, e.terms.map(vs), !1);
          return e.disallowEmpty && (t = gs(t, fs, hs)), t
        }
        case"Multiplier":
          return function (e) {
            let t = ms, n = vs(e.term);
            if (0 === e.max) n = gs(n, fs, hs), t = gs(n, null, hs), t.then = gs(ms, ms, t), e.comma && (t.then.else = gs({
              type: "Comma",
              syntax: e
            }, t, hs)); else for (let a = e.min || 1; a <= e.max; a++) e.comma && t !== ms && (t = gs({
              type: "Comma",
              syntax: e
            }, t, hs)), t = gs(n, gs(ms, ms, t), hs);
            if (0 === e.min) t = gs(ms, ms, t); else for (let a = 0; a < e.min - 1; a++) e.comma && t !== ms && (t = gs({
              type: "Comma",
              syntax: e
            }, t, hs)), t = gs(n, t, hs);
            return t
          }(e);
        case"Type":
        case"Property":
          return {type: e.type, name: e.name, syntax: e};
        case"Keyword":
          return {type: e.type, name: e.name.toLowerCase(), syntax: e};
        case"AtKeyword":
          return {type: e.type, name: "@" + e.name.toLowerCase(), syntax: e};
        case"Function":
          return {type: e.type, name: e.name.toLowerCase() + "(", syntax: e};
        case"String":
          return 3 === e.value.length ? {type: "Token", value: e.value.charAt(1), syntax: e} : {
            type: e.type,
            value: e.value.substr(1, e.value.length - 2).replace(/\\'/g, "'"),
            syntax: e
          };
        case"Token":
          return {type: e.type, value: e.value, syntax: e};
        case"Comma":
          return {type: e.type, syntax: e};
        default:
          throw new Error("Unknown node type:", e.type)
      }
    }

    function ks(e, t) {
      return "string" == typeof e && (e = cs(e)), {type: "MatchGraph", match: vs(e), syntax: t || null, source: e}
    }

    const {hasOwnProperty: Ts} = Object.prototype, As = "Match";
    let ys = 0;

    function _s(e) {
      let t = null, n = null, a = e;
      for (; null !== a;) n = a.prev, a.prev = t, t = a, a = n;
      return t
    }

    function Cs(e, t) {
      if (e.length !== t.length) return !1;
      for (let n = 0; n < e.length; n++) {
        const a = t.charCodeAt(n);
        let i = e.charCodeAt(n);
        if (i >= 65 && i <= 90 && (i |= 32), i !== a) return !1
      }
      return !0
    }

    function Ss(e) {
      return null === e || (e.type === Yn || 2 === e.type || e.type === Qn || e.type === Vn || e.type === Kn || function (e) {
        return 9 === e.type && "?" !== e.value
      }(e))
    }

    function ws(e) {
      return null === e || (e.type === Xn || e.type === Wn || e.type === $n || 9 === e.type && "/" === e.value)
    }

    function Is(e, t, n) {
      function a() {
        do {
          b++, g = b < e.length ? e[b] : null
        } while (null !== g && (g.type === jn || g.type === Jn))
      }

      function i(t) {
        const n = b + t;
        return n < e.length ? e[n] : null
      }

      function s(e, t) {
        return {nextState: e, matchStack: E, syntaxStack: p, thenStack: u, tokenIndex: b, prev: t}
      }

      function o(e) {
        u = {nextState: e, matchStack: E, syntaxStack: p, prev: u}
      }

      function r(e) {
        d = s(e, d)
      }

      function c() {
        E = {type: 1, syntax: t.syntax, token: g, prev: E}, a(), m = null, b > x && (x = b)
      }

      function l() {
        E = 2 === E.type ? E.prev : {type: 3, syntax: p.syntax, token: E.token, prev: E}, p = p.prev
      }

      let p = null, u = null, d = null, m = null, h = 0, f = null, g = null, b = -1, x = 0,
        E = {type: 0, syntax: null, token: null, prev: null};
      for (a(); null === f && ++h < 15e3;) switch (t.type) {
        case"Match":
          if (null === u) {
            if (null !== g && (b !== e.length - 1 || "\\0" !== g.value && "\\9" !== g.value)) {
              t = hs;
              break
            }
            f = As;
            break
          }
          if ((t = u.nextState) === fs) {
            if (u.matchStack === E) {
              t = hs;
              break
            }
            t = ms
          }
          for (; u.syntaxStack !== p;) l();
          u = u.prev;
          break;
        case"Mismatch":
          if (null !== m && !1 !== m) (null === d || b > d.tokenIndex) && (d = m, m = !1); else if (null === d) {
            f = "Mismatch";
            break
          }
          t = d.nextState, u = d.thenStack, p = d.syntaxStack, E = d.matchStack, b = d.tokenIndex, g = b < e.length ? e[b] : null, d = d.prev;
          break;
        case"MatchGraph":
          t = t.match;
          break;
        case"If":
          t.else !== hs && r(t.else), t.then !== ms && o(t.then), t = t.match;
          break;
        case"MatchOnce":
          t = {type: "MatchOnceBuffer", syntax: t, index: 0, mask: 0};
          break;
        case"MatchOnceBuffer": {
          const e = t.syntax.terms;
          if (t.index === e.length) {
            if (0 === t.mask || t.syntax.all) {
              t = hs;
              break
            }
            t = ms;
            break
          }
          if (t.mask === (1 << e.length) - 1) {
            t = ms;
            break
          }
          for (; t.index < e.length; t.index++) {
            const n = 1 << t.index;
            if (0 == (t.mask & n)) {
              r(t), o({type: "AddMatchOnce", syntax: t.syntax, mask: t.mask | n}), t = e[t.index++];
              break
            }
          }
          break
        }
        case"AddMatchOnce":
          t = {type: "MatchOnceBuffer", syntax: t.syntax, index: 0, mask: t.mask};
          break;
        case"Enum":
          if (null !== g) {
            let e = g.value.toLowerCase();
            if (-1 !== e.indexOf("\\") && (e = e.replace(/\\[09].*$/, "")), Ts.call(t.map, e)) {
              t = t.map[e];
              break
            }
          }
          t = hs;
          break;
        case"Generic": {
          const e = null !== p ? p.opts : null, n = b + Math.floor(t.fn(g, i, e));
          if (!isNaN(n) && n > b) {
            for (; b < n;) c();
            t = ms
          } else t = hs;
          break
        }
        case"Type":
        case"Property": {
          const e = "Type" === t.type ? "types" : "properties", a = Ts.call(n, e) ? n[e][t.name] : null;
          if (!a || !a.match) throw new Error("Bad syntax reference: " + ("Type" === t.type ? "<" + t.name + ">" : "<'" + t.name + "'>"));
          if (!1 !== m && null !== g && "Type" === t.type) {
            if ("custom-ident" === t.name && 1 === g.type || "length" === t.name && "0" === g.value) {
              null === m && (m = s(t, d)), t = hs;
              break
            }
          }
          p = {syntax: t.syntax, opts: t.syntax.opts || null !== p && p.opts || null, prev: p}, E = {
            type: 2,
            syntax: t.syntax,
            token: E.token,
            prev: E
          }, t = a.match;
          break
        }
        case"Keyword": {
          const e = t.name;
          if (null !== g) {
            let n = g.value;
            if (-1 !== n.indexOf("\\") && (n = n.replace(/\\[09].*$/, "")), Cs(n, e)) {
              c(), t = ms;
              break
            }
          }
          t = hs;
          break
        }
        case"AtKeyword":
        case"Function":
          if (null !== g && Cs(g.value, t.name)) {
            c(), t = ms;
            break
          }
          t = hs;
          break;
        case"Token":
          if (null !== g && g.value === t.value) {
            c(), t = ms;
            break
          }
          t = hs;
          break;
        case"Comma":
          null !== g && g.type === Yn ? Ss(E.token) ? t = hs : (c(), t = ws(g) ? hs : ms) : t = Ss(E.token) || ws(g) ? ms : hs;
          break;
        case"String":
          let a = "", h = b;
          for (; h < e.length && a.length < t.value.length; h++) a += e[h].value;
          if (Cs(a, t.value)) {
            for (; b < h;) c();
            t = ms
          } else t = hs;
          break;
        default:
          throw new Error("Unknown node type: " + t.type)
      }
      switch (ys += h, f) {
        case null:
          console.warn("[csstree-match] BREAK after 15000 iterations"), f = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", E = null;
          break;
        case As:
          for (; null !== p;) l();
          break;
        default:
          E = null
      }
      return {tokens: e, reason: f, iterations: h, match: E, longestMatch: x}
    }

    function Ns(e, t, n) {
      const a = Is(e, t, n || {});
      if (null === a.match) return a;
      let i = a.match, s = a.match = {syntax: t.syntax || null, match: []};
      const o = [s];
      for (i = _s(i).prev; null !== i;) {
        switch (i.type) {
          case 2:
            s.match.push(s = {syntax: i.syntax, match: []}), o.push(s);
            break;
          case 3:
            o.pop(), s = o[o.length - 1];
            break;
          default:
            s.match.push({syntax: i.syntax || null, token: i.token.value, node: i.token.node})
        }
        i = i.prev
      }
      return a
    }

    function Ds(e) {
      function t(e) {
        return null !== e && ("Type" === e.type || "Property" === e.type || "Keyword" === e.type)
      }

      let n = null;
      return null !== this.matched && function a(i) {
        if (Array.isArray(i.match)) {
          for (let e = 0; e < i.match.length; e++) if (a(i.match[e])) return t(i.syntax) && n.unshift(i.syntax), !0
        } else if (i.node === e) return n = t(i.syntax) ? [i.syntax] : [], !0;
        return !1
      }(this.matched), n
    }

    function Ls(e, t) {
      return Os(this, e, (e => "Type" === e.type && e.name === t))
    }

    function Rs(e, t) {
      return Os(this, e, (e => "Property" === e.type && e.name === t))
    }

    function Ps(e) {
      return Os(this, e, (e => "Keyword" === e.type))
    }

    function Os(e, t, n) {
      const a = Ds.call(e, t);
      return null !== a && a.some(n)
    }

    function Ms(e) {
      return "node" in e ? e.node : Ms(e.match[0])
    }

    function Bs(e) {
      return "node" in e ? e.node : Bs(e.match[e.match.length - 1])
    }

    function Us(e, t, n, a, i) {
      const s = [];
      return null !== n.matched && function n(o) {
        if (null !== o.syntax && o.syntax.type === a && o.syntax.name === i) {
          const n = Ms(o), a = Bs(o);
          e.syntax.walk(t, (function (e, t, i) {
            if (e === n) {
              const e = new Oa;
              do {
                if (e.appendData(t.data), t.data === a) break;
                t = t.next
              } while (null !== t);
              s.push({parent: i, nodes: e})
            }
          }))
        }
        Array.isArray(o.match) && o.match.forEach(n)
      }(n.matched), s
    }

    const {hasOwnProperty: Fs} = Object.prototype;

    function Hs(e) {
      return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0
    }

    function js(e) {
      return Boolean(e) && Hs(e.offset) && Hs(e.line) && Hs(e.column)
    }

    function Gs(e, t) {
      return function (n, a) {
        if (!n || n.constructor !== Object) return a(n, "Type of node should be an Object");
        for (let i in n) {
          let s = !0;
          if (!1 !== Fs.call(n, i)) {
            if ("type" === i) n.type !== e && a(n, "Wrong node type `" + n.type + "`, expected `" + e + "`"); else if ("loc" === i) {
              if (null === n.loc) continue;
              if (n.loc && n.loc.constructor === Object) if ("string" != typeof n.loc.source) i += ".source"; else if (js(n.loc.start)) {
                if (js(n.loc.end)) continue;
                i += ".end"
              } else i += ".start";
              s = !1
            } else if (t.hasOwnProperty(i)) {
              s = !1;
              for (let e = 0; !s && e < t[i].length; e++) {
                const a = t[i][e];
                switch (a) {
                  case String:
                    s = "string" == typeof n[i];
                    break;
                  case Boolean:
                    s = "boolean" == typeof n[i];
                    break;
                  case null:
                    s = null === n[i];
                    break;
                  default:
                    "string" == typeof a ? s = n[i] && n[i].type === a : Array.isArray(a) && (s = n[i] instanceof Oa)
                }
              }
            } else a(n, "Unknown field `" + i + "` for " + e + " node type");
            s || a(n, "Bad value for `" + e + "." + i + "`")
          }
        }
        for (const i in t) Fs.call(t, i) && !1 === Fs.call(n, i) && a(n, "Field `" + e + "." + i + "` is missed")
      }
    }

    function qs(e, t) {
      const n = t.structure, a = {type: String, loc: !0}, i = {type: '"' + e + '"'};
      for (const t in n) {
        if (!1 === Fs.call(n, t)) continue;
        const s = [], o = a[t] = Array.isArray(n[t]) ? n[t].slice() : [n[t]];
        for (let n = 0; n < o.length; n++) {
          const a = o[n];
          if (a === String || a === Boolean) s.push(a.name); else if (null === a) s.push("null"); else if ("string" == typeof a) s.push("<" + a + ">"); else {
            if (!Array.isArray(a)) throw new Error("Wrong value `" + a + "` in `" + e + "." + t + "` structure definition");
            s.push("List")
          }
        }
        i[t] = s.join(" | ")
      }
      return {docs: i, check: Gs(e, a)}
    }

    const zs = ks(yi.join(" | "));

    function Ys(e, t, n) {
      const a = {};
      for (const i in e) e[i].syntax && (a[i] = n ? e[i].syntax : di(e[i].syntax, {compact: t}));
      return a
    }

    function Vs(e, t, n) {
      const a = {};
      for (const [i, s] of Object.entries(e)) a[i] = {
        prelude: s.prelude && (n ? s.prelude.syntax : di(s.prelude.syntax, {compact: t})),
        descriptors: s.descriptors && Ys(s.descriptors, t, n)
      };
      return a
    }

    function Ws(e, n, a) {
      return {matched: e, iterations: a, error: n, ...t}
    }

    function Qs(e, t, n, a) {
      const i = ds(n, e.syntax);
      let s;
      return function (e) {
        for (let t = 0; t < e.length; t++) if ("var(" === e[t].value.toLowerCase()) return !0;
        return !1
      }(i) ? Ws(null, new Error("Matching for a tree with var() is not supported")) : (a && (s = Ns(i, e.cssWideKeywordsSyntax, e)), a && s.match || (s = Ns(i, t.match, e), s.match) ? Ws(s.match, null, s.iterations) : Ws(null, new bi(s.reason, t.syntax, n, s), s.iterations))
    }

    class Xs {
      constructor(e, t, n) {
        if (this.cssWideKeywordsSyntax = zs, this.syntax = t, this.generic = !1, this.atrules = Object.create(null), this.properties = Object.create(null), this.types = Object.create(null), this.structure = n || function (e) {
          const t = {};
          if (e.node) for (const n in e.node) if (Fs.call(e.node, n)) {
            const a = e.node[n];
            if (!a.structure) throw new Error("Missed `structure` field in `" + n + "` node type definition");
            t[n] = qs(n, a)
          }
          return t
        }(e), e) {
          if (e.types) for (const t in e.types) this.addType_(t, e.types[t]);
          if (e.generic) {
            this.generic = !0;
            for (const e in Yi) this.addType_(e, Yi[e])
          }
          if (e.atrules) for (const t in e.atrules) this.addAtrule_(t, e.atrules[t]);
          if (e.properties) for (const t in e.properties) this.addProperty_(t, e.properties[t])
        }
      }

      checkStructure(e) {
        function t(e, t) {
          a.push({node: e, message: t})
        }

        const n = this.structure, a = [];
        return this.syntax.walk(e, (function (e) {
          n.hasOwnProperty(e.type) ? n[e.type].check(e, t) : t(e, "Unknown node type `" + e.type + "`")
        })), !!a.length && a
      }

      createDescriptor(e, t, n, a = null) {
        const i = {type: t, name: n}, s = {
          type: t,
          name: n,
          parent: a,
          serializable: "string" == typeof e || e && "string" == typeof e.type,
          syntax: null,
          match: null
        };
        return "function" == typeof e ? s.match = ks(e, i) : ("string" == typeof e ? Object.defineProperty(s, "syntax", {get: () => (Object.defineProperty(s, "syntax", {value: cs(e)}), s.syntax)}) : s.syntax = e, Object.defineProperty(s, "match", {get: () => (Object.defineProperty(s, "match", {value: ks(s.syntax, i)}), s.match)})), s
      }

      addAtrule_(e, t) {
        t && (this.atrules[e] = {
          type: "Atrule",
          name: e,
          prelude: t.prelude ? this.createDescriptor(t.prelude, "AtrulePrelude", e) : null,
          descriptors: t.descriptors ? Object.keys(t.descriptors).reduce(((n, a) => (n[a] = this.createDescriptor(t.descriptors[a], "AtruleDescriptor", a, e), n)), Object.create(null)) : null
        })
      }

      addProperty_(e, t) {
        t && (this.properties[e] = this.createDescriptor(t, "Property", e))
      }

      addType_(e, t) {
        t && (this.types[e] = this.createDescriptor(t, "Type", e))
      }

      checkAtruleName(e) {
        if (!this.getAtrule(e)) return new gi("Unknown at-rule", "@" + e)
      }

      checkAtrulePrelude(e, t) {
        const n = this.checkAtruleName(e);
        if (n) return n;
        const a = this.getAtrule(e);
        return !a.prelude && t ? new SyntaxError("At-rule `@" + e + "` should not contain a prelude") : !a.prelude || t || Qs(this, a.prelude, "", !1).matched ? void 0 : new SyntaxError("At-rule `@" + e + "` should contain a prelude")
      }

      checkAtruleDescriptorName(e, t) {
        const n = this.checkAtruleName(e);
        if (n) return n;
        const a = this.getAtrule(e), i = vi(t);
        return a.descriptors ? a.descriptors[i.name] || a.descriptors[i.basename] ? void 0 : new gi("Unknown at-rule descriptor", t) : new SyntaxError("At-rule `@" + e + "` has no known descriptors")
      }

      checkPropertyName(e) {
        if (!this.getProperty(e)) return new gi("Unknown property", e)
      }

      matchAtrulePrelude(e, t) {
        const n = this.checkAtrulePrelude(e, t);
        if (n) return Ws(null, n);
        const a = this.getAtrule(e);
        return a.prelude ? Qs(this, a.prelude, t || "", !1) : Ws(null, null)
      }

      matchAtruleDescriptor(e, t, n) {
        const a = this.checkAtruleDescriptorName(e, t);
        if (a) return Ws(null, a);
        const i = this.getAtrule(e), s = vi(t);
        return Qs(this, i.descriptors[s.name] || i.descriptors[s.basename], n, !1)
      }

      matchDeclaration(e) {
        return "Declaration" !== e.type ? Ws(null, new Error("Not a Declaration node")) : this.matchProperty(e.property, e.value)
      }

      matchProperty(e, t) {
        if (ki(e).custom) return Ws(null, new Error("Lexer matching doesn't applicable for custom properties"));
        const n = this.checkPropertyName(e);
        return n ? Ws(null, n) : Qs(this, this.getProperty(e), t, !0)
      }

      matchType(e, t) {
        const n = this.getType(e);
        return n ? Qs(this, n, t, !1) : Ws(null, new gi("Unknown type", e))
      }

      match(e, t) {
        return "string" == typeof e || e && e.type ? ("string" != typeof e && e.match || (e = this.createDescriptor(e, "Type", "anonymous")), Qs(this, e, t, !1)) : Ws(null, new gi("Bad syntax"))
      }

      findValueFragments(e, t, n, a) {
        return Us(this, t, this.matchProperty(e, t), n, a)
      }

      findDeclarationValueFragments(e, t, n) {
        return Us(this, e.value, this.matchDeclaration(e), t, n)
      }

      findAllFragments(e, t, n) {
        const a = [];
        return this.syntax.walk(e, {
          visit: "Declaration", enter: e => {
            a.push.apply(a, this.findDeclarationValueFragments(e, t, n))
          }
        }), a
      }

      getAtrule(e, t = !0) {
        const n = vi(e);
        return (n.vendor && t ? this.atrules[n.name] || this.atrules[n.basename] : this.atrules[n.name]) || null
      }

      getAtrulePrelude(e, t = !0) {
        const n = this.getAtrule(e, t);
        return n && n.prelude || null
      }

      getAtruleDescriptor(e, t) {
        return this.atrules.hasOwnProperty(e) && this.atrules.declarators && this.atrules[e].declarators[t] || null
      }

      getProperty(e, t = !0) {
        const n = ki(e);
        return (n.vendor && t ? this.properties[n.name] || this.properties[n.basename] : this.properties[n.name]) || null
      }

      getType(e) {
        return hasOwnProperty.call(this.types, e) ? this.types[e] : null
      }

      validate() {
        function e(a, i, s, o) {
          if (s.has(i)) return s.get(i);
          s.set(i, !1), null !== o.syntax && function (e, t, n) {
            let a = ls, i = ls;
            if ("function" == typeof t ? a = t : t && (a = ps(t.enter), i = ps(t.leave)), a === ls && i === ls) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
            !function e(t) {
              switch (a.call(n, t), t.type) {
                case"Group":
                  t.terms.forEach(e);
                  break;
                case"Multiplier":
                  e(t.term);
                  break;
                case"Type":
                case"Property":
                case"Keyword":
                case"AtKeyword":
                case"Function":
                case"String":
                case"Token":
                case"Comma":
                  break;
                default:
                  throw new Error("Unknown type: " + t.type)
              }
              i.call(n, t)
            }(e)
          }(o.syntax, (function (o) {
            if ("Type" !== o.type && "Property" !== o.type) return;
            const r = "Type" === o.type ? a.types : a.properties, c = "Type" === o.type ? t : n;
            hasOwnProperty.call(r, o.name) && !e(a, o.name, c, r[o.name]) || s.set(i, !0)
          }), this)
        }

        let t = new Map, n = new Map;
        for (const n in this.types) e(this, n, t, this.types[n]);
        for (const t in this.properties) e(this, t, n, this.properties[t]);
        return t = [...t.keys()].filter((e => t.get(e))), n = [...n.keys()].filter((e => n.get(e))), t.length || n.length ? {
          types: t,
          properties: n
        } : null
      }

      dump(e, t) {
        return {
          generic: this.generic,
          types: Ys(this.types, !t, e),
          properties: Ys(this.properties, !t, e),
          atrules: Vs(this.atrules, !t, e)
        }
      }

      toString() {
        return JSON.stringify(this.dump())
      }
    }

    const {hasOwnProperty: Ks} = Object.prototype, $s = {
      generic: !0,
      types: to,
      atrules: {prelude: no, descriptors: no},
      properties: to,
      parseContext: function (e, t) {
        return Object.assign(e, t)
      },
      scope: function e(t, n) {
        for (const a in n) Ks.call(n, a) && (Js(t[a]) ? e(t[a], n[a]) : t[a] = Zs(n[a]));
        return t
      },
      atrule: ["parse"],
      pseudo: ["parse"],
      node: ["name", "structure", "parse", "generate", "walkContext"]
    };

    function Js(e) {
      return e && e.constructor === Object
    }

    function Zs(e) {
      return Js(e) ? {...e} : e
    }

    function eo(e, t) {
      return "string" == typeof t && /^\s*\|/.test(t) ? "string" == typeof e ? e + t : t.replace(/^\s*\|\s*/, "") : t || null
    }

    function to(e, t) {
      if ("string" == typeof t) return eo(e, t);
      const n = {...e};
      for (let a in t) Ks.call(t, a) && (n[a] = eo(Ks.call(e, a) ? e[a] : void 0, t[a]));
      return n
    }

    function no(e, t) {
      const n = to(e, t);
      return !Js(n) || Object.keys(n).length ? n : null
    }

    function ao(e, t, n) {
      for (const a in n) if (!1 !== Ks.call(n, a)) if (!0 === n[a]) Ks.call(t, a) && (e[a] = Zs(t[a])); else if (n[a]) if ("function" == typeof n[a]) {
        const i = n[a];
        e[a] = i({}, e[a]), e[a] = i(e[a] || {}, t[a])
      } else if (Js(n[a])) {
        const i = {};
        for (let t in e[a]) i[t] = ao({}, e[a][t], n[a]);
        for (let e in t[a]) i[e] = ao(i[e] || {}, t[a][e], n[a]);
        e[a] = i
      } else if (Array.isArray(n[a])) {
        const i = {}, s = n[a].reduce((function (e, t) {
          return e[t] = !0, e
        }), {});
        for (const [t, n] of Object.entries(e[a] || {})) i[t] = {}, n && ao(i[t], n, s);
        for (const e in t[a]) Ks.call(t[a], e) && (i[e] || (i[e] = {}), t[a] && t[a][e] && ao(i[e], t[a][e], s));
        e[a] = i
      }
      return e
    }

    const io = (e, t) => ao(e, t, $s);

    function so(e) {
      const t = za(e), n = li(e), a = ti(e), {fromPlainObject: i, toPlainObject: s} = function (e) {
        return {
          fromPlainObject: t => (e(t, {
            enter(e) {
              e.children && e.children instanceof Oa == 0 && (e.children = (new Oa).fromArray(e.children))
            }
          }), t), toPlainObject: t => (e(t, {
            leave(e) {
              e.children && e.children instanceof Oa && (e.children = e.children.toArray())
            }
          }), t)
        }
      }(n), o = {
        lexer: null,
        createLexer: e => new Xs(e, o, o.lexer.structure),
        tokenize: Ra,
        parse: t,
        generate: a,
        walk: n,
        find: n.find,
        findLast: n.findLast,
        findAll: n.findAll,
        fromPlainObject: i,
        toPlainObject: s,
        fork(t) {
          const n = io({}, e);
          return so("function" == typeof t ? t(n, Object.assign) : io(n, t))
        }
      };
      return o.lexer = new Xs({
        generic: !0,
        types: e.types,
        atrules: e.atrules,
        properties: e.properties,
        node: e.node
      }, o), o
    }

    const oo = 43, ro = 45, co = 110, lo = !0;

    function po(e, t) {
      let n = this.tokenStart + e;
      const a = this.charCodeAt(n);
      for (a !== oo && a !== ro || (t && this.error("Number sign is not allowed"), n++); n < this.tokenEnd; n++) Zn(this.charCodeAt(n)) || this.error("Integer is expected", n)
    }

    function uo(e) {
      return po.call(this, 0, e)
    }

    function mo(e, t) {
      if (!this.cmpChar(this.tokenStart + e, t)) {
        let n = "";
        switch (t) {
          case co:
            n = "N is expected";
            break;
          case ro:
            n = "HyphenMinus is expected"
        }
        this.error(n, this.tokenStart + e)
      }
    }

    function ho() {
      let e = 0, t = 0, n = this.tokenType;
      for (; n === jn || n === Jn;) n = this.lookupType(++e);
      if (n !== Un) {
        if (!this.isDelim(oo, e) && !this.isDelim(ro, e)) return null;
        t = this.isDelim(oo, e) ? oo : ro;
        do {
          n = this.lookupType(++e)
        } while (n === jn || n === Jn);
        n !== Un && (this.skip(e), uo.call(this, lo))
      }
      return e > 0 && this.skip(e), 0 === t && (n = this.charCodeAt(this.tokenStart), n !== oo && n !== ro && this.error("Number sign is expected")), uo.call(this, 0 !== t), t === ro ? "-" + this.consume(Un) : this.consume(Un)
    }

    const fo = "AnPlusB", go = {a: [String, null], b: [String, null]};

    function bo() {
      const e = this.tokenStart;
      let t = null, n = null;
      if (this.tokenType === Un) uo.call(this, false), n = this.consume(Un); else if (1 === this.tokenType && this.cmpChar(this.tokenStart, ro)) switch (t = "-1", mo.call(this, 1, co), this.tokenEnd - this.tokenStart) {
        case 2:
          this.next(), n = ho.call(this);
          break;
        case 3:
          mo.call(this, 2, ro), this.next(), this.skipSC(), uo.call(this, lo), n = "-" + this.consume(Un);
          break;
        default:
          mo.call(this, 2, ro), po.call(this, 3, lo), this.next(), n = this.substrToCursor(e + 2)
      } else if (1 === this.tokenType || this.isDelim(oo) && 1 === this.lookupType(1)) {
        let a = 0;
        switch (t = "1", this.isDelim(oo) && (a = 1, this.next()), mo.call(this, 0, co), this.tokenEnd - this.tokenStart) {
          case 1:
            this.next(), n = ho.call(this);
            break;
          case 2:
            mo.call(this, 1, ro), this.next(), this.skipSC(), uo.call(this, lo), n = "-" + this.consume(Un);
            break;
          default:
            mo.call(this, 1, ro), po.call(this, 2, lo), this.next(), n = this.substrToCursor(e + a + 1)
        }
      } else if (this.tokenType === Hn) {
        const a = this.charCodeAt(this.tokenStart), i = a === oo || a === ro;
        let s = this.tokenStart + i;
        for (; s < this.tokenEnd && Zn(this.charCodeAt(s)); s++) ;
        s === this.tokenStart + i && this.error("Integer is expected", this.tokenStart + i), mo.call(this, s - this.tokenStart, co), t = this.substring(e, s), s + 1 === this.tokenEnd ? (this.next(), n = ho.call(this)) : (mo.call(this, s - this.tokenStart + 1, ro), s + 2 === this.tokenEnd ? (this.next(), this.skipSC(), uo.call(this, lo), n = "-" + this.consume(Un)) : (po.call(this, s - this.tokenStart + 2, lo), this.next(), n = this.substrToCursor(s + 1)))
      } else this.error();
      return null !== t && t.charCodeAt(0) === oo && (t = t.substr(1)), null !== n && n.charCodeAt(0) === oo && (n = n.substr(1)), {
        type: "AnPlusB",
        loc: this.getLocation(e, this.tokenStart),
        a: t,
        b: n
      }
    }

    function xo(e) {
      if (e.a) {
        const t = ("+1" === e.a || "1" === e.a ? "n" : "-1" === e.a && "-n") || e.a + "n";
        if (e.b) {
          const n = "-" === e.b[0] || "+" === e.b[0] ? e.b : "+" + e.b;
          this.tokenize(t + n)
        } else this.tokenize(t)
      } else this.tokenize(e.b)
    }

    function Eo(e) {
      return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0)
    }

    function vo() {
      for (let e, t = 1; e = this.lookupType(t); t++) {
        if (e === $n) return !0;
        if (e === Kn || 3 === e) return !1
      }
      return !1
    }

    const ko = "Atrule", To = "atrule",
      Ao = {name: String, prelude: ["AtrulePrelude", "Raw", null], block: ["Block", null]};

    function yo() {
      const e = this.tokenStart;
      let t, n, a = null, i = null;
      switch (this.eat(3), t = this.substrToCursor(e + 1), n = t.toLowerCase(), this.skipSC(), !1 === this.eof && this.tokenType !== Kn && this.tokenType !== zn && (a = this.parseAtrulePrelude ? this.parseWithFallback(this.AtrulePrelude.bind(this, t), Eo) : Eo.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
        case zn:
          this.next();
          break;
        case Kn:
          i = hasOwnProperty.call(this.atrule, n) && "function" == typeof this.atrule[n].block ? this.atrule[n].block.call(this) : this.Block(vo.call(this))
      }
      return {type: "Atrule", loc: this.getLocation(e, this.tokenStart), name: t, prelude: a, block: i}
    }

    function _o(e) {
      this.token(3, "@" + e.name), null !== e.prelude && this.node(e.prelude), e.block ? this.node(e.block) : this.token(zn, ";")
    }

    const Co = "AtrulePrelude", So = "atrulePrelude", wo = {children: [[]]};

    function Io(e) {
      let t = null;
      return null !== e && (e = e.toLowerCase()), this.skipSC(), t = hasOwnProperty.call(this.atrule, e) && "function" == typeof this.atrule[e].prelude ? this.atrule[e].prelude.call(this) : this.readSequence(this.scope.AtrulePrelude), this.skipSC(), !0 !== this.eof && this.tokenType !== Kn && this.tokenType !== zn && this.error("Semicolon or block is expected"), {
        type: "AtrulePrelude",
        loc: this.getLocationFromList(t),
        children: t
      }
    }

    function No(e) {
      this.children(e)
    }

    function Do() {
      this.eof && this.error("Unexpected end of input");
      const e = this.tokenStart;
      let t = !1;
      return this.isDelim(42) ? (t = !0, this.next()) : this.isDelim(124) || this.eat(1), this.isDelim(124) ? 61 !== this.charCodeAt(this.tokenStart + 1) ? (this.next(), this.eat(1)) : t && this.error("Identifier is expected", this.tokenEnd) : t && this.error("Vertical line is expected"), {
        type: "Identifier",
        loc: this.getLocation(e, this.tokenStart),
        name: this.substrToCursor(e)
      }
    }

    function Lo() {
      const e = this.tokenStart, t = this.charCodeAt(e);
      return 61 !== t && 126 !== t && 94 !== t && 36 !== t && 42 !== t && 124 !== t && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.next(), 61 !== t && (this.isDelim(61) || this.error("Equal sign is expected"), this.next()), this.substrToCursor(e)
    }

    const Ro = "AttributeSelector",
      Po = {name: "Identifier", matcher: [String, null], value: ["String", "Identifier", null], flags: [String, null]};

    function Oo() {
      const e = this.tokenStart;
      let t, n = null, a = null, i = null;
      return this.eat(Vn), this.skipSC(), t = Do.call(this), this.skipSC(), this.tokenType !== Wn && (1 !== this.tokenType && (n = Lo.call(this), this.skipSC(), a = 5 === this.tokenType ? this.String() : this.Identifier(), this.skipSC()), 1 === this.tokenType && (i = this.consume(1), this.skipSC())), this.eat(Wn), {
        type: "AttributeSelector",
        loc: this.getLocation(e, this.tokenStart),
        name: t,
        matcher: n,
        value: a,
        flags: i
      }
    }

    function Mo(e) {
      this.token(9, "["), this.node(e.name), null !== e.matcher && (this.tokenize(e.matcher), this.node(e.value)), null !== e.flags && this.token(1, e.flags), this.token(9, "]")
    }

    function Bo(e) {
      return this.Raw(e, null, !0)
    }

    function Uo() {
      return this.parseWithFallback(this.Rule, Bo)
    }

    function Fo(e) {
      return this.Raw(e, this.consumeUntilSemicolonIncluded, !0)
    }

    function Ho() {
      if (this.tokenType === zn) return Fo.call(this, this.tokenIndex);
      const e = this.parseWithFallback(this.Declaration, Fo);
      return this.tokenType === zn && this.next(), e
    }

    const jo = "Block", Go = "block", qo = {children: [["Atrule", "Rule", "Declaration"]]};

    function zo(e) {
      const t = e ? Ho : Uo, n = this.tokenStart;
      let a = this.createList();
      this.eat(Kn);
      e:for (; !this.eof;) switch (this.tokenType) {
        case $n:
          break e;
        case jn:
        case Jn:
          this.next();
          break;
        case 3:
          a.push(this.parseWithFallback(this.Atrule, Bo));
          break;
        default:
          a.push(t.call(this))
      }
      return this.eof || this.eat($n), {type: "Block", loc: this.getLocation(n, this.tokenStart), children: a}
    }

    function Yo(e) {
      this.token(Kn, "{"), this.children(e, (e => {
        "Declaration" === e.type && this.token(zn, ";")
      })), this.token($n, "}")
    }

    const Vo = "Brackets", Wo = {children: [[]]};

    function Qo(e, t) {
      const n = this.tokenStart;
      let a = null;
      return this.eat(Vn), a = e.call(this, t), this.eof || this.eat(Wn), {
        type: "Brackets",
        loc: this.getLocation(n, this.tokenStart),
        children: a
      }
    }

    function Xo(e) {
      this.token(9, "["), this.children(e), this.token(9, "]")
    }

    const Ko = "CDC", $o = [];

    function Jo() {
      const e = this.tokenStart;
      return this.eat(Gn), {type: "CDC", loc: this.getLocation(e, this.tokenStart)}
    }

    function Zo() {
      this.token(Gn, "--\x3e")
    }

    const er = "CDO", tr = [];

    function nr() {
      const e = this.tokenStart;
      return this.eat(14), {type: "CDO", loc: this.getLocation(e, this.tokenStart)}
    }

    function ar() {
      this.token(14, "\x3c!--")
    }

    const ir = "ClassSelector", sr = {name: String};

    function or() {
      return this.eatDelim(46), {
        type: "ClassSelector",
        loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
        name: this.consume(1)
      }
    }

    function rr(e) {
      this.token(9, "."), this.token(1, e.name)
    }

    const cr = "Combinator", lr = {name: String};

    function pr() {
      const e = this.tokenStart;
      let t;
      switch (this.tokenType) {
        case jn:
          t = " ";
          break;
        case 9:
          switch (this.charCodeAt(this.tokenStart)) {
            case 62:
            case 43:
            case 126:
              this.next();
              break;
            case 47:
              this.next(), this.eatIdent("deep"), this.eatDelim(47);
              break;
            default:
              this.error("Combinator is expected")
          }
          t = this.substrToCursor(e)
      }
      return {type: "Combinator", loc: this.getLocation(e, this.tokenStart), name: t}
    }

    function ur(e) {
      this.tokenize(e.name)
    }

    const dr = "Comment", mr = {value: String};

    function hr() {
      const e = this.tokenStart;
      let t = this.tokenEnd;
      return this.eat(Jn), t - e + 2 >= 2 && 42 === this.charCodeAt(t - 2) && 47 === this.charCodeAt(t - 1) && (t -= 2), {
        type: "Comment",
        loc: this.getLocation(e, this.tokenStart),
        value: this.substring(e + 2, t)
      }
    }

    function fr(e) {
      this.token(Jn, "/*" + e.value + "*/")
    }

    function gr(e) {
      return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0)
    }

    function br(e) {
      return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1)
    }

    function xr() {
      const e = this.tokenIndex, t = this.Value();
      return "Raw" !== t.type && !1 === this.eof && this.tokenType !== zn && !1 === this.isDelim(33) && !1 === this.isBalanceEdge(e) && this.error(), t
    }

    const Er = "Declaration", vr = "declaration",
      kr = {important: [Boolean, String], property: String, value: ["Value", "Raw"]};

    function Tr() {
      const e = this.tokenStart, t = this.tokenIndex, n = yr.call(this), a = Ti(n),
        i = a ? this.parseCustomProperty : this.parseValue, s = a ? br : gr;
      let o, r = !1;
      this.skipSC(), this.eat(qn);
      const c = this.tokenIndex;
      if (a || this.skipSC(), o = i ? this.parseWithFallback(xr, s) : s.call(this, this.tokenIndex), a && "Value" === o.type && o.children.isEmpty) for (let e = c - this.tokenIndex; e <= 0; e++) if (this.lookupType(e) === jn) {
        o.children.appendData({type: "WhiteSpace", loc: null, value: " "});
        break
      }
      return this.isDelim(33) && (r = _r.call(this), this.skipSC()), !1 === this.eof && this.tokenType !== zn && !1 === this.isBalanceEdge(t) && this.error(), {
        type: "Declaration",
        loc: this.getLocation(e, this.tokenStart),
        important: r,
        property: n,
        value: o
      }
    }

    function Ar(e) {
      this.token(1, e.property), this.token(qn, ":"), this.node(e.value), e.important && (this.token(9, "!"), this.token(1, !0 === e.important ? "important" : e.important))
    }

    function yr() {
      const e = this.tokenStart;
      if (9 === this.tokenType) switch (this.charCodeAt(this.tokenStart)) {
        case 42:
        case 36:
        case 43:
        case 35:
        case 38:
          this.next();
          break;
        case 47:
          this.next(), this.isDelim(47) && this.next()
      }
      return 4 === this.tokenType ? this.eat(4) : this.eat(1), this.substrToCursor(e)
    }

    function _r() {
      this.eat(9), this.skipSC();
      const e = this.consume(1);
      return "important" === e || e
    }

    function Cr(e) {
      return this.Raw(e, this.consumeUntilSemicolonIncluded, !0)
    }

    const Sr = "DeclarationList", wr = {children: [["Declaration"]]};

    function Ir() {
      const e = this.createList();
      for (; !this.eof;) switch (this.tokenType) {
        case jn:
        case Jn:
        case zn:
          this.next();
          break;
        default:
          e.push(this.parseWithFallback(this.Declaration, Cr))
      }
      return {type: "DeclarationList", loc: this.getLocationFromList(e), children: e}
    }

    function Nr(e) {
      this.children(e, (e => {
        "Declaration" === e.type && this.token(zn, ";")
      }))
    }

    const Dr = "Dimension", Lr = {value: String, unit: String};

    function Rr() {
      const e = this.tokenStart, t = this.consumeNumber(Hn);
      return {
        type: "Dimension",
        loc: this.getLocation(e, this.tokenStart),
        value: t,
        unit: this.substring(e + t.length, this.tokenStart)
      }
    }

    function Pr(e) {
      this.token(Hn, e.value + e.unit)
    }

    const Or = "Function", Mr = "function", Br = {name: String, children: [[]]};

    function Ur(e, t) {
      const n = this.tokenStart, a = this.consumeFunctionName(), i = a.toLowerCase();
      let s;
      return s = t.hasOwnProperty(i) ? t[i].call(this, t) : e.call(this, t), this.eof || this.eat(Xn), {
        type: "Function",
        loc: this.getLocation(n, this.tokenStart),
        name: a,
        children: s
      }
    }

    function Fr(e) {
      this.token(2, e.name + "("), this.children(e), this.token(Xn, ")")
    }

    const Hr = "XXX", jr = "Hash", Gr = {value: String};

    function qr() {
      const e = this.tokenStart;
      return this.eat(4), {type: "Hash", loc: this.getLocation(e, this.tokenStart), value: this.substrToCursor(e + 1)}
    }

    function zr(e) {
      this.token(4, "#" + e.value)
    }

    const Yr = "Identifier", Vr = {name: String};

    function Wr() {
      return {type: "Identifier", loc: this.getLocation(this.tokenStart, this.tokenEnd), name: this.consume(1)}
    }

    function Qr(e) {
      this.token(1, e.name)
    }

    const Xr = "IdSelector", Kr = {name: String};

    function $r() {
      const e = this.tokenStart;
      return this.eat(4), {
        type: "IdSelector",
        loc: this.getLocation(e, this.tokenStart),
        name: this.substrToCursor(e + 1)
      }
    }

    function Jr(e) {
      this.token(9, "#" + e.name)
    }

    const Zr = "MediaFeature", ec = {name: String, value: ["Identifier", "Number", "Dimension", "Ratio", null]};

    function tc() {
      const e = this.tokenStart;
      let t, n = null;
      if (this.eat(Qn), this.skipSC(), t = this.consume(1), this.skipSC(), this.tokenType !== Xn) {
        switch (this.eat(qn), this.skipSC(), this.tokenType) {
          case Un:
            n = 9 === this.lookupNonWSType(1) ? this.Ratio() : this.Number();
            break;
          case Hn:
            n = this.Dimension();
            break;
          case 1:
            n = this.Identifier();
            break;
          default:
            this.error("Number, dimension, ratio or identifier is expected")
        }
        this.skipSC()
      }
      return this.eat(Xn), {type: "MediaFeature", loc: this.getLocation(e, this.tokenStart), name: t, value: n}
    }

    function nc(e) {
      this.token(Qn, "("), this.token(1, e.name), null !== e.value && (this.token(qn, ":"), this.node(e.value)), this.token(Xn, ")")
    }

    const ac = "MediaQuery", ic = {children: [["Identifier", "MediaFeature", "WhiteSpace"]]};

    function sc() {
      const e = this.createList();
      let t = null;
      this.skipSC();
      e:for (; !this.eof;) {
        switch (this.tokenType) {
          case Jn:
          case jn:
            this.next();
            continue;
          case 1:
            t = this.Identifier();
            break;
          case Qn:
            t = this.MediaFeature();
            break;
          default:
            break e
        }
        e.push(t)
      }
      return null === t && this.error("Identifier or parenthesis is expected"), {
        type: "MediaQuery",
        loc: this.getLocationFromList(e),
        children: e
      }
    }

    function oc(e) {
      this.children(e)
    }

    const rc = "MediaQueryList", cc = {children: [["MediaQuery"]]};

    function lc() {
      const e = this.createList();
      for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === Yn);) this.next();
      return {type: "MediaQueryList", loc: this.getLocationFromList(e), children: e}
    }

    function pc(e) {
      this.children(e, (() => this.token(Yn, ",")))
    }

    const uc = "Nth", dc = {nth: ["AnPlusB", "Identifier"], selector: ["SelectorList", null]};

    function mc() {
      this.skipSC();
      const e = this.tokenStart;
      let t, n = e, a = null;
      return t = this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? this.Identifier() : this.AnPlusB(), n = this.tokenStart, this.skipSC(), this.lookupValue(0, "of") && (this.next(), a = this.SelectorList(), n = this.tokenStart), {
        type: "Nth",
        loc: this.getLocation(e, n),
        nth: t,
        selector: a
      }
    }

    function hc(e) {
      this.node(e.nth), null !== e.selector && (this.token(1, "of"), this.node(e.selector))
    }

    const fc = "Number", gc = {value: String};

    function bc() {
      return {type: "Number", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: this.consume(Un)}
    }

    function xc(e) {
      this.token(Un, e.value)
    }

    const Ec = "Operator", vc = {value: String};

    function kc() {
      const e = this.tokenStart;
      return this.next(), {type: "Operator", loc: this.getLocation(e, this.tokenStart), value: this.substrToCursor(e)}
    }

    function Tc(e) {
      this.tokenize(e.value)
    }

    const Ac = "Parentheses", yc = {children: [[]]};

    function _c(e, t) {
      const n = this.tokenStart;
      let a = null;
      return this.eat(Qn), a = e.call(this, t), this.eof || this.eat(Xn), {
        type: "Parentheses",
        loc: this.getLocation(n, this.tokenStart),
        children: a
      }
    }

    function Cc(e) {
      this.token(Qn, "("), this.children(e), this.token(Xn, ")")
    }

    const Sc = "Percentage", wc = {value: String};

    function Ic() {
      return {type: "Percentage", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: this.consumeNumber(Fn)}
    }

    function Nc(e) {
      this.token(Fn, e.value + "%")
    }

    const Dc = "PseudoClassSelector", Lc = "function", Rc = {name: String, children: [["Raw"], null]};

    function Pc() {
      const e = this.tokenStart;
      let t, n, a = null;
      return this.eat(qn), 2 === this.tokenType ? (t = this.consumeFunctionName(), n = t.toLowerCase(), hasOwnProperty.call(this.pseudo, n) ? (this.skipSC(), a = this.pseudo[n].call(this), this.skipSC()) : (a = this.createList(), a.push(this.Raw(this.tokenIndex, null, !1))), this.eat(Xn)) : t = this.consume(1), {
        type: "PseudoClassSelector",
        loc: this.getLocation(e, this.tokenStart),
        name: t,
        children: a
      }
    }

    function Oc(e) {
      this.token(qn, ":"), null === e.children ? this.token(1, e.name) : (this.token(2, e.name + "("), this.children(e), this.token(Xn, ")"))
    }

    const Mc = "PseudoElementSelector", Bc = "function", Uc = {name: String, children: [["Raw"], null]};

    function Fc() {
      const e = this.tokenStart;
      let t, n, a = null;
      return this.eat(qn), this.eat(qn), 2 === this.tokenType ? (t = this.consumeFunctionName(), n = t.toLowerCase(), hasOwnProperty.call(this.pseudo, n) ? (this.skipSC(), a = this.pseudo[n].call(this), this.skipSC()) : (a = this.createList(), a.push(this.Raw(this.tokenIndex, null, !1))), this.eat(Xn)) : t = this.consume(1), {
        type: "PseudoElementSelector",
        loc: this.getLocation(e, this.tokenStart),
        name: t,
        children: a
      }
    }

    function Hc(e) {
      this.token(qn, ":"), this.token(qn, ":"), null === e.children ? this.token(1, e.name) : (this.token(2, e.name + "("), this.children(e), this.token(Xn, ")"))
    }

    function jc() {
      this.skipSC();
      const e = this.consume(Un);
      for (let t = 0; t < e.length; t++) {
        const n = e.charCodeAt(t);
        Zn(n) || 46 === n || this.error("Unsigned number is expected", this.tokenStart - e.length + t)
      }
      return 0 === Number(e) && this.error("Zero number is not allowed", this.tokenStart - e.length), e
    }

    const Gc = "Ratio", qc = {left: String, right: String};

    function zc() {
      const e = this.tokenStart, t = jc.call(this);
      let n;
      return this.skipSC(), this.eatDelim(47), n = jc.call(this), {
        type: "Ratio",
        loc: this.getLocation(e, this.tokenStart),
        left: t,
        right: n
      }
    }

    function Yc(e) {
      this.token(Un, e.left), this.token(9, "/"), this.token(Un, e.right)
    }

    function Vc() {
      return this.tokenIndex > 0 && this.lookupType(-1) === jn ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart
    }

    const Wc = "Raw", Qc = {value: String};

    function Xc(e, t, n) {
      const a = this.getTokenStart(e);
      let i;
      return this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd), i = n && this.tokenStart > a ? Vc.call(this) : this.tokenStart, {
        type: "Raw",
        loc: this.getLocation(a, i),
        value: this.substring(a, i)
      }
    }

    function Kc(e) {
      this.tokenize(e.value)
    }

    function $c(e) {
      return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0)
    }

    function Jc() {
      const e = this.SelectorList();
      return "Raw" !== e.type && !1 === this.eof && this.tokenType !== Kn && this.error(), e
    }

    const Zc = "Rule", el = "rule", tl = {prelude: ["SelectorList", "Raw"], block: ["Block"]};

    function nl() {
      const e = this.tokenIndex, t = this.tokenStart;
      let n, a;
      return n = this.parseRulePrelude ? this.parseWithFallback(Jc, $c) : $c.call(this, e), a = this.Block(!0), {
        type: "Rule",
        loc: this.getLocation(t, this.tokenStart),
        prelude: n,
        block: a
      }
    }

    function al(e) {
      this.node(e.prelude), this.node(e.block)
    }

    const il = "Selector",
      sl = {children: [["TypeSelector", "IdSelector", "ClassSelector", "AttributeSelector", "PseudoClassSelector", "PseudoElementSelector", "Combinator", "WhiteSpace"]]};

    function ol() {
      const e = this.readSequence(this.scope.Selector);
      return null === this.getFirstListNode(e) && this.error("Selector is expected"), {
        type: "Selector",
        loc: this.getLocationFromList(e),
        children: e
      }
    }

    function rl(e) {
      this.children(e)
    }

    const cl = "SelectorList", ll = "selector", pl = {children: [["Selector", "Raw"]]};

    function ul() {
      const e = this.createList();
      for (; !this.eof && (e.push(this.Selector()), this.tokenType === Yn);) this.next();
      return {type: "SelectorList", loc: this.getLocationFromList(e), children: e}
    }

    function dl(e) {
      this.children(e, (() => this.token(Yn, ",")))
    }

    function ml(e) {
      const t = e.length, n = e.charCodeAt(0), a = 34 === n || 39 === n ? 1 : 0,
        i = 1 === a && t > 1 && e.charCodeAt(t - 1) === n ? t - 2 : t - 1;
      let s = "";
      for (let n = a; n <= i; n++) {
        let a = e.charCodeAt(n);
        if (92 === a) {
          if (n === i) {
            n !== t - 1 && (s = e.substr(n + 1));
            break
          }
          if (a = e.charCodeAt(++n), ra(92, a)) {
            const t = n - 1, a = va(e, t);
            n = a - 1, s += ya(e.substring(t + 1, a))
          } else 13 === a && 10 === e.charCodeAt(n + 1) && n++
        } else s += e[n]
      }
      return s
    }

    const hl = "String", fl = {value: String};

    function gl() {
      return {type: "String", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: ml(this.consume(5))}
    }

    function bl(e) {
      this.token(5, function (e, t) {
        const n = t ? "'" : '"', a = t ? 39 : 34;
        let i = "", s = !1;
        for (let t = 0; t < e.length; t++) {
          const n = e.charCodeAt(t);
          0 !== n ? n <= 31 || 127 === n ? (i += "\\" + n.toString(16), s = !0) : n === a || 92 === n ? (i += "\\" + e.charAt(t), s = !1) : (s && (ea(n) || oa(n)) && (i += " "), i += e.charAt(t), s = !1) : i += "�"
        }
        return n + i + n
      }(e.value))
    }

    function xl(e) {
      return this.Raw(e, null, !1)
    }

    const El = "StyleSheet", vl = "stylesheet", kl = {children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]]};

    function Tl() {
      const e = this.tokenStart, t = this.createList();
      let n;
      for (; !this.eof;) {
        switch (this.tokenType) {
          case jn:
            this.next();
            continue;
          case Jn:
            if (33 !== this.charCodeAt(this.tokenStart + 2)) {
              this.next();
              continue
            }
            n = this.Comment();
            break;
          case 14:
            n = this.CDO();
            break;
          case Gn:
            n = this.CDC();
            break;
          case 3:
            n = this.parseWithFallback(this.Atrule, xl);
            break;
          default:
            n = this.parseWithFallback(this.Rule, xl)
        }
        t.push(n)
      }
      return {type: "StyleSheet", loc: this.getLocation(e, this.tokenStart), children: t}
    }

    function Al(e) {
      this.children(e)
    }

    function yl() {
      1 !== this.tokenType && !1 === this.isDelim(42) && this.error("Identifier or asterisk is expected"), this.next()
    }

    const _l = "TypeSelector", Cl = {name: String};

    function Sl() {
      const e = this.tokenStart;
      return this.isDelim(124) ? (this.next(), yl.call(this)) : (yl.call(this), this.isDelim(124) && (this.next(), yl.call(this))), {
        type: "TypeSelector",
        loc: this.getLocation(e, this.tokenStart),
        name: this.substrToCursor(e)
      }
    }

    function wl(e) {
      this.tokenize(e.name)
    }

    function Il(e, t) {
      let n = 0;
      for (let a = this.tokenStart + e; a < this.tokenEnd; a++) {
        const i = this.charCodeAt(a);
        if (45 === i && t && 0 !== n) return Il.call(this, e + n + 1, !1), -1;
        ea(i) || this.error(t && 0 !== n ? "Hyphen minus" + (n < 6 ? " or hex digit" : "") + " is expected" : n < 6 ? "Hex digit is expected" : "Unexpected input", a), ++n > 6 && this.error("Too many hex digits", a)
      }
      return this.next(), n
    }

    function Nl(e) {
      let t = 0;
      for (; this.isDelim(63);) ++t > e && this.error("Too many question marks"), this.next()
    }

    function Dl(e) {
      this.charCodeAt(this.tokenStart) !== e && this.error((43 === e ? "Plus sign" : "Hyphen minus") + " is expected")
    }

    function Ll() {
      let e = 0;
      switch (this.tokenType) {
        case Un:
          if (e = Il.call(this, 1, !0), this.isDelim(63)) {
            Nl.call(this, 6 - e);
            break
          }
          if (this.tokenType === Hn || this.tokenType === Un) {
            Dl.call(this, 45), Il.call(this, 1, !1);
            break
          }
          break;
        case Hn:
          e = Il.call(this, 1, !0), e > 0 && Nl.call(this, 6 - e);
          break;
        default:
          if (this.eatDelim(43), 1 === this.tokenType) {
            e = Il.call(this, 0, !0), e > 0 && Nl.call(this, 6 - e);
            break
          }
          if (this.isDelim(63)) {
            this.next(), Nl.call(this, 5);
            break
          }
          this.error("Hex digit or question mark is expected")
      }
    }

    const Rl = "UnicodeRange", Pl = {value: String};

    function Ol() {
      const e = this.tokenStart;
      return this.eatIdent("u"), Ll.call(this), {
        type: "UnicodeRange",
        loc: this.getLocation(e, this.tokenStart),
        value: this.substrToCursor(e)
      }
    }

    function Ml(e) {
      this.tokenize(e.value)
    }

    const Bl = "Url", Ul = {value: String};

    function Fl() {
      const e = this.tokenStart;
      let t;
      switch (this.tokenType) {
        case 7:
          t = function (e) {
            const t = e.length;
            let n = 4, a = 41 === e.charCodeAt(t - 1) ? t - 2 : t - 1, i = "";
            for (; n < a && oa(e.charCodeAt(n));) n++;
            for (; n < a && oa(e.charCodeAt(a));) a--;
            for (let s = n; s <= a; s++) {
              let n = e.charCodeAt(s);
              if (92 === n) {
                if (s === a) {
                  s !== t - 1 && (i = e.substr(s + 1));
                  break
                }
                if (n = e.charCodeAt(++s), ra(92, n)) {
                  const t = s - 1, n = va(e, t);
                  s = n - 1, i += ya(e.substring(t + 1, n))
                } else 13 === n && 10 === e.charCodeAt(s + 1) && s++
              } else i += e[s]
            }
            return i
          }(this.consume(7));
          break;
        case 2:
          this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(2), this.skipSC(), t = ml(this.consume(5)), this.skipSC(), this.eof || this.eat(Xn);
          break;
        default:
          this.error("Url or Function is expected")
      }
      return {type: "Url", loc: this.getLocation(e, this.tokenStart), value: t}
    }

    function Hl(e) {
      this.token(7, function (e) {
        let t = "", n = !1;
        for (let a = 0; a < e.length; a++) {
          const i = e.charCodeAt(a);
          0 !== i ? i <= 31 || 127 === i ? (t += "\\" + i.toString(16), n = !0) : 32 === i || 92 === i || 34 === i || 39 === i || 40 === i || 41 === i ? (t += "\\" + e.charAt(a), n = !1) : (n && ea(i) && (t += " "), t += e.charAt(a), n = !1) : t += "�"
        }
        return "url(" + t + ")"
      }(e.value))
    }

    const jl = "Value", Gl = {children: [[]]};

    function ql() {
      const e = this.tokenStart, t = this.readSequence(this.scope.Value);
      return {type: "Value", loc: this.getLocation(e, this.tokenStart), children: t}
    }

    function zl(e) {
      this.children(e)
    }

    const Yl = Object.freeze({type: "WhiteSpace", loc: null, value: " "}), Vl = "WhiteSpace", Wl = {value: String};

    function Ql() {
      return this.eat(jn), Yl
    }

    function Xl(e) {
      this.token(jn, e.value)
    }

    function Kl(e) {
      switch (this.tokenType) {
        case 4:
          return this.Hash();
        case Yn:
          return this.Operator();
        case Qn:
          return this.Parentheses(this.readSequence, e.recognizer);
        case Vn:
          return this.Brackets(this.readSequence, e.recognizer);
        case 5:
          return this.String();
        case Hn:
          return this.Dimension();
        case Fn:
          return this.Percentage();
        case Un:
          return this.Number();
        case 2:
          return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
        case 7:
          return this.Url();
        case 1:
          return this.cmpChar(this.tokenStart, 117) && this.cmpChar(this.tokenStart + 1, 43) ? this.UnicodeRange() : this.Identifier();
        case 9: {
          const e = this.charCodeAt(this.tokenStart);
          if (47 === e || 42 === e || 43 === e || 45 === e) return this.Operator();
          35 === e && this.error("Hex or identifier is expected", this.tokenStart + 1);
          break
        }
      }
    }

    const $l = {getNode: Kl};
    const Jl = {
      onWhiteSpace: function (e, t) {
        null !== t.last && "Combinator" !== t.last.type && null !== e && "Combinator" !== e.type && t.push({
          type: "Combinator",
          loc: null,
          name: " "
        })
      }, getNode: function () {
        switch (this.tokenType) {
          case Vn:
            return this.AttributeSelector();
          case 4:
            return this.IdSelector();
          case qn:
            return this.lookupType(1) === qn ? this.PseudoElementSelector() : this.PseudoClassSelector();
          case 1:
            return this.TypeSelector();
          case Un:
          case Fn:
            return this.Percentage();
          case Hn:
            46 === this.charCodeAt(this.tokenStart) && this.error("Identifier is expected", this.tokenStart + 1);
            break;
          case 9:
            switch (this.charCodeAt(this.tokenStart)) {
              case 43:
              case 62:
              case 126:
              case 47:
                return this.Combinator();
              case 46:
                return this.ClassSelector();
              case 42:
              case 124:
                return this.TypeSelector();
              case 35:
                return this.IdSelector()
            }
            break
        }
      }
    };

    function Zl(e) {
      return null !== e && "Operator" === e.type && ("-" === e.value[e.value.length - 1] || "+" === e.value[e.value.length - 1])
    }

    const ep = {
      getNode: Kl, onWhiteSpace(e, t) {
        Zl(e) && (e.value = " " + e.value), Zl(t.last) && (t.last.value += " ")
      }, expression: function () {
        return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1))
      }, var: function () {
        const e = this.createList();
        if (this.skipSC(), e.push(this.Identifier()), this.skipSC(), this.tokenType === Yn) {
          e.push(this.Operator());
          const t = this.tokenIndex,
            n = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
          if ("Value" === n.type && n.children.isEmpty) for (let e = t - this.tokenIndex; e <= 0; e++) if (this.lookupType(e) === jn) {
            n.children.appendData({type: "WhiteSpace", loc: null, value: " "});
            break
          }
          e.push(n)
        }
        return e
      }
    };

    function tp() {
      return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1))
    }

    function np() {
      return this.skipSC(), 1 === this.tokenType && this.lookupNonWSType(1) === qn ? this.createSingleNodeList(this.Declaration()) : ap.call(this)
    }

    function ap() {
      const e = this.createList();
      let t;
      this.skipSC();
      e:for (; !this.eof;) {
        switch (this.tokenType) {
          case Jn:
          case jn:
            this.next();
            continue;
          case 2:
            t = this.Function(tp, this.scope.AtrulePrelude);
            break;
          case 1:
            t = this.Identifier();
            break;
          case Qn:
            t = this.Parentheses(np, this.scope.AtrulePrelude);
            break;
          default:
            break e
        }
        e.push(t)
      }
      return e
    }

    const ip = {
      parse() {
        return this.createSingleNodeList(this.SelectorList())
      }
    }, sp = {
      parse() {
        return this.createSingleNodeList(this.Identifier())
      }
    }, op = {
      parse() {
        return this.createSingleNodeList(this.Nth())
      }
    }, rp = (cp = {
      ...{
        generic: !0, generic: !0, types: {
          "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
          "alpha-value": "<number>|<percentage>",
          "angle-percentage": "<angle>|<percentage>",
          "angular-color-hint": "<angle-percentage>",
          "angular-color-stop": "<color>&&<color-stop-angle>?",
          "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
          "animateable-feature": "scroll-position|contents|<custom-ident>",
          attachment: "scroll|fixed|local",
          "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
          "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
          "attr-modifier": "i|s",
          "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
          "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
          "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
          "baseline-position": "[first|last]? baseline",
          "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
          "bg-image": "none|<image>",
          "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
          "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
          "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
          "blur()": "blur( <length> )",
          "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
          box: "border-box|padding-box|content-box",
          "brightness()": "brightness( <number-percentage> )",
          "calc()": "calc( <calc-sum> )",
          "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
          "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
          "calc-value": "<number>|<dimension>|<percentage>|( <calc-sum> )",
          "cf-final-image": "<image>|<color>",
          "cf-mixing-image": "<percentage>?&&<image>",
          "circle()": "circle( [<shape-radius>]? [at <position>]? )",
          "clamp()": "clamp( <calc-sum>#{3} )",
          "class-selector": "'.' <ident-token>",
          "clip-source": "<url>",
          color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
          "color-stop": "<color-stop-length>|<color-stop-angle>",
          "color-stop-angle": "<angle-percentage>{1,2}",
          "color-stop-length": "<length-percentage>{1,2}",
          "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
          combinator: "'>'|'+'|'~'|['||']",
          "common-lig-values": "[common-ligatures|no-common-ligatures]",
          "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
          "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
          "compositing-operator": "add|subtract|intersect|exclude",
          "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
          "compound-selector-list": "<compound-selector>#",
          "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
          "complex-selector-list": "<complex-selector>#",
          "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
          "contextual-alt-values": "[contextual|no-contextual]",
          "content-distribution": "space-between|space-around|space-evenly|stretch",
          "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
          "content-position": "center|start|end|flex-start|flex-end",
          "content-replacement": "<image>",
          "contrast()": "contrast( [<number-percentage>] )",
          counter: "<counter()>|<counters()>",
          "counter()": "counter( <counter-name> , <counter-style>? )",
          "counter-name": "<custom-ident>",
          "counter-style": "<counter-style-name>|symbols( )",
          "counter-style-name": "<custom-ident>",
          "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
          "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
          "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
          "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
          "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
          "display-box": "contents|none",
          "display-inside": "flow|flow-root|table|flex|grid|ruby",
          "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
          "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
          "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
          "display-outside": "block|inline|run-in",
          "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
          "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
          "east-asian-width-values": "[full-width|proportional-width]",
          "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
          "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
          "ending-shape": "circle|ellipse",
          "env()": "env( <custom-ident> , <declaration-value>? )",
          "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
          "family-name": "<string>|<custom-ident>+",
          "feature-tag-value": "<string> [<integer>|on|off]?",
          "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
          "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
          "feature-value-block-list": "<feature-value-block>+",
          "feature-value-declaration": "<custom-ident> : <integer>+ ;",
          "feature-value-declaration-list": "<feature-value-declaration>",
          "feature-value-name": "<custom-ident>",
          "fill-rule": "nonzero|evenodd",
          "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
          "filter-function-list": "[<filter-function>|<url>]+",
          "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
          "fit-content()": "fit-content( [<length>|<percentage>] )",
          "fixed-breadth": "<length-percentage>",
          "fixed-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
          "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
          "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
          "font-variant-css21": "[normal|small-caps]",
          "font-weight-absolute": "normal|bold|<number [1,1000]>",
          "frequency-percentage": "<frequency>|<percentage>",
          "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
          "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
          "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
          "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
          gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
          "grayscale()": "grayscale( <number-percentage> )",
          "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
          "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
          "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
          "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
          hue: "<number>|<angle>",
          "hue-rotate()": "hue-rotate( <angle> )",
          "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
          image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
          "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
          "image-set()": "image-set( <image-set-option># )",
          "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
          "image-src": "<url>|<string>",
          "image-tags": "ltr|rtl",
          "inflexible-breadth": "<length>|<percentage>|min-content|max-content|auto",
          "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
          "invert()": "invert( <number-percentage> )",
          "keyframes-name": "<custom-ident>|<string>",
          "keyframe-block": "<keyframe-selector># { <declaration-list> }",
          "keyframe-block-list": "<keyframe-block>+",
          "keyframe-selector": "from|to|<percentage>",
          "layer()": "layer( <layer-name> )",
          "layer-name": "<ident> ['.' <ident>]*",
          "leader()": "leader( <leader-type> )",
          "leader-type": "dotted|solid|space|<string>",
          "length-percentage": "<length>|<percentage>",
          "line-names": "'[' <custom-ident>* ']'",
          "line-name-list": "[<line-names>|<name-repeat>]+",
          "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
          "line-width": "<length>|thin|medium|thick",
          "linear-color-hint": "<length-percentage>",
          "linear-color-stop": "<color> <color-stop-length>?",
          "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
          "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
          "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
          "mask-reference": "none|<image>|<mask-source>",
          "mask-source": "<url>",
          "masking-mode": "alpha|luminance|match-source",
          "matrix()": "matrix( <number>#{6} )",
          "matrix3d()": "matrix3d( <number>#{16} )",
          "max()": "max( <calc-sum># )",
          "media-and": "<media-in-parens> [and <media-in-parens>]+",
          "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
          "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
          "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
          "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
          "media-not": "not <media-in-parens>",
          "media-or": "<media-in-parens> [or <media-in-parens>]+",
          "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
          "media-query-list": "<media-query>#",
          "media-type": "<ident>",
          "mf-boolean": "<mf-name>",
          "mf-name": "<ident>",
          "mf-plain": "<mf-name> : <mf-value>",
          "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
          "mf-value": "<number>|<dimension>|<ident>|<ratio>",
          "min()": "min( <calc-sum># )",
          "minmax()": "minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )",
          "name-repeat": "repeat( [<integer [1,∞]>|auto-fill] , <line-names>+ )",
          "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
          "namespace-prefix": "<ident>",
          "ns-prefix": "[<ident-token>|'*']? '|'",
          "number-percentage": "<number>|<percentage>",
          "numeric-figure-values": "[lining-nums|oldstyle-nums]",
          "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
          "numeric-spacing-values": "[proportional-nums|tabular-nums]",
          nth: "<an-plus-b>|even|odd",
          "opacity()": "opacity( [<number-percentage>] )",
          "overflow-position": "unsafe|safe",
          "outline-radius": "<length>|<percentage>",
          "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
          "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
          "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
          "page-selector-list": "[<page-selector>#]?",
          "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
          "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
          "path()": "path( [<fill-rule> ,]? <string> )",
          "paint()": "paint( <ident> , <declaration-value>? )",
          "perspective()": "perspective( <length> )",
          "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
          position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
          "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
          "pseudo-element-selector": "':' <pseudo-class-selector>",
          "pseudo-page": ": [left|right|first|blank]",
          quote: "open-quote|close-quote|no-open-quote|no-close-quote",
          "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
          "relative-selector": "<combinator>? <complex-selector>",
          "relative-selector-list": "<relative-selector>#",
          "relative-size": "larger|smaller",
          "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
          "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
          "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
          "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
          "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
          "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
          "rotate()": "rotate( [<angle>|<zero>] )",
          "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
          "rotateX()": "rotateX( [<angle>|<zero>] )",
          "rotateY()": "rotateY( [<angle>|<zero>] )",
          "rotateZ()": "rotateZ( [<angle>|<zero>] )",
          "saturate()": "saturate( <number-percentage> )",
          "scale()": "scale( <number> , <number>? )",
          "scale3d()": "scale3d( <number> , <number> , <number> )",
          "scaleX()": "scaleX( <number> )",
          "scaleY()": "scaleY( <number> )",
          "scaleZ()": "scaleZ( <number> )",
          "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
          "shape-radius": "<length-percentage>|closest-side|farthest-side",
          "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
          "skewX()": "skewX( [<angle>|<zero>] )",
          "skewY()": "skewY( [<angle>|<zero>] )",
          "sepia()": "sepia( <number-percentage> )",
          shadow: "inset?&&<length>{2,4}&&<color>?",
          "shadow-t": "[<length>{2,3}&&<color>?]",
          shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
          "shape-box": "<box>|margin-box",
          "side-or-corner": "[left|right]||[top|bottom]",
          "single-animation": "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
          "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
          "single-animation-fill-mode": "none|forwards|backwards|both",
          "single-animation-iteration-count": "infinite|<number>",
          "single-animation-play-state": "running|paused",
          "single-animation-timeline": "auto|none|<timeline-name>",
          "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
          "single-transition-property": "all|<custom-ident>",
          size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
          "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
          "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
          "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
          "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
          "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
          "supports-feature": "<supports-decl>|<supports-selector-fn>",
          "supports-decl": "( <declaration> )",
          "supports-selector-fn": "selector( <complex-selector> )",
          symbol: "<string>|<image>|<custom-ident>",
          target: "<target-counter()>|<target-counters()>|<target-text()>",
          "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
          "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
          "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
          "time-percentage": "<time>|<percentage>",
          "timeline-name": "<custom-ident>|<string>",
          "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
          "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
          "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
          "track-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <track-size>]+ <line-names>? )",
          "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )",
          "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
          "transform-list": "<transform-function>+",
          "translate()": "translate( <length-percentage> , <length-percentage>? )",
          "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
          "translateX()": "translateX( <length-percentage> )",
          "translateY()": "translateY( <length-percentage> )",
          "translateZ()": "translateZ( <length> )",
          "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
          "type-selector": "<wq-name>|<ns-prefix>? '*'",
          "var()": "var( <custom-property-name> , <declaration-value>? )",
          "viewport-length": "auto|<length-percentage>",
          "visual-box": "content-box|padding-box|border-box",
          "wq-name": "<ns-prefix>? <ident-token>",
          "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
          "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
          "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
          "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
          "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
          "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
          "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
          "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
          "-legacy-radial-gradient-shape": "circle|ellipse",
          "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
          "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
          "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
          "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
          "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
          "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
          "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
          "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
          "-webkit-gradient-radius": "<length>|<percentage>",
          "-webkit-gradient-type": "linear|radial",
          "-webkit-mask-box-repeat": "repeat|stretch|round",
          "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
          "-ms-filter-function-list": "<-ms-filter-function>+",
          "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
          "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
          "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
          "-ms-filter": "<string>",
          age: "child|young|old",
          "attr-name": "<wq-name>",
          "attr-fallback": "<any-value>",
          "bg-clip": "<box>|border|text",
          "border-radius": "<length-percentage>{1,2}",
          bottom: "<length>|auto",
          "generic-voice": "[<age>? <gender> <integer>?]",
          gender: "male|female|neutral",
          "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
          "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
          left: "<length>|auto",
          "mask-image": "<mask-reference>#",
          paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
          ratio: "<number [0,∞]> [/ <number [0,∞]>]?",
          "reversed-counter-name": "reversed( <counter-name> )",
          right: "<length>|auto",
          "svg-length": "<percentage>|<length>|<number>",
          "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
          top: "<length>|auto",
          "track-group": "'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>",
          "track-list-v0": "[<string>* <track-group> <string>*]+|none",
          "track-minmax": "minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content",
          x: "<number>",
          y: "<number>",
          declaration: "<ident-token> : <declaration-value>? ['!' important]?",
          "declaration-list": "[<declaration>? ';']* <declaration>?",
          url: "url( <string> <url-modifier>* )|<url-token>",
          "url-modifier": "<ident>|<function-token> <any-value> )",
          "number-zero-one": "<number [0,1]>",
          "number-one-or-greater": "<number [1,∞]>",
          "positive-integer": "<integer [0,∞]>",
          "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
        }, properties: {
          "--*": "<declaration-value>",
          "-ms-accelerator": "false|true",
          "-ms-block-progression": "tb|rl|bt|lr",
          "-ms-content-zoom-chaining": "none|chained",
          "-ms-content-zooming": "none|zoom",
          "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
          "-ms-content-zoom-limit-max": "<percentage>",
          "-ms-content-zoom-limit-min": "<percentage>",
          "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
          "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
          "-ms-content-zoom-snap-type": "none|proximity|mandatory",
          "-ms-filter": "<string>",
          "-ms-flow-from": "[none|<custom-ident>]#",
          "-ms-flow-into": "[none|<custom-ident>]#",
          "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
          "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
          "-ms-high-contrast-adjust": "auto|none",
          "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
          "-ms-hyphenate-limit-lines": "no-limit|<integer>",
          "-ms-hyphenate-limit-zone": "<percentage>|<length>",
          "-ms-ime-align": "auto|after",
          "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
          "-ms-scrollbar-3dlight-color": "<color>",
          "-ms-scrollbar-arrow-color": "<color>",
          "-ms-scrollbar-base-color": "<color>",
          "-ms-scrollbar-darkshadow-color": "<color>",
          "-ms-scrollbar-face-color": "<color>",
          "-ms-scrollbar-highlight-color": "<color>",
          "-ms-scrollbar-shadow-color": "<color>",
          "-ms-scrollbar-track-color": "<color>",
          "-ms-scroll-chaining": "chained|none",
          "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
          "-ms-scroll-limit-x-max": "auto|<length>",
          "-ms-scroll-limit-x-min": "<length>",
          "-ms-scroll-limit-y-max": "auto|<length>",
          "-ms-scroll-limit-y-min": "<length>",
          "-ms-scroll-rails": "none|railed",
          "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
          "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
          "-ms-scroll-snap-type": "none|proximity|mandatory",
          "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
          "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
          "-ms-scroll-translation": "none|vertical-to-horizontal",
          "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
          "-ms-touch-select": "grippers|none",
          "-ms-user-select": "none|element|text",
          "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
          "-ms-wrap-margin": "<length>",
          "-ms-wrap-through": "wrap|none",
          "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
          "-moz-binding": "<url>|none",
          "-moz-border-bottom-colors": "<color>+|none",
          "-moz-border-left-colors": "<color>+|none",
          "-moz-border-right-colors": "<color>+|none",
          "-moz-border-top-colors": "<color>+|none",
          "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
          "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
          "-moz-force-broken-image-icon": "0|1",
          "-moz-image-region": "<shape>|auto",
          "-moz-orient": "inline|block|horizontal|vertical",
          "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
          "-moz-outline-radius-bottomleft": "<outline-radius>",
          "-moz-outline-radius-bottomright": "<outline-radius>",
          "-moz-outline-radius-topleft": "<outline-radius>",
          "-moz-outline-radius-topright": "<outline-radius>",
          "-moz-stack-sizing": "ignore|stretch-to-fit",
          "-moz-text-blink": "none|blink",
          "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
          "-moz-user-input": "auto|none|enabled|disabled",
          "-moz-user-modify": "read-only|read-write|write-only",
          "-moz-window-dragging": "drag|no-drag",
          "-moz-window-shadow": "default|menu|tooltip|sheet|none",
          "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
          "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
          "-webkit-border-before-color": "<color>",
          "-webkit-border-before-style": "<'border-style'>",
          "-webkit-border-before-width": "<'border-width'>",
          "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
          "-webkit-line-clamp": "none|<integer>",
          "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
          "-webkit-mask-attachment": "<attachment>#",
          "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
          "-webkit-mask-composite": "<composite-style>#",
          "-webkit-mask-image": "<mask-reference>#",
          "-webkit-mask-origin": "[<box>|border|padding|content]#",
          "-webkit-mask-position": "<position>#",
          "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
          "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
          "-webkit-mask-repeat": "<repeat-style>#",
          "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
          "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
          "-webkit-mask-size": "<bg-size>#",
          "-webkit-overflow-scrolling": "auto|touch",
          "-webkit-tap-highlight-color": "<color>",
          "-webkit-text-fill-color": "<color>",
          "-webkit-text-stroke": "<length>||<color>",
          "-webkit-text-stroke-color": "<color>",
          "-webkit-text-stroke-width": "<length>",
          "-webkit-touch-callout": "default|none",
          "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
          "accent-color": "auto|<color>",
          "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
          "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
          "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
          "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
          all: "initial|inherit|unset|revert|revert-layer",
          animation: "<single-animation>#",
          "animation-delay": "<time>#",
          "animation-direction": "<single-animation-direction>#",
          "animation-duration": "<time>#",
          "animation-fill-mode": "<single-animation-fill-mode>#",
          "animation-iteration-count": "<single-animation-iteration-count>#",
          "animation-name": "[none|<keyframes-name>]#",
          "animation-play-state": "<single-animation-play-state>#",
          "animation-timing-function": "<easing-function>#",
          "animation-timeline": "<single-animation-timeline>#",
          appearance: "none|auto|textfield|menulist-button|<compat-auto>",
          "aspect-ratio": "auto|<ratio>",
          azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
          "backdrop-filter": "none|<filter-function-list>",
          "backface-visibility": "visible|hidden",
          background: "[<bg-layer> ,]* <final-bg-layer>",
          "background-attachment": "<attachment>#",
          "background-blend-mode": "<blend-mode>#",
          "background-clip": "<bg-clip>#",
          "background-color": "<color>",
          "background-image": "<bg-image>#",
          "background-origin": "<box>#",
          "background-position": "<bg-position>#",
          "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
          "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
          "background-repeat": "<repeat-style>#",
          "background-size": "<bg-size>#",
          "block-overflow": "clip|ellipsis|<string>",
          "block-size": "<'width'>",
          border: "<line-width>||<line-style>||<color>",
          "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
          "border-block-color": "<'border-top-color'>{1,2}",
          "border-block-style": "<'border-top-style'>",
          "border-block-width": "<'border-top-width'>",
          "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
          "border-block-end-color": "<'border-top-color'>",
          "border-block-end-style": "<'border-top-style'>",
          "border-block-end-width": "<'border-top-width'>",
          "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
          "border-block-start-color": "<'border-top-color'>",
          "border-block-start-style": "<'border-top-style'>",
          "border-block-start-width": "<'border-top-width'>",
          "border-bottom": "<line-width>||<line-style>||<color>",
          "border-bottom-color": "<'border-top-color'>",
          "border-bottom-left-radius": "<length-percentage>{1,2}",
          "border-bottom-right-radius": "<length-percentage>{1,2}",
          "border-bottom-style": "<line-style>",
          "border-bottom-width": "<line-width>",
          "border-collapse": "collapse|separate",
          "border-color": "<color>{1,4}",
          "border-end-end-radius": "<length-percentage>{1,2}",
          "border-end-start-radius": "<length-percentage>{1,2}",
          "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
          "border-image-outset": "[<length>|<number>]{1,4}",
          "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
          "border-image-slice": "<number-percentage>{1,4}&&fill?",
          "border-image-source": "none|<image>",
          "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
          "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
          "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
          "border-inline-color": "<'border-top-color'>{1,2}",
          "border-inline-style": "<'border-top-style'>",
          "border-inline-width": "<'border-top-width'>",
          "border-inline-end-color": "<'border-top-color'>",
          "border-inline-end-style": "<'border-top-style'>",
          "border-inline-end-width": "<'border-top-width'>",
          "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
          "border-inline-start-color": "<'border-top-color'>",
          "border-inline-start-style": "<'border-top-style'>",
          "border-inline-start-width": "<'border-top-width'>",
          "border-left": "<line-width>||<line-style>||<color>",
          "border-left-color": "<color>",
          "border-left-style": "<line-style>",
          "border-left-width": "<line-width>",
          "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
          "border-right": "<line-width>||<line-style>||<color>",
          "border-right-color": "<color>",
          "border-right-style": "<line-style>",
          "border-right-width": "<line-width>",
          "border-spacing": "<length> <length>?",
          "border-start-end-radius": "<length-percentage>{1,2}",
          "border-start-start-radius": "<length-percentage>{1,2}",
          "border-style": "<line-style>{1,4}",
          "border-top": "<line-width>||<line-style>||<color>",
          "border-top-color": "<color>",
          "border-top-left-radius": "<length-percentage>{1,2}",
          "border-top-right-radius": "<length-percentage>{1,2}",
          "border-top-style": "<line-style>",
          "border-top-width": "<line-width>",
          "border-width": "<line-width>{1,4}",
          bottom: "<length>|<percentage>|auto",
          "box-align": "start|center|end|baseline|stretch",
          "box-decoration-break": "slice|clone",
          "box-direction": "normal|reverse|inherit",
          "box-flex": "<number>",
          "box-flex-group": "<integer>",
          "box-lines": "single|multiple",
          "box-ordinal-group": "<integer>",
          "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
          "box-pack": "start|center|end|justify",
          "box-shadow": "none|<shadow>#",
          "box-sizing": "content-box|border-box",
          "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
          "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
          "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
          "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
          "caret-color": "auto|<color>",
          clear: "none|left|right|both|inline-start|inline-end",
          clip: "<shape>|auto",
          "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
          color: "<color>",
          "print-color-adjust": "economy|exact",
          "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
          "column-count": "<integer>|auto",
          "column-fill": "auto|balance|balance-all",
          "column-gap": "normal|<length-percentage>",
          "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
          "column-rule-color": "<color>",
          "column-rule-style": "<'border-style'>",
          "column-rule-width": "<'border-width'>",
          "column-span": "none|all",
          "column-width": "<length>|auto",
          columns: "<'column-width'>||<'column-count'>",
          contain: "none|strict|content|[size||layout||style||paint]",
          content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
          "content-visibility": "visible|auto|hidden",
          "counter-increment": "[<counter-name> <integer>?]+|none",
          "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
          "counter-set": "[<counter-name> <integer>?]+|none",
          cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
          direction: "ltr|rtl",
          display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
          "empty-cells": "show|hide",
          filter: "none|<filter-function-list>|<-ms-filter-function-list>",
          flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
          "flex-basis": "content|<'width'>",
          "flex-direction": "row|row-reverse|column|column-reverse",
          "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
          "flex-grow": "<number>",
          "flex-shrink": "<number>",
          "flex-wrap": "nowrap|wrap|wrap-reverse",
          float: "left|right|none|inline-start|inline-end",
          font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
          "font-family": "[<family-name>|<generic-family>]#",
          "font-feature-settings": "normal|<feature-tag-value>#",
          "font-kerning": "auto|normal|none",
          "font-language-override": "normal|<string>",
          "font-optical-sizing": "auto|none",
          "font-variation-settings": "normal|[<string> <number>]#",
          "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
          "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
          "font-smooth": "auto|never|always|<absolute-size>|<length>",
          "font-stretch": "<font-stretch-absolute>",
          "font-style": "normal|italic|oblique <angle>?",
          "font-synthesis": "none|[weight||style||small-caps]",
          "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
          "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
          "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
          "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
          "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
          "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
          "font-variant-position": "normal|sub|super",
          "font-weight": "<font-weight-absolute>|bolder|lighter",
          "forced-color-adjust": "auto|none",
          gap: "<'row-gap'> <'column-gap'>?",
          grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
          "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
          "grid-auto-columns": "<track-size>+",
          "grid-auto-flow": "[row|column]||dense",
          "grid-auto-rows": "<track-size>+",
          "grid-column": "<grid-line> [/ <grid-line>]?",
          "grid-column-end": "<grid-line>",
          "grid-column-gap": "<length-percentage>",
          "grid-column-start": "<grid-line>",
          "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
          "grid-row": "<grid-line> [/ <grid-line>]?",
          "grid-row-end": "<grid-line>",
          "grid-row-gap": "<length-percentage>",
          "grid-row-start": "<grid-line>",
          "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
          "grid-template-areas": "none|<string>+",
          "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
          "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
          "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
          height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
          "hyphenate-character": "auto|<string>",
          hyphens: "none|manual|auto",
          "image-orientation": "from-image|<angle>|[<angle>? flip]",
          "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
          "image-resolution": "[from-image||<resolution>]&&snap?",
          "ime-mode": "auto|normal|active|inactive|disabled",
          "initial-letter": "normal|[<number> <integer>?]",
          "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
          "inline-size": "<'width'>",
          "input-security": "auto|none",
          inset: "<'top'>{1,4}",
          "inset-block": "<'top'>{1,2}",
          "inset-block-end": "<'top'>",
          "inset-block-start": "<'top'>",
          "inset-inline": "<'top'>{1,2}",
          "inset-inline-end": "<'top'>",
          "inset-inline-start": "<'top'>",
          isolation: "auto|isolate",
          "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
          "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
          "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
          "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
          left: "<length>|<percentage>|auto",
          "letter-spacing": "normal|<length-percentage>",
          "line-break": "auto|loose|normal|strict|anywhere",
          "line-clamp": "none|<integer>",
          "line-height": "normal|<number>|<length>|<percentage>",
          "line-height-step": "<length>",
          "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
          "list-style-image": "<image>|none",
          "list-style-position": "inside|outside",
          "list-style-type": "<counter-style>|<string>|none",
          margin: "[<length>|<percentage>|auto]{1,4}",
          "margin-block": "<'margin-left'>{1,2}",
          "margin-block-end": "<'margin-left'>",
          "margin-block-start": "<'margin-left'>",
          "margin-bottom": "<length>|<percentage>|auto",
          "margin-inline": "<'margin-left'>{1,2}",
          "margin-inline-end": "<'margin-left'>",
          "margin-inline-start": "<'margin-left'>",
          "margin-left": "<length>|<percentage>|auto",
          "margin-right": "<length>|<percentage>|auto",
          "margin-top": "<length>|<percentage>|auto",
          "margin-trim": "none|in-flow|all",
          mask: "<mask-layer>#",
          "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
          "mask-border-mode": "luminance|alpha",
          "mask-border-outset": "[<length>|<number>]{1,4}",
          "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
          "mask-border-slice": "<number-percentage>{1,4} fill?",
          "mask-border-source": "none|<image>",
          "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
          "mask-clip": "[<geometry-box>|no-clip]#",
          "mask-composite": "<compositing-operator>#",
          "mask-image": "<mask-reference>#",
          "mask-mode": "<masking-mode>#",
          "mask-origin": "<geometry-box>#",
          "mask-position": "<position>#",
          "mask-repeat": "<repeat-style>#",
          "mask-size": "<bg-size>#",
          "mask-type": "luminance|alpha",
          "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
          "math-style": "normal|compact",
          "max-block-size": "<'max-width'>",
          "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
          "max-inline-size": "<'max-width'>",
          "max-lines": "none|<integer>",
          "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
          "min-block-size": "<'min-width'>",
          "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
          "min-inline-size": "<'min-width'>",
          "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
          "mix-blend-mode": "<blend-mode>|plus-lighter",
          "object-fit": "fill|contain|cover|none|scale-down",
          "object-position": "<position>",
          offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
          "offset-anchor": "auto|<position>",
          "offset-distance": "<length-percentage>",
          "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
          "offset-position": "auto|<position>",
          "offset-rotate": "[auto|reverse]||<angle>",
          opacity: "<alpha-value>",
          order: "<integer>",
          orphans: "<integer>",
          outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
          "outline-color": "<color>|invert",
          "outline-offset": "<length>",
          "outline-style": "auto|<'border-style'>",
          "outline-width": "<line-width>",
          overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
          "overflow-anchor": "auto|none",
          "overflow-block": "visible|hidden|clip|scroll|auto",
          "overflow-clip-box": "padding-box|content-box",
          "overflow-clip-margin": "<visual-box>||<length [0,∞]>",
          "overflow-inline": "visible|hidden|clip|scroll|auto",
          "overflow-wrap": "normal|break-word|anywhere",
          "overflow-x": "visible|hidden|clip|scroll|auto",
          "overflow-y": "visible|hidden|clip|scroll|auto",
          "overscroll-behavior": "[contain|none|auto]{1,2}",
          "overscroll-behavior-block": "contain|none|auto",
          "overscroll-behavior-inline": "contain|none|auto",
          "overscroll-behavior-x": "contain|none|auto",
          "overscroll-behavior-y": "contain|none|auto",
          padding: "[<length>|<percentage>]{1,4}",
          "padding-block": "<'padding-left'>{1,2}",
          "padding-block-end": "<'padding-left'>",
          "padding-block-start": "<'padding-left'>",
          "padding-bottom": "<length>|<percentage>",
          "padding-inline": "<'padding-left'>{1,2}",
          "padding-inline-end": "<'padding-left'>",
          "padding-inline-start": "<'padding-left'>",
          "padding-left": "<length>|<percentage>",
          "padding-right": "<length>|<percentage>",
          "padding-top": "<length>|<percentage>",
          "page-break-after": "auto|always|avoid|left|right|recto|verso",
          "page-break-before": "auto|always|avoid|left|right|recto|verso",
          "page-break-inside": "auto|avoid",
          "paint-order": "normal|[fill||stroke||markers]",
          perspective: "none|<length>",
          "perspective-origin": "<position>",
          "place-content": "<'align-content'> <'justify-content'>?",
          "place-items": "<'align-items'> <'justify-items'>?",
          "place-self": "<'align-self'> <'justify-self'>?",
          "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
          position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
          quotes: "none|auto|[<string> <string>]+",
          resize: "none|both|horizontal|vertical|block|inline",
          right: "<length>|<percentage>|auto",
          rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
          "row-gap": "normal|<length-percentage>",
          "ruby-align": "start|center|space-between|space-around",
          "ruby-merge": "separate|collapse|auto",
          "ruby-position": "[alternate||[over|under]]|inter-character",
          scale: "none|<number>{1,3}",
          "scrollbar-color": "auto|<color>{2}",
          "scrollbar-gutter": "auto|stable&&both-edges?",
          "scrollbar-width": "auto|thin|none",
          "scroll-behavior": "auto|smooth",
          "scroll-margin": "<length>{1,4}",
          "scroll-margin-block": "<length>{1,2}",
          "scroll-margin-block-start": "<length>",
          "scroll-margin-block-end": "<length>",
          "scroll-margin-bottom": "<length>",
          "scroll-margin-inline": "<length>{1,2}",
          "scroll-margin-inline-start": "<length>",
          "scroll-margin-inline-end": "<length>",
          "scroll-margin-left": "<length>",
          "scroll-margin-right": "<length>",
          "scroll-margin-top": "<length>",
          "scroll-padding": "[auto|<length-percentage>]{1,4}",
          "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
          "scroll-padding-block-start": "auto|<length-percentage>",
          "scroll-padding-block-end": "auto|<length-percentage>",
          "scroll-padding-bottom": "auto|<length-percentage>",
          "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
          "scroll-padding-inline-start": "auto|<length-percentage>",
          "scroll-padding-inline-end": "auto|<length-percentage>",
          "scroll-padding-left": "auto|<length-percentage>",
          "scroll-padding-right": "auto|<length-percentage>",
          "scroll-padding-top": "auto|<length-percentage>",
          "scroll-snap-align": "[none|start|end|center]{1,2}",
          "scroll-snap-coordinate": "none|<position>#",
          "scroll-snap-destination": "<position>",
          "scroll-snap-points-x": "none|repeat( <length-percentage> )",
          "scroll-snap-points-y": "none|repeat( <length-percentage> )",
          "scroll-snap-stop": "normal|always",
          "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
          "scroll-snap-type-x": "none|mandatory|proximity",
          "scroll-snap-type-y": "none|mandatory|proximity",
          "shape-image-threshold": "<alpha-value>",
          "shape-margin": "<length-percentage>",
          "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
          "tab-size": "<integer>|<length>",
          "table-layout": "auto|fixed",
          "text-align": "start|end|left|right|center|justify|match-parent",
          "text-align-last": "auto|start|end|left|right|center|justify",
          "text-combine-upright": "none|all|[digits <integer>?]",
          "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
          "text-decoration-color": "<color>",
          "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
          "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
          "text-decoration-skip-ink": "auto|all|none",
          "text-decoration-style": "solid|double|dotted|dashed|wavy",
          "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
          "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
          "text-emphasis-color": "<color>",
          "text-emphasis-position": "[over|under]&&[right|left]",
          "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
          "text-indent": "<length-percentage>&&hanging?&&each-line?",
          "text-justify": "auto|inter-character|inter-word|none",
          "text-orientation": "mixed|upright|sideways",
          "text-overflow": "[clip|ellipsis|<string>]{1,2}",
          "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
          "text-shadow": "none|<shadow-t>#",
          "text-size-adjust": "none|auto|<percentage>",
          "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
          "text-underline-offset": "auto|<length>|<percentage>",
          "text-underline-position": "auto|from-font|[under||[left|right]]",
          top: "<length>|<percentage>|auto",
          "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
          transform: "none|<transform-list>",
          "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
          "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
          "transform-style": "flat|preserve-3d",
          transition: "<single-transition>#",
          "transition-delay": "<time>#",
          "transition-duration": "<time>#",
          "transition-property": "none|<single-transition-property>#",
          "transition-timing-function": "<easing-function>#",
          translate: "none|<length-percentage> [<length-percentage> <length>?]?",
          "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
          "user-select": "auto|text|none|contain|all",
          "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
          visibility: "visible|hidden|collapse",
          "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
          widows: "<integer>",
          width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
          "will-change": "auto|<animateable-feature>#",
          "word-break": "normal|break-all|keep-all|break-word",
          "word-spacing": "normal|<length>",
          "word-wrap": "normal|break-word",
          "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
          "z-index": "auto|<integer>",
          zoom: "normal|reset|<number>|<percentage>",
          "-moz-background-clip": "padding|border",
          "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
          "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
          "-moz-border-radius-topleft": "<'border-top-left-radius'>",
          "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
          "-moz-control-character-visibility": "visible|hidden",
          "-moz-osx-font-smoothing": "auto|grayscale",
          "-moz-user-select": "none|text|all|-moz-none",
          "-ms-flex-align": "start|end|center|baseline|stretch",
          "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
          "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
          "-ms-flex-negative": "<'flex-shrink'>",
          "-ms-flex-pack": "start|end|center|justify|distribute",
          "-ms-flex-order": "<integer>",
          "-ms-flex-positive": "<'flex-grow'>",
          "-ms-flex-preferred-size": "<'flex-basis'>",
          "-ms-interpolation-mode": "nearest-neighbor|bicubic",
          "-ms-grid-column-align": "start|end|center|stretch",
          "-ms-grid-row-align": "start|end|center|stretch",
          "-ms-hyphenate-limit-last": "none|always|column|page|spread",
          "-webkit-background-clip": "[<box>|border|padding|content|text]#",
          "-webkit-column-break-after": "always|auto|avoid",
          "-webkit-column-break-before": "always|auto|avoid",
          "-webkit-column-break-inside": "always|auto|avoid",
          "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
          "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
          "-webkit-print-color-adjust": "economy|exact",
          "-webkit-text-security": "none|circle|disc|square",
          "-webkit-user-drag": "none|element|auto",
          "-webkit-user-select": "auto|none|text|all",
          "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
          "baseline-shift": "baseline|sub|super|<svg-length>",
          behavior: "<url>+",
          "clip-rule": "nonzero|evenodd",
          cue: "<'cue-before'> <'cue-after'>?",
          "cue-after": "<url> <decibel>?|none",
          "cue-before": "<url> <decibel>?|none",
          "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
          fill: "<paint>",
          "fill-opacity": "<number-zero-one>",
          "fill-rule": "nonzero|evenodd",
          "glyph-orientation-horizontal": "<angle>",
          "glyph-orientation-vertical": "<angle>",
          kerning: "auto|<svg-length>",
          marker: "none|<url>",
          "marker-end": "none|<url>",
          "marker-mid": "none|<url>",
          "marker-start": "none|<url>",
          pause: "<'pause-before'> <'pause-after'>?",
          "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
          "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
          rest: "<'rest-before'> <'rest-after'>?",
          "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
          "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
          "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
          src: "[<url> [format( <string># )]?|local( <family-name> )]#",
          speak: "auto|none|normal",
          "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
          stroke: "<paint>",
          "stroke-dasharray": "none|[<svg-length>+]#",
          "stroke-dashoffset": "<svg-length>",
          "stroke-linecap": "butt|round|square",
          "stroke-linejoin": "miter|round|bevel",
          "stroke-miterlimit": "<number-one-or-greater>",
          "stroke-opacity": "<number-zero-one>",
          "stroke-width": "<svg-length>",
          "text-anchor": "start|middle|end",
          "unicode-range": "<urange>#",
          "voice-balance": "<number>|left|center|right|leftwards|rightwards",
          "voice-duration": "auto|<time>",
          "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
          "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
          "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
          "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
          "voice-stress": "normal|strong|moderate|none|reduced",
          "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
        }, atrules: {
          charset: {prelude: "<string>", descriptors: null},
          "counter-style": {
            prelude: "<counter-style-name>",
            descriptors: {
              "additive-symbols": "[<integer>&&<symbol>]#",
              fallback: "<counter-style-name>",
              negative: "<symbol> <symbol>?",
              pad: "<integer>&&<symbol>",
              prefix: "<symbol>",
              range: "[[<integer>|infinite]{2}]#|auto",
              "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
              suffix: "<symbol>",
              symbols: "<symbol>+",
              system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
            }
          },
          document: {
            prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
            descriptors: null
          },
          "font-face": {
            prelude: null, descriptors: {
              "ascent-override": "normal|<percentage>",
              "descent-override": "normal|<percentage>",
              "font-display": "[auto|block|swap|fallback|optional]",
              "font-family": "<family-name>",
              "font-feature-settings": "normal|<feature-tag-value>#",
              "font-variation-settings": "normal|[<string> <number>]#",
              "font-stretch": "<font-stretch-absolute>{1,2}",
              "font-style": "normal|italic|oblique <angle>{0,2}",
              "font-weight": "<font-weight-absolute>{1,2}",
              "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
              "line-gap-override": "normal|<percentage>",
              "size-adjust": "<percentage>",
              src: "[<url> [format( <string># )]?|local( <family-name> )]#",
              "unicode-range": "<urange>#"
            }
          },
          "font-feature-values": {prelude: "<family-name>#", descriptors: null},
          import: {
            prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
            descriptors: null
          },
          keyframes: {prelude: "<keyframes-name>", descriptors: null},
          layer: {prelude: "[<layer-name>#|<layer-name>?]", descriptors: null},
          media: {prelude: "<media-query-list>", descriptors: null},
          namespace: {prelude: "<namespace-prefix>? [<string>|<url>]", descriptors: null},
          page: {
            prelude: "<page-selector-list>",
            descriptors: {
              bleed: "auto|<length>",
              marks: "none|[crop||cross]",
              size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
            }
          },
          property: {
            prelude: "<custom-property-name>",
            descriptors: {syntax: "<string>", inherits: "true|false", "initial-value": "<string>"}
          },
          "scroll-timeline": {prelude: "<timeline-name>", descriptors: null},
          supports: {prelude: "<supports-condition>", descriptors: null},
          viewport: {
            prelude: null,
            descriptors: {
              height: "<viewport-length>{1,2}",
              "max-height": "<viewport-length>",
              "max-width": "<viewport-length>",
              "max-zoom": "auto|<number>|<percentage>",
              "min-height": "<viewport-length>",
              "min-width": "<viewport-length>",
              "min-zoom": "auto|<number>|<percentage>",
              orientation: "auto|portrait|landscape",
              "user-zoom": "zoom|fixed",
              "viewport-fit": "auto|contain|cover",
              width: "<viewport-length>{1,2}",
              zoom: "auto|<number>|<percentage>"
            }
          }
        }, node: q
      }, ...{
        parseContext: {
          default: "StyleSheet",
          stylesheet: "StyleSheet",
          atrule: "Atrule",
          atrulePrelude(e) {
            return this.AtrulePrelude(e.atrule ? String(e.atrule) : null)
          },
          mediaQueryList: "MediaQueryList",
          mediaQuery: "MediaQuery",
          rule: "Rule",
          selectorList: "SelectorList",
          selector: "Selector",
          block() {
            return this.Block(!0)
          },
          declarationList: "DeclarationList",
          declaration: "Declaration",
          value: "Value"
        },
        scope: z,
        atrule: {
          "font-face": {
            parse: {
              prelude: null, block() {
                return this.Block(!0)
              }
            }
          }, import: {
            parse: {
              prelude() {
                const e = this.createList();
                switch (this.skipSC(), this.tokenType) {
                  case 5:
                    e.push(this.String());
                    break;
                  case 7:
                  case 2:
                    e.push(this.Url());
                    break;
                  default:
                    this.error("String or url() is expected")
                }
                return 1 !== this.lookupNonWSType(0) && this.lookupNonWSType(0) !== Qn || e.push(this.MediaQueryList()), e
              }, block: null
            }
          }, media: {
            parse: {
              prelude() {
                return this.createSingleNodeList(this.MediaQueryList())
              }, block() {
                return this.Block(!1)
              }
            }
          }, page: {
            parse: {
              prelude() {
                return this.createSingleNodeList(this.SelectorList())
              }, block() {
                return this.Block(!0)
              }
            }
          }, supports: {
            parse: {
              prelude() {
                const e = ap.call(this);
                return null === this.getFirstListNode(e) && this.error("Condition is expected"), e
              }, block() {
                return this.Block(!1)
              }
            }
          }
        },
        pseudo: {
          dir: sp,
          has: ip,
          lang: sp,
          matches: ip,
          is: ip,
          "-moz-any": ip,
          "-webkit-any": ip,
          where: ip,
          not: ip,
          "nth-child": op,
          "nth-last-child": op,
          "nth-last-of-type": op,
          "nth-of-type": op,
          slotted: {
            parse() {
              return this.createSingleNodeList(this.Selector())
            }
          }
        },
        node: Y
      }, ...{node: q}
    }, so(io({}, cp)));
    var cp;
    const {
      tokenize: lp,
      parse: pp,
      generate: up,
      lexer: dp,
      createLexer: mp,
      walk: hp,
      find: fp,
      findLast: gp,
      findAll: bp,
      toPlainObject: xp,
      fromPlainObject: Ep,
      fork: vp
    } = rp;
    const kp = class extends W {
      constructor(e) {
        super(), this.ctx = e, this.meta = e.meta, this.parse = pp, this.walk = hp, this.generate = up
      }

      rewrite(e, t) {
        return this.recast(e, t, "rewrite")
      }

      source(e, t) {
        return this.recast(e, t, "source")
      }

      recast(e, t, n) {
        if (!e) return e;
        e = new String(e).toString();
        try {
          const a = this.parse(e, {...t, parseCustomProperty: !0});
          return this.walk(a, (e => {
            this.emit(e.type, e, t, n)
          })), this.generate(a)
        } catch (t) {
          return e
        }
      }
    }, Tp = {
      0: "Unexpected token",
      28: "Unexpected token: '%0'",
      1: "Octal escape sequences are not allowed in strict mode",
      2: "Octal escape sequences are not allowed in template strings",
      3: "Unexpected token `#`",
      4: "Illegal Unicode escape sequence",
      5: "Invalid code point %0",
      6: "Invalid hexadecimal escape sequence",
      8: "Octal literals are not allowed in strict mode",
      7: "Decimal integer literals with a leading zero are forbidden in strict mode",
      9: "Expected number in radix %0",
      146: "Invalid left-hand side assignment to a destructible right-hand side",
      10: "Non-number found after exponent indicator",
      11: "Invalid BigIntLiteral",
      12: "No identifiers allowed directly after numeric literal",
      13: "Escapes \\8 or \\9 are not syntactically valid escapes",
      14: "Unterminated string literal",
      15: "Unterminated template literal",
      16: "Multiline comment was not closed properly",
      17: "The identifier contained dynamic unicode escape that was not closed",
      18: "Illegal character '%0'",
      19: "Missing hexadecimal digits",
      20: "Invalid implicit octal",
      21: "Invalid line break in string literal",
      22: "Only unicode escapes are legal in identifier names",
      23: "Expected '%0'",
      24: "Invalid left-hand side in assignment",
      25: "Invalid left-hand side in async arrow",
      26: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
      27: "Member access on super must be in a method",
      29: "Await expression not allowed in formal parameter",
      30: "Yield expression not allowed in formal parameter",
      93: "Unexpected token: 'escaped keyword'",
      31: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
      120: "Async functions can only be declared at the top level or inside a block",
      32: "Unterminated regular expression",
      33: "Unexpected regular expression flag",
      34: "Duplicate regular expression flag '%0'",
      35: "%0 functions must have exactly %1 argument%2",
      36: "Setter function argument must not be a rest parameter",
      37: "%0 declaration must have a name in this context",
      38: "Function name may not contain any reserved words or be eval or arguments in strict mode",
      39: "The rest operator is missing an argument",
      40: "A getter cannot be a generator",
      41: "A setter cannot be a generator",
      42: "A computed property name must be followed by a colon or paren",
      131: "Object literal keys that are strings or numbers must be a method or have a colon",
      44: "Found `* async x(){}` but this should be `async * x(){}`",
      43: "Getters and setters can not be generators",
      45: "'%0' can not be generator method",
      46: "No line break is allowed after '=>'",
      47: "The left-hand side of the arrow can only be destructed through assignment",
      48: "The binding declaration is not destructible",
      49: "Async arrow can not be followed by new expression",
      50: "Classes may not have a static property named 'prototype'",
      51: "Class constructor may not be a %0",
      52: "Duplicate constructor method in class",
      53: "Invalid increment/decrement operand",
      54: "Invalid use of `new` keyword on an increment/decrement expression",
      55: "`=>` is an invalid assignment target",
      56: "Rest element may not have a trailing comma",
      57: "Missing initializer in %0 declaration",
      58: "'for-%0' loop head declarations can not have an initializer",
      59: "Invalid left-hand side in for-%0 loop: Must have a single binding",
      60: "Invalid shorthand property initializer",
      61: "Property name __proto__ appears more than once in object literal",
      62: "Let is disallowed as a lexically bound name",
      63: "Invalid use of '%0' inside new expression",
      64: "Illegal 'use strict' directive in function with non-simple parameter list",
      65: 'Identifier "let" disallowed as left-hand side expression in strict mode',
      66: "Illegal continue statement",
      67: "Illegal break statement",
      68: "Cannot have `let[...]` as a var name in strict mode",
      69: "Invalid destructuring assignment target",
      70: "Rest parameter may not have a default initializer",
      71: "The rest argument must the be last parameter",
      72: "Invalid rest argument",
      74: "In strict mode code, functions can only be declared at top level or inside a block",
      75: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
      76: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
      77: "Class declaration can't appear in single-statement context",
      78: "Invalid left-hand side in for-%0",
      79: "Invalid assignment in for-%0",
      80: "for await (... of ...) is only valid in async functions and async generators",
      81: "The first token after the template expression should be a continuation of the template",
      83: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
      82: "`let \n [` is a restricted production at the start of a statement",
      84: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
      85: "Catch clause parameter does not support default values",
      86: "Missing catch or finally after try",
      87: "More than one default clause in switch statement",
      88: "Illegal newline after throw",
      89: "Strict mode code may not include a with statement",
      90: "Illegal return statement",
      91: "The left hand side of the for-header binding declaration is not destructible",
      92: "new.target only allowed within functions",
      94: "'#' not followed by identifier",
      100: "Invalid keyword",
      99: "Can not use 'let' as a class name",
      98: "'A lexical declaration can't define a 'let' binding",
      97: "Can not use `let` as variable name in strict mode",
      95: "'%0' may not be used as an identifier in this context",
      96: "Await is only valid in async functions",
      101: "The %0 keyword can only be used with the module goal",
      102: "Unicode codepoint must not be greater than 0x10FFFF",
      103: "%0 source must be string",
      104: "Only a identifier can be used to indicate alias",
      105: "Only '*' or '{...}' can be imported after default",
      106: "Trailing decorator may be followed by method",
      107: "Decorators can't be used with a constructor",
      109: "HTML comments are only allowed with web compatibility (Annex B)",
      110: "The identifier 'let' must not be in expression position in strict mode",
      111: "Cannot assign to `eval` and `arguments` in strict mode",
      112: "The left-hand side of a for-of loop may not start with 'let'",
      113: "Block body arrows can not be immediately invoked without a group",
      114: "Block body arrows can not be immediately accessed without a group",
      115: "Unexpected strict mode reserved word",
      116: "Unexpected eval or arguments in strict mode",
      117: "Decorators must not be followed by a semicolon",
      118: "Calling delete on expression not allowed in strict mode",
      119: "Pattern can not have a tail",
      121: "Can not have a `yield` expression on the left side of a ternary",
      122: "An arrow function can not have a postfix update operator",
      123: "Invalid object literal key character after generator star",
      124: "Private fields can not be deleted",
      126: "Classes may not have a field called constructor",
      125: "Classes may not have a private element named constructor",
      127: "A class field initializer may not contain arguments",
      128: "Generators can only be declared at the top level or inside a block",
      129: "Async methods are a restricted production and cannot have a newline following it",
      130: "Unexpected character after object literal property name",
      132: "Invalid key token",
      133: "Label '%0' has already been declared",
      134: "continue statement must be nested within an iteration statement",
      135: "Undefined label '%0'",
      136: "Trailing comma is disallowed inside import(...) arguments",
      137: "import() requires exactly one argument",
      138: "Cannot use new with import(...)",
      139: "... is not allowed in import()",
      140: "Expected '=>'",
      141: "Duplicate binding '%0'",
      142: "Cannot export a duplicate name '%0'",
      145: "Duplicate %0 for-binding",
      143: "Exported binding '%0' needs to refer to a top-level declared variable",
      144: "Unexpected private field",
      148: "Numeric separators are not allowed at the end of numeric literals",
      147: "Only one underscore is allowed as numeric separator",
      149: "JSX value should be either an expression or a quoted JSX text",
      150: "Expected corresponding JSX closing tag for %0",
      151: "Adjacent JSX elements must be wrapped in an enclosing tag",
      152: "JSX attributes must only be assigned a non-empty 'expression'",
      153: "'%0' has already been declared",
      154: "'%0' shadowed a catch clause binding",
      155: "Dot property must be an identifier",
      156: "Encountered invalid input after spread/rest argument",
      157: "Catch without try",
      158: "Finally without try",
      159: "Expected corresponding closing tag for JSX fragment",
      160: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
      161: "Invalid tagged template on optional chain",
      162: "Invalid optional chain from super property",
      163: "Invalid optional chain from new expression",
      164: 'Cannot use "import.meta" outside a module',
      165: "Leading decorators must be attached to a class declaration"
    };

    class Ap extends SyntaxError {
      constructor(e, t, n, a, ...i) {
        const s = "[" + t + ":" + n + "]: " + Tp[a].replace(/%(\d+)/g, ((e, t) => i[t]));
        super(`${s}`), this.index = e, this.line = t, this.column = n, this.description = s, this.loc = {
          line: t,
          column: n
        }
      }
    }

    function yp(e, t, ...n) {
      throw new Ap(e.index, e.line, e.column, t, ...n)
    }

    function _p(e) {
      throw new Ap(e.index, e.line, e.column, e.type, e.params)
    }

    function Cp(e, t, n, a, ...i) {
      throw new Ap(e, t, n, a, ...i)
    }

    function Sp(e, t, n, a) {
      throw new Ap(e, t, n, a)
    }

    const wp = ((e, t) => {
      const n = new Uint32Array(104448);
      let a = 0, i = 0;
      for (; a < 3540;) {
        const s = e[a++];
        if (s < 0) i -= s; else {
          let o = e[a++];
          2 & s && (o = t[o]), 1 & s ? n.fill(o, i, i += e[a++]) : n[i++] = o
        }
      }
      return n
    })([-1, 2, 24, 2, 25, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 60, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 61, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 131, 2, 6, 2, 56, -1, 2, 37, 0, 4294443263, 2, 1, 3, 0, 3, 0, 4294901711, 2, 39, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 2, 194, 2, 3, 0, 3825204735, 0, 123747807, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1080049119, 0, 458703, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 66, 0, 4284449919, 0, 851904, 2, 4, 2, 11, 0, 67076095, -1, 2, 67, 0, 1073741743, 0, 4093591391, -1, 0, 50331649, 0, 3265266687, 2, 32, 0, 4294844415, 0, 4278190047, 2, 18, 2, 129, -1, 3, 0, 2, 2, 21, 2, 0, 2, 9, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 10, 0, 261632, 2, 23, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0, 2088959, 2, 27, 2, 8, 0, 909311, 3, 0, 2, 0, 814743551, 2, 41, 0, 67057664, 3, 0, 2, 2, 40, 2, 0, 2, 28, 2, 0, 2, 29, 2, 7, 0, 268374015, 2, 26, 2, 49, 2, 0, 2, 76, 0, 134153215, -1, 2, 6, 2, 0, 2, 7, 0, 2684354559, 0, 67044351, 0, 3221160064, 0, 1, -1, 3, 0, 2, 2, 42, 0, 1046528, 3, 0, 3, 2, 8, 2, 0, 2, 51, 0, 4294960127, 2, 9, 2, 38, 2, 10, 0, 4294377472, 2, 11, 3, 0, 7, 0, 4227858431, 3, 0, 8, 2, 12, 2, 0, 2, 78, 2, 9, 2, 0, 2, 79, 2, 80, 2, 81, -1, 2, 124, 0, 1048577, 2, 82, 2, 13, -1, 2, 13, 0, 131042, 2, 83, 2, 84, 2, 85, 2, 0, 2, 33, -83, 2, 0, 2, 53, 2, 7, 3, 0, 4, 0, 1046559, 2, 0, 2, 14, 2, 0, 0, 2147516671, 2, 20, 3, 86, 2, 2, 0, -16, 2, 87, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 2, 0, 2, 15, 2, 77, 2, 16, 3, 0, 2, 2, 47, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 655, 2, 18, 3, 0, 36, 2, 68, -1, 2, 17, 2, 9, 3, 0, 8, 2, 89, 2, 121, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 90, 2, 91, 3, 0, 2, 2, 92, 2, 0, 2, 93, 2, 94, 2, 0, 0, 4351, 2, 0, 2, 8, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 22, 2, 8, 2, 18, 3, 0, 2, 0, 67076097, 2, 7, 2, 0, 2, 20, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 97, 2, 98, 2, 15, 2, 21, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 99, 2, 100, 2, 6, -264, 3, 0, 11, 2, 22, 3, 0, 2, 2, 31, -1, 0, 3774349439, 2, 101, 2, 102, 3, 0, 2, 2, 19, 2, 103, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 45, 2, 0, 2, 30, 2, 104, 2, 23, 0, 1638399, 2, 172, 2, 105, 3, 0, 3, 2, 18, 2, 24, 2, 25, 2, 5, 2, 26, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 27, -3, 2, 150, -4, 2, 18, 2, 0, 2, 35, 0, 1, 2, 0, 2, 62, 2, 28, 2, 11, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 21, 2, 111, 2, 6, 2, 0, 2, 112, 2, 0, 2, 48, -4, 3, 0, 9, 2, 20, 2, 29, 2, 30, -4, 2, 113, 2, 114, 2, 29, 2, 20, 2, 7, -2, 2, 115, 2, 29, 2, 31, -2, 2, 0, 2, 116, -2, 0, 4277137519, 0, 2269118463, -1, 3, 18, 2, -1, 2, 32, 2, 36, 2, 0, 3, 29, 2, 2, 34, 2, 19, -3, 3, 0, 2, 2, 33, -1, 2, 0, 2, 34, 2, 0, 2, 34, 2, 0, 2, 46, -10, 2, 0, 0, 203775, -2, 2, 18, 2, 43, 2, 35, -2, 2, 17, 2, 117, 2, 20, 3, 0, 2, 2, 36, 0, 2147549120, 2, 0, 2, 11, 2, 17, 2, 135, 2, 0, 2, 37, 2, 52, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 120, 0, 1090519039, -2, 2, 122, 2, 38, 2, 0, 0, 67045375, 2, 39, 0, 4226678271, 0, 3766565279, 0, 2039759, -4, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 40, 2, 41, -1, 2, 10, 2, 42, -6, 2, 0, 2, 11, -3, 3, 0, 2, 0, 2147484671, 2, 125, 0, 4190109695, 2, 50, -2, 2, 126, 0, 4244635647, 0, 27, 2, 0, 2, 7, 2, 43, 2, 0, 2, 63, -1, 2, 0, 2, 40, -8, 2, 54, 2, 44, 0, 67043329, 2, 127, 2, 45, 0, 8388351, -2, 2, 128, 0, 3028287487, 2, 46, 2, 130, 0, 33259519, 2, 41, -9, 2, 20, -5, 2, 64, -2, 3, 0, 28, 2, 31, -3, 3, 0, 3, 2, 47, 3, 0, 6, 2, 48, -85, 3, 0, 33, 2, 47, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 40, 2, 7, 2, 41, -2, 2, 17, 2, 49, 2, 0, 2, 20, 2, 50, 2, 132, 2, 23, -21, 3, 0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 51, 3, 0, 38, 2, 29, -1, 2, 33, -279, 3, 0, 8, 2, 7, -1, 2, 133, 2, 52, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 134, 0, 1677656575, -166, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 37, 2, 0, 2, 136, 2, 137, 2, 55, 2, 0, 2, 138, 2, 139, 2, 140, 3, 0, 10, 2, 141, 2, 142, 2, 15, 3, 37, 2, 3, 53, 2, 3, 54, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 88, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -42, 0, 4194303871, 0, 2011, -6, 2, 0, 0, 1073684479, 0, 17407, -11, 2, 0, 2, 31, -40, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 42, -37, 2, 55, 2, 144, 2, 145, 2, 146, 2, 147, 2, 148, -105, 2, 24, -32, 3, 0, 1334, 2, 9, -1, 3, 0, 129, 2, 27, 3, 0, 6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 56, -22381, 3, 0, 7, 2, 23, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 60, 2, 0, 2, 33, -1, 2, 17, 2, 61, -1, 2, 0, 2, 56, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 23, 2, 62, 3, 0, 2, 0, 131135, 2, 95, 0, 70256639, 0, 71303167, 0, 272, 2, 40, 2, 56, -1, 2, 37, 2, 30, -1, 2, 96, 2, 63, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 65, 2, 64, 0, 33554435, 2, 123, 2, 65, 2, 151, 0, 131075, 0, 3594373096, 0, 67094296, 2, 64, -1, 0, 4294828e3, 0, 603979263, 2, 160, 0, 3, 0, 4294828001, 0, 602930687, 2, 183, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 66, 2, 36, -1, 2, 4, 0, 917503, 2, 36, -1, 2, 67, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 32, 2, 68, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 11, -1, 2, 23, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0, 253951, 3, 19, 2, 0, 122879, 2, 0, 2, 8, 0, 276824064, -2, 3, 0, 2, 2, 40, 2, 0, 0, 4294903295, 2, 0, 2, 29, 2, 7, -1, 2, 17, 2, 49, 2, 0, 2, 76, 2, 41, -1, 2, 20, 2, 0, 2, 27, -2, 0, 128, -2, 2, 77, 2, 8, 0, 4064, -1, 2, 119, 0, 4227907585, 2, 0, 2, 118, 2, 0, 2, 48, 2, 173, 2, 9, 2, 38, 2, 10, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 12, 2, 0, 2, 78, 2, 9, 2, 0, 2, 79, 2, 80, 2, 81, -3, 2, 82, 2, 13, -3, 2, 83, 2, 84, 2, 85, 2, 0, 2, 33, -83, 2, 0, 2, 53, 2, 7, 3, 0, 4, 0, 817183, 2, 0, 2, 14, 2, 0, 0, 33023, 2, 20, 3, 86, 2, -17, 2, 87, 0, 524157950, 2, 4, 2, 0, 2, 88, 2, 4, 2, 0, 2, 15, 2, 77, 2, 16, 3, 0, 2, 2, 47, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 655, 2, 18, 3, 0, 36, 2, 68, -1, 2, 17, 2, 9, 3, 0, 8, 2, 89, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 23, 2, 90, 2, 91, 3, 0, 2, 2, 92, 2, 0, 2, 93, 2, 94, 0, 4294965179, 0, 7, 2, 0, 2, 8, 2, 91, 2, 8, -1, 0, 1761345536, 2, 95, 0, 4294901823, 2, 36, 2, 18, 2, 96, 2, 34, 2, 166, 0, 2080440287, 2, 0, 2, 33, 2, 143, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 97, 2, 98, 2, 15, 2, 21, 3, 0, 3, 0, 7, 3, 0, 349, 2, 99, 2, 100, 2, 6, -264, 3, 0, 11, 2, 22, 3, 0, 2, 2, 31, -1, 0, 2700607615, 2, 101, 2, 102, 3, 0, 2, 2, 19, 2, 103, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 45, 2, 0, 2, 30, 2, 104, -3, 2, 105, 3, 0, 3, 2, 18, -1, 3, 5, 2, 2, 26, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 27, -8, 2, 18, 2, 0, 2, 35, -1, 2, 0, 2, 62, 2, 28, 2, 29, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 17, 2, 111, 2, 6, 2, 0, 2, 112, 2, 0, 2, 48, -4, 3, 0, 9, 2, 20, 2, 29, 2, 30, -4, 2, 113, 2, 114, 2, 29, 2, 20, 2, 7, -2, 2, 115, 2, 29, 2, 31, -2, 2, 0, 2, 116, -2, 0, 4277075969, 2, 29, -1, 3, 18, 2, -1, 2, 32, 2, 117, 2, 0, 3, 29, 2, 2, 34, 2, 19, -3, 3, 0, 2, 2, 33, -1, 2, 0, 2, 34, 2, 0, 2, 34, 2, 0, 2, 48, -10, 2, 0, 0, 197631, -2, 2, 18, 2, 43, 2, 118, -2, 2, 17, 2, 117, 2, 20, 2, 119, 2, 51, -2, 2, 119, 2, 23, 2, 17, 2, 33, 2, 119, 2, 36, 0, 4294901904, 0, 4718591, 2, 119, 2, 34, 0, 335544350, -1, 2, 120, 2, 121, -2, 2, 122, 2, 38, 2, 7, -1, 2, 123, 2, 65, 0, 3758161920, 0, 3, -4, 2, 0, 2, 27, 0, 2147485568, 0, 3, 2, 0, 2, 23, 0, 176, -5, 2, 0, 2, 47, 2, 186, -1, 2, 0, 2, 23, 2, 197, -1, 2, 0, 0, 16779263, -2, 2, 11, -7, 2, 0, 2, 121, -3, 3, 0, 2, 2, 124, 2, 125, 0, 2147549183, 0, 2, -2, 2, 126, 2, 35, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, -1, 2, 0, 2, 40, -8, 2, 54, 2, 47, 0, 1, 2, 127, 2, 23, -3, 2, 128, 2, 35, 2, 129, 2, 130, 0, 16778239, -10, 2, 34, -5, 2, 64, -2, 3, 0, 28, 2, 31, -3, 3, 0, 3, 2, 47, 3, 0, 6, 2, 48, -85, 3, 0, 33, 2, 47, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 40, 2, 7, -3, 2, 17, 2, 131, 2, 0, 2, 23, 2, 48, 2, 132, 2, 23, -21, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 103, -2, 0, 11, 3, 0, 191, 2, 51, 3, 0, 38, 2, 29, -1, 2, 33, -279, 3, 0, 8, 2, 7, -1, 2, 133, 2, 52, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 134, 2, 135, -187, 3, 0, 2, 2, 37, 2, 0, 2, 136, 2, 137, 2, 55, 2, 0, 2, 138, 2, 139, 2, 140, 3, 0, 10, 2, 141, 2, 142, 2, 15, 3, 37, 2, 3, 53, 2, 3, 54, 2, 2, 143, -73, 2, 0, 0, 1065361407, 0, 16384, -11, 2, 0, 2, 121, -40, 3, 0, 6, 2, 117, -1, 3, 0, 2, 0, 2063, -37, 2, 55, 2, 144, 2, 145, 2, 146, 2, 147, 2, 148, -138, 3, 0, 1334, 2, 9, -1, 3, 0, 129, 2, 27, 3, 0, 6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 56, -28517, 2, 0, 0, 1, -1, 2, 124, 2, 0, 0, 8193, -21, 2, 193, 0, 10255, 0, 4, -11, 2, 64, 2, 171, -1, 0, 71680, -1, 2, 161, 0, 4292900864, 0, 805306431, -5, 2, 150, -1, 2, 157, -1, 0, 6144, -2, 2, 127, -1, 2, 154, -1, 0, 2147532800, 2, 151, 2, 165, 2, 0, 2, 164, 0, 524032, 0, 4, -4, 2, 190, 0, 205128192, 0, 1333757536, 0, 2147483696, 0, 423953, 0, 747766272, 0, 2717763192, 0, 4286578751, 0, 278545, 2, 152, 0, 4294886464, 0, 33292336, 0, 417809, 2, 152, 0, 1327482464, 0, 4278190128, 0, 700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 153, 0, 469762560, 0, 4171219488, 0, 8323120, 2, 153, 0, 202375680, 0, 3214918176, 0, 4294508592, 2, 153, -1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0, 10517376, 0, 4293066815, 0, 1, 0, 2013265920, 2, 177, 2, 0, 0, 2089, 0, 3221225552, 0, 201375904, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2, 150, 0, 4160757760, 2, 0, -6, 2, 167, -11, 0, 3263218176, -1, 0, 49664, 0, 2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 154, 2, 159, 2, 178, -2, 2, 162, -20, 0, 3758096385, -2, 2, 155, 0, 4292878336, 2, 90, 2, 169, 0, 4294057984, -2, 2, 163, 2, 156, 2, 175, -2, 2, 155, -1, 2, 182, -1, 2, 170, 2, 124, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 158, 0, 939588608, -1, 0, 805306368, -1, 2, 124, 0, 1610612736, 2, 156, 2, 157, 2, 4, 2, 0, -2, 2, 158, 2, 159, -3, 0, 267386880, -1, 2, 160, 0, 7168, -1, 0, 65024, 2, 154, 2, 161, 2, 179, -7, 2, 168, -8, 2, 162, -1, 0, 1426112704, 2, 163, -1, 2, 164, 0, 271581216, 0, 2149777408, 2, 23, 2, 161, 2, 124, 0, 851967, 2, 180, -1, 2, 23, 2, 181, -4, 2, 158, -20, 2, 195, 2, 165, -56, 0, 3145728, 2, 185, -4, 2, 166, 2, 124, -4, 0, 32505856, -1, 2, 167, -1, 0, 2147385088, 2, 90, 1, 2155905152, 2, -3, 2, 103, 2, 0, 2, 168, -2, 2, 169, -6, 2, 170, 0, 4026597375, 0, 1, -1, 0, 1, -1, 2, 171, -3, 2, 117, 2, 64, -2, 2, 166, -2, 2, 176, 2, 124, -878, 2, 159, -36, 2, 172, -1, 2, 201, -10, 2, 188, -5, 2, 174, -6, 0, 4294965251, 2, 27, -1, 2, 173, -1, 2, 174, -2, 0, 4227874752, -3, 0, 2146435072, 2, 159, -2, 0, 1006649344, 2, 124, -1, 2, 90, 0, 201375744, -3, 0, 134217720, 2, 90, 0, 4286677377, 0, 32896, -1, 2, 158, -3, 2, 175, -349, 2, 176, 0, 1920, 2, 177, 3, 0, 264, -11, 2, 157, -2, 2, 178, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524284, -11, 2, 23, -1, 2, 187, -1, 2, 184, 0, 3221291007, 2, 178, -1, 2, 202, 0, 2158720, -3, 2, 159, 0, 1, -4, 2, 124, 0, 3808625411, 0, 3489628288, 2, 200, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 179, 0, 120, 0, 7340032, -2, 2, 180, 2, 4, 2, 23, 2, 163, 3, 0, 4, 2, 159, -1, 2, 181, 2, 177, -1, 0, 8176, 2, 182, 2, 179, 2, 183, -1, 0, 4290773232, 2, 0, -4, 2, 163, 2, 189, 0, 15728640, 2, 177, -1, 2, 161, -1, 0, 4294934512, 3, 0, 4, -9, 2, 90, 2, 170, 2, 184, 3, 0, 4, 0, 704, 0, 1849688064, 2, 185, -1, 2, 124, 0, 4294901887, 2, 0, 0, 130547712, 0, 1879048192, 2, 199, 3, 0, 2, -1, 2, 186, 2, 187, -1, 0, 17829776, 0, 2025848832, 0, 4261477888, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128, 2, 192, 0, 16252928, 0, 3791388672, 2, 38, 3, 0, 2, -2, 2, 196, 2, 0, -1, 2, 103, -1, 0, 66584576, -1, 2, 191, 3, 0, 9, 2, 124, -1, 0, 4294755328, 3, 0, 2, -1, 2, 161, 2, 178, 3, 0, 2, 2, 23, 2, 188, 2, 90, -2, 0, 245760, 0, 2147418112, -1, 2, 150, 2, 203, 0, 4227923456, -1, 2, 164, 2, 161, 2, 90, -3, 0, 4292870145, 0, 262144, 2, 124, 3, 0, 2, 0, 1073758848, 2, 189, -1, 0, 4227921920, 2, 190, 0, 68289024, 0, 528402016, 0, 4292927536, 3, 0, 4, -2, 0, 268435456, 2, 91, -2, 2, 191, 3, 0, 5, -1, 2, 192, 2, 163, 2, 0, -2, 0, 4227923936, 2, 62, -1, 2, 155, 2, 95, 2, 0, 2, 154, 2, 158, 3, 0, 6, -1, 2, 177, 3, 0, 3, -2, 0, 2146959360, 0, 9440640, 0, 104857600, 0, 4227923840, 3, 0, 2, 0, 768, 2, 193, 2, 77, -2, 2, 161, -2, 2, 119, -1, 2, 155, 3, 0, 8, 0, 512, 0, 8388608, 2, 194, 2, 172, 2, 187, 0, 4286578944, 3, 0, 2, 0, 1152, 0, 1266679808, 2, 191, 0, 576, 0, 4261707776, 2, 95, 3, 0, 9, 2, 155, 3, 0, 5, 2, 16, -1, 0, 2147221504, -28, 2, 178, 3, 0, 3, -3, 0, 4292902912, -6, 2, 96, 3, 0, 85, -33, 0, 4294934528, 3, 0, 126, -18, 2, 195, 3, 0, 269, -17, 2, 155, 2, 124, 2, 198, 3, 0, 2, 2, 23, 0, 4290822144, -2, 0, 67174336, 0, 520093700, 2, 17, 3, 0, 21, -2, 2, 179, 3, 0, 3, -2, 0, 30720, -1, 0, 32512, 3, 0, 2, 0, 4294770656, -191, 2, 174, -38, 2, 170, 2, 0, 2, 196, 3, 0, 279, -8, 2, 124, 2, 0, 0, 4294508543, 0, 65295, -11, 2, 177, 3, 0, 72, -3, 0, 3758159872, 0, 201391616, 3, 0, 155, -7, 2, 170, -1, 0, 384, -1, 0, 133693440, -3, 2, 196, -2, 2, 26, 3, 0, 4, 2, 169, -2, 2, 90, 2, 155, 3, 0, 4, -2, 2, 164, -1, 2, 150, 0, 335552923, 2, 197, -1, 0, 538974272, 0, 2214592512, 0, 132e3, -10, 0, 192, -8, 0, 12288, -21, 0, 134213632, 0, 4294901761, 3, 0, 42, 0, 100663424, 0, 4294965284, 3, 0, 6, -1, 0, 3221282816, 2, 198, 3, 0, 11, -1, 2, 199, 3, 0, 40, -6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24, 2, 35, -1, 2, 94, 3, 0, 2, 0, 1, 2, 163, 3, 0, 6, 2, 197, 0, 4110942569, 0, 1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 45, 3, 0, 8, -1, 2, 158, -2, 2, 169, 0, 98304, 0, 65537, 2, 170, -5, 0, 4294950912, 2, 0, 2, 118, 0, 65528, 2, 177, 0, 4294770176, 2, 26, 3, 0, 4, -30, 2, 174, 0, 3758153728, -3, 2, 169, -2, 2, 155, 2, 188, 2, 158, -1, 2, 191, -1, 2, 161, 0, 4294754304, 3, 0, 2, -3, 0, 33554432, -2, 2, 200, -3, 2, 169, 0, 4175478784, 2, 201, 0, 4286643712, 0, 4286644216, 2, 0, -4, 2, 202, -1, 2, 165, 0, 4227923967, 3, 0, 32, -1334, 2, 163, 2, 0, -129, 2, 94, -6, 2, 163, -180, 2, 203, -233, 2, 4, 3, 0, 96, -16, 2, 163, 3, 0, 47, -154, 2, 165, 3, 0, 22381, -7, 2, 17, 3, 0, 6128], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 268435455, 2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4160749567, 4294901759, 4294901760, 536870911, 262143, 8388607, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967232, 2097151, 4294903807, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 127, 4292870143, 4294902271, 4294549487, 33554431, 1023, 67047423, 4294901888, 4286578687, 4294770687, 67043583, 32767, 15, 2047999, 67043343, 16777215, 4294902e3, 4294934527, 4294966783, 4294967279, 2047, 262083, 20511, 4290772991, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 4294967264, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 2044, 4292870144, 4294966272, 4294967280, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4294966591, 2445279231, 3670015, 3238002687, 31, 63, 4294967288, 4294705151, 4095, 3221208447, 4294549472, 2147483648, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 16383, 3774873592, 458752, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4087, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 536870912, 2952790016, 202506752, 139264, 402653184, 4261412864, 4227922944, 49152, 61440, 3758096384, 117440512, 65280, 3233808384, 3221225472, 2097152, 4294965248, 32768, 57152, 67108864, 4293918720, 4290772992, 25165824, 57344, 4227915776, 4278190080, 4227907584, 65520, 4026531840, 4227858432, 4160749568, 3758129152, 4294836224, 63488, 1073741824, 4294967040, 4194304, 251658240, 196608, 4294963200, 64512, 417808, 4227923712, 12582912, 50331648, 65472, 4294967168, 4294966784, 16, 4294917120, 2080374784, 4096, 65408, 524288, 65532]);

    function Ip(e) {
      return e.column++, e.currentChar = e.source.charCodeAt(++e.index)
    }

    function Np(e, t) {
      if (55296 != (64512 & t)) return 0;
      const n = e.source.charCodeAt(e.index + 1);
      return 56320 != (64512 & n) ? 0 : (t = e.currentChar = 65536 + ((1023 & t) << 10) + (1023 & n), 0 == (1 & wp[0 + (t >>> 5)] >>> t) && yp(e, 18, Rp(t)), e.index++, e.column++, 1)
    }

    function Dp(e, t) {
      e.currentChar = e.source.charCodeAt(++e.index), e.flags |= 1, 0 == (4 & t) && (e.column = 0, e.line++)
    }

    function Lp(e) {
      e.flags |= 1, e.currentChar = e.source.charCodeAt(++e.index), e.column = 0, e.line++
    }

    function Rp(e) {
      return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(e >>> 10) + String.fromCharCode(1023 & e)
    }

    function Pp(e) {
      return e < 65 ? e - 48 : e - 65 + 10 & 15
    }

    const Op = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 0, 0, 0],
      Mp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      Bp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];

    function Up(e) {
      return e <= 127 ? Mp[e] : 1 & wp[34816 + (e >>> 5)] >>> e
    }

    function Fp(e) {
      return e <= 127 ? Bp[e] : 1 & wp[0 + (e >>> 5)] >>> e || 8204 === e || 8205 === e
    }

    const Hp = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];

    function jp(e, t, n, a, i, s, o, r) {
      return 2048 & a && yp(e, 0), Gp(e, t, n, i, s, o, r)
    }

    function Gp(e, t, n, a, i, s, o) {
      const {index: r} = e;
      for (e.tokenPos = e.index, e.linePos = e.line, e.colPos = e.column; e.index < e.end;) {
        if (8 & Op[e.currentChar]) {
          const n = 13 === e.currentChar;
          Lp(e), n && e.index < e.end && 10 === e.currentChar && (e.currentChar = t.charCodeAt(++e.index));
          break
        }
        if ((8232 ^ e.currentChar) <= 1) {
          Lp(e);
          break
        }
        Ip(e), e.tokenPos = e.index, e.linePos = e.line, e.colPos = e.column
      }
      if (e.onComment) {
        const n = {start: {line: s, column: o}, end: {line: e.linePos, column: e.colPos}};
        e.onComment(Hp[255 & a], t.slice(r, e.tokenPos), i, e.tokenPos, n)
      }
      return 1 | n
    }

    function qp(e, t, n) {
      const {index: a} = e;
      for (; e.index < e.end;) if (e.currentChar < 43) {
        let i = !1;
        for (; 42 === e.currentChar;) if (i || (n &= -5, i = !0), 47 === Ip(e)) {
          if (Ip(e), e.onComment) {
            const n = {start: {line: e.linePos, column: e.colPos}, end: {line: e.line, column: e.column}};
            e.onComment(Hp[1], t.slice(a, e.index - 2), a - 2, e.index, n)
          }
          return e.tokenPos = e.index, e.linePos = e.line, e.colPos = e.column, n
        }
        if (i) continue;
        8 & Op[e.currentChar] ? 13 === e.currentChar ? (n |= 5, Lp(e)) : (Dp(e, n), n = -5 & n | 1) : Ip(e)
      } else (8232 ^ e.currentChar) <= 1 ? (n = -5 & n | 1, Lp(e)) : (n &= -5, Ip(e));
      yp(e, 16)
    }

    function zp(e, t) {
      const n = e.index;
      let a = 0;
      e:for (; ;) {
        const t = e.currentChar;
        if (Ip(e), 1 & a) a &= -2; else switch (t) {
          case 47:
            if (a) break;
            break e;
          case 92:
            a |= 1;
            break;
          case 91:
            a |= 2;
            break;
          case 93:
            a &= 1;
            break;
          case 13:
          case 10:
          case 8232:
          case 8233:
            yp(e, 32)
        }
        if (e.index >= e.source.length) return yp(e, 32)
      }
      const i = e.index - 1;
      let s = 0, o = e.currentChar;
      const {index: r} = e;
      for (; Fp(o);) {
        switch (o) {
          case 103:
            2 & s && yp(e, 34, "g"), s |= 2;
            break;
          case 105:
            1 & s && yp(e, 34, "i"), s |= 1;
            break;
          case 109:
            4 & s && yp(e, 34, "m"), s |= 4;
            break;
          case 117:
            16 & s && yp(e, 34, "u"), s |= 16;
            break;
          case 121:
            8 & s && yp(e, 34, "y"), s |= 8;
            break;
          case 115:
            32 & s && yp(e, 34, "s"), s |= 32;
            break;
          case 100:
            64 & s && yp(e, 34, "d"), s |= 64;
            break;
          default:
            yp(e, 33)
        }
        o = Ip(e)
      }
      const c = e.source.slice(r, e.index), l = e.source.slice(n, i);
      return e.tokenRegExp = {
        pattern: l,
        flags: c
      }, 512 & t && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)), e.tokenValue = function (e, t, n) {
        try {
          return new RegExp(t, n)
        } catch (a) {
          try {
            return new RegExp(t, n.replace("d", "")), null
          } catch (t) {
            yp(e, 32)
          }
        }
      }(e, l, c), 65540
    }

    function Yp(e, t, n) {
      const {index: a} = e;
      let i = "", s = Ip(e), o = e.index;
      for (; 0 == (8 & Op[s]);) {
        if (s === n) return i += e.source.slice(o, e.index), Ip(e), 512 & t && (e.tokenRaw = e.source.slice(a, e.index)), e.tokenValue = i, 134283267;
        if (8 == (8 & s) && 92 === s) {
          if (i += e.source.slice(o, e.index), s = Ip(e), s < 127 || 8232 === s || 8233 === s) {
            const n = Vp(e, t, s);
            n >= 0 ? i += Rp(n) : Wp(e, n, 0)
          } else i += Rp(s);
          o = e.index + 1
        }
        e.index >= e.end && yp(e, 14), s = Ip(e)
      }
      yp(e, 14)
    }

    function Vp(e, t, n) {
      switch (n) {
        case 98:
          return 8;
        case 102:
          return 12;
        case 114:
          return 13;
        case 110:
          return 10;
        case 116:
          return 9;
        case 118:
          return 11;
        case 13:
          if (e.index < e.end) {
            const t = e.source.charCodeAt(e.index + 1);
            10 === t && (e.index = e.index + 1, e.currentChar = t)
          }
        case 10:
        case 8232:
        case 8233:
          return e.column = -1, e.line++, -1;
        case 48:
        case 49:
        case 50:
        case 51: {
          let a = n - 48, i = e.index + 1, s = e.column + 1;
          if (i < e.end) {
            const n = e.source.charCodeAt(i);
            if (0 == (32 & Op[n])) {
              if ((0 !== a || 512 & Op[n]) && 1024 & t) return -2
            } else {
              if (1024 & t) return -2;
              if (e.currentChar = n, a = a << 3 | n - 48, i++, s++, i < e.end) {
                const t = e.source.charCodeAt(i);
                32 & Op[t] && (e.currentChar = t, a = a << 3 | t - 48, i++, s++)
              }
              e.flags |= 64, e.index = i - 1, e.column = s - 1
            }
          }
          return a
        }
        case 52:
        case 53:
        case 54:
        case 55: {
          if (1024 & t) return -2;
          let a = n - 48;
          const i = e.index + 1, s = e.column + 1;
          if (i < e.end) {
            const t = e.source.charCodeAt(i);
            32 & Op[t] && (a = a << 3 | t - 48, e.currentChar = t, e.index = i, e.column = s)
          }
          return e.flags |= 64, a
        }
        case 120: {
          const t = Ip(e);
          if (0 == (64 & Op[t])) return -4;
          const n = Pp(t), a = Ip(e);
          if (0 == (64 & Op[a])) return -4;
          return n << 4 | Pp(a)
        }
        case 117: {
          const t = Ip(e);
          if (123 === e.currentChar) {
            let t = 0;
            for (; 0 != (64 & Op[Ip(e)]);) if (t = t << 4 | Pp(e.currentChar), t > 1114111) return -5;
            return e.currentChar < 1 || 125 !== e.currentChar ? -4 : t
          }
          {
            if (0 == (64 & Op[t])) return -4;
            const n = e.source.charCodeAt(e.index + 1);
            if (0 == (64 & Op[n])) return -4;
            const a = e.source.charCodeAt(e.index + 2);
            if (0 == (64 & Op[a])) return -4;
            const i = e.source.charCodeAt(e.index + 3);
            return 0 == (64 & Op[i]) ? -4 : (e.index += 3, e.column += 3, e.currentChar = e.source.charCodeAt(e.index), Pp(t) << 12 | Pp(n) << 8 | Pp(a) << 4 | Pp(i))
          }
        }
        case 56:
        case 57:
          if (0 == (256 & t)) return -3;
        default:
          return n
      }
    }

    function Wp(e, t, n) {
      switch (t) {
        case-1:
          return;
        case-2:
          yp(e, n ? 2 : 1);
        case-3:
          yp(e, 13);
        case-4:
          yp(e, 6);
        case-5:
          yp(e, 102)
      }
    }

    function Qp(e, t) {
      const {index: n} = e;
      let a = 67174409, i = "", s = Ip(e);
      for (; 96 !== s;) {
        if (36 === s && 123 === e.source.charCodeAt(e.index + 1)) {
          Ip(e), a = 67174408;
          break
        }
        if (8 == (8 & s) && 92 === s) if (s = Ip(e), s > 126) i += Rp(s); else {
          const n = Vp(e, 1024 | t, s);
          if (n >= 0) i += Rp(n); else {
            if (-1 !== n && 65536 & t) {
              i = void 0, s = Xp(e, s), s < 0 && (a = 67174408);
              break
            }
            Wp(e, n, 1)
          }
        } else e.index < e.end && 13 === s && 10 === e.source.charCodeAt(e.index) && (i += Rp(s), e.currentChar = e.source.charCodeAt(++e.index)), ((83 & s) < 3 && 10 === s || (8232 ^ s) <= 1) && (e.column = -1, e.line++), i += Rp(s);
        e.index >= e.end && yp(e, 15), s = Ip(e)
      }
      return Ip(e), e.tokenValue = i, e.tokenRaw = e.source.slice(n + 1, e.index - (67174409 === a ? 1 : 2)), a
    }

    function Xp(e, t) {
      for (; 96 !== t;) {
        switch (t) {
          case 36: {
            const n = e.index + 1;
            if (n < e.end && 123 === e.source.charCodeAt(n)) return e.index = n, e.column++, -t;
            break
          }
          case 10:
          case 8232:
          case 8233:
            e.column = -1, e.line++
        }
        e.index >= e.end && yp(e, 15), t = Ip(e)
      }
      return t
    }

    function Kp(e, t) {
      return e.index >= e.end && yp(e, 0), e.index--, e.column--, Qp(e, t)
    }

    function $p(e, t, n) {
      let a = e.currentChar, i = 0, s = 9, o = 64 & n ? 0 : 1, r = 0, c = 0;
      if (64 & n) i = "." + Jp(e, a), a = e.currentChar, 110 === a && yp(e, 11); else {
        if (48 === a) if (a = Ip(e), 120 == (32 | a)) {
          for (n = 136, a = Ip(e); 4160 & Op[a];) 95 !== a ? (c = 1, i = 16 * i + Pp(a), r++, a = Ip(e)) : (c || yp(e, 147), c = 0, a = Ip(e));
          0 !== r && c || yp(e, 0 === r ? 19 : 148)
        } else if (111 == (32 | a)) {
          for (n = 132, a = Ip(e); 4128 & Op[a];) 95 !== a ? (c = 1, i = 8 * i + (a - 48), r++, a = Ip(e)) : (c || yp(e, 147), c = 0, a = Ip(e));
          0 !== r && c || yp(e, 0 === r ? 0 : 148)
        } else if (98 == (32 | a)) {
          for (n = 130, a = Ip(e); 4224 & Op[a];) 95 !== a ? (c = 1, i = 2 * i + (a - 48), r++, a = Ip(e)) : (c || yp(e, 147), c = 0, a = Ip(e));
          0 !== r && c || yp(e, 0 === r ? 0 : 148)
        } else if (32 & Op[a]) for (1024 & t && yp(e, 1), n = 1; 16 & Op[a];) {
          if (512 & Op[a]) {
            n = 32, o = 0;
            break
          }
          i = 8 * i + (a - 48), a = Ip(e)
        } else 512 & Op[a] ? (1024 & t && yp(e, 1), e.flags |= 64, n = 32) : 95 === a && yp(e, 0);
        if (48 & n) {
          if (o) {
            for (; s >= 0 && 4112 & Op[a];) 95 !== a ? (c = 0, i = 10 * i + (a - 48), a = Ip(e), --s) : (a = Ip(e), (95 === a || 32 & n) && Sp(e.index, e.line, e.index + 1, 147), c = 1);
            if (c && Sp(e.index, e.line, e.index + 1, 148), s >= 0 && !Up(a) && 46 !== a) return e.tokenValue = i, 512 & t && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)), 134283266
          }
          i += Jp(e, a), a = e.currentChar, 46 === a && (95 === Ip(e) && yp(e, 0), n = 64, i += "." + Jp(e, e.currentChar), a = e.currentChar)
        }
      }
      const l = e.index;
      let p = 0;
      if (110 === a && 128 & n) p = 1, a = Ip(e); else if (101 == (32 | a)) {
        a = Ip(e), 256 & Op[a] && (a = Ip(e));
        const {index: t} = e;
        0 == (16 & Op[a]) && yp(e, 10), i += e.source.substring(l, t) + Jp(e, a), a = e.currentChar
      }
      return (e.index < e.end && 16 & Op[a] || Up(a)) && yp(e, 12), p ? (e.tokenRaw = e.source.slice(e.tokenPos, e.index), e.tokenValue = BigInt(i), 134283389) : (e.tokenValue = 15 & n ? i : 32 & n ? parseFloat(e.source.substring(e.tokenPos, e.index)) : +i, 512 & t && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)), 134283266)
    }

    function Jp(e, t) {
      let n = 0, a = e.index, i = "";
      for (; 4112 & Op[t];) if (95 !== t) n = 0, t = Ip(e); else {
        const {index: s} = e;
        95 === (t = Ip(e)) && Sp(e.index, e.line, e.index + 1, 147), n = 1, i += e.source.substring(a, s), a = e.index
      }
      return n && Sp(e.index, e.line, e.index + 1, 148), i + e.source.substring(a, e.index)
    }

    const Zp = ["end of source", "identifier", "number", "string", "regular expression", "false", "true", "null", "template continuation", "template tail", "=>", "(", "{", ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", '"', "</", "/>", "++", "--", "=", "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=", "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof", "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">", "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch", "class", "continue", "debugger", "default", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "new", "return", "super", "switch", "this", "throw", "try", "while", "with", "implements", "interface", "package", "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor", "get", "set", "from", "of", "enum", "eval", "arguments", "escaped keyword", "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral", "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template", "@", "target", "meta", "LineFeed", "Escaped", "JSXText"],
      eu = Object.create(null, {
        this: {value: 86113},
        function: {value: 86106},
        if: {value: 20571},
        return: {value: 20574},
        var: {value: 86090},
        else: {value: 20565},
        for: {value: 20569},
        new: {value: 86109},
        in: {value: 8738868},
        typeof: {value: 16863277},
        while: {value: 20580},
        case: {value: 20558},
        break: {value: 20557},
        try: {value: 20579},
        catch: {value: 20559},
        delete: {value: 16863278},
        throw: {value: 86114},
        switch: {value: 86112},
        continue: {value: 20561},
        default: {value: 20563},
        instanceof: {value: 8476725},
        do: {value: 20564},
        void: {value: 16863279},
        finally: {value: 20568},
        async: {value: 209007},
        await: {value: 209008},
        class: {value: 86096},
        const: {value: 86092},
        constructor: {value: 12401},
        debugger: {value: 20562},
        export: {value: 20566},
        extends: {value: 20567},
        false: {value: 86021},
        from: {value: 12404},
        get: {value: 12402},
        implements: {value: 36966},
        import: {value: 86108},
        interface: {value: 36967},
        let: {value: 241739},
        null: {value: 86023},
        of: {value: 274549},
        package: {value: 36968},
        private: {value: 36969},
        protected: {value: 36970},
        public: {value: 36971},
        set: {value: 12403},
        static: {value: 36972},
        super: {value: 86111},
        true: {value: 86022},
        with: {value: 20581},
        yield: {value: 241773},
        enum: {value: 86134},
        eval: {value: 537079927},
        as: {value: 77934},
        arguments: {value: 537079928},
        target: {value: 143494},
        meta: {value: 143495}
      });

    function tu(e, t, n) {
      for (; Bp[Ip(e)];) ;
      return e.tokenValue = e.source.slice(e.tokenPos, e.index), 92 !== e.currentChar && e.currentChar <= 126 ? eu[e.tokenValue] || 208897 : au(e, t, 0, n)
    }

    function nu(e, t) {
      const n = su(e);
      return Fp(n) || yp(e, 4), e.tokenValue = Rp(n), au(e, t, 1, 4 & Op[n])
    }

    function au(e, t, n, a) {
      let i = e.index;
      for (; e.index < e.end;) if (92 === e.currentChar) {
        e.tokenValue += e.source.slice(i, e.index), n = 1;
        const t = su(e);
        Fp(t) || yp(e, 4), a = a && 4 & Op[t], e.tokenValue += Rp(t), i = e.index
      } else {
        if (!Fp(e.currentChar) && !Np(e, e.currentChar)) break;
        Ip(e)
      }
      e.index <= e.end && (e.tokenValue += e.source.slice(i, e.index));
      const s = e.tokenValue.length;
      if (a && s >= 2 && s <= 11) {
        const a = eu[e.tokenValue];
        return void 0 === a ? 208897 : n ? 209008 === a ? 0 == (4196352 & t) ? a : 121 : 1024 & t ? 36972 === a || 36864 == (36864 & a) ? 122 : 20480 == (20480 & a) ? 1073741824 & t && 0 == (8192 & t) ? a : 121 : 143483 : 1073741824 & t && 0 == (8192 & t) && 20480 == (20480 & a) ? a : 241773 === a ? 1073741824 & t ? 143483 : 2097152 & t ? 121 : a : 209007 === a ? 143483 : 36864 == (36864 & a) ? a : 121 : a
      }
      return 208897
    }

    function iu(e) {
      return Up(Ip(e)) || yp(e, 94), 131
    }

    function su(e) {
      return 117 !== e.source.charCodeAt(e.index + 1) && yp(e, 4), e.currentChar = e.source.charCodeAt(e.index += 2), function (e) {
        let t = 0;
        const n = e.currentChar;
        if (123 === n) {
          const n = e.index - 2;
          for (; 64 & Op[Ip(e)];) t = t << 4 | Pp(e.currentChar), t > 1114111 && Sp(n, e.line, e.index + 1, 102);
          return 125 !== e.currentChar && Sp(n, e.line, e.index - 1, 6), Ip(e), t
        }
        0 == (64 & Op[n]) && yp(e, 6);
        const a = e.source.charCodeAt(e.index + 1);
        0 == (64 & Op[a]) && yp(e, 6);
        const i = e.source.charCodeAt(e.index + 2);
        0 == (64 & Op[i]) && yp(e, 6);
        const s = e.source.charCodeAt(e.index + 3);
        0 == (64 & Op[s]) && yp(e, 6);
        return t = Pp(n) << 12 | Pp(a) << 8 | Pp(i) << 4 | Pp(s), e.currentChar = e.source.charCodeAt(e.index += 4), t
      }(e)
    }

    const ou = [129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128, 130, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 16842800, 134283267, 131, 208897, 8457015, 8455751, 134283267, 67174411, 16, 8457014, 25233970, 18, 25233971, 67108877, 8457016, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 21, 1074790417, 8456258, 1077936157, 8456259, 22, 133, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 69271571, 137, 20, 8455497, 208897, 132, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8455240, 1074790415, 16842801, 129];

    function ru(e, t) {
      if (e.flags = 1 ^ (1 | e.flags), e.startPos = e.index, e.startColumn = e.column, e.startLine = e.line, e.token = cu(e, t, 0), e.onToken && 1048576 !== e.token) {
        const t = {start: {line: e.linePos, column: e.colPos}, end: {line: e.line, column: e.column}};
        e.onToken(function (e) {
          switch (e) {
            case 134283266:
              return "NumericLiteral";
            case 134283267:
              return "StringLiteral";
            case 86021:
            case 86022:
              return "BooleanLiteral";
            case 86023:
              return "NullLiteral";
            case 65540:
              return "RegularExpression";
            case 67174408:
            case 67174409:
            case 132:
              return "TemplateLiteral";
            default:
              return 143360 == (143360 & e) ? "Identifier" : 4096 == (4096 & e) ? "Keyword" : "Punctuator"
          }
        }(e.token), e.tokenPos, e.index, t)
      }
    }

    function cu(e, t, n) {
      const a = 0 === e.index, i = e.source;
      let s = e.index, o = e.line, r = e.column;
      for (; e.index < e.end;) {
        e.tokenPos = e.index, e.colPos = e.column, e.linePos = e.line;
        let l = e.currentChar;
        if (l <= 126) {
          const c = ou[l];
          switch (c) {
            case 67174411:
            case 16:
            case 2162700:
            case 1074790415:
            case 69271571:
            case 20:
            case 21:
            case 1074790417:
            case 18:
            case 16842801:
            case 133:
            case 129:
              return Ip(e), c;
            case 208897:
              return tu(e, t, 0);
            case 4096:
              return tu(e, t, 1);
            case 134283266:
              return $p(e, t, 144);
            case 134283267:
              return Yp(e, t, l);
            case 132:
              return Qp(e, t);
            case 137:
              return nu(e, t);
            case 131:
              return iu(e);
            case 128:
              Ip(e);
              break;
            case 130:
              n |= 5, Lp(e);
              break;
            case 136:
              Dp(e, n), n = -5 & n | 1;
              break;
            case 8456258:
              let p = Ip(e);
              if (e.index < e.end) {
                if (60 === p) return e.index < e.end && 61 === Ip(e) ? (Ip(e), 4194334) : 8456516;
                if (61 === p) return Ip(e), 8456256;
                if (33 === p) {
                  const a = e.index + 1;
                  if (a + 1 < e.end && 45 === i.charCodeAt(a) && 45 == i.charCodeAt(a + 1)) {
                    e.column += 3, e.currentChar = i.charCodeAt(e.index += 3), n = jp(e, i, n, t, 2, e.tokenPos, e.linePos, e.colPos), s = e.tokenPos, o = e.linePos, r = e.colPos;
                    continue
                  }
                  return 8456258
                }
                if (47 === p) {
                  if (0 == (16 & t)) return 8456258;
                  const n = e.index + 1;
                  if (n < e.end && (p = i.charCodeAt(n), 42 === p || 47 === p)) break;
                  return Ip(e), 25
                }
              }
              return 8456258;
            case 1077936157: {
              Ip(e);
              const t = e.currentChar;
              return 61 === t ? 61 === Ip(e) ? (Ip(e), 8455996) : 8455998 : 62 === t ? (Ip(e), 10) : 1077936157
            }
            case 16842800:
              return 61 !== Ip(e) ? 16842800 : 61 !== Ip(e) ? 8455999 : (Ip(e), 8455997);
            case 8457015:
              return 61 !== Ip(e) ? 8457015 : (Ip(e), 4194342);
            case 8457014: {
              if (Ip(e), e.index >= e.end) return 8457014;
              const t = e.currentChar;
              return 61 === t ? (Ip(e), 4194340) : 42 !== t ? 8457014 : 61 !== Ip(e) ? 8457273 : (Ip(e), 4194337)
            }
            case 8455497:
              return 61 !== Ip(e) ? 8455497 : (Ip(e), 4194343);
            case 25233970: {
              Ip(e);
              const t = e.currentChar;
              return 43 === t ? (Ip(e), 33619995) : 61 === t ? (Ip(e), 4194338) : 25233970
            }
            case 25233971: {
              Ip(e);
              const c = e.currentChar;
              if (45 === c) {
                if (Ip(e), (1 & n || a) && 62 === e.currentChar) {
                  0 == (256 & t) && yp(e, 109), Ip(e), n = jp(e, i, n, t, 3, s, o, r), s = e.tokenPos, o = e.linePos, r = e.colPos;
                  continue
                }
                return 33619996
              }
              return 61 === c ? (Ip(e), 4194339) : 25233971
            }
            case 8457016:
              if (Ip(e), e.index < e.end) {
                const a = e.currentChar;
                if (47 === a) {
                  Ip(e), n = Gp(e, i, n, 0, e.tokenPos, e.linePos, e.colPos), s = e.tokenPos, o = e.linePos, r = e.colPos;
                  continue
                }
                if (42 === a) {
                  Ip(e), n = qp(e, i, n), s = e.tokenPos, o = e.linePos, r = e.colPos;
                  continue
                }
                if (32768 & t) return zp(e, t);
                if (61 === a) return Ip(e), 4259877
              }
              return 8457016;
            case 67108877:
              const u = Ip(e);
              if (u >= 48 && u <= 57) return $p(e, t, 80);
              if (46 === u) {
                const t = e.index + 1;
                if (t < e.end && 46 === i.charCodeAt(t)) return e.column += 2, e.currentChar = i.charCodeAt(e.index += 2), 14
              }
              return 67108877;
            case 8455240: {
              Ip(e);
              const t = e.currentChar;
              return 124 === t ? (Ip(e), 61 === e.currentChar ? (Ip(e), 4194346) : 8979003) : 61 === t ? (Ip(e), 4194344) : 8455240
            }
            case 8456259: {
              Ip(e);
              const t = e.currentChar;
              if (61 === t) return Ip(e), 8456257;
              if (62 !== t) return 8456259;
              if (Ip(e), e.index < e.end) {
                const t = e.currentChar;
                if (62 === t) return 61 === Ip(e) ? (Ip(e), 4194336) : 8456518;
                if (61 === t) return Ip(e), 4194335
              }
              return 8456517
            }
            case 8455751: {
              Ip(e);
              const t = e.currentChar;
              return 38 === t ? (Ip(e), 61 === e.currentChar ? (Ip(e), 4194347) : 8979258) : 61 === t ? (Ip(e), 4194345) : 8455751
            }
            case 22: {
              let t = Ip(e);
              if (63 === t) return Ip(e), 61 === e.currentChar ? (Ip(e), 4194348) : 276889982;
              if (46 === t) {
                const n = e.index + 1;
                if (n < e.end && (t = i.charCodeAt(n), !(t >= 48 && t <= 57))) return Ip(e), 67108991
              }
              return 22
            }
          }
        } else {
          if ((8232 ^ l) <= 1) {
            n = -5 & n | 1, Lp(e);
            continue
          }
          if (55296 == (64512 & l) || 0 != (1 & wp[34816 + (l >>> 5)] >>> l)) return 56320 == (64512 & l) && (l = (1023 & l) << 10 | 1023 & l | 65536, 0 == (1 & wp[0 + (l >>> 5)] >>> l) && yp(e, 18, Rp(l)), e.index++, e.currentChar = l), e.column++, e.tokenValue = "", au(e, t, 0, 0);
          if (160 === (c = l) || 65279 === c || 133 === c || 5760 === c || c >= 8192 && c <= 8203 || 8239 === c || 8287 === c || 12288 === c || 8201 === c || 65519 === c) {
            Ip(e);
            continue
          }
          yp(e, 18, Rp(l))
        }
      }
      var c;
      return 1048576
    }

    const lu = {
      AElig: "Æ",
      AMP: "&",
      Aacute: "Á",
      Abreve: "Ă",
      Acirc: "Â",
      Acy: "А",
      Afr: "𝔄",
      Agrave: "À",
      Alpha: "Α",
      Amacr: "Ā",
      And: "⩓",
      Aogon: "Ą",
      Aopf: "𝔸",
      ApplyFunction: "⁡",
      Aring: "Å",
      Ascr: "𝒜",
      Assign: "≔",
      Atilde: "Ã",
      Auml: "Ä",
      Backslash: "∖",
      Barv: "⫧",
      Barwed: "⌆",
      Bcy: "Б",
      Because: "∵",
      Bernoullis: "ℬ",
      Beta: "Β",
      Bfr: "𝔅",
      Bopf: "𝔹",
      Breve: "˘",
      Bscr: "ℬ",
      Bumpeq: "≎",
      CHcy: "Ч",
      COPY: "©",
      Cacute: "Ć",
      Cap: "⋒",
      CapitalDifferentialD: "ⅅ",
      Cayleys: "ℭ",
      Ccaron: "Č",
      Ccedil: "Ç",
      Ccirc: "Ĉ",
      Cconint: "∰",
      Cdot: "Ċ",
      Cedilla: "¸",
      CenterDot: "·",
      Cfr: "ℭ",
      Chi: "Χ",
      CircleDot: "⊙",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      Colon: "∷",
      Colone: "⩴",
      Congruent: "≡",
      Conint: "∯",
      ContourIntegral: "∮",
      Copf: "ℂ",
      Coproduct: "∐",
      CounterClockwiseContourIntegral: "∳",
      Cross: "⨯",
      Cscr: "𝒞",
      Cup: "⋓",
      CupCap: "≍",
      DD: "ⅅ",
      DDotrahd: "⤑",
      DJcy: "Ђ",
      DScy: "Ѕ",
      DZcy: "Џ",
      Dagger: "‡",
      Darr: "↡",
      Dashv: "⫤",
      Dcaron: "Ď",
      Dcy: "Д",
      Del: "∇",
      Delta: "Δ",
      Dfr: "𝔇",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      Diamond: "⋄",
      DifferentialD: "ⅆ",
      Dopf: "𝔻",
      Dot: "¨",
      DotDot: "⃜",
      DotEqual: "≐",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      DownArrowBar: "⤓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVector: "↽",
      DownLeftVectorBar: "⥖",
      DownRightTeeVector: "⥟",
      DownRightVector: "⇁",
      DownRightVectorBar: "⥗",
      DownTee: "⊤",
      DownTeeArrow: "↧",
      Downarrow: "⇓",
      Dscr: "𝒟",
      Dstrok: "Đ",
      ENG: "Ŋ",
      ETH: "Ð",
      Eacute: "É",
      Ecaron: "Ě",
      Ecirc: "Ê",
      Ecy: "Э",
      Edot: "Ė",
      Efr: "𝔈",
      Egrave: "È",
      Element: "∈",
      Emacr: "Ē",
      EmptySmallSquare: "◻",
      EmptyVerySmallSquare: "▫",
      Eogon: "Ę",
      Eopf: "𝔼",
      Epsilon: "Ε",
      Equal: "⩵",
      EqualTilde: "≂",
      Equilibrium: "⇌",
      Escr: "ℰ",
      Esim: "⩳",
      Eta: "Η",
      Euml: "Ë",
      Exists: "∃",
      ExponentialE: "ⅇ",
      Fcy: "Ф",
      Ffr: "𝔉",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      Fopf: "𝔽",
      ForAll: "∀",
      Fouriertrf: "ℱ",
      Fscr: "ℱ",
      GJcy: "Ѓ",
      GT: ">",
      Gamma: "Γ",
      Gammad: "Ϝ",
      Gbreve: "Ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      Gcy: "Г",
      Gdot: "Ġ",
      Gfr: "𝔊",
      Gg: "⋙",
      Gopf: "𝔾",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      Gt: "≫",
      HARDcy: "Ъ",
      Hacek: "ˇ",
      Hat: "^",
      Hcirc: "Ĥ",
      Hfr: "ℌ",
      HilbertSpace: "ℋ",
      Hopf: "ℍ",
      HorizontalLine: "─",
      Hscr: "ℋ",
      Hstrok: "Ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      IEcy: "Е",
      IJlig: "Ĳ",
      IOcy: "Ё",
      Iacute: "Í",
      Icirc: "Î",
      Icy: "И",
      Idot: "İ",
      Ifr: "ℑ",
      Igrave: "Ì",
      Im: "ℑ",
      Imacr: "Ī",
      ImaginaryI: "ⅈ",
      Implies: "⇒",
      Int: "∬",
      Integral: "∫",
      Intersection: "⋂",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      Iogon: "Į",
      Iopf: "𝕀",
      Iota: "Ι",
      Iscr: "ℐ",
      Itilde: "Ĩ",
      Iukcy: "І",
      Iuml: "Ï",
      Jcirc: "Ĵ",
      Jcy: "Й",
      Jfr: "𝔍",
      Jopf: "𝕁",
      Jscr: "𝒥",
      Jsercy: "Ј",
      Jukcy: "Є",
      KHcy: "Х",
      KJcy: "Ќ",
      Kappa: "Κ",
      Kcedil: "Ķ",
      Kcy: "К",
      Kfr: "𝔎",
      Kopf: "𝕂",
      Kscr: "𝒦",
      LJcy: "Љ",
      LT: "<",
      Lacute: "Ĺ",
      Lambda: "Λ",
      Lang: "⟪",
      Laplacetrf: "ℒ",
      Larr: "↞",
      Lcaron: "Ľ",
      Lcedil: "Ļ",
      Lcy: "Л",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      LeftArrowBar: "⇤",
      LeftArrowRightArrow: "⇆",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVector: "⇃",
      LeftDownVectorBar: "⥙",
      LeftFloor: "⌊",
      LeftRightArrow: "↔",
      LeftRightVector: "⥎",
      LeftTee: "⊣",
      LeftTeeArrow: "↤",
      LeftTeeVector: "⥚",
      LeftTriangle: "⊲",
      LeftTriangleBar: "⧏",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVector: "↿",
      LeftUpVectorBar: "⥘",
      LeftVector: "↼",
      LeftVectorBar: "⥒",
      Leftarrow: "⇐",
      Leftrightarrow: "⇔",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      LessLess: "⪡",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      Lfr: "𝔏",
      Ll: "⋘",
      Lleftarrow: "⇚",
      Lmidot: "Ŀ",
      LongLeftArrow: "⟵",
      LongLeftRightArrow: "⟷",
      LongRightArrow: "⟶",
      Longleftarrow: "⟸",
      Longleftrightarrow: "⟺",
      Longrightarrow: "⟹",
      Lopf: "𝕃",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      Lscr: "ℒ",
      Lsh: "↰",
      Lstrok: "Ł",
      Lt: "≪",
      Map: "⤅",
      Mcy: "М",
      MediumSpace: " ",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      MinusPlus: "∓",
      Mopf: "𝕄",
      Mscr: "ℳ",
      Mu: "Μ",
      NJcy: "Њ",
      Nacute: "Ń",
      Ncaron: "Ň",
      Ncedil: "Ņ",
      Ncy: "Н",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: "\n",
      Nfr: "𝔑",
      NoBreak: "⁠",
      NonBreakingSpace: " ",
      Nopf: "ℕ",
      Not: "⫬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      NotLeftTriangle: "⋪",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangle: "⋫",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      Nscr: "𝒩",
      Ntilde: "Ñ",
      Nu: "Ν",
      OElig: "Œ",
      Oacute: "Ó",
      Ocirc: "Ô",
      Ocy: "О",
      Odblac: "Ő",
      Ofr: "𝔒",
      Ograve: "Ò",
      Omacr: "Ō",
      Omega: "Ω",
      Omicron: "Ο",
      Oopf: "𝕆",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      Or: "⩔",
      Oscr: "𝒪",
      Oslash: "Ø",
      Otilde: "Õ",
      Otimes: "⨷",
      Ouml: "Ö",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      PartialD: "∂",
      Pcy: "П",
      Pfr: "𝔓",
      Phi: "Φ",
      Pi: "Π",
      PlusMinus: "±",
      Poincareplane: "ℌ",
      Popf: "ℙ",
      Pr: "⪻",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      Prime: "″",
      Product: "∏",
      Proportion: "∷",
      Proportional: "∝",
      Pscr: "𝒫",
      Psi: "Ψ",
      QUOT: '"',
      Qfr: "𝔔",
      Qopf: "ℚ",
      Qscr: "𝒬",
      RBarr: "⤐",
      REG: "®",
      Racute: "Ŕ",
      Rang: "⟫",
      Rarr: "↠",
      Rarrtl: "⤖",
      Rcaron: "Ř",
      Rcedil: "Ŗ",
      Rcy: "Р",
      Re: "ℜ",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      Rfr: "ℜ",
      Rho: "Ρ",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      RightArrowBar: "⇥",
      RightArrowLeftArrow: "⇄",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVector: "⇂",
      RightDownVectorBar: "⥕",
      RightFloor: "⌋",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTeeVector: "⥛",
      RightTriangle: "⊳",
      RightTriangleBar: "⧐",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVector: "↾",
      RightUpVectorBar: "⥔",
      RightVector: "⇀",
      RightVectorBar: "⥓",
      Rightarrow: "⇒",
      Ropf: "ℝ",
      RoundImplies: "⥰",
      Rrightarrow: "⇛",
      Rscr: "ℛ",
      Rsh: "↱",
      RuleDelayed: "⧴",
      SHCHcy: "Щ",
      SHcy: "Ш",
      SOFTcy: "Ь",
      Sacute: "Ś",
      Sc: "⪼",
      Scaron: "Š",
      Scedil: "Ş",
      Scirc: "Ŝ",
      Scy: "С",
      Sfr: "𝔖",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      Sigma: "Σ",
      SmallCircle: "∘",
      Sopf: "𝕊",
      Sqrt: "√",
      Square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      Sscr: "𝒮",
      Star: "⋆",
      Sub: "⋐",
      Subset: "⋐",
      SubsetEqual: "⊆",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      SuchThat: "∋",
      Sum: "∑",
      Sup: "⋑",
      Superset: "⊃",
      SupersetEqual: "⊇",
      Supset: "⋑",
      THORN: "Þ",
      TRADE: "™",
      TSHcy: "Ћ",
      TScy: "Ц",
      Tab: "\t",
      Tau: "Τ",
      Tcaron: "Ť",
      Tcedil: "Ţ",
      Tcy: "Т",
      Tfr: "𝔗",
      Therefore: "∴",
      Theta: "Θ",
      ThickSpace: "  ",
      ThinSpace: " ",
      Tilde: "∼",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      Topf: "𝕋",
      TripleDot: "⃛",
      Tscr: "𝒯",
      Tstrok: "Ŧ",
      Uacute: "Ú",
      Uarr: "↟",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      Ubreve: "Ŭ",
      Ucirc: "Û",
      Ucy: "У",
      Udblac: "Ű",
      Ufr: "𝔘",
      Ugrave: "Ù",
      Umacr: "Ū",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      Uopf: "𝕌",
      UpArrow: "↑",
      UpArrowBar: "⤒",
      UpArrowDownArrow: "⇅",
      UpDownArrow: "↕",
      UpEquilibrium: "⥮",
      UpTee: "⊥",
      UpTeeArrow: "↥",
      Uparrow: "⇑",
      Updownarrow: "⇕",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      Upsi: "ϒ",
      Upsilon: "Υ",
      Uring: "Ů",
      Uscr: "𝒰",
      Utilde: "Ũ",
      Uuml: "Ü",
      VDash: "⊫",
      Vbar: "⫫",
      Vcy: "В",
      Vdash: "⊩",
      Vdashl: "⫦",
      Vee: "⋁",
      Verbar: "‖",
      Vert: "‖",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: " ",
      Vfr: "𝔙",
      Vopf: "𝕍",
      Vscr: "𝒱",
      Vvdash: "⊪",
      Wcirc: "Ŵ",
      Wedge: "⋀",
      Wfr: "𝔚",
      Wopf: "𝕎",
      Wscr: "𝒲",
      Xfr: "𝔛",
      Xi: "Ξ",
      Xopf: "𝕏",
      Xscr: "𝒳",
      YAcy: "Я",
      YIcy: "Ї",
      YUcy: "Ю",
      Yacute: "Ý",
      Ycirc: "Ŷ",
      Ycy: "Ы",
      Yfr: "𝔜",
      Yopf: "𝕐",
      Yscr: "𝒴",
      Yuml: "Ÿ",
      ZHcy: "Ж",
      Zacute: "Ź",
      Zcaron: "Ž",
      Zcy: "З",
      Zdot: "Ż",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      Zfr: "ℨ",
      Zopf: "ℤ",
      Zscr: "𝒵",
      aacute: "á",
      abreve: "ă",
      ac: "∾",
      acE: "∾̳",
      acd: "∿",
      acirc: "â",
      acute: "´",
      acy: "а",
      aelig: "æ",
      af: "⁡",
      afr: "𝔞",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      alpha: "α",
      amacr: "ā",
      amalg: "⨿",
      amp: "&",
      and: "∧",
      andand: "⩕",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsd: "∡",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      aogon: "ą",
      aopf: "𝕒",
      ap: "≈",
      apE: "⩰",
      apacir: "⩯",
      ape: "≊",
      apid: "≋",
      apos: "'",
      approx: "≈",
      approxeq: "≊",
      aring: "å",
      ascr: "𝒶",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      atilde: "ã",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      bNot: "⫭",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      barvee: "⊽",
      barwed: "⌅",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bnot: "⌐",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxDL: "╗",
      boxDR: "╔",
      boxDl: "╖",
      boxDr: "╓",
      boxH: "═",
      boxHD: "╦",
      boxHU: "╩",
      boxHd: "╤",
      boxHu: "╧",
      boxUL: "╝",
      boxUR: "╚",
      boxUl: "╜",
      boxUr: "╙",
      boxV: "║",
      boxVH: "╬",
      boxVL: "╣",
      boxVR: "╠",
      boxVh: "╫",
      boxVl: "╢",
      boxVr: "╟",
      boxbox: "⧉",
      boxdL: "╕",
      boxdR: "╒",
      boxdl: "┐",
      boxdr: "┌",
      boxh: "─",
      boxhD: "╥",
      boxhU: "╨",
      boxhd: "┬",
      boxhu: "┴",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxuL: "╛",
      boxuR: "╘",
      boxul: "┘",
      boxur: "└",
      boxv: "│",
      boxvH: "╪",
      boxvL: "╡",
      boxvR: "╞",
      boxvh: "┼",
      boxvl: "┤",
      boxvr: "├",
      bprime: "‵",
      breve: "˘",
      brvbar: "¦",
      bscr: "𝒷",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsol: "\\",
      bsolb: "⧅",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      bumpeq: "≏",
      cacute: "ć",
      cap: "∩",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      capcup: "⩇",
      capdot: "⩀",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      ccaps: "⩍",
      ccaron: "č",
      ccedil: "ç",
      ccirc: "ĉ",
      ccups: "⩌",
      ccupssm: "⩐",
      cdot: "ċ",
      cedil: "¸",
      cemptyv: "⦲",
      cent: "¢",
      centerdot: "·",
      cfr: "𝔠",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      chi: "χ",
      cir: "○",
      cirE: "⧃",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledR: "®",
      circledS: "Ⓢ",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      clubs: "♣",
      clubsuit: "♣",
      colon: ":",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      conint: "∮",
      copf: "𝕔",
      coprod: "∐",
      copy: "©",
      copysr: "℗",
      crarr: "↵",
      cross: "✗",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      cup: "∪",
      cupbrcap: "⩈",
      cupcap: "⩆",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      dArr: "⇓",
      dHar: "⥥",
      dagger: "†",
      daleth: "ℸ",
      darr: "↓",
      dash: "‐",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      dcaron: "ď",
      dcy: "д",
      dd: "ⅆ",
      ddagger: "‡",
      ddarr: "⇊",
      ddotseq: "⩷",
      deg: "°",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      dfr: "𝔡",
      dharl: "⇃",
      dharr: "⇂",
      diam: "⋄",
      diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      dopf: "𝕕",
      dot: "˙",
      doteq: "≐",
      doteqdot: "≑",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      downarrow: "↓",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      dscr: "𝒹",
      dscy: "ѕ",
      dsol: "⧶",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      dzcy: "џ",
      dzigrarr: "⟿",
      eDDot: "⩷",
      eDot: "≑",
      eacute: "é",
      easter: "⩮",
      ecaron: "ě",
      ecir: "≖",
      ecirc: "ê",
      ecolon: "≕",
      ecy: "э",
      edot: "ė",
      ee: "ⅇ",
      efDot: "≒",
      efr: "𝔢",
      eg: "⪚",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      emptyv: "∅",
      emsp13: " ",
      emsp14: " ",
      emsp: " ",
      eng: "ŋ",
      ensp: " ",
      eogon: "ę",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      equals: "=",
      equest: "≟",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erDot: "≓",
      erarr: "⥱",
      escr: "ℯ",
      esdot: "≐",
      esim: "≂",
      eta: "η",
      eth: "ð",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      expectation: "ℰ",
      exponentiale: "ⅇ",
      fallingdotseq: "≒",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      ffr: "𝔣",
      filig: "ﬁ",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      fopf: "𝕗",
      forall: "∀",
      fork: "⋔",
      forkv: "⫙",
      fpartint: "⨍",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      fscr: "𝒻",
      gE: "≧",
      gEl: "⪌",
      gacute: "ǵ",
      gamma: "γ",
      gammad: "ϝ",
      gap: "⪆",
      gbreve: "ğ",
      gcirc: "ĝ",
      gcy: "г",
      gdot: "ġ",
      ge: "≥",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      ges: "⩾",
      gescc: "⪩",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      gfr: "𝔤",
      gg: "≫",
      ggg: "⋙",
      gimel: "ℷ",
      gjcy: "ѓ",
      gl: "≷",
      glE: "⪒",
      gla: "⪥",
      glj: "⪤",
      gnE: "≩",
      gnap: "⪊",
      gnapprox: "⪊",
      gne: "⪈",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      gopf: "𝕘",
      grave: "`",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      gt: ">",
      gtcc: "⪧",
      gtcir: "⩺",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      hArr: "⇔",
      hairsp: " ",
      half: "½",
      hamilt: "ℋ",
      hardcy: "ъ",
      harr: "↔",
      harrcir: "⥈",
      harrw: "↭",
      hbar: "ℏ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      hfr: "𝔥",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      hopf: "𝕙",
      horbar: "―",
      hscr: "𝒽",
      hslash: "ℏ",
      hstrok: "ħ",
      hybull: "⁃",
      hyphen: "‐",
      iacute: "í",
      ic: "⁣",
      icirc: "î",
      icy: "и",
      iecy: "е",
      iexcl: "¡",
      iff: "⇔",
      ifr: "𝔦",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      ijlig: "ĳ",
      imacr: "ī",
      image: "ℑ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      imof: "⊷",
      imped: "Ƶ",
      in: "∈",
      incare: "℅",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      int: "∫",
      intcal: "⊺",
      integers: "ℤ",
      intercal: "⊺",
      intlarhk: "⨗",
      intprod: "⨼",
      iocy: "ё",
      iogon: "į",
      iopf: "𝕚",
      iota: "ι",
      iprod: "⨼",
      iquest: "¿",
      iscr: "𝒾",
      isin: "∈",
      isinE: "⋹",
      isindot: "⋵",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      itilde: "ĩ",
      iukcy: "і",
      iuml: "ï",
      jcirc: "ĵ",
      jcy: "й",
      jfr: "𝔧",
      jmath: "ȷ",
      jopf: "𝕛",
      jscr: "𝒿",
      jsercy: "ј",
      jukcy: "є",
      kappa: "κ",
      kappav: "ϰ",
      kcedil: "ķ",
      kcy: "к",
      kfr: "𝔨",
      kgreen: "ĸ",
      khcy: "х",
      kjcy: "ќ",
      kopf: "𝕜",
      kscr: "𝓀",
      lAarr: "⇚",
      lArr: "⇐",
      lAtail: "⤛",
      lBarr: "⤎",
      lE: "≦",
      lEg: "⪋",
      lHar: "⥢",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      lambda: "λ",
      lang: "⟨",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      laquo: "«",
      larr: "←",
      larrb: "⇤",
      larrbfs: "⤟",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      lat: "⪫",
      latail: "⤙",
      late: "⪭",
      lates: "⪭︀",
      lbarr: "⤌",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      lcaron: "ľ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      le: "≤",
      leftarrow: "←",
      leftarrowtail: "↢",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      leftrightarrow: "↔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      leftthreetimes: "⋋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      les: "⩽",
      lescc: "⪨",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      lessgtr: "≶",
      lesssim: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      ljcy: "љ",
      ll: "≪",
      llarr: "⇇",
      llcorner: "⌞",
      llhard: "⥫",
      lltri: "◺",
      lmidot: "ŀ",
      lmoust: "⎰",
      lmoustache: "⎰",
      lnE: "≨",
      lnap: "⪉",
      lnapprox: "⪉",
      lne: "⪇",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      longleftarrow: "⟵",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      longrightarrow: "⟶",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      lscr: "𝓁",
      lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      lstrok: "ł",
      lt: "<",
      ltcc: "⪦",
      ltcir: "⩹",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltrPar: "⦖",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      mDDot: "∺",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      mcy: "м",
      mdash: "—",
      measuredangle: "∡",
      mfr: "𝔪",
      mho: "℧",
      micro: "µ",
      mid: "∣",
      midast: "*",
      midcir: "⫰",
      middot: "·",
      minus: "−",
      minusb: "⊟",
      minusd: "∸",
      minusdu: "⨪",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      mopf: "𝕞",
      mp: "∓",
      mscr: "𝓂",
      mstpos: "∾",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nGg: "⋙̸",
      nGt: "≫⃒",
      nGtv: "≫̸",
      nLeftarrow: "⇍",
      nLeftrightarrow: "⇎",
      nLl: "⋘̸",
      nLt: "≪⃒",
      nLtv: "≪̸",
      nRightarrow: "⇏",
      nVDash: "⊯",
      nVdash: "⊮",
      nabla: "∇",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natur: "♮",
      natural: "♮",
      naturals: "ℕ",
      nbsp: " ",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      ncaron: "ň",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      ncy: "н",
      ndash: "–",
      ne: "≠",
      neArr: "⇗",
      nearhk: "⤤",
      nearr: "↗",
      nearrow: "↗",
      nedot: "≐̸",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      nexist: "∄",
      nexists: "∄",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      ngsim: "≵",
      ngt: "≯",
      ngtr: "≯",
      nhArr: "⇎",
      nharr: "↮",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      njcy: "њ",
      nlArr: "⇍",
      nlE: "≦̸",
      nlarr: "↚",
      nldr: "‥",
      nle: "≰",
      nleftarrow: "↚",
      nleftrightarrow: "↮",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nlsim: "≴",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nmid: "∤",
      nopf: "𝕟",
      not: "¬",
      notin: "∉",
      notinE: "⋹̸",
      notindot: "⋵̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      npar: "∦",
      nparallel: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      npre: "⪯̸",
      nprec: "⊀",
      npreceq: "⪯̸",
      nrArr: "⇏",
      nrarr: "↛",
      nrarrc: "⤳̸",
      nrarrw: "↝̸",
      nrightarrow: "↛",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: " ",
      nvDash: "⊭",
      nvHarr: "⤄",
      nvap: "≍⃒",
      nvdash: "⊬",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwArr: "⇖",
      nwarhk: "⤣",
      nwarr: "↖",
      nwarrow: "↖",
      nwnear: "⤧",
      oS: "Ⓢ",
      oacute: "ó",
      oast: "⊛",
      ocir: "⊚",
      ocirc: "ô",
      ocy: "о",
      odash: "⊝",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      oelig: "œ",
      ofcir: "⦿",
      ofr: "𝔬",
      ogon: "˛",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      omacr: "ō",
      omega: "ω",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      oopf: "𝕠",
      opar: "⦷",
      operp: "⦹",
      oplus: "⊕",
      or: "∨",
      orarr: "↻",
      ord: "⩝",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oscr: "ℴ",
      oslash: "ø",
      osol: "⊘",
      otilde: "õ",
      otimes: "⊗",
      otimesas: "⨶",
      ouml: "ö",
      ovbar: "⌽",
      par: "∥",
      para: "¶",
      parallel: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      pfr: "𝔭",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plus: "+",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      pointint: "⨕",
      popf: "𝕡",
      pound: "£",
      pr: "≺",
      prE: "⪳",
      prap: "⪷",
      prcue: "≼",
      pre: "⪯",
      prec: "≺",
      precapprox: "⪷",
      preccurlyeq: "≼",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      precsim: "≾",
      prime: "′",
      primes: "ℙ",
      prnE: "⪵",
      prnap: "⪹",
      prnsim: "⋨",
      prod: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      pscr: "𝓅",
      psi: "ψ",
      puncsp: " ",
      qfr: "𝔮",
      qint: "⨌",
      qopf: "𝕢",
      qprime: "⁗",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      quot: '"',
      rAarr: "⇛",
      rArr: "⇒",
      rAtail: "⤜",
      rBarr: "⤏",
      rHar: "⥤",
      race: "∽̱",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      rang: "⟩",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raquo: "»",
      rarr: "→",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      rarrtl: "↣",
      rarrw: "↝",
      ratail: "⤚",
      ratio: "∶",
      rationals: "ℚ",
      rbarr: "⤍",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      rcaron: "ř",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      rect: "▭",
      reg: "®",
      rfisht: "⥽",
      rfloor: "⌋",
      rfr: "𝔯",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      rho: "ρ",
      rhov: "ϱ",
      rightarrow: "→",
      rightarrowtail: "↣",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      rightthreetimes: "⋌",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoust: "⎱",
      rmoustache: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      ropf: "𝕣",
      roplus: "⨮",
      rotimes: "⨵",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      rsaquo: "›",
      rscr: "𝓇",
      rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      ruluhar: "⥨",
      rx: "℞",
      sacute: "ś",
      sbquo: "‚",
      sc: "≻",
      scE: "⪴",
      scap: "⪸",
      scaron: "š",
      sccue: "≽",
      sce: "⪰",
      scedil: "ş",
      scirc: "ŝ",
      scnE: "⪶",
      scnap: "⪺",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      scy: "с",
      sdot: "⋅",
      sdotb: "⊡",
      sdote: "⩦",
      seArr: "⇘",
      searhk: "⤥",
      searr: "↘",
      searrow: "↘",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      shchcy: "щ",
      shcy: "ш",
      shortmid: "∣",
      shortparallel: "∥",
      shy: "­",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      softcy: "ь",
      sol: "/",
      solb: "⧄",
      solbar: "⌿",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      squ: "□",
      square: "□",
      squarf: "▪",
      squf: "▪",
      srarr: "→",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      sub: "⊂",
      subE: "⫅",
      subdot: "⪽",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      subset: "⊂",
      subseteq: "⊆",
      subseteqq: "⫅",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succ: "≻",
      succapprox: "⪸",
      succcurlyeq: "≽",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      sum: "∑",
      sung: "♪",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      sup: "⊃",
      supE: "⫆",
      supdot: "⪾",
      supdsub: "⫘",
      supe: "⊇",
      supedot: "⫄",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      supset: "⊃",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swArr: "⇙",
      swarhk: "⤦",
      swarr: "↙",
      swarrow: "↙",
      swnwar: "⤪",
      szlig: "ß",
      target: "⌖",
      tau: "τ",
      tbrk: "⎴",
      tcaron: "ť",
      tcedil: "ţ",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      tfr: "𝔱",
      there4: "∴",
      therefore: "∴",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      thinsp: " ",
      thkap: "≈",
      thksim: "∼",
      thorn: "þ",
      tilde: "˜",
      times: "×",
      timesb: "⊠",
      timesbar: "⨱",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      top: "⊤",
      topbot: "⌶",
      topcir: "⫱",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      trade: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      tscr: "𝓉",
      tscy: "ц",
      tshcy: "ћ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      uArr: "⇑",
      uHar: "⥣",
      uacute: "ú",
      uarr: "↑",
      ubrcy: "ў",
      ubreve: "ŭ",
      ucirc: "û",
      ucy: "у",
      udarr: "⇅",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      ufr: "𝔲",
      ugrave: "ù",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      umacr: "ū",
      uml: "¨",
      uogon: "ų",
      uopf: "𝕦",
      uparrow: "↑",
      updownarrow: "↕",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      upsi: "υ",
      upsih: "ϒ",
      upsilon: "υ",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      uring: "ů",
      urtri: "◹",
      uscr: "𝓊",
      utdot: "⋰",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      uuml: "ü",
      uwangle: "⦧",
      vArr: "⇕",
      vBar: "⫨",
      vBarv: "⫩",
      vDash: "⊨",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      varr: "↕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      vcy: "в",
      vdash: "⊢",
      vee: "∨",
      veebar: "⊻",
      veeeq: "≚",
      vellip: "⋮",
      verbar: "|",
      vert: "|",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      vzigzag: "⦚",
      wcirc: "ŵ",
      wedbar: "⩟",
      wedge: "∧",
      wedgeq: "≙",
      weierp: "℘",
      wfr: "𝔴",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      xfr: "𝔵",
      xhArr: "⟺",
      xharr: "⟷",
      xi: "ξ",
      xlArr: "⟸",
      xlarr: "⟵",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrArr: "⟹",
      xrarr: "⟶",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      yacute: "ý",
      yacy: "я",
      ycirc: "ŷ",
      ycy: "ы",
      yen: "¥",
      yfr: "𝔶",
      yicy: "ї",
      yopf: "𝕪",
      yscr: "𝓎",
      yucy: "ю",
      yuml: "ÿ",
      zacute: "ź",
      zcaron: "ž",
      zcy: "з",
      zdot: "ż",
      zeetrf: "ℨ",
      zeta: "ζ",
      zfr: "𝔷",
      zhcy: "ж",
      zigrarr: "⇝",
      zopf: "𝕫",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌"
    }, pu = {
      0: 65533,
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };

    function uu(e) {
      return e.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (e => {
        if ("#" === e.charAt(1)) {
          const t = e.charAt(2);
          return function (e) {
            if (e >= 55296 && e <= 57343 || e > 1114111) return "�";
            e in pu && (e = pu[e]);
            return String.fromCodePoint(e)
          }("X" === t || "x" === t ? parseInt(e.slice(3), 16) : parseInt(e.slice(2), 10))
        }
        return lu[e.slice(1, -1)] || e
      }))
    }

    function du(e, t) {
      return e.startPos = e.tokenPos = e.index, e.startColumn = e.colPos = e.column, e.startLine = e.linePos = e.line, e.token = 8192 & Op[e.currentChar] ? function (e, t) {
        const n = e.currentChar;
        let a = Ip(e);
        const i = e.index;
        for (; a !== n;) e.index >= e.end && yp(e, 14), a = Ip(e);
        a !== n && yp(e, 14);
        e.tokenValue = e.source.slice(i, e.index), Ip(e), 512 & t && (e.tokenRaw = e.source.slice(e.tokenPos, e.index));
        return 134283267
      }(e, t) : cu(e, t, 0), e.token
    }

    function mu(e, t) {
      if (e.startPos = e.tokenPos = e.index, e.startColumn = e.colPos = e.column, e.startLine = e.linePos = e.line, e.index >= e.end) return e.token = 1048576;
      switch (ou[e.source.charCodeAt(e.index)]) {
        case 8456258:
          Ip(e), 47 === e.currentChar ? (Ip(e), e.token = 25) : e.token = 8456258;
          break;
        case 2162700:
          Ip(e), e.token = 2162700;
          break;
        default: {
          let n = 0;
          for (; e.index < e.end;) {
            const t = Op[e.source.charCodeAt(e.index)];
            if (1024 & t ? (n |= 5, Lp(e)) : 2048 & t ? (Dp(e, n), n = -5 & n | 1) : Ip(e), 16384 & Op[e.currentChar]) break
          }
          const a = e.source.slice(e.tokenPos, e.index);
          512 & t && (e.tokenRaw = a), e.tokenValue = uu(a), e.token = 138
        }
      }
      return e.token
    }

    function hu(e) {
      if (143360 == (143360 & e.token)) {
        const {index: t} = e;
        let n = e.currentChar;
        for (; 32770 & Op[n];) n = Ip(e);
        e.tokenValue += e.source.slice(t, e.index)
      }
      return e.token = 208897, e.token
    }

    function fu(e, t, n) {
      0 != (1 & e.flags) || 1048576 == (1048576 & e.token) || n || yp(e, 28, Zp[255 & e.token]), xu(e, t, 1074790417)
    }

    function gu(e, t, n, a) {
      return t - n < 13 && "use strict" === a && (1048576 == (1048576 & e.token) || 1 & e.flags) ? 1 : 0
    }

    function bu(e, t, n) {
      return e.token !== n ? 0 : (ru(e, t), 1)
    }

    function xu(e, t, n) {
      return e.token === n && (ru(e, t), !0)
    }

    function Eu(e, t, n) {
      e.token !== n && yp(e, 23, Zp[255 & n]), ru(e, t)
    }

    function vu(e, t) {
      switch (t.type) {
        case"ArrayExpression":
          t.type = "ArrayPattern";
          const n = t.elements;
          for (let t = 0, a = n.length; t < a; ++t) {
            const a = n[t];
            a && vu(e, a)
          }
          return;
        case"ObjectExpression":
          t.type = "ObjectPattern";
          const a = t.properties;
          for (let t = 0, n = a.length; t < n; ++t) vu(e, a[t]);
          return;
        case"AssignmentExpression":
          return t.type = "AssignmentPattern", "=" !== t.operator && yp(e, 69), delete t.operator, void vu(e, t.left);
        case"Property":
          return void vu(e, t.value);
        case"SpreadElement":
          t.type = "RestElement", vu(e, t.argument)
      }
    }

    function ku(e, t, n, a, i) {
      1024 & t && (36864 == (36864 & a) && yp(e, 115), i || 537079808 != (537079808 & a) || yp(e, 116)), 20480 == (20480 & a) && yp(e, 100), 24 & n && 241739 === a && yp(e, 98), 4196352 & t && 209008 === a && yp(e, 96), 2098176 & t && 241773 === a && yp(e, 95, "yield")
    }

    function Tu(e, t, n) {
      1024 & t && (36864 == (36864 & n) && yp(e, 115), 537079808 == (537079808 & n) && yp(e, 116), 122 === n && yp(e, 93), 121 === n && yp(e, 93)), 20480 == (20480 & n) && yp(e, 100), 4196352 & t && 209008 === n && yp(e, 96), 2098176 & t && 241773 === n && yp(e, 95, "yield")
    }

    function Au(e, t, n) {
      return 209008 === n && (4196352 & t && yp(e, 96), e.destructible |= 128), 241773 === n && 2097152 & t && yp(e, 95, "yield"), 20480 == (20480 & n) || 36864 == (36864 & n) || 122 == n
    }

    function yu(e, t, n, a) {
      for (; t;) {
        if (t["$" + n]) return a && yp(e, 134), 1;
        a && t.loop && (a = 0), t = t.$
      }
      return 0
    }

    function _u(e, t, n, a, i, s) {
      return 2 & t && (s.start = n, s.end = e.startPos, s.range = [n, e.startPos]), 4 & t && (s.loc = {
        start: {
          line: a,
          column: i
        }, end: {line: e.startLine, column: e.startColumn}
      }, e.sourceFile && (s.loc.source = e.sourceFile)), s
    }

    function Cu(e) {
      switch (e.type) {
        case"JSXIdentifier":
          return e.name;
        case"JSXNamespacedName":
          return e.namespace + ":" + e.name;
        case"JSXMemberExpression":
          return Cu(e.object) + "." + Cu(e.property)
      }
    }

    function Su(e, t, n) {
      const a = Iu({parent: void 0, type: 2}, 1024);
      return Du(e, t, a, n, 1, 0), a
    }

    function wu(e, t, ...n) {
      const {index: a, line: i, column: s} = e;
      return {type: t, params: n, index: a, line: i, column: s}
    }

    function Iu(e, t) {
      return {parent: e, type: t, scopeError: void 0}
    }

    function Nu(e, t, n, a, i, s) {
      4 & i ? Lu(e, t, n, a, i) : Du(e, t, n, a, i, s), 64 & s && Ru(e, a)
    }

    function Du(e, t, n, a, i, s) {
      const o = n["#" + a];
      o && 0 == (2 & o) && (1 & i ? n.scopeError = wu(e, 141, a) : 256 & t && 64 & o && 2 & s || yp(e, 141, a)), 128 & n.type && n.parent["#" + a] && 0 == (2 & n.parent["#" + a]) && yp(e, 141, a), 1024 & n.type && o && 0 == (2 & o) && 1 & i && (n.scopeError = wu(e, 141, a)), 64 & n.type && 768 & n.parent["#" + a] && yp(e, 154, a), n["#" + a] = i
    }

    function Lu(e, t, n, a, i) {
      let s = n;
      for (; s && 0 == (256 & s.type);) {
        const o = s["#" + a];
        248 & o && (256 & t && 0 == (1024 & t) && (128 & i && 68 & o || 128 & o && 68 & i) || yp(e, 141, a)), s === n && 1 & o && 1 & i && (s.scopeError = wu(e, 141, a)), 768 & o && (0 == (512 & o) || 0 == (256 & t) || 1024 & t) && yp(e, 141, a), s["#" + a] = i, s = s.parent
      }
    }

    function Ru(e, t) {
      void 0 !== e.exportedNames && "" !== t && (e.exportedNames["#" + t] && yp(e, 142, t), e.exportedNames["#" + t] = 1)
    }

    function Pu(e, t) {
      void 0 !== e.exportedBindings && "" !== t && (e.exportedBindings["#" + t] = 1)
    }

    function Ou(e, t) {
      return 2098176 & e ? !(2048 & e && 209008 === t) && (!(2097152 & e && 241773 === t) && (143360 == (143360 & t) || 12288 == (12288 & t))) : 143360 == (143360 & t) || 12288 == (12288 & t) || 36864 == (36864 & t)
    }

    function Mu(e, t, n, a) {
      537079808 == (537079808 & n) && (1024 & t && yp(e, 116), a && (e.flags |= 512)), Ou(t, n) || yp(e, 0)
    }

    function Bu(e, t, n) {
      let a, i, s = "";
      null != t && (t.module && (n |= 3072), t.next && (n |= 1), t.loc && (n |= 4), t.ranges && (n |= 2), t.uniqueKeyInPattern && (n |= -2147483648), t.lexical && (n |= 64), t.webcompat && (n |= 256), t.directives && (n |= 520), t.globalReturn && (n |= 32), t.raw && (n |= 512), t.preserveParens && (n |= 128), t.impliedStrict && (n |= 1024), t.jsx && (n |= 16), t.identifierPattern && (n |= 268435456), t.specDeviation && (n |= 536870912), t.source && (s = t.source), null != t.onComment && (a = Array.isArray(t.onComment) ? function (e, t) {
        return function (n, a, i, s, o) {
          const r = {type: n, value: a};
          2 & e && (r.start = i, r.end = s, r.range = [i, s]), 4 & e && (r.loc = o), t.push(r)
        }
      }(n, t.onComment) : t.onComment), null != t.onToken && (i = Array.isArray(t.onToken) ? function (e, t) {
        return function (n, a, i, s) {
          const o = {token: n};
          2 & e && (o.start = a, o.end = i, o.range = [a, i]), 4 & e && (o.loc = s), t.push(o)
        }
      }(n, t.onToken) : t.onToken));
      const o = function (e, t, n, a) {
        return {
          source: e,
          flags: 0,
          index: 0,
          line: 1,
          column: 0,
          startPos: 0,
          end: e.length,
          tokenPos: 0,
          startColumn: 0,
          colPos: 0,
          linePos: 1,
          startLine: 1,
          sourceFile: t,
          tokenValue: "",
          token: 1048576,
          tokenRaw: "",
          tokenRegExp: void 0,
          currentChar: e.charCodeAt(0),
          exportedNames: [],
          exportedBindings: [],
          assignable: 1,
          destructible: 0,
          onComment: n,
          onToken: a,
          leadingDecorators: []
        }
      }(e, s, a, i);
      1 & n && function (e) {
        const t = e.source;
        35 === e.currentChar && 33 === t.charCodeAt(e.index + 1) && (Ip(e), Ip(e), Gp(e, t, 0, 4, e.tokenPos, e.linePos, e.colPos))
      }(o);
      const r = 64 & n ? {parent: void 0, type: 2} : void 0;
      let c = [], l = "script";
      if (2048 & n) {
        if (l = "module", c = function (e, t, n) {
          ru(e, 32768 | t);
          const a = [];
          if (8 & t) for (; 134283267 === e.token;) {
            const {tokenPos: n, linePos: i, colPos: s, token: o} = e;
            a.push(Yu(e, t, yd(e, t), o, n, i, s))
          }
          for (; 1048576 !== e.token;) a.push(Uu(e, t, n));
          return a
        }(o, 8192 | n, r), r) for (const e in o.exportedBindings) "#" !== e[0] || r[e] || yp(o, 143, e.slice(1))
      } else c = function (e, t, n) {
        ru(e, 1073774592 | t);
        const a = [];
        for (; 134283267 === e.token;) {
          const {index: n, tokenPos: i, tokenValue: s, linePos: o, colPos: r, token: c} = e, l = yd(e, t);
          gu(e, n, i, s) && (t |= 1024), a.push(Yu(e, t, l, c, i, o, r))
        }
        for (; 1048576 !== e.token;) a.push(Fu(e, t, n, 4, {}));
        return a
      }(o, 8192 | n, r);
      const p = {type: "Program", sourceType: l, body: c};
      return 2 & n && (p.start = 0, p.end = e.length, p.range = [0, e.length]), 4 & n && (p.loc = {
        start: {
          line: 1,
          column: 0
        }, end: {line: o.line, column: o.column}
      }, o.sourceFile && (p.loc.source = s)), p
    }

    function Uu(e, t, n) {
      let a;
      switch (e.leadingDecorators = Gd(e, t), e.token) {
        case 20566:
          a = function (e, t, n) {
            const a = e.tokenPos, i = e.linePos, s = e.colPos;
            ru(e, 32768 | t);
            const o = [];
            let r, c = null, l = null;
            if (xu(e, 32768 | t, 20563)) {
              switch (e.token) {
                case 86106:
                  c = _d(e, t, n, 4, 1, 1, 0, e.tokenPos, e.linePos, e.colPos);
                  break;
                case 133:
                case 86096:
                  c = jd(e, t, n, 1, e.tokenPos, e.linePos, e.colPos);
                  break;
                case 209007:
                  const {tokenPos: a, linePos: i, colPos: s} = e;
                  c = Ad(e, t, 0);
                  const {flags: o} = e;
                  0 == (1 & o) && (86106 === e.token ? c = _d(e, t, n, 4, 1, 1, 1, a, i, s) : 67174411 === e.token ? (c = Hd(e, t, c, 1, 1, 0, o, a, i, s), c = dd(e, t, c, 0, 0, a, i, s), c = od(e, t, 0, 0, a, i, s, c)) : 143360 & e.token && (n && (n = Su(e, t, e.tokenValue)), c = Ad(e, t, 0), c = Md(e, t, n, [c], 1, a, i, s)));
                  break;
                default:
                  c = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos), fu(e, 32768 | t)
              }
              return n && Ru(e, "default"), _u(e, t, a, i, s, {type: "ExportDefaultDeclaration", declaration: c})
            }
            switch (e.token) {
              case 8457014: {
                ru(e, t);
                let o = null;
                return xu(e, t, 77934) && (n && Ru(e, e.tokenValue), o = Ad(e, t, 0)), Eu(e, t, 12404), 134283267 !== e.token && yp(e, 103, "Export"), l = yd(e, t), fu(e, 32768 | t), _u(e, t, a, i, s, {
                  type: "ExportAllDeclaration",
                  source: l,
                  exported: o
                })
              }
              case 2162700: {
                ru(e, t);
                const a = [], i = [];
                for (; 143360 & e.token;) {
                  const {tokenPos: s, tokenValue: r, linePos: c, colPos: l} = e, p = Ad(e, t, 0);
                  let u;
                  77934 === e.token ? (ru(e, t), 134217728 == (134217728 & e.token) && yp(e, 104), n && (a.push(e.tokenValue), i.push(r)), u = Ad(e, t, 0)) : (n && (a.push(e.tokenValue), i.push(e.tokenValue)), u = p), o.push(_u(e, t, s, c, l, {
                    type: "ExportSpecifier",
                    local: p,
                    exported: u
                  })), 1074790415 !== e.token && Eu(e, t, 18)
                }
                if (Eu(e, t, 1074790415), xu(e, t, 12404)) 134283267 !== e.token && yp(e, 103, "Export"), l = yd(e, t); else if (n) {
                  let t = 0, n = a.length;
                  for (; t < n; t++) Ru(e, a[t]);
                  for (t = 0, n = i.length; t < n; t++) Pu(e, i[t])
                }
                fu(e, 32768 | t);
                break
              }
              case 86096:
                c = jd(e, t, n, 2, e.tokenPos, e.linePos, e.colPos);
                break;
              case 86106:
                c = _d(e, t, n, 4, 1, 2, 0, e.tokenPos, e.linePos, e.colPos);
                break;
              case 241739:
                c = Qu(e, t, n, 8, 64, e.tokenPos, e.linePos, e.colPos);
                break;
              case 86092:
                c = Qu(e, t, n, 16, 64, e.tokenPos, e.linePos, e.colPos);
                break;
              case 86090:
                c = Xu(e, t, n, 64, e.tokenPos, e.linePos, e.colPos);
                break;
              case 209007:
                const {tokenPos: p, linePos: u, colPos: d} = e;
                if (ru(e, t), 0 == (1 & e.flags) && 86106 === e.token) {
                  c = _d(e, t, n, 4, 1, 2, 1, p, u, d), n && (r = c.id ? c.id.name : "", Ru(e, r));
                  break
                }
              default:
                yp(e, 28, Zp[255 & e.token])
            }
            return _u(e, t, a, i, s, {type: "ExportNamedDeclaration", declaration: c, specifiers: o, source: l})
          }(e, t, n);
          break;
        case 86108:
          a = function (e, t, n) {
            const a = e.tokenPos, i = e.linePos, s = e.colPos;
            ru(e, t);
            let o = null;
            const {tokenPos: r, linePos: c, colPos: l} = e;
            let p = [];
            if (134283267 === e.token) o = yd(e, t); else {
              if (143360 & e.token) {
                if (p = [_u(e, t, r, c, l, {
                  type: "ImportDefaultSpecifier",
                  local: Ju(e, t, n)
                })], xu(e, t, 18)) switch (e.token) {
                  case 8457014:
                    p.push(Zu(e, t, n));
                    break;
                  case 2162700:
                    ed(e, t, n, p);
                    break;
                  default:
                    yp(e, 105)
                }
              } else switch (e.token) {
                case 8457014:
                  p = [Zu(e, t, n)];
                  break;
                case 2162700:
                  ed(e, t, n, p);
                  break;
                case 67174411:
                  return nd(e, t, a, i, s);
                case 67108877:
                  return td(e, t, a, i, s);
                default:
                  yp(e, 28, Zp[255 & e.token])
              }
              o = function (e, t) {
                xu(e, t, 12404), 134283267 !== e.token && yp(e, 103, "Import");
                return yd(e, t)
              }(e, t)
            }
            return fu(e, 32768 | t), _u(e, t, a, i, s, {type: "ImportDeclaration", specifiers: p, source: o})
          }(e, t, n);
          break;
        default:
          a = Fu(e, t, n, 4, {})
      }
      return e.leadingDecorators.length && yp(e, 165), a
    }

    function Fu(e, t, n, a, i) {
      const s = e.tokenPos, o = e.linePos, r = e.colPos;
      switch (e.token) {
        case 86106:
          return _d(e, t, n, a, 1, 0, 0, s, o, r);
        case 133:
        case 86096:
          return jd(e, t, n, 0, s, o, r);
        case 86092:
          return Qu(e, t, n, 16, 0, s, o, r);
        case 241739:
          return function (e, t, n, a, i, s, o) {
            const {token: r, tokenValue: c} = e;
            let l = Ad(e, t, 0);
            if (2240512 & e.token) {
              const a = Ku(e, t, n, 8, 0);
              return fu(e, 32768 | t), _u(e, t, i, s, o, {type: "VariableDeclaration", kind: "let", declarations: a})
            }
            e.assignable = 1, 1024 & t && yp(e, 83);
            if (21 === e.token) return qu(e, t, n, a, {}, c, l, r, 0, i, s, o);
            if (10 === e.token) {
              let n;
              64 & t && (n = Su(e, t, c)), e.flags = 128 ^ (128 | e.flags), l = Md(e, t, n, [l], 0, i, s, o)
            } else l = dd(e, t, l, 0, 0, i, s, o), l = od(e, t, 0, 0, i, s, o, l);
            18 === e.token && (l = id(e, t, 0, i, s, o, l));
            return Gu(e, t, l, i, s, o)
          }(e, t, n, a, s, o, r);
        case 20566:
          yp(e, 101, "export");
        case 86108:
          switch (ru(e, t), e.token) {
            case 67174411:
              return nd(e, t, s, o, r);
            case 67108877:
              return td(e, t, s, o, r);
            default:
              yp(e, 101, "import")
          }
        case 209007:
          return zu(e, t, n, a, i, 1, s, o, r);
        default:
          return Hu(e, t, n, a, i, 1, s, o, r)
      }
    }

    function Hu(e, t, n, a, i, s, o, r, c) {
      switch (e.token) {
        case 86090:
          return Xu(e, t, n, 0, o, r, c);
        case 20574:
          return function (e, t, n, a, i) {
            0 == (32 & t) && 8192 & t && yp(e, 90);
            ru(e, 32768 | t);
            const s = 1 & e.flags || 1048576 & e.token ? null : sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
            return fu(e, 32768 | t), _u(e, t, n, a, i, {type: "ReturnStatement", argument: s})
          }(e, t, o, r, c);
        case 20571:
          return function (e, t, n, a, i, s, o) {
            ru(e, t), Eu(e, 32768 | t, 67174411), e.assignable = 1;
            const r = sd(e, t, 0, 1, e.tokenPos, e.line, e.colPos);
            Eu(e, 32768 | t, 16);
            const c = Vu(e, t, n, a, e.tokenPos, e.linePos, e.colPos);
            let l = null;
            20565 === e.token && (ru(e, 32768 | t), l = Vu(e, t, n, a, e.tokenPos, e.linePos, e.colPos));
            return _u(e, t, i, s, o, {type: "IfStatement", test: r, consequent: c, alternate: l})
          }(e, t, n, i, o, r, c);
        case 20569:
          return function (e, t, n, a, i, s, o) {
            ru(e, t);
            const r = ((4194304 & t) > 0 || (2048 & t) > 0 && (8192 & t) > 0) && xu(e, t, 209008);
            Eu(e, 32768 | t, 67174411), n && (n = Iu(n, 1));
            let c, l = null, p = null, u = 0, d = null,
              m = 86090 === e.token || 241739 === e.token || 86092 === e.token;
            const {token: h, tokenPos: f, linePos: g, colPos: b} = e;
            m ? 241739 === h ? (d = Ad(e, t, 0), 2240512 & e.token ? (8738868 === e.token ? 1024 & t && yp(e, 65) : d = _u(e, t, f, g, b, {
              type: "VariableDeclaration",
              kind: "let",
              declarations: Ku(e, 134217728 | t, n, 8, 32)
            }), e.assignable = 1) : 1024 & t ? yp(e, 65) : (m = !1, e.assignable = 1, d = dd(e, t, d, 0, 0, f, g, b), 274549 === e.token && yp(e, 112))) : (ru(e, t), d = _u(e, t, f, g, b, 86090 === h ? {
              type: "VariableDeclaration",
              kind: "var",
              declarations: Ku(e, 134217728 | t, n, 4, 32)
            } : {
              type: "VariableDeclaration",
              kind: "const",
              declarations: Ku(e, 134217728 | t, n, 16, 32)
            }), e.assignable = 1) : 1074790417 === h ? r && yp(e, 80) : 2097152 == (2097152 & h) ? (d = 2162700 === h ? Dd(e, t, void 0, 1, 0, 0, 2, 32, f, g, b) : Sd(e, t, void 0, 1, 0, 0, 2, 32, f, g, b), u = e.destructible, 256 & t && 64 & u && yp(e, 61), e.assignable = 16 & u ? 2 : 1, d = dd(e, 134217728 | t, d, 0, 0, e.tokenPos, e.linePos, e.colPos)) : d = ud(e, 134217728 | t, 1, 0, 1, f, g, b);
            if (262144 == (262144 & e.token)) {
              if (274549 === e.token) {
                2 & e.assignable && yp(e, 78, r ? "await" : "of"), vu(e, d), ru(e, 32768 | t), c = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos), Eu(e, 32768 | t, 16);
                return _u(e, t, i, s, o, {type: "ForOfStatement", left: d, right: c, body: Wu(e, t, n, a), await: r})
              }
              2 & e.assignable && yp(e, 78, "in"), vu(e, d), ru(e, 32768 | t), r && yp(e, 80), c = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos), Eu(e, 32768 | t, 16);
              return _u(e, t, i, s, o, {type: "ForInStatement", body: Wu(e, t, n, a), left: d, right: c})
            }
            r && yp(e, 80);
            m || (8 & u && 1077936157 !== e.token && yp(e, 78, "loop"), d = od(e, 134217728 | t, 0, 0, f, g, b, d));
            18 === e.token && (d = id(e, t, 0, e.tokenPos, e.linePos, e.colPos, d));
            Eu(e, 32768 | t, 1074790417), 1074790417 !== e.token && (l = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos));
            Eu(e, 32768 | t, 1074790417), 16 !== e.token && (p = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos));
            Eu(e, 32768 | t, 16);
            const x = Wu(e, t, n, a);
            return _u(e, t, i, s, o, {type: "ForStatement", init: d, test: l, update: p, body: x})
          }(e, t, n, i, o, r, c);
        case 20564:
          return function (e, t, n, a, i, s, o) {
            ru(e, 32768 | t);
            const r = Wu(e, t, n, a);
            Eu(e, t, 20580), Eu(e, 32768 | t, 67174411);
            const c = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
            return Eu(e, 32768 | t, 16), xu(e, t, 1074790417), _u(e, t, i, s, o, {
              type: "DoWhileStatement",
              body: r,
              test: c
            })
          }(e, t, n, i, o, r, c);
        case 20580:
          return function (e, t, n, a, i, s, o) {
            ru(e, t), Eu(e, 32768 | t, 67174411);
            const r = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
            Eu(e, 32768 | t, 16);
            const c = Wu(e, t, n, a);
            return _u(e, t, i, s, o, {type: "WhileStatement", test: r, body: c})
          }(e, t, n, i, o, r, c);
        case 86112:
          return function (e, t, n, a, i, s, o) {
            ru(e, t), Eu(e, 32768 | t, 67174411);
            const r = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
            Eu(e, t, 16), Eu(e, t, 2162700);
            const c = [];
            let l = 0;
            n && (n = Iu(n, 8));
            for (; 1074790415 !== e.token;) {
              const {tokenPos: i, linePos: s, colPos: o} = e;
              let r = null;
              const p = [];
              for (xu(e, 32768 | t, 20558) ? r = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos) : (Eu(e, 32768 | t, 20563), l && yp(e, 87), l = 1), Eu(e, 32768 | t, 21); 20558 !== e.token && 1074790415 !== e.token && 20563 !== e.token;) p.push(Fu(e, 4096 | t, n, 2, {$: a}));
              c.push(_u(e, t, i, s, o, {type: "SwitchCase", test: r, consequent: p}))
            }
            return Eu(e, 32768 | t, 1074790415), _u(e, t, i, s, o, {type: "SwitchStatement", discriminant: r, cases: c})
          }(e, t, n, i, o, r, c);
        case 1074790417:
          return function (e, t, n, a, i) {
            return ru(e, 32768 | t), _u(e, t, n, a, i, {type: "EmptyStatement"})
          }(e, t, o, r, c);
        case 2162700:
          return ju(e, t, n ? Iu(n, 2) : n, i, o, r, c);
        case 86114:
          return function (e, t, n, a, i) {
            ru(e, 32768 | t), 1 & e.flags && yp(e, 88);
            const s = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
            return fu(e, 32768 | t), _u(e, t, n, a, i, {type: "ThrowStatement", argument: s})
          }(e, t, o, r, c);
        case 20557:
          return function (e, t, n, a, i, s) {
            ru(e, 32768 | t);
            let o = null;
            if (0 == (1 & e.flags) && 143360 & e.token) {
              const {tokenValue: a} = e;
              o = Ad(e, 32768 | t, 0), yu(e, n, a, 0) || yp(e, 135, a)
            } else 0 == (135168 & t) && yp(e, 67);
            return fu(e, 32768 | t), _u(e, t, a, i, s, {type: "BreakStatement", label: o})
          }(e, t, i, o, r, c);
        case 20561:
          return function (e, t, n, a, i, s) {
            0 == (131072 & t) && yp(e, 66);
            ru(e, t);
            let o = null;
            if (0 == (1 & e.flags) && 143360 & e.token) {
              const {tokenValue: a} = e;
              o = Ad(e, 32768 | t, 0), yu(e, n, a, 1) || yp(e, 135, a)
            }
            return fu(e, 32768 | t), _u(e, t, a, i, s, {type: "ContinueStatement", label: o})
          }(e, t, i, o, r, c);
        case 20579:
          return function (e, t, n, a, i, s, o) {
            ru(e, 32768 | t);
            const r = n ? Iu(n, 32) : void 0, c = ju(e, t, r, {$: a}, e.tokenPos, e.linePos, e.colPos), {
              tokenPos: l,
              linePos: p,
              colPos: u
            } = e, d = xu(e, 32768 | t, 20559) ? function (e, t, n, a, i, s, o) {
              let r = null, c = n;
              xu(e, t, 67174411) && (n && (n = Iu(n, 4)), r = Qd(e, t, n, 2097152 == (2097152 & e.token) ? 256 : 512, 0, e.tokenPos, e.linePos, e.colPos), 18 === e.token ? yp(e, 84) : 1077936157 === e.token && yp(e, 85), Eu(e, 32768 | t, 16), n && (c = Iu(n, 64)));
              const l = ju(e, t, c, {$: a}, e.tokenPos, e.linePos, e.colPos);
              return _u(e, t, i, s, o, {type: "CatchClause", param: r, body: l})
            }(e, t, n, a, l, p, u) : null;
            let m = null;
            if (20568 === e.token) {
              ru(e, 32768 | t);
              m = ju(e, t, r ? Iu(n, 4) : void 0, {$: a}, e.tokenPos, e.linePos, e.colPos)
            }
            d || m || yp(e, 86);
            return _u(e, t, i, s, o, {type: "TryStatement", block: c, handler: d, finalizer: m})
          }(e, t, n, i, o, r, c);
        case 20581:
          return function (e, t, n, a, i, s, o) {
            ru(e, t), 1024 & t && yp(e, 89);
            Eu(e, 32768 | t, 67174411);
            const r = sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
            Eu(e, 32768 | t, 16);
            const c = Hu(e, t, n, 2, a, 0, e.tokenPos, e.linePos, e.colPos);
            return _u(e, t, i, s, o, {type: "WithStatement", object: r, body: c})
          }(e, t, n, i, o, r, c);
        case 20562:
          return function (e, t, n, a, i) {
            return ru(e, 32768 | t), fu(e, 32768 | t), _u(e, t, n, a, i, {type: "DebuggerStatement"})
          }(e, t, o, r, c);
        case 209007:
          return zu(e, t, n, a, i, 0, o, r, c);
        case 20559:
          yp(e, 157);
        case 20568:
          yp(e, 158);
        case 86106:
          yp(e, 1024 & t ? 74 : 0 == (256 & t) ? 76 : 75);
        case 86096:
          yp(e, 77);
        default:
          return function (e, t, n, a, i, s, o, r, c) {
            const {tokenValue: l, token: p} = e;
            let u;
            if (241739 === p) u = Ad(e, t, 0), 1024 & t && yp(e, 83), 69271571 === e.token && yp(e, 82); else u = hd(e, t, 2, 0, 1, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
            if (143360 & p && 21 === e.token) return qu(e, t, n, a, i, l, u, p, s, o, r, c);
            u = dd(e, t, u, 0, 0, o, r, c), u = od(e, t, 0, 0, o, r, c, u), 18 === e.token && (u = id(e, t, 0, o, r, c, u));
            return Gu(e, t, u, o, r, c)
          }(e, t, n, a, i, s, o, r, c)
      }
    }

    function ju(e, t, n, a, i, s, o) {
      const r = [];
      for (Eu(e, 32768 | t, 2162700); 1074790415 !== e.token;) r.push(Fu(e, t, n, 2, {$: a}));
      return Eu(e, 32768 | t, 1074790415), _u(e, t, i, s, o, {type: "BlockStatement", body: r})
    }

    function Gu(e, t, n, a, i, s) {
      return fu(e, 32768 | t), _u(e, t, a, i, s, {type: "ExpressionStatement", expression: n})
    }

    function qu(e, t, n, a, i, s, o, r, c, l, p, u) {
      ku(e, t, 0, r, 1), function (e, t, n) {
        let a = t;
        for (; a;) a["$" + n] && yp(e, 133, n), a = a.$;
        t["$" + n] = 1
      }(e, i, s), ru(e, 32768 | t);
      return _u(e, t, l, p, u, {
        type: "LabeledStatement",
        label: o,
        body: c && 0 == (1024 & t) && 256 & t && 86106 === e.token ? _d(e, t, Iu(n, 2), a, 0, 0, 0, e.tokenPos, e.linePos, e.colPos) : Hu(e, t, n, a, i, c, e.tokenPos, e.linePos, e.colPos)
      })
    }

    function zu(e, t, n, a, i, s, o, r, c) {
      const {token: l, tokenValue: p} = e;
      let u = Ad(e, t, 0);
      if (21 === e.token) return qu(e, t, n, a, i, p, u, l, 1, o, r, c);
      const d = 1 & e.flags;
      if (!d) {
        if (86106 === e.token) return s || yp(e, 120), _d(e, t, n, a, 1, 0, 1, o, r, c);
        if (143360 == (143360 & e.token)) return u = Fd(e, t, 1, o, r, c), 18 === e.token && (u = id(e, t, 0, o, r, c, u)), Gu(e, t, u, o, r, c)
      }
      return 67174411 === e.token ? u = Hd(e, t, u, 1, 1, 0, d, o, r, c) : (10 === e.token && (Mu(e, t, l, 1), u = Pd(e, t, e.tokenValue, u, 0, 1, 0, o, r, c)), e.assignable = 1), u = dd(e, t, u, 0, 0, o, r, c), 18 === e.token && (u = id(e, t, 0, o, r, c, u)), u = od(e, t, 0, 0, o, r, c, u), e.assignable = 1, Gu(e, t, u, o, r, c)
    }

    function Yu(e, t, n, a, i, s, o) {
      return 1074790417 !== a && (e.assignable = 2, n = dd(e, t, n, 0, 0, i, s, o), 1074790417 !== e.token && (n = od(e, t, 0, 0, i, s, o, n), 18 === e.token && (n = id(e, t, 0, i, s, o, n))), fu(e, 32768 | t)), 8 & t && "Literal" === n.type && "string" == typeof n.value ? _u(e, t, i, s, o, {
        type: "ExpressionStatement",
        expression: n,
        directive: n.raw.slice(1, -1)
      }) : _u(e, t, i, s, o, {type: "ExpressionStatement", expression: n})
    }

    function Vu(e, t, n, a, i, s, o) {
      return 1024 & t || 0 == (256 & t) || 86106 !== e.token ? Hu(e, t, n, 0, {$: a}, 0, e.tokenPos, e.linePos, e.colPos) : _d(e, t, Iu(n, 2), 0, 0, 0, 0, i, s, o)
    }

    function Wu(e, t, n, a) {
      return Hu(e, 134217728 ^ (134217728 | t) | 131072, n, 0, {loop: 1, $: a}, 0, e.tokenPos, e.linePos, e.colPos)
    }

    function Qu(e, t, n, a, i, s, o, r) {
      ru(e, t);
      const c = Ku(e, t, n, a, i);
      return fu(e, 32768 | t), _u(e, t, s, o, r, {
        type: "VariableDeclaration",
        kind: 8 & a ? "let" : "const",
        declarations: c
      })
    }

    function Xu(e, t, n, a, i, s, o) {
      ru(e, t);
      const r = Ku(e, t, n, 4, a);
      return fu(e, 32768 | t), _u(e, t, i, s, o, {type: "VariableDeclaration", kind: "var", declarations: r})
    }

    function Ku(e, t, n, a, i) {
      let s = 1;
      const o = [$u(e, t, n, a, i)];
      for (; xu(e, t, 18);) s++, o.push($u(e, t, n, a, i));
      return s > 1 && 32 & i && 262144 & e.token && yp(e, 59, Zp[255 & e.token]), o
    }

    function $u(e, t, n, a, i) {
      const {token: s, tokenPos: o, linePos: r, colPos: c} = e;
      let l = null;
      const p = Qd(e, t, n, a, i, o, r, c);
      return 1077936157 === e.token ? (ru(e, 32768 | t), l = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos), (32 & i || 0 == (2097152 & s)) && (274549 === e.token || 8738868 === e.token && (2097152 & s || 0 == (4 & a) || 1024 & t)) && Cp(o, e.line, e.index - 3, 58, 274549 === e.token ? "of" : "in")) : (16 & a || (2097152 & s) > 0) && 262144 != (262144 & e.token) && yp(e, 57, 16 & a ? "const" : "destructuring"), _u(e, t, o, r, c, {
        type: "VariableDeclarator",
        id: p,
        init: l
      })
    }

    function Ju(e, t, n) {
      return Ou(t, e.token) || yp(e, 115), 537079808 == (537079808 & e.token) && yp(e, 116), n && Du(e, t, n, e.tokenValue, 8, 0), Ad(e, t, 0)
    }

    function Zu(e, t, n) {
      const {tokenPos: a, linePos: i, colPos: s} = e;
      return ru(e, t), Eu(e, t, 77934), 134217728 == (134217728 & e.token) && Cp(a, e.line, e.index, 28, Zp[255 & e.token]), _u(e, t, a, i, s, {
        type: "ImportNamespaceSpecifier",
        local: Ju(e, t, n)
      })
    }

    function ed(e, t, n, a) {
      for (ru(e, t); 143360 & e.token;) {
        let {token: i, tokenValue: s, tokenPos: o, linePos: r, colPos: c} = e;
        const l = Ad(e, t, 0);
        let p;
        xu(e, t, 77934) ? (134217728 == (134217728 & e.token) || 18 === e.token ? yp(e, 104) : ku(e, t, 16, e.token, 0), s = e.tokenValue, p = Ad(e, t, 0)) : (ku(e, t, 16, i, 0), p = l), n && Du(e, t, n, s, 8, 0), a.push(_u(e, t, o, r, c, {
          type: "ImportSpecifier",
          local: p,
          imported: l
        })), 1074790415 !== e.token && Eu(e, t, 18)
      }
      return Eu(e, t, 1074790415), a
    }

    function td(e, t, n, a, i) {
      let s = fd(e, t, _u(e, t, n, a, i, {type: "Identifier", name: "import"}), n, a, i);
      return s = dd(e, t, s, 0, 0, n, a, i), s = od(e, t, 0, 0, n, a, i, s), Gu(e, t, s, n, a, i)
    }

    function nd(e, t, n, a, i) {
      let s = gd(e, t, 0, n, a, i);
      return s = dd(e, t, s, 0, 0, n, a, i), Gu(e, t, s, n, a, i)
    }

    function ad(e, t, n, a, i, s, o, r) {
      let c = hd(e, t, 2, 0, n, a, i, 1, s, o, r);
      return c = dd(e, t, c, i, 0, s, o, r), od(e, t, i, 0, s, o, r, c)
    }

    function id(e, t, n, a, i, s, o) {
      const r = [o];
      for (; xu(e, 32768 | t, 18);) r.push(ad(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos));
      return _u(e, t, a, i, s, {type: "SequenceExpression", expressions: r})
    }

    function sd(e, t, n, a, i, s, o) {
      const r = ad(e, t, a, 0, n, i, s, o);
      return 18 === e.token ? id(e, t, n, i, s, o, r) : r
    }

    function od(e, t, n, a, i, s, o, r) {
      const {token: c} = e;
      if (4194304 == (4194304 & c)) {
        2 & e.assignable && yp(e, 24), (!a && 1077936157 === c && "ArrayExpression" === r.type || "ObjectExpression" === r.type) && vu(e, r), ru(e, 32768 | t);
        const l = ad(e, t, 1, 1, n, e.tokenPos, e.linePos, e.colPos);
        return e.assignable = 2, _u(e, t, i, s, o, a ? {
          type: "AssignmentPattern",
          left: r,
          right: l
        } : {type: "AssignmentExpression", left: r, operator: Zp[255 & c], right: l})
      }
      return 8454144 == (8454144 & c) && (r = ld(e, t, n, i, s, o, 4, c, r)), xu(e, 32768 | t, 22) && (r = cd(e, t, r, i, s, o)), r
    }

    function rd(e, t, n, a, i, s, o, r) {
      const {token: c} = e;
      ru(e, 32768 | t);
      const l = ad(e, t, 1, 1, n, e.tokenPos, e.linePos, e.colPos);
      return r = _u(e, t, i, s, o, a ? {type: "AssignmentPattern", left: r, right: l} : {
        type: "AssignmentExpression",
        left: r,
        operator: Zp[255 & c],
        right: l
      }), e.assignable = 2, r
    }

    function cd(e, t, n, a, i, s) {
      const o = ad(e, 134217728 ^ (134217728 | t), 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
      Eu(e, 32768 | t, 21), e.assignable = 1;
      const r = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
      return e.assignable = 2, _u(e, t, a, i, s, {type: "ConditionalExpression", test: n, consequent: o, alternate: r})
    }

    function ld(e, t, n, a, i, s, o, r, c) {
      const l = 8738868 & -((134217728 & t) > 0);
      let p, u;
      for (e.assignable = 2; 8454144 & e.token && (p = e.token, u = 3840 & p, (524288 & p && 268435456 & r || 524288 & r && 268435456 & p) && yp(e, 160), !(u + ((8457273 === p) << 8) - ((l === p) << 12) <= o));) ru(e, 32768 | t), c = _u(e, t, a, i, s, {
        type: 524288 & p || 268435456 & p ? "LogicalExpression" : "BinaryExpression",
        left: c,
        right: ld(e, t, n, e.tokenPos, e.linePos, e.colPos, u, p, ud(e, t, 0, n, 1, e.tokenPos, e.linePos, e.colPos)),
        operator: Zp[255 & p]
      });
      return 1077936157 === e.token && yp(e, 24), c
    }

    function pd(e, t, n, a, i, s) {
      const {tokenPos: o, linePos: r, colPos: c} = e;
      Eu(e, 32768 | t, 2162700);
      const l = [], p = t;
      if (1074790415 !== e.token) {
        for (; 134283267 === e.token;) {
          const {index: n, tokenPos: a, tokenValue: i, token: s} = e, o = yd(e, t);
          gu(e, n, a, i) && (t |= 1024, 128 & e.flags && Cp(e.index, e.line, e.tokenPos, 64), 64 & e.flags && Cp(e.index, e.line, e.tokenPos, 8)), l.push(Yu(e, t, o, s, a, e.linePos, e.colPos))
        }
        1024 & t && (i && (537079808 == (537079808 & i) && yp(e, 116), 36864 == (36864 & i) && yp(e, 38)), 512 & e.flags && yp(e, 116), 256 & e.flags && yp(e, 115)), 64 & t && n && void 0 !== s && 0 == (1024 & p) && 0 == (8192 & t) && _p(s)
      }
      for (e.flags = 832 ^ (832 | e.flags), e.destructible = 256 ^ (256 | e.destructible); 1074790415 !== e.token;) l.push(Fu(e, t, n, 4, {}));
      return Eu(e, 24 & a ? 32768 | t : t, 1074790415), e.flags &= -193, 1077936157 === e.token && yp(e, 24), _u(e, t, o, r, c, {
        type: "BlockStatement",
        body: l
      })
    }

    function ud(e, t, n, a, i, s, o, r) {
      return dd(e, t, hd(e, t, 2, 0, n, 0, a, i, s, o, r), a, 0, s, o, r)
    }

    function dd(e, t, n, a, i, s, o, r) {
      if (33619968 == (33619968 & e.token) && 0 == (1 & e.flags)) n = function (e, t, n, a, i, s) {
        2 & e.assignable && yp(e, 53);
        const {token: o} = e;
        return ru(e, t), e.assignable = 2, _u(e, t, a, i, s, {
          type: "UpdateExpression",
          argument: n,
          operator: Zp[255 & o],
          prefix: !1
        })
      }(e, t, n, s, o, r); else if (67108864 == (67108864 & e.token)) {
        switch (t = 134217728 ^ (134217728 | t), e.token) {
          case 67108877:
            ru(e, 8192 ^ (1073750016 | t)), e.assignable = 1;
            n = _u(e, t, s, o, r, {type: "MemberExpression", object: n, computed: !1, property: md(e, t)});
            break;
          case 69271571: {
            let i = !1;
            2048 == (2048 & e.flags) && (i = !0, e.flags = 2048 ^ (2048 | e.flags)), ru(e, 32768 | t);
            const {tokenPos: c, linePos: l, colPos: p} = e, u = sd(e, t, a, 1, c, l, p);
            Eu(e, t, 20), e.assignable = 1, n = _u(e, t, s, o, r, {
              type: "MemberExpression",
              object: n,
              computed: !0,
              property: u
            }), i && (e.flags |= 2048);
            break
          }
          case 67174411: {
            if (1024 == (1024 & e.flags)) return e.flags = 1024 ^ (1024 | e.flags), n;
            let i = !1;
            2048 == (2048 & e.flags) && (i = !0, e.flags = 2048 ^ (2048 | e.flags));
            const c = Td(e, t, a);
            e.assignable = 2, n = _u(e, t, s, o, r, {
              type: "CallExpression",
              callee: n,
              arguments: c
            }), i && (e.flags |= 2048);
            break
          }
          case 67108991:
            ru(e, 8192 ^ (1073750016 | t)), e.flags |= 2048, e.assignable = 2, n = function (e, t, n, a, i, s) {
              let o, r = !1;
              69271571 !== e.token && 67174411 !== e.token || 2048 == (2048 & e.flags) && (r = !0, e.flags = 2048 ^ (2048 | e.flags));
              if (69271571 === e.token) {
                ru(e, 32768 | t);
                const {tokenPos: r, linePos: c, colPos: l} = e, p = sd(e, t, 0, 1, r, c, l);
                Eu(e, t, 20), e.assignable = 2, o = _u(e, t, a, i, s, {
                  type: "MemberExpression",
                  object: n,
                  computed: !0,
                  optional: !0,
                  property: p
                })
              } else if (67174411 === e.token) {
                const r = Td(e, t, 0);
                e.assignable = 2, o = _u(e, t, a, i, s, {type: "CallExpression", callee: n, arguments: r, optional: !0})
              } else {
                0 == (143360 & e.token) && yp(e, 155);
                const r = Ad(e, t, 0);
                e.assignable = 2, o = _u(e, t, a, i, s, {
                  type: "MemberExpression",
                  object: n,
                  computed: !1,
                  optional: !0,
                  property: r
                })
              }
              r && (e.flags |= 2048);
              return o
            }(e, t, n, s, o, r);
            break;
          default:
            2048 == (2048 & e.flags) && yp(e, 161), e.assignable = 2, n = _u(e, t, s, o, r, {
              type: "TaggedTemplateExpression",
              tag: n,
              quasi: 67174408 === e.token ? Ed(e, 65536 | t) : xd(e, t, e.tokenPos, e.linePos, e.colPos)
            })
        }
        n = dd(e, t, n, 0, 1, s, o, r)
      }
      return 0 === i && 2048 == (2048 & e.flags) && (e.flags = 2048 ^ (2048 | e.flags), n = _u(e, t, s, o, r, {
        type: "ChainExpression",
        expression: n
      })), n
    }

    function md(e, t) {
      return 0 == (143360 & e.token) && 131 !== e.token && yp(e, 155), 1 & t && 131 === e.token ? Vd(e, t, e.tokenPos, e.linePos, e.colPos) : Ad(e, t, 0)
    }

    function hd(e, t, n, a, i, s, o, r, c, l, p) {
      if (143360 == (143360 & e.token)) {
        switch (e.token) {
          case 209008:
            return function (e, t, n, a, i, s, o) {
              if (a && (e.destructible |= 128), 4194304 & t || 2048 & t && 8192 & t) {
                n && yp(e, 0), 8388608 & t && Cp(e.index, e.line, e.index, 29), ru(e, 32768 | t);
                const a = ud(e, t, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
                return 8457273 === e.token && yp(e, 31), e.assignable = 2, _u(e, t, i, s, o, {
                  type: "AwaitExpression",
                  argument: a
                })
              }
              return 2048 & t && yp(e, 96), Rd(e, t, i, s, o)
            }(e, t, a, o, c, l, p);
          case 241773:
            return function (e, t, n, a, i, s, o) {
              if (n && (e.destructible |= 256), 2097152 & t) {
                ru(e, 32768 | t), 8388608 & t && yp(e, 30), a || yp(e, 24), 22 === e.token && yp(e, 121);
                let n = null, r = !1;
                return 0 == (1 & e.flags) && (r = xu(e, 32768 | t, 8457014), (77824 & e.token || r) && (n = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos))), e.assignable = 2, _u(e, t, i, s, o, {
                  type: "YieldExpression",
                  argument: n,
                  delegate: r
                })
              }
              return 1024 & t && yp(e, 95, "yield"), Rd(e, t, i, s, o)
            }(e, t, o, i, c, l, p);
          case 209007:
            return function (e, t, n, a, i, s, o, r, c, l) {
              const {token: p} = e, u = Ad(e, t, s), {flags: d} = e;
              if (0 == (1 & d)) {
                if (86106 === e.token) return Cd(e, t, 1, n, r, c, l);
                if (143360 == (143360 & e.token)) return a || yp(e, 0), Fd(e, t, i, r, c, l)
              }
              return o || 67174411 !== e.token ? 10 === e.token ? (Mu(e, t, p, 1), o && yp(e, 49), Pd(e, t, e.tokenValue, u, o, i, 0, r, c, l)) : u : Hd(e, t, u, i, 1, 0, d, r, c, l)
            }(e, t, o, r, i, s, a, c, l, p)
        }
        const {token: u, tokenValue: d} = e, m = Ad(e, 65536 | t, s);
        return 10 === e.token ? (r || yp(e, 0), Mu(e, t, u, 1), Pd(e, t, d, m, a, i, 0, c, l, p)) : (16384 & t && 537079928 === u && yp(e, 127), 241739 === u && (1024 & t && yp(e, 110), 24 & n && yp(e, 98)), e.assignable = 1024 & t && 537079808 == (537079808 & u) ? 2 : 1, m)
      }
      if (134217728 == (134217728 & e.token)) return yd(e, t);
      switch (e.token) {
        case 33619995:
        case 33619996:
          return function (e, t, n, a, i, s, o) {
            n && yp(e, 54), a || yp(e, 0);
            const {token: r} = e;
            ru(e, 32768 | t);
            const c = ud(e, t, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
            return 2 & e.assignable && yp(e, 53), e.assignable = 2, _u(e, t, i, s, o, {
              type: "UpdateExpression",
              argument: c,
              operator: Zp[255 & r],
              prefix: !0
            })
          }(e, t, a, r, c, l, p);
        case 16863278:
        case 16842800:
        case 16842801:
        case 25233970:
        case 25233971:
        case 16863277:
        case 16863279:
          return function (e, t, n, a, i, s, o) {
            n || yp(e, 0);
            const r = e.token;
            ru(e, 32768 | t);
            const c = ud(e, t, 0, o, 1, e.tokenPos, e.linePos, e.colPos);
            var l;
            return 8457273 === e.token && yp(e, 31), 1024 & t && 16863278 === r && ("Identifier" === c.type ? yp(e, 118) : (l = c).property && "PrivateIdentifier" === l.property.type && yp(e, 124)), e.assignable = 2, _u(e, t, a, i, s, {
              type: "UnaryExpression",
              operator: Zp[255 & r],
              argument: c,
              prefix: !0
            })
          }(e, t, r, c, l, p, o);
        case 86106:
          return Cd(e, t, 0, o, c, l, p);
        case 2162700:
          return function (e, t, n, a, i, s, o) {
            const r = Dd(e, t, void 0, n, a, 0, 2, 0, i, s, o);
            256 & t && 64 & e.destructible && yp(e, 61);
            8 & e.destructible && yp(e, 60);
            return r
          }(e, t, i ? 0 : 1, o, c, l, p);
        case 69271571:
          return function (e, t, n, a, i, s, o) {
            const r = Sd(e, t, void 0, n, a, 0, 2, 0, i, s, o);
            256 & t && 64 & e.destructible && yp(e, 61);
            8 & e.destructible && yp(e, 60);
            return r
          }(e, t, i ? 0 : 1, o, c, l, p);
        case 67174411:
          return function (e, t, n, a, i, s, o, r) {
            e.flags = 128 ^ (128 | e.flags);
            const {tokenPos: c, linePos: l, colPos: p} = e;
            ru(e, 1073774592 | t);
            const u = 64 & t ? Iu({parent: void 0, type: 2}, 1024) : void 0;
            if (xu(e, t = 134217728 ^ (134217728 | t), 16)) return Od(e, t, u, [], n, 0, s, o, r);
            let d, m = 0;
            e.destructible &= -385;
            let h = [], f = 0, g = 0;
            const {tokenPos: b, linePos: x, colPos: E} = e;
            e.assignable = 1;
            for (; 16 !== e.token;) {
              const {token: n, tokenPos: s, linePos: o, colPos: r} = e;
              if (143360 & n) u && Du(e, t, u, e.tokenValue, 1, 0), d = hd(e, t, a, 0, 1, 0, 1, 1, s, o, r), 16 === e.token || 18 === e.token ? 2 & e.assignable ? (m |= 16, g = 1) : 537079808 != (537079808 & n) && 36864 != (36864 & n) || (g = 1) : (1077936157 === e.token ? g = 1 : m |= 16, d = dd(e, t, d, 1, 0, s, o, r), 16 !== e.token && 18 !== e.token && (d = od(e, t, 1, 0, s, o, r, d))); else {
                if (2097152 != (2097152 & n)) {
                  if (14 === n) {
                    d = Id(e, t, u, 16, a, i, 0, 1, 0, s, o, r), 16 & e.destructible && yp(e, 72), g = 1, !f || 16 !== e.token && 18 !== e.token || h.push(d), m |= 8;
                    break
                  }
                  if (m |= 16, d = ad(e, t, 1, 0, 1, s, o, r), !f || 16 !== e.token && 18 !== e.token || h.push(d), 18 === e.token && (f || (f = 1, h = [d])), f) {
                    for (; xu(e, 32768 | t, 18);) h.push(ad(e, t, 1, 0, 1, e.tokenPos, e.linePos, e.colPos));
                    e.assignable = 2, d = _u(e, t, b, x, E, {type: "SequenceExpression", expressions: h})
                  }
                  return Eu(e, t, 16), e.destructible = m, d
                }
                d = 2162700 === n ? Dd(e, 1073741824 | t, u, 0, 1, 0, a, i, s, o, r) : Sd(e, 1073741824 | t, u, 0, 1, 0, a, i, s, o, r), m |= e.destructible, g = 1, e.assignable = 2, 16 !== e.token && 18 !== e.token && (8 & m && yp(e, 119), d = dd(e, t, d, 0, 0, s, o, r), m |= 16, 16 !== e.token && 18 !== e.token && (d = od(e, t, 0, 0, s, o, r, d)))
              }
              if (!f || 16 !== e.token && 18 !== e.token || h.push(d), !xu(e, 32768 | t, 18)) break;
              if (f || (f = 1, h = [d]), 16 === e.token) {
                m |= 8;
                break
              }
            }
            f && (e.assignable = 2, d = _u(e, t, b, x, E, {type: "SequenceExpression", expressions: h}));
            Eu(e, t, 16), 16 & m && 8 & m && yp(e, 146);
            if (m |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0, 10 === e.token) return 48 & m && yp(e, 47), 4196352 & t && 128 & m && yp(e, 29), 2098176 & t && 256 & m && yp(e, 30), g && (e.flags |= 128), Od(e, t, u, f ? h : [d], n, 0, s, o, r);
            8 & m && yp(e, 140);
            return e.destructible = 256 ^ (256 | e.destructible) | m, 128 & t ? _u(e, t, c, l, p, {
              type: "ParenthesizedExpression",
              expression: d
            }) : d
          }(e, t, i, 1, 0, c, l, p);
        case 86021:
        case 86022:
        case 86023:
          return function (e, t, n, a, i) {
            const s = Zp[255 & e.token], o = 86023 === e.token ? null : "true" === s;
            return ru(e, t), e.assignable = 2, _u(e, t, n, a, i, 512 & t ? {
              type: "Literal",
              value: o,
              raw: s
            } : {type: "Literal", value: o})
          }(e, t, c, l, p);
        case 86113:
          return function (e, t) {
            const {tokenPos: n, linePos: a, colPos: i} = e;
            return ru(e, t), e.assignable = 2, _u(e, t, n, a, i, {type: "ThisExpression"})
          }(e, t);
        case 65540:
          return function (e, t, n, a, i) {
            const {tokenRaw: s, tokenRegExp: o, tokenValue: r} = e;
            return ru(e, t), e.assignable = 2, _u(e, t, n, a, i, 512 & t ? {
              type: "Literal",
              value: r,
              regex: o,
              raw: s
            } : {type: "Literal", value: r, regex: o})
          }(e, t, c, l, p);
        case 133:
        case 86096:
          return function (e, t, n, a, i, s) {
            let o = null, r = null;
            const c = Gd(e, t = 16777216 ^ (16778240 | t));
            c.length && (a = e.tokenPos, i = e.linePos, s = e.colPos);
            ru(e, t), 4096 & e.token && 20567 !== e.token && (Au(e, t, e.token) && yp(e, 115), 537079808 == (537079808 & e.token) && yp(e, 116), o = Ad(e, t, 0));
            let l = t;
            xu(e, 32768 | t, 20567) ? (r = ud(e, t, 0, n, 0, e.tokenPos, e.linePos, e.colPos), l |= 524288) : l = 524288 ^ (524288 | l);
            const p = zd(e, l, t, void 0, 2, 0, n);
            return e.assignable = 2, _u(e, t, a, i, s, 1 & t ? {
              type: "ClassExpression",
              id: o,
              superClass: r,
              decorators: c,
              body: p
            } : {type: "ClassExpression", id: o, superClass: r, body: p})
          }(e, t, o, c, l, p);
        case 86111:
          return function (e, t, n, a, i) {
            switch (ru(e, t), e.token) {
              case 67108991:
                yp(e, 162);
              case 67174411:
                0 == (524288 & t) && yp(e, 26), 16384 & t && yp(e, 27), e.assignable = 2;
                break;
              case 69271571:
              case 67108877:
                0 == (262144 & t) && yp(e, 27), 16384 & t && yp(e, 27), e.assignable = 1;
                break;
              default:
                yp(e, 28, "super")
            }
            return _u(e, t, n, a, i, {type: "Super"})
          }(e, t, c, l, p);
        case 67174409:
          return xd(e, t, c, l, p);
        case 67174408:
          return Ed(e, t);
        case 86109:
          return function (e, t, n, a, i, s) {
            const o = Ad(e, 32768 | t, 0), {tokenPos: r, linePos: c, colPos: l} = e;
            if (xu(e, t, 67108877)) {
              if (67108864 & t && 143494 === e.token) return e.assignable = 2, function (e, t, n, a, i, s) {
                const o = Ad(e, t, 0);
                return _u(e, t, a, i, s, {type: "MetaProperty", meta: n, property: o})
              }(e, t, o, a, i, s);
              yp(e, 92)
            }
            e.assignable = 2, 16842752 == (16842752 & e.token) && yp(e, 63, Zp[255 & e.token]);
            const p = hd(e, t, 2, 1, 0, 0, n, 1, r, c, l);
            t = 134217728 ^ (134217728 | t), 67108991 === e.token && yp(e, 163);
            const u = Ud(e, t, p, n, r, c, l);
            return e.assignable = 2, _u(e, t, a, i, s, {
              type: "NewExpression",
              callee: u,
              arguments: 67174411 === e.token ? Td(e, t, n) : []
            })
          }(e, t, o, c, l, p);
        case 134283389:
          return bd(e, t, c, l, p);
        case 131:
          return Vd(e, t, c, l, p);
        case 86108:
          return function (e, t, n, a, i, s, o) {
            let r = Ad(e, t, 0);
            if (67108877 === e.token) return fd(e, t, r, i, s, o);
            n && yp(e, 138);
            return r = gd(e, t, a, i, s, o), e.assignable = 2, dd(e, t, r, a, 0, i, s, o)
          }(e, t, a, o, c, l, p);
        case 8456258:
          if (16 & t) return Kd(e, t, 1, c, l, p);
        default:
          if (Ou(t, e.token)) return Rd(e, t, c, l, p);
          yp(e, 28, Zp[255 & e.token])
      }
    }

    function fd(e, t, n, a, i, s) {
      return 0 == (2048 & t) && yp(e, 164), ru(e, t), 143495 !== e.token && "meta" !== e.tokenValue && yp(e, 28, Zp[255 & e.token]), e.assignable = 2, _u(e, t, a, i, s, {
        type: "MetaProperty",
        meta: n,
        property: Ad(e, t, 0)
      })
    }

    function gd(e, t, n, a, i, s) {
      Eu(e, 32768 | t, 67174411), 14 === e.token && yp(e, 139);
      const o = ad(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos);
      return Eu(e, t, 16), _u(e, t, a, i, s, {type: "ImportExpression", source: o})
    }

    function bd(e, t, n, a, i) {
      const {tokenRaw: s, tokenValue: o} = e;
      return ru(e, t), e.assignable = 2, _u(e, t, n, a, i, 512 & t ? {
        type: "Literal",
        value: o,
        bigint: s.slice(0, -1),
        raw: s
      } : {type: "Literal", value: o, bigint: s.slice(0, -1)})
    }

    function xd(e, t, n, a, i) {
      e.assignable = 2;
      const {tokenValue: s, tokenRaw: o, tokenPos: r, linePos: c, colPos: l} = e;
      Eu(e, t, 67174409);
      return _u(e, t, n, a, i, {type: "TemplateLiteral", expressions: [], quasis: [vd(e, t, s, o, r, c, l, !0)]})
    }

    function Ed(e, t) {
      t = 134217728 ^ (134217728 | t);
      const {tokenValue: n, tokenRaw: a, tokenPos: i, linePos: s, colPos: o} = e;
      Eu(e, 32768 | t, 67174408);
      const r = [vd(e, t, n, a, i, s, o, !1)], c = [sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)];
      for (1074790415 !== e.token && yp(e, 81); 67174409 !== (e.token = Kp(e, t));) {
        const {tokenValue: n, tokenRaw: a, tokenPos: i, linePos: s, colPos: o} = e;
        Eu(e, 32768 | t, 67174408), r.push(vd(e, t, n, a, i, s, o, !1)), c.push(sd(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)), 1074790415 !== e.token && yp(e, 81)
      }
      {
        const {tokenValue: n, tokenRaw: a, tokenPos: i, linePos: s, colPos: o} = e;
        Eu(e, t, 67174409), r.push(vd(e, t, n, a, i, s, o, !0))
      }
      return _u(e, t, i, s, o, {type: "TemplateLiteral", expressions: c, quasis: r})
    }

    function vd(e, t, n, a, i, s, o, r) {
      const c = _u(e, t, i, s, o, {type: "TemplateElement", value: {cooked: n, raw: a}, tail: r}), l = r ? 1 : 2;
      return 2 & t && (c.start += 1, c.range[0] += 1, c.end -= l, c.range[1] -= l), 4 & t && (c.loc.start.column += 1, c.loc.end.column -= l), c
    }

    function kd(e, t, n, a, i) {
      Eu(e, 32768 | (t = 134217728 ^ (134217728 | t)), 14);
      const s = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
      return e.assignable = 1, _u(e, t, n, a, i, {type: "SpreadElement", argument: s})
    }

    function Td(e, t, n) {
      ru(e, 32768 | t);
      const a = [];
      if (16 === e.token) return ru(e, t), a;
      for (; 16 !== e.token && (14 === e.token ? a.push(kd(e, t, e.tokenPos, e.linePos, e.colPos)) : a.push(ad(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos)), 18 === e.token) && (ru(e, 32768 | t), 16 !== e.token);) ;
      return Eu(e, t, 16), a
    }

    function Ad(e, t, n) {
      const {tokenValue: a, tokenPos: i, linePos: s, colPos: o} = e;
      return ru(e, t), _u(e, t, i, s, o, 268435456 & t ? {
        type: "Identifier",
        name: a,
        pattern: 1 === n
      } : {type: "Identifier", name: a})
    }

    function yd(e, t) {
      const {tokenValue: n, tokenRaw: a, tokenPos: i, linePos: s, colPos: o} = e;
      return 134283389 === e.token ? bd(e, t, i, s, o) : (ru(e, t), e.assignable = 2, _u(e, t, i, s, o, 512 & t ? {
        type: "Literal",
        value: n,
        raw: a
      } : {type: "Literal", value: n}))
    }

    function _d(e, t, n, a, i, s, o, r, c, l) {
      ru(e, 32768 | t);
      const p = i ? bu(e, t, 8457014) : 0;
      let u, d = null, m = n ? {parent: void 0, type: 2} : void 0;
      if (67174411 === e.token) 0 == (1 & s) && yp(e, 37, "Function"); else {
        const i = 4 & a && (0 == (8192 & t) || 0 == (2048 & t)) ? 4 : 64;
        Tu(e, t | (3072 & t) << 11, e.token), n && (4 & i ? Lu(e, t, n, e.tokenValue, i) : Du(e, t, n, e.tokenValue, i, a), m = Iu(m, 256), s && 2 & s && Ru(e, e.tokenValue)), u = e.token, 143360 & e.token ? d = Ad(e, t, 0) : yp(e, 28, Zp[255 & e.token])
      }
      t = 32243712 ^ (32243712 | t) | 67108864 | 2 * o + p << 21 | (p ? 0 : 1073741824), n && (m = Iu(m, 512));
      return _u(e, t, r, c, l, {
        type: "FunctionDeclaration",
        id: d,
        params: Bd(e, 8388608 | t, m, 0, 1),
        body: pd(e, 143360 ^ (143360 | t), n ? Iu(m, 128) : m, 8, u, n ? m.scopeError : void 0),
        async: 1 === o,
        generator: 1 === p
      })
    }

    function Cd(e, t, n, a, i, s, o) {
      ru(e, 32768 | t);
      const r = bu(e, t, 8457014), c = 2 * n + r << 21;
      let l, p = null, u = 64 & t ? {parent: void 0, type: 2} : void 0;
      (176128 & e.token) > 0 && (Tu(e, 32243712 ^ (32243712 | t) | c, e.token), u && (u = Iu(u, 256)), l = e.token, p = Ad(e, t, 0)), t = 32243712 ^ (32243712 | t) | 67108864 | c | (r ? 0 : 1073741824), u && (u = Iu(u, 512));
      const d = Bd(e, 8388608 | t, u, a, 1), m = pd(e, -134377473 & t, u ? Iu(u, 128) : u, 0, l, void 0);
      return e.assignable = 2, _u(e, t, i, s, o, {
        type: "FunctionExpression",
        id: p,
        params: d,
        body: m,
        async: 1 === n,
        generator: 1 === r
      })
    }

    function Sd(e, t, n, a, i, s, o, r, c, l, p) {
      ru(e, 32768 | t);
      const u = [];
      let d = 0;
      for (t = 134217728 ^ (134217728 | t); 20 !== e.token;) if (xu(e, 32768 | t, 18)) u.push(null); else {
        let a;
        const {token: c, tokenPos: l, linePos: p, colPos: m, tokenValue: h} = e;
        if (143360 & c) if (a = hd(e, t, o, 0, 1, 0, i, 1, l, p, m), 1077936157 === e.token) {
          2 & e.assignable && yp(e, 24), ru(e, 32768 | t), n && Nu(e, t, n, h, o, r);
          const c = ad(e, t, 1, 1, i, e.tokenPos, e.linePos, e.colPos);
          a = _u(e, t, l, p, m, s ? {type: "AssignmentPattern", left: a, right: c} : {
            type: "AssignmentExpression",
            operator: "=",
            left: a,
            right: c
          }), d |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0
        } else 18 === e.token || 20 === e.token ? (2 & e.assignable ? d |= 16 : n && Nu(e, t, n, h, o, r), d |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0) : (d |= 1 & o ? 32 : 0 == (2 & o) ? 16 : 0, a = dd(e, t, a, i, 0, l, p, m), 18 !== e.token && 20 !== e.token ? (1077936157 !== e.token && (d |= 16), a = od(e, t, i, s, l, p, m, a)) : 1077936157 !== e.token && (d |= 2 & e.assignable ? 16 : 32)); else 2097152 & c ? (a = 2162700 === e.token ? Dd(e, t, n, 0, i, s, o, r, l, p, m) : Sd(e, t, n, 0, i, s, o, r, l, p, m), d |= e.destructible, e.assignable = 16 & e.destructible ? 2 : 1, 18 === e.token || 20 === e.token ? 2 & e.assignable && (d |= 16) : 8 & e.destructible ? yp(e, 69) : (a = dd(e, t, a, i, 0, l, p, m), d = 2 & e.assignable ? 16 : 0, 18 !== e.token && 20 !== e.token ? a = od(e, t, i, s, l, p, m, a) : 1077936157 !== e.token && (d |= 2 & e.assignable ? 16 : 32))) : 14 === c ? (a = Id(e, t, n, 20, o, r, 0, i, s, l, p, m), d |= e.destructible, 18 !== e.token && 20 !== e.token && yp(e, 28, Zp[255 & e.token])) : (a = ud(e, t, 1, 0, 1, l, p, m), 18 !== e.token && 20 !== e.token ? (a = od(e, t, i, s, l, p, m, a), 0 == (3 & o) && 67174411 === c && (d |= 16)) : 2 & e.assignable ? d |= 16 : 67174411 === c && (d |= 1 & e.assignable && 3 & o ? 32 : 16));
        if (u.push(a), !xu(e, 32768 | t, 18)) break;
        if (20 === e.token) break
      }
      Eu(e, t, 20);
      const m = _u(e, t, c, l, p, {type: s ? "ArrayPattern" : "ArrayExpression", elements: u});
      return !a && 4194304 & e.token ? wd(e, t, d, i, s, c, l, p, m) : (e.destructible = d, m)
    }

    function wd(e, t, n, a, i, s, o, r, c) {
      1077936157 !== e.token && yp(e, 24), ru(e, 32768 | t), 16 & n && yp(e, 24), i || vu(e, c);
      const {tokenPos: l, linePos: p, colPos: u} = e, d = ad(e, t, 1, 1, a, l, p, u);
      return e.destructible = 72 ^ (72 | n) | (128 & e.destructible ? 128 : 0) | (256 & e.destructible ? 256 : 0), _u(e, t, s, o, r, i ? {
        type: "AssignmentPattern",
        left: c,
        right: d
      } : {type: "AssignmentExpression", left: c, operator: "=", right: d})
    }

    function Id(e, t, n, a, i, s, o, r, c, l, p, u) {
      ru(e, 32768 | t);
      let d = null, m = 0, {token: h, tokenValue: f, tokenPos: g, linePos: b, colPos: x} = e;
      if (143360 & h) e.assignable = 1, d = hd(e, t, i, 0, 1, 0, r, 1, g, b, x), h = e.token, d = dd(e, t, d, r, 0, g, b, x), 18 !== e.token && e.token !== a && (2 & e.assignable && 1077936157 === e.token && yp(e, 69), m |= 16, d = od(e, t, r, c, g, b, x, d)), 2 & e.assignable ? m |= 16 : h === a || 18 === h ? n && Nu(e, t, n, f, i, s) : m |= 32, m |= 128 & e.destructible ? 128 : 0; else if (h === a) yp(e, 39); else {
        if (!(2097152 & h)) {
          m |= 32, d = ud(e, t, 1, r, 1, e.tokenPos, e.linePos, e.colPos);
          const {token: n, tokenPos: i, linePos: s, colPos: o} = e;
          return 1077936157 === n && n !== a && 18 !== n ? (2 & e.assignable && yp(e, 24), d = od(e, t, r, c, i, s, o, d), m |= 16) : (18 === n ? m |= 16 : n !== a && (d = od(e, t, r, c, i, s, o, d)), m |= 1 & e.assignable ? 32 : 16), e.destructible = m, e.token !== a && 18 !== e.token && yp(e, 156), _u(e, t, l, p, u, {
            type: c ? "RestElement" : "SpreadElement",
            argument: d
          })
        }
        d = 2162700 === e.token ? Dd(e, t, n, 1, r, c, i, s, g, b, x) : Sd(e, t, n, 1, r, c, i, s, g, b, x), h = e.token, 1077936157 !== h && h !== a && 18 !== h ? (8 & e.destructible && yp(e, 69), d = dd(e, t, d, r, 0, g, b, x), m |= 2 & e.assignable ? 16 : 0, 4194304 == (4194304 & e.token) ? (1077936157 !== e.token && (m |= 16), d = od(e, t, r, c, g, b, x, d)) : (8454144 == (8454144 & e.token) && (d = ld(e, t, 1, g, b, x, 4, h, d)), xu(e, 32768 | t, 22) && (d = cd(e, t, d, g, b, x)), m |= 2 & e.assignable ? 16 : 32)) : m |= 1074790415 === a && 1077936157 !== h ? 16 : e.destructible
      }
      if (e.token !== a) if (1 & i && (m |= o ? 16 : 32), xu(e, 32768 | t, 1077936157)) {
        16 & m && yp(e, 24), vu(e, d);
        const n = ad(e, t, 1, 1, r, e.tokenPos, e.linePos, e.colPos);
        d = _u(e, t, g, b, x, c ? {type: "AssignmentPattern", left: d, right: n} : {
          type: "AssignmentExpression",
          left: d,
          operator: "=",
          right: n
        }), m = 16
      } else m |= 16;
      return e.destructible = m, _u(e, t, l, p, u, {type: c ? "RestElement" : "SpreadElement", argument: d})
    }

    function Nd(e, t, n, a, i, s, o) {
      const r = 0 == (64 & n) ? 31981568 : 14680064;
      let c = 64 & (t = (t | r) ^ r | (88 & n) << 18 | 100925440) ? Iu({parent: void 0, type: 2}, 512) : void 0;
      const l = function (e, t, n, a, i, s) {
        Eu(e, t, 67174411);
        const o = [];
        if (e.flags = 128 ^ (128 | e.flags), 16 === e.token) return 512 & a && yp(e, 35, "Setter", "one", ""), ru(e, t), o;
        256 & a && yp(e, 35, "Getter", "no", "s");
        512 & a && 14 === e.token && yp(e, 36);
        t = 134217728 ^ (134217728 | t);
        let r = 0, c = 0;
        for (; 18 !== e.token;) {
          let l = null;
          const {tokenPos: p, linePos: u, colPos: d} = e;
          if (143360 & e.token ? (0 == (1024 & t) && (36864 == (36864 & e.token) && (e.flags |= 256), 537079808 == (537079808 & e.token) && (e.flags |= 512)), l = Xd(e, t, n, 1 | a, 0, p, u, d)) : (2162700 === e.token ? l = Dd(e, t, n, 1, s, 1, i, 0, p, u, d) : 69271571 === e.token ? l = Sd(e, t, n, 1, s, 1, i, 0, p, u, d) : 14 === e.token && (l = Id(e, t, n, 16, i, 0, 0, s, 1, p, u, d)), c = 1, 48 & e.destructible && yp(e, 48)), 1077936157 === e.token) {
            ru(e, 32768 | t), c = 1;
            l = _u(e, t, p, u, d, {
              type: "AssignmentPattern",
              left: l,
              right: ad(e, t, 1, 1, 0, e.tokenPos, e.linePos, e.colPos)
            })
          }
          if (r++, o.push(l), !xu(e, t, 18)) break;
          if (16 === e.token) break
        }
        512 & a && 1 !== r && yp(e, 35, "Setter", "one", "");
        n && void 0 !== n.scopeError && _p(n.scopeError);
        c && (e.flags |= 128);
        return Eu(e, t, 16), o
      }(e, 8388608 | t, c, n, 1, a);
      c && (c = Iu(c, 128));
      return _u(e, t, i, s, o, {
        type: "FunctionExpression",
        params: l,
        body: pd(e, -134230017 & t, c, 0, void 0, void 0),
        async: (16 & n) > 0,
        generator: (8 & n) > 0,
        id: null
      })
    }

    function Dd(e, t, n, a, i, s, o, r, c, l, p) {
      ru(e, t);
      const u = [];
      let d = 0, m = 0;
      for (t = 134217728 ^ (134217728 | t); 1074790415 !== e.token;) {
        const {token: a, tokenValue: c, linePos: l, colPos: p, tokenPos: h} = e;
        if (14 === a) u.push(Id(e, t, n, 1074790415, o, r, 0, i, s, h, l, p)); else {
          let f, g = 0, b = null;
          const x = e.token;
          if (143360 & e.token || 121 === e.token) if (b = Ad(e, t, 0), 18 === e.token || 1074790415 === e.token || 1077936157 === e.token) if (g |= 4, 1024 & t && 537079808 == (537079808 & a) ? d |= 16 : ku(e, t, o, a, 0), n && Nu(e, t, n, c, o, r), xu(e, 32768 | t, 1077936157)) {
            d |= 8;
            const n = ad(e, t, 1, 1, i, e.tokenPos, e.linePos, e.colPos);
            d |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0, f = _u(e, t, h, l, p, {
              type: "AssignmentPattern",
              left: -2147483648 & t ? Object.assign({}, b) : b,
              right: n
            })
          } else d |= (209008 === a ? 128 : 0) | (121 === a ? 16 : 0), f = -2147483648 & t ? Object.assign({}, b) : b; else if (xu(e, 32768 | t, 21)) {
            const {tokenPos: l, linePos: p, colPos: u} = e;
            if ("__proto__" === c && m++, 143360 & e.token) {
              const a = e.token, c = e.tokenValue;
              d |= 121 === x ? 16 : 0, f = hd(e, t, o, 0, 1, 0, i, 1, l, p, u);
              const {token: m} = e;
              f = dd(e, t, f, i, 0, l, p, u), 18 === e.token || 1074790415 === e.token ? 1077936157 === m || 1074790415 === m || 18 === m ? (d |= 128 & e.destructible ? 128 : 0, 2 & e.assignable ? d |= 16 : n && 143360 == (143360 & a) && Nu(e, t, n, c, o, r)) : d |= 1 & e.assignable ? 32 : 16 : 4194304 == (4194304 & e.token) ? (2 & e.assignable ? d |= 16 : 1077936157 !== m ? d |= 32 : n && Nu(e, t, n, c, o, r), f = od(e, t, i, s, l, p, u, f)) : (d |= 16, 8454144 == (8454144 & e.token) && (f = ld(e, t, 1, l, p, u, 4, m, f)), xu(e, 32768 | t, 22) && (f = cd(e, t, f, l, p, u)))
            } else 2097152 == (2097152 & e.token) ? (f = 69271571 === e.token ? Sd(e, t, n, 0, i, s, o, r, l, p, u) : Dd(e, t, n, 0, i, s, o, r, l, p, u), d = e.destructible, e.assignable = 16 & d ? 2 : 1, 18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : 8 & e.destructible ? yp(e, 69) : (f = dd(e, t, f, i, 0, l, p, u), d = 2 & e.assignable ? 16 : 0, 4194304 == (4194304 & e.token) ? f = rd(e, t, i, s, l, p, u, f) : (8454144 == (8454144 & e.token) && (f = ld(e, t, 1, l, p, u, 4, a, f)), xu(e, 32768 | t, 22) && (f = cd(e, t, f, l, p, u)), d |= 2 & e.assignable ? 16 : 32))) : (f = ud(e, t, 1, i, 1, l, p, u), d |= 1 & e.assignable ? 32 : 16, 18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : (f = dd(e, t, f, i, 0, l, p, u), d = 2 & e.assignable ? 16 : 0, 18 !== e.token && 1074790415 !== a && (1077936157 !== e.token && (d |= 16), f = od(e, t, i, s, l, p, u, f))))
          } else 69271571 === e.token ? (d |= 16, 209007 === a && (g |= 16), g |= 2 | (12402 === a ? 256 : 12403 === a ? 512 : 1), b = Ld(e, t, i), d |= e.assignable, f = Nd(e, t, g, i, e.tokenPos, e.linePos, e.colPos)) : 143360 & e.token ? (d |= 16, 121 === a && yp(e, 93), 209007 === a && (1 & e.flags && yp(e, 129), g |= 16), b = Ad(e, t, 0), g |= 12402 === a ? 256 : 12403 === a ? 512 : 1, f = Nd(e, t, g, i, e.tokenPos, e.linePos, e.colPos)) : 67174411 === e.token ? (d |= 16, g |= 1, f = Nd(e, t, g, i, e.tokenPos, e.linePos, e.colPos)) : 8457014 === e.token ? (d |= 16, 12402 === a ? yp(e, 40) : 12403 === a ? yp(e, 41) : 143483 === a && yp(e, 93), ru(e, t), g |= 9 | (209007 === a ? 16 : 0), 143360 & e.token ? b = Ad(e, t, 0) : 134217728 == (134217728 & e.token) ? b = yd(e, t) : 69271571 === e.token ? (g |= 2, b = Ld(e, t, i), d |= e.assignable) : yp(e, 28, Zp[255 & e.token]), f = Nd(e, t, g, i, e.tokenPos, e.linePos, e.colPos)) : 134217728 == (134217728 & e.token) ? (209007 === a && (g |= 16), g |= 12402 === a ? 256 : 12403 === a ? 512 : 1, d |= 16, b = yd(e, t), f = Nd(e, t, g, i, e.tokenPos, e.linePos, e.colPos)) : yp(e, 130); else if (134217728 == (134217728 & e.token)) if (b = yd(e, t), 21 === e.token) {
            Eu(e, 32768 | t, 21);
            const {tokenPos: l, linePos: p, colPos: u} = e;
            if ("__proto__" === c && m++, 143360 & e.token) {
              f = hd(e, t, o, 0, 1, 0, i, 1, l, p, u);
              const {token: a, tokenValue: c} = e;
              f = dd(e, t, f, i, 0, l, p, u), 18 === e.token || 1074790415 === e.token ? 1077936157 === a || 1074790415 === a || 18 === a ? 2 & e.assignable ? d |= 16 : n && Nu(e, t, n, c, o, r) : d |= 1 & e.assignable ? 32 : 16 : 1077936157 === e.token ? (2 & e.assignable && (d |= 16), f = od(e, t, i, s, l, p, u, f)) : (d |= 16, f = od(e, t, i, s, l, p, u, f))
            } else 2097152 == (2097152 & e.token) ? (f = 69271571 === e.token ? Sd(e, t, n, 0, i, s, o, r, l, p, u) : Dd(e, t, n, 0, i, s, o, r, l, p, u), d = e.destructible, e.assignable = 16 & d ? 2 : 1, 18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : 8 != (8 & e.destructible) && (f = dd(e, t, f, i, 0, l, p, u), d = 2 & e.assignable ? 16 : 0, 4194304 == (4194304 & e.token) ? f = rd(e, t, i, s, l, p, u, f) : (8454144 == (8454144 & e.token) && (f = ld(e, t, 1, l, p, u, 4, a, f)), xu(e, 32768 | t, 22) && (f = cd(e, t, f, l, p, u)), d |= 2 & e.assignable ? 16 : 32))) : (f = ud(e, t, 1, 0, 1, l, p, u), d |= 1 & e.assignable ? 32 : 16, 18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : (f = dd(e, t, f, i, 0, l, p, u), d = 1 & e.assignable ? 0 : 16, 18 !== e.token && 1074790415 !== e.token && (1077936157 !== e.token && (d |= 16), f = od(e, t, i, s, l, p, u, f))))
          } else 67174411 === e.token ? (g |= 1, f = Nd(e, t, g, i, e.tokenPos, e.linePos, e.colPos), d = 16 | e.assignable) : yp(e, 131); else if (69271571 === e.token) if (b = Ld(e, t, i), d |= 256 & e.destructible ? 256 : 0, g |= 2, 21 === e.token) {
            ru(e, 32768 | t);
            const {tokenPos: c, linePos: l, colPos: p, tokenValue: u, token: m} = e;
            if (143360 & e.token) {
              f = hd(e, t, o, 0, 1, 0, i, 1, c, l, p);
              const {token: a} = e;
              f = dd(e, t, f, i, 0, c, l, p), 4194304 == (4194304 & e.token) ? (d |= 2 & e.assignable ? 16 : 1077936157 === a ? 0 : 32, f = rd(e, t, i, s, c, l, p, f)) : 18 === e.token || 1074790415 === e.token ? 1077936157 === a || 1074790415 === a || 18 === a ? 2 & e.assignable ? d |= 16 : n && 143360 == (143360 & m) && Nu(e, t, n, u, o, r) : d |= 1 & e.assignable ? 32 : 16 : (d |= 16, f = od(e, t, i, s, c, l, p, f))
            } else 2097152 == (2097152 & e.token) ? (f = 69271571 === e.token ? Sd(e, t, n, 0, i, s, o, r, c, l, p) : Dd(e, t, n, 0, i, s, o, r, c, l, p), d = e.destructible, e.assignable = 16 & d ? 2 : 1, 18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : 8 & d ? yp(e, 60) : (f = dd(e, t, f, i, 0, c, l, p), d = 2 & e.assignable ? 16 | d : 0, 4194304 == (4194304 & e.token) ? (1077936157 !== e.token && (d |= 16), f = rd(e, t, i, s, c, l, p, f)) : (8454144 == (8454144 & e.token) && (f = ld(e, t, 1, c, l, p, 4, a, f)), xu(e, 32768 | t, 22) && (f = cd(e, t, f, c, l, p)), d |= 2 & e.assignable ? 16 : 32))) : (f = ud(e, t, 1, 0, 1, c, l, p), d |= 1 & e.assignable ? 32 : 16, 18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : (f = dd(e, t, f, i, 0, c, l, p), d = 1 & e.assignable ? 0 : 16, 18 !== e.token && 1074790415 !== e.token && (1077936157 !== e.token && (d |= 16), f = od(e, t, i, s, c, l, p, f))))
          } else 67174411 === e.token ? (g |= 1, f = Nd(e, t, g, i, e.tokenPos, l, p), d = 16) : yp(e, 42); else if (8457014 === a) if (Eu(e, 32768 | t, 8457014), g |= 8, 143360 & e.token) {
            const {token: n, line: a, index: s} = e;
            b = Ad(e, t, 0), g |= 1, 67174411 === e.token ? (d |= 16, f = Nd(e, t, g, i, e.tokenPos, e.linePos, e.colPos)) : Cp(s, a, s, 209007 === n ? 44 : 12402 === n || 12403 === e.token ? 43 : 45, Zp[255 & n])
          } else 134217728 == (134217728 & e.token) ? (d |= 16, b = yd(e, t), g |= 1, f = Nd(e, t, g, i, h, l, p)) : 69271571 === e.token ? (d |= 16, g |= 3, b = Ld(e, t, i), f = Nd(e, t, g, i, e.tokenPos, e.linePos, e.colPos)) : yp(e, 123); else yp(e, 28, Zp[255 & a]);
          d |= 128 & e.destructible ? 128 : 0, e.destructible = d, u.push(_u(e, t, h, l, p, {
            type: "Property",
            key: b,
            value: f,
            kind: 768 & g ? 512 & g ? "set" : "get" : "init",
            computed: (2 & g) > 0,
            method: (1 & g) > 0,
            shorthand: (4 & g) > 0
          }))
        }
        if (d |= e.destructible, 18 !== e.token) break;
        ru(e, t)
      }
      Eu(e, t, 1074790415), m > 1 && (d |= 64);
      const h = _u(e, t, c, l, p, {type: s ? "ObjectPattern" : "ObjectExpression", properties: u});
      return !a && 4194304 & e.token ? wd(e, t, d, i, s, c, l, p, h) : (e.destructible = d, h)
    }

    function Ld(e, t, n) {
      ru(e, 32768 | t);
      const a = ad(e, 134217728 ^ (134217728 | t), 1, 0, n, e.tokenPos, e.linePos, e.colPos);
      return Eu(e, t, 20), a
    }

    function Rd(e, t, n, a, i) {
      const {tokenValue: s} = e, o = Ad(e, t, 0);
      if (e.assignable = 1, 10 === e.token) {
        let r;
        return 64 & t && (r = Su(e, t, s)), e.flags = 128 ^ (128 | e.flags), Md(e, t, r, [o], 0, n, a, i)
      }
      return o
    }

    function Pd(e, t, n, a, i, s, o, r, c, l) {
      s || yp(e, 55), i && yp(e, 49), e.flags &= -129;
      return Md(e, t, 64 & t ? Su(e, t, n) : void 0, [a], o, r, c, l)
    }

    function Od(e, t, n, a, i, s, o, r, c) {
      i || yp(e, 55);
      for (let t = 0; t < a.length; ++t) vu(e, a[t]);
      return Md(e, t, n, a, s, o, r, c)
    }

    function Md(e, t, n, a, i, s, o, r) {
      1 & e.flags && yp(e, 46), Eu(e, 32768 | t, 10), t = 15728640 ^ (15728640 | t) | i << 22;
      const c = 2162700 !== e.token;
      let l;
      if (n && void 0 !== n.scopeError && _p(n.scopeError), c) l = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos); else {
        switch (n && (n = Iu(n, 128)), l = pd(e, 134246400 ^ (134246400 | t), n, 16, void 0, void 0), e.token) {
          case 69271571:
            0 == (1 & e.flags) && yp(e, 113);
            break;
          case 67108877:
          case 67174409:
          case 22:
            yp(e, 114);
          case 67174411:
            0 == (1 & e.flags) && yp(e, 113), e.flags |= 1024
        }
        8454144 == (8454144 & e.token) && 0 == (1 & e.flags) && yp(e, 28, Zp[255 & e.token]), 33619968 == (33619968 & e.token) && yp(e, 122)
      }
      return e.assignable = 2, _u(e, t, s, o, r, {
        type: "ArrowFunctionExpression",
        params: a,
        body: l,
        async: 1 === i,
        expression: c
      })
    }

    function Bd(e, t, n, a, i) {
      Eu(e, t, 67174411), e.flags = 128 ^ (128 | e.flags);
      const s = [];
      if (xu(e, t, 16)) return s;
      t = 134217728 ^ (134217728 | t);
      let o = 0;
      for (; 18 !== e.token;) {
        let r;
        const {tokenPos: c, linePos: l, colPos: p} = e;
        if (143360 & e.token ? (0 == (1024 & t) && (36864 == (36864 & e.token) && (e.flags |= 256), 537079808 == (537079808 & e.token) && (e.flags |= 512)), r = Xd(e, t, n, 1 | i, 0, c, l, p)) : (2162700 === e.token ? r = Dd(e, t, n, 1, a, 1, i, 0, c, l, p) : 69271571 === e.token ? r = Sd(e, t, n, 1, a, 1, i, 0, c, l, p) : 14 === e.token ? r = Id(e, t, n, 16, i, 0, 0, a, 1, c, l, p) : yp(e, 28, Zp[255 & e.token]), o = 1, 48 & e.destructible && yp(e, 48)), 1077936157 === e.token) {
          ru(e, 32768 | t), o = 1;
          r = _u(e, t, c, l, p, {
            type: "AssignmentPattern",
            left: r,
            right: ad(e, t, 1, 1, a, e.tokenPos, e.linePos, e.colPos)
          })
        }
        if (s.push(r), !xu(e, t, 18)) break;
        if (16 === e.token) break
      }
      return o && (e.flags |= 128), n && (o || 1024 & t) && void 0 !== n.scopeError && _p(n.scopeError), Eu(e, t, 16), s
    }

    function Ud(e, t, n, a, i, s, o) {
      const {token: r} = e;
      if (67108864 & r) {
        if (67108877 === r) {
          ru(e, 1073741824 | t), e.assignable = 1;
          return Ud(e, t, _u(e, t, i, s, o, {
            type: "MemberExpression",
            object: n,
            computed: !1,
            property: md(e, t)
          }), 0, i, s, o)
        }
        if (69271571 === r) {
          ru(e, 32768 | t);
          const {tokenPos: r, linePos: c, colPos: l} = e, p = sd(e, t, a, 1, r, c, l);
          return Eu(e, t, 20), e.assignable = 1, Ud(e, t, _u(e, t, i, s, o, {
            type: "MemberExpression",
            object: n,
            computed: !0,
            property: p
          }), 0, i, s, o)
        }
        if (67174408 === r || 67174409 === r) return e.assignable = 2, Ud(e, t, _u(e, t, i, s, o, {
          type: "TaggedTemplateExpression",
          tag: n,
          quasi: 67174408 === e.token ? Ed(e, 65536 | t) : xd(e, t, e.tokenPos, e.linePos, e.colPos)
        }), 0, i, s, o)
      }
      return n
    }

    function Fd(e, t, n, a, i, s) {
      return 209008 === e.token && yp(e, 29), 2098176 & t && 241773 === e.token && yp(e, 30), 537079808 == (537079808 & e.token) && (e.flags |= 512), Pd(e, t, e.tokenValue, Ad(e, t, 0), 0, n, 1, a, i, s)
    }

    function Hd(e, t, n, a, i, s, o, r, c, l) {
      ru(e, 32768 | t);
      const p = 64 & t ? Iu({parent: void 0, type: 2}, 1024) : void 0;
      if (xu(e, t = 134217728 ^ (134217728 | t), 16)) return 10 === e.token ? (1 & o && yp(e, 46), Od(e, t, p, [], a, 1, r, c, l)) : _u(e, t, r, c, l, {
        type: "CallExpression",
        callee: n,
        arguments: []
      });
      let u = 0, d = null, m = 0;
      e.destructible = 384 ^ (384 | e.destructible);
      const h = [];
      for (; 16 !== e.token;) {
        const {token: a, tokenPos: o, linePos: f, colPos: g} = e;
        if (143360 & a) p && Du(e, t, p, e.tokenValue, i, 0), d = hd(e, t, i, 0, 1, 0, 1, 1, o, f, g), 16 === e.token || 18 === e.token ? 2 & e.assignable ? (u |= 16, m = 1) : 537079808 == (537079808 & a) ? e.flags |= 512 : 36864 == (36864 & a) && (e.flags |= 256) : (1077936157 === e.token ? m = 1 : u |= 16, d = dd(e, t, d, 1, 0, o, f, g), 16 !== e.token && 18 !== e.token && (d = od(e, t, 1, 0, o, f, g, d))); else if (2097152 & a) d = 2162700 === a ? Dd(e, t, p, 0, 1, 0, i, s, o, f, g) : Sd(e, t, p, 0, 1, 0, i, s, o, f, g), u |= e.destructible, m = 1, 16 !== e.token && 18 !== e.token && (8 & u && yp(e, 119), d = dd(e, t, d, 0, 0, o, f, g), u |= 16, 8454144 == (8454144 & e.token) && (d = ld(e, t, 1, r, c, l, 4, a, d)), xu(e, 32768 | t, 22) && (d = cd(e, t, d, r, c, l))); else {
          if (14 !== a) {
            for (d = ad(e, t, 1, 0, 0, o, f, g), u = e.assignable, h.push(d); xu(e, 32768 | t, 18);) h.push(ad(e, t, 1, 0, 0, o, f, g));
            return u |= e.assignable, Eu(e, t, 16), e.destructible = 16 | u, e.assignable = 2, _u(e, t, r, c, l, {
              type: "CallExpression",
              callee: n,
              arguments: h
            })
          }
          d = Id(e, t, p, 16, i, s, 1, 1, 0, o, f, g), u |= (16 === e.token ? 0 : 16) | e.destructible, m = 1
        }
        if (h.push(d), !xu(e, 32768 | t, 18)) break
      }
      return Eu(e, t, 16), u |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0, 10 === e.token ? (48 & u && yp(e, 25), (1 & e.flags || 1 & o) && yp(e, 46), 128 & u && yp(e, 29), 2098176 & t && 256 & u && yp(e, 30), m && (e.flags |= 128), Od(e, t, p, h, a, 1, r, c, l)) : (8 & u && yp(e, 60), e.assignable = 2, _u(e, t, r, c, l, {
        type: "CallExpression",
        callee: n,
        arguments: h
      }))
    }

    function jd(e, t, n, a, i, s, o) {
      let r = Gd(e, t = 16777216 ^ (16778240 | t));
      r.length && (i = e.tokenPos, s = e.linePos, o = e.colPos), e.leadingDecorators.length && (e.leadingDecorators.push(...r), r = e.leadingDecorators, e.leadingDecorators = []), ru(e, t);
      let c = null, l = null;
      const {tokenValue: p} = e;
      4096 & e.token && 20567 !== e.token ? (Au(e, t, e.token) && yp(e, 115), 537079808 == (537079808 & e.token) && yp(e, 116), n && (Du(e, t, n, p, 32, 0), a && 2 & a && Ru(e, p)), c = Ad(e, t, 0)) : 0 == (1 & a) && yp(e, 37, "Class");
      let u = t;
      xu(e, 32768 | t, 20567) ? (l = ud(e, t, 0, 0, 0, e.tokenPos, e.linePos, e.colPos), u |= 524288) : u = 524288 ^ (524288 | u);
      const d = zd(e, u, t, n, 2, 8, 0);
      return _u(e, t, i, s, o, 1 & t ? {
        type: "ClassDeclaration",
        id: c,
        superClass: l,
        decorators: r,
        body: d
      } : {type: "ClassDeclaration", id: c, superClass: l, body: d})
    }

    function Gd(e, t) {
      const n = [];
      if (1 & t) for (; 133 === e.token;) n.push(qd(e, t, e.tokenPos, e.linePos, e.colPos));
      return n
    }

    function qd(e, t, n, a, i) {
      ru(e, 32768 | t);
      let s = hd(e, t, 2, 0, 1, 0, 0, 1, n, a, i);
      return s = dd(e, t, s, 0, 0, n, a, i), _u(e, t, n, a, i, {type: "Decorator", expression: s})
    }

    function zd(e, t, n, a, i, s, o) {
      const {tokenPos: r, linePos: c, colPos: l} = e;
      Eu(e, 32768 | t, 2162700), t = 134217728 ^ (134217728 | t), e.flags = 32 ^ (32 | e.flags);
      const p = [];
      let u;
      for (; 1074790415 !== e.token;) {
        let s = 0;
        u = Gd(e, t), s = u.length, s > 0 && "constructor" === e.tokenValue && yp(e, 107), 1074790415 === e.token && yp(e, 106), xu(e, t, 1074790417) ? s > 0 && yp(e, 117) : p.push(Yd(e, t, a, n, i, u, 0, o, e.tokenPos, e.linePos, e.colPos))
      }
      return Eu(e, 8 & s ? 32768 | t : t, 1074790415), _u(e, t, r, c, l, {type: "ClassBody", body: p})
    }

    function Yd(e, t, n, a, i, s, o, r, c, l, p) {
      let u = o ? 32 : 0, d = null;
      const {token: m, tokenPos: h, linePos: f, colPos: g} = e;
      if (176128 & m) switch (d = Ad(e, t, 0), m) {
        case 36972:
          if (!o && 67174411 !== e.token) return Yd(e, t, n, a, i, s, 1, r, c, l, p);
          break;
        case 209007:
          if (67174411 !== e.token && 0 == (1 & e.flags)) {
            if (1 & t && 1073741824 == (1073741824 & e.token)) return Wd(e, t, d, u, s, h, f, g);
            u |= 16 | (bu(e, t, 8457014) ? 8 : 0)
          }
          break;
        case 12402:
          if (67174411 !== e.token) {
            if (1 & t && 1073741824 == (1073741824 & e.token)) return Wd(e, t, d, u, s, h, f, g);
            u |= 256
          }
          break;
        case 12403:
          if (67174411 !== e.token) {
            if (1 & t && 1073741824 == (1073741824 & e.token)) return Wd(e, t, d, u, s, h, f, g);
            u |= 512
          }
      } else if (69271571 === m) u |= 2, d = Ld(e, a, r); else if (134217728 == (134217728 & m)) d = yd(e, t); else if (8457014 === m) u |= 8, ru(e, t); else if (1 & t && 131 === e.token) u |= 4096, d = Vd(e, 16384 | t, h, f, g); else if (1 & t && 1073741824 == (1073741824 & e.token)) u |= 128; else {
        if (o && 2162700 === m) return function (e, t, n, a, i, s) {
          n && (n = Iu(n, 2));
          const o = 540672;
          t = (t | o) ^ o | 262144;
          const {body: r} = ju(e, t, n, {}, a, i, s);
          return _u(e, t, a, i, s, {type: "StaticBlock", body: r})
        }(e, t, n, h, f, g);
        122 === m ? (d = Ad(e, t, 0), 67174411 !== e.token && yp(e, 28, Zp[255 & e.token])) : yp(e, 28, Zp[255 & e.token])
      }
      if (792 & u && (143360 & e.token ? d = Ad(e, t, 0) : 134217728 == (134217728 & e.token) ? d = yd(e, t) : 69271571 === e.token ? (u |= 2, d = Ld(e, t, 0)) : 122 === e.token ? d = Ad(e, t, 0) : 1 & t && 131 === e.token ? (u |= 4096, d = Vd(e, t, h, f, g)) : yp(e, 132)), 0 == (2 & u) && ("constructor" === e.tokenValue ? (1073741824 == (1073741824 & e.token) ? yp(e, 126) : 0 == (32 & u) && 67174411 === e.token && (920 & u ? yp(e, 51, "accessor") : 0 == (524288 & t) && (32 & e.flags ? yp(e, 52) : e.flags |= 32)), u |= 64) : 0 == (4096 & u) && 824 & u && "prototype" === e.tokenValue && yp(e, 50)), 1 & t && 67174411 !== e.token) return Wd(e, t, d, u, s, h, f, g);
      const b = Nd(e, t, u, r, e.tokenPos, e.linePos, e.colPos);
      return _u(e, t, c, l, p, 1 & t ? {
        type: "MethodDefinition",
        kind: 0 == (32 & u) && 64 & u ? "constructor" : 256 & u ? "get" : 512 & u ? "set" : "method",
        static: (32 & u) > 0,
        computed: (2 & u) > 0,
        key: d,
        decorators: s,
        value: b
      } : {
        type: "MethodDefinition",
        kind: 0 == (32 & u) && 64 & u ? "constructor" : 256 & u ? "get" : 512 & u ? "set" : "method",
        static: (32 & u) > 0,
        computed: (2 & u) > 0,
        key: d,
        value: b
      })
    }

    function Vd(e, t, n, a, i) {
      ru(e, t);
      const {tokenValue: s} = e;
      return "constructor" === s && yp(e, 125), ru(e, t), _u(e, t, n, a, i, {type: "PrivateIdentifier", name: s})
    }

    function Wd(e, t, n, a, i, s, o, r) {
      let c = null;
      if (8 & a && yp(e, 0), 1077936157 === e.token) {
        ru(e, 32768 | t);
        const {tokenPos: n, linePos: a, colPos: i} = e;
        537079928 === e.token && yp(e, 116), c = hd(e, 16384 | t, 2, 0, 1, 0, 0, 1, n, a, i), 1073741824 != (1073741824 & e.token) && (c = dd(e, 16384 | t, c, 0, 0, n, a, i), c = od(e, 16384 | t, 0, 0, n, a, i, c), 18 === e.token && (c = id(e, t, 0, s, o, r, c)))
      }
      return _u(e, t, s, o, r, {
        type: "PropertyDefinition",
        key: n,
        value: c,
        static: (32 & a) > 0,
        computed: (2 & a) > 0,
        decorators: i
      })
    }

    function Qd(e, t, n, a, i, s, o, r) {
      if (143360 & e.token) return Xd(e, t, n, a, i, s, o, r);
      2097152 != (2097152 & e.token) && yp(e, 28, Zp[255 & e.token]);
      const c = 69271571 === e.token ? Sd(e, t, n, 1, 0, 1, a, i, s, o, r) : Dd(e, t, n, 1, 0, 1, a, i, s, o, r);
      return 16 & e.destructible && yp(e, 48), 32 & e.destructible && yp(e, 48), c
    }

    function Xd(e, t, n, a, i, s, o, r) {
      const {tokenValue: c, token: l} = e;
      return 1024 & t && (537079808 == (537079808 & l) ? yp(e, 116) : 36864 == (36864 & l) && yp(e, 115)), 20480 == (20480 & l) && yp(e, 100), 2099200 & t && 241773 === l && yp(e, 30), 241739 === l && 24 & a && yp(e, 98), 4196352 & t && 209008 === l && yp(e, 96), ru(e, t), n && Nu(e, t, n, c, a, i), _u(e, t, s, o, r, {
        type: "Identifier",
        name: c
      })
    }

    function Kd(e, t, n, a, i, s) {
      if (ru(e, t), 8456259 === e.token) return _u(e, t, a, i, s, {
        type: "JSXFragment",
        openingFragment: $d(e, t, a, i, s),
        children: Zd(e, t),
        closingFragment: Jd(e, t, n, e.tokenPos, e.linePos, e.colPos)
      });
      let o = null, r = [];
      const c = function (e, t, n, a, i, s) {
        143360 != (143360 & e.token) && 4096 != (4096 & e.token) && yp(e, 0);
        const o = tm(e, t, e.tokenPos, e.linePos, e.colPos), r = function (e, t) {
          const n = [];
          for (; 8457016 !== e.token && 8456259 !== e.token && 1048576 !== e.token;) n.push(am(e, t, e.tokenPos, e.linePos, e.colPos));
          return n
        }(e, t), c = 8457016 === e.token;
        8456259 === e.token ? mu(e, t) : (Eu(e, t, 8457016), n ? Eu(e, t, 8456259) : mu(e, t));
        return _u(e, t, a, i, s, {type: "JSXOpeningElement", name: o, attributes: r, selfClosing: c})
      }(e, t, n, a, i, s);
      if (!c.selfClosing) {
        r = Zd(e, t), o = function (e, t, n, a, i, s) {
          Eu(e, t, 25);
          const o = tm(e, t, e.tokenPos, e.linePos, e.colPos);
          n ? Eu(e, t, 8456259) : e.token = mu(e, t);
          return _u(e, t, a, i, s, {type: "JSXClosingElement", name: o})
        }(e, t, n, e.tokenPos, e.linePos, e.colPos);
        const a = Cu(o.name);
        Cu(c.name) !== a && yp(e, 150, a)
      }
      return _u(e, t, a, i, s, {type: "JSXElement", children: r, openingElement: c, closingElement: o})
    }

    function $d(e, t, n, a, i) {
      return mu(e, t), _u(e, t, n, a, i, {type: "JSXOpeningFragment"})
    }

    function Jd(e, t, n, a, i, s) {
      return Eu(e, t, 25), Eu(e, t, 8456259), _u(e, t, a, i, s, {type: "JSXClosingFragment"})
    }

    function Zd(e, t) {
      const n = [];
      for (; 25 !== e.token;) e.index = e.tokenPos = e.startPos, e.column = e.colPos = e.startColumn, e.line = e.linePos = e.startLine, mu(e, t), n.push(em(e, t, e.tokenPos, e.linePos, e.colPos));
      return n
    }

    function em(e, t, n, a, i) {
      return 138 === e.token ? function (e, t, n, a, i) {
        mu(e, t);
        const s = {type: "JSXText", value: e.tokenValue};
        512 & t && (s.raw = e.tokenRaw);
        return _u(e, t, n, a, i, s)
      }(e, t, n, a, i) : 2162700 === e.token ? sm(e, t, 0, 0, n, a, i) : 8456258 === e.token ? Kd(e, t, 0, n, a, i) : void yp(e, 0)
    }

    function tm(e, t, n, a, i) {
      hu(e);
      let s = om(e, t, n, a, i);
      if (21 === e.token) return im(e, t, s, n, a, i);
      for (; xu(e, t, 67108877);) hu(e), s = nm(e, t, s, n, a, i);
      return s
    }

    function nm(e, t, n, a, i, s) {
      return _u(e, t, a, i, s, {
        type: "JSXMemberExpression",
        object: n,
        property: om(e, t, e.tokenPos, e.linePos, e.colPos)
      })
    }

    function am(e, t, n, a, i) {
      if (2162700 === e.token) return function (e, t, n, a, i) {
        ru(e, t), Eu(e, t, 14);
        const s = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
        return Eu(e, t, 1074790415), _u(e, t, n, a, i, {type: "JSXSpreadAttribute", argument: s})
      }(e, t, n, a, i);
      hu(e);
      let s = null, o = om(e, t, n, a, i);
      if (21 === e.token && (o = im(e, t, o, n, a, i)), 1077936157 === e.token) {
        const n = du(e, t), {tokenPos: a, linePos: i, colPos: o} = e;
        switch (n) {
          case 134283267:
            s = yd(e, t);
            break;
          case 8456258:
            s = Kd(e, t, 1, a, i, o);
            break;
          case 2162700:
            s = sm(e, t, 1, 1, a, i, o);
            break;
          default:
            yp(e, 149)
        }
      }
      return _u(e, t, n, a, i, {type: "JSXAttribute", value: s, name: o})
    }

    function im(e, t, n, a, i, s) {
      Eu(e, t, 21);
      return _u(e, t, a, i, s, {
        type: "JSXNamespacedName",
        namespace: n,
        name: om(e, t, e.tokenPos, e.linePos, e.colPos)
      })
    }

    function sm(e, t, n, a, i, s, o) {
      ru(e, 32768 | t);
      const {tokenPos: r, linePos: c, colPos: l} = e;
      if (14 === e.token) return function (e, t, n, a, i) {
        Eu(e, t, 14);
        const s = ad(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
        return Eu(e, t, 1074790415), _u(e, t, n, a, i, {type: "JSXSpreadChild", expression: s})
      }(e, t, r, c, l);
      let p = null;
      return 1074790415 === e.token ? (a && yp(e, 152), p = function (e, t, n, a, i) {
        return e.startPos = e.tokenPos, e.startLine = e.linePos, e.startColumn = e.colPos, _u(e, t, n, a, i, {type: "JSXEmptyExpression"})
      }(e, t, e.startPos, e.startLine, e.startColumn)) : p = ad(e, t, 1, 0, 0, r, c, l), n ? Eu(e, t, 1074790415) : mu(e, t), _u(e, t, i, s, o, {
        type: "JSXExpressionContainer",
        expression: p
      })
    }

    function om(e, t, n, a, i) {
      const {tokenValue: s} = e;
      return ru(e, t), _u(e, t, n, a, i, {type: "JSXIdentifier", name: s})
    }

    function rm(e, t) {
      return Bu(e, t, 0)
    }

    var cm = n(360);
    const lm = class extends W {
      constructor() {
        super(), this.parseOptions = {
          ranges: !0,
          module: !0,
          globalReturn: !0
        }, this.generationOptions = {
          format: {
            quotes: "double",
            escapeless: !0,
            compact: !0
          }
        }, this.parse = rm, this.generate = cm.R
      }

      rewrite(e, t = {}) {
        return this.recast(e, t, "rewrite")
      }

      source(e, t = {}) {
        return this.recast(e, t, "source")
      }

      recast(e, t = {}, n = "") {
        try {
          const a = [], i = this.parse(e, this.parseOptions), s = {
            data: t, changes: [], input: e, ast: i, get slice() {
              return o
            }
          };
          let o = 0;
          this.iterate(i, ((e, t = null) => {
            t && t.inTransformer && (e.isTransformer = !0), e.parent = t, this.emit(e.type, e, s, n)
          })), s.changes.sort(((e, t) => e.start - t.start || e.end - t.end));
          for (const t of s.changes) "start" in t && "number" == typeof t.start && a.push(e.slice(o, t.start)), t.node && a.push("string" == typeof t.node ? t.node : (0, cm.R)(t.node, this.generationOptions)), "end" in t && "number" == typeof t.end && (o = t.end);
          return a.push(e.slice(o)), a.join("")
        } catch (t) {
          return e
        }
      }

      iterate(e, t) {
        "object" == typeof e && t && function e(t, n, a) {
          if ("object" != typeof t || !a) return;
          a(t, n, a);
          for (const n in t) "parent" !== n && (Array.isArray(t[n]) ? t[n].forEach((n => {
            n && e(n, t, a)
          })) : t[n] && e(t[n], t, a));
          "function" == typeof t.iterateEnd && t.iterateEnd()
        }(e, null, t)
      }
    };
    var pm = n(711);
    const um = {
      encode: e => e ? encodeURIComponent(e.toString().split("").map(((e, t) => t % 2 ? String.fromCharCode(2 ^ e.charCodeAt()) : e)).join("")) : e,
      decode(e) {
        if (!e) return e;
        let [t, ...n] = e.split("?");
        return decodeURIComponent(t).split("").map(((e, t) => t % 2 ? String.fromCharCode(2 ^ e.charCodeAt(0)) : e)).join("") + (n.length ? "?" + n.join("?") : "")
      }
    }, dm = {encode: e => e ? encodeURIComponent(e) : e, decode: e => e ? decodeURIComponent(e) : e}, mm = {
      encode(e) {
        if (!e) return e;
        e = e.toString();
        const t = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
        let n, a, i, s, o = "", r = e.length % 3;
        for (let r = 0; r < e.length;) {
          if ((a = e.charCodeAt(r++)) > 255 || (i = e.charCodeAt(r++)) > 255 || (s = e.charCodeAt(r++)) > 255) throw new TypeError("invalid character found");
          n = a << 16 | i << 8 | s, o += t[n >> 18 & 63] + t[n >> 12 & 63] + t[n >> 6 & 63] + t[63 & n]
        }
        return encodeURIComponent(r ? o.slice(0, r - 3) + "===".substr(r) : o)
      }, decode(e) {
        if (!e) return e;
        const t = {
          0: 52,
          1: 53,
          2: 54,
          3: 55,
          4: 56,
          5: 57,
          6: 58,
          7: 59,
          8: 60,
          9: 61,
          A: 0,
          B: 1,
          C: 2,
          D: 3,
          E: 4,
          F: 5,
          G: 6,
          H: 7,
          I: 8,
          J: 9,
          K: 10,
          L: 11,
          M: 12,
          N: 13,
          O: 14,
          P: 15,
          Q: 16,
          R: 17,
          S: 18,
          T: 19,
          U: 20,
          V: 21,
          W: 22,
          X: 23,
          Y: 24,
          Z: 25,
          a: 26,
          b: 27,
          c: 28,
          d: 29,
          e: 30,
          f: 31,
          g: 32,
          h: 33,
          i: 34,
          j: 35,
          k: 36,
          l: 37,
          m: 38,
          n: 39,
          o: 40,
          p: 41,
          q: 42,
          r: 43,
          s: 44,
          t: 45,
          u: 46,
          v: 47,
          w: 48,
          x: 49,
          y: 50,
          z: 51,
          "+": 62,
          "/": 63,
          "=": 64
        };
        let n;
        e = (e = decodeURIComponent(e.toString())).replace(/\s+/g, ""), e += "==".slice(2 - (3 & e.length));
        let a, i, s = "";
        for (let o = 0; o < e.length;) n = t[e.charAt(o++)] << 18 | t[e.charAt(o++)] << 12 | (a = t[e.charAt(o++)]) << 6 | (i = t[e.charAt(o++)]), s += 64 === a ? String.fromCharCode(n >> 16 & 255) : 64 === i ? String.fromCharCode(n >> 16 & 255, n >> 8 & 255) : String.fromCharCode(n >> 16 & 255, n >> 8 & 255, 255 & n);
        return s
      }
    };
    var hm = n(793);
    const fm = /^\s*([^;\s]*)(?:;|\s|$)/, gm = /^text\//i, bm = Object.create(null), xm = Object.create(null),
      Em = {lookup: vm};

    function vm(e) {
      if (!e || "string" != typeof e) return !1;
      const t = fm.exec(e), n = t && hm[t[1].toLowerCase()];
      return n && n.charset ? n.charset : !(!t || !gm.test(t[1])) && "UTF-8"
    }

    function km(e) {
      if (!e || "string" != typeof e) return !1;
      let t = -1 === e.indexOf("/") ? Am(e) : e;
      if (!t) return !1;
      if (-1 === t.indexOf("charset")) {
        const e = vm(t);
        e && (t += "; charset=" + e.toLowerCase())
      }
      return t
    }

    function Tm(e) {
      if (!e || "string" != typeof e) return !1;
      const t = fm.exec(e), n = t && bm[t[1].toLowerCase()];
      return !(!n || !n.length) && n[0]
    }

    function Am(e) {
      if (!e || "string" != typeof e) return !1;
      const t = function (e = "") {
        if (!e.includes(".")) return "";
        const t = e.split(".");
        return "." + t[t.length - 1]
      }("x." + e).toLowerCase().slice(1);
      return t && xm[t] || !1
    }

    function ym(e, t, n = !1) {
      return (!e.httpOnly || !n) && (e.domain.startsWith(".") ? !!t.url.hostname.endsWith(e.domain.slice(1)) : e.domain === t.url.hostname && ((!e.secure || "http:" !== t.url.protocol) && !!t.url.pathname.startsWith(e.path)))
    }

    function _m(e = [], t, n) {
      let a = "";
      for (const i of e) ym(i, t, n) && (a.length && (a += "; "), a += i.name, a += "=", a += i.value);
      return a
    }

    async function Cm(e) {
      const t = new Date;
      return (await e.getAll("cookies")).filter((n => {
        let a = !1;
        return n.set && (n.maxAge ? a = n.set.getTime() + 1e3 * n.maxAge < t : n.expires && (a = new Date(n.expires.toLocaleString()) < t)), !a || (e.delete("cookies", n.id), !1)
      }))
    }

    function Sm(e, t, n) {
      if (!t) return !1;
      const a = pm(e, {decodeValues: !1});
      for (const e of a) e.domain || (e.domain = "." + n.url.hostname), e.path || (e.path = "/"), e.domain.startsWith(".") || (e.domain = "." + e.domain), t.put("cookies", {
        ...e,
        id: `${e.domain}@${e.path}@${e.name}`,
        set: new Date(Date.now())
      });
      return !0
    }

    function wm(e, t) {
      return "object" === t && "data" === e || ["src", "href", "ping", "movie", "action", "poster", "profile", "background"].indexOf(e) > -1
    }

    function Im(e = "", t = {}, n = "", a = "") {
      return `self.__uv$bareData = ${JSON.stringify(t)};self.__uv$cookies = ${JSON.stringify(n)};self.__uv$referrer = ${JSON.stringify(a)};self.__uv$bareURL = ${JSON.stringify(e)}; `
    }

    function Nm(e, t, n, a, i, s, o, r) {
      return [{
        tagName: "script",
        nodeName: "script",
        childNodes: [{nodeName: "#text", value: Im(i, s, o, r)}],
        attrs: [{name: "__uv-script", value: "1", skip: !0}],
        skip: !0
      }, {
        tagName: "script",
        nodeName: "script",
        childNodes: [],
        attrs: [{name: "src", value: t, skip: !0}, {name: "__uv-script", value: "1", skip: !0}]
      }, {
        tagName: "script",
        nodeName: "script",
        childNodes: [],
        attrs: [{name: "src", value: n, skip: !0}, {name: "__uv-script", value: "1", skip: !0}]
      }, {
        tagName: "script",
        nodeName: "script",
        childNodes: [],
        attrs: [{name: "src", value: a, skip: !0}, {name: "__uv-script", value: "1", skip: !0}]
      }, {
        tagName: "script",
        nodeName: "script",
        childNodes: [],
        attrs: [{name: "src", value: e, skip: !0}, {name: "__uv-script", value: "1", skip: !0}]
      }]
    }

    function Dm(e) {
      return ["http-equiv", "integrity", "sandbox", "nonce", "crossorigin"].indexOf(e) > -1
    }

    function Lm(e) {
      return "srcdoc" === e
    }

    function Rm(e) {
      return "style" === e
    }

    function Pm(e) {
      return "srcset" === e || "imagesrcset" === e
    }

    function Om(e) {
      const {js: t} = e;
      t.on("CallExpression", ((e, t, n) => {
        if ("source" !== n) return !1;
        if (!Mm(e.callee)) return !1;
        switch (e.callee.property.name) {
          case"$wrap": {
            if (!e.arguments || e.parent.type !== cm.G.MemberExpression || e.parent.property !== e) return !1;
            const [n] = e.arguments;
            t.changes.push({start: e.callee.start, end: n.start}), e.iterateEnd = function () {
              t.changes.push({start: e.end - 2, end: e.end})
            }
          }
            break;
          case"$get":
          case"rewriteUrl": {
            const [n] = e.arguments;
            t.changes.push({start: e.callee.start, end: n.start}), e.iterateEnd = function () {
              t.changes.push({start: e.end - 1, end: e.end})
            }
          }
            break;
          case"rewrite": {
            const [n] = e.arguments;
            t.changes.push({start: e.callee.start, end: n.start}), e.iterateEnd = function () {
              t.changes.push({start: e.end - 1, end: e.end})
            }
          }
        }
      }))
    }

    function Mm(e) {
      return e.type === cm.G.MemberExpression && (!("rewrite" !== e.property.name || !Mm(e.object)) || e.object.type === cm.G.Identifier && "__uv" === e.object.name && !!["js", "$get", "$wrap", "rewriteUrl"].includes(e.property.name))
    }

    !function (e, t) {
      const n = ["nginx", "apache", void 0, "iana"];
      for (const a in hm) {
        const i = hm[a], s = i.extensions;
        if (!s || !s.length) return;
        e[a] = s;
        for (let e = 0; e < s.length; e++) {
          const o = s[e];
          if (t[o]) {
            const e = n.indexOf(hm[t[o]].source), a = n.indexOf(i.source);
            if ("application/octet-stream" !== t[o] && (e > a || e === a && "application/" === t[o].substr(0, 12))) continue
          }
          t[o] = a
        }
      }
    }(bm, xm);
    let Bm, Um;
    const Fm = new WeakMap, Hm = new WeakMap, jm = new WeakMap, Gm = new WeakMap, qm = new WeakMap;
    let zm = {
      get(e, t, n) {
        if (e instanceof IDBTransaction) {
          if ("done" === t) return Hm.get(e);
          if ("objectStoreNames" === t) return e.objectStoreNames || jm.get(e);
          if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return Wm(e[t])
      },
      set: (e, t, n) => (e[t] = n, !0),
      has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };

    function Ym(e) {
      return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Um || (Um = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function (...t) {
        return e.apply(Qm(this), t), Wm(Fm.get(this))
      } : function (...t) {
        return Wm(e.apply(Qm(this), t))
      } : function (t, ...n) {
        const a = e.call(Qm(this), t, ...n);
        return jm.set(a, t.sort ? t.sort() : [t]), Wm(a)
      }
    }

    function Vm(e) {
      return "function" == typeof e ? Ym(e) : (e instanceof IDBTransaction && function (e) {
        if (Hm.has(e)) return;
        const t = new Promise(((t, n) => {
          const a = () => {
            e.removeEventListener("complete", i), e.removeEventListener("error", s), e.removeEventListener("abort", s)
          }, i = () => {
            t(), a()
          }, s = () => {
            n(e.error || new DOMException("AbortError", "AbortError")), a()
          };
          e.addEventListener("complete", i), e.addEventListener("error", s), e.addEventListener("abort", s)
        }));
        Hm.set(e, t)
      }(e), t = e, (Bm || (Bm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => t instanceof e)) ? new Proxy(e, zm) : e);
      var t
    }

    function Wm(e) {
      if (e instanceof IDBRequest) return function (e) {
        const t = new Promise(((t, n) => {
          const a = () => {
            e.removeEventListener("success", i), e.removeEventListener("error", s)
          }, i = () => {
            t(Wm(e.result)), a()
          }, s = () => {
            n(e.error), a()
          };
          e.addEventListener("success", i), e.addEventListener("error", s)
        }));
        return t.then((t => {
          t instanceof IDBCursor && Fm.set(t, e)
        })).catch((() => {
        })), qm.set(t, e), t
      }(e);
      if (Gm.has(e)) return Gm.get(e);
      const t = Vm(e);
      return t !== e && (Gm.set(e, t), qm.set(t, e)), t
    }

    const Qm = e => qm.get(e);

    function Xm(e, t, {blocked: n, upgrade: a, blocking: i, terminated: s} = {}) {
      const o = indexedDB.open(e, t), r = Wm(o);
      return a && o.addEventListener("upgradeneeded", (e => {
        a(Wm(o.result), e.oldVersion, e.newVersion, Wm(o.transaction), e)
      })), n && o.addEventListener("blocked", (e => n(e.oldVersion, e.newVersion, e))), r.then((e => {
        s && e.addEventListener("close", (() => s())), i && e.addEventListener("versionchange", (e => i(e.oldVersion, e.newVersion, e)))
      })).catch((() => {
      })), r
    }

    const Km = ["get", "getKey", "getAll", "getAllKeys", "count"], $m = ["put", "add", "delete", "clear"], Jm = new Map;

    function Zm(e, t) {
      if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
      if (Jm.get(t)) return Jm.get(t);
      const n = t.replace(/FromIndex$/, ""), a = t !== n, i = $m.includes(n);
      if (!(n in (a ? IDBIndex : IDBObjectStore).prototype) || !i && !Km.includes(n)) return;
      const s = async function (e, ...t) {
        const s = this.transaction(e, i ? "readwrite" : "readonly");
        let o = s.store;
        return a && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && s.done]))[0]
      };
      return Jm.set(t, s), s
    }

    zm = (e => ({...e, get: (t, n, a) => Zm(t, n) || e.get(t, n, a), has: (t, n) => !!Zm(t, n) || e.has(t, n)}))(zm);
    const eh = globalThis.fetch, th = globalThis.WebSocket, nh = globalThis.Request, ah = globalThis.Response, ih = {
      prototype: {send: th.prototype.send},
      CLOSED: th.CLOSED,
      CLOSING: th.CLOSING,
      CONNECTING: th.CONNECTING,
      OPEN: th.OPEN
    }, sh = [101, 204, 205, 304], oh = [301, 302, 303, 307, 308];

    class rh extends Error {
      status;
      body;

      constructor(e, t) {
        super(t.message || t.code), this.status = e, this.body = t
      }
    }

    function ch(e, t) {
      const n = (65535 & e) + (65535 & t);
      return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }

    function lh(e, t, n, a, i, s) {
      return ch((o = ch(ch(t, e), ch(a, s))) << (r = i) | o >>> 32 - r, n);
      var o, r
    }

    function ph(e, t, n, a, i, s, o) {
      return lh(t & n | ~t & a, e, t, i, s, o)
    }

    function uh(e, t, n, a, i, s, o) {
      return lh(t & a | n & ~a, e, t, i, s, o)
    }

    function dh(e, t, n, a, i, s, o) {
      return lh(t ^ n ^ a, e, t, i, s, o)
    }

    function mh(e, t, n, a, i, s, o) {
      return lh(n ^ (t | ~a), e, t, i, s, o)
    }

    function hh(e, t) {
      e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
      let n = 1732584193, a = -271733879, i = -1732584194, s = 271733878;
      for (let t = 0; t < e.length; t += 16) {
        const o = n, r = a, c = i, l = s;
        n = ph(n, a, i, s, e[t], 7, -680876936), s = ph(s, n, a, i, e[t + 1], 12, -389564586), i = ph(i, s, n, a, e[t + 2], 17, 606105819), a = ph(a, i, s, n, e[t + 3], 22, -1044525330), n = ph(n, a, i, s, e[t + 4], 7, -176418897), s = ph(s, n, a, i, e[t + 5], 12, 1200080426), i = ph(i, s, n, a, e[t + 6], 17, -1473231341), a = ph(a, i, s, n, e[t + 7], 22, -45705983), n = ph(n, a, i, s, e[t + 8], 7, 1770035416), s = ph(s, n, a, i, e[t + 9], 12, -1958414417), i = ph(i, s, n, a, e[t + 10], 17, -42063), a = ph(a, i, s, n, e[t + 11], 22, -1990404162), n = ph(n, a, i, s, e[t + 12], 7, 1804603682), s = ph(s, n, a, i, e[t + 13], 12, -40341101), i = ph(i, s, n, a, e[t + 14], 17, -1502002290), a = ph(a, i, s, n, e[t + 15], 22, 1236535329), n = uh(n, a, i, s, e[t + 1], 5, -165796510), s = uh(s, n, a, i, e[t + 6], 9, -1069501632), i = uh(i, s, n, a, e[t + 11], 14, 643717713), a = uh(a, i, s, n, e[t], 20, -373897302), n = uh(n, a, i, s, e[t + 5], 5, -701558691), s = uh(s, n, a, i, e[t + 10], 9, 38016083), i = uh(i, s, n, a, e[t + 15], 14, -660478335), a = uh(a, i, s, n, e[t + 4], 20, -405537848), n = uh(n, a, i, s, e[t + 9], 5, 568446438), s = uh(s, n, a, i, e[t + 14], 9, -1019803690), i = uh(i, s, n, a, e[t + 3], 14, -187363961), a = uh(a, i, s, n, e[t + 8], 20, 1163531501), n = uh(n, a, i, s, e[t + 13], 5, -1444681467), s = uh(s, n, a, i, e[t + 2], 9, -51403784), i = uh(i, s, n, a, e[t + 7], 14, 1735328473), a = uh(a, i, s, n, e[t + 12], 20, -1926607734), n = dh(n, a, i, s, e[t + 5], 4, -378558), s = dh(s, n, a, i, e[t + 8], 11, -2022574463), i = dh(i, s, n, a, e[t + 11], 16, 1839030562), a = dh(a, i, s, n, e[t + 14], 23, -35309556), n = dh(n, a, i, s, e[t + 1], 4, -1530992060), s = dh(s, n, a, i, e[t + 4], 11, 1272893353), i = dh(i, s, n, a, e[t + 7], 16, -155497632), a = dh(a, i, s, n, e[t + 10], 23, -1094730640), n = dh(n, a, i, s, e[t + 13], 4, 681279174), s = dh(s, n, a, i, e[t], 11, -358537222), i = dh(i, s, n, a, e[t + 3], 16, -722521979), a = dh(a, i, s, n, e[t + 6], 23, 76029189), n = dh(n, a, i, s, e[t + 9], 4, -640364487), s = dh(s, n, a, i, e[t + 12], 11, -421815835), i = dh(i, s, n, a, e[t + 15], 16, 530742520), a = dh(a, i, s, n, e[t + 2], 23, -995338651), n = mh(n, a, i, s, e[t], 6, -198630844), s = mh(s, n, a, i, e[t + 7], 10, 1126891415), i = mh(i, s, n, a, e[t + 14], 15, -1416354905), a = mh(a, i, s, n, e[t + 5], 21, -57434055), n = mh(n, a, i, s, e[t + 12], 6, 1700485571), s = mh(s, n, a, i, e[t + 3], 10, -1894986606), i = mh(i, s, n, a, e[t + 10], 15, -1051523), a = mh(a, i, s, n, e[t + 1], 21, -2054922799), n = mh(n, a, i, s, e[t + 8], 6, 1873313359), s = mh(s, n, a, i, e[t + 15], 10, -30611744), i = mh(i, s, n, a, e[t + 6], 15, -1560198380), a = mh(a, i, s, n, e[t + 13], 21, 1309151649), n = mh(n, a, i, s, e[t + 4], 6, -145523070), s = mh(s, n, a, i, e[t + 11], 10, -1120210379), i = mh(i, s, n, a, e[t + 2], 15, 718787259), a = mh(a, i, s, n, e[t + 9], 21, -343485551), n = ch(n, o), a = ch(a, r), i = ch(i, c), s = ch(s, l)
      }
      return [n, a, i, s]
    }

    function fh(e) {
      let t = "";
      const n = 32 * e.length;
      for (let a = 0; a < n; a += 8) t += String.fromCharCode(e[a >> 5] >>> a % 32 & 255);
      return t
    }

    function gh(e) {
      const t = [], n = e.length >> 2;
      for (let e = 0; e < n; e += 1) t[e] = 0;
      const a = 8 * e.length;
      for (let n = 0; n < a; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
      return t
    }

    function bh(e) {
      const t = "0123456789abcdef";
      let n = "";
      for (let a = 0; a < e.length; a += 1) {
        const i = e.charCodeAt(a);
        n += t.charAt(i >>> 4 & 15) + t.charAt(15 & i)
      }
      return n
    }

    function xh(e) {
      return unescape(encodeURIComponent(e))
    }

    function Eh(e) {
      return function (e) {
        return fh(hh(gh(e), 8 * e.length))
      }(xh(e))
    }

    function vh(e, t) {
      return function (e, t) {
        let n = gh(e);
        const a = [], i = [];
        n.length > 16 && (n = hh(n, 8 * e.length));
        for (let e = 0; e < 16; e += 1) a[e] = 909522486 ^ n[e], i[e] = 1549556828 ^ n[e];
        const s = hh(a.concat(gh(t)), 512 + 8 * t.length);
        return fh(hh(i.concat(s), 640))
      }(xh(e), xh(t))
    }

    function kh(e, t, n) {
      return t ? n ? vh(t, e) : bh(vh(t, e)) : n ? Eh(e) : bh(Eh(e))
    }

    const Th = 3072;

    function Ah(e) {
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(n)) return !1
      }
      return !0
    }

    const yh = [["v3", class extends class {
      base;

      constructor(e, t) {
        this.base = new URL(`./v${e}/`, t)
      }
    } {
      ws;
      http;

      constructor(e) {
        super(3, e), this.ws = new URL(this.base), this.http = new URL(this.base), "https:" === this.ws.protocol ? this.ws.protocol = "wss:" : this.ws.protocol = "ws:"
      }

      connect(e, t, n, a, i) {
        const s = new th(this.ws), o = () => {
          s.removeEventListener("close", r), s.removeEventListener("message", c)
        }, r = () => {
          o()
        }, c = e => {
          if (o(), "string" != typeof e.data) throw new TypeError("the first websocket message was not a text frame");
          const t = JSON.parse(e.data);
          if ("open" !== t.type) throw new TypeError("message was not of open type");
          e.stopImmediatePropagation(), a({
            protocol: t.protocol,
            setCookies: t.setCookies
          }), i(ih.OPEN), s.dispatchEvent(new Event("open"))
        };
        return s.addEventListener("close", r), s.addEventListener("message", c), s.addEventListener("open", (a => {
          a.stopImmediatePropagation(), i(ih.CONNECTING), n().then((n => ih.prototype.send.call(s, JSON.stringify({
            type: "connect",
            remote: e.toString(),
            protocols: t,
            headers: n,
            forwardHeaders: []
          }))))
        }), {once: !0}), s
      }

      async request(e, t, n, a, i, s) {
        if (a.protocol.startsWith("blob:")) {
          const e = await eh(a), t = new ah(e.body, e);
          return t.rawHeaders = Object.fromEntries(e.headers), t.rawResponse = e, t
        }
        const o = {};
        if (t instanceof Headers) for (const [e, n] of t) o[e] = n; else for (const e in t) o[e] = t[e];
        const r = {credentials: "omit", method: e, signal: s, duplex: "half"};
        "only-if-cached" !== i && (r.cache = i), void 0 !== n && (r.body = n), r.headers = this.createBareHeaders(a, o);
        const c = new nh(this.http + "?cache=" + kh(a.toString()), r), l = await eh(c),
          p = await this.readBareResponse(l), u = new ah(sh.includes(p.status) ? void 0 : l.body, {
            status: p.status,
            statusText: p.statusText ?? void 0,
            headers: new Headers(p.headers)
          });
        return u.rawHeaders = p.headers, u.rawResponse = l, u
      }

      async readBareResponse(e) {
        if (!e.ok) throw new rh(e.status, await e.json());
        const t = function (e) {
          const t = new Headers(e), n = "x-bare-headers";
          if (e.has(`${n}-0`)) {
            const a = [];
            for (const [i, s] of e) if (i.startsWith(n)) {
              if (!s.startsWith(";")) throw new rh(400, {
                code: "INVALID_BARE_HEADER",
                id: `request.headers.${i}`,
                message: "Value didn't begin with semi-colon."
              });
              a[parseInt(i.slice(n.length + 1))] = s.slice(1), t.delete(i)
            }
            t.set(n, a.join(""))
          }
          return t
        }(e.headers), n = {}, a = t.get("x-bare-status");
        null !== a && (n.status = parseInt(a));
        const i = t.get("x-bare-status-text");
        null !== i && (n.statusText = i);
        const s = t.get("x-bare-headers");
        return null !== s && (n.headers = JSON.parse(s)), n
      }

      createBareHeaders(e, t, n = [], a = [], i = []) {
        const s = new Headers;
        s.set("x-bare-url", e.toString()), s.set("x-bare-headers", JSON.stringify(t));
        for (const e of n) s.append("x-bare-forward-headers", e);
        for (const e of a) s.append("x-bare-pass-headers", e);
        for (const e of i) s.append("x-bare-pass-status", e.toString());
        return function (e) {
          const t = new Headers(e);
          if (e.has("x-bare-headers")) {
            const n = e.get("x-bare-headers");
            if (n.length > Th) {
              t.delete("x-bare-headers");
              let e = 0;
              for (let a = 0; a < n.length; a += Th) {
                const i = n.slice(a, a + Th), s = e++;
                t.set(`x-bare-headers-${s}`, `;${i}`)
              }
            }
          }
        }(s), s
      }
    }]];

    async function _h(e, t) {
      const n = await eh(e, {signal: t});
      if (!n.ok) throw new Error(`Unable to fetch Bare meta: ${n.status} ${await n.text()}`);
      return await n.json()
    }

    const Ch = Object.getOwnPropertyDescriptor(th.prototype, "readyState").get, Sh = ["ws:", "wss:"];

    class wh {
      manfiest;
      client;
      server;
      working;
      onDemand;
      onDemandSignal;

      constructor(e, t) {
        this.server = new URL(e), !t || t instanceof AbortSignal ? (this.onDemand = !0, this.onDemandSignal = t) : (this.onDemand = !1, this.loadManifest(t))
      }

      loadManifest(e) {
        return this.manfiest = e, this.client = this.getClient(), this.client
      }

      demand() {
        return this.onDemand ? (this.working || (this.working = _h(this.server, this.onDemandSignal).then((e => this.loadManifest(e))).catch((e => {
          throw delete this.working, e
        }))), this.working) : this.client
      }

      getClient() {
        for (const [e, t] of yh) if (this.manfiest.versions.includes(e)) return new t(this.server);
        throw new Error("Unable to find compatible client version. Starting from v2.0.0, @tomphttp/bare-client only supports Bare servers v3+. For more information, see https://github.com/tomphttp/bare-client/")
      }

      createWebSocket(e, t = [], n) {
        if (!this.client) throw new TypeError("You need to wait for the client to finish fetching the manifest before creating any WebSockets. Try caching the manifest data before making this request.");
        try {
          e = new URL(e)
        } catch (t) {
          throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${e}' is invalid.`)
        }
        if (!Sh.includes(e.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${e.protocol}' is not allowed.`);
        Array.isArray(t) || (t = [t]), t = t.map(String);
        for (const e of t) if (!Ah(e)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${e}' is invalid.`);
        const a = this.client.connect(e, t, (async () => {
          const t = "function" == typeof n.headers ? await n.headers() : n.headers || {},
            a = t instanceof Headers ? Object.fromEntries(t) : t;
          return a.Host = e.host, a.Pragma = "no-cache", a["Cache-Control"] = "no-cache", a.Upgrade = "websocket", a.Connection = "Upgrade", a
        }), (e => {
          i = e.protocol, n.setCookiesCallback && n.setCookiesCallback(e.setCookies)
        }), (e => {
          s = e
        }), n.webSocketImpl || th);
        let i = "", s = ih.CONNECTING;
        const o = () => {
          const e = Ch.call(a);
          return e === ih.OPEN ? s : e
        };
        n.readyStateHook ? n.readyStateHook(a, o) : Object.defineProperty(a, "readyState", {
          get: o,
          configurable: !0,
          enumerable: !0
        });
        const r = () => {
          if (o() === ih.CONNECTING) return new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.")
        };
        n.sendErrorHook ? n.sendErrorHook(a, r) : a.send = function (...e) {
          const t = r();
          if (t) throw t;
          ih.prototype.send.call(this, ...e)
        }, n.urlHook ? n.urlHook(a, e) : Object.defineProperty(a, "url", {
          get: () => e.toString(),
          configurable: !0,
          enumerable: !0
        });
        const c = () => i;
        return n.protocolHook ? n.protocolHook(a, c) : Object.defineProperty(a, "protocol", {
          get: c,
          configurable: !0,
          enumerable: !0
        }), a
      }

      async fetch(e, t) {
        const n = function (e) {
          return "string" == typeof e || e instanceof URL
        }(e) ? new nh(e, t) : e, a = t?.headers || n.headers, i = a instanceof Headers ? Object.fromEntries(a) : a;
        let s = new URL(n.url);
        const o = await this.demand();
        for (let e = 0; ; e++) {
          "host" in i ? i.host = s.host : i.Host = s.host;
          const a = await o.request(n.method, i, n.body, s, n.cache, n.signal);
          a.finalURL = s.toString();
          const r = t?.redirect || n.redirect;
          if (!oh.includes(a.status)) return a;
          switch (r) {
            case"follow": {
              const t = a.headers.get("location");
              if (20 > e && null !== t) {
                s = new URL(t, s);
                continue
              }
              throw new TypeError("Failed to fetch")
            }
            case"error":
              throw new TypeError("Failed to fetch");
            case"manual":
              return a
          }
        }
      }
    }

    class Ih {
      constructor(e = {}) {
        this.prefix = e.prefix || "/service/", this.urlRegex = /^(#|about:|data:|mailto:)/, this.rewriteUrl = e.rewriteUrl || this.rewriteUrl, this.rewriteImport = e.rewriteImport || this.rewriteImport, this.sourceUrl = e.sourceUrl || this.sourceUrl, this.encodeUrl = e.encodeUrl || this.encodeUrl, this.decodeUrl = e.decodeUrl || this.decodeUrl, this.vanilla = "vanilla" in e && e.vanilla, this.meta = e.meta || {}, this.meta.base ||= void 0, this.meta.origin ||= "", this.bundleScript = e.bundle || "/uv.bundle.js", this.handlerScript = e.handler || "/uv.handler.js", this.clientScript = e.client || e.bundle && e.bundle.includes("uv.bundle.js") && e.bundle.replace("uv.bundle.js", "uv.client.js") || "/uv.client.js", this.configScript = e.config || "/uv.config.js", this.meta.url ||= this.meta.base || "", this.codec = Ih.codec, this.html = new Bn(this), this.css = new kp(this), this.js = new lm(this), this.openDB = this.constructor.openDB, this.master = "__uv", this.dataPrefix = "__uv$", this.attributePrefix = "__uv", this.createHtmlInject = Nm, this.createJsInject = Im, this.attrs = {
          isUrl: wm,
          isForbidden: Dm,
          isHtml: Lm,
          isSrcset: Pm,
          isStyle: Rm
        }, this.vanilla || this.implementUVMiddleware(), this.cookie = {
          validateCookie: ym,
          db: () => async function (e) {
            const t = await e("__op", 1, {
              upgrade(e) {
                e.createObjectStore("cookies", {keyPath: "id"}).createIndex("path", "path")
              }
            });
            return t.transaction(["cookies"], "readwrite").store.index("path"), t
          }(this.constructor.openDB),
          getCookies: Cm,
          setCookies: Sm,
          serialize: _m,
          setCookie: pm
        }
      }

      rewriteImport(e, t, n = this.meta) {
        return this.rewriteUrl(e, {...n, base: t})
      }

      rewriteUrl(e, t = this.meta) {
        if (!(e = new String(e).trim()) || this.urlRegex.test(e)) return e;
        if (e.startsWith("javascript:")) return "javascript:" + this.js.rewrite(e.slice("javascript:".length));
        try {
          return t.origin + this.prefix + this.encodeLUrl(new URL(e, t.base).href)
        } catch (n) {
          return t.origin + this.prefix + this.encodeLUrl(e)
        }
      }

      sourceUrl(e, t = this.meta) {
        if (!e || this.urlRegex.test(e)) return e;
        try {
          return new URL(this.decodeLUrl(e.slice(this.prefix.length + t.origin.length)), t.base).href
        } catch (n) {
          return this.decodeLUrl(e.slice(this.prefix.length + t.origin.length))
        }
      }

      encodeUrl(e) {
        return encodeURIComponent(e)
      }

      decodeUrl(e) {
        return decodeURIComponent(e)
      }

      encodeLUrl(str) {
        if (!str) return str;
        let result = "";
        let len = str.length;
        for (let i = 0; i < len; i++) {
          const char = str[i];
          result += i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char;
        }
        return encodeURIComponent(result);
      }

      decodeLUrl(str) {
        if (!str) return str;
        str = decodeURIComponent(str);
        let result = "";
        let len = str.length;
        for (let i = 0; i < len; i++) {
          const char = str[i];
          result += i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char;
        }
        return result;
      }

      implementUVMiddleware() {
        !function (e, t = e.meta) {
          const {html: n, js: a, attributePrefix: i} = e, s = i + "-attr-";
          n.on("attr", ((i, o) => {
            var r;
            "base" === i.node.tagName && "href" === i.name && i.options.document && (t.base = new URL(i.value, t.url)), "rewrite" === o && wm(i.name, i.tagName) && (i.node.setAttribute(s + i.name, i.value), i.value = e.rewriteUrl(i.value, t)), "rewrite" === o && Pm(i.name) && (i.node.setAttribute(s + i.name, i.value), i.value = n.wrapSrcset(i.value, t)), "rewrite" === o && Lm(i.name) && (i.node.setAttribute(s + i.name, i.value), i.value = n.rewrite(i.value, {
              ...t,
              document: !0,
              injectHead: i.options.injectHead || []
            })), "rewrite" === o && Rm(i.name) && (i.node.setAttribute(s + i.name, i.value), i.value = e.rewriteCSS(i.value, {context: "declarationList"})), "rewrite" === o && Dm(i.name) && (i.name = s + i.name), "rewrite" === o && (r = i.name, ["onafterprint", "onbeforeprint", "onbeforeunload", "onerror", "onhashchange", "onload", "onmessage", "onoffline", "ononline", "onpagehide", "onpopstate", "onstorage", "onunload", "onblur", "onchange", "oncontextmenu", "onfocus", "oninput", "oninvalid", "onreset", "onsearch", "onselect", "onsubmit", "onkeydown", "onkeypress", "onkeyup", "onclick", "ondblclick", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onwheel", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "onscroll", "oncopy", "oncut", "onpaste", "onabort", "oncanplay", "oncanplaythrough", "oncuechange", "ondurationchange", "onemptied", "onended", "onerror", "onloadeddata", "onloadedmetadata", "onloadstart", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onseeked", "onseeking", "onstalled", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"].indexOf(r) > -1) && (i.node.setAttribute(s + i.name, i.value), i.value = a.rewrite(i.value, t)), "source" === o && i.name.startsWith(s) && (i.node.hasAttribute(i.name.slice(s.length)) && i.node.removeAttribute(i.name.slice(s.length)), i.name = i.name.slice(s.length))
          }))
        }(this), function (e) {
          const {html: t, js: n, css: a} = e;
          t.on("text", ((e, t) => {
            "script" === e.element.tagName && (e.value = "rewrite" === t ? n.rewrite(e.value) : n.source(e.value)), "style" === e.element.tagName && (e.value = "rewrite" === t ? a.rewrite(e.value) : a.source(e.value))
          }))
        }(this), function (e) {
          const {html: t} = e;
          t.on("element", ((e, t) => "rewrite" === t && "head" === e.tagName && "injectHead" in e.options && void e.childNodes.unshift(...e.options.injectHead)))
        }(this), function (e) {
          const {css: t} = e;
          t.on("Url", ((t, n, a) => {
            t.value = "rewrite" === a ? e.rewriteUrl(t.value) : e.sourceUrl(t.value)
          }))
        }(this), function (e) {
          const {css: t} = e;
          t.on("Atrule", ((t, n, a) => {
            if ("import" !== t.name) return !1;
            const {data: i} = t.prelude.children.head;
            if ("Url" === i.type) return !1;
            i.value = "rewrite" === a ? e.rewriteUrl(i.value) : e.sourceUrl(i.value)
          }))
        }(this), function (e) {
          const {js: t} = e;
          t.on(cm.G.Literal, ((t, n, a) => {
            if (t.parent.type !== cm.G.ImportDeclaration && t.parent.type !== cm.G.ExportAllDeclaration && t.parent.type !== cm.G.ExportNamedDeclaration || t.parent.source !== t) return !1;
            n.changes.push({
              start: t.start + 1,
              end: t.end - 1,
              node: "rewrite" === a ? e.rewriteUrl(t.value) : e.sourceUrl(t.value)
            })
          }))
        }(this), function (e) {
          const {js: t} = e;
          t.on(cm.G.ImportExpression, ((t, n, a) => {
            if ("rewrite" !== a) return !1;
            n.changes.push({
              node: `__uv.rewriteImport(${JSON.stringify(e.meta.url)},`,
              start: t.source.start,
              end: t.source.start
            }), t.iterateEnd = function () {
              n.changes.push({node: ")", start: t.source.end, end: t.source.end})
            }
          }))
        }(this), function (e) {
          const {js: t} = e;
          t.on("MemberExpression", ((e, t, n) => {
            if ("Super" === e.object.type) return !1;
            if ("rewrite" === n && function (e) {
              if (!e.computed) return !1;
              const {property: t} = e;
              return t.type, !0
            }(e) && (t.changes.push({
              node: "__uv.$wrap((",
              start: e.property.start,
              end: e.property.start
            }), e.iterateEnd = function () {
              t.changes.push({node: "))", start: e.property.end, end: e.property.end})
            }), (!e.computed && "location" === e.property.name && "rewrite" === n || "__uv$location" === e.property.name && "source" === n) && t.changes.push({
              start: e.property.start,
              end: e.property.end,
              node: "rewrite" === n ? "__uv$setSource(__uv).__uv$location" : "location"
            }), (!e.computed && "top" === e.property.name && "rewrite" === n || "__uv$top" === e.property.name && "source" === n) && t.changes.push({
              start: e.property.start,
              end: e.property.end,
              node: "rewrite" === n ? "__uv$setSource(__uv).__uv$top" : "top"
            }), (!e.computed && "parent" === e.property.name && "rewrite" === n || "__uv$parent" === e.property.name && "source" === n) && t.changes.push({
              start: e.property.start,
              end: e.property.end,
              node: "rewrite" === n ? "__uv$setSource(__uv).__uv$parent" : "parent"
            }), e.computed || "postMessage" !== e.property.name || "rewrite" !== n || t.changes.push({
              start: e.property.start,
              end: e.property.end,
              node: "__uv$setSource(__uv).postMessage"
            }), (!e.computed && "eval" === e.property.name && "rewrite" === n || "__uv$eval" === e.property.name && "source" === n) && t.changes.push({
              start: e.property.start,
              end: e.property.end,
              node: "rewrite" === n ? "__uv$setSource(__uv).__uv$eval" : "eval"
            }), !e.computed && "__uv$setSource" === e.property.name && "source" === n && e.parent.type === cm.G.CallExpression) {
              const {parent: n, property: a} = e;
              t.changes.push({start: a.start - 1, end: n.end}), e.iterateEnd = function () {
                t.changes.push({start: a.start, end: n.end})
              }
            }
          }))
        }(this), function (e) {
          const {js: t} = e;
          t.on("CallExpression", ((e, t, n) => {
            if ("rewrite" !== n) return !1;
            if (!e.arguments.length) return !1;
            if ("Identifier" !== e.callee.type) return !1;
            if ("eval" !== e.callee.name) return !1;
            const [a] = e.arguments;
            t.changes.push({node: "__uv.js.rewrite(", start: a.start, end: a.start}), e.iterateEnd = function () {
              t.changes.push({node: ")", start: a.end, end: a.end})
            }
          }))
        }(this), function (e) {
          const {js: t} = e;
          t.on("Identifier", ((e, t, n) => {
            if ("rewrite" !== n) return !1;
            const {parent: a} = e;
            return !!["location", "eval", "parent", "top"].includes(e.name) && (a.type !== cm.G.VariableDeclarator || a.id !== e) && (a.type !== cm.G.AssignmentExpression && a.type !== cm.G.AssignmentPattern || a.left !== e) && (a.type !== cm.G.FunctionExpression && a.type !== cm.G.FunctionDeclaration || a.id !== e) && !(a.type === cm.G.MemberExpression && a.property === e && !a.computed) && ("eval" !== e.name || a.type !== cm.G.CallExpression || a.callee !== e) && (a.type !== cm.G.Property || a.key !== e) && (a.type !== cm.G.Property || a.value !== e || !a.shorthand) && (a.type !== cm.G.UpdateExpression || "++" !== a.operator && "--" !== a.operator) && (a.type !== cm.G.FunctionExpression && a.type !== cm.G.FunctionDeclaration && a.type !== cm.G.ArrowFunctionExpression || -1 === a.params.indexOf(e)) && a.type !== cm.G.MethodDefinition && a.type !== cm.G.ClassDeclaration && a.type !== cm.G.RestElement && a.type !== cm.G.ExportSpecifier && a.type !== cm.G.ImportSpecifier && void t.changes.push({
              start: e.start,
              end: e.end,
              node: "__uv.$get(" + e.name + ")"
            })
          }))
        }(this), Om(this)
      }

      get rewriteHtml() {
        return this.html.rewrite.bind(this.html)
      }

      get sourceHtml() {
        return this.html.source.bind(this.html)
      }

      get rewriteCSS() {
        return this.css.rewrite.bind(this.css)
      }

      get sourceCSS() {
        return this.css.source.bind(this.css)
      }

      get rewriteJS() {
        return this.js.rewrite.bind(this.js)
      }

      get sourceJS() {
        return this.js.source.bind(this.js)
      }

      static codec = {xor: um, base64: mm, plain: dm};
      static mime = V;
      static setCookie = pm;
      static openDB = Xm;
      static BareClient = wh;
      static EventEmitter = W
    }

    "object" == typeof self && (self.Ultraviolet = Ih)
  })()
})();
//# sourceMappingURL=uv.bundle.js.map
