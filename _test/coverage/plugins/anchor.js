/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/anchor.js']) {
  _$jscoverage['plugins/anchor.js'] = [];
  _$jscoverage['plugins/anchor.js'][12] = 0;
  _$jscoverage['plugins/anchor.js'][13] = 0;
  _$jscoverage['plugins/anchor.js'][15] = 0;
  _$jscoverage['plugins/anchor.js'][16] = 0;
  _$jscoverage['plugins/anchor.js'][22] = 0;
  _$jscoverage['plugins/anchor.js'][23] = 0;
  _$jscoverage['plugins/anchor.js'][24] = 0;
  _$jscoverage['plugins/anchor.js'][25] = 0;
  _$jscoverage['plugins/anchor.js'][26] = 0;
  _$jscoverage['plugins/anchor.js'][27] = 0;
  _$jscoverage['plugins/anchor.js'][35] = 0;
  _$jscoverage['plugins/anchor.js'][36] = 0;
  _$jscoverage['plugins/anchor.js'][37] = 0;
  _$jscoverage['plugins/anchor.js'][38] = 0;
  _$jscoverage['plugins/anchor.js'][39] = 0;
  _$jscoverage['plugins/anchor.js'][40] = 0;
  _$jscoverage['plugins/anchor.js'][44] = 0;
  _$jscoverage['plugins/anchor.js'][49] = 0;
  _$jscoverage['plugins/anchor.js'][51] = 0;
  _$jscoverage['plugins/anchor.js'][52] = 0;
  _$jscoverage['plugins/anchor.js'][53] = 0;
  _$jscoverage['plugins/anchor.js'][54] = 0;
  _$jscoverage['plugins/anchor.js'][56] = 0;
  _$jscoverage['plugins/anchor.js'][57] = 0;
  _$jscoverage['plugins/anchor.js'][60] = 0;
  _$jscoverage['plugins/anchor.js'][62] = 0;
  _$jscoverage['plugins/anchor.js'][63] = 0;
  _$jscoverage['plugins/anchor.js'][64] = 0;
  _$jscoverage['plugins/anchor.js'][68] = 0;
}
_$jscoverage['plugins/anchor.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///commands &#38170;&#28857;</span>","<span class=\"c\">///commandsName  Anchor</span>","<span class=\"c\">///commandsTitle  &#38170;&#28857;</span>","<span class=\"c\">///commandsDialog  dialogs\\anchor</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#38170;&#28857;</span>","<span class=\"c\"> * @function</span>","<span class=\"c\"> * @name baidu.editor.execCommands</span>","<span class=\"c\"> * @param {String} cmdName     cmdName=\"anchor\"&#25554;&#20837;&#38170;&#28857;</span>","<span class=\"c\"> */</span>","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'anchor'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","","    me<span class=\"k\">.</span>ready<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","        utils<span class=\"k\">.</span>cssRule<span class=\"k\">(</span><span class=\"s\">'anchor'</span><span class=\"k\">,</span>","            <span class=\"s\">'.anchorclass{background: url(</span><span class=\"t\">\\'</span><span class=\"s\">'</span>","                <span class=\"k\">+</span> me<span class=\"k\">.</span>options<span class=\"k\">.</span>UEDITOR_HOME_URL <span class=\"k\">+</span>","                <span class=\"s\">'themes/default/images/anchor.gif</span><span class=\"t\">\\'</span><span class=\"s\">) no-repeat scroll left center transparent;border: 1px dotted #0000FF;cursor: auto;display: inline-block;height: 16px;width: 15px;}'</span><span class=\"k\">,</span>","            me<span class=\"k\">.</span>document<span class=\"k\">)</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    me<span class=\"k\">.</span>addOutputRule<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>root<span class=\"k\">)</span><span class=\"k\">{</span>","        utils<span class=\"k\">.</span>each<span class=\"k\">(</span>root<span class=\"k\">.</span>getNodesByTagName<span class=\"k\">(</span><span class=\"s\">'img'</span><span class=\"k\">),</span><span class=\"k\">function</span><span class=\"k\">(</span>a<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> val<span class=\"k\">;</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>val <span class=\"k\">=</span> a<span class=\"k\">.</span>getAttr<span class=\"k\">(</span><span class=\"s\">'anchorname'</span><span class=\"k\">))</span><span class=\"k\">{</span>","                a<span class=\"k\">.</span>tagName <span class=\"k\">=</span> <span class=\"s\">'a'</span><span class=\"k\">;</span>","                a<span class=\"k\">.</span>setAttr<span class=\"k\">(</span><span class=\"k\">{</span>","                    anchorname <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">,</span>","                    name <span class=\"k\">:</span> val<span class=\"k\">,</span>","                    <span class=\"s\">'class'</span> <span class=\"k\">:</span> <span class=\"s\">''</span>","                <span class=\"k\">}</span><span class=\"k\">)</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">)</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    me<span class=\"k\">.</span>addInputRule<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>root<span class=\"k\">)</span><span class=\"k\">{</span>","        utils<span class=\"k\">.</span>each<span class=\"k\">(</span>root<span class=\"k\">.</span>getNodesByTagName<span class=\"k\">(</span><span class=\"s\">'a'</span><span class=\"k\">),</span><span class=\"k\">function</span><span class=\"k\">(</span>a<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> val<span class=\"k\">;</span>","            <span class=\"k\">if</span><span class=\"k\">((</span>val <span class=\"k\">=</span> a<span class=\"k\">.</span>getAttr<span class=\"k\">(</span><span class=\"s\">'name'</span><span class=\"k\">))</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!</span>a<span class=\"k\">.</span>getAttr<span class=\"k\">(</span><span class=\"s\">'href'</span><span class=\"k\">))</span><span class=\"k\">{</span>","                a<span class=\"k\">.</span>tagName <span class=\"k\">=</span> <span class=\"s\">'img'</span><span class=\"k\">;</span>","                a<span class=\"k\">.</span>setAttr<span class=\"k\">(</span><span class=\"k\">{</span>","                    anchorname <span class=\"k\">:</span>a<span class=\"k\">.</span>getAttr<span class=\"k\">(</span><span class=\"s\">'name'</span><span class=\"k\">),</span>","                    <span class=\"s\">'class'</span> <span class=\"k\">:</span> <span class=\"s\">'anchorclass'</span>","                <span class=\"k\">}</span><span class=\"k\">);</span>","                a<span class=\"k\">.</span>setAttr<span class=\"k\">(</span><span class=\"s\">'name'</span><span class=\"k\">)</span>","","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">)</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    me<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'anchor'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>","        execCommand<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>cmd<span class=\"k\">,</span> name<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> range <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">(),</span>img <span class=\"k\">=</span> range<span class=\"k\">.</span>getClosedNode<span class=\"k\">();</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>img <span class=\"k\">&amp;&amp;</span> img<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">'anchorname'</span><span class=\"k\">))</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>name<span class=\"k\">)</span> <span class=\"k\">{</span>","                    img<span class=\"k\">.</span>setAttribute<span class=\"k\">(</span><span class=\"s\">'anchorname'</span><span class=\"k\">,</span> name<span class=\"k\">);</span>","                <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                    range<span class=\"k\">.</span>setStartBefore<span class=\"k\">(</span>img<span class=\"k\">).</span>setCursor<span class=\"k\">();</span>","                    domUtils<span class=\"k\">.</span>remove<span class=\"k\">(</span>img<span class=\"k\">);</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>name<span class=\"k\">)</span> <span class=\"k\">{</span>","                    <span class=\"c\">//&#21482;&#22312;&#36873;&#21306;&#30340;&#24320;&#22987;&#25554;&#20837;</span>","                    <span class=\"k\">var</span> anchor <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>document<span class=\"k\">.</span>createElement<span class=\"k\">(</span><span class=\"s\">'img'</span><span class=\"k\">);</span>","                    range<span class=\"k\">.</span>collapse<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">);</span>","                    domUtils<span class=\"k\">.</span>setAttributes<span class=\"k\">(</span>anchor<span class=\"k\">,</span><span class=\"k\">{</span>","                        <span class=\"s\">'anchorname'</span><span class=\"k\">:</span>name<span class=\"k\">,</span>","                        <span class=\"s\">'class'</span><span class=\"k\">:</span><span class=\"s\">'anchorclass'</span>","                    <span class=\"k\">}</span><span class=\"k\">);</span>","                    range<span class=\"k\">.</span>insertNode<span class=\"k\">(</span>anchor<span class=\"k\">).</span>setStartAfter<span class=\"k\">(</span>anchor<span class=\"k\">).</span>setCursor<span class=\"k\">(</span><span class=\"k\">false</span><span class=\"k\">,</span><span class=\"k\">true</span><span class=\"k\">);</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","","    <span class=\"k\">}</span><span class=\"k\">;</span>","","","<span class=\"k\">}</span><span class=\"k\">;</span>"];
_$jscoverage['plugins/anchor.js'][12]++;
UE.plugins.anchor = (function () {
  _$jscoverage['plugins/anchor.js'][13]++;
  var me = this;
  _$jscoverage['plugins/anchor.js'][15]++;
  me.ready((function () {
  _$jscoverage['plugins/anchor.js'][16]++;
  utils.cssRule("anchor", (".anchorclass{background: url('" + me.options.UEDITOR_HOME_URL + "themes/default/images/anchor.gif') no-repeat scroll left center transparent;border: 1px dotted #0000FF;cursor: auto;display: inline-block;height: 16px;width: 15px;}"), me.document);
}));
  _$jscoverage['plugins/anchor.js'][22]++;
  me.addOutputRule((function (root) {
  _$jscoverage['plugins/anchor.js'][23]++;
  utils.each(root.getNodesByTagName("img"), (function (a) {
  _$jscoverage['plugins/anchor.js'][24]++;
  var val;
  _$jscoverage['plugins/anchor.js'][25]++;
  if ((val = a.getAttr("anchorname"))) {
    _$jscoverage['plugins/anchor.js'][26]++;
    a.tagName = "a";
    _$jscoverage['plugins/anchor.js'][27]++;
    a.setAttr({anchorname: "", name: val, "class": ""});
  }
}));
}));
  _$jscoverage['plugins/anchor.js'][35]++;
  me.addInputRule((function (root) {
  _$jscoverage['plugins/anchor.js'][36]++;
  utils.each(root.getNodesByTagName("a"), (function (a) {
  _$jscoverage['plugins/anchor.js'][37]++;
  var val;
  _$jscoverage['plugins/anchor.js'][38]++;
  if (((val = a.getAttr("name")) && (! a.getAttr("href")))) {
    _$jscoverage['plugins/anchor.js'][39]++;
    a.tagName = "img";
    _$jscoverage['plugins/anchor.js'][40]++;
    a.setAttr({anchorname: a.getAttr("name"), "class": "anchorclass"});
    _$jscoverage['plugins/anchor.js'][44]++;
    a.setAttr("name");
  }
}));
}));
  _$jscoverage['plugins/anchor.js'][49]++;
  me.commands.anchor = {execCommand: (function (cmd, name) {
  _$jscoverage['plugins/anchor.js'][51]++;
  var range = this.selection.getRange(), img = range.getClosedNode();
  _$jscoverage['plugins/anchor.js'][52]++;
  if ((img && img.getAttribute("anchorname"))) {
    _$jscoverage['plugins/anchor.js'][53]++;
    if (name) {
      _$jscoverage['plugins/anchor.js'][54]++;
      img.setAttribute("anchorname", name);
    }
    else {
      _$jscoverage['plugins/anchor.js'][56]++;
      range.setStartBefore(img).setCursor();
      _$jscoverage['plugins/anchor.js'][57]++;
      domUtils.remove(img);
    }
  }
  else {
    _$jscoverage['plugins/anchor.js'][60]++;
    if (name) {
      _$jscoverage['plugins/anchor.js'][62]++;
      var anchor = this.document.createElement("img");
      _$jscoverage['plugins/anchor.js'][63]++;
      range.collapse(true);
      _$jscoverage['plugins/anchor.js'][64]++;
      domUtils.setAttributes(anchor, {"anchorname": name, "class": "anchorclass"});
      _$jscoverage['plugins/anchor.js'][68]++;
      range.insertNode(anchor).setStartAfter(anchor).setCursor(false, true);
    }
  }
})};
});